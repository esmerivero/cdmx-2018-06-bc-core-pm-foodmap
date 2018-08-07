let config = {
    apiKey: 'AIzaSyDmI0IERvjSq0334ndUnRMb09SyKuE4mMI',
    authDomain: 'taller-firebase-4e2b1.firebaseapp.com',
    databaseURL: 'https://taller-firebase-4e2b1.firebaseio.com',
    projectId: 'taller-firebase-4e2b1',
    storageBucket: 'taller-firebase-4e2b1.appspot.com',
    messagingSenderId: '521580200060'
};

firebase.initializeApp(config);
let db = firebase.firestore();
let restaurantsRef = db.collection('restaurants');
const btnComidaMexicana = document.getElementById('tipo-mexicana');
const btnComidaChina = document.getElementById('tipo-china');
const btnComidaItaliana = document.getElementById('tipo-italiana');
const btnSnacks = document.getElementById('snacks');
const btnMejoresCalificados = document.getElementById('rating');
const btnMejoresPrecios = document.getElementById('cost');
const cardRestaurant = document.getElementById('card');

let idSearch = '';
let equalSearch = "==";
let idComparation;

btnComidaMexicana.addEventListener('click', function(){
    cardRestaurant.innerHTML = '';
    clickBoton('type',equalSearch,'comida mexicana');
});

btnComidaChina.addEventListener('click', function(){
    cardRestaurant.innerHTML = '';
    clickBoton('type',equalSearch,'comida china');
});

btnComidaItaliana.addEventListener('click', function(){
    cardRestaurant.innerHTML = '';
    clickBoton('type',equalSearch,'comida italiana');
});

btnSnacks.addEventListener('click', function(){
    cardRestaurant.innerHTML = '';
    clickBoton('type',equalSearch,'snacks')
});

btnMejoresCalificados.addEventListener('click', function(){
    cardRestaurant.innerHTML = '';
    clickBoton('rating', '>=' , 4)
});

btnMejoresPrecios.addEventListener('click', function(){
    cardRestaurant.innerHTML = '';
    clickBoton('cost', '<=' , 150)
});

function clickBoton (idSearch, equalSearch, idComparation){
    restaurantsRef.where(idSearch, equalSearch, idComparation)
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            let nombre = doc.data().name;
            let direccion = doc.data().address;
            let costo = doc.data().cost;
            let tipoComida = doc.data().type;
            let puntuacion = doc.data().rating;

            cardRestaurant.innerHTML += `<strong>Nombre: </strong>${nombre} <br>
                                        <strong>Dirección: </strong>${direccion} <br>
                                        <strong>Gasto aprox. por persona: </strong>${costo} pesos<br>
                                        <strong>Tipo de comida: </strong>${tipoComida} <br>
                                        <strong>Puntuación: </strong>${puntuacion} <hr>`;
            console.log(doc.id, doc.data());
        });
    })
    .catch(function(error) {
        console.log('Error al obtener la información: ', error);
});
}
