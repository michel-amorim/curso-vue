import DolarHoje from "./DolarHoje.js";

export default {
  name: "AcaoHoje",
  coponents: {
    DolarHoje,
  },
  data() {
    return {
      valorMercado: 0,
    };
  },
  components: { DolarHoje },
  template: `<div>
  <p>Valor Apple: {{ valorMercado }}</p>
  <dolar-hoje></dolar-hoje>
  </div>`,

  methods: {
    puxarAcao() {
      fetch("https://api.origamid.dev/stock/aapl/quote")
        .then((r) => r.json())
        .then((r) => {
          this.valorMercado = r.marketCap;
        });
    },
  },

  created() {
    this.puxarAcao();
  },
};
