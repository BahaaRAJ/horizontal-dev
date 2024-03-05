import React, { useEffect, useState } from 'react'

interface HackerEffectProps {
    className: string
    children: React.ReactNode
}

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

const HackerEffect: React.FC<HackerEffectProps> = ({ children, className }) => {
    const [animatedText, setAnimatedText] = useState('')
    const originalText = React.Children.toArray(children).join('')

    useEffect(() => {
        setAnimatedText(originalText)
    }, [originalText])

    const animateTextOnHover = () => {
        let iteration = 0
        let interval = setInterval(() => {
            setAnimatedText((prev: string) =>
                prev
                    .split('')
                    .map((char: string, idx: number) =>
                        idx < iteration
                            ? originalText[idx]
                            : letters[
                                  Math.floor(Math.random() * letters.length)
                              ]
                    )
                    .join('')
            )

            iteration += 1 / 3

            if (iteration >= originalText.length) {
                clearInterval(interval)
            }
        }, 30)
    }

    const resetText = () => setAnimatedText(originalText)

    return (
        <span
            onMouseEnter={animateTextOnHover}
            onMouseLeave={resetText}
            className={className}
        >
            {animatedText}
        </span>
    )
}

export default HackerEffect
