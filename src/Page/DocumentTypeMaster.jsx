import React, { useState } from 'react';
import SideBar from '../Component/SideBar'
import { Box, Card, Grid, Typography } from '@mui/material'
import TableContainer from '../Component/TableContainer';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import DesignationMasterList from '../Component/DesignationMasterList';
import DocumentTypeForm from '../Component/DocumentTypeForm';
import DocumentMasterList from '../Component/DocumentMasterList';

function DocumentTypeMaster() {
    
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
        <Grid item xs={8}>
        <Typography className='head-title' component="h1" variant="h6" align="left">
          Document Type
        </Typography>
        </Grid>
        <Grid item xs={4} textAlign={'right'}>
            <div role="presentation" onClick={handleClick}>
            <Breadcrumbs className='breadcrumbs-css' aria-label="breadcrumb" textAlign={'right'} sx={{ mt: 1 }}>
            <Link underline="hover" color="inherit" href="/">
            Employee Management
            </Link>
            <Typography color="text.primary">Document Type</Typography>
          </Breadcrumbs>
        </div>
        </Grid>
      </Grid>
    </Box>

    <Grid container spacing={2} sx={{ mt:0 }}>
    <Grid item xs={12} className='pdt-0'>
      
       <DocumentMasterList/>
      
      </Grid>
    </Grid>    
    </Box>
  </Box>
  )
}

export default DocumentTypeMaster
