<template>
  <div>
    <div class="overflow-hidden rounded-2xl bg-base-100 shadow-lg">
      <div class="overflow-x-auto text">
        <h1 class="text-bold text-red-500">
          THIS IS EXAMPLE DATA (PLEASE OPEN BACKEND API TO USE REAL DATA)
        </h1>
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
            <tr v-for="(items, index) in userExample" :key="items.id">
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
                  MEMBER 
                </span>
              </td>

              <td>
                <div class="flex justify-center gap-2">
                  <RouterLink :to="`/edit-user/${items.id}`">
                    <button class="btn btn-sm btn-warning" v-on:click="buttonAction()">Edit</button>
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
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
const userExample = [
  {
    email: "john@gmail.com",
  },

  {
    email: "alice@gmail.com",
  },

  {
    email: "mike@gmail.com",
  },

  {
    email: "sarah@gmail.com",
  },

  {
    email: "david@gmail.com",
  },
];

const buttonAction = () => {
    return alert("THIS JUST EXAMPLE CAN NOT EDIT (IF YOU WANT PLS OPEN BACKEND API)")
}
</script>

<style lang="scss" scoped></style>
