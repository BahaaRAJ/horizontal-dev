'use client'

import { useEffect, useState } from 'react'
import SVG from 'react-inlinesvg'
import s from './HomeHero.module.scss'

import Bounded from '@/components/Bounded'
import Button from '@/components/Button'
import FallingTags from '@/components/FallingTags'
import HackerEffectButton from '@/components/HackerEffectButton'
import Rive from '@/components/HeroRive'
import Glow from '@/components/Glow'

export default function Hero() {
    const changingText = [
        'policing code style in every review?',
        'code security slip ups?',
        'ad-hoc requests for minor features?',
        'ignoring code standards for deadlines?',
    ]

    const [animatedTitle, setAnimatedTitle] = useState<string>(
        changingText[0] || ''
    )

    useEffect(() => {
        const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

        const names = changingText
            .map((title) => title)
            .filter((title) => title !== null) as string[]
        let currentIndex = 0

        function animateText(name: string) {
            let iteration = 0
            let interval = setInterval(() => {
                let randomText = name
                    .split('')
                    .map((char, index) => {
                        return index < iteration
                            ? char
                            : letters[
                            Math.floor(Math.random() * letters.length)
                            ]
                    })
                    .join('')

                setAnimatedTitle(randomText)

                iteration += 0.5

                if (iteration >= name.length) {
                    clearInterval(interval)
                    setTimeout(() => {
                        currentIndex = (currentIndex + 1) % names.length
                        animateText(names[currentIndex])
                    }, 5000)
                }
            }, 30)

            return () => clearInterval(interval)
        }

        if (names.length > 0) animateText(names[currentIndex])
    }, [])

    return (
        <Bounded as="section" className={s.hero}>
            <h1 className={s.hero__title}>
                <div className={s.hero__first__title__container}>
                    <span className={s.hero__first__title}>
                        Tired of
                    </span>

                    <div className={s.hero__titles__list}>
                        <span className={s.hero__list__title}>
                            <Glow>{animatedTitle}</Glow>
                        </span>
                    </div>
                </div>

                <span className={s.hero__second__title}>
                    No More. Dev<Glow>Ape</Glow> is here. 🦍
                </span>
            </h1>

            <div className={s.hero__content__wrapper}>
                <div className={s.hero__content}>
                    <h4 className={s.hero__description}>
                        DevApe is an <Glow>AI coworker</Glow> for software teams: living in your GitHub repo, labeling & triaging <Glow>Issues</Glow>, reviewing & summarizing <Glow>Pull Requests</Glow>, and even <Glow>pushing code</Glow>! 🪄
                    </h4>

                    <div className={s.hero__buttons}>
                        <Button
                            as="button"
                            variant="primary"
                            className={s.install__button}
                        >
                            <SVG
                                src="./ButtonLogos/Github.svg"
                                width={20}
                                title="Github Icon"
                                className={s.logo__logo}
                                preProcessor={(code) => code.replace(/fill=".*?"/g, 'fill="currentColor"')}
                            />
                            <HackerEffectButton className={s.install__button__text}>
                                Install [Free] App
                            </HackerEffectButton>
                        </Button>
                        <Button
                            as="button"
                            variant="primary"
                            className={s.install__button}
                        >
                            <SVG
                                src="./ButtonLogos/Play.svg"
                                width={20}
                                title="Play Icon"
                                className={s.logo__logo}
                                preProcessor={(code) => code.replace(/fill=".*?"/g, 'fill="currentColor"')}
                            />
                            <HackerEffectButton className={s.install__button__text}>
                                Watch Demo
                            </HackerEffectButton>
                        </Button>
                    </div>
                </div>

                <Rive />
            </div>

            <FallingTags />
        </Bounded>
    )
}
