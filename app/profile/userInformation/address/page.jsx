
import {AiOutlineClose} from "react-icons/ai"
import {BsFillPlusCircleFill} from "react-icons/bs"
import {IoLocationSharp} from "react-icons/io5"

const UserAddress = () => {
  return (
    <div className="user_address">
      <div className="address">
        <div className="address_add">
          <label htmlFor="new_address" className='address_label'>
            Add New Address 
            <BsFillPlusCircleFill size={22} />
            <input type="checkbox" name="new_address" id="new_address" />
          </label>
        </div>
        <div className="address_list">
          <div className="no-address">
            <IoLocationSharp size={130} />
            <h4>Your registered address was not found</h4>
            <p>To add an address that you can use for your orders, you can create an address by clicking the "Add New Address" link at the top of the screen.</p>
          </div>
        </div>
      </div>
      <div className="user_address_section">
        <div className="address_form">
          <div className='title'>
            Add Address
            <label htmlFor="new_address" >
              <AiOutlineClose size={20} />
            </label>
          </div>
          <form>
            <label htmlFor="address_name " className='w-2'>
              <span>Name</span>
              <input type="text"  />
            </label>
            <label htmlFor="address_lastname " className='w-2'>
              <span>Lastname</span>
              <input type="text" />
            </label>
            <label htmlFor="address_phone " className='w-2'>
              <span>Phone</span>
              <input type="text" />
            </label>
            <label htmlFor="address_province " className='w-2'>
              <span>Province</span>
              <input type="text" />
            </label>
            <label htmlFor="address_address_address" className=' w-1'>
              <span>Address</span>
              <textarea name="" id="" cols="30" rows="10"></textarea>
            </label>
            <label htmlFor="address_title" className=' w-1'>
              <span>Address Title</span>
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

export default UserAddress