
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function IngredientForm(props) {
    return (
        <>
        <Typography variant="h6" gutterBottom>
        Ingredients
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="recipeName"
            name="recipeName"
            label="Recipe Name"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="coverUrl"
            name="coverUrl"
            label="Cover URL (to do - upload component)"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="cuisine"
            name="cuisine"
            label="Cuisine"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="flavor"
            name="flavor"
            label="Flavour (to do - multi)"
            fullWidth
            variant="standard"
          />
        </Grid>
      </Grid>
        </>
    )
}