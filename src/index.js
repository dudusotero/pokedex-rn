import React, { useEffect } from 'react'
import changeNavigationBarColor from 'react-native-navigation-bar-color'

import '~/config/ReactotronConfig'

import Routes from '~/routes'

const App = () => {
  useEffect(() => {
    changeNavigationBarColor('black', false)
  }, [])

  return <Routes />
}

export default App
