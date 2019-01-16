import { initialData } from "../initialData";

const initialState = normalizeData(initialData);

function normalizeData(initialData) {
  const data = {};

  initialData.forEach(el => (data[el.id] = el));

  return data;
}

export function mainReducer(state = initialState) {
  return state;
}
