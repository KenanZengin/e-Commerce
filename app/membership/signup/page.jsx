"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useFormik } from 'formik'
import signUp_validate from '@/lib/validate'
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
  const [checkBox,setCheckBox] = useState(false)
  const [userValue,setUserValue] = useState({name : "" , email : "" , password : ""})


  const formik = useFormik({
    initialValues:{
      name:"",
      email:"",
      password:""
    },
    validate:signUp_validate,
    onSubmit
  })


    async function onSubmit(values){
    console.log(values);
    setText(true)
    const options = {
      method : "POST",
      headers : {'Content-Type' : 'application/json'},
      body : JSON.stringify(values)
    }
    await fetch('http://localhost:3000/api/auth/signup',options)  
   
    formik.resetForm()
  }

  return (
    <>
      <div className="title">
        <Image src={mainLogo} alt='mainLogo' />
        <h3>Get Started</h3>
        <p>Already have an account? <Link href={"./signin"}>Log in</Link></p>
      </div>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">
          <p>Name</p>
          <input type="text" placeholder='Enter your user name...' id='name' name='name' {...formik.getFieldProps("name")}  className={formik.errors.name && formik.touched.name ? "errborder": ""}/>
          <HiOutlineUser size={20} />
          {formik.errors.name && formik.touched.name ? <span className='validate_message'>{formik.errors.name}
          </span> : <></>}
        </label>
        <label htmlFor="email">
          <p>Email</p>
          <input type="email"  id="email" placeholder='Enter your email...'  {...formik.getFieldProps("email")}  className={formik.errors.email && formik.touched.email ? "errborder": ""}/>
          <MdAlternateEmail size={20} />
          {formik.errors.email && formik.touched.email ? <span className='validate_message'>{formik.errors.email}
          </span> : <></>}
        </label>
        <label htmlFor="password">
          <p>Password</p>
          <input type="password" id="password" placeholder='Enter your password' {...formik.getFieldProps("password")}  className={formik.errors.password && formik.touched.password ? "errborder": ""} />
          <FaFingerprint size={20} />
          {formik.errors.password && formik.touched.password ? <span className='validate_message'>{formik.errors.password}
          </span> : <></>}
        </label>
        <label htmlFor="agree" className='check container_checkbox' >
          <input type="checkbox" id="agree"  onClick={()=>setCheckBox(!checkBox)} />
          <span className='checkmark'></span>
          <p>I agree to the <Link href={"/"}>Teams & Privacy</Link></p>
        </label>
        <button type="submit" disabled={checkBox && formik.isValid ? false : true}  style={{opacity: checkBox && formik.isValid ? "1" : ".4"}}>
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