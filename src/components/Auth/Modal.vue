<template>
  <div class="auth-modal">
    <div class="auth-modal__body">
      <h2 class="auth-modal__title" v-html="title" />
      <p class="auth-modal__desc">
        {{ description }}
      </p>
    </div>
    <div class="auth-modal__bottom">
      <PinCode style="margin: 0" />
      <button class="auth-button" @click="next">Далее</button>
    </div>
    <div class="auth-modal__checkbox" v-if="type">
      <input type="checkbox" id="guest" />
      <label for="guest">Гостевой компьютер</label>
    </div>
  </div>
</template>

<script>
import PinCode from "./Pincode";

export default {
  components: { PinCode },

  props: {
    type: {
      type: Number,
      default: 0,
    },

    title: {
      type: String,
      default: "",
    },

    description: {
      type: String,
      default: "",
    },
  },

  methods: {
    next() {
      this.$emit("closeModal");
    },
  },
};
</script>

<style lang="scss" scoped>
.auth-modal {
  background: rgba(211, 218, 255, 0.05);
  border: 1px solid rgba(254, 254, 254, 0.03);
  backdrop-filter: blur($_50px);
  border-radius: $_4px;
  color: $text;
  max-width: $_532px;
  width: 100%;
  min-height: $_304px;
  padding: $_32px;

  &__title {
    font-weight: 500;
    font-size: $_26px;
    line-height: 120%;
    margin-bottom: $_12px;
  }

  &__desc {
    font-size: $_16px;
    line-height: 140%;
    color: $dark-gray;
    margin-bottom: $_20px;
  }

  &__bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: $_32px;
  }
}
</style>
