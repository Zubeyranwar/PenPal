"use client"

import { ConvexReactClient } from 'convex/react'
import { ConvexProviderWithClerk } from 'convex/react-clerk'
import {ClerkProvider,useAuth} from '@clerk/clerk-react';
import {ReactNode} from 'react'

const ConvexClientProvider = (
  {children}:{children:ReactNode}
) => {
  const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!)
  return (
    <ClerkProvider
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!}
    >
      <ConvexProviderWithClerk 
        useAuth={useAuth}
        client={convex}
      >
        {children}
      </ConvexProviderWithClerk>
    </ClerkProvider>
  )
}

export default ConvexClientProvider