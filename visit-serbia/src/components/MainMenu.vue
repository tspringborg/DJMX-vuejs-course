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
	$burgerHeight: $menuHeight;
	.main-menu {
		position: fixed;
		width: 100vw;
		left: 0;
		height: $menuHeight;
		background-color: $bgColor;
		right: 0;
		top: 0;
		.bar {
			display: flex;
			flex-direction: row-reverse;
			align-items: center;
			height: 100%;
			width: 100%;
			box-sizing: border-box;
			padding: $padding;
		}
		.burger {
			//padding-right: $padding;
			height: $burgerHeight - $padding * 2;
			width: $burgerHeight - $padding * 2;
			.inner {
				@include burger-menu(4px, ($burgerHeight - $padding * 2) / 4, 'active', #000000);	
			}
		}
		//display: flex;
		a{
			font-size: 50px;
			text-decoration: none;
			font-weight: bold;
            color: #2c3e50;
            &.router-link-exact-active {
              color: #42b983;
            }
		}
		.content {
			.inner {
				padding: $padding;
			}
			background-color: $bgColor;
			position: absolute;
			left: 0;
			right: 0;
			top: $burgerHeight + $padding + $padding - 1px;
			height: 0;
			overflow: hidden;
			transition: height 260ms $easeOutCubic;
			text-align: right;
		}
		&.expanded {
			.content {
				height: calc(100vh - #{$burgerHeight} + 1px);
			}
		}
	}
</style>