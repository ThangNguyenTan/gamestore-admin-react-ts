import { TodoActionType } from '../action-types/index'
import { TodoAction } from '../actions'
import { ITodoList } from '../actions/todoActions'

const initialState = {
    todos: [],
}

type IFindTodoState = {
    todos: ITodoList
}

const findTodosReducer = (
    state: IFindTodoState = initialState,
    action: TodoAction
): IFindTodoState => {
    switch (action.type) {
        case TodoActionType.FIND:
            return {
                ...state,
                todos: action.payload,
            }
        case TodoActionType.CREATE:
            return {
                ...state,
                todos: [action.payload, ...state.todos],
            }
        default:
            return state
    }
}

export default findTodosReducer
