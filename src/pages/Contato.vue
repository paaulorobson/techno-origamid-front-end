<template>
  <div>
    <h1>Contato</h1>
    <p>{{ data }}</p>
  </div>
</template>

<script>
import api from "@/mixins/api.js";
export default {
  name: "Contato",
  mixins: [api],
  created() {
    this.fetchData("/contato");
  },
};
</script>
