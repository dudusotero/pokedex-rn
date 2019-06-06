import React, { useState, useEffect } from 'react'

import api from '~/services/api'
import ListItem from './ListItem'
import { Container } from '~/components'
import { Title, List } from './styles'

export default function Pokemon() {
  const [pokemon, setPokemon] = useState([])

  async function fetchData() {
    const res = await api.get('pokemon')
    setPokemon(res.data.results)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <Container>
      <Title>Pokemon</Title>
      <List
        data={pokemon}
        keyExtractor={item => item.name}
        renderItem={({ item }) => <ListItem item={item} />}
      />
    </Container>
  )
}
