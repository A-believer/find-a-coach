import { createStore } from "vuex"
import coachModules from "./modules/coaches/index"
import requestModules from "./modules/requests/index"

const store = createStore({
    modules: {
        coaches: coachModules,
        requests: requestModules
    },
    state() {
        return {
userId: "c3"
        }
    },
    getters: {
        userId(state) {
            return state.userId
        }
    }
})

export default store