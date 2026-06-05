const Listing=require("../models/listing");
const Review=require("../models/review");

/**
 * Create a new review for a listing.
 * Appends the review to the listing and sets the current user as author.
 */
module.exports.createReview=async(req,res)=>{
    let listing=await Listing.findById(req.params.id);
    let newReview=new Review (req.body.review);

    newReview.author=req.user._id;
    listing.reviews.push(newReview);
    await newReview.save();
    await listing.save();
    req.flash("success","New Review Created!");
    res.redirect(`/listings/${listing._id}`);

};

/**
 * Delete a review from a listing.
 * Pulls the review ID from listing's reviews array and deletes review document.
 */
module.exports.destroyReview=async(req,res)=>{
    let{id,reviewId}=req.params;

    await Listing.findByIdAndUpdate(id,{$pull:{reviews: reviewId}});
    await Review.findByIdAndDelete(reviewId);
    req.flash("success","Review Deleted!");
    res.redirect(`/listings/${id}`);
};