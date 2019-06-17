import React, { useState, useEffect } from 'react'
import { View, Text, Image } from 'react-native'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import { Container } from '~/components'
import { Title, List } from './styles'

const PokemonQuery = gql`
  query {
    pokemons(first: 20) {
      id
      number
      name
      image
    }
  }
`

function Pokemon({ data }) {
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    setPokemons(data.pokemons)
  }, [data])

  return (
    <Container>
      <Title>Pokemon</Title>
      <List
        data={pokemons}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View>
            <Image source={{ uri: item.image }} style={{ width: 45, height: 45 }} />
            <Text>{item.name}</Text>
            <Text>{item.number}</Text>
          </View>
        )}
      />
    </Container>
  )
}

export default graphql(PokemonQuery)(Pokemon)
