import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Box,
  Grid,
  TextField,
  InputAdornment
} from '@mui/material';
import {
  CreditCard,
  Payment,
  AccountBalance
} from '@mui/icons-material';

const PaymentMethodStep = ({ 
  paymentMethods, 
  selectedPayment, 
  onPaymentMethodChange,
  cardDetails,
  onCardDetailsChange 
}) => {
  const handleCardDetailsChange = (field) => (event) => {
    onCardDetailsChange({
      ...cardDetails,
      [field]: event.target.value
    });
  };

  const getPaymentIcon = (iconName) => {
    switch (iconName) {
      case 'CreditCard':
        return <CreditCard sx={{ mr: 2 }} />;
      case 'Payment':
        return <Payment sx={{ mr: 2 }} />;
      case 'AccountBalance':
        return <AccountBalance sx={{ mr: 2 }} />;
      default:
        return <CreditCard sx={{ mr: 2 }} />;
    }
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Payment Method
        </Typography>
        <FormControl component="fieldset" fullWidth>
          <RadioGroup
            value={selectedPayment}
            onChange={(e) => onPaymentMethodChange(e.target.value)}
          >
            {paymentMethods.map((method) => (
              <Card 
                key={method.id} 
                variant="outlined" 
                sx={{ 
                  mb: 2,
                  border: selectedPayment === method.id ? '2px solid' : '1px solid',
                  borderColor: selectedPayment === method.id ? 'primary.main' : 'grey.300'
                }}
              >
                <CardContent sx={{ py: 2 }}>
                  <FormControlLabel
                    value={method.id}
                    control={<Radio />}
                    label={
                      <Box sx={{ display: 'flex', alignItems: 'center', ml: 1 }}>
                        {getPaymentIcon(method.icon)}
                        <Box>
                          <Typography variant="subtitle1" fontWeight="bold">
                            {method.name}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {method.description}
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

        {(selectedPayment === 'credit-card' || selectedPayment === 'debit-card') && (
          <Box sx={{ mt: 3, p: 2, border: 1, borderColor: 'grey.300', borderRadius: 1 }}>
            <Typography variant="h6" gutterBottom>
              Card Details
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  label="Card Number"
                  fullWidth
                  placeholder="1234 5678 9012 3456"
                  value={cardDetails.number}
                  onChange={handleCardDetailsChange('number')}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <CreditCard />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  label="Name on Card"
                  fullWidth
                  placeholder="John Doe"
                  value={cardDetails.name}
                  onChange={handleCardDetailsChange('name')}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  label="Expiry Date"
                  fullWidth
                  placeholder="MM/YY"
                  value={cardDetails.expiry}
                  onChange={handleCardDetailsChange('expiry')}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  label="CVV"
                  fullWidth
                  placeholder="123"
                  value={cardDetails.cvv}
                  onChange={handleCardDetailsChange('cvv')}
                />
              </Grid>
            </Grid>
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

export default PaymentMethodStep;