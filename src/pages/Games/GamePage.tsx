import React, { FC, useEffect, useState } from 'react'
import { Table, Space, Button, Input, Tag } from 'antd'
import Highlighter from 'react-highlight-words'
import { SearchOutlined } from '@ant-design/icons'
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

    let inputField: any

    const [searchText, setSearchText] = useState('')
    const [searchedColumn, setSearchedColumn] = useState('')

    const { games, loading, error } = useSelector(
        (state: RootState) => state.findGamesReducer
    )

    const { findGames } = bindActionCreators(actionCreators, dispatch)

    useEffect(() => {
        findGames()
    }, [])

    const handleSearch = (
        selectedKeys: string[],
        confirm: () => void,
        dataIndex: string
    ): void => {
        confirm()
        setSearchText(selectedKeys[0])
        setSearchedColumn(dataIndex)
    }

    const handleReset = (clearFilters: () => void): void => {
        clearFilters()
        setSearchText('')
    }

    const getColumnSearchProps = (dataIndex: string): any => ({
        filterDropdown: ({
            setSelectedKeys,
            selectedKeys,
            confirm,
            clearFilters,
        }: any) => (
            <div style={{ padding: 8 }}>
                <Input
                    ref={(node: any) => {
                        inputField = node
                    }}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={(e: any) =>
                        setSelectedKeys(e.target.value ? [e.target.value] : [])
                    }
                    onPressEnter={() =>
                        handleSearch(selectedKeys, confirm, dataIndex)
                    }
                    style={{ marginBottom: 8, display: 'block' }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() =>
                            handleSearch(selectedKeys, confirm, dataIndex)
                        }
                        icon={<SearchOutlined />}
                        size="small"
                        style={{ width: 90 }}
                    >
                        Search
                    </Button>
                    <Button
                        onClick={() => handleReset(clearFilters)}
                        size="small"
                        style={{ width: 90 }}
                    >
                        Reset
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            confirm({ closeDropdown: false })
                            setSearchText(selectedKeys[0])
                            setSearchedColumn(dataIndex)
                        }}
                    >
                        Filter
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered: boolean) => (
            <SearchOutlined
                style={{ color: filtered ? '#1890ff' : undefined }}
            />
        ),
        onFilter: (value: string, record: any) =>
            record[dataIndex]
                ? record[dataIndex]
                      .toString()
                      .toLowerCase()
                      .includes(value.toLowerCase())
                : '',
        onFilterDropdownVisibleChange: (visible: boolean) => {
            if (visible) {
                setTimeout(() => inputField.select(), 100)
            }
        },
        render: (text: string) =>
            searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
                    searchWords={[searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ''}
                />
            ) : (
                text
            ),
    })

    const columns = [
        {
            title: 'Game Name',
            dataIndex: 'gameName',
            key: 'gameName',
            render: (text: string, record: IFindGameItem) => (
                <Link to={`/games/details/${record.id}`}>{text}</Link>
            ),
            ...getColumnSearchProps('gameName'),
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
