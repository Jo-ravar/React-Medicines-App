function getAllMedicines(pageValue, callback) {
  const defaultOptions = {
    headers: {
      Authorization:
        'Bearer 004272968874a2267b66ff12b629dec67bb5c7fa220adb3bbb8c50a02d2a2770',
    },
  };

  fetch(
    `http://www.healthos.co/api/v1/medicines/brands?page=${pageValue}&size=10`,
    defaultOptions
  )
    .then(results => {
      return results.json();
    })
    .then(data => {
      callback(null, data);
    });
}

module.exports = {
  getAllMedicines: getAllMedicines,
};
