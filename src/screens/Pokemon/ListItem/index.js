import React, { useState, useEffect } from 'react'
import { shape, string } from 'prop-types'
import {
  View, ActivityIndicator, Text, Image,
} from 'react-native'
import axios from 'axios'

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
    <View>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <View>
          <Image source={{ uri: info.sprites.front_default }} />
          <Text>{info.name}</Text>
        </View>
      )}
    </View>
  )
}

ListItem.propTypes = {
  item: shape({
    name: string,
    url: string,
  }).isRequired,
}

export default ListItem
