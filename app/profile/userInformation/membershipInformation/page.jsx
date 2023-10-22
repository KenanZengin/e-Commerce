import React from 'react'

const UserInformation = () => {
  return (
    <div className="form-info">
      <div className="left">
        <div className="title">My Membership Information</div>
        <form>
          <label htmlFor="name">
            <span>Name</span>
            <input type="text" value={"Kenan"} />
          </label>
          <label htmlFor="email">
            <span>Email</span>
            <input type="email" value={"kenan@gmail.com"} />
          </label>
          <label htmlFor="phone">
            <span>Email</span>
            <input type="tel"  />
            <button>Update</button>
          </label>
        </form>
        <div className="form_2">
          <div className="date">
            <span>Your date of birth</span>
            <div>
              Date
            </div>
            <div>
              Mounth
            </div>
            <div>
              Year
            </div>
          </div>
          <div className="gender">
            <label htmlFor="male">
              <input type="radio" name="gender"  />
              Female
            </label>
            <label htmlFor="male">
              <input type="radio" name="gender"  />
              Male
            </label>
          </div>
          <div className="mail-support">
            <span>Institutional</span>
            <label htmlFor="mail_2">
              <input type="checkbox" name="mail_2" id="mail_2" />
              I want to be informed about opportunities for my workplace shopping.
            </label>
          </div>
          <button>
            Update
          </button>
        </div>
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