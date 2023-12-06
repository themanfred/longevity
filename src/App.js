import logo from './logo.svg';
import Main from './pages/main';
import './App.css';
import "./pages/main.scss";
import { useEffect, useState } from 'react';

import GPT from "./assets/ss.png";

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import { colors } from '@mui/material';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <h1>LONGEVITY NEWS</h1>
        <h3>Longevity news on a slide </h3>
      </div>
      <div className="gallery-container">
        <Main />
      </div>
      <div className="About ">
        <h2>About Longevity News</h2>
        <div className="lostres">
        <div className="glassmorph">
        <h2>Welcome</h2>
        Welcome to Longevity Weekly, your dedicated source for the latest news and developments in the world of longevity, 
        with a special focus on women's health and aging. Every week, our website features a dynamic slide presentation 
        that encapsulates the most recent and significant advancements in longevity research, anti-aging strategies, 
        and health tips tailored for women.
        </div>
        <div className="glassmorph">
        <h2>Commitment</h2>
        Our commitment is to bring you evidence-based updates and insightful analyses from leading experts in the field. 
        We delve into a wide array of topics, from groundbreaking medical research and innovative lifestyle approaches to 
        wellness practices and nutritional advice, all aimed at enhancing women's health and well-being as they age.
        </div>
        <div className="glassmorph">
        <h2>Community</h2>
        Longevity Weekly is more than just a news source; it's a community dedicated to empowering women with knowledge 
        and resources to lead a vibrant, healthy life at any age. Join us every week to stay informed, inspired, and in 
        tune with the latest in longevity, exclusively curated for women who seek to age gracefully and healthily.
        </div>
        </div>
      </div>
      <div className='longevity-bot '>
      <div className="glassmorph">
        <h2>Longevity Bot</h2>
        <p>Longevity Bot is a chatbot that provides personalized longevity recommendations based on your health profile. 
          It is a free service that is available to all Longevity Weekly subscribers. To access Longevity Bot, please 
          subscribe to our newsletter below.</p>
          </div>
        <img src={GPT} alt="GPT-3" height="600px" width="800px" />
        
      </div>
      


      <div className="Contact glassmorph">
        <h2>Join our community</h2>
        <p>Sign up for our newsletter to receive weekly updates on the latest longevity news and developments.</p>
        <form className="form"  autoComplete="off">
        <Stack spacing={2} direction="row">
        <TextField id="outlined-basic" label="Email" variant="outlined" autoComplete="off"
        sx={{
          backgroundColor: '', // Theme-based background color
          
          '& label.Mui-focused': {
              color: '#50b9c1',
          },
          '& label': {
              color: '#50b9c1',
          },
          // input text color
          '& .MuiInputBase-input': {
              color: '#e9faff',
          },
          '& .MuiInput-underline:after': {
              borderBottomColor: '#2d7b81',
          },
          '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#256266',
              },
              '&:hover fieldset': {
                borderColor: '#2d7b81',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#2d7b81',
              },
          },
          typography: {
              fontSize: '0.875rem',
          },
          margin: 'normal',
          width: '100%', // Responsive full width
          '@media (min-width:600px)': {
              width: '25ch', // Specific width at larger breakpoints
          }
        }}
        />
        
        <Button variant="contained"  
        sx={{
        backgroundColor: '#256266', // Theme-based color
        color: 'white',
        '&:hover': {
        backgroundColor: '#2d7b81',
        },
        fontSize: '1rem',
        fontWeight: 'bold',
        padding: '10px 20px',
        margin: '5px',
        border: '1px solid transparent',
        borderRadius: '4px',
        boxShadow: '0px 3px 5px rgba(0,0,0,0.2)',
        '@media (min-width:600px)': {
            fontSize: '1.2rem',
        }
      }}
        >Subscribe</Button>
        </Stack>

        </form>
      </div>
      <p className="footer">Longevity Weekly © 2023</p>

    </div>
  );
}

export default App;
