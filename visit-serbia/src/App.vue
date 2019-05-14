<template>
  <div id="app">
      <MainMenu :items="pages"/>
    <router-view/>
  </div>
</template>

<script>
    import MainMenu from '@/components/MainMenu'

    export default {
        name: 'App',
        components: {
            MainMenu,
        },
        data() {
            return {
                pages: [
                    {
                        link: '/',
                        label: 'Visit us!',
                    },
                    {
                        link: '/book',
                        label: 'Book an adventure',
                    },
                    {
                        link: '/slavic-squatting',
                        label: 'Our national pride',
                    },
                    {
                        link: '/info',
                        label: 'Info',
                    }
                ]
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
</style>
