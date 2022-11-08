import '../styles/projects.style.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import { Button } from '@material-ui/core';
import waze from '../images/waze.png';
import jewelerme from '../images/jewelryShop.png';

const About = () => {
    return (
        <Box id='projects' sx={{ backgroundColor: 'white', flexGrow: 1 }}>
            <Grid sx={{ marginRight: 4 }} container spacing={3}>
                <Grid sx={{ marginTop: 8, marginBottom: 5 }} xs={12}>
                    <h1>PROJECTS</h1>
                </Grid>
                <Grid sx={{ textAlign: 'left', marginRight: 10 }} xs={6}>
                    <img className='computer' src={waze} />
                </Grid>
                <Grid sx={{ textAlign: 'center' }} xs={5}>
                    <h1>WAZE</h1>
                    <h3 className='description'>A generic system for creating points management systems
                        sales. The user can enter their current location
                        and look for the product he wants, the system will find it for him the 3 closest locations.
                    </h3>
                    <Button id='toRepo'
                        href='https://github.com/AyalaKialy/waze-project-client'>Client Repository</Button>
                    <Button id='toRepo'
                        href='https://github.com/AyalaKialy/waze-project-server'>Server Repository</Button>
                </Grid>
                <Grid sx={{ textAlign: 'left', marginRight: 10 }} xs={6}>
                    <img className='computer' src={jewelerme} />
                </Grid>
                <Grid sx={{ textAlign: 'center' }} xs={5}>
                    <h1>JEWELERME</h1>
                    <h3 className='description'>JEWELERME is a website for  silver jewelry store using node.js, html,css and java script.</h3>
                    <Button id='toRepo'
                        href='https://github.com/AyalaKialy/jewelry-store-in-Node.js-and-html'>Repository</Button>
                </Grid>
            </Grid >
        </Box >);
};
export default (About);       