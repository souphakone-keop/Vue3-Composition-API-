<template>
  <div class="min-h-screen bg-base-200 flex items-center justify-center p-6">
    <div class="w-full max-w-lg rounded-3xl bg-base-100 p-8 shadow-xl">
      <div class="mb-8 text-center">
        <h1 class="text-3xl font-bold">
          Add User
        </h1>
        <p class="mt-2 text-base-content/60">
          Create a new user account
        </p>
      </div>

      <div class="space-y-5">
        <div>
          <label class="mb-2 block font-semibold">
            Email
          </label>

          <input
            type="email"
            class="input input-bordered w-full rounded-xl"
            placeholder="example@gmail.com"
            v-model="add.email"
          />
        </div>

        <div>
          <label class="mb-2 block font-semibold">
            Password
          </label>

          <input
            type="password"
            class="input input-bordered w-full rounded-xl"
            placeholder="Enter password"
            v-model="add.password"
          />
        </div>

        <div>
          <label class="mb-2 block font-semibold">
            Confirm Password
          </label>

          <input
            type="password"
            class="input input-bordered w-full rounded-xl"
            placeholder="Confirm password"
            v-model="add.confirmPassword"
          />
        </div>
      </div>

      <button
        @click="check"
        class="btn btn-primary mt-8 w-full rounded-xl text-base font-bold"
      >
        Create User
      </button>

      <button
        @click="router.push('/')"
        class="btn btn-ghost mt-3 w-full rounded-xl"
      >
        Cancel
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
import router from "../router";

const add = ref({
  email: "",
  password: "",
  confirmPassword: "",
});

const insert_user = async () => {
  try {
    const res = await axios.post(
      `${import.meta.env.VITE_API}/users`,
      {
        email: add.value.email,
        password: add.value.password,
      }
    );

    console.log(res);
  } catch (err) {
    console.log("err:", err);
  }
};

const check = async () => {
  if (!add.value.email || !add.value.password) {
    alert("Please fill all fields");
    return;
  }

  if (add.value.password !== add.value.confirmPassword) {
    alert("The confirm password is not correct");
    add.value.password = "";
    add.value.confirmPassword = "";
    return;
  }

  await insert_user();

  alert("ADD USER SUCCESSFULLY");

  router.push("/");
};
</script>

<style scoped></style>