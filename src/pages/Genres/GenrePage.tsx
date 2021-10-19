import React, { FC, useEffect, useState } from 'react'
import { Table, Space, Button } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import moment from 'moment'
import { AddGenreModal, EditGenreModal } from './components'
import { IGenre } from '../../interfaces'
import { RootState } from '../../state/reducers'
import { actionCreators } from '../../state'

const GenrePage: FC = () => {
    const dispatch = useDispatch()

    const [selectGenreID, setSelectedGenreID] = useState(1)
    const [editModalAppear, setEditModalAppear] = useState(false)

    const { genres, loading, error } = useSelector(
        (state: RootState) => state.findGenresReducer
    )

    const { findGenres } = bindActionCreators(actionCreators, dispatch)

    useEffect(() => {
        findGenres()
    }, [])

    const columns = [
        {
            title: 'Genre Name',
            dataIndex: 'genreName',
            key: 'genreName',
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
            render: (text: string, record: IGenre) => (
                <Space size="middle">
                    <Button
                        onClick={() => {
                            setSelectedGenreID(record.id!)
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
            <h1>Genre Page</h1>
            <AddGenreModal />
            <EditGenreModal
                genreId={selectGenreID}
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
                    dataSource={genres}
                />
            )}
        </div>
    )
}

export default GenrePage
