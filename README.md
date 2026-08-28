# To Do List

A browser-based TODO app with persistent storage, inline editing, and a light/dark theme — built as a hands-on React learning project.

https://todo-app-vergiene.netlify.app/
![Screenshot](/docs/lightTheme.png)
![Screenshot](/docs/darkTheme.png)

## Tech stack

- React (function components, hooks)
- Vite (build tool / dev server)
- Plain CSS with custom properties (theming, no framework)
- SVG icons from [Lucide](https://lucide.dev/)
- Browser `localStorage` for persistence

## Architecture

State lives in one place: `App` owns the `tasks` array and the `theme` string, and derives the active/completed lists from `tasks` on every render rather than storing them separately. Persistence is handled by `useLocalStorage`, a generic hook that syncs any piece of state to `localStorage` — it has no idea whether it's storing tasks or a theme string, which is what makes it reusable for both. Below `App`, components only know about their own slice of the problem: `ToDoForm` turns raw input into a new task object and hands it up via `onAddTask`; `ToDoList` is a pure rendering layer that maps `tasks` to `ToDoItem` and never touches state itself; `ToDoItem` owns its *own* local state for edit-mode (`isEdit`, `newContent`) so that editing one task doesn't re-render or affect any other task, and only reports the final result back up through `handleEditTask`. `Clock` and `Theme` are self-contained — `Clock` runs its own interval internally, `Theme` just reflects whatever theme value and toggle function it's given. Theming itself lives outside React entirely: `App` sets a `data-theme` attribute on `<html>`, and every color in the CSS is a `var(--...)` that resolves differently depending on that attribute.

## Running locally

```bash
git clone https://github.com/vergiene/todo-app.git
cd todo-app
npm install
npm run dev
```
