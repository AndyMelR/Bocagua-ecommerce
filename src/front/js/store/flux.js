import { createContext, useContext } from 'react';


// Custom hook to access the store
export const useStore = () => useContext(Context);


const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      message: null,
      user: {},
      products: [],
      bestsellers: null,
      purchases: [],
      cart: [],
      checkout : [],
      token:""
    },
    actions: {
      setSignup: async (
        first_name,
        last_name,
        phone_number,
        address,
        postal_code,
        email,
        password
      ) => {
        const response = await fetch(process.env.BACKEND_URL + "/api/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            first_name,
            last_name,
            phone_number,
            address,
            postal_code,
            email,
            password,
          }),
          mode: "cors",
        });
        const user = await response.json();
        setStore({ ...getStore(), user });
        //const newUser = await response.json();
        //setStore({user: newUser})
      },

      setUser: async (email, password) => {
        const response = await fetch(process.env.BACKEND_URL + "/api/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body:JSON.stringify({
            email,
            password,
          }) ,
        });
        if (!response.ok) throw Error("There was a problem in the login request");

        if (response.status === 401) {
          throw "Invalid credentials";
        } else if (response.status === 400) {
          throw "Invalid email or password format";
        }
        const {token} = await response.json();
        setStore({ ...getStore(), token });
      },

      getUser: async () => {
        const token = getStore().user.token; // <-- obtener token de user del store
        const response = await fetch(process.env.BACKEND_URL + "/api/user", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token, // ⬅⬅⬅ authorization token
          },
        });
        const user = await response.json();
        setStore({ ...getStore(), user });
      },

      getProducts: async () => {
        try {
          const response = await fetch(process.env.BACKEND_URL + "/api/product");
          const products = await response.json();
          setStore({ product: products });
          return products;
        } catch (error) {
          console.log("Error loading products from backend", error);
        }
      },

      addProduct: async (
        name,
        ingredients,
        description,
        allergens,
        category,
        weight,
        price,
        quantity,
        available,
        stock
      ) => {
        try {
          const response = await fetch(
            process.env.BACKEND_URL + "/api/product",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                name,
                ingredients,
                description,
                allergens,
                category,
                weight,
                price,
                quantity,
                available,
                stock,
              }),
            }
          );

          const data = await response.json();
          setStore({ ...getStore(), products: data });
          return products;
        } catch (error) {
          console.log("Error adding products to backend", error);
        }
      },

      updateProduct: async (productId, updatedProduct) => {
        try {
          const response = await fetch(
            process.env.BACKEND_URL + "/api/product/" + productId,
            {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(updatedProduct),
            }
          );
          const result = await response.json();
          if (result.success) {
            // Update the store with the new product data
            const store = getStore();
            const updatedProducts = store.products.map((product) =>
              product.id === productId
                ? { ...product, ...updatedProduct }
                : product
            );
            setStore({ ...getStore(), products: updatedProducts });
          }
        } catch (error) {
          console.error("Error updating product:", error);
        }
      },
      
      deleteProduct: async (productId) => {
        try {
          const response = await fetch(
            process.env.BACKEND_URL + "/api/product/" + productId,
            {
              method: "DELETE",
              headers: {
                "Content-Type": "application/json",
              },
            }
          );

          if (!response.ok) {
            throw new Error("Error deleting product");
          }

          // Remove the deleted product from the store's products array
          const store = getStore();
          const updatedProducts = store.products.filter(
            (product) => product.id !== productId
          );
          setStore({ ...getStore(), products: updatedProducts });
        } catch (error) {
          console.error(error);
        }
      },

      getBestsellers: async () => {
        try {
          const response = await fetch(
            process.env.BACKEND_URL + "/api/bestseller"
          );
          const bestsellers = await response.json();
          setStore({ ...getStore(), bestsellers });
        } catch (error) {
          console.log("Error loading bestsellers from backend", error);
        }
      },


      getPurchases: async () => {
        const response = await fetch(process.env.BACKEND_URL + "/api/purchase");
        const purchases = await response.json();
        setStore({ ...getStore(), purchases });
      },

      addPurchase: async (userId, timestamp, productList) => {
        const response = await fetch(process.env.BACKEND_URL + "/api/purchase", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId,
            timestamp,
            productList,
          }),
        });
        const purchase = await response.json();
        setStore({ ...getStore, purchase });
      },

      getPurchaseById: async (purchaseId) => {
        const response = await fetch(
          process.env.BACKEND_URL + "/api/purchase/" + purchaseId,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const purchase = await response.json();
        setStore({ ...getStore, purchase });
      },

      // [{id:1, quantity :2}]
      getProductQuantity: (id) => {
         const cartProducts = getStore().cart;
         const quantity = cartProducts.find(product => product.id === id)?.quantity

         if (quantity = undefined) {
          return 0;
         }
         return quantity

      },

      addOneToCart: async (id) => {
        const quantity = getProductQuantity(id);
        const cartProducts = getStore().cart;
      
        if (quantity === 0) {  // Product is not in cart
          setStore({
            ...getStore(),
            cart: [
              ...cartProducts,
              {
                id: id,
                quantity: 1
              }
            ]
          });
        } else { // Product is already in cart
          setStore({
            ...getStore(),
            cart: cartProducts.map(product =>
              product.id === id
                ? { ...product, quantity: product.quantity + 1 }
                : product
            )
          });
        }
      },
      
      removeOneFromCart: async (id) => {
        const quantity = getProductQuantity(id);
        const cartProducts = getStore().cart;
      
        if (quantity === 0) {  
          setStore({
            ...getStore(),
            cart: [
              ...cartProducts,
              {
                id: id,
                quantity: 1
              }
            ]
          });
        } else {
          setStore({
            ...getStore(),
            cart: cartProducts.map(product =>
              product.id === id
                ? { ...product, quantity: product.quantity - 1 }
                : product
            )
          });
        }
      },

      deleteFromCart: async (id) => {
        const store = getStore();
        const updatedCart = store.cart.filter((item)=>item !== id);
        setStore({ ...getStore(), cart: updatedCart });
      },

      deleteFavorites: (name) =>{
				const store = getStore();
				let newFavorites = store.favorites.filter((item)=>item !== name);
				setStore({favorites:newFavorites})
			},

      addProductToCart: async (product) => {
        const cart = getStore().cart;
        let updatedCart = [];
        let productExists = false;
      
        // Check if the product already exists in the cart
        updatedCart = cart.map(currentProduct => {
          if (currentProduct === product) {
            productExists = true;
            return { ...currentProduct, quantity: currentProduct.quantity + 1 };
          }
          return currentProduct;
        });
      
        // If the product doesn't exist, add it to the cart
        if (!productExists) {
          updatedCart = [...cart, { ...product, quantity: 1 }];
        }
      
        setStore({ ...getStore(), cart: updatedCart });
      },
      

      deleteAllProductsFromCart: async () => {
        setStore({ ...getStore(), cart: [] });
      },
      

      getTotalCost: () => {
        const cart = getStore().cart;
        let totalCost = 0;
      
        // Iterate over the cart and sum up the product costs
        cart.map(cartItem => {
          const productData = getProductQuantity(cartItem.id);
          totalCost += cartItem.price * productData;
        });
      
        return totalCost;
      },
      
      

      addCheckoutPage: async (price, quantity) => {
        try {
          const response = await fetch(
            process.env.BACKEND_URL + "/api/create-checkout-session",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                price,
                quantity,
              }),
            }
          );

          const checkout = await response.json();
          window.location.href = checkout.session_url; // Redirect to Stripe checkout session
        } catch (error) {
          console.log("Error creating checkout session:", error);
        }
      },
      
      addCartProductsToCheckout: async () => {
        const cart = getStore().cart;
        const totalPrice = cart.reduce((total, product) => total + product.price, 0);
        const totalQuantity = cart.length;

        getActions().addCheckoutPage(totalPrice, totalQuantity);
      },

      checkout: async () => {
        const store = getStore();
        const lineItems = store.cart.map(item => ({
          
          price: item.id,
          quantity: item.quantity
        }));
        console.log(lineItems)
      
        try {
          const response = await fetch(process.env.BACKEND_URL + "/api/endpoint", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              line_items: lineItems
            })
          });
      
          const url = await response.json()
         return url
      
        } catch (error) {
          console.log("Error creating checkout session:", error);
        }
      },
      
      

      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },

      getMessage: async () => {
        try {
          // fetching data from the backend
          const resp = await fetch(process.env.BACKEND_URL + "/api/hello");
          const data = await resp.json();
          setStore({ message: data.message });
          // don't forget to return something, that is how the async resolves
          return data;
        } catch (error) {
          console.log("Error loading message from backend", error);
        }
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
    },
  };
};

export default getState;
