let MyForm = document.querySelector('form')
let inp1 = document.getElementById('task')
let inp2 = document.getElementById('priority')
let tbody = document.querySelector('tbody');

let MainData = [];

MyForm.addEventListener('submit',function(e)
{
    e.preventDefault()
    let Data = {};
    Data.task = inp1.value;
    Data.priority = inp2.value;

    MainData.push(Data)
    console.log(MainData)

    tbody.innerHTML = null;

    MainData.map((ele) =>
    {
        let row = document.createElement('tr')
        let td1 = document.createElement('td')
        let td2 = document.createElement('td')

        if (ele.priority === 'High') { 
            td2.style.backgroundColor = 'red';
        } else {
            td2.style.backgroundColor = 'green';
        }


        td1.innerText = ele.task;
        td2.innerText = ele.priority

        row.append(td1,td2)

        tbody.append(row)
        
    })
})

