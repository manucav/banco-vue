<template>
  <q-layout view="hHr lpR fFf">

    <q-drawer v-model="rightDrawerOpen" side="right" overlay behavior="mobile" bordered>
      <!-- drawer content -->
    </q-drawer>
    <div class="divisor"></div>
    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>

</script>

<style>

</style>