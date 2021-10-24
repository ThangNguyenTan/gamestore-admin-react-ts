import React, { FC, useEffect, useState } from 'react'
import { Modal, Button, Form, Input, Alert, message } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { RootState } from '../../../state/reducers'
import { actionCreators } from '../../../state'
import { IGenre } from '../../../interfaces'

type Props = {
    genreId: number
    isAppear: boolean
    setEditModalAppear: React.Dispatch<React.SetStateAction<boolean>>
}

const UpdateGenreModal: FC<Props> = (props) => {
    const dispatch = useDispatch()

    const { isAppear, setEditModalAppear, genreId } = props

    const [isSubmitted, setIsSubmitted] = useState(false)

    const { loading, error } = useSelector(
        (state: RootState) => state.updateGenreReducer
    )
    const {
        genre,
        loading: getGenreLoading,
        error: getGenreError,
    } = useSelector((state: RootState) => state.getGenreReducer)

    const { updateGenre, getGenre } = bindActionCreators(
        actionCreators,
        dispatch
    )

    useEffect(() => {
        getGenre(genreId)
    }, [genreId])

    useEffect(() => {
        if (isSubmitted) {
            if (!loading) {
                if (error) {
                    message.error(error)
                } else {
                    message.success('Updated a genre')
                }
                setIsSubmitted(false)
            }
        }
    }, [isSubmitted, loading, error])

    const handleCancel = (): void => {
        setEditModalAppear(false)
    }

    const onFinish = (values: IGenre): void => {
        updateGenre({
            id: genreId,
            ...values,
        })
    }

    if (getGenreError) {
        return (
            <Modal
                title="Update Genre Modal"
                visible={isAppear}
                footer={[
                    <Button key="back" onClick={handleCancel}>
                        Close
                    </Button>,
                ]}
            >
                <h2>{getGenreError}</h2>
            </Modal>
        )
    }

    return (
        <>
            <Modal
                title="Update Genre Modal"
                visible={isAppear}
                footer={[
                    <Button key="back" onClick={handleCancel}>
                        Close
                    </Button>,
                ]}
            >
                {error && <Alert message={error} type="error" closable />}
                {!getGenreLoading ? (
                    <Form
                        name="create-genre-form"
                        onFinish={onFinish}
                        autoComplete="off"
                        layout="vertical"
                        initialValues={genre!}
                    >
                        <Form.Item
                            label="Genre Name"
                            name="genreName"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input the genre name!',
                                },
                            ]}
                        >
                            <Input
                                placeholder="Genre Name"
                                disabled={loading || getGenreLoading}
                            />
                        </Form.Item>

                        <Form.Item>
                            <Button
                                type="primary"
                                htmlType="submit"
                                block
                                loading={loading || getGenreLoading}
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

export default UpdateGenreModal
