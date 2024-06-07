export default {
  async addRequest(context, payload) {
        const newRequest = {
            email: payload.email,
            message: payload.message
        }

        const response = await fetch(`https://playground-220ca-default-rtdb.europe-west1.firebasedatabase.app/requests/${payload.coachId}.json`, {
            method: "POST",
            body: JSON.stringify(newRequest)
        })
        const responseData = await response.json();
        if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to send request.');
      throw error;
        }
        
        newRequest.id = responseData.name;
    newRequest.coachId = payload.coachId;

        context.commit('addRequest', newRequest)
    },

    async fetchRequests(context) {
    const coachId = context.rootGetters.userId;
    const response = await fetch(`https://playground-220ca-default-rtdb.europe-west1.firebasedatabase.app/requests/${coachId}.json`);
    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to fetch requests.');
      throw error;
    }

    const requests = [];

    for (const key in responseData) {
      const request = {
        id: key,
        coachId: coachId,
        userEmail: responseData[key].userEmail,
        message: responseData[key].message
      };
      requests.push(request);
    }

    context.commit('setRequests', requests);
  }
}
