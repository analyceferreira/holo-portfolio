import React from 'react'
import {Content} from './styles'

export default function PageContent({children}: {children: React.ReactNode}) {

  return (
      <Content>
          {children}
      </Content>
  )
}