import React from 'react'
import { StatusBar } from 'react-native'
import { oneOfType, arrayOf, node } from 'prop-types'

import BottomNavigator from './BottomNavigator'
import { Gradient, BlurView } from './styles'

function Container({ children }) {
  const routes = [
    { name: 'Pokemon', icon: 'dog' },
    { name: 'Moves', icon: 'compact-disc' },
    { name: 'Items', icon: 'cookie-bite' },
  ]

  return (
    <Gradient>
      <StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />
      <BlurView>{children}</BlurView>
      <BottomNavigator routes={routes} />
    </Gradient>
  )
}

Container.propTypes = {
  children: oneOfType([arrayOf(node), node]),
}

Container.defaultProps = {
  children: undefined,
}

export default Container
