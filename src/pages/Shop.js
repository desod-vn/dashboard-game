import { useState } from "react";
import { Table, Form, Input, Modal, Button, InputNumber } from "antd";
import { PlusOutlined } from '@ant-design/icons';

const Shop = () => {
  
  const [items, setItems] = useState([]);
  const [isShowCreateItem, setIsShowCreateItem] = useState(false);
  const [form] = Form.useForm();

  const handleCancel = () => {
    form.resetFields();
    setIsShowCreateItem(false);
  }

  const handleOk = async () => {
    await form.validateFields();

    console.log(form.getFieldValue())
  }

  const dataSource = [
    {
      key: '1',
      name: 'Mike',
      price: 32,
      data: '10 Downing Street',
    },
    {
      key: '2',
      name: 'John',
      price: 42,
      data: '10 Downing Street',
    },
  ];
  
  const columns = ['Name', 'Data', 'Price'].map(__ => (
    {
      title: __,
      dataIndex: __.toLowerCase(),
      key: __.toLowerCase(),
    }
  ))
  
  return (
    <>
      <Button
        type="primary"
        shape="round"
        icon={<PlusOutlined />}
        onClick={() => setIsShowCreateItem(true)}
      >
        Create
      </Button>
      <Modal
        title="Create New Item"
        visible={isShowCreateItem}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form
          name="basic"
          form={form}
          labelCol={{
            span: 6,
          }}
          wrapperCol={{
            span: 18,
          }}
          autoComplete="off"
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[
              {
                required: true,
                message: 'Please input item\'s name!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Data"
            name="data"
            rules={[
              {
                required: true,
                message: 'Please input item\'s data!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Price"
            name="price"
            rules={[
              {
                required: true,
                message: 'Please input item\'s price!',
              },
            ]}
          >
            <InputNumber
              style={{
                width: '100%',
              }}
              size="large"
            />
          </Form.Item>
        </Form>
      </Modal>
      <Table
        dataSource={dataSource}
        columns={columns}
      />
    </>
  )
}

export default Shop