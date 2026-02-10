import TodoList from "./ToDoList";

const sampleTodos = [
  { id: "1", title: "Learn Storybook", done: false },
  { id: "2", title: "Write a comment", done: false },
  { id: "3", title: "Test edge cases", done: true },
];

export default {
  title: "Exercise/TodoList",
  component: TodoList,
  parameters: { layout: "centered" },
};

export const Empty = {
  args: { initialTodos: [], initialFilter: "all" },
};

export const WithTodos = {
  args: { initialTodos: sampleTodos, initialFilter: "all" },
};

export const FilterActive = {
  args: { initialTodos: sampleTodos, initialFilter: "active" },
};

export const FilterDone = {
  args: { initialTodos: sampleTodos, initialFilter: "done" },
};

export const ManyTodos = {
  args: {
    initialTodos: Array.from({ length: 12 }, (_, i) => ({
      id: String(i + 1),
      title: `Todo #${i + 1}`,
      done: i % 3 === 0,
    })),
    initialFilter: "all",
  },
};
