/* eslint-disable react/destructuring-assignment */
import React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import { Divider, StepIconProps } from '@material-ui/core'
import CheckOutlinedIcon from '@material-ui/icons/CheckOutlined'
import AutorenewOutlinedIcon from '@material-ui/icons/AutorenewOutlined'
import FlagOutlinedIcon from '@material-ui/icons/FlagOutlined'
import clsx from 'clsx'
import { green, yellow } from '@material-ui/core/colors'
// import Button from '@material-ui/core/Button'
// import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    backButton: {
      marginRight: theme.spacing(1),
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  })
)

function getSteps() {
  return [
    'Submitted by Sub-Contractor',
    'Sent For Review',
    'Returned from Review',
    'Forwarded to Contractor',
    'Fabrication',
    'Delivery',
    'On Site',
    'Installation Start',
  ]
}

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  active: {
    // backgroundImage:
    //   'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    backgroundColor: yellow[800],
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  },
  completed: {
    // backgroundImage:
    //   'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    backgroundColor: green[800],
  },
})

function ColorlibStepIcon(props: StepIconProps) {
  const classes = useColorlibStepIconStyles()
  const { active, completed } = props

  const icons: { [index: string]: React.ReactElement } = {
    1: <CheckOutlinedIcon />,
    2: <AutorenewOutlinedIcon />,
    3: <FlagOutlinedIcon />,
    4: <FlagOutlinedIcon />,
    5: <FlagOutlinedIcon />,
    6: <FlagOutlinedIcon />,
    7: <FlagOutlinedIcon />,
    8: <FlagOutlinedIcon />,
  }

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  )
}

// function getStepContent(stepIndex: number) {
//   switch (stepIndex) {
//     case 0:
//       return 'Select campaign settings...'
//     case 1:
//       return 'What is an ad group anyways?'
//     case 2:
//       return 'This is the bit I really care about!'
//     default:
//       return 'Unknown stepIndex'
//   }
// }

export default function PlanView() {
  const classes = useStyles()
  //   const [activeStep, setActiveStep] = React.useState(0)
  const steps = getSteps()

  //   const handleNext = () => {
  //     setActiveStep((prevActiveStep) => prevActiveStep + 1)
  //   }

  //   const handleBack = () => {
  //     setActiveStep((prevActiveStep) => prevActiveStep - 1)
  //   }

  //   const handleReset = () => {
  //     setActiveStep(0)
  //   }

  return (
    <div className={classes.root}>
      <Stepper activeStep={1} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>
              <div>
                <div>{label}</div>
                <Divider orientation="horizontal" />
                <div>Plan Date: {new Date().toDateString()}</div>
                <Divider orientation="horizontal" />
                <div>Actual Date: {new Date().toDateString()}</div>
              </div>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
      {/* <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed
            </Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>
              {getStepContent(activeStep)}
            </Typography>
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div> */}
    </div>
  )
}
