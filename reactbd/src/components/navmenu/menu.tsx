import React,{useState,useEffect,createContext,useRef} from 'react';
import classNames from 'classnames';
import WetMenuItem from './menuItem';
import {MenuItemProps} from './menuItem';

// 在ts中，定义类型由两种方式：接口（interface）和类型别名（type alias）
// interface只能定义对象类型，type声明的方式可以定义组合类型，交叉类型和原始类型
// 如果用type alias 声明的方式，会导致一些功能的缺失
// 1.interface方式可以实现接口的extends/implements，而type 不行
// 2.interface可以实现接口的merge，但是type不行

type MenuMode = 'horizontal' | 'vertical'; //ts模板字符串量
type selectedCallBack = (selectedIndex:number|string) => void;
type mouseOverCallBack = (selectedKeys:number) => void;
type mouseOutCallBack = (selectedKeys:number) => void;
//createContext 可以用来组件之间透传属性

export interface MenuProps {
    defaultIndex?:number|string;
    className?:string;
    mode?:MenuMode;
    style?:React.CSSProperties;
    onSelect?:selectedCallBack;
    onMouseOver?:mouseOverCallBack;
    //onMouseOut?:mouseOutCallBack;
}

interface IMenuContent {
    index:number|string;
    onMouseOver?:mouseOverCallBack;
    onSelect?:selectedCallBack;
    //onMouseOut?:mouseOutCallBack;
}

export const MenuContext = createContext<IMenuContent>( {index:0} );

const WetMenu:React.FC<MenuProps> = (props) =>{
    const {
        className,
        mode,
        style,
        children,
        defaultIndex,
        onSelect,
        onMouseOver,
        //onMouseOut
    } = props;
    //let thread_with:number = 0;
    let refsArray:any = [];
    let temp_position:any = [];
    let cRef:any = useRef();
    let [theadPosition,settheadPosition] = useState([]);
    let [threadWith,setThreadWith] = useState(0);
    let [currentActive,setActive] = useState(defaultIndex);
    let [positionX,setPositionX] = useState(0);
    let [initMenu,setInitMenu] = useState(true)
    //组件dom数据初始化
    useEffect(()=>{
        //console.log(props.children[0].key)
        refsArray.forEach((item:any,index:number)=>{
            //temp_position[index] = item.current.clientWidth
            temp_position.push(item.current.clientWidth)
            if(item.current.classList.contains('actived')){
                setThreadWith(item.current.clientWidth)
                let position = 0
                for(let i = 0;i<index;i++){
                    position  = position + temp_position[i]
                }
                console.log('xxx')
                setPositionX(position)
            }
        })
        settheadPosition(temp_position)
    },[initMenu])
    const classes = classNames('wet-menu',className,{
        'menu-vertical':mode === 'vertical',
        'menu-horizontal':mode !== 'vertical',
    })
    const handleClick = (index:number|string) => {
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
        //console.log(keys,theadPosition,refsArray);
        setThreadWith(refsArray[keys].current.clientWidth)
        setPositionX(position)
    }
    const handMouseLeave = ()=>{
       setInitMenu(!initMenu)
    }
    const passedContent:IMenuContent = {
        index:currentActive? currentActive :0,
        onSelect:handleClick,
        onMouseOver:mouseOverHandle,
        //onMouseOut:handMouseOut
    }
    const renderChildren = ()=>{
        return React.Children.map(children,(child,idx)=>{
            const childElement = child as React.FunctionComponentElement<MenuItemProps>//使用类型断言
            const { displayName } = childElement.type;
            if(displayName === 'WetMenuItem'){
                cRef.current = idx;
                let a = Object.assign({},cRef);
                refsArray.push(a);
                let childrenEle =  React.cloneElement(childElement,{
                    keys:idx,
                    ref:a
                })
                return childrenEle
            }else{
                console.error('警告：非标准菜单子组件');
            }
        })
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
                {renderChildren()}
                </MenuContext.Provider>
            </ul>
        </nav>
    )
}

WetMenuItem.displayName = 'WetMenuItem'
export {
    WetMenu,
    WetMenuItem
};