import { h } from 'vue'

const Stack = {
  render(h) {
    return h('div', {
      id: 'hello',
    },
      [
      h('span', 'world')
    ]
    )
    
  }
}

// <div id="hello"><spaj<