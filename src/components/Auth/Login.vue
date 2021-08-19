<template>
  <transition appear appear-active-class="opacity">
    <div class="login">
      <h1 class="auth-title" v-html="title" />
      <p v-if="loginStep === 0" class="auth-subtitle">
        Мы рады Вас видеть, войдите в аккаунт <br />
        или пройдите <a href="#" @click="changeStep(2)">регистрацию</a>
      </p>
      <p class="auth-subtitle" v-html="description" />
      <div class="auth-body">
        <div
          :class="[
            'auth-input',
            'input-email',
            { 'error-class': error.email },
            { 'success-class': validate.email },
          ]"
        >
          <input
            type="email"
            ref="loginEmail"
            autofocus
            placeholder="Введите электронную почту"
            v-model="login.email"
            @focus="resetErrors"
            @change="
              focused($event);
              validateEmail(login.email, validate);
            "
            @keypress.enter="loginToAccount"
          />
        </div>
        <div
          :class="[
            'auth-input',
            { 'error-class': error.password },
            { 'success-class': validate.password },
          ]"
        >
          <input
            type="password"
            placeholder="Введите пароль"
            ref="loginPwd"
            v-model="login.password"
            @focus="resetErrors"
            @change="
              focused($event);
              validatePassword();
            "
            @keypress.enter="loginToAccount"
          />
        </div>
        <div class="login-bottom">
          <div class="remember-me">
            <input type="checkbox" id="remember" name="remember" checked />
            <label for="remember">Запомнить меня</label>
          </div>
          <a class="forgot-password" href="#" @click="changeStep(1)"
            >Забыли пароль?</a
          >
        </div>
        <div class="auth-bottom">
          <button class="auth-button" @click="loginToAccount">
            Войти в аккаунт
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import authMixins from "../../mixins/auth";

export default {
  name: "Login",

  mixins: [authMixins],

  props: {
    loginStep: {
      type: Number,
      default: 0,
    },

    title: {
      type: String,
      default: "Добро <br> пожаловать!",
    },

    description: {
      type: String,
      default: "",
    },
  },

  data() {
    return {
      login: {
        email: "",
        password: "",
      },

      error: {
        email: false,
        password: true,
      },

      validate: {
        email: false,
        password: false,
      },
    };
  },

  methods: {
    validatePassword() {
      const pwd = this.login.password;

      if (pwd.length > 5) {
        this.validate.password = true;
      } else {
        this.validate.password = false;
      }
    },

    resetErrors() {
      this.error = { email: false, password: false };
    },

    loginToAccount() {
      if (!this.login.email.length) {
        this.$refs.loginEmail.focus();

        return;
      } else if (!this.login.password.length) {
        this.$refs.loginPwd.focus();

        return;
      }

      const validateEmail = this.validate.email;
      const validatePwd = this.validate.password;

      if (validateEmail && validatePwd) {
        this.resetErrors();
        this.showAlert({
          status: 1,
          title: "Предупреждение",
          description: "Попробуйте войти позже",
        });
      } else {
        this.error = { email: true, password: true };
        this.showAlert({
          status: 2,
          title: "Ошибка",
          description: "Неверно введена почта или пароль!",
        });
      }
    },
  },

  mounted() {
    this.resetErrors();
  },
};
</script>

<style lang="scss">
.login {
  &-bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: $_27px;
    max-width: $_354px;
    a {
      font-size: $_16px;
      line-height: 140%;
      letter-spacing: 0.02em;
      color: $dark-gray;
    }
  }
}
</style>
