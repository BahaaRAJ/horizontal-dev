import cn from 'clsx'
import React from 'react'
import s from './Button.module.scss'

type ButtonProps = {
    as?: React.ElementType
    className?: string
    children: React.ReactNode
    variant: 'primary' | 'secondary'
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            as: Component = 'button',
            className,
            children,
            variant,
            ...restProps
        },
        ref
    ) => {
        const buttonClassNames = cn(s.button_container, className, {
            [s.primary_button]: variant === 'primary',
            [s.secondary_button]: variant === 'secondary',
        })

        return (
            <Component ref={ref} className={buttonClassNames} {...restProps}>
                {children}
            </Component>
        )
    }
)

Button.displayName = 'Button'

export default Button
