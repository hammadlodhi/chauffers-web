import React from 'react';
import {
  Grid,
  CardContent,
  Typography,
  Card,
  CardActionArea,
} from '@mui/material';
import Data from './Data.json';

const Galley = () => {
  return (
    <div className='gallery layout-width' id='gallery'>
      <h1 className='gallery__heading mg-t-15'>OUR GALLERY</h1>
      <hr />
      <div className='gallery__body mg-t-10'>
        <Grid container spacing={5}>
          {Data.map((result, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <Card
                sx={{ maxWidth: 345 }}
                style={{
                  padding: '10px',
                  marginBottom: '30px',
                  backgroundColor: 'black',
                  border: '1px solid #dac06c',
                }}
              >
                <CardActionArea>
                  <img className='gallery__img' height='184' src={result.img} />
                  <CardContent style={{ textAlign: 'left' }}>
                    <Typography
                      gutterBottom
                      variant='h6'
                      component='div'
                      style={{
                        color: 'white',
                      }}
                    >
                      {result.title}
                    </Typography>
                    <Typography
                      className='gallery__description'
                      gutterBottom
                      variant='body2'
                      color='text.secondary'
                      style={{ color: 'white' }}
                    >
                      {result.des}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default Galley;
