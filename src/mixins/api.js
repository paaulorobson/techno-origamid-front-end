export default {
  data() {
    return {
      loading: true,
      data: Object,
    };
  },

  methods: {
    async fetchData(url) {
      try {
        this.loading = true;
        this.data = null;
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
