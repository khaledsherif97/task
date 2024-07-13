import React, { useCallback, useState } from 'react'
import { Button, Space, Table,Input } from 'antd';
import dataa from "../../data.js"
import { useNavigate } from 'react-router-dom';



const User = () => {
   
    const [sortedInfo, setSortedInfo] = useState({});

    const data =dataa.users;
    
    const navigate = useNavigate();

  
 
    const handleChange= (pagination, filters, sorter) => {
      console.log('Various parameters', pagination, filters, sorter);
  
      setSortedInfo(sorter );
    };
  
  
    const clearAll = () => {
      
      setSortedInfo({});
    };
    const handleEdit =(record) => {
        try {
            console.log('Editing record with ID:', record.id);
            navigate("/view/"+record.id)
          } catch (error) {
            console.error('Error in handleEdit:', error);
          }
  
    //console.log("Delete record:", record.id);
       
      };
    
  
    const columns= [
      {
        title: 'id',
        dataIndex: 'id',
        key: 'id',
        
      },
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
       
        sorter: (a, b) => a.name.length - b.name.length,
        sortOrder: sortedInfo.columnKey === 'name' ? sortedInfo.order : null,
        ellipsis: true,
      },
     
    
      {
        title: 'view all transaction',
      
        key: 'view all transaction',
        render: () => (
          <>
            <Button className="me-2" type="primary"  onClick={() => handleEdit()}>View Transactions</Button>
            
          </>
        ),
      
        button: true,
        width: '40%',
      },
    ];
   
      
  return (
    <>
    <h3 className=' text-primary mt-5'>Users Data Table</h3>
    <Space style={{ marginBottom: 16 }}>
      

      <Button onClick={clearAll}>Clear sorters</Button>
      <Space direction="vertical">
   
  
  
  </Space>
    </Space>
    <Table 
    columns={columns} 
    dataSource={data} 
    onChange={handleChange} 
    onRow={(record, id) => ({
            onClick: () =>
                handleEdit(record, id ?? 0),
          })} />
  </>
  )
}

export default User