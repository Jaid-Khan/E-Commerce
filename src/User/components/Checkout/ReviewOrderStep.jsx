import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar
} from '@mui/material';

const ReviewOrderStep = ({ 
  shippingInfo, 
  selectedShipping, 
  selectedPayment, 
  cartItems,
  shippingMethods,
  paymentMethods 
}) => {
  const selectedShippingMethod = shippingMethods.find(m => m.id === selectedShipping);
  const selectedPaymentMethod = paymentMethods.find(m => m.id === selectedPayment);

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Review Your Order
        </Typography>
        
        {/* Shipping Information Review */}
        <Box sx={{ mb: 3 }}>
          <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
            Shipping Address
          </Typography>
          <Typography component="div">
            {shippingInfo.firstName} {shippingInfo.lastName}<br />
            {shippingInfo.address}<br />
            {shippingInfo.city}, {shippingInfo.state} - {shippingInfo.pinCode}<br />
            {shippingInfo.phone}
          </Typography>
        </Box>

        {/* Shipping Method Review */}
        <Box sx={{ mb: 3 }}>
          <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
            Shipping Method
          </Typography>
          <Typography component="div">
            {selectedShippingMethod?.name} - ₹{selectedShippingMethod?.price}
          </Typography>
        </Box>

        {/* Payment Method Review */}
        <Box sx={{ mb: 3 }}>
          <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
            Payment Method
          </Typography>
          <Typography component="div">
            {selectedPaymentMethod?.name}
          </Typography>
        </Box>

        {/* Order Items Review */}
        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
          Order Items
        </Typography>
        <List>
          {cartItems.map((item) => (
            <ListItem key={item.id} divider>
              <ListItemAvatar>
                <Avatar src={item.image} variant="rounded" />
              </ListItemAvatar>
              <ListItemText
                primary={item.name}
                secondary={`${item.color} • ${item.size} • Qty: ${item.quantity}`}
              />
              <Typography variant="body1" fontWeight="bold">
                ₹{item.price * item.quantity}
              </Typography>
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default ReviewOrderStep;
