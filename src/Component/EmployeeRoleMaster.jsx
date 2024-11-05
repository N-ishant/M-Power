import React, { useEffect, useState } from 'react';
import SideBar from '../Component/SideBar'
import { Box, Card, Grid, Typography } from '@mui/material'
import TableContainer from '../Component/TableContainer';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { useNavigate } from 'react-router-dom';
import SkillMasterList from '../Component/SkillMasterList';
import EmployeeRoleMasterList from './EmployeeRoleMasterList';

function EmployeeRoleMaster() {

  const navigate = useNavigate();
  useEffect(() => {
    const data = sessionStorage.getItem('employeeName');
    if (!data) {
      navigate('/');
    } 
  }, [navigate]);



  const [open, setOpen] = useState(false);
  const handleClickOpen = () => { 
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  
    handleClose();
  };

  function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }

  return (
<Box sx={{display:'flex'}} className="main-container">
    <SideBar />
    <Box component="main" className="main-content" sx={{ flexGrow: 1,}}>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={9}>
        <Typography className='head-title' component="h1" variant="h6" align="left">
          Employee Role List
        </Typography>
        </Grid>
        <Grid item xs={3} textAlign={'right'}>
            <div role="presentation" onClick={handleClick}>
            <Breadcrumbs className='breadcrumbs-css' aria-label="breadcrumb" textAlign={'right'} sx={{ mt: 1 }}>
            <Link underline="hover" color="inherit" href="/">
            Employee Management
            </Link>
            <Typography color="text.primary">Employee Role</Typography>
          </Breadcrumbs>
        </div>
        </Grid>
      </Grid>
    </Box>

    <Grid container spacing={2} sx={{ mt:0 }}>
    <Grid item xs={12} className='pdt-0'>
      <EmployeeRoleMasterList/>
      
      </Grid>
    </Grid>    
    </Box>
  </Box>
  )
}

export default EmployeeRoleMaster