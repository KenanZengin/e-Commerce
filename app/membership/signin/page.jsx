"use client"

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import {signIn,signOut,useSession} from "next-auth/react"


import {MdAlternateEmail} from "react-icons/md"
import {FaFingerprint,FaGithub} from "react-icons/fa"
import {FcGoogle} from "react-icons/fc"
import mainLogo from 'public/img/header/mainLogo.png'


const SignIn = () => {

    
    const [userValue_2,setUserValue_2] = useState({ email : "" , password : ""})

    const onSubmit = async (e) => {
        e.preventDefault()
        const status = await signIn('credentials',{
            redirect :true,
            email : userValue_2.email,
            password : userValue_2.password,
            callbackUrl: "http://localhost:3000"
        })
    }

  return (
   <>
        <div className="title">
            <Image src={mainLogo} alt='logo_2' />
            <h3>Get Started</h3>
            <p>Don't have an account? <Link href={"./signup"}>Sign up</Link></p>
        </div>
        <form onSubmit={onSubmit}>
            <label htmlFor="email">
                <p>Email</p>
                <input type="email"  id="email" placeholder='Enter your email' value={userValue_2.email} onChange={(e) => setUserValue_2({...userValue_2,email : e.target.value})} />
                <MdAlternateEmail size={20} />
            </label>
            <label htmlFor="password">
                <p>Password</p>
                <input type="password" id="password" placeholder='Enter your password' value={userValue_2.password} onChange={(e) => setUserValue_2({...userValue_2,password : e.target.value})} />
                <FaFingerprint size={20} />
            </label>
            
            <button type="submit">
                Sign In
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

export default SignIn