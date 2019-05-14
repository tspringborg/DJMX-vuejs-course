<template>
    <div class="hero">
    	<img :src="image">
    	<div class="content">
    		<div class="funky-text">
	    		<h1 ref="texts" v-for="i in colors" :style="`color: ${i}`">{{text}}</h1>			
    		</div>
    		<slot></slot>
    	</div>
    </div>
</template>

<script>
	import { TweenMax } from 'gsap'
	import Size from '@/mixins/Size.js'

    export default {
        name: 'Hero',
        mixins: [Size()],
        props: ['image', 'text'],
        data() {
            return {
            	colors: ['#360745', '#D61C59', '#E7D84B', '#EFEAC5', '#1B8798']
            }
        },
        computed: {
        	svgViewBox() {
        		let str = '0 0 ' + this.size.width + ' '+ this.size.height
        		return str
        	},
        },
        mounted() {
        	/*
        	TweenMax.staggerTo( targets:Array, duration:Number, vars:Object, stagger:Number | Object | Function, onCompleteAll:Function, onCompleteAllParams:Array, onCompleteAllScope:* ) : Array
        	*/
        	TweenMax.staggerTo(this.$refs.texts, 1.5, {
        		yoyo: true,
        		scale: 1.6,
        		repeat: -1,
        	}, 0.11)
        },
        methods: {
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
	.hero {
		position: relative;
		img {
			width: 100vw;
			height: auto;
		}
		.funky-text {
			position: absolute;
			>* {
				font-size: 50px;
				position: absolute;
				&:last-child {
					position: relative;	
				}
			}
		}
	}
	.content {
		display: flex;
		justify-content: center;
    	align-items: center;
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
	}
</style>