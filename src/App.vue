<script setup>
import Contato from './components/Contato.vue'
import Header from './components/Header.vue'
import Projetos from './components/Projetos.vue'
import Servicos from './components/Servicos.vue'
</script>

<template>
  <main>
    <Header></Header>
    <Servicos></Servicos>
    <Projetos />
    <Contato />
    <footer class="footer">
      <div class="footer-container">
        <div class="footer-info">
          <p class="footer-cnpj"><strong>CNPJ:</strong> 51856846000169</p>
          <div class="footer-links">
            <a href="https://jvitor.tech" target="_blank">jvitor.tech</a>
            <a href="https://geniussolucoes.com.br" target="_blank">geniussolucoes.com.br</a>
          </div>
        </div>
        <div class="footer-social">
          <p><strong>Contatos:</strong></p>

          <a href="mailto:jvitorafb@gmail.com">jvitorafb@gmail.com</a>

          <a href="mailto:contato@geniussolucoes.com.br">contato@geniussolucoes.com.br</a>
        </div>
      </div>
    </footer>
  </main>
</template>

<style scoped></style>
