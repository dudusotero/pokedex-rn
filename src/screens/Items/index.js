import React, { useState, useEffect } from 'react'

import api from '~/services/api'
import { Container } from '~/components'
import {
  Title, List, ListItem, ItemTitle,
} from './styles'

export default function Pokemon() {
  const [items, setItems] = useState([])

  async function fetchData() {
    const res = await api.get('item')
    setItems(res.data.results)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <Container>
      <Title>Items</Title>
      <List
        data={items}
        keyExtractor={item => item.name}
        renderItem={({ item }) => (
          <ListItem>
            <ItemTitle>{item.name}</ItemTitle>
          </ListItem>
        )}
      />
    </Container>
  )
}
