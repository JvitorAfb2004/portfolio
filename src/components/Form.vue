<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="form-container" id="form" data-aos="fade-up">
    <div class="form-header">
      <h1 class="form-title">Entre em Contato</h1>
      <p class="form-subtitle">Vamos transformar sua ideia em realidade</p>
    </div>

    <form @submit.prevent="enviarFormulario" class="animated-form">
      <div class="form-group" data-aos="fade-up" data-aos-delay="100">
        <label for="nome">
          <i class="mdi mdi-account"></i>
          Seu Nome
        </label>
        <input type="text" id="nome" v-model="form.nome" placeholder="Digite seu nome" required />
      </div>

      <div class="form-group" data-aos="fade-up" data-aos-delay="200">
        <label for="email">
          <i class="mdi mdi-email"></i>
          Seu Email
        </label>
        <input
          type="email"
          id="email"
          v-model="form.email"
          placeholder="Digite seu email"
          required
        />
      </div>

      <div class="form-group" data-aos="fade-up" data-aos-delay="300">
        <label for="telefone">
          <i class="mdi mdi-phone"></i>
          Seu Telefone
        </label>
        <input
          type="tel"
          id="telefone"
          v-model="form.telefone"
          placeholder="Digite seu telefone"
          required
        />
      </div>

      <div class="form-group" data-aos="fade-up" data-aos-delay="400">
        <label for="mensagem">
          <i class="mdi mdi-message"></i>
          Sua Mensagem
        </label>
        <textarea
          id="mensagem"
          v-model="form.mensagem"
          placeholder="Digite sua mensagem"
          rows="5"
          required
        ></textarea>
      </div>

      <button type="submit" class="btn-submit" data-aos="fade-up" data-aos-delay="500">
        <span>Enviar Mensagem</span>
        <i class="mdi mdi-send"></i>
      </button>
    </form>

    <div :class="['toast', toastType, { show: toastVisible }]">
      {{ toastMessage }}
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      toastVisible: false,
      toastMessage: '',
      toastType: '', // "error" ou vazio para sucesso
      form: {
        nome: '',
        email: '',
        telefone: '',
        mensagem: '',
      },
      showErrors: false,
    }
  },
  methods: {
    showToast(message, type) {
      this.toastMessage = message
      this.toastType = type === 'error' ? 'error' : ''
      this.toastVisible = true

      // Esconde o toast após 3 segundos
      setTimeout(() => {
        this.toastVisible = false
      }, 3000)
    },
    isEmailValid(email) {
      const regex = /.+@.+\..+/
      return regex.test(email)
    },
    isPhoneValid(phone) {
      const regex = /^[0-9]{10,11}$/
      return regex.test(phone)
    },
    async enviarFormulario() {
      const { nome, email, telefone, mensagem } = this.form

      // Validar campos
      if (!nome || !this.isEmailValid(email) || !this.isPhoneValid(telefone) || !mensagem) {
        this.showErrors = true

        this.showToast('Preencha os campos corretamente', 'error')
        return
      }

      try {
        await axios.post('https://api.geniussolucoes.com.br/send-email', this.form)
        this.showToast('Email enviado com sucesso!', 'success')
        this.form = { nome: '', email: '', telefone: '', mensagem: '' }
        this.showErrors = false
      } catch (error) {
        console.error('Erro ao enviar o email:', error)
        this.showToast('Erro ao enviar o email.', 'error')
      }
    },
  },
}
</script>

<style></style>
