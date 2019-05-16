<template>
  <div id="app">
      <MainMenu :items="pages"/>
    <router-view/>
  </div>
</template>

<script>
    import MainMenu from '@/components/MainMenu'
    import Router from './router.js'
    console.log(Router)

    export default {
        name: 'App',
        components: {
            MainMenu,
        },
        data() {
            return {
                // use router routes here instead of hardcoding them
                pages: Router.options.routes,
            }
        },
        methods: {
        },
    }
</script>

<style lang="scss">
    @import "assets/style/vars";
    body, html{
        margin: 0;
    }
    #app {
        overflow: hidden;
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
    .page {
        //margin-top: $menuHeight;
        section{
            padding: $padding;
            padding-top: 0;
        }
    }
</style>
