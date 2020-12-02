///const modal = document.querySelector('#my-modal1');
//const modalBtn = document.querySelector('#modal-btn');
//const closeBtn = document.querySelector('.close');

// Events
//modalBtn.addEventListener('click', openModal);
//closeBtn.addEventListener('click', closeModal);
//window.addEventListener('click', outsideClick);

// Open
//function openModal() {
 // modal.style.display = 'block';
//}

// Close
//function closeModal() {
 // modal.style.display = 'none';
//}

// Close If Outside Click
//function outsideClick(e) {
 // if (e.target == modal) {
 //   modal.style.display = 'none';
  //}
//}

//getting modal opening buttons 
var modalbtns =document.querySelectorAll(".modal-open");

modalbtns.forEach(function(btn){
    btn.onclick = function(){
        var modal =btn.getAttribute("data-modal");

        document.getElementById(modal).style.display = "block";
    };
});

var closeBtns = document.querySelectorAll(".modal-close");

closeBtns.forEach(function(btn){
    btn.onclick= function()
    {
        var modal =(btn.closest(".modal").style.display ="none") ;

    };
});

window.onclick= function(e){
    if(e.target.className ==="modal"){
        e.target.style.display = "none";
    }
}





// second modal 

//const modal1 = document.querySelector('#modal1');
//const deleteBtn = document.querySelector('#modal-btn');
//const closeBtn1 = document.querySelector('.close');

// Events
//deleteBtn.addEventListener('click', openModal1);
//closeBtn1.addEventListener('click', closeModal1);
//window.addEventListener('click', outsideClick1);

// Open
//function openModal1() {
  //modal1.style.display = 'block';
  //modal.style.display="none";
//}

// Close
//function closeModal1() {
  //modal1.style.display = 'none';
//}

// Close If Outside Click
//function outsideClick1(e) {
  //if (e.target == modal1) {
    //modal1.style.display = 'none';
  //}
//}
