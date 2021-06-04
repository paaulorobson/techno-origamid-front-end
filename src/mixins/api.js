export default {
  data() {
    return {
      loading: true,
      data: "",
    };
  },

  methods: {
    async fetchData(url) {
      try {
        this.loading = true;
        this.data = "";
        await fetch(`http://localhost:3000${url}`)
          .then((response) => response.json())
          .then((response) => {
            this.data = response;
            this.loading = false;
          });
      } catch (err) {
        console.warn(err);
      }
    },
  },
};
