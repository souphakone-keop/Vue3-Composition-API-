<template>
  <div class="p-6">
    <div
      class="mb-6 flex flex-col gap-4 rounded-2xl bg-base-100 p-6 shadow-lg md:flex-row md:items-center md:justify-between"
    >
      <div>
        <h1 class="text-3xl font-bold">Users Management</h1>
        <p class="text-base-content/60">Manage users, roles and permissions</p>
      </div>

      <div v-if="users.length > 0">
        <RouterLink to="/add-user">
          <button class="btn btn-primary rounded-xl">+ Add User</button>
        </RouterLink>
      </div>
      <div v-else>
        <button class="btn btn-primary rounded-xl">PLEASE USE BACKEND API TO ADD USER</button>
      </div>
    </div>

    <div
      class="overflow-hidden rounded-2xl bg-base-100 shadow-lg"
      v-if="users.length > 0"
    >
      <div class="overflow-x-auto">
        <table class="table table-zebra">
          <thead class="bg-base-200">
            <tr>
              <th>#</th>
              <th>Email</th>
              <th>Role</th>
              <th class="text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="(items, index) in users" :key="items.id">
              <td class="font-semibold">
                {{ index + 1 }}
              </td>

              <td>
                <div class="flex items-center gap-3">
                  <div
                    class="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-content font-bold"
                  >
                    {{ items.email.charAt(0).toUpperCase() }}
                  </div>

                  <span class="font-medium">
                    {{ items.email }}
                  </span>
                </div>
              </td>

              <td>
                <span
                  :class="[
                    'badge badge-lg',
                    items.role === 'admin' ? 'badge-error' : 'badge-success',
                  ]"
                >
                  {{ items.role }}
                </span>
              </td>

              <td>
                <div class="flex justify-center gap-2">
                  <RouterLink :to="`/edit-user/${items.id}`">
                    <button class="btn btn-sm btn-warning">Edit</button>
                  </RouterLink>

                  <button
                    class="btn btn-sm btn-error"
                    @click="delete_user(items.id)"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>

            <tr v-if="users.length === 0">
              <td colspan="4" class="py-12 text-center text-base-content/60">
                No users found
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div v-else>
      <DataExample />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import DataExample from "./components/DataExample.vue";

const users = ref([]);

const fetchUsers = async () => {
  try {
    const res = await axios.get(`${import.meta.env.VITE_API}/users`);
    users.value = res.data.data;
  } catch (err) {
    console.log(err);
  }
};

const delete_user = async (id) => {
  try {
    await axios.delete(`${import.meta.env.VITE_API}/users/${id}`);
    fetchUsers();
  } catch (err) {
    console.log(err);
  }
};

onMounted(fetchUsers);
</script>

<style scoped></style>
