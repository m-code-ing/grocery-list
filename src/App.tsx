import { Grid } from "@mui/material";
import Box from "@mui/material/Box/Box";
import TextField from "@mui/material/TextField/TextField";
import ButtonAppBar from "./components/ButtonAppBar";
import { rows } from "./components/TableSortSelect/data";
import TableSortSelect from "./components/TableSortSelect/TableSortSelect";

function App() {
  return (
    <div>
      <ButtonAppBar />
      <h1>Grocery List</h1>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={4}>
          <TextField
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            fullWidth
          />
        </Grid>
      </Grid>
      <Box sx={{ m: 10 }}>
        <TableSortSelect data={rows} />
      </Box>
    </div>
  );
}

export default App;
