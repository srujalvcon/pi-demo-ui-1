/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-nested-ternary */
import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
// import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import clsx from 'clsx'
// import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import CheckIcon from '@material-ui/icons/Check'
import CommentIcon from '@material-ui/icons/Comment'
import FlashOnOutlinedIcon from '@material-ui/icons/FlashOnOutlined'
import {
  IconButton,
  Collapse,
  CardHeader,
  Avatar,
  Chip,
  Grid,
} from '@material-ui/core'
import { green, red, yellow } from '@material-ui/core/colors'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import FlagIcon from '@material-ui/icons/Flag'
import PriorityHighIcon from '@material-ui/icons/PriorityHigh'
import Alert from '@material-ui/lab/Alert/Alert'
import SubmittalViewDetails from './submittalViewDetails/SubmittalViewDetails'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: '1rem',
    },
    pos: {
      marginBottom: 12,
    },
    cover: {
      width: 151,
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: green[800],
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
    avatar_warn: {
      backgroundColor: yellow[800],
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
    avatar_late: {
      backgroundColor: red[800],
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
  })
)

export interface ISubmittalViewProps {
  SubmittalStatus: 'ON-TIME' | 'WARN' | 'LATE'
}

export const SubmittalView: React.FC<ISubmittalViewProps> = (
  props: ISubmittalViewProps
) => {
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState(false)
  //   const bull = <span className={classes.bullet}>•</span>

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  return (
    <div style={{ width: '100%' }}>
      <CardHeader
        avatar={
          <Avatar
            aria-label="recipe"
            className={
              props.SubmittalStatus === 'ON-TIME'
                ? classes.avatar
                : props.SubmittalStatus === 'WARN'
                ? classes.avatar_warn
                : classes.avatar_late
            }
          >
            {props.SubmittalStatus === 'ON-TIME' ? (
              <CheckIcon />
            ) : props.SubmittalStatus === 'WARN' ? (
              <FlagIcon />
            ) : (
              <PriorityHighIcon />
            )}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Fiberglass Reinforced Plastic Doors And Frames - Sample Warranty"
        subheader="081613 / 1.6-B ACTION SUBMITTALS"
      />
      <CardContent>
        <Grid container spacing={3}>
          <Grid item lg={6}>
            <div>
              <Typography variant="body1" component="p">
                Additional testing and inspecting, at Contractors expense, will
                be performed to determine compliance of\\nreplaced or additional
                work with specified requirements.
              </Typography>
            </div>
          </Grid>
          <Grid item lg={3}>
            <div>
              <div style={{ display: 'flex' }}>
                <Typography className={classes.title} color="textPrimary">
                  <strong>Planning:&nbsp;&nbsp;</strong>
                </Typography>
                <Typography variant="body1" component="p">
                  ROJ Planned
                </Typography>
              </div>
              <div style={{ display: 'flex' }}>
                <Typography className={classes.title} color="textPrimary">
                  <strong>Status:&nbsp;&nbsp;</strong>
                </Typography>
                <Typography variant="body1" component="p">
                  Pending Approval
                </Typography>
              </div>
              <div style={{ display: 'flex' }}>
                <Typography className={classes.title} color="textPrimary">
                  <strong>Ball-in-court:&nbsp;&nbsp;</strong>
                </Typography>
                <Typography variant="body1" component="p">
                  Architect
                </Typography>
              </div>
              <div style={{ display: 'flex' }}>
                <Typography className={classes.title} color="textPrimary">
                  <strong>Due Date:&nbsp;&nbsp;</strong>
                </Typography>
                <Typography variant="body1" component="p">
                  {new Date().toDateString()}
                </Typography>
              </div>
              <div style={{ display: 'flex' }}>
                <Typography className={classes.title} color="textPrimary">
                  <strong>Variance:&nbsp;&nbsp;</strong>
                </Typography>
                <Typography variant="body1" component="p">
                  3
                </Typography>
              </div>
              <div style={{ display: 'flex' }}>
                <Typography className={classes.title} color="textPrimary">
                  <strong>DPR Responsible:&nbsp;&nbsp;</strong>
                </Typography>
                <Typography variant="body1" component="p">
                  Srujal Kachhela
                </Typography>
              </div>
            </div>
          </Grid>
          <Grid item lg={3}>
            <div>
              <div style={{ display: 'flex' }}>
                <Typography className={classes.title} color="textPrimary">
                  <strong>Package:&nbsp;&nbsp;</strong>
                </Typography>
                <Typography variant="body1" component="p">
                  Level-1
                </Typography>
              </div>
              <div style={{ display: 'flex' }}>
                <Typography className={classes.title} color="textPrimary">
                  <strong>CMiC Number:&nbsp;&nbsp;</strong>
                </Typography>
                <Typography variant="body1" component="p">
                  PIS-00001
                </Typography>
              </div>
              <div style={{ display: 'flex' }}>
                <Typography className={classes.title} color="textPrimary">
                  <strong>Architect:&nbsp;&nbsp;</strong>
                </Typography>
                <Typography variant="body1" component="p">
                  Hammertech
                </Typography>
              </div>
              <div style={{ display: 'flex' }}>
                <Typography className={classes.title} color="textPrimary">
                  <strong>Architect Contact:&nbsp;&nbsp;</strong>
                </Typography>
                <Typography variant="body1" component="p">
                  John Weiss
                </Typography>
              </div>
              <div style={{ display: 'flex' }}>
                <Typography className={classes.title} color="textPrimary">
                  <strong>Sub-Contactor:&nbsp;&nbsp;</strong>
                </Typography>
                <Typography variant="body1" component="p">
                  Liam Steels
                </Typography>
              </div>
              <div style={{ display: 'flex' }}>
                <Typography className={classes.title} color="textPrimary">
                  <strong>Sub-Contactor Contact:&nbsp;&nbsp;</strong>
                </Typography>
                <Typography variant="body1" component="p">
                  David Muller
                </Typography>
              </div>
            </div>
          </Grid>
        </Grid>
        {/* <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          
        </Typography> */}

        <div style={{ marginTop: '15px' }}>
          <Chip
            label="Missing Details"
            variant="outlined"
            style={{ marginRight: '5px', marginTop: '5px' }}
          />
          <Chip
            label="Follow-up"
            variant="outlined"
            style={{ marginRight: '5px', marginTop: '5px' }}
          />
          <Chip
            label="Not Used"
            variant="outlined"
            style={{ marginRight: '5px', marginTop: '5px' }}
          />
          <Chip
            label="Covid-19 Impact"
            variant="outlined"
            style={{ marginRight: '5px', marginTop: '5px' }}
          />
        </div>
        <div style={{ marginTop: '15px' }}>
          <Alert
            iconMapping={{
              warning: <FlashOnOutlinedIcon fontSize="inherit" />,
            }}
            severity="warning"
            variant="outlined"
          >
            <strong>Recent Comment: </strong> Notified John to send the samples
            before monday.&nbsp;&nbsp;&nbsp;&nbsp;
            <i>-Srujal Kachhela (10 min ago)</i>
          </Alert>
        </div>
      </CardContent>
      <CardActions>
        <IconButton aria-label="comment">
          <CommentIcon />
        </IconButton>
        <IconButton aria-label="edit">
          <EditIcon />
        </IconButton>
        <IconButton aria-label="delete">
          <DeleteIcon />
        </IconButton>
        <div style={{ marginLeft: 'auto' }}>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </div>

        {/* <Button size="small">Learn More</Button> */}
      </CardActions>
      {/* <CardMedia
        className={classes.cover}
        image="https://www.pinclipart.com/picdir/big/281-2816758_timer-time-count-watch-comments-clipart.png"
        title="Live from space album cover"
      /> */}
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          {/* <Typography variant="h5" component="h2">
            Fiberglass Reinforced Plastic Doors And Frames
          </Typography> */}
          <SubmittalViewDetails />
        </CardContent>
      </Collapse>
    </div>
  )
}
