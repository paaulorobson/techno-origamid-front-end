<template>
  <div>
    <div v-if="loading">
      <Loading />
    </div>
    <transition>
      <div v-if="data">
        <h2>{{ data.nome }}</h2>
        <iframe
          width="300"
          height="215"
          :src="`https://www.youtube.com/embed/${data.youtube}`"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </transition>
  </div>
</template>

<script>
import api from "@/mixins/api.js";

export default {
  name: "Aula",
  props: ["aula"],
  mixins: [api],

  created() {
    this.fetchData(`/aula/${this.aula}`);
  },
  beforeRouteUpdate(to, from, next) {
    this.fetchData(`/aula/${to.params.aula}`);
    next();
  },
};
</script>

<style scoped></style>
