import { ReactNode } from "react";

export default interface RouterItem {
    path?:string;
    redirect?:RouterItem;
    routers?:RouterItem[];
    to?:History.LocationDescriptor;
    component?:ReactDOM;
    exact?:boolean;
    icon?:ReactNode;
    title?:string;
}