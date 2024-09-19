const mongoose = require("mongoose");
const initDB= require("./data.js");
const Listing =require("../models/listing.js");
main()
.then(()=>{
    console.log("connected to db");

})
.catch((err) =>{
    console.log(err);
});

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");
}
const initializeDB= async () =>{
    await Listing.deleteMany({});
    initDB.data =initDB.data.map((obj)=>({
         ...obj,
        owner: "66dd2e27b1aae4e3c1773ed0",
        
}));
    await Listing.insertMany(initDB.data);
    console.log("data was initilized");
};

initializeDB();