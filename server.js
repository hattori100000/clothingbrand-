const express = require("express")
const app = express()
const port = process.env.PORT || 8001
const path = require('path');
const connectdb = require("./connect/db")
const listingsrouter = require("./routes/listing-route.js")
const methodOverride= require("method-override")
const ejsMate= require("ejs-mate")

app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,"/public")))
app.use(methodOverride('_method'))
app.engine('ejs', ejsMate);


app.use("/",listingsrouter)
// app.use("/listings",listingsrouter)


connectdb().then(()=>{
  app.listen(port , ()=> {
  console.log(`connection is established on ${port}`)
})
})

