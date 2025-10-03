import React from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton
} from '@mui/material';
import {
  ArrowBack,
  Security,
  Lock
} from '@mui/icons-material';

const CheckoutHeader = () => {
  return (
    <AppBar position="static" color="default" elevation={1}>
      <Toolbar>
        <IconButton component={Link} to="/" sx={{ mr: 2 }}>
          <ArrowBack />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          FashionStore
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Security color="action" />
          <Typography variant="body2" color="text.secondary">
            Secure Checkout
          </Typography>
          <Lock color="success" />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default CheckoutHeader;