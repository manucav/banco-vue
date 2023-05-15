<template>
  <q-page>
    <q-header bordered class="text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-btn unelevated icon="arrow_back_ios_new" to="/home"></q-btn>
          <h1>Empréstimo</h1>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <section>
      <h2>Simulação de empréstimo</h2>
      <h3>De quanto você precisa?</h3>
      <div class="q-pl-md q-pr-md q-pt-sm">
        <q-badge color="teal-7">
          Valor: R$ {{ emprestimo }}
        </q-badge>
        <q-slider v-model="emprestimo" :min="150" :max="30000" color="teal-5  " track-color="grey-1" />
      </div>
      <h5>R$ 150</h5>
      <h5 class="valor-maximo-emprestimo">R$ 30.000</h5>
    </section>

    <section>
      <h3 class="titulo-meses">Em quantos meses quer pagar?</h3>
      <div class="q-pl-md q-pr-md">
        <q-badge color="teal-7">
          {{ meses }} meses
        </q-badge>
        <q-slider v-model="meses" :min="6" :max="48" color="teal-5  " track-color="grey-1" />
      </div>
      <h5>6 meses</h5>
      <h5 class="valor-maximo-meses">48 meses</h5>
    </section>

    <section class="container-parcelas">
      <h4 class="parcelas-titulo">Parcela mensal aproximada</h4>
      <h4 class="parcelas-quantidade-meses">{{ meses }}x</h4>
      <h4 class="parcelas-valor-emprestimo">R$ {{ Math.round((emprestimo * ((1 + juros) ** meses) * juros / ((1 + juros)
        ** meses - 1)))
      }}</h4>
      <div class="separator"></div>
    </section>
    <h6>Taxa de 8.34% a.m.</h6>
  </q-page>
</template>


<script>
import { ref } from 'vue'

export default {
  setup() {
    return {
      emprestimo: ref(150),
      meses: ref(6),
      juros: ref(0.0834),
    }
  },
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

h1 {
  display: inline-block;
  font-size: 1.125rem;
  font-weight: 700;
  margin-left: 60px;
}

h2 {
  text-align: center;
  font-size: 1rem;
  font-weight: 500;
}

h3 {
  text-align: center;
  font-size: 0.875rem;
  line-height: 2.5;
  font-weight: 500;
}

h4 {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 600;
}

h5 {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 600;
  margin-left: 20px;
}

.valor-maximo-meses {
  margin-left: 200px;
}

.valor-maximo-emprestimo {
  margin-left: 210px;
}

.titulo-meses {
  margin-top: 40px;
}

.container-parcelas {
  width: 340px;
  height: 145px;
  margin-top: 42px;
  border-radius: 5px;
  background-color: var(--teal-second-color);
}

.parcelas-titulo {
  display: block;
  text-align: center;
  color: var(--white-color);
  font-size: 1rem;
  font-weight: 400;
  padding-top: 10px;
}

.parcelas-quantidade-meses {
  display: block;
  text-align: center;
  color: var(--white-color);
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
}

.parcelas-valor-emprestimo {
  display: block;
  text-align: center;
  font-size: 1.25rem;
  font-weight: bold;
  color: var(--white-color);
}

.separator {
  border: 1px solid var(--white-color);
}

h6 {
  text-align: right;
  color: var(--teal-color);
  font-size: 0.875rem;
  margin-top: 7px;
  margin-right: 11px;
}
</style>