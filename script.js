const all_Product = async () =>{
    try {
        const respone = await axios.get(
            'https://6102d7aa79ed680017482359.mockapi.io/productlist'
        )
        document.getElementById('allproduct').innerHTML = respone.data.map(
            (product) =>`
            <div class="card m-2" style="width: 18rem;">
                <img src="${product.prdImageUrl}" class="card-img-top" alt="${product.prdname}" 
                    onclick="location.href = 'index2.html?id=${product.id}'" style="cursor: pointer;">
                <div class="card-body">
                    <h5 class="card-title">${product.prdname}</h5>
                    <div class="prices">
                    <p style="display: inline;" class="card-text">${product.prdPrice}</p>
                    <s style="display: inline;" class="card-text-sell">${product.prdPrice}</s>
                    </div>
                </div>
                <div class="d-flex justify-content-end">
                    <button class="col-4 btn btn-outline-dark m-2" onclick="x()">Add</button>
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

/////////////////////////////////////////////////Index2//////////////////////////////////////////////////

let prdid = new URLSearchParams(window.location.search).get("id");
console.log('id',prdid)

const product_show = async () =>{
    try {
        const respone = await axios.get(
            `https://6102d7aa79ed680017482359.mockapi.io/productdetail?id=${prdid}`
        )
        document.getElementById('productTitle').innerHTML = respone.data.map(
            (product,index) =>
            {if (index === 0) {
                return `${product.prdname}`
            }}    
        ).join('')
        document.getElementById('productDetails').innerHTML = respone.data.map(
            (product,index) =>
            {if (index === 0) {
            return`    
            <img class="col-lg-6 col-sm-12" src="${product.prdImageUrl}" alt="" height="80%" width="100%">
            <div class="col-lg-6 col-sm-12 d-flex justify-content-center ">
                <div>
                    <label id="productName" style="font-size: 2rem;">${product.prdname}</label>
                    <br><label id="price" class="my-4" style="color: #B02B2B; font-size: 2rem;">${product.prdPrice} THB</label>
                    <div>
                        <label class="my-2" style="font-size: 1em; color: #646464;">Size</label>
                        <select class="form-select my-2" aria-label="Default select example" id="prdSize">
                            <option selected>Please Select</option>
                            ${product.prdSize.map((value) =>{
                                return `<option value="${value}">${value}</option>`
                            })}
                        </select>
                        <div class="d-grid gap-2">
                            <button type="button" class="btn btn-dark my-2" href ="Bas.html">Add To Bag</button>
                        </div>
                        <div style="margin-top: 4rem;">
                            <label style="font-size: 1.75rem; margin-bottom: 1rem;">Product Details</label>
                            <label class="lh-base" style="font-size: 1.25rem;" id="details">
                                ${product.txtDetail}
                            </label>
                        </div>
                        <div class="d-grid gap-2 my-5">
                            <button type="button" class="btn btn-light my-2">Show More Detail</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="footer-basic">
                <footer>
                    <ul class="list-inline">
                        <li class="list-inline-item"><a href="#">Home</a></li>
                        <li class="list-inline-item"><a href="#">Services</a></li>
                        <li class="list-inline-item"><a href="#">About</a></li>
                        <li class="list-inline-item"><a href="#">Terms</a></li>
                        <li class="list-inline-item"><a href="#">Privacy Policy</a></li>
                    </ul>
                    <p class="copyright">Company Name © 2018</p>
                </footer>
            </div>
        `   }
        }).join('')
    } catch (error) {
        console.log('e',error)
    }
}

product_show()