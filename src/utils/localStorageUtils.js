export const getDataFromStorage = () => {
    const data = localStorage.getItem("healthAndFitness");
    return data ? JSON.parse(data) : [];
  };
  
  export const saveDataToStorage = (data) => {
    localStorage.setItem("healthAndFitness", JSON.stringify(data));
  };
  