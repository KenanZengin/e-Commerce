'use client'

import { SessionProvider } from 'next-auth/react'
import { RevlyProvider } from '@/context/context'

const Providers = ({ children }) => {
  return(
    
      <RevlyProvider>
        <SessionProvider>
        {children}
        </SessionProvider>
      </RevlyProvider>
   
  )
}

export default Providers