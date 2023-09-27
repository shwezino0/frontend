import React,{useEffect,useState} from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function User(){
    useEffect(()=>{
        fetchItem();
    });
    const [items,setItem]=useState([]);

    const fetchItem = async()=>{
        const data = await fetch('/tweets');
        const items = await data.json();
        setItem(items);
    }
    return (
        <div>
            <h3>Data from Node</h3>
        <section>
            {
                items.map(item=>(
                    <div>
                        <p>Name ::{item.name}</p>
                        <p>Message:: {item.msg}</p>
                        <p>UserName:: {item.username}</p>
                    </div>
                ))
            }
        </section>
       
<div style={{padding:"0px 0px 0px 600px"}}>
<table style={{border: "1px solid black"}}>
  <tr >
    <th style={{border: "1px solid black"}}>Contents</th>
    <th style={{border: "1px solid black"}}>Message</th>
    <th style={{border: "1px solid black"}}>Username</th>
  </tr>
  {items.map(item=>(
  <tr>
    <td style={{border: "1px solid black"}}>{item.name}</td>
    <td style={{border: "1px solid black"}}>{item.msg}</td>
    <td style={{border: "1px solid black"}}>{item.username}</td>
  </tr>
  ))}
</table>
</div>
</div>
    );
}
export default User;