<template>
    
   <header>
    <div class="container">
      <nav class="navbar navbar-expand">
        <a href="#" class="link navbar-brand mr-auto">
          <img src="../assets/logo.svg" alt="Logo da Hcode treinamentos"
           class="img d-inline-block align-top" id="logo"> Soccer Club
        </a>
        <div class="links mr-2">
          <router-link class="btn mr-5" to="/">Home</router-link>
          <router-link class="btn mr-5" to="/News">News</router-link>

          <a href="#" class="btn mr-5">Scores</a>
          <select name="championship" id="select-championship" class="form-control"
          @change="$emit('select-championship', $event.target.value)"
          >
            <option value="Brazilian championship">Brazilian championship</option>
            <option value="English championship">English championship</option>
            <option value="Champions championship" selected>Champions League</option>
            <option value="Italian championship">Italian championship</option>
          </select>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    header{
        background-color: #000;
    }

    #logo{
        width: 150px;
        height: 100%;
    }

    .links{
        display: inline-flex;
    }

    .link{
        color: #D48E33;
        font-size: 30px;
        font-family: Rajdhani;
    }

    .links a{
        color: #fff;
    }
    /* With important properties*/
    .links a:focus{
        outline: none !important;
        box-shadow: none !important;
    }

    .link-active{
      background-color: #fff;
      color: black !important;
    }
</style>