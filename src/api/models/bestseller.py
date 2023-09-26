from api.models.db import db
from api.models.product import Product
from sqlalchemy.orm import relationship

class Bestseller(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    product_id = db.Column(db.Integer, db.ForeignKey('product.id'))
    product = relationship(Product)
    position = db.Column(db.Integer)

    def __repr__(self):
        return f'<Bestseller {self.product_id}{self.position}>'

    def serialize(self):
        return {
            "id": self.id,
            "product_id": self.product_id,
            "position" : self.position,
            "product": self.product.serialize() if self.product else None
            
        }
