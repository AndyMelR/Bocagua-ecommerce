from api.models.db import db
from api.models.user import User
from flask import request, jsonify
from flask_jwt_extended import  get_jwt_identity, create_access_token
import app

#preguntar a Hans por el self si solo va aqui o tambien en el arcivo de rutas
class UserService():
    def add_user( self, password, email, first_name, last_name, phone_number, address, postal_code, is_active):
        new_user = User(password = password,
                        email = email,
                        first_name = first_name,
                        last_name = last_name,
                        phone_number = phone_number,
                        address = address,
                        postal_code = postal_code,
                        is_active = is_active)
        db.session.add(new_user)
        db.session.commit()

    def get_all_users(self):
        users = User.query.all()
        users = [user.serialize() for user in users]
        return users

    def get_specific_user(self, id):
        user = User.query.filter_by(id=id).first()
        return user
#aqui entra el id igual que en las rutas? MIRAR ESTE!!
    def reset_password(self, id, new_password):
        user = User.query.filter_by(id=id).first()
        user.password = new_password
        db.session.add(user)
        db.session.commit()
        return new_password

    def get_user(self, email, password):
        return User.query.filter_by(email=email, password=password).first()

    def login(self, email, password):
        user = User.query.filter_by(email=email, password=password).first()
        access_token = create_access_token(identity=user.id)
        return access_token

    

