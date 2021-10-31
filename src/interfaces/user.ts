export type IUserSignIn = {
    email: string
    password: string
}

export type IUser = {
    id?: number
    username: string
    email?: string
    password: string
    createdAt?: string
    updatedAt?: string
}

export type IUserList = IUser[]

export type IUserAuth = {
    user: IUser
    token: string
}
