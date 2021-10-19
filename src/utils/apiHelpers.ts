const MAIN_API_URL = process.env.REACT_APP_API_URL

export const mainTodosURL = (): string => `${MAIN_API_URL}/todos`
export const singleTodoURL = (id: number | string): string =>
    `${MAIN_API_URL}/todos/${id}`
