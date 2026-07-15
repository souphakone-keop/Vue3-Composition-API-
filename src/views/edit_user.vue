<template>
  <div class="min-h-screen bg-base-200 flex items-center justify-center p-6">
    <div class="w-full max-w-lg rounded-3xl bg-base-100 p-8 shadow-xl">
      <div class="mb-8 text-center">
        <h1 class="text-3xl font-bold">Edit User</h1>
        <p class="mt-2 text-base-content/60">Update user information</p>
      </div>

      <div class="space-y-5">
        <div>
          <label class="mb-2 block font-semibold"> Email </label>

          <input
            type="email"
            class="input input-bordered w-full rounded-xl"
            placeholder="example@gmail.com"
            v-model="user.email"
          />
        </div>

        <div>
          <label class="mb-2 block font-semibold"> New Password </label>

          <input
            type="password"
            class="input input-bordered w-full rounded-xl"
            placeholder="Enter password"
            v-model="user.password"
          />
        </div>

        <div>
          <label class="mb-2 block font-semibold"> Confirm Password </label>

          <input
            type="password"
            class="input input-bordered w-full rounded-xl"
            placeholder="Confirm password"
            v-model="user.confirmPassword"
          />
        </div>
      </div>

      <button
        @click="check"
        class="btn btn-primary mt-8 w-full rounded-xl text-base font-bold"
      >
        Save Changes
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import { useRoute } from "vue-router";
import router from "../router";

const route = useRoute();

const user = ref({
  email: "",
  password: "",
  confirmPassword: "",
});

const fetch_single_user = async () => {
  try {
    const res = await axios.get(
      `${import.meta.env.VITE_API}/users/${route.params.id}`,
    );

    user.value.email = res.data.data.email;
  } catch (err) {
    console.log(err);
  }
};

onMounted(fetch_single_user);

const edit_user = async () => {
  try {
    const res = await axios.put(
      `${import.meta.env.VITE_API}/users/${route.params.id}`,
      {
        email: user.value.email,
        password: user.value.password,
      },
    );

    console.log(res);
  } catch (err) {
    console.log(err);
  }
};

const check = async () => {
  if (user.value.password !== user.value.confirmPassword) {
    alert("Password ไม่ตรงกัน");
    user.value.password = "";
    user.value.confirmPassword = "";
    return;
  }

  await edit_user();

  alert("Edit successfully");

  router.push("/Vue3-Composition-API-/");
};
</script>

<style scoped></style>
