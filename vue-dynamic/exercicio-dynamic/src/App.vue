<template>
  <div id="app">
    <header>
      <div>
        <h1>LOGO</h1>
      </div>
      <ul>
        <li>
          <a @click="abaAtiva = 'SobreEmpresa'">Sobre</a>
        </li>
        <li>
          <a @click="abaAtiva = 'ContadoEmpresa'">Serviço</a>
        </li>
        <li>
          <a @click="abaAtiva = 'ServicoEmpresa'">Contato</a>
        </li>
      </ul>
    </header>
    <keep-alive>
      <div class="keep"><component :is="abaAtiva"></component></div>
    </keep-alive>
  </div>
</template>

<script>
import SobreEmpresa from "./components/SobreEmpresa";
import ContadoEmpresa from "./components/ContadoEmpresa";
import ServicoEmpresa from "./components/ServicoEmpresa";

export default {
  name: "App",
  components: {
    SobreEmpresa,
    ContadoEmpresa,
    ServicoEmpresa,
  },

  data() {
    return {
      abaAtiva: "SobreEmpresa",
    };
  },
};
</script>

<style>
body {
  background: rgba(200, 182, 200, 0.427);
}
header,
ul {
  display: flex;
}

header {
  justify-content: space-between;
  align-items: center;
  padding: 10px;
}
ul {
  list-style: none;
}
a {
  margin: 0 10px 0 10px;
  padding: 10px;
  cursor: pointer;
}
a:hover {
  background: rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}

.keep {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
