<script setup>
import Contato from './components/Contato.vue'
import Header from './components/Header.vue'
import Projetos from './components/Projetos.vue'
import Servicos from './components/Servicos.vue'
import Form from './components/Form.vue'
import Navbar from './components/Navbar.vue'
import ScrollTop from './components/ScrollTop.vue'
</script>

<template>
  <Navbar />
  <Header></Header>
  <Servicos></Servicos>
  <Projetos />
  <Contato style="margin-top:100px;" />
  <Form />
  <footer>
    <span>© 2024 Made with ❤ by João Vítor</span>
    <span>Genius Soluções CNPJ 51.856.846/0001-06</span>
  </footer>
  <ScrollTop />
</template>

<style scoped></style>
