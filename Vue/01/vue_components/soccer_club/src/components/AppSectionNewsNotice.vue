<template>
    <section>
        <div class="container">
            <div class="">
                <h2 class="title-notice"> {{notice.newsTitle}} </h2>
                <div class="center-notice">
                    <img :src="require(`../assets/${notice.imgName}`)" :alt="notice.imgAlt" class="img-notice">
                </div>
                <p> {{notice.newsContent}} </p>
                <span> {{formatDate(notice.newsDate)}} </span>
            </div>
        </div>
    </section>
</template>

<script>
import Utils from '../mixins/UtilsMixins'
export default {
    computed: {
        notice() {
            return this.$store.getters.getNewsFromId(this.$route.params.idnotice);
        }
    },
    mixins: [Utils],
    
        }
        
</script>

<style scoped>
.img-notice{
    width: 600px;
    margin-bottom: 2em;
}

.title-notice{
    margin-bottom: 1em;
}

section{
    padding: 50px 0px;
    margin-top: 50px;
    background-color: orange;
}

.center-notice{
    text-align: center;
}
</style>