<template>
  <q-page>
    <q-header bordered>
      <q-toolbar>
        <q-toolbar-title>
          <q-btn unelevated icon="arrow_back_ios_new" to="/home"></q-btn>
          <h1>Pix</h1>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <section>
      <div>
        <h2>Transferir ou pagar QR Code</h2>
      </div>
      <button class="pix-btn">Transferir</button>
      <button class="pix-btn">Transferir ou pagar QR Code</button>
      <button class="pix-btn">Pagar com Pix Copia e Cola</button>
    </section>

    <section>
      <div>
        <h2>Receber</h2>
      </div>
      <button class="pix-btn">Receber com QR Code</button>
      <button class="pix-btn">Receber com chave Pix</button>
    </section>

    <div>
      <h2>Minhas chaves</h2>
    </div>
    <div class="chaves-container">
      <q-list bordered separator>
        <q-item clickable v-ripple to="/home">
          <q-item-section>
            <q-item-label caption class="titulo-label">CHAVE ALEATÓRIA</q-item-label>
            <q-item-label class="subtitulo-label">{{ chave }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </div>

    <div class="chaves-container">
      <q-list bordered separator>
        <q-item clickable v-ripple to="/home">
          <q-item-section>
            <q-item-label caption class="titulo-label">E-MAIL</q-item-label>
            <q-item-label class="subtitulo-label">{{ email }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </div>

    <div class="chaves-container">
      <q-list bordered separator>
        <q-item clickable v-ripple to="/home">
          <q-item-section>
            <q-item-label caption class="titulo-label">CPF</q-item-label>
            <q-item-label class="subtitulo-label">{{ cpf }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </div>

    <div class="chaves-container">
      <q-list class="celular" bordered separator>
        <q-item clickable v-ripple to="/home">
          <q-item-section>
            <q-item-label caption class="titulo-label">CELULAR</q-item-label>
            <q-item-label class="subtitulo-label">{{ celular }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </div>

  </q-page>
</template>

<script>
import { ref } from 'vue'

export default {
  data: function () {
    return {
      chave: '1bda6a88-bf87-4e76-00cd-5a77ef9dc763',
      email: 'katya.ferreira@outlook.com',
      cpf: '087.470.557-92',
      celular: '+55 (27) 998659-6754',
    }
  }
}
</script>

<style scoped>
.q-header {
  width: 360px;
  height: 56px;
  background-color: var(--mine-shaft-color);
}

.q-toolbar {
  width: 360px;
  height: 50px;
}

main {
  width: 360px;
}

h1 {
  display: inline-block;
  font-size: 1.25rem;
  font-weight: bold;
  margin-left: 85px;
}

h2 {
  font-size: 0.875rem;
  font-weight: 500;
  margin-left: 16px;
  margin-bottom: -16px;
}

.pix-btn {
  width: 320px;
  height: 32px;
  margin-top: 8px;
  margin-left: 16px;
  border-radius: 4px;
  background-color: var(--mine-shaft-color);
  border: none;
  color: var(--white-color);
}


.chaves-container {
  max-width: 320px;
  margin-top: 8px;
  background-color: var(--mine-shaft-color);
  border-radius: 4px;
}


.titulo-label {
  font-weight: 500;
  font-size: 0.75rem;
  color: var(--alto-color);
  margin: 0;
}

.subtitulo-label {
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--white-color);
  margin: 0;
  padding-top: 6px;
}
</style>
