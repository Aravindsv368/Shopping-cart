let productsInCart = 0;
let products =[
    {
        id: 1,
        name:"Blueberries",
        price:100,
        quantity:1,
        img_url:"https://pics.clipartpng.com/Blueberries_PNG_Clipart-211.png",
        is_in_cart:false
    },
    {
        id: 2,
        name:"watermelon",
        price:100,
        quantity:1,
        img_url:"https://pngfile.net/public/uploads/preview/watermelon-fruit-png-free-download-31566853958ol4tpyumd4.png",
        is_in_cart:false
    },
    {
        id: 3,
        name:"Pear",
        price:100,
        quantity:1,
        img_url:"https://pics.clipartpng.com/Pear_Fruit_PNG_Clipart-242.png",
        is_in_cart:false
    },
    {
        id: 4,
        name:"Pineapple",
        price:100,
        quantity:1,
        img_url:"https://pics.clipartpng.com/Pineapple_Fruit_PNG_Clipart-247.png",
        is_in_cart:false
    },
    {
        id: 5,
        name:"Cherry",
        price:100,
        quantity:1,
        img_url:"https://pics.clipartpng.com/Cherries_Fruit_PNG_Clipart-216.png",
        is_in_cart:false
    },
    {
        id: 6,
        name:"Banana",
        price:100,
        quantity:1,
        img_url:"https://pics.clipartpng.com/Bunch_of_Bananas_PNG_Clipart-213.png",
        is_in_cart:false
    }
]

window.addEventListener('load', ()=>{    
    const container = document.querySelector(".container");
    let data = '';
    products.forEach(product => {
        data += `
            <div class="product-container">
            <img src="${product.img_url}" alt="">
                <div class="about">
                    <h3>${product.name}</h3>
                    <h3>Price: &#8377; ${product.price}</h3>
                    <div class="butns">
                        <button id="minus-id-${product.id}" class="product-minus action disabled"  onclick="addSubProduct(${product.id},'-')">-</button>
                        <input type="text" id="id-${product.id}" value="${product.quantity}">
                        <button class="product-plus action" onclick="addSubProduct(${product.id},'+')">+</button>
                    </div>
                    <button id="cartBtn-${product.id}" class="product-cart-btn" onclick="cartBtn(${product.id})">Add to cart</button>
                </div>
            </div>
        `
        });
        
        container.innerHTML = data;
})

function addSubProduct(id , op){
    
    products.forEach(product => {
        if(product.id === id && op == '+'){
            if(product.quantity === 1)document.getElementById(`minus-id-${id}`).classList.remove("disabled")

            product.quantity++;
            document.getElementById(`id-${id}`).value=product.quantity
        }
        else if(product.id === id && op == '-' && product.quantity > 1){
            product.quantity--;
            document.getElementById(`id-${id}`).value=product.quantity
            if(product.quantity === 1) document.getElementById(`minus-id-${id}`).classList.add("disabled")
                        
        }
    });
}

function cartBtn(id)
{
   let cartAddRemove = document.getElementById(`cartBtn-${id}`)
   
    products.forEach(product => {
        if(product.id === id){
            if(product.is_in_cart) {
                productsInCart--;
                cartAddRemove.innerText = "Add to cart";
                cartAddRemove.style.backgroundColor = "greenyellow";
            }

            else {
                productsInCart++;
                cartAddRemove.innerText = "Remove";
                cartAddRemove.style.backgroundColor = "orange";
            }
            product.is_in_cart = !product.is_in_cart;
            document.querySelector(".cart-indexing").innerText = productsInCart;
            
        }
    });
}

