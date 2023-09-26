from api.models.db import db
from api.models.product import Product
from api.models.bestseller import Bestseller
from flask import request, jsonify
from flask_jwt_extended import  get_jwt_identity, create_access_token
import app

class BestsellerService():
    def get_all_bestseller(self):
        bestsellers = Bestseller.query.all()
        bestsellers = [bestseller.serialize() for bestseller in bestsellers]
        return bestsellers

    def add_bestseller(self, position, product_id):
        new_bestseller = Bestseller(position = position,
                                    product_id = product_id)
        db.session.add(new_bestseller)
        db.session.commit()

    def update_bestseller(self, id, position, product_id):
        bestseller = Bestseller.query.filter_by(id=id).first()
        bestseller.position = position if position is not None else bestseller.position
        bestseller.product_id = product_id if product_id is not None else bestseller.product_id
        db.session.commit()

        