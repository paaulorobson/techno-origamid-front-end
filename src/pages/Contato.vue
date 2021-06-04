<template>
  <div>
    <div v-if="loading">
      <Loading />
    </div>
    <transition>
      <div v-if="data">
        <h1>{{ data.titulo }}</h1>
        <p>{{ data.descricao }}</p>
        <ul>
          <li>
            <b>E-mail: </b>
            {{ data.contato.email }}
          </li>
          <li>
            <b>Telefone:</b>
            {{ data.contato.telefone }}
          </li>
          <li>
            <b>Endereço:</b>
            {{ data.contato.endereco }}
          </li>
        </ul>
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
