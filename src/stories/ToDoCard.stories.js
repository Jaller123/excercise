
import TodoCard  from "./ToDoCard"

export default {
    title: 'Exercise/TodoCard',
    component: TodoCard,
    parameters: {layout: 'centered',},
    args: {
      title: "Buy Coffee",
      done: false,
      loading: false,
      onToggle: () =>{},
      onDelete: () =>{},  
    },
    tags: ['autodocs'],
}

export const Default = {}

export const Done = {
    args: {
        done: true,
    }
}

export const Loading = {
    args: {
        loading: true,
    }
}

export const LongTitle = {
    args: {
        title:  "This is a very long todo title to test how the component behaves when text wraps onto multiple lines",
    }
}