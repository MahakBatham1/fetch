const button = document.querySelector('button');
const table = document.querySelector('table');

const fetchData = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
   var temp = "";
  data.forEach(item => {
    temp += "<tr>";
    temp += "<td>" + item.username + "</td>";
    temp += "<td>" + item.name + "</td>";
    temp += "<td>" + item.email + "</td>";
  });
  document.getElementById('data').innerHTML = temp;
};

button.addEventListener("click", fetchData);



