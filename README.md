# TutorialKit Starter

👋 Welcome to TutorialKit!

This README includes everything you need to start writing your tutorial content quickly.

## Project Structure

```bash
.
├── astro.config.mjs    # TutorialKit uses Astro 🚀 (https://astro.build)
├── src
│   ├── ...
│   ├── content
│   │   └── tutorial    # Your tutorial content lives here
│   └── templates       # Your templates (see below for more information)
├── public
│   ├── favicon.svg
│   └── logo.svg        # Default logo used in top left for your tutorial
├── ...
├── theme.ts            # Customize the theme of the tutorial
└── uno.config.ts       # UnoCSS config (https://unocss.dev/)
```

## Getting Started

Make sure you have all dependencies installed and started the dev server:

```bash
npm install
npm run dev
```

## UI Structure

```markdown
┌─────────────────────────────────────────────────────┐
│ ● ● ●                                               │
├───────────────────────────┬─────────────────────────┤
│                           │                         │
│                           │                         │
│                           │                         │
│                           │                         │
│                           │       Code Editor       │
│                           │                         │
│                           │                         │
│                           │                         │
│                           │                         │
│          Content          ├─────────────────────────┤
│                           │                         │
│                           │                         │
│                           │  Preview & Boot Screen  │
│                           │                         │
│                           │                         │
│                           ├─────────────────────────┤
│                           │                         │
│                           │        Terminal         │
│                           │                         │
└───────────────────────────┴─────────────────────────┘
```

## Authoring Content

A tutorial consists of parts, chapters, and lessons. For example:

- Part 1: Basics of Vite
  - Chapter 1: Introduction
    - Lesson 1: Welcome!
    - Lesson 2: Why Vite?
    - …
  - Chapter 2: Your first Vite project
- Part 2: CLI
  - …

Your content is organized into lessons, with chapters and parts providing a structure and defining common metadata for these lessons.

Here’s an example of how it would look like in `src/content/tutorial`:

```bash
tutorial
├── 1-basics-of-vite
│   ├── 1-introduction
│   │   ├── 1-welcome
│   │   │   ├── content.md    # The content of your lesson
│   │   │   ├── _files        # Initial set of files
│   │   │   │   └── ...
│   │   │   └── _solution     # Solution of the lesson
│   │   │       └── ...
│   │   ├── 2-why-vite
│   │   │   ├── content.md
│   │   │   └── _files
│   │   │       └── ...
│   │   └── meta.md           # Metadata for the chapter
│   └── meta.md               # Metadata for the part
├── 2-advanced
│   ├── ...
│   └── meta.md
└── meta.md                   # Metadata for the tutorial
```

### Supported Content Formats

Content can be either written as Markdown (`.md`) files or using [MDX](https://mdxjs.com/) (`.mdx`). Files have a Front Matter at the top that contains the metadata and everything that comes after is the content of your lesson.

**Example**

```markdown
---
type: lesson
title: Welcome!
---

# Welcome to TutorialKit!

In this tutorial we'll walk you through how to setup your environment to
write your first tutorial 🤩
```

The metadata file (`meta.md`) of parts, chapters, and lessons do not contain any content. It only contains the Front Matter for configuration.

### Metadata

Here is an overview of the properties that can be used as part of the Front Matter:

| Property        | Required | Type                        | Inherited | Description                                                                                                                                           |
| --------------- | -------- | --------------------------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| type            | ✅       | `part \| chapter \| lesson` | ❌        | The type of the metadata.                                                                                                                             |
| title           | ✅       | `string`                    | ❌        | The title of the part, chapter, or lesson.                                                                                                            |
| slug            |          | `string`                    | ❌        | Let’s you customize the URL pathname which is `/:partSlug/:chapterSlug/:lessonSlug`.                                                                  |
| previews        |          | `Preview[]`                 | ✅        | Configure which ports should be used for the previews. If not specified, the lowest port will be used.                                                |
| autoReload      |          | `boolean`                   | ✅        | Navigating to a lesson that specifies `autoReload` will always reload the preview. This is typically only needed if your server does not support HMR. |
| prepareCommands |          | `Command[]`                 | ✅        | List of commands to execute sequentially. They are typically used to install dependencies or to run scripts.                                          |
| mainCommand     |          | `Command`                   | ✅        | The main command to be executed. This command will run after the `prepareCommands`.                                                                   |

A `Command` has the following shape:

```ts
string | [command: string, title: string] | { command: string, title: string }
```

The `title` is used as part of the boot screen (see [UI Structure](#ui-structure)).

A `Preview` has the following shape:

```ts
string | [port: number, title: string] | { port: number, title: string }
```

In most cases, metadata is inherited. For example, if you specify a `mainCommand` on a chapter without specifying it on any of its lessons, each lesson will use the `mainCommand` from its respective chapter. This extends to chapter and parts as well.

## Contributing

Please consult [CONTRIBUTING](./CONTRIBUTING.md) for guidelines on contributing to this project.
