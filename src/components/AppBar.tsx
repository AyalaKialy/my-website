import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Avatar } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    activeButton: {
        color: 'rgb(214, 77, 136)'
    }
});

export default function MyAppBar() {
    const classes = useStyles();
    const [activeButton, setActiveButton] = useState('1');

    const clickedButtonHandler = (e: any) => {
        const name = e.target.name;
        setActiveButton(name);
    };
    return (
        <AppBar position='fixed' sx={{ bgcolor: 'white' }}>
            <Container maxWidth='xl'>
                <Toolbar disableGutters>
                    <Box justifyContent='right' sx={{ padding: 1, flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Avatar className='Avatar' src='https://avatars.githubusercontent.com/u/95143373?v=4' sx={{ width: 65, height: 65, marginLeft: 8 }} />
                        <h4 style={{ color: 'black', fontFamily: 'Comic Sans MS', fontStyle: 'italic', marginRight: 450, marginTop: 20 }}>AYALA KIALY </h4>
                        <Button name='1'
                            className={activeButton == '1' ? `${classes.activeButton}` : ``}
                            onClick={clickedButtonHandler}
                            sx={{ fontWeight: 'bold', marginRight: 5, fontFamily: 'Arial', my: 2, color: 'black', display: 'block' }}
                            href='#home'
                        >
                            HOME</Button>
                        <Button name='2'
                            className={activeButton === '2' ? `${classes.activeButton}` : ''}
                            onClick={clickedButtonHandler}
                            sx={{ fontWeight: 'bold', marginRight: 5, fontFamily: 'Arial', my: 2, color: 'black', display: 'block' }}
                            href='#about'
                        >
                            ABOUT</Button>
                        <Button name='3'
                            className={activeButton === '3' ? `${classes.activeButton}` : ''}
                            onClick={clickedButtonHandler}
                            sx={{ fontWeight: 'bold', marginRight: 5, fontFamily: 'Arial', my: 2, color: 'black', display: 'block' }}
                            href='#projects'
                        >
                            PROJECTS</Button>
                        <Button name='4'
                            className={activeButton === '4' ? `${classes.activeButton}` : ''}
                            onClick={clickedButtonHandler}
                            sx={{ fontWeight: 'bold', marginRight: 7, fontFamily: 'Arial', my: 2, color: 'black', display: 'block' }}
                            href='#contact'
                        >
                            CONTACT</Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
