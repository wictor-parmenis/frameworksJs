<template>
  <div>
<!--HEADER BELLOW-->
    <app-header
    @select-championship="changeChampionship"
    @change-component="changeComponent"
    />

<!--SECTION BELLOW-->
    <app-section-home/>

<!--FOOTER BELLOW-->
    <app-footer/>
  </div>
</template>


<script>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import AppSectionHome from './components/AppSectionHome'
// import {mapMutations} from 'vuex'
import {mapActions} from 'vuex'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
    AppSectionHome
  },
  data() {
    return {
    }
  },
  methods: {
    ...mapActions(['changeChampionship']),

    // changeChampionship: function(value){
    //   this.$store.dispatch('changeChampionship', value);
    // },

    // ...mapMutations({
    //   changeChampionship: 'setChampionship'
    // }),
    // changeChampionship(value) {
    //   this.$store.commit('setChampionship', value);
    //   // this.championship = value;
    // },
    changeComponent(value) {
      let component;
      switch (value){
        case 'home':
        default:
          component = 'AppSectionBanner';
        break;

        case 'news':
          component = 'AppSectionNews';
        break;
      }

      this.currentSectionComponent = component;
    }
  }
}
</script>

<style>

@import url('https://fonts.googleapis.com/css?family=Rajdhani&display=swap')

</style>
