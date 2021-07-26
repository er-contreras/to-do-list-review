let savingOnLocal = (arr) => localStorage.setItem('tasks', JSON.stringify(arr));

const retrieveLocal = () => JSON.parse(localStorage.getItem('tasks'));

export { savingOnLocal, retrieveLocal };