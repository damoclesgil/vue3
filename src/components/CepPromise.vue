<script lang="ts">
import { defineComponent, h, ref } from "vue"
import cep from 'cep-promise'

export default defineComponent({
  name: 'CepPromise',
  data() {
    return {
      test: "asda"
    };
  },
  setup() {
    const inputValue = ref()
    const meuCep = 74785210
    const getCep = () => {
        cep(meuCep)
        .then(resp => { 
          inputValue.value = resp
          console.log(resp)
        })
        .catch(err => { 
          inputValue.value = err
          console.log(err)
        })
    }
    return { getCep, inputValue }
  },
  render() {
    const input = h(
      "input", {
        ref: "$inputField",
        type: "text",
        class: "input",
        modelValue: this.test,
        'onUpdate:modelValue': value => (this.test = value)

      },
    )
    const resultado = h(
      "p", {
        ref: "resultado",
        style: {color: "white"},
      },
      `resultado: ${this.test}`
    )
    const button = h(
      "button",
      {
        id: "foo",
        class: "btn",
        tabindex: '-1',
        role: 'button',
        onClick: this.getCep,
      },
      
      ["getCep"]
    )
    return [input, button, resultado]
  },
})
</script>
<style lang="postcss">
.btn {
  @apply bg-blue-500 text-white text-xs font-bold py-2 px-4 rounded transition-all delay-150 mt-5;
}
.input {
  @apply m-auto mt-5 max-w-2xl  bg-white border text-black border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal;
}
.input:focus {
  @apply shadow-outline outline-none;
}
</style>