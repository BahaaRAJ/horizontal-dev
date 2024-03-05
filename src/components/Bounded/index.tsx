import cn from 'clsx'
import React from 'react'
import s from './Bounded.module.scss'

type BoundedProps = {
    as?: React.ElementType
    className?: string
    children: React.ReactNode
}

const Bounded = React.forwardRef<HTMLDivElement, BoundedProps>(
    ({ as: Component = 'section', className, children, ...restProps }, ref) => {
        return (
            <Component
                ref={ref}
                className={cn(s.bounded_container, className)}
                {...restProps}
            >
                <div className={s.bounded_wrapper}>{children}</div>
            </Component>
        )
    }
)

Bounded.displayName = 'Bounded'

export default Bounded
