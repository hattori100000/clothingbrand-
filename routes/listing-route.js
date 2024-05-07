const express = require("express");
const router = express.Router();
const Listing = require("../model/listing-model"); // 
const homeController = require('../controllers/homeController');


router.get('/home', (req, res) => {
  res.render('includes/home.ejs', { title: 'Home Page' });
});

router.get("/", async (req, res) => {
  try {
    const alllistings = await Listing.find({});
    
    res.render("listings/index", { alllistings  }); // Adjust the path here
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

router.post("/",async(req,res)=>{
 

  const newListing = new Listing(req.body.listing)
  await newListing.save()
  
  res.redirect("/listings");
})
// router.post("/", async (req, res) => {
//   try {
//     if (!req.body.listing || !req.body.listing.image || !req.body.listing.image.filename || !req.body.listing.image.url) {
//       throw new Error("Image filename and url are required");
//     }
    
//     const newListing = new Listing(req.body.listing);
//     await newListing.save();
//     console.log("New listing saved:", newListing);
//     res.redirect("/listings");
//   } catch (error) {
//     console.error("Error creating new listing:", error); // Log the full error object
//     res.status(500).send("Error creating new listing");
//   }
// });


router.get("/new", async(req,res)=>{
  res.render("listings/new.ejs")
})

router.get("/:id", async(req, res)=>{
  let{id} = req.params
  const listing = await Listing.findById(id)
  res.render("listings/show", {listing})
})
router.get("/:id/edit", async(req, res)=>{
  let{id} = req.params
  const listing = await Listing.findById(id)
  res.render("listings/edit", {listing})
})

//update 
router.put("/:id",async(req,res)=>{
  let{id} = req.params
  await Listing.findByIdAndUpdate(id,{...req.body.listing})
  res.redirect("/listings")
})
//delete
router.delete("/:id",async(req,res)=>{
  let{id} = req.params
  await Listing.findByIdAndDelete(id)
  res.redirect("/listings")
})

module.exports = router;
// const express = require("express");
// const router = express.Router();
// const Listing = require("../model/listing-model"); 

// // GET all listings
// router.get("/", async (req, res) => {
//   try {
//     const alllistings = await Listing.find({});
//     res.render("listings/index", { alllistings }); // Pass alllistings to the template
//   } catch (err) {
//     console.error(err);
//     res.status(500).send("Internal Server Error");
//   }
// });

// // Create a new listing
// router.post("/", async (req, res) => {
//   try {
//     const newListing = new Listing(req.body.listing);
//     await newListing.save();
//     res.redirect("/listings");
//   } catch (error) {
//     console.error("Error creating new listing:", error);
//     res.status(500).send("Error creating new listing");
//   }
// });

// // Render the form to create a new listing
// router.get("/new", async (req, res) => {
//   res.render("listings/new.ejs");
// });

// // Show details of a specific listing
// router.get("/:id", async (req, res) => {
//   try {
//     const listing = await Listing.findById(req.params.id);
//     if (!listing) {
//       return res.status(404).send("Listing not found");
//     }
//     res.render("listings/show", { listing });
//   } catch (error) {
//     console.error("Error fetching listing:", error);
//     res.status(500).send("Internal Server Error");
//   }
// });

// // Render the form to edit a listing
// router.get("/:id/edit", async (req, res) => {
//   try {
//     const listing = await Listing.findById(req.params.id);
//     if (!listing) {
//       return res.status(404).send("Listing not found");
//     }
//     res.render("listings/edit", { listing });
//   } catch (error) {
//     console.error("Error fetching listing:", error);
//     res.status(500).send("Internal Server Error");
//   }
// });


// // Update a listing
// router.put("/:id", async (req, res) => {
//   try {
//     await Listing.findByIdAndUpdate(req.params.id, req.body.listing);
//     res.redirect("/listings");
//   } catch (error) {
//     console.error("Error updating listing:", error);
//     res.status(500).send("Internal Server Error");
//   }
// });

// // Delete a listing
// router.delete("/:id", async (req, res) => {
//   try {
//     await Listing.findByIdAndDelete(req.params.id);
//     res.redirect("/listings");
//   } catch (error) {
//     console.error("Error deleting listing:", error);
//     res.status(500).send("Internal Server Error");
//   }
// });

// module.exports = router;
