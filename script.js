const all_Product = async () =>{
    try {
        const respone = await axios.get(
            'https://6102d7aa79ed680017482359.mockapi.io/productlist'
        )
        document.getElementById('allproduct').innerHTML = respone.data.map(
            (product) =>`
            <div class="card m-2" style="width: 18rem;">
                <a href="index2.html"><img src="${product.prdImageUrl}" class="card-img-top" alt="${product.prdname}"></a>
                <div class="card-body">
                    <h5 class="card-title">${product.prdname}</h5>
                    <div class="prices">
                    <p style="display: inline;" class="card-text">${product.prdPrice}</p>
                    <s style="display: inline;" class="card-text-sell">$67.86</s>
                    </div>
                </div>
                <div class="d-flex justify-content-end">
                <button class="col-4 btn btn-outline-dark m-2" onclick="btn_Add(${product})">Add</button>
                </div>
            </div>
            `
        ).join('')
    } catch (error) {
        console.log('e',error)
    }
}
all_Product();

const slide = async () => {
    var ch = 'active'
    try {
        const respone = await axios.get(
            'https://6102d7aa79ed680017482359.mockapi.io/slider'
        )
        document.getElementById('print-slide-A').innerHTML = respone.data.map(
            (slider)=>`
            <div class="carousel-item ${ch}">
                    <div class="carousel-indicators m-5">
                    <h3>3 ${slider.sliderText}</h3>
                    </div>
                    <img src="${slider.imageUrl}" class="d-block w-100 " alt="${slider.sliderText}" height="750">
                </div>
                ${ch = ''}
            ` 
        ).join('')
    } catch (error) {
        console.log('e',error)
    }
}

slide()

function btn_Add(product){
    console.log(product)
}