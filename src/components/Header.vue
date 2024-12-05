<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <header class="header" @mousemove="handleMouseMove">
    <div class="stars"></div>
    <div class="shooting-star"></div>

    <div class="overlay" :style="overlayStyle">
      <img
        src="../assets/perfil.png"
        class="imgPerfil"
        alt=""
        :style="imageStyle"
        data-aos="zoom-in"
      />

      <h1 data-aos="fade-up" data-aos-delay="200">
        Hello World! Meu Nome é
        <span class="highlight">João Vítor</span>
        e sou
      </h1>

      <div class="title-wrapper" data-aos="fade-up" data-aos-delay="400">
        <p class="glitch">Desenvolvedor FullStack</p>
      </div>

      <h2 data-aos="fade-up" data-aos-delay="600">
        Desenvolvedor freelancer especializado em transformar ideias em soluções digitais.
        Comprometido em entregar projetos de qualidade que atendam às necessidades do seu negócio.
      </h2>

      <div class="flex wrap center chips" data-aos="fade-up" data-aos-delay="800">
        <div
          class="chip"
          v-for="(tech, index) in technologies"
          :key="tech.name"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <i :class="tech.icon"></i>
          {{ tech.name }}
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      mouseX: 0,
      mouseY: 0,
      technologies: [
        { name: 'HTML', icon: 'mdi mdi-language-html5' },
        { name: 'CSS', icon: 'mdi mdi-language-css3' },
        { name: 'JavaScript', icon: 'mdi mdi-language-javascript' },
        { name: 'Vue JS', icon: 'mdi mdi-vuejs' },
        { name: 'React', icon: 'mdi mdi-react' },
        { name: 'NuxtJS', icon: 'mdi mdi-nuxt' },
        { name: 'MySQL', icon: 'mdi mdi-database' },
        { name: 'Git', icon: 'mdi mdi-git' },
        { name: 'PostgreSQL', icon: 'mdi mdi-database-outline' },
        { name: 'Firebase', icon: 'mdi mdi-firebase' },
      ],
    }
  },
  computed: {
    overlayStyle() {
      const x = (this.mouseX - window.innerWidth / 2) * 0.01
      const y = (this.mouseY - window.innerHeight / 2) * 0.01
      return {
        transform: `translate(${x}px, ${y}px)`,
      }
    },
    imageStyle() {
      const x = (this.mouseX - window.innerWidth / 2) * 0.02
      const y = (this.mouseY - window.innerHeight / 2) * 0.02
      return {
        transform: `translate(${x}px, ${y}px)`,
      }
    },
  },
  methods: {
    handleMouseMove(e) {
      this.mouseX = e.clientX
      this.mouseY = e.clientY
    },
    createStars() {
      const stars = document.querySelector('.stars')
      if (stars) {
        for (let i = 0; i < 50; i++) {
          const star = document.createElement('div')
          star.className = 'star'
          star.style.left = `${Math.random() * 100}%`
          star.style.top = `${Math.random() * 100}%`
          star.style.animationDelay = `${Math.random() * 3}s`
          stars.appendChild(star)
        }
      }
    },
  },
  mounted() {
    this.createStars()
  },
}
</script>

<style scoped></style>
