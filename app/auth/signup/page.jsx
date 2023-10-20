import Image from 'next/image'

import {HiOutlineUser} from "react-icons/hi"
import {MdAlternateEmail} from "react-icons/md"
import {FaFingerprint,FaGithub} from "react-icons/fa"
import {FcGoogle} from "react-icons/fc"
import mainLogo from 'public/img/header/mainLogo.png'
import Link from 'next/link'

const SignUp = () => {
  return (
    <>
      <div className="title">
            <Image src={mainLogo} alt='mainLogo' />
            <h3>Get Started</h3>
            <p>Already have an account? <Link href={"./signin"}>Log in</Link></p>
      </div>
      <form>
        <label htmlFor="name">
          <p>Name</p>
          <input type="text" placeholder='Enter your name' id='name' />
          <HiOutlineUser size={20} />
        </label>
        <label htmlFor="email">
          <p>Email</p>
          <input type="email"  id="email" placeholder='Enter your email' />
          <MdAlternateEmail size={20} />
        </label>
        <label htmlFor="password">
          <p>Password</p>
          <input type="password" id="password" placeholder='Enter your password' />
          <FaFingerprint size={20} />
        </label>
        <label htmlFor="agree" className='check'>
          <input type="checkbox" id="agree"  />
          <p>I agree to the <Link href={"/"}>Teams & Privacy</Link></p>
        </label>
        <button type="submit">
          Sign Up
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