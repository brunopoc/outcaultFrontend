import { useSelector } from 'react-redux';
import Head from 'next/head';
import { ApplicationState } from '@store/index';

import { Box, Button, FormControl, FormLabel, TextField } from '@mui/material';
import { HeaderComponent, DefaultLoadingComponent } from '../components';

export default function Home(): JSX.Element {
    const isLoading = useSelector(
        (state: ApplicationState) => state.system.loading,
    );

    return (
        <>
            <Head>
                <title>WebComics</title>
            </Head>

            <HeaderComponent />

            {isLoading ? (
                <DefaultLoadingComponent />
            ) : (
                <Box
                    sx={{
                        display: 'flex',
                        width: '100%',
                        alignItems: 'center',
                        justifyContent: 'center',
                        bgcolor: 'background.default',
                        color: 'text.primary',
                        borderRadius: 1,
                        p: 3,
                        minHeight: '56px',
                    }}
                >
                    <FormControl>
                        <FormLabel id="demo-theme-toggle">
                            Digite seu email para continuar
                        </FormLabel>
                        <TextField
                            name="email-box"
                            type="text"
                            id="email-box"
                            variant="outlined"
                            label="Email"
                            sx={{ margin: '1rem 0' }}
                        />

                        <Button variant="contained">Participe Agora</Button>
                    </FormControl>
                </Box>
            )}
        </>
    );
}
