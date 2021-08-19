<template>
  <div class="auth">
    <AuthComponent v-if="!modal.visible">
      <Login
        v-if="step === 0"
        :loginStep="step"
        @showAlert="showAlert"
        @changeStep="changeStep"
      />

      <Login
        title="Регистрация <br> завершена"
        description="Поздравляем! Теперь Вы можете войти в аккаунт и окунуться в мир Echo RP"
        v-if="step === 4"
        :loginStep="step"
        @showAlert="showAlert"
        @changeStep="changeStep"
        @openModal="openModal"
      />

      <ForgotPassword v-if="step === 1" @changeStep="changeStep" />

      <Register v-if="step === 2" @changeStep="changeStep" />

      <Confirm
        v-if="step === 3"
        @changeStep="changeStep"
        @showAlert="showAlert"
      />
    </AuthComponent>

    <Alert
      :status="alert.status"
      :title="alert.title"
      :description="alert.description"
      v-if="show"
    />
    <Modal
      v-if="modal.visible"
      :type="modal.type"
      title="Подозрительная <br> попытка входа"
      description="Мы заметили подозрительную попытку входа в аккаунт, на вашу электронную почту был выслан 4-ех значный код для подтверждения, что это действительно Вы"
      @closeModal="closeModal"
    />
  </div>
</template>

<script>
import AuthComponent from "../components/Auth/AuthComponent";
import Login from "../components/Auth/Login";
import Alert from "../components/Auth/Alert";
import ForgotPassword from "../components/Auth/ForgotPassword";
import Register from "../components/Auth/Register";
import Confirm from "../components/Auth/Confirm";
import Modal from "../components/Auth/Modal";

export default {
  name: "Auth",

  components: {
    AuthComponent,
    Login,
    Alert,
    ForgotPassword,
    Register,
    Confirm,
    Modal,
  },

  data() {
    return {
      step: 0,
      show: false,
      modal: {
        type: 0,
        visible: false,
      },
      alert: {
        status: "",
        title: "",
        description: "",
      },
    };
  },

  methods: {
    showAlert(data) {
      this.show = true;
      this.alert = data;
      setTimeout(() => (this.show = false), 3000);
    },

    changeStep(step) {
      this.step = step;
    },

    openModal(type) {
      this.modal = {
        type,
        visible: true,
      };
    },

    closeModal(type) {
      this.modal = {
        type,
        visible: false,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.auth {
  height: 100vh;
  background-color: $bg;
  background-image: url("~@/assets/images/auth/bg.svg");
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  &::before {
    content: "";
    height: 100%;
    width: 100%;
    background: linear-gradient(
      180deg,
      rgba(9, 16, 23, 0.9) 0%,
      rgba(12, 18, 28, 0.9) 75%,
      rgba(9, 15, 22, 0.9) 87.5%,
      rgba(8, 12, 19, 0.9) 100%
    );
    backdrop-filter: blur(20px);
    position: fixed;
    left: 0;
    top: 0;
    z-index: -1;
  }
}
</style>
