import React, { FC, useEffect } from 'react'
import { Table } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import moment from 'moment'
import { Link } from 'react-router-dom'
import { RootState } from '../../state/reducers'
import { actionCreators } from '../../state'
import { IOrder } from '../../interfaces'

const HomePage: FC = () => {
    const dispatch = useDispatch()

    const { orders, loading, error } = useSelector(
        (state: RootState) => state.getAllOrdersReducer
    )

    const { getAllOrders } = bindActionCreators(actionCreators, dispatch)

    useEffect(() => {
        getAllOrders()
    }, [])

    const columns = [
        {
            title: 'User',
            dataIndex: 'username',
            key: 'username',
            render: (text: string, record: IOrder) =>
                record.UserInstance.username,
        },
        {
            title: 'Game Name',
            dataIndex: 'gameName',
            key: 'gameName',
            render: (text: string, record: IOrder) => (
                <Link to={`/games/details/${record.GameInstance.id}`}>
                    {record.GameInstance.gameName}
                </Link>
            ),
        },
        {
            title: 'Total Price',
            dataIndex: 'total',
            key: 'total',
            render: (text: string) => <>{`$${text}`}</>,
        },
        {
            title: 'Created Date',
            dataIndex: 'createdAt',
            key: 'createdAt',
            render: (text: string) => moment(text).format('DD-MMM-YYYY'),
        },
    ]

    return (
        <div>
            <h1>Home Page</h1>
            {error ? (
                <h2>{error}</h2>
            ) : (
                <Table
                    columns={columns}
                    loading={loading}
                    dataSource={orders}
                />
            )}
        </div>
    )
}

export default HomePage
