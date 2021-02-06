<template>
    <section>
        <div class="container">
            <div class="row mt-5">
                <h3>You is looking for notices of {{championship}} </h3>
            </div>
        </div>
        <app-section-banner/>
        <app-section-news/>

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

import AppSectionBanner from '../components/AppSectionBanner'
import AppSectionNews from '../components/AppSectionNews'
import AppSectionInput from './AppSectionInput'

export default { 
    name: 'Banner',
    components: {
        AppSectionBanner,
        AppSectionNews,
        AppSectionInput
    },
    data(){
        return{
            myClub: 'Palmeiras'
        }
    },
    props: {
        championship: String
    }
}
</script>

<style scoped>

</style>