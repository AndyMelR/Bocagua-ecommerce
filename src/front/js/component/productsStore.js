const productsArray = [
    {   id: "p_001",
        name: "Pan sin gluten Sarraceno",
        img: "https://firebasestorage.googleapis.com/v0/b/bocagua-62915.appspot.com/o/Pan%20sin%20gluten%20Sarraceno%20MM.jpg?alt=media&token=ae999df6-a1ee-4a01-a40b-53ad38dbae85",
        description: "Pan de harina de Sarraceno. Sin Gluten",
        allergens: "",
        price: 6.50,
    },
    {   id: "p_002",
        name: "Pan Sarraceno Ecologico",
        img: "https://firebasestorage.googleapis.com/v0/b/bocagua-62915.appspot.com/o/Pan%20sin%20gluten%20Sarraceno%20MM.jpg?alt=media&token=ae999df6-a1ee-4a01-a40b-53ad38dbae85",
        description: "Pan de harina de Sarraceno Ecologica. Sin Gluten",
        allergens: "",
        price: 4.90,
    },
    {   id: "d_001",
        name: "Cookies Choco Brownie",
        img: "https://firebasestorage.googleapis.com/v0/b/bocagua-62915.appspot.com/o/Cookies%20choco%20brownie.jpg?alt=media&token=4ac55d5e-a48d-44ba-9ffc-880258f4a655",
        description: "cookies de chocolate brownie",
        allergens: "frutos secos",
        price: 2.50,
    },
    {   id: "d_002",
        name: "Babka",
        img: "https://firebasestorage.googleapis.com/v0/b/bocagua-62915.appspot.com/o/IMG_7637.JPG?alt=media&token=4be2d450-de1c-428e-a940-57720fcbb0c1",
        description: "Babka",
        allergens: "frutos secos",
        price: 5,
    },
    {   id: "t_001",
        name: "Carrot Cake",
        img: "https://firebasestorage.googleapis.com/v0/b/bocagua-62915.appspot.com/o/Carrot%20Cake.jpg?alt=media&token=29d37426-5215-47b6-9f92-66f3cd004a2d",
        description: "Vegana con nueces",
        allergens: "Nueces",
        price: 3,
    },
    {   id : "t_002",
        name: "Platano Flambeado",
        img: "https://firebasestorage.googleapis.com/v0/b/bocagua-62915.appspot.com/o/platano-flambeado-sin-azucar.JPG?alt=media&token=b13c58ec-5684-4af6-854d-5613435f1353",
        description:
            "Con crema de vainilla y queso. Sin azúcares, a base de pasta de dátil casera y sirope de arce.",
        allergens: "",
        price: 4,
    },
    {   id : "t_003",
        name: "Apple Pie",
        img: "https://firebasestorage.googleapis.com/v0/b/bocagua-62915.appspot.com/o/apple-pie-vegana-sin-gluten%20(1).JPG?alt=media&token=839b4c1b-765b-42e7-a91e-0d75b0f582d4",
        description: "Vegana, sin gluten y con nueces",
        allergens: "Nueces",
        price: 4,
    }

]

function getProductData (id){
    const productData = productsArray.find(product =>product.id === id)

    if(productData == undefined) {
        console.log("Product data does not exsit for ID: " + id);
    return undefined;
    }
 return productData;
}


export { productsArray, getProductData } ;