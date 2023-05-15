<template>
  <q-page>
    <q-header bordered class="text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-btn unelevated icon="arrow_back_ios_new" to="/home"></q-btn>
          <h1 class="conta-title">Conta</h1>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <main>
      <q-avatar size="100px" class="conta-icon">
        <img src="../assets/icon.png">
      </q-avatar>
      <h2 id="conta-user">{{ usuário }}</h2>
      <h3>{{ nome }}</h3>
      <h3>{{ local }}</h3>
    </main>

    <section>
      <div class="container-banco">
        <p class="agencia-conta">Agência: {{ agência }} | Conta: {{ conta }}</p>
        <p class="instituicao">Instituição: {{ instituição }}</p>
      </div>
    </section>

    <section>
      <h4 class="informacoes-pessoais-title">Informações Pessoais</h4>
      <div class="container-informacoes-pessoais">
        <h5 class="endereco-title">Endereço</h5>
        <p class="subtitle">{{ endereço }}</p>
        <h5 class="email-title">Email</h5>
        <p class="subtitle">{{ email }}</p>
        <h5 class="telefone-title">Telefone</h5>
        <p class="subtitle">{{ telefone }}</p>
      </div>
    </section>
  </q-page>
</template>

<script>
import { ref } from 'vue'

export default {
  data: function () {
    return {
      usuário: '@ferkatyacar',
      nome: 'Katya Ferreira Carvalho',
      local: 'Vitória, ES',
      agência: '0009',
      conta: '8378425-8',
      instituição: '240 - Bank App S.A.',
      endereço: 'Av. Fernando Ferrari 1204, Vitória, 589, BR',
      email: 'katya.ferreira@outlook.com',
      telefone: '+55 (27) 998659-6754',
    }
  }
}
</script>

<style scoped>
.q-page {
  overflow-x: hidden;
  background-color: var(--white-color);
}

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

.conta-title {
  display: inline-block;
  margin-left: 85px;
}

h1 {
  font-size: 1.125rem;
  font-weight: 700;
}

.conta-icon {
  display: block;
  margin: 0 auto;
  margin-top: 22px;
}

h2 {
  text-align: center;
  letter-spacing: normal;
  font-size: 1rem;
  font-weight: 700;
  line-height: 2rem;
}

#conta-user {
  margin: 0 auto;
}

h3 {
  text-align: center;
  font-size: 1rem;
  font-weight: 400;
  line-height: 2rem;
  letter-spacing: 0.0125em;
}

.container-banco {
  width: 328px;
  height: 66px;
  margin-top: 20px;
  border-radius: 10px;
  background-color: var(--mine-shaft-color);
}

.agencia-conta {
  text-align: center;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--white-color);
  padding-top: 12px;
  margin: 0 auto;
}

.instituicao {
  text-align: center;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--white-color);
}

.informacoes-pessoais-title {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--black-color);
  margin-top: 62px;
  margin-left: 16px;
}

.container-informacoes-pessoais {
  width: 328px;
  height: 182px;
  margin-top: 8px;
  margin-left: 16px;
  border-radius: 10px;
  background-color: var(--mine-shaft-color);
}

.email-title,
.telefone-title,
.endereco-title {
  font-size: 0.875rem;
  line-height: 1.500rem;
  color: var(--alto-color);
}

.endereco-title {
  line-height: 1.900rem;
}

.subtitle {
  font-size: 0.875rem;
  font-weight: 500;
  text-align: left;
  color: var(--white-color);
}

.email-title,
.endereco-title,
.telefone-title,
.subtitle {
  margin-left: 16px;
}
</style>
