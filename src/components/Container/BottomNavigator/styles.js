import styled from 'styled-components/native'
import { StyleSheet } from 'react-native'
import { getBottomSpace } from 'react-native-iphone-x-helper'
import Icon from 'react-native-vector-icons/FontAwesome5'

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  background-color: rgba(250, 250, 250, 0.8);
  padding-bottom: ${getBottomSpace()};
`

export const BorderGradient = styled.View`
  height: ${StyleSheet.hairlineWidth};
`

export const Navigator = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 12px 0;
`

export const NavIcon = styled(Icon).attrs({
  size: 24,
})`
  margin-bottom: 4px;
  color: ${props => (props.active ? '#000' : '#c9c9c9')};
`

export const Title = styled.Text`
  font-size: 16px;
  color: ${props => (props.active ? '#000' : '#c9c9c9')};
`
