
paypal.Buttons({
    createOrder: function(data, actions) {
        return actions.order.create({
            purchase_units: [{
                amount: {
                    value: '10.00' // Change this value to the desired donation amount
                }
            }]
        });
    },
    onApprove: function(data, actions) {
        return actions.order.capture().then(function(details) {
            alert('Transaction completed by ' + details.payer.name.given_name + '. Thank you for your donation!');
            window.location.href = 'index.html'; // Redirect to home page
        });
    },
    onError: function(err) {
        alert('An error occurred during the transaction. Please try again later.');
        window.location.href = 'index.html'; // Redirect to home page
    }
}).render('#paypal-button-container');
