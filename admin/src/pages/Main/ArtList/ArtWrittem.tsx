import React from 'react';
import Editor from 'for-editor';
import { Form, Input, InputNumber, Button,Row,Col,Select,Radio  } from 'antd';
import { values } from 'lodash';
const layout = {
    labelCol: { span: 3 },
    wrapperCol: { span: 21 },
};
const { Option } = Select;
const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not validate email!',
      number: '${label} is not a validate number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
};
interface ArtWrittemProps {
    $vm:any;

}
interface StateProps {
    value:any;
}
const toolbar = {
    h1: true, // h1
    h2: true, // h2
    h3: true, // h3
    h4: true, // h4
    img: false, // 图片
    link: true, // 链接
    code: true, // 代码块
    preview: true, // 预览
    expand: true, // 全屏
    /* v0.0.9 */
    undo: true, // 撤销
    redo: true, // 重做
    save: true, // 保存
    /* v0.2.3 */
    subfield: true, // 单双栏模式
}
class ArtWrittem extends React.Component{
    $vm:any;
    state:StateProps
    //addImg:()=>void;
    constructor(props:any) {
        super(props);
        this.state = {
          value: ''
        }
        this.$vm = React.createRef();
    }
    onFinish = (values:any) => {
        console.log(values);
    };
    handleChange(value:any) {
        this.setState({
          value
        })
    }

    render() {
        let value:any  = this.state.value
        return (
            <div>
                <Form {...layout} name="nest-messages" onFinish={(values)=>this.onFinish(values)} validateMessages={validateMessages}>
                    <Form.Item labelAlign="left" name={['user', 'name']} label="文章标题" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item labelAlign="left" name={['user', 'email']} label="文章副标题" rules={[{ type: 'email' }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item labelAlign="left" name={['user', 'website']} label="文章作者">
                        <Input />
                    </Form.Item>
                    <Form.Item
                        labelAlign="left"
                        name="select"
                        label="文章栏目"
                        hasFeedback
                        rules={[{ required: true, message: 'Please select your country!' }]}
                    >
                        <Select placeholder="Please select a country">
                        <Option value="china">China</Option>
                        <Option value="usa">U.S.A</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        labelAlign="left"
                        name="select"
                        label="文章标签"
                        hasFeedback
                        rules={[{ required: true, message: 'Please select your country!' }]}
                    >
                        <Select placeholder="Please select a country">
                        <Option value="china">China</Option>
                        <Option value="usa">U.S.A</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item label="vip文章" labelAlign="left">
                        <Radio.Group>
                            <Radio value={1}>是</Radio>
                            <Radio value={0}>否</Radio>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item label="推荐文章" labelAlign="left">
                        <Radio.Group>
                            <Radio value={1}>是</Radio>
                            <Radio value={0}>否</Radio>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item label="是否登录查看" labelAlign="left">
                        <Radio.Group>
                            <Radio value={1}>是</Radio>
                            <Radio value={0}>否</Radio>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item label="文章类型" labelAlign="left">
                        <Radio.Group>
                            <Radio value={0}>原创</Radio>
                            <Radio value={1}>转载</Radio>
                            <Radio value={2}>教程</Radio>
                            <Radio value={3}>杂谈</Radio>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item labelAlign="left" name={['user', 'introduction']} label="文章简介">
                        <Input.TextArea />
                    </Form.Item>
                    <Form.Item labelAlign="left" name={['user', 'website']} label="转载/效果地址">
                        <Input />
                    </Form.Item>
                    <Form.Item labelAlign="left" label="文章内容">
                        <Editor ref={this.$vm}
                        toolbar={toolbar}
                        preview={true}
                        subfield={true}
                        value={value} 
                        onChange={(value) => this.handleChange(value)} />
                    </Form.Item>
                    <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                        <Button type="primary" htmlType="submit">
                        Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        )
      }
}

export default ArtWrittem;