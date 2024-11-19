// Save data to localStorage
export const saveToLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };
  
  // Retrieve data from localStorage
  export const getFromLocalStorage = (key) => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
  };
  