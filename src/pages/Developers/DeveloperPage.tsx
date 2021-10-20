import React, { FC, useEffect, useState } from 'react'
import { Table, Space, Button } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import moment from 'moment'
import { AddDeveloperModal, EditDeveloperModal } from './components'
import { IDeveloper } from '../../interfaces'
import { RootState } from '../../state/reducers'
import { actionCreators } from '../../state'

const DeveloperPage: FC = () => {
    const dispatch = useDispatch()

    const [selectDeveloperID, setSelectedDeveloperID] = useState(1)
    const [editModalAppear, setEditModalAppear] = useState(false)

    const { developers, loading, error } = useSelector(
        (state: RootState) => state.findDevelopersReducer
    )

    const { findDevelopers } = bindActionCreators(actionCreators, dispatch)

    useEffect(() => {
        findDevelopers()
    }, [])

    const columns = [
        {
            title: 'Developer Name',
            dataIndex: 'developerName',
            key: 'developerName',
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
            render: (text: string, record: IDeveloper) => (
                <Space size="middle">
                    <Button
                        onClick={() => {
                            setSelectedDeveloperID(record.id!)
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
            <h1>Developer Page</h1>
            <AddDeveloperModal />
            <EditDeveloperModal
                developerId={selectDeveloperID}
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
                    dataSource={developers}
                />
            )}
        </div>
    )
}

export default DeveloperPage
