<template>
  <div>
    <div v-if="loading">
      <Loading />
    </div>
    <transition name="fade" mode="out-in">
      <div v-if="data" class="content">
        <h1>{{ data.titulo }}</h1>
        <p>{{ data.descricao }}</p>

        <router-link class="btn-curso" tag="button" to="/cursos"
          >Cursos</router-link
        >

        <div>
          <h2>Avaliacoes</h2>
          <ul>
            <li v-for="avaliacao in data.avaliacoes" :key="avaliacao.nome">
              <p>{{ avaliacao.nome }}</p>
              <p>{{ avaliacao.descricao }}</p>
            </li>
          </ul>
        </div>
      </div>
    </transition>
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

<style scoped>
.btn-curso {
  border: none;
  background-color: #4b8;
  border-radius: 4px;
  color: #fff;
}
</style>
