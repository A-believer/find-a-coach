
export default {
	async addCoach(context, data) {
		const userId = context.rootGetters.userId;
		const coachData = {
			id: context.rootGetters.userId,
			firstName: data.first,
			lastName: data.last,
			areas: data.areas,
			description: data.desc,
			hourlyRate: data.rate,
        };
        
        const response = await fetch(`https://playground-220ca-default-rtdb.europe-west1.firebasedatabase.app/coaches/${userId}.json`, {
            method: "PUT",
            body: JSON.stringify(coachData)
        })

        if (!response.ok) {
      const error = new Error( 'Failed to register new coach!');
      throw error;
    }
		context.commit("addNewCoach", {...coachData, id:userId});
    },
    
    async loadCoaches(context, payload) {
        if (!payload.forceRefresh && !context.getters.shouldUpdate) {
      return;
        }
        const response = await fetch(`https://playground-220ca-default-rtdb.europe-west1.firebasedatabase.app/coaches.json`)
        const responseData = await response.json()

        if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to fetch!');
      throw error;
        }
        const coaches = []

        for (const key in responseData) {
            const coach = {
                  id: key,
        firstName: responseData[key].firstName,
        lastName: responseData[key].lastName,
        description: responseData[key].description,
        hourlyRate: responseData[key].hourlyRate,
        areas: responseData[key].areas
            }
            coaches.push(coach)
        }

         context.commit('setCoaches', coaches);
    context.commit('setFetchTimestamp');
    }
};
