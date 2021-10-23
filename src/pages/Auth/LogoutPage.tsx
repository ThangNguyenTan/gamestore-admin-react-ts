import React, { FC, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { useHistory } from 'react-router-dom'
import { actionCreators } from '../../state'

const LogoutPage: FC = () => {
    const dispatch = useDispatch()
    const history = useHistory()

    const { authLogout } = bindActionCreators(actionCreators, dispatch)

    useEffect(() => {
        authLogout()
        history.push('/')
    }, [])

    return <div />
}

export default LogoutPage
