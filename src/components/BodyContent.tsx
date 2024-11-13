// components/BodyContent.tsx
'use client';

import { ReactNode } from 'react';
import CursorTail from '@/components/custom/curserTail';

export default function BodyContent({ children }: { children: ReactNode }) {
    return (
        <>
            {children}
            <CursorTail />
        </>
    );
}