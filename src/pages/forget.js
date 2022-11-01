import React from 'react';
import {Link} from 'react-router-dom'

function Forget(){
    return(
        <form>
        <h1>Password Forgotten?</h1>
        <div className="wrap">
            Sign into your account
        </div>
      <label>Email</label>
      <input type="email" className="form-control" placeholder="markgolah@gmail.com"/>

    <div className="term">
        <input type="checkbox"/>
        <p> Save new password</p>
    </div>

    <Link className='link' to="/signin">Get password</Link>

<div className="log">
    Already have an account? <br/>
    <Link className='ink' to="/login">Log in</Link>
</div>
        </form>


    )
}

export default Forget;