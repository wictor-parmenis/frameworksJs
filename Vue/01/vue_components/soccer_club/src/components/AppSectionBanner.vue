<template>
    <section>
        <div class="container">
            <div class="row">
                <div class="col-5 text-center main-news">
                    <h2>Look the main results of League</h2>
                </div>
                <div class="col-5 offset-2 text-center main-news">
                    <h2>Come meet the center of training of Hcode</h2>
                </div>
            </div>
        </div>
    </section>
</template>

<script>  
export default{

}
</script>


<style scoped>
    section{
        margin-top: 10px;
    }

    .container .row{
        height: 300px;
    }

    .container .row .col-5:first-child{
        background-color: rgba(0,0,0,0.5);
        background-image: url('../assets/football.jpg');
        background-size: cover;
    }

    .container .row .col-5:nth-child(2){
        background-color: rgba(0,0,0,0.5);
        background-image: url('../assets/football2.jpg');
        background-size: cover;
    }

    .main-news{
        cursor: pointer;
    }
    h2{
        margin: 25% 0%;
        color: #f6b64e;
        background-color: rgba(0,0,0,0.4);
        padding: 10%;
    }
</style>