import Image from 'next/image'
import Link from 'next/link';
import formimg from "public/img/sections/form1.jpg"
import { IoIosArrowRoundBack } from "react-icons/io";


const AuthLayout = ({children}) => {
  return (
    <div className="userform">
        <div className="userform_wrapper">
            <div className="form_img">
                <Image src={formimg} alt='formImg' />
            </div>
            <div className="form_actions">
                <Link href={"/"}  className='backHome'><IoIosArrowRoundBack size={28} />Back to home page</Link>
               {children}
            </div>
        </div>
    </div>
  )
}

export default AuthLayout