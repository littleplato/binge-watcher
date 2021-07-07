import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    background: "primary"
  },
  button: {
    marginTop: theme.spacing(2),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));

function getSteps() {
  return ['Select preferences to binge watch', 'Receive personalised recommendations', 'Add recommendations to watchplan!'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return `Every binge watcher is unique, and thus we begin first by knowing more about you. We only ask three easy questions. Most importantly, you must know how much time you have to binge watch!`;
    case 1:
      return 'Once you have given us your preference, the app will construct an optimised plan for your binge-watching pleasure. No thinking required. ';
    case 2:
      return `When you receive our recommendations, you can save them to the watchplan, and generate a few others if you want other combinations of preferences. (We understand fickleness, and also split-personalities.)`;
    default:
      return 'Unknown step';
  }
}

export default function Intro() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} orientation="vertical" style={{ backgroundColor: "transparent" }}>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel><Typography variant="h6">{label}</Typography></StepLabel>
            <StepContent>
              <Typography variant="body1">{getStepContent(index)}</Typography>
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer} style={{ backgroundColor: "transparent" }}>
          <Typography>That's all in three simple steps. Get your binge watching plan!</Typography>
          <Button onClick={handleReset} className={classes.button} style={{textTransform: 'none'}}>
            Wait I didn't catch something, let me read that again
          </Button>
        </Paper>
      )}
    </div>
  );
}
