import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
    palette: {
        type: 'dark',
        grey: {
            800: '#000000', // overrides failed
            900: '#121212' // overrides success
        },
        background: {
            paper: '#000000'
        }
    },
});

export default theme;