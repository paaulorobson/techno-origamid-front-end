<template>
  <div>
    <h1>Cursos</h1>
    <p>{{ data }}</p>
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
