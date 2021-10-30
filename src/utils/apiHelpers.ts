const MAIN_API_URL = process.env.REACT_APP_API_URL

export const mainTodosURL = (): string => `${MAIN_API_URL}/todos`
export const singleTodoURL = (id: number | string): string =>
    `${MAIN_API_URL}/todos/${id}`

export const mainGenresURL = (): string => `${MAIN_API_URL}/genres`
export const singleGenreURL = (id: number | string): string =>
    `${MAIN_API_URL}/genres/${id}`

export const mainFeaturesURL = (): string => `${MAIN_API_URL}/features`
export const singleFeatureURL = (id: number | string): string =>
    `${MAIN_API_URL}/features/${id}`

export const mainDevelopersURL = (): string => `${MAIN_API_URL}/developers`
export const singleDeveloperURL = (id: number | string): string =>
    `${MAIN_API_URL}/developers/${id}`

export const mainPublishersURL = (): string => `${MAIN_API_URL}/publishers`
export const singlePublisherURL = (id: number | string): string =>
    `${MAIN_API_URL}/publishers/${id}`

export const mainUsersURL = (): string => `${MAIN_API_URL}/users`
export const singleUserURL = (id: number | string): string =>
    `${MAIN_API_URL}/users/${id}`

export const mainGamesURL = (): string => `${MAIN_API_URL}/games`
export const singleGameURL = (id: number | string): string =>
    `${MAIN_API_URL}/games/${id}`

export const mainOrdersURL = (): string => `${MAIN_API_URL}/orders`
export const singleOrderURL = (id: number | string): string =>
    `${MAIN_API_URL}/orders/${id}`
