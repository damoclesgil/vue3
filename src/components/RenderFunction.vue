<script>
import { defineComponent, h } from "vue";

export default defineComponent({
  setup() {
    const classes =
      "bg-blue-500 text-white text-xs font-bold py-2 px-4 rounded transition-all delay-150 hover:bg-blue-700";
    const onClick = () => {
      console.info("click");
    };
    return { onClick, classes };
  },
  render() {
    return h(
      "button",
      {
        id: "foo",
        className: this.classes,
        onClick: this.onClick,
      },
      "hello"
    );
  },
});
</script>
