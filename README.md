# Doctor Appointment Scheduler

A modern web application for booking doctor appointments, built with Next.js, React, and Tailwind CSS.

## Features

- Browse a list of doctors with search and specialty filters
- View doctor details and availability
- Book appointments by selecting a doctor and time slot
- Responsive, user-friendly interface
- Email validation for login
- Modern, clean UI with light color scheme

## Tech Stack

- [Next.js](https://nextjs.org/) (App Router)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/) (with custom styles)
- TypeScript

## Getting Started

### Prerequisites
- Node.js (v18 or newer recommended)
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd pearlthoughts/doc-scheduler
   ```
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

### Running the Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

## Project Structure

- `src/app/` — Main application pages and routes
  - `login/` — Login page with email validation
  - `doctors/` — Doctor list and search
  - `time/` — Time slot selection for appointments
  - `booking/` — Appointment confirmation page
- `public/` — Static assets (SVGs, icons)
- `globals.css` — Global and Tailwind styles

## Customization

- To add or edit doctors, update the doctors array in `doctors/page.tsx`, `time/page.tsx`, and `booking/page.tsx` (or refactor to use a shared data source).
- To change the color scheme, edit `globals.css` and inline styles in the page components.

## Linting & Formatting

```bash
npm run lint
```

## Build for Production

```bash
npm run build
npm start
```

## License

This project is for demonstration and educational purposes.
