"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import Loading from '@/components/loading'
import {HiOutlineUser} from "react-icons/hi"
import {MdAlternateEmail} from "react-icons/md"
import {FaFingerprint,FaGithub} from "react-icons/fa"
import {FcGoogle} from "react-icons/fc"
import mainLogo from 'public/img/header/mainLogo.png'
import Link from 'next/link'

const SignUp = () => {

  const router = useRouter()
  const [text,setText] = useState(false)
  const [userValue,setUserValue] = useState({name : "" , email : "" , password : ""})

  const onSubmit = async (e) => {
    setText(true)
    e.preventDefault()
    const options = {
      method : "POST",
      headers : {'Content-Type' : 'application/json'},
      body : JSON.stringify(userValue)
    }
    await fetch('http://localhost:3000/api/auth/signup',options)  
    router.push(
      "signin"
    )
  }

  return (
    <>
      <div className="title">
        <Image src={mainLogo} alt='mainLogo' />
        <h3>Get Started</h3>
        <p>Already have an account? <Link href={"./signin"}>Log in</Link></p>
      </div>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">
          <p>Name</p>
          <input type="text" placeholder='Enter your name' id='name' value={userValue.name} onChange={(e) => setUserValue({...userValue,name : e.target.value})}  />
          <HiOutlineUser size={20} />
        </label>
        <label htmlFor="email">
          <p>Email</p>
          <input type="email"  id="email" placeholder='Enter your email' value={userValue.email} onChange={(e) => setUserValue({...userValue,email : e.target.value})} />
          <MdAlternateEmail size={20} />
        </label>
        <label htmlFor="password">
          <p>Password</p>
          <input type="password" id="password" placeholder='Enter your password' value={userValue.password} onChange={(e) => setUserValue({...userValue,password : e.target.value})} />
          <FaFingerprint size={20} />
        </label>
        <label htmlFor="agree" className='check container_checkbox' >
          <input type="checkbox" id="agree"  />
          <span className='checkmark'></span>
          <p>I agree to the <Link href={"/"}>Teams & Privacy</Link></p>
        </label>
        <button type="submit">
          {text ? <Loading /> : "Sign Up"}
        </button>
      </form>
      <div className='or'><span>OR</span></div>
      <button>
        <FcGoogle size={25} />
        Sign Up with Google
      </button>
      <button>
        <FaGithub size={25} />
        Sign Up with Github
      </button>
    </>
  )
}

export default SignUp