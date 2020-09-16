interface RouterItem{
    path?:string;
    redirect?:History.LocationDescriptor<History.UnknownFacade>;
    routers?:RouterItem[];
    component?:React.FunctionComponentElement;
    to?:string;
    exact?:boolean;
}

export default RouterItem