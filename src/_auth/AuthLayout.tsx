import React from 'react';
import {Outlet , Navigate} from "react-router-dom";

const AuthLayout = () => {
 
  const isAuthenticated : boolean = false;

  return (
    <div>
      {isAuthenticated ?
       (
       <Navigate to="/"/>  
       ): (
        <>
        <section className='flex flex-1 justify-center items-center flex-col py-10'>
          <Outlet/>
        </section>

        <img
          src=''></img>
        </>
        )}
    </div>
  )
}

export default AuthLayout