export const convertDate = (number) => {
    const date = new Date(number); // "Date" object hepls to extract day month info
    return date.getDate() + "/" + (date.getMonth() + 1); //month index start from 0
  };
  