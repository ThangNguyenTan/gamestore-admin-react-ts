import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../../state'
import { RootState } from '../../state/reducers'

const TodoPage: React.FC = () => {
    const dispatch = useDispatch()

    const [title, setTitle] = useState('')

    const { todos } = useSelector((state: RootState) => state.findTodosReducer)

    const { findTodos, createTodo } = bindActionCreators(
        actionCreators,
        dispatch
    )

    useEffect(() => {
        findTodos()
    }, [])

    const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
        createTodo(title)
    }

    return (
        <div>
            <h1>Todo Page</h1>
            <form onSubmit={onSubmit}>
                <div>
                    <input
                        type="text"
                        placeholder="Title"
                        name="title"
                        id="title"
                        required
                        onChange={(e) => {
                            setTitle(e.target.value)
                        }}
                        value={title}
                    />

                    <button type="submit">Create</button>
                </div>
            </form>
            <ul>
                {todos.length > 0
                    ? todos.map((todo) => {
                          return <li key={todo.id}>{todo.title}</li>
                      })
                    : 'N/A'}
            </ul>
        </div>
    )
}

export default TodoPage
