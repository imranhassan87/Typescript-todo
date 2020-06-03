import React, { useRef, FC } from 'react'
import '../styles/newTodo.css'

interface NewTodoProps {
    todoApp: (text: string) => void
}

const NewTodo: React.FC<NewTodoProps> = props => {
    const textInputRef = useRef<HTMLInputElement>(null)
    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault()
        const enteredText = textInputRef.current!.value
        props.todoApp(enteredText)
    }
    return (
        <form onSubmit={submitHandler}>
            <div>
                <label htmlFor="todo-text">TODO Text</label>
                <input type="text" id="todo-text" ref={textInputRef} />
            </div>
            <button type="submit">ADD TODO</button>
        </form>
    )
}

export default NewTodo
