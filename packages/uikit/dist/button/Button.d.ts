import React from 'react';
export declare type ButtonSize = 'large' | 'normal' | 'small' | 'mini' | 'test';
export declare type ButtonProps = {
    size?: ButtonSize;
} & React.ButtonHTMLAttributes<any>;
declare const Button: (props: ButtonProps) => React.ReactElement;
export default Button;
