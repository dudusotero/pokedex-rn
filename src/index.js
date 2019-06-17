import React, { useEffect } from 'react'
import { ApolloProvider } from 'react-apollo'
import changeNavigationBarColor from 'react-native-navigation-bar-color'

import '~/config/ReactotronConfig'

import apollo from '~/services/apollo'
import Routes from '~/routes'

const App = () => {
  useEffect(() => {
    changeNavigationBarColor('black', false)
  }, [])

  return (
    <ApolloProvider client={apollo}>
      <Routes />
    </ApolloProvider>
  )
}

export default App
