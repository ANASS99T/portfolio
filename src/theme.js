import { createTheme } from '@mui/material/styles';

// Create a theme instance.


const getDesignTokens = (mode) => ({
    palette: {
        mode,
        ...(mode === 'dark' && {
            background: {
                default: '#181818',
                paper: '#181818',
            },
        }),
    },
});


export const defaultTheme = createTheme(getDesignTokens('dark'));


// export default myTheme;
export default getDesignTokens;


