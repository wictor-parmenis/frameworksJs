<template>
    <section>
        <div class="container">
            <div class="row mt-5">
                <h3>You is looking for notices of {{championship}} </h3>
            </div>
        </div>
        <transition
        name="fade-view"
        mode="out-in">
            <router-view></router-view>
        </transition>
        

        <!-- <component
        :is="currentComponent">

        </component> -->
        <br>
        <br>
        <br>
        <div class="container">
            <div class="row my-club mt-5">
                <div class="col-6">
                    <h2>Your team is: {{myClub}} </h2>  
                </div>
                <div class="col-6">
                    <app-section-input v-model="myClub"/>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

import AppSectionInput from './AppSectionInput'
import {mapGetters} from 'vuex'

export default { 
    name: 'Banner',
    components: {
        AppSectionInput
    },
    data(){
        return{
            
        }
    },
    props: {
        currentComponent: String
    },
    computed: {
        ...mapGetters({
            championship: 'getChampionship',
            myClub: 'getClubName'
        })

        // ...mapState(['championship']),
        // ...mapState({
        //     myClub:  'clubName'})
    }
    


    // {
    //     // ALERT, dont use ; inside of computed. NEVER!
    //     championship(){
    //         return this.$store.state.championship
    //     },
    //     myClub() {
    //         return this.$store.state.clubName
    //     }
    // }
}
</script>

<style scoped>

.fade-view-enter-active{
    transition: opacity .3s ease-in-out;
}
.fade-view-leave-active{
    transition: opacity .3s ease-in-out;
}

.fade-view-enter, .fade-view-leave-to{
    opacity: 0%;
}

</style>