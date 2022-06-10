import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaUser } from 'react-icons/fa';
import { signup, reset } from '../redux/features/auth/authSlice';
import Spinner from '../components/Spinner';

function SignUp() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        birthdate: '',
        location: '',
        avatar: ''
    })

    const { username, email, password, birthdate, location, avatar } = formData

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth)

    useEffect(() => {
        if(isError) {
            toast.error(message)
        }
        if(isSuccess || user) {
            navigate('/')
        }
        dispatch(reset())
    }, [user, isError, isSuccess, message, navigate, dispatch])

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()

        const userData = {
            username,
            email,
            password,
            birthdate,
            location,
            avatar, 
        }

        dispatch(signup(userData))
    }

    if(isLoading) {
        return <Spinner />
    }

    return (
        <>
            <section className='heading'>
                <h1>
                    <FaUser /> Sign Up
                </h1>
                <p>Please create an account</p>
            </section>

            <section className='form'>
                <form onSubmit={onSubmit}>
                    <div className='form-group'>
                        <input 
                            type='text' 
                            className='form-control' 
                            id='username' 
                            name='username' 
                            value={username} 
                            placeholder='Enter your username' 
                            onChange={onChange} 
                        />
                    </div>
                    <div className='form-group'>
                        <input 
                            type='email' 
                            className='form-control' 
                            id='email' 
                            name='email' 
                            value={email} 
                            placeholder='Enter your email' 
                            onChange={onChange} 
                        />
                    </div>
                    <div className='form-group'>
                        <input 
                            type='password' 
                            className='form-control' 
                            id='password' 
                            name='password' 
                            value={password} 
                            placeholder='Enter your password' 
                            onChange={onChange} 
                        />
                    </div>
                    <div className='form-group'>
                        <input 
                            type='text' 
                            className='form-control' 
                            id='birthdate' 
                            name='birthdate' 
                            value={birthdate} 
                            placeholder='Enter your birthdate' 
                            onChange={onChange} 
                        />
                    </div>
                    <div className='form-group'>
                        <input 
                            type='text' 
                            className='form-control' 
                            id='location' 
                            name='location' 
                            value={location} 
                            placeholder='Enter your location' 
                            onChange={onChange} 
                        />
                    </div>
                    <div className='form-group'>
                        <input 
                            type='text' 
                            className='form-control' 
                            id='avatar' 
                            name='avatar' 
                            value={avatar} 
                            placeholder='Enter your avatar' 
                            onChange={onChange} 
                        />
                    </div>
                    <div>
                        <button type='submit' className='btn btn-block'>Submit</button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default SignUp