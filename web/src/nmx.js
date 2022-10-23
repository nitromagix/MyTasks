//


const trace = (label) => (value) => {
  console.log(label);
  console.log(value);
  return value;
};


const dateToMMDDYYYY = (date) =>
  `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;

module.exports = {
  trace,
  dateToMMDDYYYY,
};
