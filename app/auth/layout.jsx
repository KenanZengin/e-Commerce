import Image from 'next/image'
import formimg from "public/img/sections/form1.jpg"


const AuthLayout = ({children}) => {
  return (
    <div className="userform">
        <div className="userform_wrapper">
            <div className="form_img">
                <Image src={formimg} alt='formImg' />
            </div>
            <div className="form_actions">
               {children}
            </div>
        </div>
    </div>
  )
}

export default AuthLayout