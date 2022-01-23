import React from "react";
import ReactDOM from "react-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Grid, Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

const validationSchema = yup.object({
  first: yup.string("Enter your first name").required("First name required"),
  last: yup.string("Enter your last name").required("Last name required"),
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required")
});

const label = { inputProps: { "aria-label": "Switch demo" } };

const WithMaterialUI = () => {
  const formik = useFormik({
    initialValues: {
      first: "",
      last: "",
      email: "foobar@example.com",
      password: "foobar"
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    }
  });

  const [month, setMonth] = React.useState("");
  const [day, setDay] = React.useState("");
  const [year, setYear] = React.useState("");

  const handleChange = (event) => {
    setMonth(event.target.value);
    setDay(event.target.value);
    setYear(event.target.value);
  };

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography>User Information</Typography>
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              variant="outlined"
              id="first"
              name="first"
              label="First"
              value={formik.values.first}
              onChange={formik.handleChange}
              error={formik.touched.first && Boolean(formik.errors.first)}
              helperText={formik.touched.first && formik.errors.first}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              variant="outlined"
              id="last"
              name="last"
              label="Last"
              value={formik.values.last}
              onChange={formik.handleChange}
              error={formik.touched.last && Boolean(formik.errors.last)}
              helperText={formik.touched.last && formik.errors.last}
            />
          </Grid>
          <Grid item xs={4}>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Birth Month
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={month}
                  label="Month"
                  onChange={handleChange}
                >
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                  <MenuItem value={6}>6</MenuItem>
                  <MenuItem value={7}>7</MenuItem>
                  <MenuItem value={8}>8</MenuItem>
                  <MenuItem value={9}>9</MenuItem>
                  <MenuItem value={10}>10</MenuItem>
                  <MenuItem value={11}>11</MenuItem>
                  <MenuItem value={12}>12</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Birth Day</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={day}
                  label="Day"
                  onChange={handleChange}
                >
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                  <MenuItem value={6}>6</MenuItem>
                  <MenuItem value={7}>7</MenuItem>
                  <MenuItem value={8}>8</MenuItem>
                  <MenuItem value={9}>9</MenuItem>
                  <MenuItem value={10}>10</MenuItem>
                  <MenuItem value={11}>11</MenuItem>
                  <MenuItem value={12}>12</MenuItem>
                  <MenuItem value={13}>13</MenuItem>
                  <MenuItem value={14}>14</MenuItem>
                  <MenuItem value={15}>15</MenuItem>
                  <MenuItem value={16}>16</MenuItem>
                  <MenuItem value={17}>17</MenuItem>
                  <MenuItem value={18}>18</MenuItem>
                  <MenuItem value={19}>19</MenuItem>
                  <MenuItem value={20}>20</MenuItem>
                  <MenuItem value={21}>21</MenuItem>
                  <MenuItem value={22}>22</MenuItem>
                  <MenuItem value={23}>23</MenuItem>
                  <MenuItem value={24}>24</MenuItem>
                  <MenuItem value={25}>25</MenuItem>
                  <MenuItem value={26}>26</MenuItem>
                  <MenuItem value={27}>27</MenuItem>
                  <MenuItem value={28}>28</MenuItem>
                  <MenuItem value={29}>29</MenuItem>
                  <MenuItem value={30}>30</MenuItem>
                  <MenuItem value={31}>31</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Birth Year
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={year}
                  label="Year"
                  onChange={handleChange}
                >
                  <MenuItem value={1990}>1990</MenuItem>
                  <MenuItem value={1991}>1991</MenuItem>
                  <MenuItem value={1992}>1992</MenuItem>
                  <MenuItem value={1993}>1993</MenuItem>
                  <MenuItem value={1994}>1994</MenuItem>
                  <MenuItem value={1995}>1995</MenuItem>
                  <MenuItem value={1996}>1996</MenuItem>
                  <MenuItem value={1997}>1997</MenuItem>
                  <MenuItem value={1998}>1998</MenuItem>
                  <MenuItem value={1999}>1999</MenuItem>
                  <MenuItem value={2000}>2000</MenuItem>
                  <MenuItem value={2001}>2001</MenuItem>
                  <MenuItem value={2002}>2002</MenuItem>
                  <MenuItem value={2003}>2003</MenuItem>
                  <MenuItem value={2004}>2004</MenuItem>
                  <MenuItem value={2005}>2005</MenuItem>
                  <MenuItem value={2006}>2006</MenuItem>
                  <MenuItem value={2007}>2007</MenuItem>
                  <MenuItem value={2008}>2008</MenuItem>
                  <MenuItem value={2009}>2009</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="email"
              name="email"
              label="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              variant="filled"
              id="password"
              name="password"
              label="Password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
          </Grid>

          <Grid item xs={12}>
            <FormGroup>
              <FormControlLabel
                control={<Switch />}
                label="Will you flip the switch"
              />
            </FormGroup>
          </Grid>

          <Grid item xs={12}>
            <Button color="primary" variant="contained" fullWidth type="submit">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

ReactDOM.render(<WithMaterialUI />, document.getElementById("root"));
