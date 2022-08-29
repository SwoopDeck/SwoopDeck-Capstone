const router = require('express').Router()
require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_TEST);
const bodyParser = require("body-parser");
const cors = require("cors");

router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());

router.use(cors());

router.post("/fullAltitudePayment", cors(), async (req, res) => {
    let {amount, id } = req.body;
    try {
        const payment = await stripe.paymentIntents.create({
            amount,
            currency: "USD",
            payment_method: id,
            confirm: true,
        })
        console.log("Payment", payment)
        res.json({
            message: "Payment for Full Altitude Jump Ticket was successful"
        })
    } catch (error) {
        console.log(error);
        res.json({
            message: "Payment failed.",
            success: false
        })
    }
})

router.post("/HopNPopPayment", cors(), async (req, res) => {
    let {amount, id } = req.body;
    try {
        const payment = await stripe.paymentIntents.create({
            amount,
            currency: "USD",
            payment_method: id,
            confirm: true,
        })
        console.log("Payment", payment)
        res.json({
            message: "Payment for Hop n Pop Jump Ticket was successful"
        })
    } catch (error) {
        console.log(error);
        res.json({
            message: "Payment failed.",
            success: false
        })
    }
})

router.listen(process.env.PORT || 8080, () => {
    console.log("server is listening on port 8080")
})

module.exports = router;