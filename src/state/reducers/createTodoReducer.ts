import { TodoActionType } from '../action-types/index'
import { TodoAction } from '../actions'
import { ITodo } from '../actions/todoActions'

const initialState = {
    todo: null,
}

type ICreateTodoState = {
    todo: ITodo | null
}

const createTodoReducer = (
    state: ICreateTodoState = initialState,
    action: TodoAction
): ICreateTodoState => {
    switch (action.type) {
        case TodoActionType.CREATE:
            return {
                ...state,
                todo: action.payload,
            }
        default:
            return state
    }
}

export default createTodoReducer
