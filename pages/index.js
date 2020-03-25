import Head from 'next/head'
import covid from 'novelcovid'
import React, {useEffect} from 'react'
import ReactGA from 'react-ga'
import {
  Box,
  Flex,
  Grid,
  Heading,
  Link,
  Stack,
  Text,
  useTheme,
} from '@chakra-ui/core'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

ReactGA.initialize(`UA-158975132-1`)

function Stat({color, descriptionn, title, value}) {
  const description = null

  return (
    <Flex bg="white" direction="column" rounded="md" shadow="sm">
      <Stack
        isInline
        align="center"
        borderBottomWidth={1}
        borderColor="gray.100"
        height="56px"
        px={4}
        spacing="auto"
      >
        <Heading
          as="h3"
          fontWeight="medium"
          size="sm"
          textTransform="uppercase"
          whiteSpace="nowrap"
        >
          {title}
        </Heading>
        <Box as="span" color="indigo.500">
          <FontAwesomeIcon fixedWidth icon={[`fad`, `chart-bar`]} size="lg" />
        </Box>
      </Stack>
      <Text as="div" p={8} textAlign="center">
        <Text
          as="div"
          color={color}
          fontSize="4xl"
          fontWeight="medium"
          lineHeight="none"
        >
          {new Intl.NumberFormat(`es-NI`).format(value)}
        </Text>
        {description && (
          <Text fontWeight="medium" mt={2}>
            {description}
          </Text>
        )}
      </Text>
    </Flex>
  )
}

function StatToday({cases, deaths}) {
  return (
    <Flex
      bg="indigo.500"
      color="white"
      direction="column"
      rounded="md"
      shadow="sm"
    >
      <Flex
        align="center"
        borderBottomWidth={1}
        borderColor="whiteAlpha.300"
        height="56px"
        px={4}
      >
        <Heading
          as="h3"
          fontWeight="medium"
          size="sm"
          textTransform="uppercase"
        >
          Estadísticas de hoy
        </Heading>
      </Flex>

      <Flex align="center" flex={1} px={4} py={4}>
        <Box flex={1}>
          <Box fontSize="2xl" fontWeight="medium" lineHeight="none">
            {cases}
          </Box>
          <Box fontSize="sm" fontWeight="medium">
            Casos
          </Box>
        </Box>
        <Box flex={1}>
          <Box fontSize="2xl" fontWeight="medium" lineHeight="none">
            {deaths}
          </Box>
          <Box fontSize="sm" fontWeight="medium">
            Muertes
          </Box>
        </Box>
      </Flex>
    </Flex>
  )
}

export default function Home({
  active,
  cases,
  critical,
  deaths,
  recovered,
  today,
}) {
  const theme = useTheme()

  useEffect(() => {
    ReactGA.pageview(window.location.pathname)
  }, [])

  return (
    <>
      <Box bg="indigo.500" color="white">
        <Stack
          isInline
          align="center"
          maxWidth={theme.breakpoints[`xl`]}
          margin="auto"
          p={4}
          spacing="auto"
        >
          <Heading as="h1" fontSize={[`xl`, `2xl`]}>
            <FontAwesomeIcon fixedWidth icon={[`fad`, `virus`]} />
            {` `}
            Nicaragua
          </Heading>
          <Link
            href="https://www.who.int/es/emergencies/diseases/novel-coronavirus-2019/advice-for-public"
            rel="noopener"
          >
            Cómo protegerse
          </Link>
        </Stack>
      </Box>

      <Box
        as="main"
        margin="auto"
        maxWidth={theme.breakpoints[`xl`]}
        mt={4}
        p={4}
        pb={8}
      >
        <Grid
          gap={8}
          templateColumns={[
            null,
            `repeat(2, 1fr)`,
            `repeat(2, 1fr)`,
            `repeat(3, 1fr)`,
          ]}
        >
          <StatToday cases={today.cases} deaths={today.deaths} />

          <Stat
            color="black"
            description=""
            title="Casos confirmados"
            value={cases}
          />

          <Stat
            color="yellow.400"
            description="Pacientes actualmente infectados"
            title="Casos activos"
            value={active}
          />

          <Stat
            color="orange.400"
            description="Pacientes actualmente infectados"
            title="Casos críticos"
            value={critical}
          />

          <Stat
            color="green.400"
            description="Pacientes actualmente infectados"
            title="Casos recuperados"
            value={recovered}
          />

          <Stat
            color="red.400"
            description="Pacientes actualmente infectados"
            title="Casos fallecidos"
            value={deaths}
          />
        </Grid>
      </Box>
    </>
  )
}

export async function getStaticProps() {
  const {
    active,
    cases,
    critical,
    deaths,
    recovered,
    todayCases,
    todayDeaths,
  } = await covid.getCountry({country: `nicaragua`})

  return {
    props: {
      active,
      cases,
      critical,
      deaths,
      recovered,
      today: {
        cases: todayCases,
        deaths: todayDeaths,
      },
    },
  }
}
