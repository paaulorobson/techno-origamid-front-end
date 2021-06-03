<template>
  <div>
    <div v-if="loading">
      <Loading />
    </div>
    <div v-else>
      <h1>{{ data.id }}</h1>
    </div>
  </div>
</template>

<script>
import api from "@/mixins/api.js";
export default {
  name: "Cursos",
  mixins: [api],
  created() {
    this.fetchData("/cursos");
  },
};
</script>
