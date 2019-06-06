import styled from 'styled-components/native'
import LinearGradient from 'react-native-linear-gradient'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

export const Gradient = styled(LinearGradient).attrs({
  colors: ['#6E95FD', '#6FDEFA', '#8DE061', '#51E85E'],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 0 },
})`
  flex: 1;
`

export const BlurView = styled.View`
  flex: 1;
  background-color: rgba(250, 250, 250, 0.8);
  padding-top: ${getStatusBarHeight() + 48};
`
