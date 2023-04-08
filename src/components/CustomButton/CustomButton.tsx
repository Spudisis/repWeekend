import React, { FC } from 'react'
import styles from './custombutton.module.scss'

interface CustomButtonPropsI
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  btnType?: 'outlined' | 'secondary' | 'primary' | 'remove' | 'white'
  props?: any
  children: React.ReactNode
  icon?: JSX.Element
  iconStart?: boolean
  size?: 'sm' | 'md' | 'lg' | 'full'
  classNames?: string
}

export const CustomButton: FC<CustomButtonPropsI> = ({
  children,
  icon,
  classNames,
  btnType = 'primary',
  size = 'md',
  iconStart = false,
  ...props
}) => (
  <button
    {...props}
    className={`${classNames || ''} ${styles.btn} ${styles[btnType]} ${
      styles[size]
    } ${!iconStart || styles['iconBefore']}`}>
    <span>{children}</span>
    {icon}
  </button>
)
