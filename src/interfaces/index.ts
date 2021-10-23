export type IUserSignIn = {
    email: string
    password: string
}

export type IGame = {
    id?: number
    gameName: string
    gamePoster: string
    gameTrailer: string
    gameDescription: string
    releaseDate: string
    createdAt?: string
    updatedAt?: string
}

export interface IFindGameItem extends IGame {
    FeatureInstance: IFeature
    GenreInstance: IGenre
    DeveloperInstance: IDeveloper
    PublisherInstance: IPublisher
}

export interface ICreateGame extends IGame {
    PublisherInstanceId: number
    GenreInstanceId: number
    FeatureInstanceId: number
    DeveloperInstanceId: number
}

export type IUpdateGame = ICreateGame
export type IGameList = IGame[]
export type IFindGameList = IFindGameItem[]

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
