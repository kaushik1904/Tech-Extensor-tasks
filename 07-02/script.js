const fetchData = () => {
  url = "https://api.github.com/users";
  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data));
};

fetchData();
