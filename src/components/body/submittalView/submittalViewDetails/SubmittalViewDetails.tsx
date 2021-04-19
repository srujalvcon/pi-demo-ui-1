/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import SwipeableViews from 'react-swipeable-views'
import { makeStyles, Theme, useTheme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import PlanView from './PlanView/PlanView'

interface TabPanelProps {
  // eslint-disable-next-line react/require-default-props
  children?: React.ReactNode
  // eslint-disable-next-line react/require-default-props
  dir?: string
  index: any
  value: any
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

function a11yProps(index: any) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  }
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: '100%',
  },
}))

export default function SubmittalViewDetails() {
  const classes = useStyles()
  const theme = useTheme()
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue)
  }

  const handleChangeIndex = (index: number) => {
    setValue(index)
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Plan" {...a11yProps(0)} />
          <Tab label="Tracking" {...a11yProps(1)} />
          <Tab label="Attachments" {...a11yProps(2)} />
          <Tab label="Team" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <PlanView />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          Tracking Comming Soon !
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          Attachments Comming Soon !
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          Team Comming Soon !
        </TabPanel>
      </SwipeableViews>
    </div>
  )
}
