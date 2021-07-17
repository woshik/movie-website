const getDataFromLocalStorage = (key, defaultValue) => {
  const data = localStorage.getItem(key);

  try {
    return data ? JSON.parse(data) : defaultValue;
  } catch (e) {
    return defaultValue;
  }
};

const setDataOnLocalStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
  return data;
};

const removeDataFromLocalStorage = (key) => localStorage.removeItem(key);

const clearDataFromLocalStorage = () => localStorage.clear();

export {
  getDataFromLocalStorage,
  setDataOnLocalStorage,
  removeDataFromLocalStorage,
  clearDataFromLocalStorage,
};
