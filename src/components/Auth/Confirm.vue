<template>
  <div class="confirm">
    <a href="#" class="auth-back" @click="changeStep(2)"
      >УКАЗАТЬ ДРУГОЙ EMAIL</a
    >
    <h1 class="auth-title">
      Подтверждение <br />
      аккаунта
    </h1>
    <p class="auth-subtitle confirm-subtitle">
      Мы выслали вам 4-ех значный код на <br />
      указанный адрес, введите его ниже
    </p>
    <div class="auth-body">
      <PinCode />

      <div class="auth-bottom">
        <button
          class="auth-button"
          @click="
            changeStep(4);
            showAlert();
          "
        >
          Закончить
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import PinCode from "./Pincode";
export default {
  components: { PinCode },

  data() {
    return {
      code: [],
    };
  },

  methods: {
    changeStep(step) {
      this.$emit("changeStep", step);
    },

    showAlert() {
      this.$emit("showAlert", {
        status: 0,
        title: "Удачное действие",
        description: "Вы только что создали аккаунт",
      });
    },
  },
};
</script>

<style lang="scss">
.confirm-subtitle {
  margin-bottom: $_60px;
}
</style>
