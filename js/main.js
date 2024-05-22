'use strict'
//FORMIAMO UTILIZZANDO VUE.JS UN ARRAY DI OGGETTI CON DUE PROPRIETA' ALL'INTERNO TEXT CHE INDICA IL TESTO E DONE CHE INDICA UN VALORE BOOLEANO //

const{createApp} = Vue;




const app = createApp({
    data() {
      return {
        // Testo del nuovo elemento da aggiungere
        currentTodo: '',
        // Array di oggetti per le attività
        todos: [
          { text: 'Imparare Vue.js', done: false }, // Esempio di attività iniziale
          { text: 'Completare questo compito', done: true },
          { text: 'Aver capito completamente tutto', done: false },
        ],
      };
    },
    methods: {
      // Aggiunge un nuovo elemento alla lista
      addTodo() {
        if (this.currentTodo.trim()) {
          this.todos.push({
            text: this.currentTodo,
            done: false,
          });
          this.currentTodo = '';
        }
      },

      // Rimuove un elemento dalla lista
      removeTodo(index) {
        this.todos.splice(index, 1);
      },
      toggleDone(index) {
          this.todos[index].done = !this.todos[index].done;
        },
    },
    
  });
  
  app.mount('#app');