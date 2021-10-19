import { IUserAuth } from '../interfaces'

export * from './apiHelpers'

export const getErrorMessageFromResponse = (error: any): string =>
    error.response && error.response.data.message
        ? error.response.data.message
        : error.message

export const createAuthorizedRequestHeader = (
    userData: IUserAuth | null
): string => {
    if (!userData) {
        return ''
    }
    return `Bearer ${userData.token}`
}
