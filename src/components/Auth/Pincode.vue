<template>
  <div class="pin-code">
    <input
      type="number"
      placeholder="0"
      autofocus
      :class="['pin-code__input', `pin-${index}`]"
      :ref="`pin-${index}`"
      v-for="index in length"
      :key="index"
      @keyup="updatePinCode($event, index)"
      @keydown.delete="remove(index)"
    />
  </div>
</template>

<script>
export default {
  props: {
    length: {
      type: Number,
      default: 4,
    },
  },

  data() {
    return {
      lastNumber: null,
      focusedCell: 0,
    };
  },

  methods: {
    updatePinCode(evt, index) {
      const input = this.$refs[`pin-${index}`];
      const value = input.value;
      this.lastNumber = parseInt(evt.key);
      this.focusedCell = index;

      if (value.length === 1 && index < this.length) {
        document.querySelector(`.pin-${index + 1}`).focus();
      } else if (value.length > 1) {
        input.value = this.lastNumber;
      }
    },

    remove(index) {
      const input = this.$refs[`pin-${index}`];
      const value = input.value;
      input.value = "";

      if (!value.length && index > 1) {
        document.querySelector(`.pin-${index - 1}`).focus();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.pin-code {
  margin-bottom: $_60px;
  &__input {
    background: rgba(211, 218, 255, 0.05);
    border: 1px solid rgba(254, 254, 254, 0.03);
    color: $text;
    border-radius: $_6px;
    width: $_56px;
    height: $_56px;
    text-align: center;
    font-size: $_20px;
    line-height: 140%;
    letter-spacing: 0.02em;
    margin-right: 16px;
    &:last-child {
      margin-right: 0;
    }

    &:focus {
      border-color: rgba($text, 0.2);
      &::placeholder {
        opacity: 0;
        transition: opacity 0.2s ease-in-out;
      }
    }
    &::placeholder {
      color: rgba($text, 0.2);
      transition: opacity 0.2s ease-in-out;
    }
  }
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}
</style>
