import React, { FC, useEffect, useState } from 'react'
import { Form, Input, Button, message } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { useHistory } from 'react-router-dom'
import { IUserSignIn } from '../../interfaces'
import { actionCreators } from '../../state'
import { RootState } from '../../state/reducers/index'

const SignInPage: FC = () => {
    const dispatch = useDispatch()
    const history = useHistory()

    const [isSubmitted, setIsSubmitted] = useState(false)

    const { currentUser, loading, error } = useSelector(
        (state: RootState) => state.authReducer
    )

    useEffect(() => {
        if (isSubmitted) {
            if (!loading) {
                if (error) {
                    message.error(error)
                } else {
                    message.success(
                        `Welcome back, ${currentUser?.user.username}`
                    )
                    history.push('/home')
                }
                setIsSubmitted(false)
            }
        }
    }, [isSubmitted, loading, error])

    const { authSignIn } = bindActionCreators(actionCreators, dispatch)

    const onFinish = (values: IUserSignIn): void => {
        authSignIn(values)
        setIsSubmitted(true)
    }

    return (
        <div
            style={{
                marginTop: '100px',
            }}
        >
            <h1
                style={{
                    textAlign: 'center',
                }}
            >
                Sign In
            </h1>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 8 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                autoComplete="off"
            >
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        { required: true, message: 'Please input your email!' },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 8 }}>
                    <Button type="primary" htmlType="submit" block>
                        Sign In
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default SignInPage
