export const convertirFecha = (cadenaFecha: string | any) => {
  try {
    const [year, month, day] = cadenaFecha?.split('-').map(Number) || [
      24, 1, 1,
    ];

    return {
      day: day,
      month: month,
      year: year,
    };
  } catch (error) {
    console.error('Error al convertir la fecha:', error);
    return {
      day: 1,
      month: 1,
      year: 2024,
    };
  }
};
