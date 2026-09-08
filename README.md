# Mainframe - Creative Agency Hero Page

This project is a bespoke, full-screen hero landing page for a creative agency named "Mainframe". It features a cinematic, dark-mode first aesthetic built with React, TypeScript, Vite, and Tailwind CSS v4.

## Features

- **Interactive Background Video:** A high-quality background video that scrubs forward and backward smoothly in response to horizontal mouse movement.
- **Custom Typography:** Integration of specific web fonts (`HelveticaNowDisplay-Medium` for headings and `HelveticaNowDisplayW01-Rg` for body text).
- **Typewriter Animation:** A custom React hook that reveals the hero copy character by character, complete with a blinking cursor.
- **Micro-interactions:** Pill buttons that fade in and slide up after page load. Includes an interactive "copy to clipboard" button for email.
- **Responsive Mobile Navigation:** A custom-built hamburger menu that animates into a full-screen, backdrop-blurred overlay menu on smaller devices.
- **Tailwind v4 Monochrome Design System:** A tailored high-contrast theme defined entirely via Tailwind v4 CSS variables.

## Tech Stack

- **React 18**
- **TypeScript**
- **Vite**
- **Tailwind CSS v4**

## Getting Started

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Start the Development Server:**
   ```bash
   npm run dev
   ```

3. **Build for Production:**
   ```bash
   npm run build
   ```

## Design System

The underlying design system relies heavily on pure blacks (`#000000`) and pure whites (`#FFFFFF`), with an extended greyscale palette configured in `src/index.css`. All interactive elements follow an inverted hover logic to maintain high visual contrast.
