from hashlib import md5
from io import SEEK_CUR
from random import getstate

from server.models import user_model
from server.models import cart_model
from server.models import employee_profile_model
from flask import (
    Blueprint, flash, g, redirect, render_template, request, session, url_for
)
from werkzeug.security import check_password_hash, generate_password_hash
from flask import current_app
from flask_mail import Message
from flask_mail import Mail
import json
import jwt
import datetime
from server.controllers.token import token_required


bp = Blueprint('Cart', __name__, url_prefix='/Cart')


@bp.route('/getCart',methods=['GET', 'POST'])
def getCart():
    cart = cart_model.CartModel()
    cart.setUserId(session['userId'])
    return json.dumps({'cart': cart.getCart()})
 


@bp.route('/add',methods=['GET', 'POST'])
def addDish():
    error = None
    if request.method == 'POST':
        cart = cart_model.CartModel()
        req = request.json

        if cart.isExist(req['dishId']):
            cart.setUserId(session['userId'])
            cart.updateField('quantity',req["quantity"])
            cart.updateField('price',req["price"])
        else:
            if error is None:
                cart.setPrice(req["price"])
                cart.setQuantity(req['quantity'])
                cart.setDishId(req['dishId'])
                cart.setUserId(session['userId'])
                cart.setChefName(req['chefName'])
                cart.setDishname(req['dishName'])
                cart.addItem()
            
    return json.dumps({'Added': True})

