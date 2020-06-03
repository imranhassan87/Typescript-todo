import React from 'react'
import '../styles/todoList.css'

interface TodoListProps {
    items: { id: string, title: string }[],
    deleteTodo: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = props => {

    return (
        <ul>
            {props.items.map(item => <li key={item.id}><span>{item.title}</span><button onClick={props.deleteTodo.bind(null, item.id)}>Delete</button></li>)}
        </ul>
    )
}

export default TodoList