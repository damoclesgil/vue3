<script>
import { useHttpGet } from "@/use/useHttpGet";

export default {
  setup() {
    const {
      loading: loadingUsers,
      error: errorUsers,
      data: dataUsers
    } = useHttpGet("/api/users");

    return { loadingUsers, errorUsers, dataUsers };
  }
};
</script>

<template>
  <h4 v-if="loadingUsers">Carregando...</h4>
  <div v-else-if="errorUsers" class="text-red-800">
    <strong>{{ errorUsers }}</strong>
  </div>
  <ul v-else>
    <li v-for="user in dataUsers.users" :key="user.id">
      {{ user.name }} ({{ user.mobile }})
    </li>
  </ul>
</template>
