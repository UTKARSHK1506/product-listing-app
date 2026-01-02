let catgeorylist = document.querySelector("aside ul")
let productselement = document.querySelector(".productscat")




let getproducts = (catSlug='') => {
    let apiurl='';

        if(catSlug==''){
            apiurl= "https://dummyjson.com/products";
        }
        else{
             apiurl=`https://dummyjson.com/products//category/${catSlug}`;

        }
         fetch(apiurl)
        .then((res) => res.json())
        .then((final) => {
            let productslist = '';
            let { products } = final;
            products.forEach((object) => {
            productslist += `<div class="productitems">
                        <img
                            src=${object.thumbnail} alt="not found">
                            <h3>${object.title}</h3>
                            <div class="add">
                            <b>${object.price}</b>
                            <button class="btn">Add to Cart</button>
                            </div>
                    </div>`

            })
            productselement.innerHTML=productslist;

        }
        )

}


let getcategory = async () => {
    let all = await fetch(`https://dummyjson.com/products/categories`)
        .then((res) => res.json())

        .then((finalres) => {
            let catlist = '';
            finalres.forEach(element => {
                // console.log(element);
                catlist += `<li data-slug=${element.slug}>${element.name}</li>`
            });
            // console.log(finalres);
            catgeorylist.innerHTML = catlist;
        }
        )

}


catgeorylist.addEventListener('click',(e)=>{
    if(e.target.tagName=="LI"){
        let currentslug=e.target.getAttribute('data-slug');
        console.log(currentslug);
        getproducts(currentslug);
    }
})

    

getproducts();
getcategory();