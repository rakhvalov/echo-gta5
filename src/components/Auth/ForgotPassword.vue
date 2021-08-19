<template>
  <transition appear appear-active-class="opacity">
    <div class="forgot">
      <a href="#" class="auth-back" @click="changeStep(0)">ВЕРНУТЬСЯ НАЗАД</a>
      <h1 class="auth-title forgot-title">
        Восстановление <br />
        пароля
      </h1>
      <p class="auth-subtitle forgot-subtitle">
        Введите свой e-mail, мы вышлем код <br />
        подтверждения.
      </p>
      <div class="auth-body">
        <div
          :class="[
            'auth-input',
            'input-email',
            'forgot-input',
            { 'error-class': validate.email === false },
            { 'success-class': validate.email },
          ]"
        >
          <input
            ref="forgotEmail"
            type="email"
            autofocus
            placeholder="Введите электронную почту"
            v-model="email"
            @change="
              focused($event);
              validateEmail(email, validate);
            "
          />
        </div>
        <div class="auth-bottom">
          <button class="auth-button" @click="forgotPassword">
            Выслать код
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import authMixin from "../../mixins/auth";

export default {
  mixins: [authMixin],

  data() {
    return {
      email: "",
      validate: {
        email: null,
      },
    };
  },

  methods: {
    forgotPassword() {
      const emailInput = this.$refs.forgotEmail;

      if (!this.email.length) {
        emailInput.focus();
      }
    },
  },
};
</script>

<style lang="scss">
.forgot-input,
.forgot-subtitle {
  margin-bottom: $_60px;
}
.forgot-title {
  margin-bottom: $_30px;
}
</style>
