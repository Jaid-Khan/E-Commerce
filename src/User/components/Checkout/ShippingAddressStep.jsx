import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Grid,
  TextField
} from '@mui/material';

const ShippingAddressStep = ({ shippingInfo, onShippingInfoChange }) => {
  const handleInputChange = (field) => (event) => {
    onShippingInfoChange({
      ...shippingInfo,
      [field]: event.target.value
    });
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Shipping Address
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              label="First Name"
              fullWidth
              value={shippingInfo.firstName}
              onChange={handleInputChange('firstName')}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              label="Last Name"
              fullWidth
              value={shippingInfo.lastName}
              onChange={handleInputChange('lastName')}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              label="Address"
              fullWidth
              multiline
              rows={2}
              value={shippingInfo.address}
              onChange={handleInputChange('address')}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              label="City"
              fullWidth
              value={shippingInfo.city}
              onChange={handleInputChange('city')}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              label="State"
              fullWidth
              value={shippingInfo.state}
              onChange={handleInputChange('state')}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              label="PIN Code"
              fullWidth
              value={shippingInfo.pinCode}
              onChange={handleInputChange('pinCode')}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              label="Phone Number"
              fullWidth
              value={shippingInfo.phone}
              onChange={handleInputChange('phone')}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ShippingAddressStep;