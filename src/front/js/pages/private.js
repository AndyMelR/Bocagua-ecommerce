import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const Private = () => {
  const [users, setUsers] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      fetch(process.env.BACKEND_URL + "/api/private", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.users) {
            setUsers(data.users);
            console.log(data);
          } else {
            alert("Something went wrong");
          }
        });
    } else {
      navigate("/signup");
    }
  }, []);
  return (
    <>
      <h1>Mi Cuenta:</h1>
      <h2>Bienvenido, {data.user.getItem("first_name")}</h2>
      <p>Mis pedidos</p>
      <p>Mis facturas</p>
    </>
  );
};
export default Private;












