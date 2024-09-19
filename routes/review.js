const express = require ("express");
const router = express.Router({mergeParams:true});
const wrapAsync = require("../utils/wrapAsync.js");
// const ExpressError = require("../utils/ExpressError.js");
// const Listing = require("../models/listing.js");
const {validateReview, isLoggedIn, isreviewsAuthor} =require("../middleware.js");
const reviewController = require("../controllers/reviews.js");
const review = require("../models/review.js");

// Post Reviews Route

    router.post("/", 
      isLoggedIn,
      validateReview, wrapAsync(reviewController.createReview));
    
      // Delete Review Route
    
      router.delete("/:reviewId",
        isLoggedIn,
        isreviewsAuthor,
        wrapAsync(reviewController.destroyReview)
    );

    module.exports=router;
