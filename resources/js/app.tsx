import { createInertiaApp } from '@inertiajs/react';
import { initializeTheme } from '@/hooks/use-appearance';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => (title ? `${title} - ${appName}` : appName),
    layout: () => null,
    strictMode: true,
    progress: {
        color: '#4B5563',
    },
});

initializeTheme();
