from api.models.db import db
from api.models.product import Product
from flask import request, jsonify
from flask_jwt_extended import  get_jwt_identity
import app


class ProductService():
    def get_all_product(self):
        products = Product.query.all()
        products = [product.serialize() for product in products]
        return products


    def get_specific_product(self, id):
        product = Product.query.filter_by(id=id).first()
        return product


    def add_product(self, name, ingredients, description, allergens, category, weight, price, available, stock):
        new_product = Product(name = name,
                            ingredients = ingredients,
                            description = description,
                            allergens = allergens,
                            category = category,
                            weight = weight,
                            price = price,
                            available = available,
                            stock = stock)
        db.session.add(new_product)
        db.session.commit()
         

    def update_product(self, id, name, ingredients, description, allergens, category, weight, price,quantity, available, stock):
        product = Product.query.filter_by(id=id).first()
        product.name = name if name is not None else product.name
        product.ingredients = ingredients if ingredients is not None else product.ingredients
        product.description = description if description is not None else product.description
        product.allergens = allergens if allergens is not None else product.allergens
        product.category = category if category is not None else product.category
        product.weight = weight if weight is not None else product.weight
        product.price = price if price is not None else product.price
        product.quantity = quantity if quantity is not None else product.quantity
        product.available = available if available is not None else product.available
        product.stock = stock if stock is not None else product.stock
        db.session.commit()
        return product

    def delete_product(self, id): 
        product = Product.query.get(id)
        if product is not None:
            db.session.delete(product)
            db.session.commit()
            return jsonify({'message': 'Product deleted successfully'}), 200
        else:
            return jsonify({'error': 'Product not found'}), 404

    
