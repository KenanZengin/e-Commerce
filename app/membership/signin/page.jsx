"use client"

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import {signIn} from "next-auth/react"
import { useFormik } from 'formik'
import { signIn_validate } from '@/lib/validate'
import {MdAlternateEmail} from "react-icons/md"
import {FaFingerprint,FaGithub} from "react-icons/fa"
import {FcGoogle} from "react-icons/fc"
import mainLogo from 'public/img/header/mainLogo.png'
import Loading from '@/components/loading'


const SignIn = () => {

    const router = useRouter()
    const [checkForm,setCheckForm] = useState(false)
    const [errorMessage,setErrorMessage] = useState({error : ""})
    
    const formik=useFormik({
        initialValues:{
            email:"",
            password:""
        },
        validate:signIn_validate,
        onSubmit
    })

    async function onSubmit(values){
        setCheckForm(true)
        signIn('credentials',{
            redirect :false,
            email : values.email,
            password : values.password,
        }).then(res=>{
            if(res.ok){
                router.push("/")
                router.refresh()
            }else{
                setCheckForm(false)
                setErrorMessage(()=>({ error : res.error}))
            }
        }).catch(error => setErrorMessage(()=>({ error : error.message})))
        
        //if(status.ok) router.push("/")
        
        
        
    }
    console.log("empty",errorMessage);

  return (
   <>
        <div className="title">
            <Image src={mainLogo} alt='logo_2' />
            <h3>Get Started</h3>
            <p>Don't have an account? <Link href={"./signup"}>Sign up</Link></p>
        </div>
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="email">
                <p>Email</p>
                <input type="email"  id="email" placeholder='Enter your email' {...formik.getFieldProps("email")} className={formik.errors.email && formik.touched.email ? "errborder": ""}  />
                <MdAlternateEmail size={20} />
                {formik.errors.email && formik.touched.email ? <span className='validate_message'>{formik.errors.email}
                </span> : <></>}
            </label>
            <label htmlFor="password">
                <p>Password</p>
                <input type="password" id="password" placeholder='Enter your password' {...formik.getFieldProps("password")} className={formik.errors.password && formik.touched.password ? "errborder": ""}/>
                <FaFingerprint size={20} />
                {formik.errors.password && formik.touched.password ? <span className='validate_message'>{formik.errors.password}
          </span> : <></>}
            </label>
            
            {formik.isValid 
                ?  
                    <button type="submit"  style={{opacity: formik.isValid ? "1" : ".4"}}>
                        {checkForm ? <Loading /> : "Sign In"}
                    </button>
                :
                    <div className='form_div' style={{opacity: formik.isValid ? "1" : ".4"}}>
                        Sign In
                    </div>
                }
        </form>
        <div className='or'><span>OR</span></div>
        <button>
            <FcGoogle size={25} />
            Sign Up with Google
        </button>
        {errorMessage?.error.length > 0 
        ? <div className="already_message">
          {errorMessage.error}
          </div> 
        :
          ""
      }
        {/* <button>
            <FaGithub size={25} />
            Sign Up with Github
        </button> */}
   </>
  )
}

export default SignIn