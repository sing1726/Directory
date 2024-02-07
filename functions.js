function list(clients) {
    const listItems = clients.map(client => {
      return `
        <li class="list-group-item d-flex justify-content-between" data-index="${client.index}">
          <strong>${client.name}</strong>
          <strong>$ ${client.balance}</strong>
        </li>
      `;
    });
    return listItems.join('');
  }
  
  function order(clients, property) {
    return clients.sort((a, b) => a[property] - b[property]);
  }
  
  function total(clients) {
    return clients.reduce((acc, client) => acc + client.balance, 0);
  }
  
  function info(index) {
    return clients.find(client => client.index === index);
  }
  
  function search(query) {
    const lowercaseQuery = query.toLowerCase();
    return clients.filter(client => client.name.toLowerCase().includes(lowercaseQuery));
  }
