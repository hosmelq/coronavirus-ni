import React, {memo} from 'react'
import {For} from 'react-loops'
import {createBreakpoint, useMeasure} from 'react-use'
import {Box, Stack} from '@chakra-ui/core'
import {ResponsiveLine} from '@nivo/line'

const chartTheme = {
  axis: {
    ticks: {
      text: {
        fill: `#fff`,
      },
    },
  },
  crosshair: {
    line: {
      stroke: `#fff`,
    },
  },
}

const SliceTooltip = memo(function SliceTooltip({slice: {points}}) {
  const rowHeight = 24
  const tooltipHeight = `${44 + rowHeight * points.length}px`

  return (
    <Stack
      bg="white"
      height={tooltipHeight}
      p={2}
      rounded="sm"
      shadow="sm"
      spacing="auto"
      width={200}
    >
      <Box fontSize="sm" fontWeight="medium" textTransform="capitalize">
        {points[0].data.x}
      </Box>
      <For
        of={points}
        as={(point) => (
          <Stack isInline align="center" height={`${rowHeight}px`}>
            <Box bg={point.serieColor} height={4} rounded="full" width={4} />
            <Box>{point.serieId}</Box>
            <Box fontWeight="bold" ml="auto">
              {point.data.y}
            </Box>
          </Stack>
        )}
      />
    </Stack>
  )
})

const AXIS_WIDTH = 56

function getAxisBottom(isExpanded) {
  return {
    tickPadding: 8, // 2
    tickSize: 0,
  }
}

function getAxisLeft(isExpanded) {
  return {
    tickPadding: 18, // 3
    tickSize: 0,
  }
}

function getMargin(isExpanded) {
  return {
    bottom: 19, // 13 // 1
    left: 36, // 21 // 3
    right: 17, // 17
    top: 3, // 3
  }
}

export default function CumulativeCasesChart({data, ...props}) {
  const [measureRef, {width: boxWidth}] = useMeasure()
  const entriesCount = Math.max(...data.map(({data}) => data.length))
  const hasEnoughRoom = !!Math.max(boxWidth - entriesCount * AXIS_WIDTH, 0)
  const width = hasEnoughRoom ? `100%` : entriesCount * AXIS_WIDTH

  return (
    <Box {...props} ref={measureRef} bg="#585155" rounded="lg" shadow="sm">
      <Box color="white" fontSize="sm" fontWeight="medium" pt={4} px={4}>
        Casos acumulativos
      </Box>
      <Box overflowX="auto">
        <Box height={300} minWidth="100%" p={4} style={{width}}>
          <ResponsiveLine
            curve="monotoneX"
            data={data}
            enableGridX={false}
            enableGridY={false}
            enableSlices={`x`}
            sliceTooltip={SliceTooltip}
            theme={chartTheme}
            axisBottom={getAxisBottom()}
            axisLeft={getAxisLeft()}
            margin={getMargin()}
          />
        </Box>
      </Box>
    </Box>
  )
}
