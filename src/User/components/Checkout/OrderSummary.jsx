import React from 'react';
import {
  Paper,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  Box,
  Divider,
  IconButton,
  Stack
} from '@mui/material';
import {
  Add,
  Remove,
  Delete,
  LocalShipping,
  Security,
  Lock
} from '@mui/icons-material';

const OrderSummary = ({ 
  cartItems = [], 
  subtotal = 0, 
  shippingCost = 0, 
  tax = 0, 
  total = 0, 
  onUpdateQuantity, 
  onRemoveItem 
}) => {
  
  // Calculate values if not provided (for backward compatibility)
  const calculatedSubtotal = subtotal || cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const calculatedTax = tax || calculatedSubtotal * 0.18; // 18% GST
  const calculatedTotal = total || calculatedSubtotal + shippingCost + calculatedTax;

  return (
    <Paper elevation={1} sx={{ p: 3, position: 'sticky', top: 24 }}>
      <Typography variant="h6" gutterBottom>
        Order Summary
      </Typography>

      {/* Cart Items */}
      <List dense sx={{ mb: 2 }}>
        {cartItems && cartItems.length > 0 ? (
          cartItems.map((item) => (
            <ListItem key={item.id} divider>
              <ListItemAvatar>
                <Avatar 
                  src={item.image} 
                  variant="rounded" 
                  sx={{ width: 56, height: 56, mr: 2 }} 
                  alt={item.name}
                />
              </ListItemAvatar>
              <Box sx={{ flex: 1 }}>
                {/* Primary content */}
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
                  <Typography variant="body2" sx={{ flex: 1, mr: 1 }}>
                    {item.name}
                  </Typography>
                  <Typography variant="body2" fontWeight="bold">
                    ₹{(item.price * item.quantity).toFixed(2)}
                  </Typography>
                </Box>
                
                {/* Secondary content */}
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Typography variant="caption" color="text.secondary">
                    {item.color} • {item.size}
                  </Typography>
                  <Stack direction="row" alignItems="center" spacing={0.5}>
                    <IconButton 
                      size="small" 
                      onClick={() => onUpdateQuantity && onUpdateQuantity(item.id, Math.max(0, item.quantity - 1))}
                      disabled={item.quantity <= 1}
                    >
                      <Remove fontSize="small" />
                    </IconButton>
                    <Typography variant="body2" sx={{ minWidth: 20, textAlign: 'center' }}>
                      {item.quantity}
                    </Typography>
                    <IconButton 
                      size="small" 
                      onClick={() => onUpdateQuantity && onUpdateQuantity(item.id, item.quantity + 1)}
                    >
                      <Add fontSize="small" />
                    </IconButton>
                    <IconButton 
                      size="small" 
                      color="error"
                      onClick={() => onRemoveItem && onRemoveItem(item.id)}
                      sx={{ ml: 1 }}
                    >
                      <Delete fontSize="small" />
                    </IconButton>
                  </Stack>
                </Box>
              </Box>
            </ListItem>
          ))
        ) : (
          <ListItem>
            <Typography variant="body2" color="text.secondary" textAlign="center" sx={{ width: '100%' }}>
              No items in cart
            </Typography>
          </ListItem>
        )}
      </List>

      <Divider sx={{ my: 2 }} />

      {/* Order Totals */}
      <Box sx={{ '& > *': { mb: 1 } }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="body2">Subtotal</Typography>
          <Typography variant="body2">₹{calculatedSubtotal.toFixed(2)}</Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="body2">Shipping</Typography>
          <Typography variant="body2">
            {shippingCost === 0 ? 'Free' : `₹${shippingCost.toFixed(2)}`}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="body2">Tax (18% GST)</Typography>
          <Typography variant="body2">₹{calculatedTax.toFixed(2)}</Typography>
        </Box>
        <Divider sx={{ my: 1 }} />
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h6">Total</Typography>
          <Typography variant="h6" color="primary">
            ₹{calculatedTotal.toFixed(2)}
          </Typography>
        </Box>
      </Box>

      {/* Trust Badges */}
      <Box sx={{ display: 'flex', justifyContent: 'space-around', mt: 3, pt: 2, borderTop: 1, borderColor: 'grey.200' }}>
        <Box sx={{ textAlign: 'center' }}>
          <LocalShipping color="action" />
          <Typography variant="caption" display="block">
            Free Shipping
          </Typography>
        </Box>
        <Box sx={{ textAlign: 'center' }}>
          <Security color="action" />
          <Typography variant="caption" display="block">
            Secure Payment
          </Typography>
        </Box>
        <Box sx={{ textAlign: 'center' }}>
          <Lock color="action" />
          <Typography variant="caption" display="block">
            SSL Encrypted
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
};

export default OrderSummary;