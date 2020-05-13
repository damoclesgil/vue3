import { ref } from "vue";

export const useContasBancarias = () => {
  const contas = ref([{ "id": "c885d013-9fd9-464c-b1e0-82d4e8af72ef", "nrConta": "98765", "dvConta": "4", "agencia": "1234", "codBanco": { "displayName": "Nu Pagamentos SA", "value": "O260", "__typename": "DataOption" }, "convenio": "Conveniado!", "dtAlteracao": "2020-05-12T17:27:05.219", "tipoConta": { "displayName": "Conta Corrente", "value": "CC", "__typename": "DataOption" }, "__typename": "ContaBancaria" },
  { "id": "ba31scas-a21c-464c-321c-82d4e8af72ef", "nrConta": "1234", "dvConta": "3", "agencia": "4334", "codBanco": { "displayName": "Nu Pagamentos SA", "value": "O260", "__typename": "DataOption" }, "convenio": "Conveniado!", "dtAlteracao": "2020-05-12T17:27:05.219", "tipoConta": { "displayName": "Conta Corrente", "value": "CC", "__typename": "DataOption" }, "__typename": "ContaBancaria" }]);

  return { contas };
};
