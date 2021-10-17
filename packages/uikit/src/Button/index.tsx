import React from 'react'


export type ButtonSize = 'large' | 'normal' | 'small' |'mini'|'test'


export type ButtonProps = {size?:ButtonSize} & React.ButtonHTMLAttributes<any>

const Button:(props: ButtonProps) => React.ReactElement = ({...props}) => {
  return (<div>ab
    <button className={props.size} {...props}/>
    </div>
  )
}

export default Button
