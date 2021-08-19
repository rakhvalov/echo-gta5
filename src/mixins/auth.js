export default {
  methods: {
    changeStep(step) {
      this.$emit("changeStep", step);
    },

    showAlert(data) {
      this.$emit("showAlert", data);
    },

    focused(evt) {
      const input = evt.target;
      const parent = input.parentElement;

      if (input.value.length) {
        parent.classList.add("input-focused");
      } else {
        parent.classList.remove("input-focused");
      }
    },

    validateEmail(email, validate) {
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      const res = re.test(String(email).toLowerCase());
      validate.email = res;
    },
  },
};
