import axios from "axios";


export default {
    saveEvent: function(eventData) {
        return axios.post("/api/event", eventData);
<<<<<<< HEAD
    },
    getEvents: function() {
        return axios.get("/api/event")
=======
      },

    getEvent: function (id) {
      return axios.get("/api/event/" + id)
    },

    saveCheckin: function(id, eventData) {
      return axios.put("/api/event/" + id, eventData);
    },

    searchCheckinEvent: function(eventData) {
      return axios.get("/api/event/name/" + eventData.name + "/city/" + eventData.city)
>>>>>>> c98003a5bea26d8d67eb46af38d77f1bcbee2905
    }
}