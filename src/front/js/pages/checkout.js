{/*import React from "react";
import "../../styles/checkout.css";
import {CheckoutPage, Message} from "../component/checkoutPage.js"


const Checkout = () => {
        const [message, setMessage] = useState("");
      
        useEffect(() => {
          // Check to see if this is a redirect back from Checkout
          const query = new URLSearchParams(window.location.search);
      
          if (query.get("success")) {
            setMessage("Order placed! You will receive an email confirmation.");
          }
      
          if (query.get("canceled")) {
            setMessage(
              "Order canceled -- continue to shop around and checkout when you're ready."
            );
          }
        }, []);
      
        return message ? (
          <Message message={message} />
        ) : (
          <CheckoutPage />
        );
      }


    export default Checkout;*/}