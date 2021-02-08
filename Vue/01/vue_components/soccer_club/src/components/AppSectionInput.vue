<template>
    <input type="text" :value="clubName" @keyup="updateClubName($event.target.value)" name="" id="" class="form-control" placeholder="Typewrite your club">
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
    computed: 
        mapGetters({
            clubName: 'getClubName'}),
    
    methods: mapActions(['updateClubName']),
    props: {
        value: String
    }
}
</script>

<style scoped>

</style>