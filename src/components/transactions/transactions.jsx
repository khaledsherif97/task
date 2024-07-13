import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import dataa from '../../data';
import TransDataTable from './TransDataTable';


const data = dataa.transactions;

export default class Transactions extends PureComponent {
  static demoUrl = 'https://codesandbox.io/p/sandbox/line-chart-width-xaxis-padding-8v7952';

  render() {
    return (<>


        
        <h3 className=' text-primary my-3 text-center'>All Transactions</h3>
      <ResponsiveContainer width="100%" height="30%">
        <LineChart
          width={500}
          height={300}
          data={data}
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
  }
}
