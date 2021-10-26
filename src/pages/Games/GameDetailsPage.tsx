import { Descriptions } from 'antd'
import moment from 'moment'
import React, { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useHistory } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../../state'
import { RootState } from '../../state/reducers'

const GameDetailsPage: FC = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const { gameId } = useParams<{ gameId: string }>()

    const { game, loading, error } = useSelector(
        (state: RootState) => state.getGameReducer
    )

    const { getGame } = bindActionCreators(actionCreators, dispatch)

    useEffect(() => {
        getGame(gameId)
    }, [gameId])

    if (error) {
        return (
            <>
                <h1>Game Details Page</h1>
                <h2>{error}</h2>
            </>
        )
    }

    const renderGameDetails = (): JSX.Element => {
        if (loading || !game) {
            return <h2>Loading...</h2>
        }

        const {
            gameName,
            gamePoster,
            gameTrailer,
            releaseDate,
            gameDescription,
            FeatureInstance,
            GenreInstance,
            DeveloperInstance,
            PublisherInstance,
            gamePrice,
        } = game

        return (
            <Descriptions title={gameName} layout="vertical" bordered>
                <Descriptions.Item label="Game Name" span={3}>
                    {gameName}
                </Descriptions.Item>
                <Descriptions.Item label="Game Price" span={3}>
                    {gamePrice}
                </Descriptions.Item>
                <Descriptions.Item label="Meta Data" span={3}>
                    <ul>
                        <li>
                            <b>Genre:</b> {GenreInstance.genreName}
                        </li>
                        <li>
                            <b>Feature:</b> {FeatureInstance.featureName}
                        </li>
                        <li>
                            <b>Developer:</b> {DeveloperInstance.developerName}
                        </li>
                        <li>
                            <b>Publisher:</b> {PublisherInstance.publisherName}
                        </li>
                    </ul>
                </Descriptions.Item>
                <Descriptions.Item label="Release Date" span={3}>
                    {moment(releaseDate).format('DD-MMM-YYYY')}
                </Descriptions.Item>
                <Descriptions.Item label="Game Poster" span={3}>
                    <div
                        style={{
                            textAlign: 'center',
                        }}
                    >
                        <img
                            src={gamePoster}
                            alt={gameName}
                            style={{
                                width: '300px',
                            }}
                        />
                    </div>
                </Descriptions.Item>
                <Descriptions.Item label="Game Trailer" span={3}>
                    <div
                        style={{
                            textAlign: 'center',
                        }}
                    >
                        <iframe
                            width="560"
                            height="315"
                            src={gameTrailer}
                            title={gameName}
                            frameBorder="0"
                            // eslint-disable-next-line max-len
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; mute;"
                            allowFullScreen
                        />
                    </div>
                </Descriptions.Item>
                <Descriptions.Item label="Game Description" span={3}>
                    <p>{gameDescription}</p>
                </Descriptions.Item>
            </Descriptions>
        )
    }

    return (
        <>
            <h1>Game Details Page</h1>
            {renderGameDetails()}
        </>
    )
}

export default GameDetailsPage
