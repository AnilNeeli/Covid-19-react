import React,{useState}from "react"
import {Card,Typography,Grid, CardContent} from "@material-ui/core"
import {Select,MenuItem} from "@material-ui/core"
import CountUp from"react-countup"
import cx from "classnames"
import styles from "./Card.module.css"
const Cards=({data,chartdata})=>{
    const ChartData=chartdata;
    const states=Object.keys(data)
    const [state,setstate]=useState("Total");

    const st=data[state];
    const reqState=(e)=>{
        setstate(e.target.value);
        ChartData(data[e.target.value])
    }
        

    if(states.length===0){
        return <h1>Loading...</h1>
    }
  
    return (
        <>
    <div className={styles.container}>
        
            <Grid container spacing={3} justify="center">
                
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.confirmed)}>
                    <CardContent>
                      <Typography>Total confirmed</Typography>
    <Typography variant="h5"><CountUp start={0}
    end={st.confirmed}
    duration={2.5}
    seperator=","
    /></Typography>
    <Typography>last updated at {st.update}</Typography>
                 
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.active)}>
                    <CardContent>
                      <Typography>Active Cases</Typography>
                      <Typography variant="h5"><CountUp start={0}
    end={st.active}
    duration={1.5}
    seperator=","
    /></Typography>
                      <Typography>last updated at {st.update}</Typography>
                     
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.dead)}>
                    <CardContent>
                      <Typography>Total Deaths</Typography>
                      <Typography variant="h5"><CountUp start={0}
    end={st.Dead}
    duration={2.5}
    seperator=","
    /></Typography>
                     
                      <Typography>last updated at {st.update}</Typography>
                    </CardContent>
                </Grid>
            </Grid>
            <Grid container spacing={3} justify="center">
                <Grid  xs={12} md={3}>

<Select onChange={reqState} style={{padding:'50px',display:'flex',justifyContent:'center'}}labelId="label" id="select"value={state}>
  {states.map((state,index)=>{
      return <MenuItem key={index} value={state}>{state}</MenuItem>
  })}
</Select>

</Grid>
</Grid>
        </div>
        </>
    )
}

export default Cards;