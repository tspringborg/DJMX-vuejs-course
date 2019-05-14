<template>
	<div class="page">
		
		<div class="accordion">
			<div
				v-for="i in 5"
				@click="expandItem(i)"
				class="item"
			>
				{{word()}}
			</div>
		</div>
	</div>
</template>

<script>
// @ is an alias to /src
import Random from '@/assets/random.js'
import Hero from '@/components/Hero.vue'

export default {
	name: 'home',
	components: {
		Hero,
	},
	methods: {
		expandItem(i) {
			console.log('hello ', i)
		},
		word() {
			return Random.word()
		},
	},
	mounted() {
		console.log(Random)
	},
}
</script>

<style lang="scss" scoped>
	@import '../assets/style/vars';
	.accordion {
		height: calc(100vh - #{$menuHeight});
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		.item {
			flex-grow: 2;
			&:nth-child(1) {
				@include random-bgr();
			}
			&:nth-child(2) {
				@include random-bgr();
			}
			&:nth-child(3) {
				@include random-bgr();
			}
			&:nth-child(4) {
				@include random-bgr();
			}
			&:nth-child(5) {
				@include random-bgr();
			}
		}
	}
</style>
