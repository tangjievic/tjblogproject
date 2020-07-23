interface MetaItem{
    keepalive?:boolean;
}
interface RedirectItem{
    name?:string;
    path?:string
}
export default interface RouterItem {
    path:string;
    name?:string;
    label?:string;
    icon?:string;
    component?:() => Promise<typeof import("*.vue")>;
    meta?:MetaItem;
    redirect?:RedirectItem;
    children?:RouterItem[];
    multiple?:RouterItem[];
}