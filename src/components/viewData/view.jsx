import React, { useEffect, useState } from 'react';
import { Table} from 'antd';
import { useParams } from 'react-router-dom';
import dataa from '../../data';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const View = () => {
  const { id } = useParams(); 
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {

    const customerId = parseInt(id, 10); 
    const filteredTransactions = dataa.transactions.filter(
      transaction => transaction.customer_id === customerId
    );

    const mergedData = filteredTransactions.map(transaction => {
      const customer = dataa.users.find(c => c.id === transaction.customer_id);
      return {
        ...transaction,
        customer_name: customer ? customer.name : 'Unknown'
      };
    });

    setDataSource(mergedData);
  }, [id]);
 

  const columns = [
    {
      title: 'Customer Name',
      dataIndex: 'customer_name',
      key: 'customer_name'
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date'
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
      sorter: {
        compare: (a, b) => a.amount - b.amount,
        multiple: 2,
      },
    },
   
  ];
  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };
  return (<>
  <h3 className=' text-primary mt-5'>User Transactions</h3>

    <Table 
    dataSource={dataSource} 
    columns={columns} 
    onChange={onChange}
    rowKey="id" />
        <ResponsiveContainer width="100%" height="50%">
      <LineChart
        width={500}
        height={300}
        data={dataSource}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="amount" stroke="#8884d8" activeDot={{ r: 10 }} />
      </LineChart>
    </ResponsiveContainer>
   
    </>);
};

export default View;