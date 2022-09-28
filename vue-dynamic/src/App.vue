<template>
  <div id="app">
    <button @click="componenteAtivo = 'AulaDescricao'">Descricao</button>
    <button @click="componenteAtivo = 'AulaDownload'">download</button>

    <component :is="componenteAtivo"></component>
  </div>
</template>

<script>
import AulaDescricao from "./components/AulaDescricao.vue";
import AulaDownload from "./components/AulaDonwload.vue";

export default {
  name: "App",
  components: {
    AulaDescricao,
    AulaDownload,
  },
  data() {
    return {
      componenteAtivo: "AulaDescricao",
    };
  },
};
</script>
