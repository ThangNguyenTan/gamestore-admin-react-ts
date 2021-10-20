import React, { FC, useEffect, useState } from 'react'
import { Modal, Button, Form, Input, Alert, message } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { RootState } from '../../../state/reducers'
import { actionCreators } from '../../../state'
import { IFeature } from '../../../interfaces'

type Props = {
    featureId: number
    isAppear: boolean
    setEditModalAppear: React.Dispatch<React.SetStateAction<boolean>>
}

const UpdateFeatureModal: FC<Props> = (props) => {
    const dispatch = useDispatch()

    const { isAppear, setEditModalAppear, featureId } = props

    const [isSubmitted, setIsSubmitted] = useState(false)

    const { loading, error } = useSelector(
        (state: RootState) => state.updateFeatureReducer
    )
    const {
        feature,
        loading: getFeatureLoading,
        error: getFeatureError,
    } = useSelector((state: RootState) => state.getFeatureReducer)

    const { updateFeature, getFeature } = bindActionCreators(
        actionCreators,
        dispatch
    )

    useEffect(() => {
        getFeature(featureId)
    }, [featureId])

    useEffect(() => {
        if (isSubmitted) {
            if (!loading) {
                if (error) {
                    message.error(error)
                } else {
                    message.success('Updated a feature')
                }
                setIsSubmitted(false)
            }
        }
    }, [isSubmitted, loading, error])

    const handleCancel = (): void => {
        setEditModalAppear(false)
    }

    const onFinish = (values: IFeature): void => {
        updateFeature({
            id: featureId,
            ...values,
        })
        setIsSubmitted(true)
    }

    if (getFeatureError) {
        message.error(getFeatureError)
        return <></>
    }

    return (
        <>
            <Modal
                title="Update Feature Modal"
                visible={isAppear}
                footer={[
                    <Button key="back" onClick={handleCancel}>
                        Close
                    </Button>,
                ]}
            >
                {error && <Alert message={error} type="error" closable />}
                {!getFeatureLoading ? (
                    <Form
                        name="create-feature-form"
                        onFinish={onFinish}
                        autoComplete="off"
                        layout="vertical"
                        initialValues={feature!}
                    >
                        <Form.Item
                            label="Feature Name"
                            name="featureName"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input the feature name!',
                                },
                            ]}
                        >
                            <Input
                                placeholder="Feature Name"
                                disabled={loading || getFeatureLoading}
                            />
                        </Form.Item>

                        <Form.Item>
                            <Button
                                type="primary"
                                htmlType="submit"
                                block
                                loading={loading || getFeatureLoading}
                            >
                                Save
                            </Button>
                        </Form.Item>
                    </Form>
                ) : (
                    <h2>Loading...</h2>
                )}
            </Modal>
        </>
    )
}

export default UpdateFeatureModal
