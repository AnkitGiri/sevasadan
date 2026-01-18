function showPaytmForm() {
    clearForms();
    document.getElementById('payment-forms').innerHTML = '<form>Paytm Payment Form</form>';
}

function showRazorpayForm() {
    clearForms();
    document.getElementById('payment-forms').innerHTML = '<form>Razorpay Payment Form</form>';
}

function showPaypalForm() {
    clearForms();
    document.getElementById('payment-forms').innerHTML = '<form>Paypal Payment Form</form>';
}

function showStripeForm() {
    clearForms();
    document.getElementById('payment-forms').innerHTML = '<form>Stripe Payment Form</form>';
}

function showPhonePeForm() {
    clearForms();
    document.getElementById('payment-forms').innerHTML = '<form>PhonePe Payment Form</form>';
}

function clearForms() {
    document.getElementById('payment-forms').innerHTML = '';
}
