from api.models.db import db

class User(db.Model): 
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    first_name = db.Column(db.String(200), unique=False, nullable=False)
    last_name =  db.Column(db.String(200), unique=False, nullable=False)
    phone_number = db.Column(db.String(14), unique=False, nullable=False)
    address = db.Column(db.String(300), unique=False, nullable=False)
    postal_code = db.Column(db.String(6), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return f'<User {self.email}{self.password}{self.first_name}{self.last_name}{self.phone_number}{self.address}{self.postal_code}{self.is_active}>'
    

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "first_name" : self.first_name,
            "last_name" : self.last_name,
            "phone_number " :self.phone_number,
            "address" : self.address,
            "postal_code": self.postal_code
            # do not serialize the password, its a security breach
        }