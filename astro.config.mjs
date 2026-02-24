import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'The Junior Developer Guidebook',
      description: 'An A-to-Z guide to building modern web apps with Claude Code, Next.js, Supabase & Hono. Written by Dad.',
      customCss: ['./src/styles/custom.css'],
      sidebar: [
        {
          label: 'Welcome',
          items: [
            { slug: 'index' },
            { slug: 'introduction' },
          ],
        },
        {
          label: '1. Dev Environment Setup',
          autogenerate: { directory: '01-dev-environment' },
        },
        {
          label: '2. How the Web Works',
          autogenerate: { directory: '02-how-the-web-works' },
        },
        {
          label: '3. JavaScript & TypeScript',
          autogenerate: { directory: '03-javascript-typescript' },
        },
        {
          label: '4. Git & GitHub',
          autogenerate: { directory: '04-git-and-github' },
        },
        {
          label: '5. React & Next.js',
          autogenerate: { directory: '05-react-nextjs' },
        },
        {
          label: '6. Databases & Supabase',
          autogenerate: { directory: '06-databases-supabase' },
        },
        {
          label: '7. APIs with Hono',
          autogenerate: { directory: '07-apis-with-hono' },
        },
        {
          label: '8. Claude Code & Vibe Coding',
          autogenerate: { directory: '08-claude-code' },
        },
        {
          label: '9. Deploying Your App',
          autogenerate: { directory: '09-deployment' },
        },
        {
          label: '10. Thinking Like a Developer',
          autogenerate: { directory: '10-developer-mindset' },
        },
      ],
    }),
  ],
});
