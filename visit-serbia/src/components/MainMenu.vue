<template>
    <div :class="`main-menu ${expanded ? ' expanded' : ''}`">
    	<div class="bar">
	    	<div class="burger" @click="expanded = !expanded">
	    		<div :class="`inner ${expanded ? ' active' : ''}`"><i></i></div>
	    	</div>
    	</div>
    	<div ref="content" class="content">
    		<div class="inner">
	    		<div v-for="(item, index) in items">
		    		<router-link :to="item.link">{{item.label}}</router-link>
		    	</div>
    		</div>
    	</div>
    </div>
</template>

<script>
    export default {
        name: 'MainMenu',
        props:['items'],
        data() {
            return {
            	expanded: false
            }
        },
        watch: {
        	$route() {
        		this.expanded = false
        	},
        },
        mounted() {
        	console.log(this.$refs.content)
        },
        methods: {
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
	@import '../assets/style/vars';
	$bgColor: white;
	$burgerHeight: 50px;
	.main-menu {
		position: fixed;
		width: 100vw;
		height: $burgerHeight + $padding * 2;
		background-color: $bgColor;
		right: 0;
		top: 0;
		.bar {
			display: flex;
			align-items: center;
			height: 100%;
		}
		.burger {
			position: fixed;
			right: $padding;
			height: $burgerHeight;
			width: 50px;
			//width: 50px;
			.inner {
				@include burger-menu(4px, $burgerHeight / 4, 'active', #000000);	
			}
		}
		//display: flex;
		a{
			font-size: 50px;
			text-decoration: none;
		}
		.content {
			.inner {
				padding: $padding;
			}
			background-color: $bgColor;
			position: absolute;
			left: 0;
			right: 0;
			top: $burgerHeight + $padding + $padding;
			height: 0;
			overflow: hidden;
			transition: height 260ms $easeOutCubic;
			text-align: right;
		}
		&.expanded {
			.content {
				height: calc(100vh - #{$burgerHeight});	
			}
		}
	}
</style>