// Using generator function
function* fetchUsers() {
    yield fetch('https://jsonplaceholder.typicode.com/users')
      .then(resp => resp.json())
      .then(users => {
        return users;
      });
  }
  const usersIt = fetchUsers();
  usersIt.next().value.then(resp => console.log(resp));
  
  setTimeout(() => {
    console.log("------------------------------------------------------") 
  }, 0)

  // Using async await
  async function fetchUsers2() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    return users;
  }

  console.log(fetchUsers2())