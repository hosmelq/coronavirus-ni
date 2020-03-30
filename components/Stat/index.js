import React from 'react'
import {Box, Flex} from '@chakra-ui/core'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

export function Stat({color = `#585155`, ...props}) {
  return (
    <Flex
      color={color}
      direction="column"
      minHeight={200}
      p={2}
      rounded="lg"
      shadow="sm"
      {...props}
    />
  )
}

export function StatIcon({color, icon}) {
  return <FontAwesomeIcon fixedWidth icon={icon} size="2x" />
}

export function StatLabel(props) {
  return <Box fontSize="sm" fontWeight="medium" {...props} />
}

export function StatNumber(props) {
  return (
    <Flex
      align="center"
      flex="auto"
      justify="center"
      fontSize="4xl"
      fontWeight="medium"
      lineHeight="none"
      {...props}
    />
  )
}

export function StatHelpText(props) {
  return <Box fontSize="xs" fontWeight="medium" {...props} />
}
