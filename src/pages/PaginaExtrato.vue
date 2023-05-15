<template>
  <q-page>
    <q-header class="text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-btn unelevated icon="arrow_back_ios_new" to="/home"></q-btn>
          <h1>Extrato</h1>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <section>
      <h2 class="saldo-title">Saldo do dia</h2>
      <h2 class="saldo-valor">R$ {{ saldo_01 }}</h2>
      <h2 class="pix">PIX enviado</h2>
      <h2 class="pix-hora">{{ hora_01 }}</h2>
      <h2 class="pix-nome">{{ nome_01 }}</h2>
      <h2 class="instituicao-bancaria">Instituição: {{ instituição_01 }}</h2>
      <h2 class="total-extrato">Total</h2>
      <h2 class="total-extrato-valor-negativo">-R$ {{ total_01 }}</h2>
    </section>
    <section>
      <h2 class="data-pix">{{ data_01 }}</h2>
      <h2 class="saldo-title">Saldo do dia</h2>
      <h2 class="saldo-valor">R$ {{ saldo_02 }}</h2>
      <h2 class="pix">PIX enviado</h2>
      <h2 class="pix-hora">{{ hora_02 }}</h2>
      <h2 class="pix-nome">{{ nome_02 }}</h2>
      <h2 class="instituicao-bancaria">Instituição: {{ instituição_02 }}</h2>
      <h2 class="total-extrato">Total</h2>
      <h2 class="total-extrato-valor-positivo">+R$ {{ total_02 }}</h2>
    </section>
    <section>
      <h2 class="data-pix">{{ data_02 }}</h2>
      <h2 class="saldo-title">Saldo do dia</h2>
      <h2 class="saldo-valor">R$ {{ saldo_03 }}</h2>
      <h2 class="pix">PIX enviado</h2>
      <h2 class="pix-hora">{{ hora_03 }}</h2>
      <h2 class="pix-nome">{{ nome_03 }}</h2>
      <h2 class="instituicao-bancaria">Instituição: {{ instituição_03 }}</h2>
      <h2 class="total-extrato">Total</h2>
      <h2 class="total-extrato-valor-positivo">+R$ {{ total_03 }}</h2>
    </section>
    <section>
      <h2 class="data-pix">{{ data_03 }}</h2>
      <h2 class="saldo-title">Saldo do dia</h2>
      <h2 class="saldo-valor">R$ {{ saldo_04 }}</h2>
      <h2 class="pix">PIX enviado</h2>
      <h2 class="pix-hora">{{ hora_04 }}</h2>
      <h2 class="pix-nome">{{ nome_04 }}</h2>
      <h2 class="instituicao-bancaria">Instituição: {{ instituição_04 }}</h2>
      <h2 class="total-extrato">Total</h2>
      <h2 class="total-extrato-valor-negativo">-R$ {{ total_04 }}</h2>
    </section>
    <section>
      <h2 class="data-pix">{{ data_04 }}</h2>
      <h2 class="saldo-title">Saldo do dia</h2>
      <h2 class="saldo-valor">R$ {{ saldo_05 }}</h2>
      <h2 class="pix">PIX enviado</h2>
      <h2 class="pix-hora">{{ hora_05 }}</h2>
      <h2 class="pix-nome">{{ nome_05 }}</h2>
      <h2 class="instituicao-bancaria">Instituição: {{ instituição_05 }}</h2>
      <h2 class="total-extrato">Total</h2>
      <h2 class="total-extrato-valor-positivo">+R$ {{ total_05 }}</h2>
    </section>
  </q-page>
</template>

<script>
import { ref } from 'vue'

export default {
  data: function () {
    return {
      saldo_01: '55,63',
      hora_01: '23:36',
      nome_01: 'Katya Ferreira Carvalho',
      instituição_01: '240 - Bank App S.A.',
      total_01: '31,08',
      data_01: '14 Jun 2022',
      saldo_02: '86,71',
      hora_02: '11:07',
      nome_02: 'Katya Ferreira Carvalho',
      instituição_02: '240 - Bank App S.A.',
      total_02: '64.01',
      data_02: '12 Jun 2022',
      saldo_03: '22,70',
      hora_03: '14:21',
      nome_03: 'Katya Ferreira Carvalho',
      instituição_03: '240 - Bank App S.A.',
      total_03: '22,70',
      data_03: '12 Jun 2022',
      saldo_04: '00,00',
      hora_04: '09:45',
      nome_04: 'Katya Ferreira Carvalho',
      instituição_04: '240 - Bank App S.A.',
      total_04: '22,70',
      data_04: '12 Jun 2022',
      saldo_05: '22,70',
      hora_05: '18:00',
      nome_05: 'Katya Ferreira Carvalho',
      instituição_05: '240 - Bank App S.A.',
      total_05: '22,70',
    }
  }
}
</script>

<style scoped>
.q-header {
  width: 360px;
  height: 56px;
  background-color: var(--cod-gray-color);
}

.q-toolbar {
  width: 360px;
  height: 50px;
}

main {
  width: 360px;
}

.q-page {
  background-color: var(--white-color);
}

h1 {
  display: inline-block;
  font-size: 1.25rem;
  font-weight: 600;
  margin-left: 80px;
}

h2 {  
  font-size: 0.938rem;
  line-height: 3.3;
  color: var(--black-color);
}

.saldo-title,
.saldo-valor,
.pix,
.pix-hora,
.pix-nome,
.total-extrato,
.total-extrato-valor-negativo,
.total-extrato-valor-positivo {
  display: inline-block;
}

.saldo-title {
  font-weight: 400;
  margin-left: 20px;
}

.saldo-valor {
  font-weight: 400;
  padding-left: 174px;
}

.pix {
  font-weight: 400;
  margin-left: 20px;
}

.pix-hora {
  padding-left: 191px;
  font-weight: 400;
}

.pix-nome {
  line-height: 0;
  font-weight: 400;
  margin-left: 20px;
}

.instituicao-bancaria {
  line-height: 1;
  font-weight: 400;
  margin-left: 20px;
}

.total-extrato {
  font-weight: 400;
  margin-left: 20px;
}

.total-extrato-valor-negativo {
  padding-left: 225px;
  font-weight: 400;
  color: var(--red-color);
}

.data-pix {
  text-align: center;
  font-weight: 500;
  margin-top: 20px;
}

.total-extrato-valor-positivo {
  font-weight: 400;
  color: var(--japanese-laurel-color);
  padding-left: 225px;
}</style>
