<template>
    <div class="row">
        <div class="col-3">
            <img :src="require('../assets/' + this.imgNameNews)" :alt="altImageNews">
        </div>
        <div class="col-9">
            <slot name="title"></slot>
            <slot>Pattern notice</slot>
            
            <span class="font-italic"> {{formatDate(dateNews)}} </span>
        </div>
    </div>
</template>

<script>
import Utils from './../mixins/UtilsMixins'

export default {
    props: {
        imgNameNews: {
            type: String,
            required: true,
        },
        altImageNews: {
            type: String,
            required: true
        },
        dateNews: {
            type: String,
            required: true
        }
    },
    mixins: [Utils]
}
</script>

<style scoped>
    .row{
        margin-bottom: 30px;
    }

    img{
        width: 100%;
    }

    h2{
        cursor: pointer;
        color: #fff;
    }
</style>