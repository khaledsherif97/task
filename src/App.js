import { lazy, Suspense } from 'react'
import { Hourglass } from 'react-loader-spinner';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'





const Home = lazy(() => import('./components/home/home'));
const LayOut = lazy(() => import('./components/layOut/LayOut'));
const User = lazy(() => import('./components/users/user'));
const Transactions = lazy(() => import('./components/transactions/transactions'));
const ShowTransData = lazy(() => import('./components/transactions/showTransData'));
const View = lazy(() => import('./components/viewData/view'));
const NotFound = lazy(() => import('./components/notFound/NotFound'));




function App() {
  const routes = createBrowserRouter([
    {
      path: "task/", element: <LayOut/>, children: [
        { index: true, element: <Home/> },


        { path: "user", element: <User /> },
        { path: "transaction", element: <Transactions /> },
        { path: "user/view/:id", element: <View /> },
        { path: "vi", element: <ShowTransData /> },
        
        
        
      {path:"*",element:<NotFound />},



      ]
    }
  ])

  return (
    <Suspense fallback={<div className=' d-flex justify-content-center align-items-center mt-5'><Hourglass
      visible={true}
      height="100"
      width="100"
      ariaLabel="hourglass-loading"
      wrapperStyle={{}}
      wrapperClass=""
      colors={['#306cce', '#72a1ed']}
    /></div>}>
      <RouterProvider router={routes} />
    </Suspense>
  );
}

export default App;
