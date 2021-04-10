import React, { useState } from "react";
import { useFormik } from "formik";
import "./LoginForm.css";
import axios from 'axios';
import { useHistory } from "react-router-dom"

export const RegisterForm = ()=> {

    const history = useHistory(); //for navigation

    const validate = values =>{

        const errors ={}

        if (!values.email){
            errors.email = 'Required'
        } else if(values.email.length < 4){
            errors.email ='Must be 5 characters or more'
        }

        return errors 
    }

    const formik = useFormik({

        initialValues:{
            name:'',
            email: '',
            password: ''
        },
        validate,
        onSubmit: values =>{

            
            //alert(JSON.stringify(values, null, 2))
            //const sendData= JSON.stringify(values, null, 2)

            // Post data from a url endpoint
            axios.post("http://localhost:2000/api/user/register", values)
            .then(res => {
            console.log(res);
            console.log(res.data);
            });
            
            history.push('/Lobby');

                
            
        }
    })


    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={formik.handleSubmit}>

                <label htmlFor="email">Name</label>
                <input onChange={formik.handleChange} VALUE={formik.values.name}  onBlur={formik.handleBlur} id='name' name='name' />
                <label htmlFor="email">Email Address</label>
                <input onChange={formik.handleChange} VALUE={formik.values.email}  onBlur={formik.handleBlur} id='email' name='email' />
                {formik.touched.email && formik.errors.email? <div>{formik.errors.email}</div> : null}
                <label htmlFor="password">Password</label>
                <input type='password' onChange={formik.handleChange} VALUE={formik.values.password} id='password' name='password' />
            

                <label for="cars">Choose a car:</label>

                <button type="submit">Create Account</button>
            </form>
        </div>

    );
}