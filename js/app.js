
axios.get('https://fakestoreapi.com/products?limit=6').then(function(respons){
    var user = respons.data;
    var row = document.querySelector(".ross");
    var itemsNumber1 = document.querySelector("#id1");
    var itemsNumber2 = document.querySelector("#id2");
    
    /*window.addEventListener('resize',function(){
        const screenWidth = document.documentElement.clientWidth
        console.log(screenWidth);
    });-*/
    
    var number = 0
    var nayidiProduqtebi = []
    var ob = {}
    //kategoriebi chaawye id isatvis
    var masivi  = []
    function chayare(kategori){
        kategori.forEach(function(user){
            masivi.push(user.title)
        })
    }
    chayare(user)
    //console.log(masivi);
    //kategoriebi dasrulda
    var ids = [0]
    function masivi2(gamotvla){
        var x  = gamotvla.reduce(function(acc,user){
           return Math.round(acc +  user)
        },0)
        return x
    }

    masivi2(nayidiProduqtebi)
    //console.log((ids));
    var par = document.querySelector(".class-container")
    var all__sum = document.querySelector(".all__sum");
                all__sum.innerHTML = "0"
     function cardProduct(createProduct){
            var cart__itemsCount__title = document.querySelector(".cart__itemsCount__title");
            cart__itemsCount__title.innerHTML= `თქვენ გაქვთ ${nayidiProduqtebi.length} პროდუქტი ნაყიდი`;
            itemsNumber1.innerHTML=nayidiProduqtebi.length
            itemsNumber2.innerHTML=nayidiProduqtebi.length
            //console.log(nayidiProduqtebi);
            var cart__itemsCount = document.querySelector(".cart__itemsCount");  
                    var cart_item__bg = document.createElement("div");
                    cart_item__bg.classList.add("cart-item__bg")
                    cart__itemsCount.after(cart_item__bg)
                    var cart_item__bg__left = document.createElement("div")
                    cart_item__bg__left.classList.add("cart-item__bg__left");
                    cart_item__bg__left.classList.add("pt-2");
                    cart_item__bg__left.classList.add("ps-2");
                    var imgCart = document.createElement("img")
                    imgCart.src=createProduct.image
                    cart_item__bg__left.append(imgCart)
                    cart_item__bg.append(cart_item__bg__left)
                var cart_item__bg__right = document.createElement("div")  
                cart_item__bg__right.classList.add("cart-item__bg__right") 
                cart_item__bg__right.classList.add("ms-4") 
                cart_item__bg__right.classList.add("pt-2") 
                cart_item__bg.append(cart_item__bg__right)
                var cart_item__bg__right__title = document.createElement("div")
                cart_item__bg__right__title.classList.add("cart-item__bg__right__title")
                cart_item__bg__right__title.innerHTML=createProduct.title
                cart_item__bg__right.prepend(cart_item__bg__right__title)
                var cart_item__bg__right__cost = document.createElement("div")  
                cart_item__bg__right__cost.classList.add("cart-item__bg__right__cost");
                cart_item__bg__right__cost.innerHTML=`$${createProduct.price}` 
                cart_item__bg__right__title.after(cart_item__bg__right__cost)
                var deleteButon = document.createElement("div")
                deleteButon.classList.add("cart-item__bg__right__delete");
                cart_item__bg__right__cost.after(deleteButon)
                deleteButon.textContent="x";
                var all__sum = document.querySelector(".all__sum");
                all__sum.classList.add("all__sum")
                
                deleteButon.addEventListener("click",function(deletes){
                    ob = {}
                    //console.log(createProduct.title);
                    //console.log(nayidiProduqtebi.indexOf(createProduct.price));
                     nayidiProduqtebi.splice(nayidiProduqtebi.indexOf(createProduct.price),1)
                    cart__itemsCount__title.innerHTML= `თქვენ გაქვთ ${nayidiProduqtebi.length} პროდუქტი ნაყიდი`;
                    par.removeChild(cart_item__bg)
                    itemsNumber1.innerHTML=nayidiProduqtebi.length
                    itemsNumber2.innerHTML=nayidiProduqtebi.length
                    all__sum.innerHTML =`${masivi2(nayidiProduqtebi)}$`  
                    //console.log(cart_item__bg);
                    
                    
                   
                })

                all__sum.innerHTML =`${masivi2(nayidiProduqtebi)}$`
                //console.dir(par.hasChildNodes);
       
        
            
            //console.log(ite);
            //console.log(ids.includes(items.id));
            
        
        return createProduct
        
    }
    

    user.forEach(function(users){
        
        var col = document.createElement("div");
        col.classList.add("col-lg-4")
        col.classList.add("col-md-6")
        col.classList.add("col-12")
        row.prepend(col)
        var latestProductsContent = document.createElement("div")
        latestProductsContent.classList.add("latest-products_content");
        col.prepend(latestProductsContent)
        var latestProductsContentBg = document.createElement("div");
        latestProductsContentBg.classList.add("latest-products_content__bg");
        latestProductsContentBg.classList.add("position-relative");
        latestProductsContent.prepend(latestProductsContentBg)

        //კალათა
        var list = document.createElement("div");
            list.classList.add("list");
            latestProductsContentBg.prepend(list)
        for(var i = 0; i<masivi.length;i++){
            if(i==0){
                var listCart2 = document.createElement("div");
                listCart2.classList.add("list__cart2");
                listCart2.classList.add("mb-2");
                list.prepend(listCart2)
                var listCartBg = document.createElement("div");
                listCartBg.classList.add("list__cart__bg2");
                listCart2.prepend(listCartBg)
                const imgCart = document.createElement("img")
                imgCart.src="img/products/Frame 4.svg"
                listCartBg.append(imgCart)
            }
            else{
            var listCart = document.createElement("div");
            listCart.classList.add("list__cart");
            listCart.classList.add("mb-3");
            list.prepend(listCart)
            var listCartBg = document.createElement("div");
            listCartBg.classList.add("list__cart__bg");
            listCartBg.setAttribute("id", masivi[i])
            listCart.prepend(listCartBg)
            const imgCart = document.createElement("img")
            imgCart.src="img/products/shopping-cart.png"
            listCartBg.append(imgCart)  
            //console.log(masivi[i]);
            }
            
        }
        
        var latestProductsCcontentImg = document.createElement("div");
        latestProductsCcontentImg.classList.add("latest-products_content__img");
        list.after(latestProductsCcontentImg);
        var imgProduct = document.createElement("img")
        imgProduct.src=users.image
        
        latestProductsCcontentImg.append(imgProduct)
        
        latestProductsContent.addEventListener("mousemove",function(show){
            listCart.style.display = "block";
            listCart2.style.display = "block";
            
        })
        latestProductsContent.addEventListener("mouseout",function(show){
            listCart.style.display = "none";
            listCart2.style.display = "none";
            
        })
       
        listCartBg.addEventListener("click",function(additems){
            number++
            //console.log(this.innerHTML=id)
            
            nayidiProduqtebi.push(users.price)
            //let name = item.target.getAttribute("id")
            ob = users
            //console.log(ob);
            
           

            
           cardProduct(ob,nayidiProduqtebi);
            
           
        })

        
    })
    
   
    
    
   
    
    

   // console.log(nayidiProduqtebi);

})
