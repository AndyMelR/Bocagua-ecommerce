from api.models.db import db
from api.models.user import User
from sqlalchemy.orm import relationship

class Purchase(db.Model):
    __tablename__ = 'purchase'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    user = relationship(User)
    timestamp = db.Column(db.DateTime)
    products = relationship('ProductPurchase', backref='purchase')

    def __repr__(self):
          return f'<Purchase {self.user_id}{self.timestamp}>'
    
    def serialize(self):
            return {
                "id": self.id,
                "user_id": self.user_id,
                "timestamp": self.timestamp,
                "products": [product.serialize() for product in self.products]
                # do not serialize the password, its a security breach
            }

   