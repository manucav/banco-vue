<template>
  <q-page>
    <q-header bordered class="text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-btn unelevated icon="arrow_back_ios_new" to="/home"></q-btn>
          <h1>Cartão</h1>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <h2 class="seus-cartoes">Seus cartões</h2>
    <div class="cartao-container">
      <img class="mastercard-icon" src="../assets/mastercard-mini-icon.svg">
      <h5 class="cartao-titulo">Cartão de crédito Internacional</h5>
      <h3 class="cartao-fatura">Fatura atual</h3>
      <h4 class="cartao-preco-fatura">R$ {{ fatura_cartao }}</h4>
      <div class="cartao-separator-01"></div>
      <div class="cartao-separator-02"></div>
      <h3 class="cartao-vencimento">Venc.fatura</h3>
      <h3 class="cartao-limite">Limite disponível</h3>
      <h4 class="cartao-vencimento-data">{{ vencimento_cartao }}</h4>
      <h4 class="cartao-limite-valor">R$ {{ limite_cartao }}</h4>
      <div class="cartao-separator-03"></div>
      <h5 class="cartao-lancamentos">Ver lançamentos</h5>
      <div class="cartao-separator-04"></div>
      <h5 class="cartao-pagar-fatura">Pagar fatura</h5>
    </div>

    <div class="mini-cartao-container">
      <h6 class="mini-cartao-valor-fatura">R$ {{ fatura_mini_cartao_01 }}</h6>
      <h6 class="mini-cartao-numero">...{{ numero_mini_cartao_01 }}</h6>
      <img class="mini-cartao-icon-mastercard" src="../assets/mastercard-icon.wine.svg">

    </div>

    <div class="mini-cartao-container">
      <h6 class="mini-cartao-valor-fatura">R$ {{ fatura_mini_cartao_02 }}</h6>
      <h6 class="mini-cartao-numero">...{{ numero_mini_cartao_02 }}</h6>
      <img class="mini-cartao-icon-mastercard" src="../assets/mastercard-icon.wine.svg">
    </div>

    <section class="btn-container">
      <q-btn to="/emprestimo" class="btn-opcoes">Pedir empréstimo</q-btn>
      <q-btn to="/extrato" class="btn-opcoes">Extrato</q-btn>
      <q-btn class="btn-opcoes">Bloquear o cartão</q-btn>
      <q-btn class="btn-opcoes">Compras por aproximação</q-btn>
    </section>
  </q-page>
</template>

<script>
import { ref } from 'vue'

export default {
  data: function () {
    return {
      fatura_cartao: '1.552,50',
      vencimento_cartao: '01/08/2024',
      limite_cartao: '3.126,90',
      fatura_mini_cartao_01: '349,79',
      numero_mini_cartao_01: '879',
      fatura_mini_cartao_02: '820,15',
      numero_mini_cartao_02: '562',
    }
  }
}
</script>

<style scoped>
.q-page {
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
  height: 660px;
}

h1 {
  display: inline-block;
  font-size: 1.125rem;
  font-weight: 700;
  margin-left: 80px;
}

.seus-cartoes {
  margin-left: 22px;
}

.cartao-container {
  width: 320px;
  height: 196px;
  border-radius: 10px;
  background-color: var(--mine-shaft-color);
}

.mastercard-icon {
  position: relative;
  top: 3px;
  margin-left: 16px;
}

.cartao-titulo {
  display: inline-block;
  font-size: 0.938rem;
  font-weight: 500;
  color: var(--white-color);
  margin-left: 10px;
  margin-top: 15px;
}

.cartao-fatura {
  font-size: 0.938rem;
  font-weight: 500;
  line-height: 1.125rem;
  color: var(--white-color);
  margin-left: 20px;
  padding-top: 3px;
}

.cartao-preco-fatura {
  font-size: 0.938rem;
  font-weight: 500;
  line-height: 1.125rem;
  color: var(--white-color);
  margin-left: 20px;
}

.cartao-vencimento {
  display: inline-block;
  font-size: 0.938rem;
  font-weight: 500;
  line-height: 1.125rem;
  color: var(--white-color);
  margin-left: 20px;
  padding-top: 6px;

}

.cartao-limite {
  display: inline-block;
  line-height: 1.125rem;
  font-size: 0.938rem;
  font-weight: 500;
  color: var(--white-color);
  margin-left: 10px;
  padding-top: 6px;
  padding-left: 59px;
}

.cartao-vencimento-data {
  display: inline-block;
  font-size: 0.938rem;
  font-weight: 500;
  line-height: 1.125rem;
  margin-left: 20px;
  color: var(--white-color);
}

.cartao-limite-valor {
  display: inline-block;
  font-size: 0.938rem;
  font-weight: 500;
  line-height: 1.125rem;
  color: var(--white-color);
  margin-left: 72px;
}

.cartao-lancamentos {
  display: inline-block;
  font-size: 0.938rem;
  color: var(--white-color);
  margin-left: 20px;
}

.cartao-pagar-fatura {
  display: inline-block;
  font-size: 0.938rem;
  color: var(--white-color);
  margin-left: 10px;
}

.cartao-separator-01 {
  display: inline-block;
  width: 100px;
  border: 5px solid var(--java-color);
  margin-left: 20px;
}

.cartao-separator-02 {
  display: inline-block;
  width: 185px;
  border: 5px solid var(--alto-color);
}

.cartao-separator-03 {
  margin-top: 8px;
  border: 1px solid var(--gallery-color);
}

.cartao-separator-04 {
  display: inline-block;
  width: 33px;
  height: 0px;
  border: 1px solid var(--gallery-color);
  transform: rotate(90deg);
  margin-bottom: 5px;
  margin-left: 10px;
}

h2 {
  font-size: 16px;
  font-weight: 500;
}

.mini-cartao-container {
  width: 320px;
  height: 81px;
  border-radius: 4px;
  background-color: var(--mine-shaft-color);
  margin-top: 20px;
}

.mini-cartao-valor-fatura {
  display: inline-block;
  font-size: 1.125rem;
  font-weight: 500;
  color: var(--white-color);
  margin-left: 20px;
}

.mini-cartao-numero {
  display: inline-block;
  font-size: 1.125rem;
  font-weight: 500;
  color: var(--white-color);
  margin-left: 106px;
  margin-top: 25px;
}

.mini-cartao-icon-mastercard {
  position: relative;
  top: 6px;
  left: 6px;
}

.btn-container {
  margin-top: 16px;
}

.btn-opcoes {
  width: 320px;
  height: 32px;
  border-radius: 4px;
  background-color: var(--mine-shaft-color);
  color: var(--white-color);
  text-transform: initial;
  margin-top: 8px;
  margin-left: 20px;
}
</style>
