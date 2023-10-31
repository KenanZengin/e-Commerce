"use client"
import { useSession } from 'next-auth/react'
import {IoIosCheckbox} from "react-icons/io"

const UserInformation =  () => {

  const session =  useSession()
  console.log("session : ",session);

  return (
    <div className="form-info">
      <div className="left">
        <div className="title">My Membership Information</div>
        <form>
          <label htmlFor="name">
            <span>Name</span>
            <input type="text" placeholder={session.status=="loading" ? "name" :  session?.data?.user?.name}  />
          </label>
          <label htmlFor="email">
            <span>Email</span>
            <input type="email" placeholder={session.status=="loading" ? "email" :  session?.data?.user?.email}  />     
          </label>
          <label htmlFor="phone" className='phone'>
            <span>Phone</span>
            <div className='phone_value'>
              <p tabIndex={2}>+90</p>
              <input type="tel" name="" id="" />
            </div>
          </label>
          <div className='male'>
            <span>Gender</span>
            <label htmlFor="Female" className='male_2 container_checkbox'>
              <input type="radio" name="male" id="Female"  />
              <span className="checkmark"></span>
              <p>Female</p>
            </label>
            <label htmlFor="Male" className='male_2 container_checkbox'>
              <input type="radio" name="male" id="Male"  />
              <span className="checkmark"></span>
              <p>Male</p>
            </label>
            <div>

              
            </div>
            
          </div>
          <label htmlFor="mail_2"  className='container_checkbox mail_2'>
            <span>Institutional</span>
            <div className='text_checkbox'>
              <input type="checkbox"  name="mail_2" id="mail_2" />
              <span className='checkmark' ></span>
              I want to be informed about opportunities for my workplace shopping.
            </div>
          </label>

          <button>
            Update
          </button>
          
        </form>
        
      </div>
      <div className="right">
        <div className="title">
          Password Update
        </div>
        <form>
          <label htmlFor="password_1">
            <span>Current Password</span>
            <input type="password" name="password_1" id="password_1" />
          </label>
          <label htmlFor="password_2">
            <span>New Password</span>
            <input type="password" name="password_2" id="password_2" />
          </label>
          <label htmlFor="password_3">
            <span>New Password (Again)</span>
            <input type="password" name="password_3" id="password_3" />
          </label>
          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  )
}

export default UserInformation