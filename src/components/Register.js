import React from 'react'
import {useRef, useState, userEffect} from 'react'

export default function Register() {
  return (
    <main>
    <div className="welcome">
        <div className="welcome-items">
            <div className="img">
                <img src={require('../img/SignUpImg.png')} alt="img"/>
            </div>
            <div className="welcome-content">
                <h2 className="welcome-title">Welcome to Dorm Hub platform!</h2>
                <p className="welcome-desc">Welcome to Dorm Hub platform ! Dorm Hub is an online platform developed in the user friendly interface to make it easier for SDU students to book a seat in a dormitory.</p>
            </div>
        </div>
    </div>
    <div className="signing">
        <div className="container container-up">
            <div className="form-content">
                <div className="title-content title-content-up">
                    <h2>Sign up</h2>
                    <p>To sign up in the system, please fill out the forms below.</p>
                </div>
                <form>
                  <div className="field-component field-signup">
                    <input type="text" placeholder="Full Name" id="name"/>
                  </div>
                  <div className="field-component field-signup">
                    <input type="number" placeholder="Student ID" id="stud_id"/>
                  </div>
                  <div className="field-component field-signup">
                    <input type="email" placeholder="Email" id="email"/>
                  </div>
                  <div className="field-component field-signup">
                    <input type="number" placeholder="Phone number" id="phone_num"/>
                  </div>
                  <div className="field-component field-signup">
                    <input type="text" placeholder="Faculty" id="faculty"/>
                  </div>
                  <div className="field-component field-signup">
                    <input type="text" placeholder="Gender" id="gender"/>
                  </div>
                  <div className="field-component field-signup">
                    <input type="password" placeholder="Create Password" id="password"/>
                  </div>
                  <div className="field-component field-signup">
                    <input type="password" placeholder="Confirm Password" id="confirm_pass"/>
                  </div>
                </form>
            </div>
            <div class="additional">
                <div class="remember-chkbx">
                    <input type="checkbox" name="remember" id="remember"/>
                    <label for="remember">I agree to the privacy terms</label>
                </div>
            </div>
            <button className="btn">Sign up</button>
            <h4><a href="/">Do you already have an account? Click here</a></h4>
        </div>
    </div>
</main>
  )
}
