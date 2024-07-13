import React from 'react'
import logo from "../../assets/Untitled design.png"

function Home() {
  return (<>
  <div className='w-25 mx-auto text-center'>
    
    <img src={logo} className='w-75 rounded-circle shadow-lg mb-2 '/>
    <h2 className=' text-primary fw-semibold text-decoration-underline link-offset-2'>Welcome Admin</h2>

  </div>
  <div className=' text-center'>
    <h4>Welcome to your customer data dashboard!</h4>
    <p className='fw-semibold'> Your one-stop shop for:</p>
    <p>Customer information: View a comprehensive list of your customers.</p>
    <p>Transaction history: See all transactions associated with each customer.</p>
    <p>Visual insights: Analyze transaction trends with a clear and informative chart.</p>
    <p>Search functionality: Easily find specific customers and their transaction data.</p>
    <p className='fw-semibold'>All in one convenient location!</p>
    <p> This dashboard provides a centralized hub for managing your customer data. With its user-friendly interface and powerful features, you can effortlessly access and analyze valuable information to gain a deeper understanding of your customer base and their transaction patterns.</p>
  </div>
   
    </> )
}

export default Home