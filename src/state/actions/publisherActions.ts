import { PublisherActionType } from '../action-types'
import { IPublisher, IPublisherList } from '../../interfaces'

interface GetAllPublishersRequestAction {
    type: PublisherActionType.GET_ALL_PUBLISHERS_REQUEST
}
interface GetAllPublishersSuccessAction {
    type: PublisherActionType.GET_ALL_PUBLISHERS_SUCCESS
    payload: IPublisherList
}
interface GetAllPublishersFailAction {
    type: PublisherActionType.GET_ALL_PUBLISHERS_FAIL
    payload: string
}

interface GetPublisherRequestAction {
    type: PublisherActionType.GET_PUBLISHER_REQUEST
}
interface GetPublisherSuccessAction {
    type: PublisherActionType.GET_PUBLISHER_SUCCESS
    payload: IPublisher
}
interface GetPublisherFailAction {
    type: PublisherActionType.GET_PUBLISHER_FAIL
    payload: string
}

interface CreatePublisherRequestAction {
    type: PublisherActionType.CREATE_PUBLISHER_REQUEST
}
interface CreatePublisherSuccessAction {
    type: PublisherActionType.CREATE_PUBLISHER_SUCCESS
    payload: IPublisher
}
interface CreatePublisherFailAction {
    type: PublisherActionType.CREATE_PUBLISHER_FAIL
    payload: string
}

interface UpdatePublisherRequestAction {
    type: PublisherActionType.UPDATE_PUBLISHER_REQUEST
}
interface UpdatePublisherSuccessAction {
    type: PublisherActionType.UPDATE_PUBLISHER_SUCCESS
    payload: IPublisher
}
interface UpdatePublisherFailAction {
    type: PublisherActionType.UPDATE_PUBLISHER_FAIL
    payload: string
}

export type PublisherAction =
    | GetAllPublishersRequestAction
    | GetAllPublishersSuccessAction
    | GetAllPublishersFailAction
    | GetPublisherRequestAction
    | GetPublisherSuccessAction
    | GetPublisherFailAction
    | CreatePublisherRequestAction
    | CreatePublisherSuccessAction
    | CreatePublisherFailAction
    | UpdatePublisherRequestAction
    | UpdatePublisherSuccessAction
    | UpdatePublisherFailAction
