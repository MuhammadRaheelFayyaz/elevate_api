// components/Typography.js
import React from 'react';

const Typography = ({variant, className, text}) => {
    const classes = {
        h1: 'text-2xl ',
        h2: 'text-xl ',
        h3: 'text-lg ',
        h4: 'text-md ',
        body: 'text-base',
        small: 'text-[14px] md:text-sm',
        xs: 'text-[12px]'
    };

    return <p className={`${classes[variant]} ${className}`}>{text}</p>;
};

export default Typography;
