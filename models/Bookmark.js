const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookmarkSchema = new Schema ({

    events: [{
        type: Schema.Types.ObjectId,
        ref: "events" 
    }]
       
})


const Bookmark = mongoose.model("Bookmark", bookmarkSchema);

module.exports = Bookmark;