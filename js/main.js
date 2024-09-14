// Завдання 2: Створіть основний об'єкт Vue і прив'яжіть його до деякого елементу HTML на вашій сторінці.
// Завдання 7: Створіть ще один окремий файл з компонентом, зареєструйте та використуйте його у існуючему компоненті. 
import { CounterResult } from "./CounterResult.js"
import { Message } from "./Message.js"

const App = {
    components: {
      CounterResult,
      Message
    },
    data() {
        return {
            title: 'Counter',
            counter: 0,
            text: 'Test',
        }
    },
    methods: {
        increment() {
            this.counter++
        },
        decrement() {
            this.counter--
        }
    }
}

const app = Vue.createApp(App)
app.mount('#counter')