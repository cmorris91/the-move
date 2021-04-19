import axios from "axios";


export default {
    saveEvent: function(eventData) {
        return axios.post("/api/event", eventData);
      },

    getEvent: function (id) {
      return axios.get("/api/event/" + id)
    },

    saveCheckin: function(id, eventData) {
      return axios.put("/api/event/" + id, eventData);
    },

    searchCheckinEvent: function(eventData) {
      return axios.get("/api/event/name/" + eventData.name + "/city/" + eventData.city)
    }
}