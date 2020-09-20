import React,{useState,useEffect} from "react"
import {Cards,Charts} from "./components"

const App=()=>{
    const [all,setdata]=useState({})
    const [states,setstates]=useState([])
     const[crdata,setcrdata]=useState({})
    const chartdata=(data)=>{
        setcrdata(data)
    }

    useEffect(()=>{
    const data=async()=>{
        const alldata={}
        const response= await (fetch("https://api.covid19india.org/data.json"))
        const result=await(response.json())
        const states=result.statewise;
        states.map((name)=>{
           alldata[name.state]={active:name.active,Dead:name.deaths,confirmed:name.confirmed,recovered:name.recovered,update:name.lastupdatedtime}
           return null
        })
         setdata(alldata)
         setstates(Object.keys(alldata))
         setcrdata(alldata['Total'])
        return null
    }
    data();
},[])
    return(
        <>
        <h1 style={{color:'green',display:'flex',justifyContent:'center'}}>INDIA COVID-19 TRACKER</h1>
        <div>
        <Cards data={all} states={states} chartdata={chartdata}/>
        <Charts crdata={crdata}/>
        </div>
        </>
    );
}

export default App;