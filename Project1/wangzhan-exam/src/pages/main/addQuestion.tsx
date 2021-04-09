import React, { useEffect } from 'react'
import {Form, Input, Select, Button} from 'antd'
import Editor from 'for-editor'
import {upload} from '@/services/index'
 
const {Item, useForm} = Form;
const AddQuestion:React.FC = props=>{
    const ItemLayout = {
        labelCol: { span: 4 },
        wrapperCol: { span: 8 },
    }
    const [form] = useForm();

    function finish(values: {[key:string]:string}){
        console.log('values...', values);
        console.log('form...', form.getFieldsValue());
    }

    async function addImg(file: File, index: number){
        console.log('arguments...', arguments);
        let result = await upload(file);
        let value = form.getFieldValue('questions_stem');
        value += `![${result.data[0].name}](${result.data[0].path})`
        form.setFields([{
            name: 'questions_stem',
            value
        }])
    }

    return <div>
        <Form 
            {...ItemLayout} 
            layout="vertical" 
            onFinish={finish} 
            form={form} 
            key={JSON.stringify({})}
            initialValues={{
                questions_stem: ''
            }}
        >
            <Item label="题干" name="title" rules={[{required: true, message: '请输入试题题干'}]}>
                <Input />
            </Item>
            <Item label="题目题干" wrapperCol={{span: 24}} name="questions_stem" rules={[{required: true, message: '请输入题目题干'}]}>
                <Editor addImg={(file, index)=>addImg(file, index)}></Editor>
            </Item>
            <Item label="考试类型" name="exam_id"> 
                <Select></Select>
            </Item>
            <Item label="课程类型" name="subject_id"> 
                <Select></Select>
            </Item>
            <Item label="题目类型" name="questions_type_id"> 
                <Select></Select>
            </Item>
            <Item label="答案信息"  wrapperCol={{span: 24}} name="questions_answer">
                <Editor></Editor>
            </Item>
            <Button htmlType="submit">提交</Button>
        </Form>
    </div>
}
export default AddQuestion