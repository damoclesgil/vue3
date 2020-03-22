<script>
import Container from "@/layout/Container";
import Users from "@/components/Users";
import Products from "@/components/Products";

export default {
  components: {
    Container,
    Users,
    Products
  }
};
</script>

<template>
  <container>
    <div class="flex flex-row">
      <div class="flex-1">
        <Users />
      </div>
      <div class="flex-1">
        <Products />
      </div>
    </div>
  </container>
</template>
