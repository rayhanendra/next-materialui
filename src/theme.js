import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: '#0064D2',
    },
    secondary: {
      main: '#f50057',
    },
    error: {
      main: red.A400,
    },
    background: {
      paper: '#424242',
      default: '#303030',
    }
  },
  typography: {
    fontFamily: ['"Montserrat"', 'Open Sans'].join(',')
   }
});

export default theme;
