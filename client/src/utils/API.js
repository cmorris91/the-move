import axios from "axios";

const mongoose = require("mongoose")

export default {
    saveEvent: function(eventData) {
        return axios.post("/api/event", eventData);
    },

    getEvent: function (id) {
      return axios.get("/api/event/" + id)
    },

    getEvents: function () {
      return axios.get("/api/event/")
    },

    saveCheckin: function(id, eventData) {
      return axios.put("/api/event/" + id, eventData);
    },

    searchCheckinEvent: function(eventData) {
      return axios.get("/api/event/name/" + eventData.name + "/city/" + eventData.city)
    },

    saveBookmark: function(data) {
      const data1 = data.map((value) => mongoose.Types.ObjectId(value))
      return axios.post("/api/Bookmark/", { events: data1[0], name: data1[1] })
    },
    updateBookmark: function(data){
      return axios.put("/api/Bookmark/", {events:data[0], name:data[1]})
    },
    getBookmark: function(data) {
     
      return axios.post("/api/Bookmark/user", data)
    },
    getBookmarksForUser: function(data) {
      return axios.post("/api/Bookmark/all/user", data)
    },

    removeBookmark: function(id, uid) {
      return axios.delete("/api/Bookmark/" + id + "/" + uid)
    },

    login: function(login){
      return axios.post("/api/user/login", login)
    },

    signup: function(signup){
      return axios.post("/api/user/signup", signup)
    },
    getLocationList: function(description) {
      return axios.get("https://maps.googleapis.com/maps/api/js?key=AIzaSyAASHUvtgIzAHEr6NyyZA9J4X0zo0GKYc4&libraries=places")
    }

}