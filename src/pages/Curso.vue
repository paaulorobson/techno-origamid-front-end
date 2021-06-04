<template>
  <div>
    <div v-if="loading">
      <Loading />
    </div>
    <transition>
      <div v-if="data" class="content">
        <div>
          <h1>{{ data.nome }}</h1>
          <p>{{ data.descricao }}</p>

          <h2>Aulas</h2>
          <ul class="aulas">
            <li v-for="aula in data.aulas" :key="aula.id">
              <router-link :to="{ name: 'aula', params: { aula: aula.id } }"
                >{{ aula.nome }}
              </router-link>
            </li>
          </ul>
        </div>
        <div>
          <router-view></router-view>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import api from "@/mixins/api.js";

export default {
  name: "Curso",
  props: ["curso"],
  mixins: [api],

  created() {
    this.fetchData(`/curso/${this.curso}`);
  },
};
</script>

<style scoped>
.aulas li {
  padding: 10px;
  border-bottom: 1px solid #ddd;
  width: 100%;
  max-width: 500px;
}
.content {
  display: grid;
  grid-template-columns: 600px 1fr 1fr;
  grid-gap: 20px;
}
</style>
