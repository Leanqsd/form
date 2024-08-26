const formData = document.querySelector('.person-form');

function processData(event){
    event.preventDefault();

    const data = new FormData(event.target);

    const allData = Object.fromEntries(data.entries());

    console.log(allData);
}

formData.addEventListener('submit', processData);
