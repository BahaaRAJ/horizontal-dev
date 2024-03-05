'use client'

import Link from 'next/link'
import SVG from 'react-inlinesvg'

import LineSVG from '../LineSVG'
import s from './Navigation.module.scss'

import cn from 'clsx'
import HackerEffectButton from '../HackerEffectButton'
import Glow from '../Glow'

export default function Navigation() {

    return (
        <nav className={s.navigation}>
            <div className={s.navigation__wrapper}>
                <Link className={s.navigation__logo} href={'/'}>
                    <SVG
                        src="./NavLogos/devapeLogo.svg"
                        width={40}
                        title="DEVAPE"
                        className={s.logo__logo}
                    />

                    <span className={s.logo__text}>
                        DEV
                        <Glow off>APE</Glow>
                    </span>
                </Link>

                <ul className={s.link__list}>
                    <li className={s.list__item}>
                        <Link
                            className={s.list__item}
                            href={'#'}
                            scroll={false}
                        >
                            <SVG
                                src={'./NavLogos/Code.svg'}
                                width={20}
                                title="Code"
                                className={s.list__item__logo}
                            />
                            <HackerEffectButton className={s.list__item__text}>
                                AI Developer
                            </HackerEffectButton>
                        </Link>
                    </li>

                    <li className={s.list__item}>
                        <Link
                            className={s.list__item}
                            href={'#'}
                            scroll={false}
                        >
                            <SVG
                                src={'./NavLogos/QuestionMark.svg'}
                                width={15}
                                height={15}
                                title="QuestionMark"
                                className={s.list__item__logo}
                            />
                            <HackerEffectButton className={s.list__item__text}>
                                AI Issue Assistant
                            </HackerEffectButton>
                        </Link>
                    </li>

                    <li className={s.list__item}>
                        <Link
                            className={s.list__item}
                            href={'#'}
                            scroll={false}
                        >
                            <SVG
                                src={'./NavLogos/Icognito.svg'}
                                width={20}
                                title="Icognito"
                                className={s.list__item__logo}
                            />
                            <HackerEffectButton className={s.list__item__text}>
                                AI PR Assistant
                            </HackerEffectButton>
                        </Link>
                    </li>
                </ul>

                <div className={s.navigation__social__button}>
                    <div className={cn(s.social__button, s.x__button)}>
                        <Link
                            className={s.social__button__svg}
                            href="https://x.com/devapeai"
                            scroll={false}
                        >
                            <SVG
                                src="./NavLogos/X.svg"
                                width={20}
                                title="X aka Twitter"
                                className={s.social__logo}
                                preProcessor={(code) => code.replace(/fill=".*?"/g, 'fill="currentColor"')}
                            />
                        </Link>
                    </div>
                    <div className={cn(s.social__button, s.discord__button)}>
                        <Link
                            className={s.social__button__svg}
                            href="https://x.com/devapeai"
                            scroll={false}
                        >
                            <SVG
                                src="./NavLogos/discord.svg"
                                width={20}
                                title="Discord"
                                className={s.social__logo}
                                preProcessor={(code) =>
                                    code.replace(
                                        /fill=".*?"/g,
                                        'fill="currentColor"'
                                    )
                                }
                            />
                        </Link>
                    </div>
                </div>
            </div>

            <LineSVG />
        </nav >
    )
}
