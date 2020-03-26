import React from 'react'
import {Box, Flex} from '@chakra-ui/core'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

export function Stat({color = `#585155`, ...props}) {
  return (
    <Flex
      {...props}
      color={color}
      direction="column"
      minHeight={200}
      p={2}
      rounded="lg"
      shadow="sm"
    />
  )
}

export function StatIcon({color, icon}) {
  return <FontAwesomeIcon fixedWidth icon={icon} size="2x" />
}

export function StatLabel(props) {
  return <Box {...props} fontSize="sm" fontWeight="medium" />
}

export function StatNumber(props) {
  return (
    <Flex
      {...props}
      align="center"
      flex="auto"
      justify="center"
      fontSize="4xl"
      fontWeight="medium"
      lineHeight="none"
    />
  )
}

export function StatHelpText(props) {
  return <Box {...props} fontSize="xs" fontWeight="medium" />
}
