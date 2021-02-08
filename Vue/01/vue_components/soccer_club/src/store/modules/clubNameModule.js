export default{
    state: {
        clubName: 'Palmeiras'
    },
    getters: {
        getClubName(state){
            return state.clubName
        }
    },
    mutations: {
        setClubName(state, newValue){
            state.clubName = newValue;
        }
    },
    actions: {
        updateClubName(context, value){
            context.commit('setClubName', value);
        }
    }}

