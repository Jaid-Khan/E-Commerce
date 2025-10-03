import React from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Stepper,
  Step,
  StepLabel,
  Button,
  Container,
  Grid
} from '@mui/material';
import {
  ArrowBack,
  Lock
} from '@mui/icons-material';

// Import data
import { 
  CHECKOUT_STEPS 
} from '../../../Data/CheckoutDataConstant';
import {
  shippingMethods,
  paymentMethods,
  initialCartItems,
  initialShippingInfo,
  initialCardDetails
} from '../../../Data/CheckoutData';

// Import components
import CheckoutHeader from './CheckoutHeader';
import ShippingAddressStep from './ShippingAddressStep';
import ShippingMethodStep from './ShippingMethodStep';
import PaymentMethodStep from './PaymentMethodStep';
import ReviewOrderStep from './ReviewOrderStep';
import OrderSummary from './OrderSummary';

const Checkout = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [cartItems, setCartItems] = React.useState(initialCartItems);
  const [selectedShipping, setSelectedShipping] = React.useState(shippingMethods[0].id);
  const [selectedPayment, setSelectedPayment] = React.useState(paymentMethods[0].id);
  const [isProcessing, setIsProcessing] = React.useState(false);
  const [cardDetails, setCardDetails] = React.useState(initialCardDetails);
  const [shippingInfo, setShippingInfo] = React.useState(initialShippingInfo);

  // Calculate totals
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shippingCost = shippingMethods.find(method => method.id === selectedShipping)?.price || 0;
  const tax = subtotal * 0.18;
  const total = subtotal + shippingCost + tax;

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (activeStep === CHECKOUT_STEPS.length - 1) {
      setIsProcessing(true);
      // Simulate payment processing
      setTimeout(() => {
        setIsProcessing(false);
        alert('Order placed successfully!');
      }, 2000);
    } else {
      handleNext();
    }
  };

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <ShippingAddressStep 
            shippingInfo={shippingInfo}
            onShippingInfoChange={setShippingInfo}
          />
        );
      case 1:
        return (
          <ShippingMethodStep 
            shippingMethods={shippingMethods}
            selectedShipping={selectedShipping}
            onShippingMethodChange={setSelectedShipping}
          />
        );
      case 2:
        return (
          <PaymentMethodStep 
            paymentMethods={paymentMethods}
            selectedPayment={selectedPayment}
            onPaymentMethodChange={setSelectedPayment}
            cardDetails={cardDetails}
            onCardDetailsChange={setCardDetails}
          />
        );
      case 3:
        return (
          <ReviewOrderStep 
            shippingInfo={shippingInfo}
            selectedShipping={selectedShipping}
            selectedPayment={selectedPayment}
            cartItems={cartItems}
            shippingMethods={shippingMethods}
            paymentMethods={paymentMethods}
          />
        );
      default:
        return <div>Unknown step</div>;
    }
  };

  return (
    <Box sx={{ flexGrow: 1, bgcolor: 'grey.50', minHeight: '100vh' }}>
      <CheckoutHeader />

      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Grid container spacing={4}>
          {/* Left Column - Checkout Steps */}
          <Grid item xs={12} md={8}>
            <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
              {CHECKOUT_STEPS.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>

            <form onSubmit={handleSubmit}>
              {renderStepContent(activeStep)}

              <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
                <Button
                  onClick={handleBack}
                  disabled={activeStep === 0}
                  startIcon={<ArrowBack />}
                >
                  Back
                </Button>
                <Button
                  type="submit"
                  variant="contained"
                  disabled={isProcessing}
                  endIcon={activeStep === CHECKOUT_STEPS.length - 1 ? <Lock /> : undefined}
                >
                  {isProcessing ? 'Processing...' : 
                   activeStep === CHECKOUT_STEPS.length - 1 ? `Pay ₹${total.toFixed(2)}` : 'Continue'}
                </Button>
              </Box>
            </form>
          </Grid>

          {/* Right Column - Order Summary */}
          <Grid item xs={12} md={4}>
            <OrderSummary 
              cartItems={cartItems}
              subtotal={subtotal}
              shippingCost={shippingCost}
              tax={tax}
              total={total}
              onUpdateQuantity={updateQuantity}
              onRemoveItem={removeItem}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Checkout;