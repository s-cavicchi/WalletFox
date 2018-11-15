const express = require("express");
const routes = require("./routes.js");
const db = require("./database.js");

const app = express();

// Re-route all paths to our routing file
// app.use("/", routes);


app.listen(8080, () => {
    console.log('Wallet Fox listening on port 8080'); // DELETE ON SUBMISSION
});

//test comment

// Requesting a specific user ID
app.get("/users/:id", function (request, response) {
    const id = request.params.id
    db.getUser(id).then(user => 
        response.status(200).json(user) // Return the specific wallet with 200 OK
    ).catch(error => response.status(404).json(error.message)) 
})

// GET specific wallet
app.get("/wallets/:id", function (request, response) {
    const id = request.params.id
    db.getWallet(id).then(wallet => 
        response.status(200).json(wallet) // Return the specific wallet with 200 OK
    ).catch(error => response.status(404).json(error.message))
})

app.get("/payments/:id", function(request, response) {
    const id = request.params.id
    db.getPayment(id).then(payment => 
        response.status(200).json(payment)
    ).catch(error => response.status(404).json(error.message))
})

app.get("/paymentdebts/:id", function(request, response) {
    const id = request.params.id
    db.getPaymentDebt(id).then(debt => 
        response.status(200).json(debt)
    ).catch(error => response.status(404).json(error.message))
})