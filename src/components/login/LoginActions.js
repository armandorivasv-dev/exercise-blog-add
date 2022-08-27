import React from 'react';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import LoginForm from './LoginForm';


export const LoginActions = ({ title }) => {

  const navigate = useNavigate();

  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  const handleActionButton = (id) => {

    const authentication = getAuth()

    if (id.title === 'login') {
      signInWithEmailAndPassword(authentication, email, password)
        .then((response) => {
          console.log(email)
          navigate('/addpost')
          sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
          sessionStorage.setItem('Auth Email', email)
        })

        .catch((error) => {
          if (error.code === 'auth/invalid-email') {
            toast.error('Invalid or blank email')
          }
          if (error.code === 'auth/user-not-found') {
            toast.error('User not found')
          }
          if (error.code === 'auth/internal-error') {
            toast.error('Password not found')
          }
          if (error.code === 'auth/wrong-password') {
            toast.error('Wrong password')
          }

        })
    }

    if (id.title === 'register') {
      createUserWithEmailAndPassword(authentication, email, password)
        .then((response) => {
          navigate('/addpost')
          sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
          sessionStorage.setItem('Auth Email', email)
        })
        .catch((error) => {
          if (error.code === 'auth/invalid-email') {
            toast.error('Invalid or blank email')
          }
          if (error.code === 'auth/internal-error') {
            toast.error('Password not found')
          }
          if (error.code === 'auth/email-already-in-use') {
            toast.error('Email alredy in use')
          }
        })
    }
  }

  // PERMITE OCULTAR LOGIN Y REGISTER SI EXISTE TOKEN
  useEffect(() => {
    let authToken = sessionStorage.getItem('Auth Token')
    if (authToken) {
      navigate('/addpost')
    }
  }, [])

  return (
    <>
      <LoginForm title={title} email={email} setEmail={setEmail} setPassword={setPassword} handleActionButton={() => handleActionButton({ title })} />
    </>
  )
}
