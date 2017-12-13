import apiHelper from '../../helper/api.js';

export default function loadMedicine() {
  return function(dispatch) {
    return apiHelper.getAllMedicines(
      1,
      function(err, data) {
        console.log('The action is called');
        dispatch(loadMedicineSuccess(data));
      }.bind(this)
    );
  };
}

export function loadMedicineSuccess(data) {
  console.log('Got data');
  return { type: 'LOAD_MEIDCINE_SUCCESS', payload: data };
}
