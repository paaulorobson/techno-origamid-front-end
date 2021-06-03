<template>
  <div>
    <div v-if="loading">
      <p>Carregando...</p>
    </div>
    <div v-else>
      <h1>{{ data.id }}</h1>
    </div>
  </div>
</template>

<script>
import api from "@/mixins/api.js";

export default {
  name: "Home",
  mixins: [api],
  created() {
    this.fetchData("/home");
  },
};
</script>
