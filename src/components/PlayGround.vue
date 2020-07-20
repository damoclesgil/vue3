<script lang="ts">
import { defineComponent, h, ref } from "vue";

export default defineComponent({
  name: "PlayGround",
  props: {
    textProp: {
      type: String,
      default: "Textão!",
    },
  },
  setup(props) {
    const message = ref("It's Amazing");

    return () => h("div", [message.value, props.textProp]);
  },
  created() {
    console.log(this.textProp);
  },
});
</script>
