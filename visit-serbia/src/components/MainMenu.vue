<template>
    <div class="main-menu">

    	<div class="burger" @click="handleClick">
    		<div :class="`inner ${expanded ? ' active' : ''}`"><i></i></div>
    	</div>
    	<div ref="expanded">
    		<div v-for="(item, index) in items">
	    		<router-link :to="item.link">{{item.label}}</router-link>
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
        methods: {
        	handleClick() {
        		this.expanded = !this.expanded
        	}
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
	@import '../assets/style/vars';

	.main-menu {
		.burger {
			position: fixed;
			right: $padding;
			top: $padding;
			height: 50px;
			width: 50px;
			//width: 50px;
			.inner {
				@include burger-menu(2px, 5px, 'active', #000000);	
			}
		}
		//display: flex;
		border-bottom: 1px solid grey;
		a{
			text-decoration: none;
		}
	}
</style>