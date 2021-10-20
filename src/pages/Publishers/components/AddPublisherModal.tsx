import React, { FC, useRef, useState, useEffect } from 'react'
import { Modal, Button, Form, Input, Alert, message, FormInstance } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { RootState } from '../../../state/reducers'
import { actionCreators } from '../../../state'
import { IPublisher } from '../../../interfaces'

const AddPublisherModal: FC = () => {
    const dispatch = useDispatch()

    const formRef = useRef<FormInstance | null>(null)
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const { loading, error } = useSelector(
        (state: RootState) => state.createPublisherReducer
    )

    const { createPublisher } = bindActionCreators(actionCreators, dispatch)

    useEffect(() => {
        if (isSubmitted) {
            if (!loading) {
                if (error) {
                    message.error(error)
                } else {
                    message.success('Created a new publisher')
                    formRef.current!.setFieldsValue({ publisherName: '' })
                }
                setIsSubmitted(false)
            }
        }
    }, [isSubmitted, loading, error])

    const showModal = (): void => {
        setIsModalVisible(true)
    }

    const handleCancel = (): void => {
        setIsModalVisible(false)
    }

    const onFinish = (values: IPublisher): void => {
        createPublisher(values.publisherName)
        setIsSubmitted(true)
    }

    return (
        <>
            <Button type="primary" onClick={showModal}>
                Create new Publisher
            </Button>
            <Modal
                title="Add Publisher Modal"
                visible={isModalVisible}
                footer={[
                    <Button key="back" onClick={handleCancel}>
                        Close
                    </Button>,
                ]}
            >
                {error && <Alert message={error} type="error" closable />}
                <Form
                    ref={formRef}
                    name="create-publisher-form"
                    onFinish={onFinish}
                    autoComplete="off"
                    layout="vertical"
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
                            disabled={loading}
                        />
                    </Form.Item>

                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            block
                            loading={loading}
                        >
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    )
}

export default AddPublisherModal
