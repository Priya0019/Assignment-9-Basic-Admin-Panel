var url = 'http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D';

fetch('http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D')
  .then(response => response.json())
  .then(data => {
    console.log(data);

    const checkdata = document.getElementById('search-box').value;

    
    
    
    const table = document.querySelector('table');

    // Loop through the data and create rows and cells dynamically
    for (let i = 0; i < data.length; i++) {
       


            const row = document.createElement('tr');
            row.setAttribute('id', 'row_' + i);
            row.addEventListener('click', function(event) {
                //console.log(event);
                
                const display_element = document.getElementById('info-content');
                display_element.style.display = 'block';

                const current = document.getElementsByTagName('tr');
                for (let j = 0; j < current.length; j++) {
                    current[j].style.border = 'none';
                  }
                



                document.getElementById('row_' + i).style.border = '2px solid red';

                const fn = document.getElementsByClassName('column2')[i].innerHTML;
                const ln = document.getElementsByClassName('column3')[i].innerHTML;

                document.getElementById('full_name').innerHTML = fn +' '+ln;
                document.getElementById('full_des').innerHTML = data[i].description;
                document.getElementById('street').innerHTML = data[i].address.streetAddress;
                document.getElementById('city').innerHTML =data[i].address.city ;
                document.getElementById('state').innerHTML = data[i].address.state;
                document.getElementById('pin').innerHTML = data[i].address.zip;

                //console.log(fn +' '+ln);


              });
            const cell1 = document.createElement('td');
            cell1.setAttribute('class', 'column1');
            
            const cell2 = document.createElement('td');
            cell2.setAttribute('class', 'column2');
            cell2.setAttribute('id', 'column3');
            const cell3 = document.createElement('td');
            cell3.setAttribute('class', 'column3');
            cell3.setAttribute('id', 'column3');
            const cell4 = document.createElement('td');
            cell4.setAttribute('class', 'column4');
            const cell5 = document.createElement('td');
            cell5.setAttribute('class', 'column5');
            const cell6 = document.createElement('td');
            cell6.setAttribute('class', 'column6 keep_hidden');

            cell1.textContent = data[i].id;
            cell2.textContent = data[i].firstName;
            cell3.textContent = data[i].lastName;
            cell4.textContent = data[i].email;
            cell5.textContent = data[i].phone;
            cell6.textContent = data[i].address.streetAddress + ', ' + data[i].address.city + ', ' + data[i].address.state + ', ' + data[i].address.zip;

            row.appendChild(cell1);
            row.appendChild(cell2);
            row.appendChild(cell3);
            row.appendChild(cell4);
            row.appendChild(cell5);
            row.appendChild(cell6);

            table.appendChild(row);



        
    }

  })
  .catch(error => console.error(error));



const searchInput = document.getElementById("search-box");


const table = document.getElementById('table-data2');

searchInput.addEventListener('input', function(event) {
  const searchString = event.target.value.toLowerCase();

  Array.from(table.getElementsByTagName('tr')).forEach(function(row) {
    const rowData = row.getElementsByTagName('td');

    if (rowData) {
      let rowText = '';

      Array.from(rowData).forEach(function(data) {
        rowText += data.textContent.toLowerCase();
      });

      if (rowText.includes(searchString)) {
        row.style.display = 'table-row';
        document.getElementById('fix').style.display = 'table-row';
      } else {
        row.style.display = 'none';
        document.getElementById('fix').style.display = 'table-row';
      }
    }
  });
});
