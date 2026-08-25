import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createElement } from 'react';
import { createRoot } from 'react-dom/client';
import AppLayout from '@/layouts/AppLayout';
import { initializeTheme } from '@/hooks/use-appearance';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => (title ? `${title} - ${appName}` : appName),
    resolve: async (name) => {
        const module = await resolvePageComponent(
            `./pages/${name}.tsx`,
            import.meta.glob('./pages/**/*.tsx'),
        ) as any;

        // Apply AppLayout to every page unless the page opts out with layout = null
        if (module.default.layout === undefined) {
            module.default.layout = (page: React.ReactNode) =>
                createElement(AppLayout, null, page);
        }

        return module;
    },
    setup({ el, App, props }) {
        createRoot(el).render(createElement(App, props));
    },
    strictMode: true,
    progress: {
        color: '#4B5563',
    },
});

initializeTheme();
