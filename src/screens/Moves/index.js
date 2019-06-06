import React, { useState, useEffect } from 'react'

import api from '~/services/api'
import { Container } from '~/components'
import {
  Title, List, ListItem, ItemTitle,
} from './styles'

export default function Pokemon() {
  const [moves, setMoves] = useState([])

  async function fetchData() {
    const res = await api.get('move')
    setMoves(res.data.results)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <Container>
      <Title>Moves</Title>
      <List
        data={moves}
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
