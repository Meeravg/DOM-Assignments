// fill in javascript code here

// fill in javascript code here

let MyForm = document.querySelector('form');
let Dr_Name = document.getElementById('name');
let Dr_id = document.getElementById('docID');
let Specialization = document.getElementById('dept');
let Exp = document.getElementById('exp');
let Email = document.getElementById('email');
let Mob = document.getElementById('mbl')
let tbody = document.querySelector('tbody');

let MainData = [];

MyForm.addEventListener('submit',function(e)
{
    e.preventDefault()

    let Data ={};

    Data.name = Dr_Name.value;
    Data.docID = Dr_id.value;
    Data.dept = Specialization.value;
    Data.exp = Exp.value;
    Data.email = Email.value;
    Data.mbl = Mob.value;
    Data.tbody = tbody.value;


    MainData.push(Data)
    console.log(MainData)

    tbody.innerHTML = null;

    MainData.map((ele) =>
    {
        let row = document.createElement('tr')
        let td1 = document.createElement('td')
        let td2 = document.createElement('td')
        let td3 = document.createElement('td')
        let td4 = document.createElement('td')
        let td5 = document.createElement('td')
        let td6 = document.createElement('td')
        let role = document.createElement("td")

        if(ele.exp > 5){
            role.innerText = "Senior"
            // role.style.backgroundColor = "red"
        }else if(ele.exp > 2 && ele.exp <=5){
            role.innerText = "Junior"
        }else if (ele.exp <= 1){
            role.innerText="Fresher"
        }


        td1.innerText = ele.name;
        td2.innerText = ele.docID;
        td3.innerText = ele.dept;
        td4.innerText = ele.exp;
        td5.innerText = ele.email;
        td6.innerText = ele. mbl;

        row.append(td1, td2, td3, td4, td5, td6,role)

        tbody.append(row)
        
    })



})



