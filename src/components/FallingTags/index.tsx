import { useEffect, useState } from 'react'
import SVG from 'react-inlinesvg'
import s from './FallingTags.module.scss'

interface Tag {
    id: number
    src: string
    title: string
    width: number
    color: string
}

const tags: Tag[] = [
    {
        id: 1,
        src: './Tags/bugs.svg',
        title: 'Bugs',
        width: 60,
        color: 'rgba(255, 0, 0, 0.658)',
    },
    {
        id: 2,
        src: './Tags/question.svg',
        title: 'Question',
        width: 90,
        color: 'rgba(181, 106, 192, 0.581)',
    },
    {
        id: 3,
        src: './Tags/enhancements.svg',
        title: 'Enhancements',
        width: 110,
        color: 'rgba(204, 204, 204, 0.588)',
    },
]

interface FallingTag extends Tag {
    left: number
    animationDuration: number
}

export default function FallingTags() {
    const [fallingTags, setFallingTags] = useState<FallingTag[]>([])

    useEffect(() => {
        const interval = setInterval(() => {
            const newTag = tags[Math.floor(Math.random() * tags.length)]
            const left = Math.random() * window.innerWidth
            const animationDuration = 6 + Math.random() * 4

            const fallingTag: FallingTag = {
                ...newTag,
                left,
                animationDuration,
            }

            setFallingTags((currentTags) => [...currentTags, fallingTag])

            setTimeout(() => {
                setFallingTags((currentTags) =>
                    currentTags.filter(
                        (tag) =>
                            tag.id !== fallingTag.id ||
                            tag.left !== fallingTag.left
                    )
                )
            }, fallingTag.animationDuration * 6000)
        }, 3000)

        return () => clearInterval(interval)
    }, [])

    return (
        <div className={s.falling__tags__container}>
            {fallingTags.map((tag) => (
                <div
                    className={s.falling__tag}
                    key={`${tag.id}-${tag.left}`}
                    style={{
                        left: `${tag.left}px`,
                        animationDuration: `${tag.animationDuration}s`,
                        filter: `drop-shadow(0 0 5px ${tag.color}) drop-shadow(0 0 30px ${tag.color}) drop-shadow(0 0 50px ${tag.color})`,
                    }}
                >
                    <SVG
                        src={tag.src}
                        width={tag.width}
                        title={tag.title}
                        className={s.logo__logo}
                    />
                </div>
            ))}
        </div>
    )
}
