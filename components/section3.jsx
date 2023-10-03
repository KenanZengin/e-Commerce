import {BsFillStarFill} from "react-icons/bs"
import user_1 from "public/img/random_user1.jpg"
import user_2 from "public/img/random_user2.jpg"
import user_3 from "public/img/random_user4.jpg"
import Image from "next/image"

const Section_3 = () => {
  return (
    <div className="section_3">
        <div className="section_3_content">
            <div className="title">
                WHAT OUR <br />
                REVIEWS SAY
            </div>
            <div className="comments">
                <div className="comment">
                    <span className="date">
                        15 Apr 2023
                    </span>
                    <div className="stars">
                        <BsFillStarFill size={20} />
                        <BsFillStarFill size={20} />
                        <BsFillStarFill size={20} />
                        <BsFillStarFill size={20} />
                        <BsFillStarFill size={20} />
                    </div>
                    <p>
                        The most comfortable Nike's I've wom in the past couple of years has been the 32s. These have surpassed that.
                    </p>
                    <div className="user">
                        <Image src={user_1} alt="user" />
                        <div className="user-name">
                            <p>Rachel Jules</p>
                            <span>28 Years</span>
                        </div>
                    </div>
                </div>
                <div className="comment">
                    <span className="date">
                        15 Apr 2023
                    </span>
                    <div className="stars">
                        <BsFillStarFill size={20} />
                        <BsFillStarFill size={20} />
                        <BsFillStarFill size={20} />
                        <BsFillStarFill size={20} />
                        <BsFillStarFill size={20} />
                    </div>
                    <p>
                        The most comfortable Nike's I've wom in the past couple of years has been the 32s. These have surpassed that.
                    </p>
                    <div className="user">
                        <Image src={user_3} alt="user" />
                        <div className="user-name">
                            <p>Rachel Jules</p>
                            <span>28 Years</span>
                        </div>
                    </div>
                </div>
                <div className="comment">
                    <span className="date">
                        15 Apr 2023
                    </span>
                    <div className="stars">
                        <BsFillStarFill size={20} />
                        <BsFillStarFill size={20} />
                        <BsFillStarFill size={20} />
                        <BsFillStarFill size={20} />
                        <BsFillStarFill size={20} />
                    </div>
                    <p>
                        The most comfortable Nike's I've wom in the past couple of years has been the 32s. These have surpassed that.
                    </p>
                    <div className="user">
                        <Image src={user_1} alt="user" />
                        <div className="user-name">
                            <p>Rachel Jules</p>
                            <span>28 Years</span>
                        </div>
                    </div>
                </div>
                <div className="comment">
                    <span className="date">
                        15 Apr 2023
                    </span>
                    <div className="stars">
                        <BsFillStarFill size={20} />
                        <BsFillStarFill size={20} />
                        <BsFillStarFill size={20} />
                        <BsFillStarFill size={20} />
                        <BsFillStarFill size={20} />
                    </div>
                    <p>
                        The most comfortable Nike's I've wom in the past couple of years has been the 32s. These have surpassed that.
                    </p>
                    <div className="user">
                        <Image src={user_2} alt="user" />
                        <div className="user-name">
                            <p>Rachel Jules</p>
                            <span>28 Years</span>
                        </div>
                    </div>
                </div>
           
                
            </div>
        </div>
    </div>
  )
}

export default Section_3