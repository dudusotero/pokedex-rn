import React, { useState, useEffect } from 'react'
import { shape, string } from 'prop-types'
import { ActivityIndicator } from 'react-native'
import axios from 'axios'

import { orderFormatter } from '~/helpers'
import {
  Container, Item, Thumbnail, Info, Name, AdditionalInfo, TypeBadge,
} from './styles'

function ListItem({ item }) {
  const [loading, setLoading] = useState(true)
  const [info, setInfo] = useState({})

  async function fetchData() {
    const res = await axios.get(item.url)
    setInfo(res.data)
    setLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <Container>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <Item>
          <Thumbnail source={{ uri: info.sprites.front_default }} />
          <Info>
            <Name>{info.name}</Name>
            <AdditionalInfo>{orderFormatter(info.order)}</AdditionalInfo>
          </Info>
          {info.types.map(itemType => (
            <TypeBadge key={Math.random()} type={itemType.type.name} />
          ))}
        </Item>
      )}
    </Container>
  )
}

ListItem.propTypes = {
  item: shape({
    name: string,
    url: string,
  }).isRequired,
}

export default ListItem
