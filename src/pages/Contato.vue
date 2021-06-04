<template>
  <div>
    <div v-if="loading">
      <Loading />
    </div>
    <transition>
      <div v-if="data">
        <h1>{{ data.titulo }}</h1>
      </div>
    </transition>
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
