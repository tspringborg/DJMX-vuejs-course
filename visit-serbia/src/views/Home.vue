<template>
	<div class="home page" id="home">
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

export default {
  name: 'home',
  methods: {
  	line() {
  		return Random.line()
  	},
  },
  components: {
  },
  mounted() {
  	console.log(Random)
  },
}
</script>

<style lang="scss" scoped>
	@import '../assets/style/vars';

	img.hero {
		width: 100vw;
		height: auto;
	}
</style>
