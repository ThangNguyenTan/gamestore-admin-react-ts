import React, { FC, useEffect, useState } from 'react'
import { Table, Space, Button, Input } from 'antd'
import Highlighter from 'react-highlight-words'
import { SearchOutlined } from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import moment from 'moment'
import { AddDeveloperModal, EditDeveloperModal } from './components'
import { IDeveloper } from '../../interfaces'
import { RootState } from '../../state/reducers'
import { actionCreators } from '../../state'

const DeveloperPage: FC = () => {
    const dispatch = useDispatch()

    let inputField: any

    const [searchText, setSearchText] = useState('')
    const [searchedColumn, setSearchedColumn] = useState('')
    const [selectDeveloperID, setSelectedDeveloperID] = useState(1)
    const [editModalAppear, setEditModalAppear] = useState(false)

    const { developers, loading, error } = useSelector(
        (state: RootState) => state.findDevelopersReducer
    )

    const { findDevelopers } = bindActionCreators(actionCreators, dispatch)

    useEffect(() => {
        findDevelopers()
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
            title: 'Developer Name',
            dataIndex: 'developerName',
            key: 'developerName',
            ...getColumnSearchProps('developerName'),
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
