import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    let navigate = useNavigate();
    const { user, login: authLogin, authenticate } = useAuth();
    const [email, setemail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    console.log('user', user);

    const handleLogin = async (event) => {
        event.preventDefault();
        const { success, token, error: loginError } = await authenticate(email, password);

        if (success) {
            // Successful login
            console.log(email, token);
            navigate('/')
            // authLogin({ email, token });

            // Redirect to the dashboard
        } else {
            // Login failed, set error state
            setError(loginError);
        }
    };
    return (
        <div className='bg-slate-400 w-1/2 m-auto p-7 flex flex-col justify-center items-center gap-6'>

            <p className='font-semibold text-2xl'>Login</p>

            <form className='flex flex-col gap-4  justify-center' onSubmit={(event) => handleLogin(event)} >
                <div>
                    <label htmlFor="">email</label>
                    <input type="text" value={email} onChange={(e) => setemail(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="">Password</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>

                <button className='bg-blue-600 p-2 rounded text-white font-medium'>Submit</button>
            </form>

        </div>
    )
}

export default Login