import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Box
} from '@mui/material';

const ShippingMethodStep = ({ 
  shippingMethods, 
  selectedShipping, 
  onShippingMethodChange 
}) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Shipping Method
        </Typography>
        <FormControl component="fieldset" fullWidth>
          <RadioGroup
            value={selectedShipping}
            onChange={(e) => onShippingMethodChange(e.target.value)}
          >
            {shippingMethods.map((method) => (
              <Card 
                key={method.id} 
                variant="outlined" 
                sx={{ 
                  mb: 2,
                  border: selectedShipping === method.id ? '2px solid' : '1px solid',
                  borderColor: selectedShipping === method.id ? 'primary.main' : 'grey.300'
                }}
              >
                <CardContent sx={{ py: 2 }}>
                  <FormControlLabel
                    value={method.id}
                    control={<Radio />}
                    label={
                      <Box sx={{ ml: 1 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                          <Box>
                            <Typography variant="subtitle1" fontWeight="bold">
                              {method.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {method.description}
                            </Typography>
                            <Typography variant="body2" color="primary" sx={{ mt: 0.5 }}>
                              {method.delivery}
                            </Typography>
                          </Box>
                          <Typography variant="h6" color="primary">
                            ₹{method.price}
                          </Typography>
                        </Box>
                      </Box>
                    }
                    sx={{ width: '100%', m: 0 }}
                  />
                </CardContent>
              </Card>
            ))}
          </RadioGroup>
        </FormControl>
      </CardContent>
    </Card>
  );
};

export default ShippingMethodStep;