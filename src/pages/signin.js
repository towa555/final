import React from 'react';
import {Link} from 'react-router-dom'

function SignIN(){
    return(
        <form>
        <h1>Sign in</h1>
        <div className="wrap">
            sign in with google
        </div>
        <label>Name</label>
      <input type="text" className="form-control" placeholder="golah towa mark"/>

      <label>Email</label>
      <input type="email" className="form-control" placeholder="markgolah@gmail.com"/>

      <label>Password</label>
      <input type="password" className="form-control" placeholder="atleast 8 characters"/>

    <div className="term">
        <input type="checkbox"/>
        <p> i agree with <span>terms</span> and <span>Privacy</span></p>
    </div>

      <Link className='link' to="/login">signin</Link>

<div className="log">
    Already have an account? <br/>
    <Link className='ink' to="/login">Log in</Link>
</div>
        </form>

    )
}

export default SignIN;