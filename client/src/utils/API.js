import axios from "axios";


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
      return axios.post("/api/bookmark/", data)
    },

    getBookmark: function() {
      return axios.get("/api/bookmark/")
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