"""empty message

Revision ID: 233ef49606f6
Revises: c73a5a1f96a6
Create Date: 2023-06-18 07:46:35.207816

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '233ef49606f6'
down_revision = 'c73a5a1f96a6'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('product', schema=None) as batch_op:
        batch_op.alter_column('ingredients',
               existing_type=sa.VARCHAR(length=200),
               type_=sa.String(length=500),
               existing_nullable=False)
        batch_op.drop_column('image_url')

    with op.batch_alter_table('product_purchase', schema=None) as batch_op:
        batch_op.drop_column('image_url')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('product_purchase', schema=None) as batch_op:
        batch_op.add_column(sa.Column('image_url', sa.VARCHAR(length=250), autoincrement=False, nullable=False))

    with op.batch_alter_table('product', schema=None) as batch_op:
        batch_op.add_column(sa.Column('image_url', sa.VARCHAR(length=250), autoincrement=False, nullable=False))
        batch_op.alter_column('ingredients',
               existing_type=sa.String(length=500),
               type_=sa.VARCHAR(length=200),
               existing_nullable=False)

    # ### end Alembic commands ###