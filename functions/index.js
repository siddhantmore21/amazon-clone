const functions = require("firebase-functions");

const express = require('express')
const cors = require('cors');


const stripe = require('stripe')
('sk_test_51IVygFFtnm0gWCNQwGqZL4wlCuLyXuK0sEdCD9l8pjFCvfVw2i6qsuopEYShD79Ab27VhF8MWaSbMabkHltBv0ll00dqWBbcgk')

// API

// App Config
const app = express();

// Middlewares
app.use(cors({origin: true}));
app.use(express.json());

// API routes
app.get('/', (req, res) => res.status(200).send('hello world'))

app.post('/payments/create', async (req, res) => {
    const total = req.query.total;

    console.log('payment request received and amount is ', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: 'INR',
    })

    console.log('payment intent',paymentIntent)
    res.status(201).send({
        clientSecret: paymentIntent.client_secret
    })

})


// Listen command
exports.api = functions.https.onRequest(app)

//example end point
//http://localhost:5001/clone-9a911/us-central1/api
