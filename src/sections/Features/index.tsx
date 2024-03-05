'use client'

import { useEffect, useState } from 'react'
import SVG from 'react-inlinesvg'
import s from './Features.module.scss'

import Bounded from '@/components/Bounded'
import { Video } from '@/components/Video'
import Glow from '@/components/Glow'
import { Gratis } from '@/components/Gratis'
import { HorizontalSlides } from '@/components/Horizontal'

export default function Features() {


    return (
        <Bounded as="section" className={s.features}>
            <HorizontalSlides>
                <div className={s.features__row}>
                    <div className={s.features__content}>
                        <h3 className={s.features__content__title}>
                            <SVG
                                src="./NavLogos/Code.svg"
                                width={40}
                                title="AI Developer"
                                className={s.features__content__title__logo}
                            />
                            <span className={s.features__content__title__text}>AI Developer</span>
                            <Gratis isPro={false} />
                        </h3>
                        <p className={s.features__content__description}>
                            DevApe is your on-call AI teammate that lives & breathes your codebase and keeps things organized 🪄
                        </p>
                    </div>
                    <div className={s.features__imagery}>
                        <Video
                            videoSrc="/videos/codeVideo.mp4"
                        />
                    </div>
                </div>
                <div className={s.features__row}>
                    <div className={s.features__content}>
                        <h3 className={s.features__content__title}>
                            <SVG
                                src="./NavLogos/Code.svg"
                                width={40}
                                title="AI Developer"
                                className={s.features__content__title__logo}
                            />
                            <span className={s.features__content__title__text}>AI Issue Assistant</span>
                            <Gratis isPro={true} />
                        </h3>
                        <p className={s.features__content__description}>
                            DevApe is your on-call AI teammate that lives & breathes your codebase and keeps things organized 🪄
                        </p>
                    </div>
                    <div className={s.features__imagery}>
                        <Video
                            videoSrc="/videos/codeVideo.mp4"
                        />
                    </div>
                </div>
                <div className={s.features__row}>
                    <div className={s.features__content}>
                        <h3 className={s.features__content__title}>
                            <SVG
                                src="./NavLogos/Code.svg"
                                width={40}
                                title="AI Developer"
                                className={s.features__content__title__logo}
                            />
                            <span className={s.features__content__title__text}>AI PR Assistant</span>
                            <Gratis isPro={false} />
                        </h3>
                        <p className={s.features__content__description}>
                            DevApe is your on-call AI teammate that lives & breathes your codebase and keeps things organized 🪄
                        </p>
                    </div>
                    <div className={s.features__imagery}>
                        <Video
                            videoSrc="/videos/codeVideo.mp4"
                        />
                    </div>
                </div>
            </HorizontalSlides>
        </Bounded>
    )
}
