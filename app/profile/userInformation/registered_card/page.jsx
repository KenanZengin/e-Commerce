import {HiOutlineCreditCard} from "react-icons/hi2"
import {AiOutlineClose} from "react-icons/ai"
import {BsFillPlusCircleFill} from "react-icons/bs"

const CreditCard = () => {
  return (
    <div className="user_address">
        <div className="address">
            <div className="address_add">
                <label htmlFor="new_address" className='address_label'>
                Add New Credit Card
                <BsFillPlusCircleFill size={22} />
                <input type="checkbox" name="new_address" id="new_address" />
                </label>
            </div>
        <div className="address_list">
            <div className="no-address">
            <HiOutlineCreditCard size={130} />
            <h4>Your registered Credit Card was not found</h4>
            <p>To add an card that you can use for your orders, you can create an address by clicking the "Add New Credit Card" link at the top of the screen.</p>
            </div>
        </div>
        </div>
        <div className="user_address_section">
            <div className="address_form">
            <div className='title'>
            Add Credit Card
            <label htmlFor="new_address" >
                <AiOutlineClose size={20} />    
            </label>
            </div>
            <form>
            
            <label htmlFor="card_number" className=' w-1'>
                <span>Card Number</span>
                <input type="text" />
            </label>
            <label htmlFor="card_number" className=' w-1'>
                <span>Card Owner</span>
                <input type="text" />
            </label>
            <label htmlFor="card_number" className=' w-3'>
                <span>Month</span>
                <input type="text" />
            </label>
            <label htmlFor="card_number" className=' w-3'>
                <span>Year</span>
                <input type="text" />
            </label>
            <label htmlFor="card_number" className=' w-3'>
                <span>CVV</span>
                <input type="text" />
            </label>
            <button>
                Save
            </button>
            </form>
            </div>
        </div>
    </div>
  )
}

export default CreditCard