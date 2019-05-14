<template>
  <div class="home">
    <img class="hero" alt="Vue logo" src="../assets/hero.jpg">
    <section>
    	<h1>{{line()}}</h1>

    	<p v-for="i in 10">{{line()}}</p>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import Random from '@/assets/random.js'
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  methods: {
  	line() {
  		return Random.line()
  	},
  },
  components: {
    HelloWorld
  },
  mounted() {
  	console.log(Random)
  },
}
</script>

<style lang="scss" scoped>
	img.hero {
		width: 100vw;
		height: auto;
	}
</style>
