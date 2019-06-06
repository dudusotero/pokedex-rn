import React from 'react'
import { TouchableWithoutFeedback } from 'react-native'
import { arrayOf, shape, string } from 'prop-types'
import { useNavigation } from 'react-navigation-hooks'

import {
  Container, BorderGradient, Navigator, NavIcon, Title,
} from './styles'

function BottomNavigator({ routes }) {
  const {
    navigate,
    state: { routeName },
  } = useNavigation()

  return (
    <>
      <BorderGradient />
      <Container>
        {routes.map(route => (
          <TouchableWithoutFeedback key={route.name} onPress={() => navigate(route.name)}>
            <Navigator>
              <NavIcon name={route.icon} active={route.name === routeName} />
              <Title active={route.name === routeName}>{route.name}</Title>
            </Navigator>
          </TouchableWithoutFeedback>
        ))}
      </Container>
    </>
  )
}

BottomNavigator.propTypes = {
  routes: arrayOf(
    shape({
      name: string,
      icon: string,
    }),
  ),
}

BottomNavigator.defaultProps = {
  routes: [],
}

export default BottomNavigator
