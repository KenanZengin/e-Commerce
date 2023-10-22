import React from 'react'

const UserInformation = () => {

  const deneme = "kenan"

  return (
    <div className="form-info">
      <div className="left">
        <div className="title">My Membership Information</div>
        <form>
          <label htmlFor="name">
            <span>Name</span>
            <input type="text" placeholder={"kenan"}  />
          </label>
          <label htmlFor="email">
            <span>Email</span>
            <input type="email" placeholder='kenan@gmail.com'  />     
          </label>
          <label htmlFor="phone" className='phone'>
            <span>Phone</span>
            <div className='phone_value'>
              <p tabIndex={2}>+90</p>
              <input type="tel" name="" id="" />
            </div>
          </label>
          <label htmlFor="male" className='male'>
            <span>Gender</span>
            <div>
              <input type="radio" name="gender"  />
              Female
              <input type="radio" name="gender"  />
              Male
            </div>
            
          </label>
          <label htmlFor="mail_2">
            <span>Institutional</span>
            <div>
              <input type="checkbox" name="mail_2" id="mail_2" />
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