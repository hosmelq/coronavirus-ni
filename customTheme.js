import {theme} from '@chakra-ui/core'

const colors = {
  indigo: {
    50: `#f0f5ff`,
    100: `#e5edff`,
    200: `#cddbfe`,
    300: `#b4c6fc`,
    400: `#8da2fb`,
    500: `#6875f5`,
    600: `#5850ec`,
    700: `#5145cd`,
    800: `#5145cd`,
    900: `#362f78`,
  },
}

export default {
  ...theme,
  colors: {
    ...theme.colors,
    ...colors,
  },
}
