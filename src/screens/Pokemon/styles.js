import styled from 'styled-components/native'
import { StyleSheet } from 'react-native'

export const Title = styled.Text`
  font-size: 20px;
  align-self: center;
`

export const ItemSeparator = styled.View`
  height: ${StyleSheet.hairlineWidth};
  background-color: rgba(0, 0, 0, 0.2);
`

export const List = styled.FlatList.attrs({
  ItemSeparatorComponent: ItemSeparator,
})``

export const ListItem = styled.View``

export const ItemTitle = styled.Text``
