export default function medicineReducer(state = { medicineData: [] }, action) {
  switch (action.type) {
    case 'LOAD_MEIDCINE_SUCCESS':
      state = {
        medicineData: action.payload,
      };
      return state;
    default:
      return state;
  }
}
