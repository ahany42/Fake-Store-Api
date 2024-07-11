for(let i =1;i<=5;i++){
    let data=fetch(`https://fakestoreapi.com/products/${i}`)
    .then(res=>res.json())
    .then(json=>{
        let newDiv=document.createElement("div");
        newDiv.innerHTML=`
        <div class=card>
        <div class=imgContainer>
        <img class=cardImg src=${json.image}>
        </div>
        <div class=cardHeader>
        <h5>${json.title}</h5>
        <h6>${json.category}</h6>
        <p>${json.description}</p>
        <div>
        <h6>${json.price} LE</h6>
        <h6>Rating:${json.rating.rate}</h6>
        </div>
        </div>
      
     
        `;
        document.getElementById("container").appendChild(newDiv);
        console.log(json)
    })
    .catch(error => console.error('Error:', error));

}
