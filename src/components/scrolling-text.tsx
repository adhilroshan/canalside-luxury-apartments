'use client'
import { useEffect, useRef } from 'react'

interface ScrollingTextProps {
    text: string
}

export default function ScrollingText({ text }: ScrollingTextProps) {
    const scrollRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const scrollElement = scrollRef.current
        if (scrollElement) {
            const scrollWidth = scrollElement.scrollWidth
            let scrollPosition = 0

            const scroll = () => {
                scrollPosition += 1
                if (scrollPosition > scrollWidth / 2) {
                    scrollPosition = 0
                }
                scrollElement.style.transform = `translateX(-${scrollPosition}px)`
                requestAnimationFrame(scroll)
            }

            requestAnimationFrame(scroll)
        }
    }, [])

    return (
        <div className="overflow-hidden whitespace-nowrap py-4 bg-white text-black">
            <div ref={scrollRef} className="inline-block">
                {text.repeat(4)}
            </div>
        </div>
    )
}
