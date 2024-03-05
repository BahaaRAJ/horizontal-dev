import cn from 'clsx'
import React from 'react'
import s from './Glow.module.scss'

type GlowProps = {
    className?: string
    children: React.ReactNode
    off?: boolean,
}

const Glow = React.forwardRef<HTMLButtonElement, GlowProps>(
    (
        {
            className,
            children,
            off,
            ...restProps
        },
        ref
    ) => {
        const classNames = cn(className, {
            [s.glow]: !off,
            [s.greenColor]: off,
        });

        return (
            <span ref={ref} className={classNames} {...restProps}>
                {children}
            </span>
        )
    }
)

Glow.displayName = 'Glow'

export default Glow
