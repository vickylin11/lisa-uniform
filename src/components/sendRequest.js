import React, { Component } from 'react';
import {Form, Input, Button, Alert} from 'antd/lib/index';
import emailjs from 'emailjs-com';


class SendRequest extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        emailSendingErr: ""
    };

    onFinish = values => {
        const { history } = this.props;
        console.log(values);
        emailjs.send('lisauniform', 'template_cbmucsi', values, 'user_G316eUBd2DVKMpDGeQMU8')
            .then((result) => {
                console.log(result.text);
                history.push('/post-request');
            }, (error) => {
                console.log(error.text);
                this.setState({
                    emailSendingErr: error.text
                })
            });
    };

    render() {
        const layout = {
            labelCol: {
                span: 8,
            },
            wrapperCol: {
                span: 16,
            },
        };
        const tailLayout = {
            wrapperCol: {
                offset: 8,
                span: 16,
            },
        };
        const { emailSendingErr } = this.state;
        return(
            <div>
                {emailSendingErr.length !== 0 &&
                <Alert
                    message="Error"
                    description="Request form submission failed, Please contact us via email or phone call."
                    type="error"
                    showIcon
                    closable
                />
                }
                <h1 style={{textAlign: 'center'}}>Request Form</h1>
                <Form
                    {...layout}
                    name="request-form"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={value => this.onFinish(value)}
                >
                    <Form.Item label="First Name" name="first_name"
                               rules={[
                                   {
                                       required: true,
                                       message: 'Please input your first name!',
                                   },
                               ]}
                    >
                        <Input style={{width: '50%'}}/>
                    </Form.Item>

                    <Form.Item label="Last Name" name="last_name"
                               rules={[
                                   {
                                       required: true,
                                       message: 'Please input your last name!',
                                   },
                               ]}
                    >
                        <Input style={{width: '50%'}}/>
                    </Form.Item>

                    <Form.Item label="Email" name="email"
                               rules={[
                                   {
                                       type: 'email',
                                       message: 'The input is not valid E-mail!',
                                   },
                                   {
                                       required: true,
                                       message: 'Please input your email!',
                                   },
                               ]}
                    >
                        <Input style={{width: '50%'}}/>
                    </Form.Item>

                    <Form.Item
                        name="phone"
                        label="Phone Number"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your phone number!',
                            },
                        ]}
                    >
                        <Input
                            style={{
                                width: '50%',
                            }}
                        />
                    </Form.Item>

                    <Form.Item label="Request" name="request">
                        <Input style={{width: '50%'}}/>
                    </Form.Item>

                    <Form.Item
                        name="details"
                        label="Details"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your request details',
                            },
                        ]}
                    >
                        <Input.TextArea
                            style={{
                                width: '50%',
                            }}
                            rows={8}
                        />
                    </Form.Item>

                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}

export default SendRequest;
