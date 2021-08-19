<template>
  <transition appear appear-active-class="opacity">
    <div class="register">
      <a href="#" class="auth-back" @click="changeStep(0)">ВЕРНУТЬСЯ НАЗАД</a>
      <h1 class="auth-title register-title">
        Создание <br />
        нового аккаунта
      </h1>
      <p class="auth-subtitle register-subtitle">
        Введите адрес электронной почты и мы <br />
        вышлем вам код подтверждения
      </p>
      <div class="auth-body">
        <div class="auth-input input-email">
          <input
            type="text"
            placeholder="Введите электронную почту"
            @change="focused($event)"
          />
        </div>
        <div class="auth-input">
          <input
            type="password"
            placeholder="Введите пароль"
            @change="focused($event)"
          />
        </div>
        <div class="auth-input">
          <input
            type="password"
            placeholder="Подтверждение пароля"
            @change="focused($event)"
          />
        </div>
        <div class="auth-bottom register-bottom">
          <button class="auth-button" @click="changeStep(3)">Продолжить</button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import authMixin from "../../mixins/auth";

export default {
  mixins: [authMixin],
};
</script>
@change=focused($event)
<style lang="scss">
.register-title {
  line-height: 100%;
  margin-bottom: $_16px;
}
.register-subtitle {
  margin-bottom: $_22px;
}
.register-bottom {
  margin-top: $_22px;
}
</style>
