<template>
    <div id="single-module">
        <h1>{{id }}</h1>
        <article> {{ module }} </article>
    </div>
</template>

<script>
//import {seRef} from '@/firebase.js'

export default {
    data () {
        return {
            id: this.$route.params.id,
            module: {}
        }
    },
    methods: {
        async fetchData(){
            console.log("fetch bank statements");
            // await fetch("https://bt3103-e32c6.firebaseio.com/se_df/data/0/" + this.id +".json")
            await fetch("https://bt3103-e32c6.firebaseio.com/se_df/data/0/" + this.id +".json")
            .then(response => response.json())
            .then((data)=>(
            this.module = data
            ))
            }
            },
    mounted: function() {
        console.log("mounted");
        this.fetchData();
    }
}

</script>

<style>
#single-module{
    max-width: 960px;
    margin: 0 auto;
}
</style>