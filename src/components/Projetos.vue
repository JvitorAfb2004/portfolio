<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="projetos" id="projetos">
    <p class="subtitle">Meu trabalho</p>
    <p class="title">Veja os projetos em destaque</p>

    <div class="itens">
      <a href="https://alugueisdovale.geniussolucoes.com.br" target="_blank">
        <div class="card">
          <div class="image-wrapper">
            <div class="skeleton-loading"></div>
            <img
              loading="lazy"
              src="https://camo.githubusercontent.com/b0686accb7df3f9cc8dcbcfc64300e71bca956027f941560b58de53d44b213e2/68747470733a2f2f666972656261736573746f726167652e676f6f676c65617069732e636f6d2f76302f622f67656e6975732d736161732e61707073706f742e636f6d2f6f2f616c756775656973253246496d6167656d253230646f25323057686174734170702532306465253230323032342d31312d313325323025433325413028732925323031332e34322e30325f61366431643630372e6a70673f616c743d6d6564696126746f6b656e3d64353466353765622d333336662d346534382d393238342d663631353066663239346166"
              alt=""
              @load="handleImageLoad"
              class="project-image"
            />
          </div>
          <span>Alugueis do Vale</span>
          <p>Marketplace de imóveis</p>
        </div>
      </a>
      <a target="_blank" href="https://cardap.shop">
        <div class="card">
          <div class="image-wrapper">
            <div class="skeleton-loading"></div>
            <img
              loading="lazy"
              src="https://firebasestorage.googleapis.com/v0/b/genius-saas.appspot.com/o/Imagem%20do%20WhatsApp%20de%202024-11-15%20%C3%A0(s)%2003.50.07_c27d26b7.jpg?alt=media&token=78e543d3-8d23-43af-93e9-57dc7f0c6a11"
              alt=""
              @load="handleImageLoad"
              class="project-image"
            />
          </div>
          <span>Cardap</span>
          <p>Sistema Delivery</p>
        </div>
      </a>

      <a href="https://minesbet.geniussolucoes.com.br/" target="_blank">
        <div class="card">
          <div class="image-wrapper">
            <div class="skeleton-loading"></div>
            <img
              loading="lazy"
              src="https://firebasestorage.googleapis.com/v0/b/genius-saas.appspot.com/o/Imagem%20do%20WhatsApp%20de%202024-11-15%20%C3%A0(s)%2003.48.47_1dff1a3d.jpg?alt=media&token=453fe2a7-53db-4121-aaf5-615ef59c199a"
              alt=""
              @load="handleImageLoad"
              class="project-image"
            />
          </div>
          <span>Mines Bet</span>
          <p>Jogo de Cassino (Fake)</p>
        </div>
      </a>

      <a href="https://geniustodo.geniussolucoes.com.br/" target="_blank">
        <div class="card">
          <div class="image-wrapper">
            <div class="skeleton-loading"></div>
            <img
              loading="lazy"
              src="https://media.licdn.com/dms/image/v2/D4D22AQGuLelyQuMu4g/feedshare-shrink_1280/feedshare-shrink_1280/0/1731556128524?e=1734566400&v=beta&t=klvkYK9wC-2CeSSRkAasHtfqJmQ_VTDJCu-AnbCBfOM"
              alt=""
              @load="handleImageLoad"
              class="project-image"
            />
          </div>
          <span>To Do</span>
          <p>Lista de tarefas</p>
        </div>
      </a>

      <a href="https://locadora.geniussolucoes.com.br/" target="_blank">
        <div class="card">
          <div class="image-wrapper">
            <div class="skeleton-loading"></div>
            <img
              loading="lazy"
              src="../assets/img.jpg"
              alt=""
              @load="handleImageLoad"
              class="project-image"
            />
          </div>
          <span>ABC Locadora</span>
          <p>Site locadora de veículos</p>
        </div>
      </a>
      <a href="https://vagas.geniussolucoes.com.br/" target="_blank">
        <div class="card">
          <div class="image-wrapper">
            <div class="skeleton-loading"></div>
            <img
              loading="lazy"
              src="../assets/Screenshot.png"
              alt=""
              @load="handleImageLoad"
              class="project-image"
            />
          </div>
          <span>Vagas</span>
          <p>Portal de vagas</p>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleImageLoad(event) {
      event.target.classList.add('loaded')
    }
  }
}
</script>

<style scoped>
.image-wrapper {
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
  border-radius: 8px;
}

.skeleton-loading {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.05) 25%,
    rgba(255, 255, 255, 0.1) 50%,
    rgba(255, 255, 255, 0.05) 75%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite linear;
}

.project-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-image.loaded {
  opacity: 1;
}

@keyframes shimmer {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}
</style>
