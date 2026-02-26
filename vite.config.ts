import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vitePrerender from 'vite-plugin-prerender'
import path from 'path'

const Renderer = vitePrerender.PuppeteerRenderer

const PROJECT_SLUGS = [
    'personal-homepage', 'testportal-gpt', 'deru-party-games',
    'ebook-wizard', 'shelfspace', 'poketch', 'epubify', 'maya-calculator',
]

export default defineConfig({
    plugins: [
        react(),
        vitePrerender({
            staticDir: path.resolve('build'),
            routes: [
                '/',
                '/privacy-policy',
                ...PROJECT_SLUGS.map(s => `/projects/${s}`),
            ],
            renderer: new Renderer({
                args: ['--no-sandbox'],
            }),
        }),
    ],
    build: {
        outDir: 'build',
        sourcemap: false,
    },
})
