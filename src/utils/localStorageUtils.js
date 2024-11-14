export const getInitialDarkMode = () => {
  const savedDarkMode = localStorage.getItem("darkMode");
  return savedDarkMode ? JSON.parse(savedDarkMode) : false;
};

export const getInitialTasks = () => {
  const savesTasks = localStorage.getItem("tasks");
  return savesTasks ? JSON.parse(savesTasks) : ["cos tam 1", "cos tam 2"];
};
