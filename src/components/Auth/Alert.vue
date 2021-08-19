<template>
  <transition
    appear
    appear-active-class="alert-enter"
    leave-active-class="alert-leave"
  >
    <div class="alert">
      <div class="alert-icon">
        <img
          v-if="parseInt(status) === 0"
          src="~@/assets/images/auth/success.svg"
          alt="success"
        />
        <img
          v-if="parseInt(status) === 1"
          src="~@/assets/images/auth/warning.svg"
          alt="warning"
        />
        <img
          v-if="parseInt(status) === 2"
          src="~@/assets/images/auth/error.svg"
          alt="error"
        />
      </div>
      <div class="alert-info">
        <h2>{{ title }}</h2>
        <p>{{ description }}</p>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    status: {
      type: Number,
      default: 1,
    },

    title: {
      type: String,
      default: "Предупреждение",
    },

    description: {
      type: String,
      default: "Попробуйте войти позже",
    },
  },
};
</script>

<style lang="scss" scoped>
.alert {
  display: flex;
  align-items: center;
  background: rgba(211, 218, 255, 0.1);
  border: 1px solid rgba(254, 254, 254, 0.03);
  box-sizing: border-box;
  border-radius: 0.188rem;
  min-width: 25.25rem;
  max-width: 36.75rem;
  min-height: 6.25rem;
  position: fixed;
  right: $_10px;
  top: $_10px;
  z-index: 2;
  padding: $_20px $_18px $_20px $_20px;
  box-sizing: border-box;

  &-icon {
    margin-right: $_18px;
  }

  &-info {
    h2 {
      letter-spacing: 0.02em;
      font-size: $_18px;
      font-weight: 500;
      line-height: 140%;
      color: $text;
    }
    p {
      font-size: $_16px;
      line-height: 140%;
      letter-spacing: 0.02em;
      color: $light-gray;
      font-weight: 400;
    }
  }
}
</style>
