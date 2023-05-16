let row=document.querySelector(".row")

axios.get('https://jsonplaceholder.typicode.com/posts').then(resp => {

console.log(resp.data)
    for (let i = 0; i < resp.data.length; i++) {       
        row.innerHTML += `<div class="card"  style="width: 18rem; margin-left: 40px;">
        <div class="card-body">
          <h5 class="card-title">${resp.data[i].id}</h5>
          <p class="card-text">${resp.data[i].title}</p>
          <a href="#" class="btn btn-primary">${resp.data[i].body}</a></div></div>`  
    }
});