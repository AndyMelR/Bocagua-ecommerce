from api.models.db import db
from api.models.product import Product
from api.models.purchase import Purchase
from sqlalchemy.orm import relationship, backref

class ProductPurchase(db.Model):
    __tablename__ = 'product_purchase'
    id = db.Column(db.Integer, primary_key=True)
    quantity = db.Column(db.Integer)
    product_id = db.Column(db.Integer, db.ForeignKey('product.id'))
    purchase_id = db.Column(db.Integer, db.ForeignKey('purchase.id'))
    product = relationship(Product)

    def __repr__(self):
        return f'<ProductPurchase {self.quantity}{self.product_id}{self.purchase_id}>'

    def serialize(self):
        return {
                "id": self.id,
                "quantity": self.quantity,
                "product_id" : self.product_id,
                "purchase_id" : self.purchase_id,
                "product": self.product.name
                # do not serialize the password, its a security breach
            }
