from api.models.db import db
from api.models.purchase import Purchase
from api.models.product_purchase import ProductPurchase
from flask import request, jsonify
from flask_jwt_extended import  get_jwt_identity
import app

class PurchaseService():
    def add_purchase(self, user_id, timestamp, product_list):
        purchase = Purchase(user_id= user_id, timestamp = timestamp)
        for product in product_list:
            product_purchase = ProductPurchase(quantity= product["quantity"], product_id=product["product_id"])
            purchase.products.append(product_purchase)
        db.session.add(purchase) 
        db.session.commit()  

    def get_all_purchases(self):
        purchases = Purchase.query.options(db.joinedload(Purchase.products)).all()
        purchases = [purchase.serialize() for purchase in purchases]
        return purchases

    def get_specific_purchase(self, id):
        purchase = Purchase.query.filter_by(id=id).first()
        return purchase     

