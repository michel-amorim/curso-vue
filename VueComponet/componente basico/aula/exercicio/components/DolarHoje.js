export default {
  name: "DolarHoje",
  data() {
    return {
      valorDolar: 0,
    };
  },
  template: `<p>Valor Dolar: R$ {{ valorDolar }}</p>`,
  methods: {
    puxarDolar() {
      fetch("https://api.origamid.dev/exchange/usd")
        .then((r) => r.json())
        .then((r) => {
          this.valorDolar = r.rates.BRL;
        });
    },
  },

  created() {
    this.puxarDolar();
  },
};
