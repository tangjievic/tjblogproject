import React from 'react';
import classNames from 'classnames';

export enum TagSize{
    Large  = 'lg',
    Middle = 'md',
    Small  = 'sm'
}

export enum TagType{
    Primary = 'primary',
    Success = 'success',
    Info    = 'info',
    Warn    = 'warn',
    Risk    = 'risk',
}
interface TagProps {
    types?:TagType;
    size?:TagSize;
    children:React.ReactNode;
    className?:string;
    tagshape?:string;//固定值 circle生效
}

const Tag:React.FC<TagProps> = (props)=>{
    let {
        types,
        size,
        children,
        className,
        tagshape
    } = props
    const classes = classNames( className,'wet-tag',`wet-tag__${size?size:'lg'}`,`wet-tag__${types}`,tagshape);

    return(
        <span className={classes}>
            {children}
        </span>
    )
}

export default Tag 