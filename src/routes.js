import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import { Pokemon, Moves, Items } from '~/screens'

const Routes = createAppContainer(
  createSwitchNavigator({
    Pokemon: {
      screen: Pokemon,
    },
    Moves: {
      screen: Moves,
    },
    Items: {
      screen: Items,
    },
  }),
)

export default Routes
