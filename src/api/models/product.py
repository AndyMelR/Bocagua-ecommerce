from api.models.db import db

class Product(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(150), unique=True, nullable=False)
    ingredients = db.Column(db.String(500), unique=False, nullable=False)
    description = db.Column(db.String(150), unique=False, nullable=False)
    allergens = db.Column(db.String(200), unique=False, nullable=True)
    category = db.Column(db.String(150), unique=False, nullable=False)
    weight = db.Column(db.Float, unique=False, nullable=True)
    price = db.Column(db.Float, unique=False, nullable=False)
    quantity = db.Column(db.Integer)
    available = db.Column(db.Boolean(), unique=False, nullable=False)
    stock = db.Column(db.Integer, unique=False, nullable=False)
    
    

    def __repr__(self):
            return f'<Product {self.name}{self.ingredients}{self.description}{self.allergens}{self.category}{self.weight}{self.price}{self.quantity}{self.available}{self.stock}>'

    def serialize(self):
            return {
                "id": self.id,
                "name": self.name,
                "ingredients" : self.ingredients,
                "description" : self.description,
                "allergens " :self.allergens,
                "category" : self.category,
                "weight" : self.weight,
                "price" : self.price,
                "quantity" : self.quantity,
                "available": self.available,
                "stock":self.stock
                # do not serialize the password, its a security breach
            }