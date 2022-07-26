from .db import db

class Inventory(db.Model):
    __tablename__ = 'inventories'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False, unique=True)
    slugs = db.Column(db.String, nullable=True)

    users = db.relationship('User', back_populates='inventories')

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'slugs': self.slugs
        }
