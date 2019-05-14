<template>
    <div class="page">
    	<slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'BasePage',
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
	@import '../assets/style/vars';
	.page {
		padding: $padding;
	}
</style>