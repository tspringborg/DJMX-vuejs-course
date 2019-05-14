<template>
	<div class="page">
		
		<div class="accordion">
			<div
				ref="item"
				v-for="i in 5"
				@click="expandItem(i - 1)"
				class="item"
			>
				<h1>{{word()}}</h1>
			</div>
		</div>
		<div ref="closeButton" class="closeButton" @click="closeExpandedItem">X</div>
	</div>
</template>

<script>
// @ is an alias to /src
import { TweenMax } from 'gsap'
import Random from '@/assets/random.js'
import Hero from '@/components/Hero.vue'
import _ from 'lodash'

export default {
	name: 'home',
	components: {
		Hero,
	},
	methods: {
		expandItem(i) {
			_.each(this.$refs.item, (item, index) => {
				let height = index === i ? document.body.clientHeight : 0
				TweenMax.to(item, 0.4, {
					height,
				})
			})
			TweenMax.to(this.$refs.closeButton, 0.3, {
				delay: 0.4,
				autoAlpha: 1,
			})
		},
		word() {
			return Random.word()
		},
		closeExpandedItem() {
			TweenMax.to(this.$refs.closeButton, 0.3, {
				delay: 0.2,
				autoAlpha: 0,
			})
			_.each(this.$refs.item, (item, index) => {
				let height = document.body.clientHeight / this.$refs.item.length
				TweenMax.to(item, 0.4, {
					height,
				})
			})	
		},
	},
	mounted() {
		console.log(Random)
	},
}
</script>

<style lang="scss" scoped>
	@import '../assets/style/vars';
	.closeButton {
		color: white;
		visibility: hidden;
		opacity: 0;
		position: absolute;
		right: $padding;
		bottom: $padding;
		font-size: 40px;
		font-weight: bold;
		border: 1px solid white;
		width: 50px;
		height: 50px;
		border-radius: 100%;
	}
	.accordion {
		height: calc(100vh - #{$menuHeight});
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		.item {
			overflow: hidden;
			color: white;
			display: flex;
			justify-content: center;
			align-items: center;
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
