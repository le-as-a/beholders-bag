from app.models import db, Inventory

def seed_inventories():
    demo = Inventory(
        user_id=1
    )

    db.session.add(demo)
    db.session.commit()

def undo_inventories():
    db.session.execute('TRUNCATE inventories RESTART IDENTITY CASCADE;')
    db.session.commit()
