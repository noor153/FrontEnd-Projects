var productPrice = document.getElementById("PP")
var productName = document.getElementById("PN")
var productDesc = document.getElementById("PD")
var productCat = document.getElementById("PC")
var addButton = document.getElementById("addButton")
var tableAdd = document.getElementById("demo")
var searchin = document.getElementById("search")
var story = JSON.parse(localStorage.getItem("mystore")) 
var updButton = document.getElementById("updButton")

updButton.style.display="none"



if(story !=null){

    var allProducts=story

}
else{

    var allProducts=[]
}


for(i=0;i<allProducts.length;i++)
{
    var newObject = i
    allProducts[i]["searchIndex"] = newObject

}

console.log(allProducts[1].searchIndex);

searchin.addEventListener("keyup",search)
addButton.addEventListener("click",add)

showProducts()


function search(){

    let productExist = []
    for( let i = 0;i<allProducts.length ; i++){

        if(allProducts[i].Name.toLowerCase().includes(searchin.value.toLowerCase())){
            productExist.push(allProducts[i])
        }
    }

    if(productExist == "" ){

        tableAdd.innerHTML = ""

    }
    else{

        let alltrs = [];
        for(let i=0; i < allProducts.length ; i++){
            alltrs += `<tr>
                                    <td>`+(productExist[i].searchIndex +1)+`</td>
                                    <td>`+productExist[i].Name +`</td>
                                    <td>`+productExist[i].Price+`</td>
                                    <td>`+productExist[i].cat+`</td>
                                    <td>`+productExist[i].Desc+`</td>
                                    <td> <button class="btn btn-warning" onclick="upd(`+ allProducts.indexOf(productExist[i])+`) " >Update</button></td>
                                    <td> <button class="btn btn-danger" onclick="del(`+ allProducts.indexOf(productExist[i])+`)" id="delb">Delete</button></td>
                                    
                                </tr>
    
                                    `
    
        tableAdd.innerHTML = alltrs
    
        }
    }




}

function add(){

    allProducts.push({
        Price : productPrice.value,
        Name : productName.value,
        Desc : productDesc.value,
        cat : productCat.value
    })

    localStorage.setItem("mystore",JSON.stringify(allProducts) )


    clear()

    showProducts()

}

function clear(){
    productPrice.value = ""
    productName.value = ""
    productDesc.value = ""
    productCat.value = ""
}

function showProducts(){
    let alltrs = [];
    for(let i=0; i < allProducts.length ; i++){
        alltrs += `<tr>
                                <td>`+(allProducts.indexOf(allProducts[i]) +1) +`</td>
                                <td>`+allProducts[i].Name +`</td>
                                <td>`+allProducts[i].Price+`</td>
                                <td>`+allProducts[i].cat+`</td>
                                <td>`+allProducts[i].Desc+`</td>
                                <td> <button class="btn btn-warning" onclick="upd(`+ i +`)" >Update</button></td>
                                <td> <button class="btn btn-danger" onclick="del(`+ i +`)" >Delete</button></td>
                            </tr>

                                `
    }

    tableAdd.innerHTML = alltrs
    

}

function del(delIndex){

    allProducts.splice(delIndex,1)
    localStorage.setItem("mystore",JSON.stringify(allProducts))
    showProducts()
}
var arr = []

function upd(updIndex){

    arr.push(updIndex)

    productPrice.value =allProducts[updIndex].Price
    productName.value = allProducts[updIndex].Name
    productDesc.value = allProducts[updIndex].Desc
    productCat.value = allProducts[updIndex].cat


    addButton.style.display="none"
    updButton.style.display= "inline"
}

updButton.addEventListener("click",function(){

    let index = arr[arr.length-1]

    allProducts[index].Price = productPrice.value  
    allProducts[index].Name= productName.value 
    allProducts[index].Desc= productDesc.value
    allProducts[index].cat = productCat.value     
 
    console.log(allProducts);

    localStorage.setItem("mystore",JSON.stringify(allProducts) )
    
    updButton.style.display="none"  
    addButton.style.display="inline"

    clear()

    showProducts()

})




