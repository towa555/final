import React from 'react';
import {Link} from 'react-router-dom'

function Login(){
    return(
        <form>
        <h1>Log in</h1>
        <div className="wrap">
            sign in with google
        </div>
      <label>Email</label>
      <input type="email" className="form-control" placeholder="markgolah@gmail.com"/>

      <label>Password</label>
      <input type="password" className="form-control" placeholder="atleast 8 characters"/>

    <div className="term">
        <input type="checkbox"/>
        <p> Remember me</p>
    </div>

    <Link className='link' to="/forget">login </Link>

<div className="log">
    Dont have an account? <br/>
    <Link className='ink' to="/signin">Sign up</Link>
</div>
        </form>

    )
}

export default Login;