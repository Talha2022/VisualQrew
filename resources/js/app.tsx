import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createElement } from 'react';
import { createRoot } from 'react-dom/client';
import AppLayout from '@/layouts/AppLayout';
import { initializeTheme } from '@/hooks/use-appearance';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => (title ? `${title} - ${appName}` : appName),
    resolve: (name) => {
        const page = resolvePageComponent(
            `./pages/${name}.tsx`,
            import.meta.glob('./pages/**/*.tsx'),
        );

        // Attach AppLayout as the default layout for every page
        // unless the page itself defines its own `layout` property.
        page.then((module: any) => {
            if (!module.default.layout) {
                module.default.layout = (page: React.ReactNode) =>
                    createElement(AppLayout, null, page);
            }
        });

        return page;
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
