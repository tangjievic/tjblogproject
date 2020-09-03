import React from 'react';
import classNames from 'classnames';

export enum ButtonSize{
    Large  = "lg",
    Middle = 'md',
    Small  = 'sm',
    Mini   = 'mini'
}

export enum ButtonType{
    Primary = 'primary',
    Success = 'success',
    Info    = 'info',
    Warn    = 'warn',
    Default = 'defualt',
    Risk    = 'risk',
}

export enum ButtonShape{
    Plain   = 'plain',
    Round   = 'round',
    Circle  = 'circle',
    Link    = 'Link',
}

interface BaseButtonProps{
    className?:string;
    disabled?:boolean;
    size?:ButtonSize;
    types?:ButtonType;//这里用types 防止冲突
    shape?:ButtonShape;
    children:React.ReactNode;
    href?:string;
}
//添加btn 原生的html属性
type NativeBtnProps = React.ButtonHTMLAttributes<HTMLElement> & BaseButtonProps;
type AnchorBtnProps = React.AnchorHTMLAttributes<HTMLElement> & BaseButtonProps;

export type BtnProps = Partial<NativeBtnProps & AnchorBtnProps>;

const Wetbtn:React.FC<BtnProps> = (props) =>{
    const{
        types,
        disabled,
        className,
        size,
        children,
        href,
        shape,
        ...restProps
    } = props;
    const classes = classNames('wet-btn',className,{
        [`${types}`]:types,
        [`${size}`]:size,
        'disabled':(shape === ButtonShape.Link) && disabled
    })

    if(shape === ButtonShape.Link && href){
        return(
            <a className={classes}
            href={href}
            {...restProps}
            >
               {children} 
            </a>
        )
    }else{
        return(
            <button className={classes}
            disabled={disabled}
            {...restProps}
            >
                {children}
            </button>
        )
    }
}

Wetbtn.defaultProps = {
    disabled:false,
    types:ButtonType.Default,
    size:ButtonSize.Middle
}

export default Wetbtn;