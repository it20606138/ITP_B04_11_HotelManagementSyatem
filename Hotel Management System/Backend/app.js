const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/salary-routes");
const routerf = require("./routes/food-routes");
const routerr = require("./routes/customer-routes");
<<<<<<< HEAD
const routerrr = require("./routes/room-routes");
const routerd = require("./routes/dilivary-routes");
=======
const routerd = require("./routes/dilivary-routes");

>>>>>>> 2e6f8ecc60467b25114fa308c6c58b727076932f
const cors = require("cors");
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use("/salarys", router);
app.use("/foods", routerf);
app.use("/customers", routerr);
<<<<<<< HEAD
app.use("/rooms", routerrr); 
app.use("/dilivarys", routerd);
=======
app.use("/dilivarys", routerd);

// localhost:5000/customers
>>>>>>> 2e6f8ecc60467b25114fa308c6c58b727076932f
// localhost:5000/salarys

mongoose
  .connect(
    "mongodb+srv://ITP:1234@cluster0.lipyl.mongodb.net/Cluster0?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected To Database"))
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log(err));
