<template>
    <section>
        <div class="space"></div>
        <div class="container">
            <app-section-news-single
            v-for="item in news"
            :key="item.id"
            :img-name-news='item.imgName'
            :alt-image-news="item.imgAlt"
            :content-news="item.newsContent"
            :date-news='item.newsDate'
            >
            <template #title>
                <router-link :to=" {name: 'notice', params: {idnotice: item.id}}"
                tag="h2">{{item.newsTitle }}</router-link>
            </template>
            <p>
                {{item.newsContent | truncate(180)}}
            </p>
            </app-section-news-single>
        </div>
    </section>
</template>

<script>
import AppSectionNewsSingle from '../components/AppSectionNewsSingle'
import {mapGetters} from 'vuex'

export default {
    components: {
        AppSectionNewsSingle
    },
    data() {
        return {
            // news: []
        }
    },
    computed: {
        ...mapGetters({
            news: 'getNews'
        })

        
    },
    methods: {
        // goToPage(page){
        //     this.$router.push(page);
        // }
    }
    /*created(){
        this.news = [{
                id : 1,
                imgName : 'news1.jpg',
                imgAlt : 'Notice 1',
                newsTitle : "Begin the training for season",
                newsContent : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo sint possimus laudantium sequi adipisci vitae sit ipsa reiciendis repellendus laboriosam quibusdam cum ducimus mollitia, itaque magni porro molestiae quos facilis!"
                               Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat dolorum cupiditate facilis temporibus distinctio alias. Iure, iusto in porro magni, eaque eum doloribus molestias eveniet facere eos nemo quam doloremque?`,
                newsDate : '2020-02-06'
            },
            {
                id : 2,
                imgName : 'news2.jpg',
                imgAlt : 'Notice 2',
                newsTitle : "Incredible tips for play FIFA 2021 (UPDATED)",
                newsContent : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo sint possimus laudantium sequi adipisci vitae sit ipsa reiciendis repellendus laboriosam quibusdam cum ducimus mollitia, itaque magni porro molestiae quos facilis!"
                               Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat dolorum cupiditate facilis temporibus distinctio alias. Iure, iusto in porro magni, eaque eum doloribus molestias eveniet facere eos nemo quam doloremque?`,
                newsDate : '2020-02-02'
            },
            {
                id: 3,
                imgName : 'news3.jpg',
                imgAlt : 'Notice 3',
                newsTitle : "Check now the score of Champions League",
                newsContent : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo sint possimus laudantium sequi adipisci vitae sit ipsa reiciendis repellendus laboriosam quibusdam cum ducimus mollitia, itaque magni porro molestiae quos facilis!"
                               Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat dolorum cupiditate facilis temporibus distinctio alias. Iure, iusto in porro magni, eaque eum doloribus molestias eveniet facere eos nemo quam doloremque?`,
                newsDate : '2020-02-01'
            }]*/
    }


</script>

<style scoped>
    section{
        padding: 50px 0px;
        margin-top: 50px;
        background-color: orange;
    }


</style>