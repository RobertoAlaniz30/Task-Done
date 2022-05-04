<template>
  <form class="form-container">
    <img
      src="https://cdn1.iconfinder.com/data/icons/circle-outlines-colored/512/User_Account_Avatar_Person_Profile_Login_Human-512.png"
    />
    <input
      class="input-form"
      type="text"
      placeholder="Username"
      id="user"
      v-model="Username"
    />
    <div class="comp-container"><px-empty-user v-show="!Username" /></div>
    <input
      class="input-form"
      type="password"
      placeholder="Password"
      id="password"
      v-model="Password"
    />
    <div class="comp-container">
      <px-empty-pass v-if="!Password" />
    </div>
    <button class="primary-button" type="submit" v-on:click.prevent="login()">
      Login
    </button>
    <div>
      <span class="login">Aun no tienes cuenta?</span>
      <router-link :to="`/SignIn`" class="login"> Registrate </router-link>
    </div>
  </form>
</template>

<script>
import PxEmptyUser from "@/components/PxEmptyUser.vue";
import PxEmptyPass from "@/components/PxEmptyPass.vue";
import api from "@/api.js";

export default {
  name: "Form",
  components: { PxEmptyUser, PxEmptyPass },
  data() {
    return {
      Username: "",
      Password: "",
      aviso: "Password",
    };
  },
  methods: {
    async login() {
      let user = {
        email: this.Username,
        password: this.Password,
      };
      try {
        await api.login(user);
        this.$router.push("/tasks");
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
.form-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 15%;
  height: 30%;
  padding: 20px;
  padding-bottom: 80px;
  background-color: rgb(27, 27, 27);
  border-radius: 8px;
  /* box-shadow: 4px 4px 4px rgb(71, 72, 73); */
}
img {
  width: 3rem;
  height: 3rem;
  margin-bottom: 20px;
}
.input-form {
  /* border-radius: 12px; */
  background-color: rgb(27, 27, 27);
  border: none;
  border-bottom: 1px rgb(162, 226, 162) solid;
  width: 100%;
  height: 30px;
  font-size: 1rem;
}
.primary-button {
  width: 90%;
  height: 30px;
  background-color: black;
  border-radius: 16px;
  border: 1px rgb(162, 226, 162) solid;
  color: rgb(162, 226, 162);
  margin-bottom: 20px;
}

.login {
  font-size: 15px;
  color: rgb(146, 142, 142);
}

.comp-container {
  height: 1.5rem;
}
</style>
