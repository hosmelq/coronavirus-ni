import {library} from '@fortawesome/fontawesome-svg-core'

import {
  faVirus as fadVirus, // [`fad`, `virus`]
} from '@fortawesome/pro-duotone-svg-icons'

import {
  faChartBar as falChartBar,
  faCheckDouble as falCheckDouble,
  faHeadSideCough as falHeadSideCough,
  faLungsVirus as falLungsVirus,
  faSkullCrossbones as falSkullCrossbones,
  faSmile as falSmile,
} from '@fortawesome/pro-light-svg-icons'

// duotone
library.add(fadVirus)

// light
library.add(
  falChartBar,
  falCheckDouble,
  falHeadSideCough,
  falLungsVirus,
  falSmile,
  falSkullCrossbones
)
