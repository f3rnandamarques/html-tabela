const database = [
    { id: 1, nome: 'Bruno', email: 'bruno@hotmail.com', idade: 35 },
    { id: 2, nome: 'Fer', email: 'fer@hotmail.com', idade: 24 },
    { id: 3, nome: 'Erik', email: 'erik@hotmail.com', idade: 27 }
];

function searchByName() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = '';

    const filteredData = database.filter(item => item.nome.toLowerCase().includes(searchInput));

    if (filteredData.length > 0) {
        filteredData.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `<td>${item.id}</td>
                             <td>${item.nome}</td>
                             <td>${item.email}</td>
                             <td>${item.idade}</td>`;
            tableBody.appendChild(row);
        });
    } else {
        const noResultRow = document.createElement('tr');
        noResultRow.innerHTML = `<td colspan="4">resultado não encontrado.</td>`;
        tableBody.appendChild(noResultRow);
    }
}
