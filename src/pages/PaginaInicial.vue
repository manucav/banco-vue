<template>
  <q-page>
    <q-layout view="hHr lpR fFr">

      <q-header class="text-white">
        <q-toolbar>
          <q-toolbar-title>
            <q-avatar>
              <img src="../assets/icon.png">
            </q-avatar>
            <h1 class="user">Olá, {{ usuario }}</h1>
          </q-toolbar-title>

          <q-btn dense flat round icon="menu" @click="toggleRightDrawer" />
        </q-toolbar>
      </q-header>


      <q-drawer v-model="rightDrawerOpen" side="right" overlay behavior="mobile" bordered>
        <!-- drawer content -->
        <div class="q-pt-sm" style="max-width: 393px">
          <q-list style="max-width: 393px">
            <q-item clickable>
              <q-item-section avatar>
                <q-icon name="help" />
              </q-item-section>

              <q-item-section>Me ajuda</q-item-section>

              <q-item-section avatar>
                <q-icon name="chevron_right" />
              </q-item-section>
            </q-item>

            <q-separator spaced />

            <q-item clickable>
              <q-item-section avatar>
                <q-icon name="person" />
              </q-item-section>

              <q-item-section>Meus Dados</q-item-section>

              <q-item-section avatar>
                <q-icon name="chevron_right" />
              </q-item-section>
            </q-item>

            <q-separator spaced />

            <q-item clickable>
              <q-item-section avatar>
                <q-icon name="receipt" />
              </q-item-section>

              <q-item-section>Informe de rendimentos</q-item-section>

              <q-item-section avatar>
                <q-icon name="chevron_right" />
              </q-item-section>
            </q-item>

            <q-separator spaced />

            <q-item clickable>
              <q-item-section avatar>
                <q-icon name="settings" />
              </q-item-section>

              <q-item-section>Configurar app</q-item-section>

              <q-item-section avatar>
                <q-icon name="chevron_right" />
              </q-item-section>
            </q-item>

            <q-separator spaced />

            <q-item clickable>
              <q-item-section avatar>
                <q-icon name="shield" />
              </q-item-section>

              <q-item-section>Segurança</q-item-section>

              <q-item-section avatar>
                <q-icon name="chevron_right" />
              </q-item-section>
            </q-item>

            <q-separator spaced />

            <q-item clickable>
              <q-item-section avatar>
                <q-icon name="pix" />
              </q-item-section>

              <q-item-section>Configurar chaves Pix</q-item-section>

              <q-item-section avatar>
                <q-icon name="chevron_right" />
              </q-item-section>
            </q-item>

            <q-separator spaced />

            <q-item clickable>
              <q-item-section avatar>
                <q-icon name="store" />
              </q-item-section>

              <q-item-section>Pedir conta PJ</q-item-section>

              <q-item-section avatar>
                <q-icon name="chevron_right" />
              </q-item-section>
            </q-item>

            <q-separator spaced />

            <q-item clickable>
              <q-item-section avatar>
                <q-icon name="notifications" />
              </q-item-section>

              <q-item-section>Notificações</q-item-section>

              <q-item-section avatar>
                <q-icon name="chevron_right" />
              </q-item-section>
            </q-item>

            <q-separator spaced />

            <q-item clickable>
              <q-item-section avatar>
                <q-icon name="payments" />
              </q-item-section>

              <q-item-section>Configurar conta</q-item-section>

              <q-item-section avatar>
                <q-icon name="chevron_right" />
              </q-item-section>
            </q-item>

            <q-separator spaced />

            <q-item clickable>
              <q-item-section avatar>
                <q-icon name="credit_card" />
              </q-item-section>

              <q-item-section>Configurar cartão</q-item-section>

              <q-item-section avatar>
                <q-icon name="chevron_right" />
              </q-item-section>
            </q-item>

            <q-separator spaced />

            <q-item clickable>
              <q-item-section avatar>
                <q-icon name="description" />
              </q-item-section>

              <q-item-section>Sobre</q-item-section>

              <q-item-section avatar>
                <q-icon name="chevron_right" />
              </q-item-section>
            </q-item>

            <q-separator spaced />

            <q-item clickable>
              <q-item-section avatar>
                <q-icon name="keyboard_return" />
              </q-item-section>

              <q-item-section>Sair do aplicativo</q-item-section>

              <q-item-section avatar>
                <q-icon name="chevron_right" />
              </q-item-section>
            </q-item>
          </q-list>
        </div>
      </q-drawer>

      <div class="container-principal">
        <h2 class="saldo-bank">Saldo Bank</h2>
        <q-btn to="/emprestimo" color="white" text-color="black" no-caps class="emprestimo-btn">
          <div>Empréstimo</div>
        </q-btn>
        <h2 class="saldo-valor">R$ {{ saldo }}</h2>

        <div class="btn-menu">
          <q-btn to="/conta" round color="white" text-color="black" icon="group" size="16px" class="conta-btn" />
          <q-btn to="/cartao" round color="white" text-color="black" icon="wallet" size="16px" class="cartao-btn" />
          <q-btn to="/pix" round color="white" text-color="black" icon="pix" size="16px" class="pix-btn" />
          <q-btn to="/extrato" round color="white" text-color="black" icon="receipt" size="16px" class="extrato-btn" />
          <q-btn round color="white" text-color="black" icon="attach_money" size="16px" class="cripto-btn" />
        </div>
        <div class="text-menu">
          <h3 class="conta-text">Conta</h3>
          <h3 class="cartao-text">Cartão </h3>
          <h3 class="pix-text">Área Pix </h3>
          <h3 class="extrato-text">Extrato</h3>
          <h3 class="cripto-text">Cripto</h3>
        </div>
      </div>

      <main class="main-section">
        <h4 class="investimentos-title">Investimentos</h4>
        <p>A revolução dos investimentos no Brasil existe faz tempo. Descubra que investir pode ser simples, fácil e sem
          complicaçoes.</p>
        <div class="separator"></div>
        <h4>Seguros</h4>
        <p>Proteção para você cuidar do que importa</p>
        <button class="btn-section">Seguro vida</button>
        <button class="btn-section">Seguro celular</button>
        <div class="separator-seguro"></div>
        <h4>Shopping</h4>
        <p>Tenha vantagens exclusivas das nossas marcas preferidas!</p>
        <div class="separator"></div>
        <h4>WhatsApp</h4>
        <p>Pagamentos seguros, rápidos e sem tarifa. Em qualquer dia e a qualquer hora, mesmo no final de semana e de
          madrugada.</p>
        <div class="separator"></div>
        <h4>Indique seus amigos</h4>
        <p>Mostre aos seus amigos como é facil ter uma vida sem burocracia.</p>
        <div class="separator"></div>
        <h4>Doação</h4>
        <p>Para fortalecer nossas iniciativas ao combate ao coronavírus, estendemos este convite a você também.</p>
        <div class="separator"></div>
        <h4>Transferência Internacional</h4>
        <p>Envie e receba dinheiro do exterior de maneira rápida e segura.</p>
      </main>

    </q-layout>
  </q-page>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const rightDrawerOpen = ref(false)

    return {
      rightDrawerOpen,
      toggleRightDrawer() {
        rightDrawerOpen.value = !rightDrawerOpen.value
      }
    }
  },
  data: function () {
    return {
      saldo: '514,00',
      usuario: ' @ferkatyacar'
    }
  }
}

</script>

<style scoped>
.q-page {
  overflow-x: hidden;
}

.q-header {
  width: 360px;
  height: 64px;
  background-color: var(--mine-shaft-color);
  margin-bottom: 64px;
}

.q-toolbar {
  width: 360px;
  height: 64px;
}

.q-toolbar .q-avatar {
  font-size: 3rem;
}

h1 {
  font-size: 1rem;
}

.user {
  display: inline-block;
  margin-left: 10px;
}

.container-principal {
  width: 360px;
  height: 172px;
  background-color: var(--mine-shaft-color);
  color: var(--white-color);
  margin-top: 64px;
  padding: 0 16px;
}

h2 {
  font-size: 0.875rem;
  line-height: 2rem;
  letter-spacing: normal;
}

.saldo-valor {
  position: relative;
  bottom: 25px;
  font-weight: 500;
}

.saldo-bank {
  display: inline-block;
}

.text-menu h3 {
  display: inline;
  font-size: 0.75rem;
  line-height: 1.875rem;
}

.emprestimo-btn {
  width: 148px;
  height: 32px;
  margin-top: 21px;
  margin-left: 84px;
  border-radius: 4px;
}

.btn-menu {
  width: 370px;
}

.pix-btn,
.cartao-btn,
.extrato-btn,
.cripto-btn {
  margin-left: 32px;
}

.text-menu {
  width: 370px
}

.conta-text {
  margin-left: 6px;
}

.cartao-text {
  margin-left: 42px;
}

.pix-text {
  margin-left: 34px;
}

.extrato-text {
  margin-left: 30px;
}

.cripto-text {
  margin-left: 37px;
}

.main-section {
  width: 360px;
  padding: 0 16px;
}

.investimentos-title {
  margin-top: 16px;
}

.separator {
  border-top: 1px solid var(--mercury-color);
}

h4 {
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 0.914rem;
  color: var(--black-color);
  margin-top: 16px;
}

p { 
  font-size: 0.813rem;
  line-height: 0.938rem;
  text-align: justify;
  color: var(--boulder-color);
  margin-top: 8px;
}

.btn-section {
  width: 328px;
  height: 32px;
  font-size: 0.813rem;
  color: var(--white-color);
  background-color: var(--prussian-blue-color);
  border-radius: 5px;
  margin-top: 10px;
}

.separator-seguro {
  border-top: 1px solid var(--mercury-color);
  margin-top: 15px;
}
</style>
