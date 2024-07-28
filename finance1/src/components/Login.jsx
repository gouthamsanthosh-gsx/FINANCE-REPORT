import { Button, TextField, Typography } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../assets/Logo.png'
import axios from 'axios'
import Cookies from 'universal-cookie';

const Login = () => {
	const navigate = useNavigate();
	const cookies = new Cookies();
	const [inputs,setInputs] = useState({
		"username":"",
		"password":""
	});
	
	const inputHandler = (e)=>{
		setInputs({...inputs,[e.target.name]:e.target.value});
	};

	const loginUser = ()=>{
		axios.post("http://localhost:3000/api/signin",inputs).then(
			(res)=>{
				alert("Login success");
				cookies.set('session', res.data.token, { path: '/' });
				navigate("/dashboard");
			}
		).catch(
			(err)=>{
				alert(err.response.data);
			}
		);
	};

	useEffect(() => {
		const listener = event => {
		  if (event.code === "Enter" || event.code === "NumpadEnter") {
			event.preventDefault();
			loginUser();
		  }
		};
		document.addEventListener("keydown", listener);
		return () => {
		  document.removeEventListener("keydown", listener);
		};
	  }, []);
	return (
	<div >
		<img src={Logo} alt="SpendSmart Logo" style={{ height:160,width:265, marginLeft: 10,borderRadius:100 }}></img>
		<br /><br />

		<Typography variant='h3'style={{ padding:'0%', color: 'black', textAlign: 'center',fontSize:'250%',fontWeight:'bold',fontStyle: 'italic' }}>
			LOGIN
		</Typography>
		<br /><br />

		<TextField required onChange={inputHandler} name='username' variant='outlined' sx={{
			backgroundColor: 'white',
			borderRadius: 1,
			width: '40%',
			marginTop: 2}}
			label='Username'
			InputLabelProps={{
				sx: {
					color: 'lightgrey'
				}
			}}>
		</TextField>
		<br /><br /><br />

		<TextField required onChange={inputHandler} name='password' variant='outlined' type='password' sx={{
			backgroundColor: 'white',
			borderRadius: '10%',
			width: '40%',
			marginTop: 2}}
			label='Password'
			InputLabelProps={{
				sx: {
					color: 'lightgrey'
				}
			}}>
		</TextField>
		<br /><br /><br />

		<Button onClick={loginUser} type='submit' variant='contained' sx={{
			borderRadius: '20',
			width: '37%',
			backgroundColor: 'grey',
			color: 'white'}}>
			Login
		</Button>
		<br /><br />

		<Button variant='text' sx={{
			color: 'grey',
			fontSize:'10px'
		}}>
			<Link to={'/admin'} style={{textDecoration:"none",color: 'grey'}}> 
				Login as admin
			</Link> 
		</Button>		
	</div>
	)
}

export default Login
