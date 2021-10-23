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
});
//El uso de {{}} permite insertar codigo JS
app.mount("#myApp");