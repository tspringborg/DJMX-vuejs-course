<template>
	<div class="home page" id="home">
		<hero
			image="./hero.jpg"
			text="Visit Serbia"
		>
		</hero>
		<section>
			<h1>{{line()}}</h1>
			<p v-for="i in 10">{{line()}}</p>
		</section>
	</div>
</template>

<script>
// @ is an alias to /src
import Random from '@/assets/random.js'
import Hero from '@/components/Hero.vue'

export default {
  name: 'home',
  methods: {
  	line() {
  		return Random.line()
  	},
  },
  components: {
  	Hero,
  },
  mounted() {
  	console.log(Random)
  },
}
</script>

<style lang="scss" scoped>
	@import '../assets/style/vars';
</style>
