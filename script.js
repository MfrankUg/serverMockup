 fetch('http://localhost:3000/addresses')
      .then(response => response.json())
      .then(data => {
        const list = document.getElementById('address-list');
        data.forEach(addr => {
          const item = document.createElement('li');
          item.textContent = `IP: ${addr.ip}, Netmask: ${addr.netmask}`;
          list.appendChild(item);
        });
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });