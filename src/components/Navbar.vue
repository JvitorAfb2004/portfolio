<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <nav class="navbar" :class="{ 'navbar-scrolled': isScrolled }">
    <div class="nav-content">
      <div class="nav-logo">
        <span>JVitor Dev</span>
      </div>
      <div class="nav-links">
        <a href="#servicos" class="nav-link">Serviços</a>
        <a href="#projetos" class="nav-link">Projetos</a>
        <a href="#form" class="nav-button">Contato</a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isScrolled: false,
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
      this.isScrolled = window.scrollY > 50
    },
  },
}
</script>
