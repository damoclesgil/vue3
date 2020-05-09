<template>
  <container>
    <div>
      <label class="typo__label">Tags</label>
      <multiselect
        :model-value="value"
        tag-placeholder="Add this as new tag"
        placeholder="Search or add a tag"
        label="name"
        track-by="code"
        :options="options"
        :multiple="true"
        :taggable="true"
        @tag="addTag"
      />
      <!-- <pre class="language-json"><code>{{ value }}</code></pre> -->
    </div>
  </container>
</template>

<script>
import Multiselect from 'vue-multiselect'
import Container from "../layout/Container";
import { useUsers } from "@/use/useUsers.js";
import { reactive, ref } from 'vue';
export default {
  name: "Componente",
  components: {
    Container,
    Multiselect
  },
  setup() {
    const value = ref([{ name: 'Javascript', code: 'js' }])

    const options = reactive([
       { name: 'Vue.js', code: 'vu' },
       { name: 'Javascript', code: 'js' },
       { name: 'Open Source', code: 'os' }
    ])
    const { users } = useUsers();

    return { users, options, value };
  },
   methods: {
    addTag (newTag) {
      const tag = {
        name: newTag,
        code: newTag.substring(0, 2) + Math.floor((Math.random() * 10000000))
      }
      this.options.push(tag)
      this.value.push(tag)
    }
  }
};
</script>

<style>
.eoq {
  text-align: center;
}
</style>
