import React from 'react'
import { useRef, useState, useEffect } from 'react'

export default function Login() {
  const emailRef = useRef();
  const errRef = useRef();

  const [email, setEmail] =useState('');
  const [pwd, setPwd] =useState('');
  const [errMsg, setErrMsg] =useState('');
  const [success, setSuccess] =useState(false);

  useEffect(() => {
    emailRef.current.focus()
  }, [])

  useEffect(()=>{
    setErrMsg('');
  }, [email, pwd])

  const handleSubmit = async (e)=>{
    e.preventDefault();
    console.log(email, pwd);
    setEmail('');
    setPwd('');
    setSuccess(true);
  }

  return (
    <>
    {success ? (
        <section>
            <h1>You are logged in!</h1>
            <br/>
            <p>
                <a href='/'>Go to Home</a>
            </p>
        </section>
    ) :(
    <section>
        <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
        <div className='signing'>
            <div className='container'>
                <div className='logo'>
                    <img src={require('../img/logoDorm.png')} alt={'logo'} />
                </div>
                <div className="form-content">
                    <div className="title-content">
                        <h2>Sign in</h2>
                        <p>Welcome back, please sign in to your account.</p>
                    </div>
                    <form onSubmit={handleSubmit}>
                      <div className="field-component">
                        <label htmlFor="email">Email</label>
                        <input 
                        type="email" 
                        id="email"
                        ref={emailRef}
                        autoComplete='off'
                        onChange={(e)=> setEmail(e.target.value)}
                        value={email}
                        required
                        placeholder="Enter the email" 
                        />
                      </div>
                      <div className="field-component">
                        <label htmlFor="password">Password</label>
                        <input 
                        type="password" 
                        id="password"
                        onChange={(e)=> setPwd(e.target.value)}
                        value={pwd}
                        required
                        placeholder="Enter the password" 
                        />
                      </div>
                      <div className="additional">
                         <div className="remember-chkbx">
                          <input 
                            type="checkbox" 
                            name="remember" 
                            id="remember" 
                          />
                         <label>Remember me</label>
                        </div>
                        <div className="forgot">
                          <a href="/">Forgot Password?</a>
                        </div>
                      </div>
                      <button className="btn">Sign in</button>
                    </form>
                </div>
                <h4><a href="/">If you don't have an account? Click here</a></h4>
            </div>
        </div>
        <div className="welcome">
            <div className="welcome-items">
                <div className="img">
                    <img src={require('../img/SignInImg.png')} alt={"img"} />
                </div>
                <div className="welcome-content">
                    <h2 className="welcome-title">Welcome to Dorm Hub platform!</h2>
                    <p className="welcome-desc">Dorm Hub platform is an online platform developed in the user friendly interface to make it easier for SDU students to book a seat in a dormitory.</p>
                </div>
            </div>
        </div>
    </section>
    )}
    </>
  )
}
