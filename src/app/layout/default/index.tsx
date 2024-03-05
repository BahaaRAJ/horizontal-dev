"use client"

import { useFrame } from '@studio-freight/hamo'
import Lenis from '@studio-freight/lenis'
import { useStore } from '@/lib/store'
import { useEffect } from 'react'

import Header from '@/components/Header'

export default function Layout({ children, }: Readonly<{ children: React.ReactNode }>) {
    const [lenis, setLenis] = useStore((state) => [state.lenis, state.setLenis])

    useEffect(() => {
        window.scrollTo(0, 0)
        const lenis = new Lenis({
            // gestureOrientation: 'both',
            smoothWheel: true,
            // smoothTouch: true,
            syncTouch: true,
        })
        window.lenis = lenis
        setLenis(lenis)

        // new ScrollSnap(lenis, { type: 'proximity' })

        return () => {
            lenis.destroy()
            setLenis(null)
        }
    }, [])

    useFrame((time: number) => {
        lenis?.raf(time)
    }, 0)

    return (
        <>
            <main>
                <Header />
                {children}
            </main>
        </>
    )
}
