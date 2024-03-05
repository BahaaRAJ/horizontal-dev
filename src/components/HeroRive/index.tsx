'use client'

import { useRive } from '@rive-app/react-canvas'
import s from './HeroRive.module.scss'

export default function Rive() {
    const { rive, RiveComponent } = useRive({
        src: '/devape.riv',
        artboard: 'leftDevApeUserInterface', // Ignore the artboard for now...
        stateMachines: 'devApeUI',
        autoplay: true,
    })

    return (
        <div className={s.rive_container}>
            <RiveComponent className={s.rive_animation} />
        </div>
    )
}
