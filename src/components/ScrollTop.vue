<template>
  <button
    class="scroll-top"
    :class="{ 'show-scroll': showScroll }"
    @click="scrollToTop"
  >
    <i class="mdi mdi-arrow-up"></i>
  </button>
</template>

<script>
export default {
  data() {
    return {
      showScroll: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.showScroll = window.scrollY > 300
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }
}
</script>
