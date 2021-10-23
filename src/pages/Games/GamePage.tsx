import React, { FC, useEffect } from 'react'
import { Table, Space, Button, Tag } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import moment from 'moment'
import { Link, useHistory } from 'react-router-dom'
import { IFindGameItem } from '../../interfaces'
import { RootState } from '../../state/reducers'
import { actionCreators } from '../../state'

const GamePage: FC = () => {
    const dispatch = useDispatch()
    const history = useHistory()

    const { games, loading, error } = useSelector(
        (state: RootState) => state.findGamesReducer
    )

    const { findGames } = bindActionCreators(actionCreators, dispatch)

    useEffect(() => {
        findGames()
    }, [])

    const columns = [
        {
            title: 'Game Name',
            dataIndex: 'gameName',
            key: 'gameName',
            render: (text: string, record: IFindGameItem) => (
                <Link to={`/games/details/${record.id}`}>{text}</Link>
            ),
        },
        {
            title: 'Meta',
            dataIndex: 'GenreInstance',
            key: 'GenreInstance',
            render: (text: string, record: IFindGameItem) => (
                <>
                    <Tag color="magenta">
                        Genre: {record.GenreInstance.genreName}
                    </Tag>

                    <Tag color="green">
                        Feature: {record.FeatureInstance.featureName}
                    </Tag>

                    <br />

                    <Tag color="blue">
                        Developer: {record.DeveloperInstance.developerName}
                    </Tag>

                    <Tag color="gold">
                        Publisher: {record.PublisherInstance.publisherName}
                    </Tag>
                </>
            ),
        },
        {
            title: 'Realease Date',
            dataIndex: 'releaseDate',
            key: 'releaseDate',
            render: (text: string) => moment(text).format('DD-MMM-YYYY'),
        },
        {
            title: 'Action',
            key: 'action',
            render: (text: string, record: IFindGameItem) => (
                <Space size="middle">
                    <Button
                        onClick={() => {
                            history.push(`/games/update/${record.id}`)
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
            <h1>Game Page</h1>
            <Button
                type="primary"
                onClick={() => {
                    history.push('/games/create')
                }}
            >
                Create new Game
            </Button>
            <br />
            <br />
            {error ? (
                <h2>{error}</h2>
            ) : (
                <Table columns={columns} loading={loading} dataSource={games} />
            )}
        </div>
    )
}

export default GamePage
