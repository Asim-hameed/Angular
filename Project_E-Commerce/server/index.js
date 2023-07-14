const express = require("express");
const bodyparser = require('body-parser')
const app = express();
app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())
const stripe = require("stripe")("sk_test_51MqJJgIEaeLTrBBcy4tTYclQkPiKP1pRMNuG9SRFvsqMErgdMStqL2jiVaDVDT0zSNUSJsNrZkdQjUMT5NDfUWsx0056o8snxX");
const cors = require('cors')

app.use(cors())

app.post('/checkout', async(req, res) => {
    try {
        console.log(req.body);
        token = req.body.token
      const customer = stripe.customers
        .create({
          email: "asimhameed31@gmail.com",
          source: token.id
        })
        .then((customer) => {
          console.log(customer);
          return stripe.charges.create({
            amount: 1000,
            description: "Payment for Ecommerce Application",
            currency: "USD",
            customer: customer.id,
          });
        })
        .then((charge) => {
          console.log(charge);
            res.json({
              data:"success"
          })
        })
        .catch((err) => {
            res.json({
              data: "failure",
            });
        });
      return true;
    } catch (error) {
      return false;
    }
})

app.listen(5000, () => {
    console.log("App is listening on Port 5000")
})