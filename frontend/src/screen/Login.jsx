import React from 'react';
import { AvatarSelection } from '../component/AvatarSelection/AvatarSelection';
import { RegisterForm } from '../component/LoginForm/formick';
import '../App.css';





export const Login = ()=> {

    return( 

        <div>
            <h1>Login</h1>
                <RegisterForm/>

            <div id="waitingRoomView">
                
                <AvatarSelection/>
                
            </div>
        </div>

    );

}