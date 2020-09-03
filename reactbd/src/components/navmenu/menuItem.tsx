import React,{ useContext } from 'react';
import classNames from 'classnames';
import { MenuContext } from './menu';

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
    const classes = classNames('wet-menu__item',className,{
        'disabled' : disabled,
        'actived'  : context.index === index,
    })

    const handleClick = () =>{
        if(context.onSelect && !disabled && (typeof index === 'number'||typeof index === 'string') ){
            context.onSelect(index)
        }
    }

    const handleMouseOver = () =>{
        //console.log(typeof keys === 'number',keys,props)
        if(context.onMouseOver &&!disabled && (typeof keys === 'number')){
            //console.log('xdfsaedf')
            context.onMouseOver(keys)
        }
    }

    // const handMouseOut = () =>{
    //     if(context.onMouseOut &&!disabled && (typeof keys === 'number')){
    //         context.onMouseOut(keys)
    //     }
    // }

    return (
        <li ref={ref} className = {classes} style={style} 
        onClick={handleClick} 
        onMouseOver={handleMouseOver}>
            {children}
        </li>
    )
})

export default WetMenuItem