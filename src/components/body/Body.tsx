import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
// import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
// import ListItemText from '@material-ui/core/ListItemText'
import Checkbox from '@material-ui/core/Checkbox'
import { Card, ListSubheader } from '@material-ui/core'
import Alert from '@material-ui/lab/Alert'
import { SubmittalView } from './submittalView/SubmittalView'
import { ActionBar } from './ActionBar/ActionBar'
// import IconButton from '@material-ui/core/IconButton'
// import CommentIcon from '@material-ui/icons/Comment'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    },
  })
)

export const Body: React.FC = () => {
  const classes = useStyles()
  const [checked, setChecked] = React.useState<String[]>([])

  const handleToggle = (value: string) => () => {
    const currentIndex = checked.indexOf(value)
    const newChecked = [...checked]

    if (currentIndex === -1) {
      newChecked.push(value)
    } else {
      newChecked.splice(currentIndex, 1)
    }

    setChecked(newChecked)
  }

  return (
    <div>
      <Alert severity="info" onClose={() => {}}>
        Hey, New Baseline has been published, please review your plan !
      </Alert>
      <ActionBar />
      <List className={classes.root}>
        <ListSubheader>Type: Shop Drawing</ListSubheader>

        {['SW0', 'SW1'].map((value) => {
          const labelId = `checkbox-list-label-${value}`

          return (
            <Card className={classes.root} variant="outlined">
              <ListItem key={value} role={undefined} dense button disableRipple>
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={checked.indexOf(value) !== -1}
                    onClick={handleToggle(value)}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ 'aria-labelledby': labelId }}
                  />
                </ListItemIcon>
                <SubmittalView SubmittalStatus="WARN" />
              </ListItem>
            </Card>
          )
        })}

        {['SG1', 'SG2', 'SG3'].map((value) => {
          const labelId = `checkbox-list-label-${value}`

          return (
            <Card className={classes.root} variant="outlined">
              <ListItem key={value} role={undefined} dense button disableRipple>
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={checked.indexOf(value) !== -1}
                    onClick={handleToggle(value)}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ 'aria-labelledby': labelId }}
                  />
                </ListItemIcon>
                <SubmittalView SubmittalStatus="ON-TIME" />
              </ListItem>
            </Card>
          )
        })}

        <ListSubheader>Type: Tests And Inspections</ListSubheader>

        {['E0', 'E1'].map((value) => {
          const labelId = `checkbox-list-label-${value}`

          return (
            <Card className={classes.root} variant="outlined">
              <ListItem key={value} role={undefined} dense button disableRipple>
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={checked.indexOf(value) !== -1}
                    onClick={handleToggle(value)}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ 'aria-labelledby': labelId }}
                  />
                </ListItemIcon>
                <SubmittalView SubmittalStatus="LATE" />
              </ListItem>
            </Card>
          )
        })}

        {['W0', 'W1'].map((value) => {
          const labelId = `checkbox-list-label-${value}`

          return (
            <Card className={classes.root} variant="outlined">
              <ListItem key={value} role={undefined} dense button disableRipple>
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={checked.indexOf(value) !== -1}
                    onClick={handleToggle(value)}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ 'aria-labelledby': labelId }}
                  />
                </ListItemIcon>
                <SubmittalView SubmittalStatus="WARN" />
              </ListItem>
            </Card>
          )
        })}

        {['G1', 'G2', 'G3'].map((value) => {
          const labelId = `checkbox-list-label-${value}`

          return (
            <Card className={classes.root} variant="outlined">
              <ListItem key={value} role={undefined} dense button disableRipple>
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={checked.indexOf(value) !== -1}
                    onClick={handleToggle(value)}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ 'aria-labelledby': labelId }}
                  />
                </ListItemIcon>
                <SubmittalView SubmittalStatus="ON-TIME" />
              </ListItem>
            </Card>
          )
        })}
      </List>
    </div>
  )
}
