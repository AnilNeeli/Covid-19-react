import React from 'react';
import Chart from 'chart.js';
import {Grid} from "@material-ui/core"
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    
    form: {
      width: '100%',
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));
export default function Charts({crdata}) {
    const classes = useStyles();
    const data=[]
    data.push(crdata.active);
    data.push(crdata.Dead);
    data.push(crdata.confirmed);
    data.push(crdata.recovered);
  const bg=[
    'rgba(255, 99, 200, 0.2)',
    'rgba(54, 162, 235, 0.2)',
    'rgba(255, 206, 86, 0.2)',
    'rgba(75, 192, 192, 0.2)',
    'rgba(153, 102, 255, 0.2)',
    'rgba(255, 159, 64, 0.2)'
]
var ctx = 'myChart';
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels:["Active","Dead","Confirmed","Recovered"],
        datasets: [{
            label: 'Total Cases',
            data: data,
            backgroundColor:bg,
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
console.log(myChart)
  return (
      <>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
         
      <Typography component="h1" variant="h5">
            Stats for the selected state
            </Typography>
          <Grid container spacing={2}>
            
           
            <Grid item xs={12}>
            <canvas id="myChart" width="400" height="400"></canvas>
            </Grid>
           
            
          </Grid>
          </div>
          </Container>
          </>

  );
}
