<template>
    <div :class="`main-menu ${expanded ? ' expanded' : ''}`">
    	<div class="bar">
	    	<div class="burger" @click="expanded = !expanded">
	    		<div :class="`inner ${expanded ? ' active' : ''}`"><i></i></div>
	    	</div>
	    	<div class="logo">
	    		<router-link :to="logoItem.path">{{logoItem.name}}</router-link>
	    	</div>
    	</div>
    	<div ref="content" class="content">
    		<div class="inner">
    			<div class="search">
    				<p class="faded">Search Asan</p>
    				<search-icon/>
    			</div>
    			<div class="blocks">
		    		<div v-for="(item, index) in computedItems">
			    		<router-link :to="item.path">{{item.name}}</router-link>
			    	</div>
    			</div>
    		</div>
    	</div>
    </div>
</template>

<script>
	import _ from 'lodash'
	import SearchIcon from '@/components/SearchIcon'

    export default {
        name: 'MainMenu',
        props:['items'],
        components: {
        	SearchIcon,
        },
        data() {
            return {
            	expanded: true
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
        computed: {
        	logoItem() {
        		// just the first item
        		return this.items[0]
        	},
        	computedItems() {
        		// without the first item.. that should be on our logo
        		return this.items.slice(1)
        	},
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
	@import '../assets/style/vars';
	$bgColor: white;
	$burgerHeight: $menuHeight;
	.main-menu {
		color: white;
		position: fixed;
		z-index: 99;
		width: 100vw;
		left: 0;
		right: 0;
		top: 0;
		.bar {
			height: $menuHeight;
			justify-content: space-between;
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
			@include responsive-type(20px, 50px);
			text-decoration: none;
			font-weight: bold;
            color: #2c3e50;
            &.router-link-exact-active {
              color: #42b983;
            }
		}
		$border: 1px solid #A8A8A8;
		.content {
			.inner {
				border-top: $border;
			}
			.search {
				text-align: left;
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 5vh $padding;
				.faded {
					color: #A8A8A8;
				}
			}
			display: flex;
			justify-content: flex-end;
			flex-direction: column;
			background-color: $bgColor;
			position: absolute;
			left: 0;
			right: 0;
			//top: $menuHeight - 1px;
			height: 0;
			overflow: hidden;
			transition: height 260ms $easeOutCubic;
			text-align: right;
			.blocks {
				display: flex;
				flex-wrap: wrap;
				>* {
					border-top: $border;
					&:nth-child(2n + 2) {
						border-left: $border;
					}
					text-align: left;
					width: 50%;
					padding: 5vh 0;
					box-sizing: border-box;
					padding-left: $padding;
					a {
						display: flex;
						align-items: center;
					}
				}
			}
		}
		&.expanded {
			color: black;
			background-color: $bgColor;
			.content {
				height: calc(100vh - #{$menuHeight + $padding});
			}
		}
	}
</style>