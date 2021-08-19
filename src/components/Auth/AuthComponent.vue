<template>
  <transition appear appear-active-class="auth-enter">
    <div>
      <div class="auth-component">
        <div class="auth-component__left">
          <slot></slot>
        </div>
        <div class="auth-component__right">
          <img src="~@/assets/images/auth/character.svg" alt="character" />
        </div>
      </div>
      <div class="auth-component__bottom">
        <div class="auth-component__bottom-social-club">
          <img src="~@/assets/images/auth/social_club.svg" alt="social club" />
        </div>
        <p>
          Мы позаботились о том, что бы Вы не вводили каждый раз данные для
          входа, поэтому для авторизации используем Ваш аккаунт в Social Club. В
          целях безопасности нам нужен только Ваш адрес электронной почты, на
          который Вы регистрировали аккаунт.
        </p>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "AuthLayout",
};
</script>

<style lang="scss">
.auth {
  &-back {
    display: block;
    font-size: $_16px;
    line-height: 140%;
    letter-spacing: 0.02em;
    color: $dark-gray;
    text-transform: uppercase;
    position: relative;
    padding-left: $_26px;
    margin-bottom: $_8px;
    &::before {
      content: "";
      background-image: url("~@/assets/images/auth/icons/back-icon.svg");
      background-repeat: no-repeat;
      background-size: cover;
      width: 20px;
      height: 20px;
      position: absolute;
      left: 0;
      top: 0;
    }
  }
  &-component {
    display: flex;
    width: $_731px;
    min-height: $_512px;
    position: relative;
    &::after {
      content: "";
      background-color: rgba($text, 0.2);
      height: 2px;
      width: 100%;
      position: absolute;
      bottom: $_32px;
      left: 0;
    }

    &__bottom {
      display: flex;
      margin-top: -$_16px;
      p {
        max-width: 34.25rem;
        margin-left: $_40px;
        color: $moon;
        font-size: $_12px;
        line-height: 140%;
        letter-spacing: 0.02em;
      }
    }

    &__left {
      flex: 0 0 55%;
    }

    &__right {
      margin-left: $_10px;
      img {
        height: $_512px;
        object-fit: cover;
        max-width: 24.625rem; //394px
      }
    }
  }

  &-title {
    font-size: $_42px;
    line-height: 120%;
    letter-spacing: 0.02em;
    color: #fefefe;
    margin-bottom: $_20px;
  }

  &-subtitle {
    font-size: $_20px;
    line-height: 140%;
    letter-spacing: 0.02em;
    color: $dark-gray;
    margin-bottom: $_40px;
    a {
      color: $light-gray;
      position: relative;
      &::after {
        content: "";
        width: 100%;
        height: 1px;
        background-color: $light-gray;
        position: absolute;
        bottom: 0;
        left: 0;
      }
    }
  }

  &-bottom {
    margin-bottom: $_30px;
  }

  &-button {
    background: $accent-gradient;
    box-shadow: $accent-shadow;
    letter-spacing: 0.02em;
    font-size: $_16px;
    line-height: 140%;
    border: none;
    outline: none;
    color: $text !important;
    border-radius: $_35px;
    padding: $_24px $_62px $_24px $_24px;
    position: relative;
    transition: transform 0.2s ease-in-out;
    &:active {
      transition: transform 0.2s ease-in-out;
      transform: scale(0.95);
    }
    &::after {
      content: "";
      background-image: url("~@/assets/images/auth/icons/button-arrow.svg");
      background-repeat: no-repeat;
      background-size: cover;
      position: absolute;
      width: $_22px;
      height: $_22px;
      right: $_24px;
      top: $_24px;
    }
  }

  &-input {
    position: relative;
    margin-bottom: $_16px;

    &.error-class {
      input {
        border-color: $error;
      }
      animation: shake 0.3s ease-in-out;
    }
    &.success-class {
      input {
        border-color: seagreen;
      }
    }

    &.error-class,
    &.success-class {
      &::before {
        background: $text;
        transition: background 0.3s ease-in-out;
      }
    }

    &.input-focused {
      &::before {
        background: $text;
        transition: background 0.3s ease-in-out;
      }
    }

    &:focus-within {
      input {
        border-color: rgba($text, 0.2);
        &::placeholder {
          opacity: 0;
          transition: opacity 0.3s ease-in-out;
        }
      }
      &::before {
        background: $text;
        transition: background 0.3s ease-in-out;
      }
    }

    &.input-email {
      &::before {
        mask-image: url("~@/assets/images/auth/icons/mail.svg");
      }
    }

    &::before {
      content: "";
      mask-image: url("~@/assets/images/auth/icons/lock.svg");
      width: 20px;
      height: 20px;
      position: absolute;
      top: $_18px;
      left: $_18px;
      background: rgba($text, 0.2);
      transition: background 0.3s ease-in-out;
    }

    input {
      background: $field;
      border: 1px solid $stroke;
      border-radius: $_6px;
      color: $text;
      height: $_56px;
      width: $_354px;
      padding-left: $_46px;

      &::placeholder {
        color: $placeholder;
        font-size: $_16px;
        line-height: 120%;
        transition: opacity 0.3s ease-in-out;
      }
    }
  }
}
</style>
