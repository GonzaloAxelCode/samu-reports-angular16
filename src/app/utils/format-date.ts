export const formatFecha = (fechaObj: any) => {
  const fecha = new Date(fechaObj.year, fechaObj.month - 1, fechaObj.day);
  const year = fecha.getFullYear();
  const month = String(fecha.getMonth() + 1).padStart(2, '0');
  const day = String(fecha.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};
