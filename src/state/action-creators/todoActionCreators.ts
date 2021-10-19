import axios, { AxiosResponse } from 'axios'
import { Dispatch } from 'redux'
import { TodoActionType } from '../action-types'
import { TodoAction } from '../actions'
import { mainTodosURL, singleTodoURL } from '../../utils/apiHelpers'
import { ITodo, ITodoList } from '../actions/todoActions'

export const findTodos = () => {
    return async (dispatch: Dispatch<TodoAction>): Promise<void> => {
        const res: AxiosResponse<ITodoList> = await axios.get(mainTodosURL())

        dispatch({
            type: TodoActionType.FIND,
            payload: res.data,
        })
    }
}

export const getTodo = (id: string | number) => {
    return async (dispatch: Dispatch<TodoAction>): Promise<void> => {
        const res: AxiosResponse<ITodo> = await axios.post(singleTodoURL(id))

        dispatch({
            type: TodoActionType.GET,
            payload: res.data,
        })
    }
}

export const createTodo = (title: string) => {
    return async (dispatch: Dispatch<TodoAction>): Promise<void> => {
        const res: AxiosResponse<ITodo> = await axios.post(mainTodosURL(), {
            title,
        })

        dispatch({
            type: TodoActionType.CREATE,
            payload: res.data,
        })
    }
}

export const updateTodo = (modifiedTodo: ITodo) => {
    return async (dispatch: Dispatch<TodoAction>): Promise<void> => {
        const res: AxiosResponse<ITodo> = await axios.put(
            singleTodoURL(modifiedTodo.id),
            modifiedTodo
        )

        dispatch({
            type: TodoActionType.UPDATE,
            payload: res.data,
        })
    }
}

export const deleteTodo = (id: number) => {
    return async (dispatch: Dispatch<TodoAction>): Promise<void> => {
        const res: AxiosResponse<ITodo> = await axios.delete(singleTodoURL(id))

        dispatch({
            type: TodoActionType.DELETE,
            payload: { id: res.data.id },
        })
    }
}
