const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hotel Booking API Running");
});

app.get("/rooms", (req, res) => {
  res.json([
    {
      id: 1,
      name: "Deluxe Room",
      price: 120
    },
    {
      id: 2,
      name: "Suite Room",
      price: 200
    }
  ]);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});