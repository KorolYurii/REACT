function toggleMenu(e){
            
    document.querySelector('.aside').classList.toggle('active');
    document.querySelector('.burger').classList.toggle('active');            
    document.querySelector('.page_wrapper').classList.toggle('menu_open');
    document.querySelector('aside').classList.toggle('df');    
}

let users = [
        {
            customerName: 'Jane Cooper' ,       
            company: 'Microsoft',
            phoneNumber: '(225) 555-0118',
            email: 'jane@microsoft.com',
            country: 'United States',
            userStatus: 'Active',
        },
        {
            customerName: 'Floyd Miles',       
            company: 'Yahoo',
            phoneNumber: '(205) 555-0100',
            email: 'floyd@yahoo.com',
            country: 'Kiribati',
            userStatus: 'Inactive',
        },
        {
            customerName: 'Ronald Richards',       
            company: 'Adobe',
            phoneNumber: '(302) 555-0107',
            email: 'ronald@adobe.com',
            country: 'Israel',
            userStatus: 'Inactive',
        },
        {
            customerName: 'Marvin McKinney',       
            company: 'Tesla',
            phoneNumber: '(252) 555-0126',
            email: 'marvin@tesla.com',
            country: 'Iran',
            userStatus: 'Active',
        },
        {            
            customerName: 'Jerome Bell',       
            company: 'Google',
            phoneNumber: '(629) 555-0129',
            email: 'jerome@google.com',
            country: 'Réunion',
            userStatus: 'Active',
        },
        {           
            customerName: 'Kathryn Murphy',       
            company: 'Microsoft',
            phoneNumber: '(406) 555-0120',
            email: 'kathryn@microsoft.com',
            country: 'Curaçao',
            userStatus: 'Active',
        },
        {           
            customerName: 'Jacob Jones',       
            company: 'Yahoo',
            phoneNumber: '(208) 555-0112',
            email: 'jacob@yahoo.com',
            country: 'Brazil',
            userStatus: 'Active',
        },
        {         
            customerName: 'Kristin Watson',       
            company: 'Facebook',
            phoneNumber: '(704) 555-0127',
            email: 'kristin@facebook.com',
            country: 'Åland Islands',
            userStatus: 'Inactive',
        }
      
];

function generateCards(){
    

    let html = `<table class="table">`
    html = html + `<thead class="thead">`
        html = html + `<tr class="column_name">
            <th class="column_name__item" onclick="sort(0)">Customer Name</th>
            <th class="column_name__item" onclick="sort(1)">Company</th>
            <th class="column_name__item" onclick="sort(2)">Phone Number</th>
            <th class="column_name__item" onclick="sort(3)">Email</th>
            <th class="column_name__item" onclick="sort(4)">Country</th>
            <th class="column_name__item" onclick="sort(5)">Status</th>               
        </tr>`
    
    html = html + '</thead>'
    
        html = html + `<tbody class="tbody">`
            users.forEach(el => {
                html = html + `<tr class="row_list">
                    <td class="row_list__item">${el.customerName}</td>
                    <td class="row_list__item">${el.company}</td>
                    <td class="row_list__item">${el.phoneNumber}</td>
                    <td class="row_list__item">${el.email}</td>
                    <td class="row_list__item">${el.country}</td>
                    <td class="row_list__item">${el.userStatus}</td>
                </tr>`
                
            })
        html = html + `</tbody>`
    html = html + '</table>'

    

    document.getElementById('table').innerHTML = html;
}

function replaceStyle() {

    elem = document.querySelectorAll('.row_list .row_list__item:last-child');    
    
    for (let i = 0; i < elem.length; i++) {        
        if (elem[i].textContent === 'Inactive') {
            elem[i].classList.add('inactive');
        } else{
            elem[i].classList.add('green');
        }
    }
}
window.addEventListener("DOMContentLoaded", function generateCards() {})

function sort(columnIndex) {
    const table = document.querySelector(".table");
    
    const rows = Array.from(table.rows).slice(1);
    const number = columnIndex === -1 || columnIndex === 6;

    rows.sort((a, b) => {
        const aValue = number ? parseFloat(a.cells[columnIndex].textContent) : a.cells[columnIndex].textContent;
        const bValue = number ? parseFloat(b.cells[columnIndex].textContent) : b.cells[columnIndex].textContent;

        return aValue > bValue ? 1 : aValue < bValue ? -1 : 0;
    });

    rows.forEach((row) => table.tBodies[0].appendChild(row));
}


