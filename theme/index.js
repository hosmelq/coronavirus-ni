import {theme} from '@chakra-ui/core'

import colors from './colors'

export default {
  ...theme,
  colors: {
    ...theme.colors,
    ...colors,
  },
}
