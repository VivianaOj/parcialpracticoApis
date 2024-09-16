const articles = [
  ['club', 'categoria', 'ciudad', 'receta'],
  ['socio', 'producto', 'restaurante'],
];

export const getMissingFields = (errorMsgs) => {
  return errorMsgs
    .filter((msg: string) => msg.includes('should not be empty'))
    .map((msg: string) => msg.split(' ')[0]);
};

export const requiredFieldsMsg = (missingFields) =>
  `Los siguientes campos son obligatorios: ${missingFields.join(', ')}.`;

export const unknownMsg = (resource) =>
  `${articles[0].includes(resource) ? 'La' : 'El'} ${resource} con el id dado no existe.`;
