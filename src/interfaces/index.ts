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

export type IGenre = {
    id?: number
    genreName: string
    createdAt?: string
    updatedAt?: string
}

export type IGenreList = IGenre[]

export type IFeature = {
    id?: number
    featureName: string
    createdAt?: string
    updatedAt?: string
}

export type IFeatureList = IFeature[]

export type IDeveloper = {
    id?: number
    developerName: string
    createdAt?: string
    updatedAt?: string
}

export type IDeveloperList = IDeveloper[]

export type IPublisher = {
    id?: number
    publisherName: string
    createdAt?: string
    updatedAt?: string
}

export type IPublisherList = IPublisher[]
