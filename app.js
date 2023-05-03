// au chargement de la page :
window.addEventListener('load', function() {
    // je change la couleur du fond
    document.body.style.background = "brown";
    // Récupération de la liste existante
    var myList = document.querySelector('ul');
  
    // Création de l'élément <li> à insérer
    var newListItem = document.createElement('li');
    newListItem.textContent = 'Lorem';
  
    // Ajout de l'élément à la fin de la liste
    myList.appendChild(newListItem);
  });
  
// 3 Au clic sur le bouton 1, supprimez le dernier <li> dans la liste 1.
// pour la consigne 3

document.getElementById("btn1").addEventListener("click", function() {
    var myList = document.querySelector('ul');
    // if(myList.childNodes){
        myList.removeChild(myList.lastElementChild);
    // }
    // else  if (myList > myList.length) {
    //     console.log("Le tableau est vide");
    //       }
});


// 4 je replis la liste au click du btn2
document.getElementById("btn2").addEventListener("click", function() {
    var myList = document.querySelector('ul');
        myList.remove(myList);
});
     

// 5 Au clic sur le bouton 3, ajoutez une classe CSS au bouton 1 pour qu'il récupère une marge supérieure
// supplémentaire.

document.getElementById("btn3").addEventListener("click", function() {
    let btn1 = document.querySelector('#btn1');
    // console.log(btn1);
        btn1.style.marginTop = '20px';
});

     
// 6 Au clic sur le bouton 4, changez de classe CSS pour qu'il change de couleur

document.getElementById("btn4").addEventListener("click", function() {
    let btn4 = document.querySelector('#btn4');
        btn4.style.background = 'green';
});


// 7 Au clic sur le bouton 5, chargez l'image “background.jpg” en image de fond sur la section #section-1.
document.getElementById("btn5").addEventListener("click", function() {
    // let btn5 = document.querySelector('#btn5');
    const section = document.querySelector('#section-1');
        section.style.backgroundImage = 'url("https://picsum.photos/200/300")';
});

// 8 Au survol du bouton 6, changez la couleur de tous les boutons en vert

document.getElementById("btn6").addEventListener("mouseover", function() {
    let btn = document.querySelectorAll('.btn');
    for (let i = 0; i < btn.length; i++) {
        btn[i].style.backgroundColor = "green";
    console.log(btn);}
});

// 9 Annulez le clic sur le bouton 7 et changez sa couleur lors d'un double clic.





// for (let index = 0; index < ul.length; index++) {
//     var ul = document.querySelector('ul');
//     const list = ul[index];
//     console.log(list.getAttribute('id'));
//     list.addEventListener('click', ()=>{
//         console.log(list);
//         list.classList.toggle('active');
//         })
// }

