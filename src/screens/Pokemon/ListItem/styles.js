import styled from 'styled-components/native'
import { Dimensions } from 'react-native'

const { height } = Dimensions.get('screen')

export const Container = styled.View`
  justify-content: center;
  align-items: center;
  height: ${height / 10};
  background-color: #fff;
`

export const Item = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`

export const Thumbnail = styled.Image.attrs({
  resizeMode: 'contain',
})`
  height: 100%;
  width: 20%;
  margin: 0 4px;
`

export const Info = styled.View`
  flex: 1;
`

export const Name = styled.Text`
  text-transform: capitalize;
  font-weight: bold;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.8);
`

export const AdditionalInfo = styled.Text`
  color: rgba(0, 0, 0, 0.4);
`
