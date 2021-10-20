import React, { FC, useEffect, useState } from 'react'
import { Table, Space, Button } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import moment from 'moment'
import { AddPublisherModal, EditPublisherModal } from './components'
import { IPublisher } from '../../interfaces'
import { RootState } from '../../state/reducers'
import { actionCreators } from '../../state'

const PublisherPage: FC = () => {
    const dispatch = useDispatch()

    const [selectPublisherID, setSelectedPublisherID] = useState(1)
    const [editModalAppear, setEditModalAppear] = useState(false)

    const { publishers, loading, error } = useSelector(
        (state: RootState) => state.findPublishersReducer
    )

    const { findPublishers } = bindActionCreators(actionCreators, dispatch)

    useEffect(() => {
        findPublishers()
    }, [])

    const columns = [
        {
            title: 'Publisher Name',
            dataIndex: 'publisherName',
            key: 'publisherName',
        },
        {
            title: 'Created Date',
            dataIndex: 'createdAt',
            key: 'createdAt',
            render: (text: string) => moment(text).format('DD-MMM-YYYY'),
        },
        {
            title: 'Last Modified',
            dataIndex: 'updatedAt',
            key: 'updatedAt',
            render: (text: string) => moment(text).format('DD-MMM-YYYY'),
        },
        {
            title: 'Action',
            key: 'action',
            render: (text: string, record: IPublisher) => (
                <Space size="middle">
                    <Button
                        onClick={() => {
                            setSelectedPublisherID(record.id!)
                            setEditModalAppear(true)
                        }}
                    >
                        Edit
                    </Button>
                </Space>
            ),
        },
    ]

    return (
        <div>
            <h1>Publisher Page</h1>
            <AddPublisherModal />
            <EditPublisherModal
                publisherId={selectPublisherID}
                setEditModalAppear={setEditModalAppear}
                isAppear={editModalAppear}
            />
            <br />
            <br />
            {error ? (
                <h2>{error}</h2>
            ) : (
                <Table
                    columns={columns}
                    loading={loading}
                    dataSource={publishers}
                />
            )}
        </div>
    )
}

export default PublisherPage
