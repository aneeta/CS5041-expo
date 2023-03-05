import * as React from 'react';
import { useState } from 'react';
import { Avatar, Card } from 'react-native-paper';
import InfoForm from './addRecipe/forms/info'
import IngredientForm from './addRecipe/forms/ingredient'
import MethodForm from './addRecipe/forms/method'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const steps = ['Info', 'Ingredients', 'Method'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <InfoForm />;
    case 1:
      return <IngredientForm />;
    case 2:
      return <MethodForm />;
    default:
      throw new Error('Unknown step');
  }
}


export default function AddRecipe(props) {

  const [activeStep, setActiveStep] = useState(0);

  // const [
  //     recipeName
  // ]

  let recipeData = {}

  const handleNext = (data) => {
    setActiveStep(activeStep + 1);
    console.log(data)

  };

  const handleBack = (data) => {
    setActiveStep(activeStep - 1);
    console.log(data)
  };

  return (
    <>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Add Recipe
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" align="center" gutterBottom >
                Recipe Added!
              </Typography>
              <Typography variant="subtitle1" align="center">
                Add New + View (todo)
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep)}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>
                )}

                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 3, ml: 1 }}
                >
                  {activeStep === steps.length - 1 ? 'Add Recipe' : 'Next'}
                </Button>
              </Box>
            </React.Fragment>
          )}
        </Paper>
      </Container>
    </>

  )

  // const onSubmit = (values) => {

  // }

  // return (
  //     <>
  //     <Typography variant="h6" gutterBottom>
  //         Info
  //     </Typography>
  //     <Grid container spacing={3}></Grid>
  //     <TextField
  //         required
  //         id="recipeName"
  //         name="recipeName"
  //         label="Recipe Name"
  //         fullWidth
  //         variant="standard"
  //     />
  //     </>
  //     // <div>
  //     //     <form onSubmit={handleSubmit(onSubmit)}>

  //     //     </form>
  //     // </div>
  // )
}
