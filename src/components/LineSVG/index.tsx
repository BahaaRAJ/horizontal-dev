import { useEffect, useRef } from 'react'
import s from './LineSVG.module.scss'

const lerp = (start: number, end: number, alpha: number) => {
    return start * (1 - alpha) + end * alpha
}

const LineSVG = () => {
    const lineRef = useRef<SVGSVGElement>(null)
    const linePathRef = useRef<SVGPathElement>(null)

    useEffect(() => {
        const line = lineRef.current
        const linePath = linePathRef.current
        if (!line || !linePath) return

        let currentX = window.innerWidth / 2
        let currentY = window.innerHeight / 2

        let curveX = 10
        let curveY = 0
        const ease = 0.1

        const hoverZone = 200
        const expandAmount = 0.5
        let isDisabled = false

        const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0

        const handleMouseMove = (e: MouseEvent) => {
            currentX = e.pageX
            currentY = e.pageY
        }

        if (!isTouch) {
            window.addEventListener('mousemove', handleMouseMove)
        }

        const calculateTargetX = (y: number) => {
            if (isDisabled || y > hoverZone) return 0
            return -(((5 + expandAmount) / 50) * (y - hoverZone))
        }

        const svgCurve = () => {
            const width = window.innerWidth
            const anchorDistance = 150
            const curviness = anchorDistance - 40

            curveX = lerp(curveX, calculateTargetX(currentY), ease)
            curveY = lerp(curveY, currentX, ease)

            const pathData = `
                M60,${width}
                H0V0h60v${curveY - anchorDistance}
                c0,${curviness},${curveX},${curviness},${curveX},${anchorDistance}
                S60,${curveY},60,${curveY + anchorDistance * 2}
                V${width}z
            `

            linePath.setAttribute('d', pathData.trim())
            line.style.width = `${curveX + 60}px`

            requestAnimationFrame(svgCurve)
        }

        svgCurve()

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
        }
    }, [])

    return (
        <div className={s.line__wrap}>
            <div className={s.line__set}>
                <svg
                    ref={lineRef}
                    className={s.line}
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                >
                    <path
                        ref={linePathRef}
                        className={s.line__path}
                        d=""
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        opacity="1"
                    />
                </svg>
            </div>
        </div>
    )
}

export default LineSVG
