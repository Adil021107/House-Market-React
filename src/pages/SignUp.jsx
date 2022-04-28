import { toast } from 'react-toastify'
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { ReactComponent as ArrowRightIcon } from '../assets/svg/keyboardArrowRightIcon.svg'
import visibilityIcon from '../assets/svg/visibilityIcon.svg'
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { db } from "../firebase.config.js";
import { async } from "@firebase/util";
import { setDoc, doc, serverTimestamp } from 'firebase/firestore'
import Oauth from '../components/Oauth/Oauth';

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  })

  const { name, email, password } = formData
  const navigate = useNavigate()


  const onChange = (e) => {
    setFormData(prevState => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    try {
      const auth = getAuth()
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)

      const user = userCredential.user
      updateProfile(auth.currentUser, {
        displayName: name,

      })
      const formDataCopy = { ...formData }
      delete formDataCopy.password
      formDataCopy.timestamp = serverTimestamp()
      await setDoc(doc(db, 'users', user.uid), formDataCopy)
      navigate('/')
    } catch (error) {
      // console.log(error);
      toast.error('Error')
    }
  }


  return (
    <>
      <div className="pageContainer">
        <header>
          <p className="pageHeader">
            Hello! Welcome...
          </p>
        </header>
        <main>
          <form onSubmit={onSubmit}>
            <input
              id="name"
              type='name'
              placeholder='Enter your name...'
              className="nameInput"
              value={name}
              onChange={onChange}

            />
            <input
              id="email"
              type='email'
              placeholder='Enter your email...'
              className="emailInput"
              value={email}
              onChange={onChange}
            />
            <div className="passwordInputDiv">
              <input id="password" type={showPassword ? 'text' : 'password'} placeholder="Create a password..." value={password} onChange={onChange} className="passwordInput" />
              <img src={visibilityIcon} alt="show password" className="showPassword" onClick={() => setShowPassword(prevState => !prevState)} />
            </div>
            <div className="signInBar">
              <p className="signInText">Sign Up</p>
              <button className="signInButton">
                <ArrowRightIcon fill="#ffffff" width='34px' height='34px' />
              </button>
            </div>
          </form>
          <Oauth />
          <Link className="registerLink" to='/sign-in'>Sign In</Link>
        </main>
      </div>

    </>
  )
}

export default SignUp