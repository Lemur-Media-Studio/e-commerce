const db = firebase.firestore();
const todoForm = document.getElementById('todo_form');
const taskContainer = document.getElementById('cont');
const taskContainer2 = document.getElementById('cont2');
const taskContainer3 = document.getElementById('cont3');
const taskContainer4 = document.getElementById('cont4');
const taskProdu = document.getElementById('prod1');
const taskProdu2 = document.getElementById('prod2');
const taskContainer5 = document.getElementById('cont5');
const tracking = document.getElementById("cardp")


const data = db.collection("Productos").get().then(snapshot => {
    a = snapshot.docs
    a.forEach(doc => {
        d=doc.data()
        console.log(d)

        tracking.innerHTML += `<div class="card mx-2" style="width: 18rem;">
                        <img src="${d.id}" class="card-img-top mt-2" alt="...">
                        <div class="card-body">
                          <h5 class="card-title">${d.name}</h5>
                          <p class="card-text">${d.producto}</p>
                          <a href="#" id='${d.id}' class="btn btn-dark btn-compra">Comprar</a>
                        </div>
                      </div>`
        
    });

})