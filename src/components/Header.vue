<template>
  <header>
    <nav>
      <div class="logo">
        <router-link to="/">Techno</router-link>
      </div>
      <ul>
        <li>
          <router-link to="/cursos">Cursos</router-link>
        </li>
        <li>
          <router-link to="/contato">Contato</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
header {
  width: 100%;
  background-color: #234;
}

header a {
  color: #fff;
}

a.router-link-active {
  color: #4b8;
}

nav {
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  align-content: space-between;
  align-items: center;
}

.logo {
  flex: 1;
}

.logo a {
  color: #fff;
  font-size: 1.5rem;
}

ul li {
  display: inline-block;
}

li a {
  margin-left: 10px;
}
</style>
