import React,{createContext,useContext,useState,useEffect} from 'react';
import classNames from 'classnames';
import { MenuContext } from './menu';
type selectedCallBack = (selectedIndex:number|string) => void;
type mouseOverCallBack = (selectedKeys:number) => void;
interface MenuSubPorps {
    index?:number|string;
    title:string;
    keys?:number;
    disabled?:boolean;
    className?:string;
    ref?:React.Ref<HTMLLIElement>
    onSelect?:selectedCallBack;
    onMouseOver?:mouseOverCallBack;
}
interface IMenuContent {
    index:number|string;
    onMouseOver?:mouseOverCallBack;
    onSelect?:selectedCallBack;
    //onMouseOut?:mouseOutCallBack;
}
export const MenuSubContext = createContext<IMenuContent>( {index:0} );
const WetMenuSub:React.FC<MenuSubPorps> = React.forwardRef( (props:any,ref)=>{
    const {disabled,className,title,children,keys } = props;
    let [selectItem,setSelectItem] = useState(false) 
    let classes = classNames('wet-menu__item',className,{
        'disabled' : disabled,
        'actived'  : selectItem
    })
    let refsArray:any = [];
    useEffect(()=>{
        for(let i = 0;i<refsArray.length;i++){
            let item = refsArray[i].props;
            if(item.index === context.index){
                setSelectItem(true);
                break;
            }else{
                setSelectItem(false);
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    const context = useContext( MenuContext );
    const passedContent:IMenuContent = {
        index:0,
    }
    const handleMouseOver = () =>{
        if(context.onMouseOver &&!disabled && (typeof keys === 'number')){
            context.onMouseOver(keys)
        }
    }
    const renderChildren = (children:any[])=>{
        let newschildren:any = children.map((item,index)=>{
            const {displayName} = item.type
            if(displayName === 'WetMenuItem' || displayName === 'WetMenuSub'){
                let childrenEle =  React.cloneElement(item,{
                    keys:index,
                    key:index
                })
                return childrenEle
            }else{
                console.error('警告：非标准菜单子组件');
            }
        })
        refsArray = newschildren
        return newschildren
    }
    return(
        <li ref={ref} className={classes} 
        onMouseOver={handleMouseOver}>
            <span className="sub__title">{title}</span>
            <ul className="nav_sub">
                <MenuSubContext.Provider value = {passedContent}>
                    {renderChildren(children)}
                </MenuSubContext.Provider>
            </ul>
        </li>
    )
})

export default WetMenuSub