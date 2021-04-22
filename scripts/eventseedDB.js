const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/the-move"
);
const eventSeed =[
    {
      name:"Bowling",
      host_name:"jen",
      category:"relaxing",
      description:"bowling time!",
      date: new Date(Date.now()+20),
      address:"2244 Alsace Ave",
      city:"Los Angeles",
      state:"CA",
      zipcode:"90016",
      date_created:new Date(Date.now()),
      feedback: ["fun", "exciting", "come Bowl"],
      averageRating: 0,
      images:['https://i2.wp.com/www.healthfitnessrevolution.com/wp-content/uploads/2015/05/ThinkstockPhotos-469948871.jpg?fit=725%2C483&ssl=1'],
      rating:[1],
      user_id:"6078a8504485de51284b29e8"
    },
    {
      name:"Picnic",
      host_name:"Ben",
      category:"Dining",
      description:"picnic time!",
      date: new Date(Date.now()+10),
      address:"918 N Orlando Ave",
      city:"West Hollywood",
      state:"Ca",
      zipcode:"90069",
      date_created:new Date(Date.now()),
      feedback: ["Fun In The Sun", "BYOB"],
      averageRating: 0,
      images:['https://cdn.abcotvs.com/dip/images/6213304_052620-cc-ss-outdoor-picnic-img.jpg?w=1600'],
      rating:[2],
      user_id:"6078a8504485de51284b29e9"
    },
    {
      name:"House Party",
      host_name:"Ken",
      category:"Party",
      description:"Parents Not Home!",
      date: new Date(Date.now()+5),
      address:"335 Fifth Ave",
      city:"Venice",
      state:"CA",
      zipcode:"90291",
      date_created:new Date(Date.now()),
      feedback: ["good time", "let's partyyyy"],
      averageRating: 0,
      images:['https://data.junkee.com/wp-content/uploads/2015/09/samantha-gades-fIHozNWfcvs-unsplash.jpg'],
      rating:[5],
      user_id:"6078a8504485de51284b29ea"
    },
    {
      name:"Paint & Sip",
      host_name:"Pen",
      category:"Arts & Crafts",
      description:"Just Bring the Sip!",
      date: new Date(Date.now()),
      address:"1114 Steinhart Ave",
      city:"Redondo Beach",
      state:"CA",
      zipcode:"90278",
      date_created:new Date(Date.now()),
      feedback: ["Creative Outlet", "Great time with friends"],
      averageRating: 0,
      images:['https://www.woodstockinn.com/sites/default/files/styles/scale_1440/public/2018-10/paint%26sip.jpg?itok=3pjkg1NC'],
      rating:[3],
      user_id:"6078a8504485de51284b29eb"
      
    },
    {
      name:"Happy Hour",
      host_name:"Sam",
      category:"Dining",
      description:"It's five o'clock somewhere",
      date: new Date(Date.now()),
      address:"828 Traction Ave",
      city:"Los Angeles",
      state:"CA",
      zipcode:"90013",
      date_created:new Date(Date.now()),
      feedback: ["Cheers", "Great time with friends"],
      averageRating: 0,
      images:['https://www.thedailymeal.com/sites/default/files/2020/01/28/HERO_02_Happy_Hour_iStock.jpg'],
      rating:[4],
      user_id:"6078a8504485de51284b29eb"
      
    },
    {
      name:"Annual Book Festival",
      host_name:"Jose",
      category:"Recreation",
      description:"Showcasing top selling books in the region",
      date: new Date(Date.now()),
      address:"436 De La Vina St",
      city:"Santa Barbara",
      state:"CA",
      zipcode:"93101",
      date_created:new Date(Date.now()),
      feedback: ["Exciting"],
      averageRating: 0,
      images:['https://kaya.com/wp-content/uploads/2016/05/babf.jpg'],
      rating:[4],
      user_id:"6078a8504485de51284b29e8" 
    },
    {
      name:"Stand-Up Comedy",
      host_name:"Whitney",
      category:"Entertainment",
      description:"Consistently ranked as one of San Francisco's top rated comedy shows for over 3 years running!",
      date: new Date(Date.now()),
      address:"23 Corwin St",
      city:"San Francisco",
      state:"CA",
      zipcode:"94114",
      date_created:new Date(Date.now()),
      feedback: ["Hilarious", "Amazing Show", "Couldn't Stop Laughing"],
      averageRating: 0,
      images:['https://ichef.bbci.co.uk/images/ic/640x360/p091x5ms.jpg'],
      rating:[5],
      user_id:"6078a8504485de51284b29e8"
      
    },
    {
      name:"A Virtual Evening of Smooth Jazz",
      host_name:"Whitney",
      category:"Entertainment",
      description:"Join us for an evening of Smooth Jazz on Saturday, April 24th, and help us provide funding for HBCU students and students in underserved communities.",
      date: new Date(Date.now()),
      address:"2026 Laguna St",
      city:"San Francisco",
      state:"CA",
      zipcode:"94115",
      date_created:new Date(Date.now()),
      feedback: ["Community Event", "Engaging"],
      averageRating: 0,
      images:['https://m.media-amazon.com/images/I/71uv5HyNxaL._SS500_.jpg'],
      rating:[3],
      user_id:"6078a8504485de51284b29e8"
      
    },

  ]


  db.Event
  .remove({})
  .then(() => db.Event.collection.insertMany(eventSeed))
  .then(data => {
    console.log(data.result.n + " records inserted! h");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });