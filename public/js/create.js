  
/*  DOCUMENTACION DE FIREBASE: https://firebase.google.com/docs/auth/web/start
    LINK DE BASE DE DATOS: https://console.firebase.google.com/u/1/project/inicio-logueo-one/overview
***************************************************************************************************************
***************************************************************************************************************
    DECLARO UNA FUNCION PARA MANDAR DATOS A BASE DE DATOS   */

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
 

    const create = (name, producto, id, description) => {
        db.collection('Productos').doc().set({
            name,
            producto,
            description,
            id
        })
    
    }     
    todoForm.addEventListener('submit', async e => {
        e.preventDefault();
        const name = todoForm['tipo'].value;
        const id = todoForm['valor'].value;
        const producto = todoForm['cantidad'].value;
        const description = todoForm['id'].value;
    
        await create(name, id, producto, description); // Llamo a mi función create
        todoForm.reset(); // Reseteamos los campos
    });

    const data = db.collection("Productos").get().then(snapshot => {
        a = snapshot.docs
        a.forEach(doc => {
            d=doc.data()
            console.log(d)

            tracking.innerHTML += `<div>
            <div class="card" style="width: 18rem;">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${d.name}</h5>
              <p class="card-text"></p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">${d.id}</li>
              <li class="list-group-item">${d.producto}</li>
              <li class="list-group-item">${d.name}</li>
            </ul>
          </div> </div>`
            
        });

    })