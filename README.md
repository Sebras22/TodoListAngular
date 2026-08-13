# TodoList — Angular Task Board

This project is a simple todolist app with board creation and task management, built with Angular 22 (standalone components, signals) and Angular Material. It supports server-side rendering (SSR) via Angular Universal / Express. It was made as a personal project to practice and learn modern Angular features and patterns, if you have any feedback please feel free to open an issue or PR !

## 🛠️ Tech stack

- [Angular](https://angular.dev/) 22 (standalone components, signals)
- TypeScript
- Angular Material / Angular CDK
- RxJS
- SCSS
- Express + Angular SSR (`@angular/ssr`) for server-side rendering
- [Vitest](https://vitest.dev/) for unit tests
- Prettier for formatting

## ✨ Features

- **Boards** — create and delete boards from the sidebar, each with its own URL (`/board/:id`)
- **Tasks** — add tasks to a board with a title, description, and optional due date
- **Status tracking** — move a task between `todo`, `in_progress`, and `done`
- **Delete tasks & boards** on the fly
- **Responsive layout** with a sidebar (boards) and main content area (task list)
- Server-side rendering (SSR) support via Angular Universal / Express

> **Note:** boards and tasks currently live in memory, there is no persistence yet, I might add localstorage sooner or later.

## 📁 Project structure

```
src/app/
├── components/
│   ├── layout/                    # Header (sidebar) & Body (main content) layout components
│   ├── board.component.*          # A single board entry in the sidebar
│   ├── boardCreation.component.*  # Form/modal to create a new board
│   ├── taskCard.component.*       # A single task card (status, delete, etc.)
│   ├── taskCreation.component.*   # Form to add a new task to a board
│   └── modalForm.component.*      # Reusable modal wrapper
├── models/
│   ├── board.model.ts
│   └── task.model.ts
├── services/
│   ├── board.service.ts           # Board state (signal-based) & CRUD
│   └── task.service.ts            # Task creation
├── app.routes.ts
└── app.ts
```

## 🚀 Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended)
- npm (this project pins `packageManager: npm@11.15.0`)

### Installation

```bash
git clone https://github.com/Sebras22/TodoListAngular.git
cd TodoListAngular
npm install
```

### Development server

```bash
ng serve
```

Navigate to `http://localhost:4200/`. The app reloads automatically when you edit source files.

### Build

```bash
ng build
```

Build artifacts are output to `dist/`.

### Server-side rendering (SSR)

After building, you can run the Express SSR server:

```bash
npm run serve:ssr:TodoList
```

## 📄 License

No licence, feel free to use this project as you wish.
