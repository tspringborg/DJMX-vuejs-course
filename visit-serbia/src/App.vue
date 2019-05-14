<template>
  <div id="app">
    <div id="nav">
      <MainMenu :items="pages"/>
    </div>
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
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
    #nav {
        padding: 30px;
        a {
            font-weight: bold;
            color: #2c3e50;
            &.router-link-exact-active {
              color: #42b983;
            }
        }
    }
</style>
