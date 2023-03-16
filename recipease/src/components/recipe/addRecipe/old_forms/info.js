import * as React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';


export default function InfoForm(props) {
  const [state, setState] = React.useState({
    recipeName: "",
    coverUrl: "",
    cuisine: "",
    flavor: "",
  });

  const handleChange = (evt) => {

    const value = evt.target.value;

    setState({
      ...state,
      [evt.target.name]: value

    });

    props.onInputChange(state);
  }

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Information
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
            value={state.recipeName}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="coverUrl"
            name="coverUrl"
            label="Cover URL (to do - upload component)"
            fullWidth
            variant="standard"
            value={state.coverUrl}
            onChange={handleChange}
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
            value={state.cuisine}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="flavor"
            name="flavor"
            label="Flavour (to do - multi)"
            fullWidth
            variant="standard"
            value={state.flavor}
            onChange={handleChange}
          />
        </Grid>
      </Grid>
    </>
  )
}