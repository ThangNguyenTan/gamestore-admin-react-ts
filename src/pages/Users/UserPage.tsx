import React, { FC, useEffect } from 'react'
import { Table } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import moment from 'moment'
import { RootState } from '../../state/reducers'
import { actionCreators } from '../../state'

const UserPage: FC = () => {
    const dispatch = useDispatch()

    const { users, loading, error } = useSelector(
        (state: RootState) => state.findUsersReducer
    )

    const { findUsers } = bindActionCreators(actionCreators, dispatch)

    useEffect(() => {
        findUsers()
    }, [])

    const columns = [
        {
            title: 'User Name',
            dataIndex: 'username',
            key: 'username',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
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
    ]

    return (
        <div>
            <h1>User Page</h1>
            {error ? (
                <h2>{error}</h2>
            ) : (
                <Table columns={columns} loading={loading} dataSource={users} />
            )}
        </div>
    )
}

export default UserPage
