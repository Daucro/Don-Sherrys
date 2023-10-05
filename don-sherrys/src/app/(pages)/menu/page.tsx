import TitlebarImageList from "@/app/components/menuimage";
import "../menu/menu.css";
import Container from '@mui/material/Container';
import { Stack, Typography } from "@mui/material";
import Box from '@mui/material/Box';
import * as React from 'react';
import Sheet from '@mui/joy/Sheet';
import { styled } from '@mui/joy/styles';



export default function Menu() {
  return (
    <main>
<Box>
      <Typography className='Center' variant='h1'>
        The Daily Eats
      </Typography>
      <Typography variant='body1' sx={{
        color:'black',
        margin:'150px',
        fontSize:'35px'
      }}>It is <b>important</b> to us to provide food that is delicious and meets your needs. In order to do so any dietary
      <b>restrictions</b> or <b>allergies</b> need to be disclosed at the time of booking your stay with us. This will give us the 
      most amount of time to plan ahead of time if any special requirements need to be met.
      </Typography>
</Box>
<div>
  <Typography className='Center' variant='h2'>Breakfast</Typography>
  </div>
<Container sx={{
  display:'flex',
  justifyContent:'center',
  gap:'10px',
  flexBasis:'100%',
  padding: '10px',
}}>
  <Box>
    <Typography className='foodBody'>French Toast,Waffles,Pancakes</Typography>
    <Typography className='foodBody'>Bacon,Egg,Biscuits</Typography>
    <Typography className='foodBody'>Breakfast Sandwhiches</Typography>
  </Box>
  <Box>
    <Typography className='foodBody'>Breakfast Tacos</Typography>
    <Typography className='foodBody'>Biscuits and Gravy</Typography>
    <Typography className='foodBody'>Eggs Benedict</Typography>
  </Box>
  </Container>
  <p>*Substitutions can be made for ex: Toast instead of biscuits. Sausage instead of Bacon.*</p>
  <div>
  <Typography className='Center' variant='h2'>Dinner</Typography>
  </div>
<Container sx={{
  display:'flex',
  justifyContent:'center',
  gap:'10px',
  flexBasis:'100%',
  padding:'10px',
}}>
  <Box>
    <Typography className='foodBody'>Spaghetti & Meatballs</Typography>
    <Typography className='foodBody'>Country Fried Steak</Typography>
    <Typography className='foodBody'>Fried Chicken</Typography>
    <Typography className='foodBody'>Enchiladas </Typography>
  </Box>
  <Box>
    <Typography className='foodBody'>Lasagna w/ salad</Typography>
    <Typography className='foodBody'>Steak (Cooked to choice)    </Typography>
    <Typography className='foodBody'>Stuffed Jumbo Shells</Typography>
    <Typography className='foodBody'>Parmesan Chicken </Typography>
  </Box>
  </Container>
  <p>*Dinner is served with side dishes.Sides include but are not limited to fries, mashed potatoes, baked potatoes, green beans, asparagus,
    corn, rolls, rice, and side salad*
  </p>
  <Container sx={{
    padding:'15px',
  }}>
      <TitlebarImageList />
            </Container>
    </main>
  );
}
