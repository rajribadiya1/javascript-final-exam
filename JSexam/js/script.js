// input
let title = document.getElementById('title').value;
let price = document.getElementById('price').value;
let image = document.getElementById('image').value;
let category = document.getElementById('category').value;


//filter
let Ftitle = document.getElementById('Ftitle').value;
let Fprice = document.getElementById('Fprice').value;
let Fcategory = document.getElementById('Fcategory').value;

//search
let search = document.getElementById('search');


//card output
let newTitle = document.getElementById('newTitle');
let newPrice = document.getElementById('newPrice');
let newImage = document.getElementById('newImage');
let newCategory = document.getElementById('newCategory');


function click() {
    switch (title, price, image, category) {
        case 1:
            if (title === Ftitle) {
                console.log(newTitle);

            } else if (price===newPrice) {
                console.log(newPrice);
            } else if (image===newImage) {
                console.log(newImage);
            } else if (category===Fcategory) {
                console.log(Fcategory);
            }
    }

}


