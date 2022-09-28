<template>
  <div id="app">
    <ModalPrincipal>
      <template v-slot:header="{ logo }">
        <p>
          Esse é o header: <strong>{{ logo }}</strong>
        </p>
      </template>
      <template v-slot:default="{ user }">
        {{ user.nome }}
        <p>teste</p>
        <button>Comprar</button>
      </template>
      <template #footer> <p>Esse é o footer</p> </template>
    </ModalPrincipal>
  </div>
</template>

<script>
import ModalPrincipal from "./components/ModalPrincipal.vue";
export default {
  name: "App",
  components: {
    ModalPrincipal,
  },
};
</script>

<style scoped>
strong {
  font-size: 2rem;
}
</style>
