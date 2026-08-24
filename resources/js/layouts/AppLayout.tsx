import Header from '@/components/Header';
import { type ReactNode } from 'react';

export default function AppLayout({ children }: { children: ReactNode }) {
    return (
        <>
            <Header />
            <main>{children}</main>
        </>
    );
}
