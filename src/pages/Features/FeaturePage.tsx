import React, { FC, useEffect, useState } from 'react'
import { Table, Space, Button } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import moment from 'moment'
import { AddFeatureModal, EditFeatureModal } from './components'
import { IFeature } from '../../interfaces'
import { RootState } from '../../state/reducers'
import { actionCreators } from '../../state'

const FeaturePage: FC = () => {
    const dispatch = useDispatch()

    const [selectFeatureID, setSelectedFeatureID] = useState(1)
    const [editModalAppear, setEditModalAppear] = useState(false)

    const { features, loading, error } = useSelector(
        (state: RootState) => state.findFeaturesReducer
    )

    const { findFeatures } = bindActionCreators(actionCreators, dispatch)

    useEffect(() => {
        findFeatures()
    }, [])

    const columns = [
        {
            title: 'Feature Name',
            dataIndex: 'featureName',
            key: 'featureName',
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
            render: (text: string, record: IFeature) => (
                <Space size="middle">
                    <Button
                        onClick={() => {
                            setSelectedFeatureID(record.id!)
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
            <h1>Feature Page</h1>
            <AddFeatureModal />
            <EditFeatureModal
                featureId={selectFeatureID}
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
                    dataSource={features}
                />
            )}
        </div>
    )
}

export default FeaturePage
