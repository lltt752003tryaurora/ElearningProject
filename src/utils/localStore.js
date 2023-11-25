export const saveLocalStore = (key, value) => {
  const dataString = JSON.stringify(value);
  localStorage.setItem(key, dataString);
};
