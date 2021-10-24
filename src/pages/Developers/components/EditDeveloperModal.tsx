import React, { FC, useEffect, useState } from 'react'
import { Modal, Button, Form, Input, Alert, message } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { RootState } from '../../../state/reducers'
import { actionCreators } from '../../../state'
import { IDeveloper } from '../../../interfaces'

type Props = {
    developerId: number
    isAppear: boolean
    setEditModalAppear: React.Dispatch<React.SetStateAction<boolean>>
}

const UpdateDeveloperModal: FC<Props> = (props) => {
    const dispatch = useDispatch()

    const { isAppear, setEditModalAppear, developerId } = props

    const [isSubmitted, setIsSubmitted] = useState(false)

    const { loading, error } = useSelector(
        (state: RootState) => state.updateDeveloperReducer
    )
    const {
        developer,
        loading: getDeveloperLoading,
        error: getDeveloperError,
    } = useSelector((state: RootState) => state.getDeveloperReducer)

    const { updateDeveloper, getDeveloper } = bindActionCreators(
        actionCreators,
        dispatch
    )

    useEffect(() => {
        getDeveloper(developerId)
    }, [developerId])

    useEffect(() => {
        if (isSubmitted) {
            if (!loading) {
                if (error) {
                    message.error(error)
                } else {
                    message.success('Updated a developer')
                }
                setIsSubmitted(false)
            }
        }
    }, [isSubmitted, loading, error])

    const handleCancel = (): void => {
        setEditModalAppear(false)
    }

    const onFinish = (values: IDeveloper): void => {
        updateDeveloper({
            id: developerId,
            ...values,
        })
    }

    if (getDeveloperError) {
        return (
            <Modal
                title="Update Developer Modal"
                visible={isAppear}
                footer={[
                    <Button key="back" onClick={handleCancel}>
                        Close
                    </Button>,
                ]}
            >
                <h2>{getDeveloperError}</h2>
            </Modal>
        )
    }

    return (
        <>
            <Modal
                title="Update Developer Modal"
                visible={isAppear}
                footer={[
                    <Button key="back" onClick={handleCancel}>
                        Close
                    </Button>,
                ]}
            >
                {error && <Alert message={error} type="error" closable />}
                {!getDeveloperLoading ? (
                    <Form
                        name="create-developer-form"
                        onFinish={onFinish}
                        autoComplete="off"
                        layout="vertical"
                        initialValues={developer!}
                    >
                        <Form.Item
                            label="Developer Name"
                            name="developerName"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input the developer name!',
                                },
                            ]}
                        >
                            <Input
                                placeholder="Developer Name"
                                disabled={loading || getDeveloperLoading}
                            />
                        </Form.Item>

                        <Form.Item>
                            <Button
                                type="primary"
                                htmlType="submit"
                                block
                                loading={loading || getDeveloperLoading}
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

export default UpdateDeveloperModal
