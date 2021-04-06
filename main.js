var app = new Vue ({
  el: '#root',
  data: {
    lista: [
        {
          voce: 'Preparare la grigliata di Pasquetta',
          status: 'undone',
          nascosto: 'false',
        },
        {
          voce:'Ricordarsi di dover ancora fare gli esercirzi Boolean',
          status:'undone',
          nascosto: 'false',
        },
        {
          voce:'Trovare una scusa per non farli',
          status:'undone',
          nascosto: 'false',
        },
        {
          voce:'Organizzare una seconda grigliata col tempo guadagnato',
          status:'undone',
          nascosto: 'false',
        },
    ],
    nuovoCompito: '',
  },
  methods: {

    spunta: function (posizione) {
      this.lista[posizione].status = 'done'
    },

    rimuovi: function (posizione) {
      this.lista[posizione].nascosto = 'true'
    },

    aggiungi: function () {
      if (this.nuovoCompito.length > 0) {
        let obj = {
          voce: this.nuovoCompito,
          status:'undone',
          nascosto:'false',
        }
        this.lista.push(obj)
        this.nuovoCompito = ''
      }
    },

  }
})
