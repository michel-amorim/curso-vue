<template>
  <nav>
    <ul class="container">
      <li>
        <a>Home</a>
      </li>
      <li>
        <a>Serviços</a>
      </li>
      <li>
        <a>Contatos</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "HeaderComponent",
};
</script>

<style>
ul {
  display: flex;
  list-style: none;
}
li {
  padding: 10px;
}
</style>
