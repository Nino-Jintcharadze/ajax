let navbar = document.getElementById('nav');
let burger = document.getElementById('bar');

burger.addEventListener('click', () => {
    navbar.classList.toggle('active');
})


// ajax


function getEmploy() {

    function render() {
        let response = this.responseText;
        let final_Data = JSON.parse(response);
        console.log(final_Data);

        let ul = document.createElement('ul');

        final_Data.data.forEach(element => {
            let li = document.createElement('li');
            li.textContent = element.name;

            ul.appendChild(li);
        });
        // let li = document.createElement('li');
        // li.textContent = finData.data[3].name;

        // ul.appendChild(li);

        document.getElementById('ajax-div').appendChild(ul);
    }

    let req = new XMLHttpRequest();

    req.addEventListener('load', render);

    req.open('GET', 'https://reqres.in/api/unknown');
    req.send();
}

getEmploy();

