import React,{useState,useEffect,createContext,useRef} from 'react';
import classNames from 'classnames';
import WetMenuItem from './menuItem';
import { MenuItemProps } from './menuItem';
import WetMenuSub from './menuSub';

// 在ts中，定义类型由两种方式：接口（interface）和类型别名（type alias）
// interface只能定义对象类型，type声明的方式可以定义组合类型，交叉类型和原始类型
// 如果用type alias 声明的方式，会导致一些功能的缺失
// 1.interface方式可以实现接口的extends/implements，而type 不行
// 2.interface可以实现接口的merge，但是type不行

type MenuMode = 'horizontal' | 'vertical'; //ts模板字符串量
type selectedCallBack = (selectedIndex:number|string) => void;
type mouseOverCallBack = (selectedKeys:number) => void;
//createContext 可以用来组件之间透传属性
export interface MenuProps {
    defaultIndex?:number|string;
    className?:string;
    mode?:MenuMode;
    style?:React.CSSProperties;
    onSelect?:selectedCallBack;
    onMouseOver?:mouseOverCallBack;
}
interface IMenuContent {
    index:number|string;
    onMouseOver?:mouseOverCallBack;
    onSelect?:selectedCallBack;
}

export const MenuContext = createContext<IMenuContent>( {index:0} );

const WetMenu:React.FC<MenuProps> = (props:any) =>{
    const {
        className,
        mode,
        style,
        children,
        defaultIndex,
        onSelect,
        onMouseOver,
    } = props;
    let refsArray:any = [];
    let temp_position:any = [];
    let a:any = {current:{
        clientWidth:0
    }};
    let cRef:any = useRef();
    let [theadPosition,settheadPosition] = useState([]);
    let [threadWith,setThreadWith] = useState(0);
    let [currentActive,setActive] = useState(defaultIndex);
    let [positionX,setPositionX] = useState(0);
    let [initMenu,setInitMenu] = useState(true)
    //组件dom数据初始化
    useEffect(()=>{
        refsArray.forEach((item:any,index:number)=>{
            temp_position.push(item.current.clientWidth)
            if(item.current.classList.contains('actived')){
                setThreadWith(item.current.clientWidth)
                let position = 0
                for(let i = 0;i<index;i++){
                    position  = position + temp_position[i]
                }
                setPositionX(position)
            }
        })
        settheadPosition(temp_position);
    },[initMenu])
    setTimeout(()=>{
        setInitMenu(!initMenu)
    },100)
    const classes = classNames('wet-menu',className,{
        'menu-vertical':mode === 'vertical',
        'menu-horizontal':mode !== 'vertical',
    })
    const handleClick = (index:number|string) => {
        //console.log(index)
        setActive(index);
        if(onSelect){
            onSelect(index)
        }
    }
    const mouseOverHandle = (keys:number)=>{
        let position = 0
        if(onMouseOver){
            onMouseOver(keys);
        }
        for(let i = 0;i<keys;i++){
            position  = position + theadPosition[i]
        }
        setThreadWith((refsArray as any)[keys].current.clientWidth)
        setPositionX(position)
    }
    const handMouseLeave = ()=>{
       setInitMenu(!initMenu);
    }
    const passedContent:IMenuContent = {
        index:currentActive? currentActive :0,
        onSelect:handleClick,
        onMouseOver:mouseOverHandle,
    }
    const renderChildren = (children:React.FunctionComponentElement<MenuItemProps>[])=>{
        let newschildren:any = children.map((item,index)=>{
            const {displayName} = item.type
            if(displayName === 'WetMenuItem' || displayName === 'WetMenuSub'){
                cRef.current = index;
                a = Object.assign({},cRef);
                refsArray.push(a);
                let childrenEle =  React.cloneElement(item,{
                    keys:index,
                    ref:a,
                    key:index
                })
                return childrenEle
            }else{
                console.error('警告：非标准菜单子组件');
            }
        })
        return newschildren
    }
    return (
        <nav className={classes} style={style}>
            <div className="nav_box_thread" style={{
                width:threadWith+'px',
                transform: `translateX(${positionX}px)`
            }}></div>
            <ul className="menu_box" onMouseLeave={()=>handMouseLeave()}>
                {/* 这是react和vue的区别之一，一般用children来表示未来要插入的子节点 */}
                <MenuContext.Provider value = {passedContent}>
                {renderChildren(children)}
                </MenuContext.Provider>
            </ul>
        </nav>
    )
}

WetMenuItem.displayName = 'WetMenuItem'
WetMenuSub.displayName = 'WetMenuSub'
export {
    WetMenu,
    WetMenuItem,
    WetMenuSub
};