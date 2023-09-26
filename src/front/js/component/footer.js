import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "../component/footerStyles";

export const Footer = () => {
return (
  <>
		<Box>
		<h1 style={{ color: "#fff",
			backgroundColor: "#45BDAA",
					textAlign: "center",
					marginTop: "-50px" }}>
			"Be Wild, Stay Healthy"
		</h1>
		<Container>
			<Row>
			<Column>
				<Heading>Nosotros</Heading>
				<FooterLink href="/nosotros">Quiénes Somos</FooterLink>
				<FooterLink href="/#slide1">Valores Añadidos</FooterLink>
				
			</Column>
			<Column>
				<Heading>Productos</Heading>
				<FooterLink href="/productos/dulces">Dulces</FooterLink>
				<FooterLink href="/productos/tartas">Tartas</FooterLink>
				<FooterLink href="/productos/panes">Panes</FooterLink>
				<FooterLink href="/catering">Eventos y Catering</FooterLink>
			</Column>
			<Column>
				<Heading>Contacto</Heading>
				<FooterLink href="/contacto">Donde Estamos</FooterLink>
				<FooterLink href="/contacto">Contacto</FooterLink>
		
			</Column>
			<Column>
				<Heading>Social Media</Heading>
				
				<FooterLink target="_blank" href="https://www.instagram.com/_bocagua/">
				<span className="icono"><i className="fab fa-instagram"></i></span>
					<span style={{ marginLeft: "10px" }}>
					Instagram
					</span>
				
				</FooterLink>
				
			</Column>
			</Row>
		</Container>
		</Box>
  </>
);
};


