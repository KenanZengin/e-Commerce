import Image from 'next/image'

import Logo from 'public/img/mainLogo.png'
const HomePage = () => {
  return (
    <div> 
      <Image src={Logo} width={170} />
    </div>
  )
}

export default HomePage