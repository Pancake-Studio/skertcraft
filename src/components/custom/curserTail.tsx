// components/CursorTail.tsx
'use client';

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

export default function CursorTail() {
    const cursorRef = useRef<HTMLDivElement>(null);
    const [mounted, setMounted] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const cursorPos = useRef({ x: 0, y: 0 });
    const currentPos = useRef({ x: 0, y: 0 });

    useEffect(() => {
        setMounted(true);

        const handleMouseMove = (e: MouseEvent) => {
            cursorPos.current = { x: e.clientX, y: e.clientY };
        };

        const handleHoverStart = () => setIsHovering(true);
        const handleHoverEnd = () => setIsHovering(false);

        const interactiveElements = document.querySelectorAll('a, button, input, [role="button"]');
        interactiveElements.forEach(element => {
            element.addEventListener('mouseenter', handleHoverStart);
            element.addEventListener('mouseleave', handleHoverEnd);
        });

        window.addEventListener('mousemove', handleMouseMove);

        const animate = () => {
            const ease = 0.15;

            const dx = cursorPos.current.x - currentPos.current.x;
            const dy = cursorPos.current.y - currentPos.current.y;

            currentPos.current.x += dx * ease;
            currentPos.current.y += dy * ease;

            if (cursorRef.current) {
                cursorRef.current.style.transform = `translate3d(${currentPos.current.x - 4}px, ${currentPos.current.y - 4}px, 0) scale(${isHovering ? 4 : 1})`;
            }

            requestAnimationFrame(animate);
        };
        animate();

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            interactiveElements.forEach(element => {
                element.removeEventListener('mouseenter', handleHoverStart);
                element.removeEventListener('mouseleave', handleHoverEnd);
            });
        };
    }, [isHovering]);

    if (!mounted) return null;

    return createPortal(
        <div 
            ref={cursorRef}
            className={`
                fixed left-0 top-0 pointer-events-none z-[99999999] mix-blend-difference
                w-2 h-2 rounded-full bg-white
                transition-transform duration-500 ease-out
            `}
            style={{
                willChange: 'transform',
            }}
        />,
        document.body
    );
}