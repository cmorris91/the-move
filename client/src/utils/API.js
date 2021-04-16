import axios from "axios";

export default {
    saveEvent: function(eventData) {
        return axios.post("/api/event", eventData);
      }
}