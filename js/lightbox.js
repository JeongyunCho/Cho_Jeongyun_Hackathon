//Get the modal
var modal = document.querySelector('#myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var modalImg = document.querySelector("#img01");
var images = document.querySelectorAll('.portFolioImg');
var viewBut = document.querySelectorAll('.myImg');

function swapImage(index) {
    modal.style.display = "block";
        for(var i=0; i<images.length; i++){
            if(index===i){
            modalImg.src=images[i].src;
        }
    }
};


        


for(i=0; i<images.length; i++){
    viewBut[i].addEventListener('click',swapImage.bind(null, i),false);
};



// Get the <span> element that closes the modal
var span = document.querySelectorAll(".close")[0];

// When the user clicks on <span> (x), close the modal

function closeBox(){
    modal.style.display = "none";
};

span.addEventListener('click',closeBox,false);