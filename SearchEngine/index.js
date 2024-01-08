async function GetData(){
    await fetch('https://fakestoreapi.com/products/')
    .then(data => data.json())
    .then(res => {
        completeData = res;
        completeData.map((item) => {
            SingleItem(item);
        })
    })

    document.querySelector('#search').addEventListener('keyup',() => {
    let YourSearched = document.querySelector('#search').value;
    let YourSearched1 = String(YourSearched).toLowerCase()
    let resultArray = []
    resultArray = completeData.filter(product => {
        return String(product.title).toLowerCase().includes(YourSearched1)
    });

    document.querySelector('.results').innerHTML = ''
    resultArray.map( product => {
        SingleItem(product)
    })
})

}

GetData()


function SingleItem(singledata){
    let results = document.querySelector('.results')
    let div = document.createElement('div')
    div.className = 'result';
    let img = document.createElement('img')
    img.src = singledata.image;
    let title = document.createElement('h2')
    title.textContent = singledata.title;
    // let description = document.createElement('p')
    // description.textContent = singledata.description;
    let Price = document.createElement('h1')
    Price.textContent = singledata.price;
    let Cart = document.createElement('button')
    Cart.innerText = 'Add to Cart'; 
    div.appendChild(img)
    div.appendChild(title)
    // div.appendChild(description)
    div.appendChild(Price)
    div.appendChild(Cart)
    results.appendChild(div)
}
