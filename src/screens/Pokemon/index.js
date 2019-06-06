import React, { useState, useEffect } from 'react'

import api from '~/services/api'
import ListItem from './ListItem'
import { Container } from '~/components'
import { Title, List } from './styles'

export default function Pokemon() {
  const [next, setNext] = useState(undefined)
  const [pokemon, setPokemon] = useState([])

  async function load() {
    const res = await api.get('pokemon')

    setPokemon(res.data.results)
    setNext(res.data.next)
  }

  async function loadMore() {
    if (!next) return

    const res = await api.get(next)
    setPokemon(prev => [...prev, ...res.data.results])
    setNext(res.data.next)
  }

  useEffect(() => {
    load()
  }, [])

  return (
    <Container>
      <Title>Pokemon</Title>
      <List
        data={pokemon}
        keyExtractor={item => item.name}
        renderItem={({ item }) => <ListItem item={item} />}
        onEndReached={loadMore}
        onEndReachedThreshold={0.2}
      />
    </Container>
  )
}
