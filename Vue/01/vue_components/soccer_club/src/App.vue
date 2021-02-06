<template>
  <div>
<!--HEADER BELLOW-->
    <app-header
    @select-championship="changeChampionship"
    />

<!--SECTION BELLOW-->
    <app-section-home
    :championship="championship"
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
      championship: 'Brazilian championship'
    }
  },
  methods: {
    changeChampionship(value) {
      this.championship = value;
    }
  }
}
</script>

<style>

@import url('https://fonts.googleapis.com/css?family=Rajdhani&display=swap')

</style>
