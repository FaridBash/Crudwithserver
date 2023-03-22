import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { createBrowserRouter, RouterProvider, useNavigate } from "react-router-dom";
import Signup from './components/SignUp';
import Header from './components/Header';
import Login from './components/Login';
import './App.css'

function App() {
  
  // const values = {};
  // function handleInput(type, e) {
  //   values[type] = e.target.value;
  //   console.log(values);
  // }

  // function handleSubmit(e, type) {
  //   e.preventDefault();
  //   if (values.userName && values.password) {
  //     const headers = new Headers();
  //     headers.append('content-type', 'application/json');
  //     fetch(`http://localhost:4005`, { headers, method: 'POST', body: JSON.stringify(values) })
  //       .then(res => res.json())
  //       .then(res => { console.log('res', res); });
  //   }
  // }


  const route = createBrowserRouter([
    {
      path: "",
      element: <Header />,
      children: [
        {
          path:"signup",
          element: <Signup/>,
        },
        {
          path:"login",
          element: <Login/>,
        },
        
      ],
    },
   
  ]);



  return (
    <div className="App">
      {/* <h1>sign up</h1>
      <form onSubmit={() => { handleSubmit(event, 'signup'); }}>
        <label htmlFor="userName">UserName</label>
        <input type="text" name='userName' onInput={(event) => {
          handleInput('userName', event);
        }} />
        <label htmlFor="pass">Password</label>
        <input type="password" name='pass' onInput={(event) => {
          handleInput('password', event);
        }} />
        <button >Submit</button>
      </form> */}

      <RouterProvider router={route}/>
    </div>
  )
}

export default App
