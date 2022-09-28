<template>
  <div class="modal">
    <slot name="header" :logo="logo"></slot>
    <h1>Modal Principal</h1>
    <slot :user="user"></slot>
    <slot name="footer"></slot>
  </div>
</template>

<script>
export default {
  name: "ModalPrincipal",
  data() {
    return {
      user: {
        nome: "Michel",
      },
      logo: "ADIDAS",
    };
  },
};
</script>

<style></style>
