import React, { FC, useRef, useState, useEffect } from 'react'
import { Form, Button, FormInstance, Alert, Input, Select, message } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { useHistory } from 'react-router-dom'
import { ICreateGame } from '../../interfaces'
import { actionCreators } from '../../state'
import { RootState } from '../../state/reducers/index'

const { Option } = Select

const AddGamePage: FC = () => {
    const dispatch = useDispatch()
    const history = useHistory()

    const formRef = useRef<FormInstance | null>(null)

    const [isSubmitted, setIsSubmitted] = useState(false)

    const { loading, error } = useSelector(
        (state: RootState) => state.createGameReducer
    )
    const { genres, loading: genreLoading, error: genreError } = useSelector(
        (state: RootState) => state.findGenresReducer
    )
    const {
        features,
        loading: featuresLoading,
        error: featuresError,
    } = useSelector((state: RootState) => state.findFeaturesReducer)
    const {
        developers,
        loading: developersLoading,
        error: developersError,
    } = useSelector((state: RootState) => state.findDevelopersReducer)
    const {
        publishers,
        loading: publishersLoading,
        error: publishersError,
    } = useSelector((state: RootState) => state.findPublishersReducer)

    const {
        createGame,
        findGenres,
        findFeatures,
        findDevelopers,
        findPublishers,
    } = bindActionCreators(actionCreators, dispatch)

    useEffect(() => {
        findGenres()
        findFeatures()
        findDevelopers()
        findPublishers()
    }, [])

    useEffect(() => {
        if (isSubmitted) {
            if (!loading) {
                if (error) {
                    message.error(error)
                } else {
                    message.success('Created a new game')
                    history.push('/games')
                }
                setIsSubmitted(false)
            }
        }
    }, [isSubmitted, loading, error])

    const onFinish = (values: ICreateGame): void => {
        createGame(values)
        setIsSubmitted(true)
    }

    return (
        <>
            <h1>Create Game Page</h1>
            {error && <Alert message={error} type="error" closable />}
            <Form
                ref={formRef}
                name="create-game-form"
                onFinish={onFinish}
                autoComplete="off"
                layout="vertical"
                initialValues={{
                    GenreInstanceId: 1,
                    FeatureInstanceId: 1,
                    DeveloperInstanceId: 1,
                    PublisherInstanceId: 1,
                }}
            >
                <Form.Item
                    label="Game Name"
                    name="gameName"
                    rules={[
                        {
                            required: true,
                            message: 'Please input the game name!',
                        },
                    ]}
                >
                    <Input placeholder="Game Name" disabled={loading} />
                </Form.Item>

                <Form.Item
                    label="Game Poster"
                    name="gamePoster"
                    rules={[
                        {
                            required: true,
                            message: 'Please input the game poster!',
                        },
                    ]}
                >
                    <Input placeholder="Game Poster" disabled={loading} />
                </Form.Item>

                <Form.Item
                    label="Game Trailer"
                    name="gameTrailer"
                    rules={[
                        {
                            required: true,
                            message: 'Please input the game trailer!',
                        },
                    ]}
                >
                    <Input placeholder="Game Trailer" disabled={loading} />
                </Form.Item>

                <Form.Item
                    label="Release Date"
                    name="releaseDate"
                    rules={[
                        {
                            required: true,
                            message: 'Please input the release date!',
                        },
                    ]}
                >
                    <Input type="date" disabled={loading} />
                </Form.Item>

                <Form.Item
                    label="Genre"
                    name="GenreInstanceId"
                    rules={[
                        {
                            required: true,
                            message: 'Please select a genre!',
                        },
                    ]}
                >
                    <Select
                        defaultValue={1}
                        style={{ width: '100%' }}
                        loading={genreLoading}
                    >
                        {genreError ? (
                            <Option value={genreError} disabled>
                                {genreError}
                            </Option>
                        ) : (
                            genres.map((genre) => {
                                return (
                                    <Option key={genre.id!} value={genre.id!}>
                                        {genre.genreName}
                                    </Option>
                                )
                            })
                        )}
                    </Select>
                </Form.Item>

                <Form.Item
                    label="Feature"
                    name="FeatureInstanceId"
                    rules={[
                        {
                            required: true,
                            message: 'Please select a feature!',
                        },
                    ]}
                >
                    <Select
                        defaultValue={1}
                        style={{ width: '100%' }}
                        loading={featuresLoading}
                    >
                        {featuresError ? (
                            <Option value={featuresError} disabled>
                                {featuresError}
                            </Option>
                        ) : (
                            features.map((feature) => {
                                return (
                                    <Option
                                        key={feature.id!}
                                        value={feature.id!}
                                    >
                                        {feature.featureName}
                                    </Option>
                                )
                            })
                        )}
                    </Select>
                </Form.Item>

                <Form.Item
                    label="Developer"
                    name="DeveloperInstanceId"
                    rules={[
                        {
                            required: true,
                            message: 'Please select a developer!',
                        },
                    ]}
                >
                    <Select
                        defaultValue={1}
                        style={{ width: '100%' }}
                        loading={developersLoading}
                    >
                        {developersError ? (
                            <Option value={developersError} disabled>
                                {developersError}
                            </Option>
                        ) : (
                            developers.map((developer) => {
                                return (
                                    <Option
                                        key={developer.id!}
                                        value={developer.id!}
                                    >
                                        {developer.developerName}
                                    </Option>
                                )
                            })
                        )}
                    </Select>
                </Form.Item>

                <Form.Item
                    label="Publisher"
                    name="PublisherInstanceId"
                    rules={[
                        {
                            required: true,
                            message: 'Please select a publisher!',
                        },
                    ]}
                >
                    <Select
                        defaultValue={1}
                        style={{ width: '100%' }}
                        loading={publishersLoading}
                    >
                        {publishersError ? (
                            <Option value={publishersError} disabled>
                                {publishersError}
                            </Option>
                        ) : (
                            publishers.map((publisher) => {
                                return (
                                    <Option
                                        key={publisher.id!}
                                        value={publisher.id!}
                                    >
                                        {publisher.publisherName}
                                    </Option>
                                )
                            })
                        )}
                    </Select>
                </Form.Item>

                <Form.Item
                    label="Game Description"
                    name="gameDescription"
                    rules={[
                        {
                            required: true,
                            message: 'Please input the game description!',
                        },
                    ]}
                >
                    <Input.TextArea disabled={loading} />
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
        </>
    )
}

export default AddGamePage
