const app = Vue.createApp({
    // template: ` //Options Api
    // <h1>Hola Mundo</h1>
    // <p>{{1+1}}</p>
    // `,
    // method: {}, //Options Api
    // watch: {}, //Options Api
    // setup() {}, //Composition API
    data() {
        return {
            quote: "I'm Batman",
            message: "Hola Mundo!!!",
        };
    },
    methods: {
        changeQuote() {
            this.message = "Samuel Espinoza";
            this.capitalize();
        },
        capitalize() {
            this.quote = this.quote.toUpperCase();
        },
    },
});
//El uso de {{}} permite insertar codigo JS
app.mount("#myApp");