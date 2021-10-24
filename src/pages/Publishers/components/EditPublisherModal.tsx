import React, { FC, useEffect, useState } from 'react'
import { Modal, Button, Form, Input, Alert, message } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { RootState } from '../../../state/reducers'
import { actionCreators } from '../../../state'
import { IPublisher } from '../../../interfaces'

type Props = {
    publisherId: number
    isAppear: boolean
    setEditModalAppear: React.Dispatch<React.SetStateAction<boolean>>
}

const UpdatePublisherModal: FC<Props> = (props) => {
    const dispatch = useDispatch()

    const { isAppear, setEditModalAppear, publisherId } = props

    const [isSubmitted, setIsSubmitted] = useState(false)

    const { loading, error } = useSelector(
        (state: RootState) => state.updatePublisherReducer
    )
    const {
        publisher,
        loading: getPublisherLoading,
        error: getPublisherError,
    } = useSelector((state: RootState) => state.getPublisherReducer)

    const { updatePublisher, getPublisher } = bindActionCreators(
        actionCreators,
        dispatch
    )

    useEffect(() => {
        getPublisher(publisherId)
    }, [publisherId])

    useEffect(() => {
        if (isSubmitted) {
            if (!loading) {
                if (error) {
                    message.error(error)
                } else {
                    message.success('Updated a publisher')
                }
                setIsSubmitted(false)
            }
        }
    }, [isSubmitted, loading, error])

    const handleCancel = (): void => {
        setEditModalAppear(false)
    }

    const onFinish = (values: IPublisher): void => {
        updatePublisher({
            id: publisherId,
            ...values,
        })
    }

    if (getPublisherError) {
        return (
            <Modal
                title="Update Publisher Modal"
                visible={isAppear}
                footer={[
                    <Button key="back" onClick={handleCancel}>
                        Close
                    </Button>,
                ]}
            >
                <h2>{getPublisherError}</h2>
            </Modal>
        )
    }

    return (
        <>
            <Modal
                title="Update Publisher Modal"
                visible={isAppear}
                footer={[
                    <Button key="back" onClick={handleCancel}>
                        Close
                    </Button>,
                ]}
            >
                {error && <Alert message={error} type="error" closable />}
                {!getPublisherLoading ? (
                    <Form
                        name="create-publisher-form"
                        onFinish={onFinish}
                        autoComplete="off"
                        layout="vertical"
                        initialValues={publisher!}
                    >
                        <Form.Item
                            label="Publisher Name"
                            name="publisherName"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input the publisher name!',
                                },
                            ]}
                        >
                            <Input
                                placeholder="Publisher Name"
                                disabled={loading || getPublisherLoading}
                            />
                        </Form.Item>

                        <Form.Item>
                            <Button
                                type="primary"
                                htmlType="submit"
                                block
                                loading={loading || getPublisherLoading}
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

export default UpdatePublisherModal
