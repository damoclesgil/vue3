<script>
import { defineComponent, h } from "vue";

export default defineComponent({
  name: 'RenderFunciton',
  props: {
    exibe:{
      type: Boolean,
      default: false
    }
  },
  setup() {
    const classes = "bg-blue-500 text-white text-xs font-bold py-2 px-4 rounded";
    const onClick = () => {
      console.info("click");
    };
    return { onClick, classes };
  },
  render() {
    // v-if="exibe"
    return this.exibe
    ?  h("button", { id: "foo", className: this.classes, onClick: this.onClick }, [h('span', "Exibe!")])
    :  h('div', 'Não Exibe!' )

    // v-for="item in list"
    // this.list 
    /* 
      
    */
  }
});
</script>
