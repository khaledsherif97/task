import React, { useEffect, useState } from 'react'
import { Input, Table } from 'antd';
import dataa from "../../data.js"
import Search from 'antd/es/transfer/search.js';


const customers = dataa.users;

const transactions = dataa.transactions;

const TransDataTable = () => {
    const [dataSource, setDataSource] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        const mergedData = transactions.map(transaction => {
            const customer = customers.find(c => c.id === transaction.customer_id);
            return {
                ...transaction,
                customer_name: customer ? customer.name : 'Unknown'
            };
        });
        setDataSource(mergedData);
        setFilteredData(mergedData);
    }, []);

    const handleSearch = (e) => {
        const value = e.target.value.toLowerCase();
        setSearchText(value);
        const filtered = dataSource.filter(item => item.customer_name.toLowerCase().includes(value));
        setFilteredData(filtered);
    };

    const columns = [
        {
            title: 'Customer Name',
            dataIndex: 'customer_name',
            key: 'customer_name'
        },
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
            sorter: {
                compare: (a, b) => a.amount - b.amount,
                multiple: 2,
            },
        },
        {
            title: 'Amount',
            dataIndex: 'amount',
            key: 'amount',
            sorter: {
                compare: (a, b) => a.amount - b.amount,
                multiple: 2,
            },
        }
    ];
    const onChange = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    };

    return (
        <>
            <h3 className=' text-primary my-3 text-center'>Transactions Data Table</h3>
            <div className='w-25 my-2'><Search
                placeholder='Search by customer name'
                value={searchText}
                onChange={handleSearch}
                
            /></div>
            

            <Table
                dataSource={filteredData}
                columns={columns}
                rowKey="id"
                onChange={onChange}
            />

        </>
    )
}

export default TransDataTable