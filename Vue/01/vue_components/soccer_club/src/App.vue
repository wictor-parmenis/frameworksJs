<template>
  <div>
<!--HEADER BELLOW-->
    <app-header
    @select-championship="changeChampionship"
    @change-component="changeComponent"
    />

<!--SECTION BELLOW-->
    <app-section-home
    :championship="championship"
    :current-component="currentSectionComponent"
    />

<!--FOOTER BELLOW-->
    <app-footer/>
  </div>
</template>


<script>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import AppSectionHome from './components/AppSectionHome'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
    AppSectionHome
  },
  data() {
    return {
      currentSectionComponent: 'AppSectionBanner'
    }
  },
  methods: {
    changeChampionship(value) {
      this.championship = value;
    },
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
