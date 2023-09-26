"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint, render_template, redirect
from api.models.db import db
from api.models.user import User
from api.models.purchase import Purchase
from api.models.product_purchase import ProductPurchase
from api.models.product import Product
from api.models.bestseller import Bestseller
from api.service.user_service import UserService
from api.service.purchase_service import PurchaseService
from api.service.product_service import ProductService
from api.service.bestseller_service import BestsellerService
from api.service.checkout_service import CheckoutService
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import jwt_required, get_jwt_identity, create_access_token, get_jwt
import app
import os
import stripe



api = Blueprint('api', __name__)
user_service = UserService()
product_service = ProductService()
purchase_service = PurchaseService()
bestseller_service = BestsellerService()
checkout_service = CheckoutService()


@api.route('/signup', methods=['POST']) 
def signup():
    password = request.json.get('password', None)
    email = request.json.get('email', None)
    first_name = request.json.get('first_name', None)
    last_name = request.json.get('last_name', None)
    phone_number = request.json.get('phone_number', None)
    address = request.json.get('address', None)
    postal_code = request.json.get('postal_code', None)
    is_active = request.json.get('is_active', True)
    try:
        
        user_service.add_user(password, email, first_name, last_name, phone_number, address, postal_code, is_active)

    except Exception as e:
        print(e)
        return jsonify({'message':f'error: {e}'}), 400

    return jsonify({'message':'all ok'}), 200 
     

@api.route('/users', methods=['GET']) 
def get_users():
    try:
        users = user_service.get_all_users()
        return jsonify({'users': users}), 200 
    except Exception as e:
        return jsonify({'error': str(e)}), 400
    
@api.route('/user/<int:id>', methods=['GET']) 
def get_specific_user(id):
    try:
        user = user_service.get_specific_user(id)
        return jsonify({'user': user.serialize()}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 400
    
@api.route('/user/reset_password', methods=['PUT']) 
@jwt_required()
def reset_password():
    new_password = request.json.get('password')
    try:
        id = get_jwt_identity()
        new_password = user_service.reset_password(id, new_password)
        return jsonify({'message' : 'Password updated succesfully'}), 200
    except Exception as e:
        return jsonify ({'error' : str(e)}), 400

@api.route('/login', methods=['POST'])
def login():
    email = request.json.get("email")
    password = request.json.get("password")
    try:  
        user = user_service.get_user(email, password)
        if user is None: # corrected line
            return jsonify({"msg":"Bad request, email or password not valid"}), 401
        access_token = user_service.login(email, password)
       
        return jsonify({"token": access_token}), 200
       
    except Exception as e:
        return jsonify({"error": e}), 400


@api.route('/product', methods=['GET'])
def get_all_products():
    try:
        products = product_service.get_all_product()
        return jsonify(products), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 400 

@api.route('/product/<int:id>', methods=['GET'])
def get_specific_product(id):
    try:
        product = product_service.get_specific_product(id)
        return jsonify({'product': product.serialize()}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 400

@api.route('/product', methods=['POST'])
def add_product():
    name = request.json.get('name', None)
    ingredients = request.json.get('ingredients', None)
    description = request.json.get('description', None)
    allergens = request.json.get('allergens', None)
    category = request.json.get('category', None)
    weight = request.json.get('weight', None)
    price = request.json.get('price', None)
    quantity = request.json.get('quantity', None)
    available = request.json.get('available', None)
    stock = request.json.get('stock', None)
    
    try:
        new_product = product_service.add_product(name, ingredients, description, allergens, category, weight, price, quantity, available, stock)
        return jsonify({'message': 'Product added successfully'}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 400

@api.route('/product/<int:id>', methods=['PUT'])
def update_product(id):
    name = request.json.get('name', None)
    ingredients = request.json.get('ingredients', None)
    description = request.json.get('description', None)
    allergens = request.json.get('allergens', None)
    category = request.json.get('category', None)
    weight = request.json.get('weight', None)
    price = request.json.get('price', None)
    quantity = request.json.get('quantity', None)
    available = request.json.get('available', None)
    stock = request.json.get('stock', None)
    
    try:
        updated_product = product_service.update_product(id, name, ingredients, description, allergens, category, weight, price,quantity, available, stock)
        return jsonify({'product' : updated_product.serialize()}), 200
    except Exception as e:
        print(e)
        return jsonify({'message':f'error: {e}'}), 400

  

@api.route('/product/<int:id>', methods=['DELETE'])
def delete_product(id):
    try:
        product_service.delete_product(id)
        return jsonify({'message' : 'Product deleted succesfully'}), 200
       
    except Exception as e:
        return jsonify({'error': str(e)}), 400

@api.route('/bestseller', methods=['GET'])
def get_bestseller():
    try:
        bestsellers = bestseller_service.get_all_bestseller()
        return jsonify({'bestsellers': bestsellers}), 200 
    except Exception as e:
        return jsonify({'error': str(e)}), 400

@api.route('/bestseller', methods=['POST'])
def add_bestseller():
    position = request.json.get('position', None)
    product_id = request.json.get('product_id', None)
    #try:
    bestseller_service.add_bestseller(position, product_id)
    return jsonify({'message':'all ok'})
   

@api.route('/bestseller/<int:id>', methods=['PUT'])
def update_bestseller(id):
    position = request.json.get('position', None)
    product_id = request.json.get('product_id', None)
    bestseller_service.update_bestseller(id, position, product_id)
    return jsonify({'message': 'all ok'})

#api stripe

@api.route('/purchase', methods=['POST'])
def add_purchase():
    user_id = request.json.get('user_id', None)
    timestamp = request.json.get('timestamp', None)
    product_list = request.json.get('product_list', [])
    try:
        new_purchase = purchase_service.add_purchase(user_id, timestamp, product_list)
        return jsonify({'message': 'Purchase added successfully'}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 400

@api.route('/purchase', methods=['GET'])
def get_all_purchases():
    try:
        purchases = purchase_service.get_all_purchases()
        return jsonify({'purchases': purchases}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 400

@api.route('/purchase/<int:id>', methods=['GET'])
def get_specific_purchase(id):
    try:
        purchase = purchase_service.get_specific_purchase(id)
        return jsonify({'purchase': purchase.serialize()}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 400

@api.route('/purchase/register', methods=['POST'])
def registerPurchase():
    try:
        user_email = request.json.get('user_email')
        user_address = request.json.get('user_address')
        product_id = request.json.get('product_id')
        amount = request.json.get('amount')
        currency = request.json.get('currency')
        success_url = request.json.get('success_url')
        cancel_url = request.json.get('cancel_url')
        session = checkout_service.create_checkout_session(user_email, user_address, product_id, amount, currency, success_url, cancel_url)
        return jsonify({'session_id': session.id})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@api.route('/purchase/payment', methods=['POST'])
def purchasePayment():
    try:
        session_id = request.json.get('session_id')
        amount = request.json.get('amount')
        currency = request.json.get('currency')
        payment_intent = checkout_service.generate_payment(session_id, amount, currency)
        return jsonify({'payment_intent_id': payment_intent.id})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@api.route('/endpoint', methods=['POST'])
def endpoint():
    try:
        line_items = request.json.get('line_items', [])
        stripe_line_items = []

        for item in line_items:
            stripe_line_item = {
                'price': item['price'],
                'quantity': item['quantity'],
            }
            stripe_line_items.append(stripe_line_item)

        checkout_session = stripe.checkout.Session.create(
            payment_method_types=['card'],
            line_items=stripe_line_items,
            mode='payment',
            success_url='https://andymelr-obscure-orbit-j7x7q65x45j2j6gg-3000.preview.app.github.dev/success',
            cancel_url='https://andymelr-obscure-orbit-j7x7q65x45j2j6gg-3000.preview.app.github.dev/cancel',
        )

        return jsonify({'url': checkout_session.url}), 202

    except Exception as e:
        return str(e)
     
