import React,{ useContext } from 'react';
import classNames from 'classnames';
import { MenuContext } from './menu';
import { MenuSubContext } from './menuSub'
export interface MenuItemProps{
    index?:number|string;
    keys?:number;
    disabled?:boolean;
    className?:string;
    style?:React.CSSProperties;
    ref?:React.Ref<HTMLLIElement>
}

//MenuItemProps extends React.ForwardRefExoticComponent;

const WetMenuItem:React.FC<MenuItemProps> = React.forwardRef((props,ref) => {
    const { index,disabled,className,style,children,keys } = props;
    const context = useContext( MenuContext );
    const contextsub = useContext( MenuSubContext );
    const classes = classNames('wet-menu__item',className,{
        'disabled' : disabled,
        'actived'  : context.index === index || contextsub.index === index,
    })

    const handleClick = (e:React.MouseEvent<HTMLAnchorElement, MouseEvent>) =>{
        e.preventDefault();
        if(context.onSelect && !disabled && (typeof index === 'number'||typeof index === 'string') ){
            context.onSelect(index);
        }
    }

    const handleMouseOver = () =>{
        if(context.onMouseOver &&!disabled && (typeof keys === 'number')){
            context.onMouseOver(keys)
        }
    }
    return (
        <li ref={ref} className = {classes} style={style} 
        onMouseOver={handleMouseOver}>
            <a href="#!" className="nav-link" onClick={(e)=>handleClick(e)}>{children}</a>
        </li>
    )
})

export default WetMenuItem