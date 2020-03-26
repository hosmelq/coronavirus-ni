import got from 'got'
import React, {useEffect} from 'react'
import ReactGA from 'react-ga'
import {Box, Grid, Heading, Link, Stack, useTheme} from '@chakra-ui/core'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import {
  Stat,
  StatHelpText,
  StatIcon,
  StatLabel,
  StatNumber,
} from '../components/Stat'

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
          <FontAwesomeIcon fixedWidth icon={[`fad`, `virus`]} size="2x" />
          <Heading as="h1" fontSize={[`xl`, `2xl`]} ml={2}>
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
        p={4}
        pb={8}
      >
        <Grid
          gap={4}
          templateColumns={[
            null,
            `repeat(2, 1fr)`,
            `repeat(2, 1fr)`,
            `repeat(3, 1fr)`,
          ]}
        >
          <Stat bg="indigo.500" color="white">
            <StatIcon icon={[`fal`, `chart-bar`]} />
            <StatLabel>Estadísticas de hoy</StatLabel>
            <Stack isInline align="center" flex="auto" px={20} spacing="auto">
              <Box>
                <StatNumber>{today.cases}</StatNumber>
                <StatHelpText>Casos</StatHelpText>
              </Box>
              <Box>
                <StatNumber>{today.deaths}</StatNumber>
                <StatHelpText>Muertes</StatHelpText>
              </Box>
            </Stack>
          </Stat>

          <Stat bg="#f5f2ef">
            <StatIcon icon={[`fal`, `check-double`]} />
            <StatLabel>Casos confirmados</StatLabel>
            <StatNumber>{cases}</StatNumber>
          </Stat>

          <Stat bg="yellow.100">
            <StatIcon icon={[`fal`, `head-side-cough`]} />
            <StatLabel>Casos activos</StatLabel>
            <StatNumber>{active}</StatNumber>
          </Stat>

          <Stat bg="orange.100">
            <StatIcon icon={[`fal`, `lungs-virus`]} />
            <StatLabel>Casos críticos</StatLabel>
            <StatNumber>{critical}</StatNumber>
          </Stat>

          <Stat bg="green.100">
            <StatIcon icon={[`fal`, `smile`]} />
            <StatLabel>Casos recuperados</StatLabel>
            <StatNumber>{recovered}</StatNumber>
          </Stat>

          <Stat bg="red.100">
            <StatIcon icon={[`fal`, `skull-crossbones`]} />
            <StatLabel>Casos fallecidos</StatLabel>
            <StatNumber>{deaths}</StatNumber>
          </Stat>
        </Grid>
      </Box>
    </>
  )
}

export async function getStaticProps() {
  const country = await got(
    `https://corona.lmao.ninja/countries/nicaragua`
  ).json()

  const {
    active,
    cases,
    critical,
    deaths,
    recovered,
    todayCases,
    todayDeaths,
  } = country

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
