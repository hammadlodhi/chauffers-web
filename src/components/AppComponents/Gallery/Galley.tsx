import React from "react";
import {
  Grid,
  CardContent,
  Typography,
  Card,
  CardActionArea,
  CardMedia,
} from "@mui/material";
import Data from "./Data.json";

const Galley = () => {
  return (
    <div className="services layout-width">
      <h1 className="services__heading mg-t-15">OUR GALLERY</h1>
      <hr />
      <div className="services__body mg-t-10">
        <Grid container spacing={5}>
          {Data.map((result, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <Card
                sx={{ maxWidth: 345 }}
                style={{ padding: "10px", marginBottom: "30px" }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={result.img}
                    style={{ borderRadius: "5px" }}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {result.title}
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="body2"
                      color="text.secondary"
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
