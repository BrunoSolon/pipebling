const dealSchema = (deal) => ({
  pipedriveId: deal.id,
  pipedriveUserId: deal.user_id,
  pipedrivePersonId: deal.person_id,
  pipedriveOrgId: deal.org_id,
  client: deal.person_name,
  organization: deal.org_name,
  status: deal.status,
  title: deal.title,
  wonTime: deal.won_time,
  value: deal.value,
});

const makeBlingPayload = (order) => {
  if (!order) {
    return null;
  }

  return {
    data_saida: order.won_time,
    cliente: {
      nome: order.person_name,
    },
    items: [{
      item: {
        codigo: 1234567,
        descricao: 'Organização',
        un: 'Un',
        qtde: 1,
        vlr_unit: order.value,
        vlr_desconto: 0,
      },
    }],
  };
};

export {
  makeBlingPayload,
  dealSchema,
};
