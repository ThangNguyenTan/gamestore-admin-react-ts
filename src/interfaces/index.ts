export type IUser = {
    id?: number
    username: string
    email?: string
    password: string
}

export type IUserAuth = {
    user: IUser
    token: string
}

export type IGenre = {
    id?: number
    genreName: string
    createdAt?: string
    updatedAt?: string
}

export type IGenreList = IGenre[]
