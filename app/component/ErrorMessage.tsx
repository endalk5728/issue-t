import { Text } from '@radix-ui/themes'
import React, { PropsWithChildren, ReactNode } from 'react'
interface Props{
    children: ReactNode
}

export const ErrorMessage = ({children}:PropsWithChildren) => {
    if(!children)return null;
    
  return (
<Text color="red" as="p">{children}</Text>
  )
}
