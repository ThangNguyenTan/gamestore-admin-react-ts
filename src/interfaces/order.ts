import { IFindGameItem } from './game'
import { IUser } from './user'

export type IOrder = {
    id?: number
    GameInstance: IFindGameItem
    UserInstance: IUser
    createdAt?: string
    updatedAt?: string
}

export type IOrderList = IOrder[]
