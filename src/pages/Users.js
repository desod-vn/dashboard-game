import { useState } from "react";
import { Table, Typography } from "antd";
const { Title } = Typography;

const Users = () => {
  
  const [users, setUsers] = useState([]);

  const dataSource = [
    {
      key: '1',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street',
    },
    {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
  ];
  
  const columns = ['Name', 'Type', 'Rank', 'Code', 'Level', 'Active', 'Status'].map(__ => (
    {
      title: __,
      dataIndex: __.toLowerCase(),
      key: __.toLowerCase(),
    }
  ))
  
  return (
    <>
      <Title>Total: {users.length}</Title>
      <Table
        dataSource={dataSource}
        columns={columns}
      />
    </>
  )
}

export default Users