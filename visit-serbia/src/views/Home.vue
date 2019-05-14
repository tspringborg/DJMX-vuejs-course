<template>
  <div class="home">
    <img class="hero" alt="Vue logo" src="../assets/hero.jpg">
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>

<style lang="scss" scoped>
	img.hero {
		width: 100vw;
		height: auto;
	}
</style>
