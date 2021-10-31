import { IFeature } from './feature'
import { IGenre } from './genre'
import { IDeveloper } from './developer'
import { IPublisher } from './publisher'

export type IGame = {
    id?: number
    gamePrice: number
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
