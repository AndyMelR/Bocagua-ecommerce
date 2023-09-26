
from flask import request, jsonify
from flask_jwt_extended import  get_jwt_identity, create_access_token
import app
import os
import stripe

stripe.api_key = os.getenv("STRIPE_API_KEY_PUBLICA")

class CheckoutService:
    @staticmethod
    def create_checkout_session(user_email, user_address, product_id, amount, currency='eur', success_url='', cancel_url=''):
        session = stripe.checkout.Session.create(
            payment_method_types=['card'],
            customer_email=user_email,
            line_items=[{
                'price': product_id,
                'quantity': 1,
            }],
            mode='payment',
            success_url=success_url,
            cancel_url=cancel_url,
            billing_address_collection='required',
            shipping_address_collection={
                'allowed_countries': ['ES']  # Restrict shipping address to specific countries if needed
            },
            metadata={
                'user_address': user_address,
            },
            payment_intent_data={
                'amount': amount,
                'currency': currency,
            }
        )
        return session

    @staticmethod
    def generate_payment(session_id, amount, currency='eur'):
        payment_intent = stripe.PaymentIntent.create(
            payment_method_types=['card'],
            amount=amount,
            currency=currency,
            description='Payment description',
            setup_future_usage='off_session',
            confirm=True,
            payment_method_options={
                'card': {
                    'request_three_d_secure': 'automatic'
                }
            },
            customer=session_id
        )
        return payment_intent
