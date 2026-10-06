import { defineCollection, reference } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { iconNames } from './icons';

const icon = z.enum(iconNames as [string, ...string[]]).optional();

// The five phases of the AMBeR Model. One Markdown file per phase.
// (Files and ids are called step-1 … step-5 to keep URLs stable.)
const steps = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/steps' }),
  schema: z.object({
    number: z.number().int().min(1),
    title: z.string(),
    summary: z.string(),
    icon,
    // Highlighted "Important note" box on the phase page
    importantNote: z.string().optional(),
  }),
});

// The activities within each phase. One Markdown file per activity.
const activities = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/activities' }),
  schema: z.object({
    step: reference('steps'),
    order: z.number().int().min(1),
    title: z.string(),
    summary: z.string(),
    icon,
    roles: z.array(z.string()).default([]),
    useItTo: z.string().optional(),
    rememberTo: z.string().optional(),
    // Example prompts for an AI assistant
    prompts: z
      .array(z.object({ title: z.string(), attach: z.string().optional(), ask: z.string() }))
      .default([]),
    downloads: z
      .array(z.object({ label: z.string(), file: z.string() }))
      .default([]),
  }),
});

// Stories of implementation from the partner organisations.
const stories = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/stories' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    organisation: z.string(),
    country: z.string(),
    steps: z.array(reference('steps')).default([]),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    video: z.string().url().optional(),
    published: z.boolean().default(true),
  }),
});

// Free-text pages (Home intro, About, Local guide, Privacy, Accessibility).
const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    intro: z.string().optional(),
    // Key facts about the project (shown on About and Home)
    facts: z.array(z.object({ label: z.string(), value: z.string() })).default([]),
  }),
});

export const collections = { steps, activities, stories, pages };
