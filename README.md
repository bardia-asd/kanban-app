# Kanban App

A full-featured Kanban project-management application for organizing work, tracking progress, and collaborating with team members.

## Live Demo

[kanban-app-lemon-xi.vercel.app](https://kanban-app-lemon-xi.vercel.app/)

## What It Does

- Create, update, and delete tasks and Kanban columns.
- Drag and drop tasks between columns to update their workflow status.
- Manage projects, members, task labels, and archived work.
- View a dashboard, task calendar, and reports with progress and performance charts.
- Use light and dark themes in a responsive interface.

## Built With

- React and Vite
- Tailwind CSS
- `@dnd-kit/react` for drag-and-drop functionality
- Zustand for application state management
- Supabase for backend data services
- React Router for page navigation
- Radix UI and Lucide React for accessible UI components and icons
- Recharts for dashboard and report visualizations

## Getting Started

### Prerequisites

- Node.js 18 or later
- npm

### Installation

1. Clone the repository:

   ```bash
   git clone <your-repository-url>
   cd kanban-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env.local` file and add your Supabase credentials:

   ```env
   VITE_SUPABASE_URL=your_supabase_project_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

The app will be available at the local URL shown in your terminal.

### Production Build

```bash
npm run build
```

## What I Learned

In this project, I learned how to handle drag-and-drop interactions, including moving tasks between Kanban columns.
