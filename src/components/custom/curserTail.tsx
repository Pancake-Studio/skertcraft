'use client';

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

export default function CursorTail() {
    const cursorRef = useRef<HTMLDivElement>(null);
    const [mounted, setMounted] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const [isClicking, setIsClicking] = useState(false);
    const [hoverScale, setHoverScale] = useState(1);
    const cursorPos = useRef({ x: 0, y: 0 });
    const currentPos = useRef({ x: 0, y: 0 });

    useEffect(() => {
        setMounted(true);

        const handleMouseMove = (e: MouseEvent) => {
            cursorPos.current = { x: e.clientX, y: e.clientY };
        };

        const handleMouseDown = () => setIsClicking(true);
        const handleMouseUp = () => setIsClicking(false);
        
        const handleHoverStart = (e: MouseEvent) => {
            const target = e.currentTarget as HTMLElement;
            const cursorScale = target.getAttribute('data-cursor-scale');
            
            if (cursorScale) {
                setHoverScale(parseFloat(cursorScale));
                setIsHovering(true);
            }
        };

        const handleHoverEnd = () => {
            setHoverScale(1);
            setIsHovering(false);
        };

        // เลือก element ที่มี data-cursor-scale
        const interactiveElements = document.querySelectorAll('[data-cursor-scale]');
        interactiveElements.forEach(element => {
            element.addEventListener('mouseenter', handleHoverStart as EventListener);
            element.addEventListener('mouseleave', handleHoverEnd);
        });

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);

        const animate = () => {
            const ease = 0.15;

            const dx = cursorPos.current.x - currentPos.current.x;
            const dy = cursorPos.current.y - currentPos.current.y;

            currentPos.current.x += dx * ease;
            currentPos.current.y += dy * ease;

            if (cursorRef.current) {
                let scale = 1;
                if (isHovering && isClicking) {
                    scale = hoverScale * 1.5; // ขยายเพิ่มเมื่อคลิกค้าง
                } else if (isHovering) {
                    scale = hoverScale;
                } else if (isClicking) {
                    scale = 3; // ขนาดเมื่อคลิกค้าง
                }

                cursorRef.current.style.transform = `translate3d(${currentPos.current.x - 4}px, ${currentPos.current.y - 4}px, 0) scale(${scale})`;
            }

            requestAnimationFrame(animate);
        };
        animate();

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
            interactiveElements.forEach(element => {
                element.removeEventListener('mouseenter', handleHoverStart as EventListener);
                element.removeEventListener('mouseleave', handleHoverEnd);
            });
        };
    }, [isHovering, isClicking, hoverScale]);

    if (!mounted) return null;

    return createPortal(
        <div 
            ref={cursorRef}
            className={`
                fixed left-0 top-0 pointer-events-none z-[99999999] mix-blend-difference
                w-2 h-2 rounded-full bg-white
                transition-transform duration-500 ease-out
                hidden lg:block
            `}
            style={{
                willChange: 'transform',
            }}
        />,
        document.body
    );
}