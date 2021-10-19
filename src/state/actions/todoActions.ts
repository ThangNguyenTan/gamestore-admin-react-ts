import { TodoActionType } from '../action-types/index'

export type ITodo = {
    id: number
    title: string
    completed: boolean
}

export type ITodoList = ITodo[]

interface FindTodosAction {
    type: TodoActionType.FIND
    payload: ITodoList
}

interface GetTodoAction {
    type: TodoActionType.GET
    payload: ITodo
}

interface CreateTodoAction {
    type: TodoActionType.CREATE
    payload: ITodo
}

interface UpdateTodoAction {
    type: TodoActionType.UPDATE
    payload: ITodo
}

interface DeleteTodoAction {
    type: TodoActionType.DELETE
    payload: {
        id: number
    }
}

export type TodoAction =
    | CreateTodoAction
    | UpdateTodoAction
    | DeleteTodoAction
    | FindTodosAction
    | GetTodoAction
