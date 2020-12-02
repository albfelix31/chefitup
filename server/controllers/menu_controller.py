from hashlib import md5
from io import SEEK_CUR
from random import getstate

from server.models import user_model
from server.models import menu_model
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


bp = Blueprint('Menu', __name__, url_prefix='/Menu')

# Boiler Plate Test Code
@bp.route('/update', methods=['GET', 'POST'])
def updateDish():
    menu = menu_model.MenuModel(session['profileId'])
    user = user_model.UserModel(session['userId'])
    req = request.json
    if md5(req['Password'].encode('utf-8')).hexdigest() == user.getPassword():
        if req['dishName'] != menu.getDishName():
            menu.updateField('dishName',req['dishName'])

        if req['description'] != menu.getDescription():
            menu.updateField('description',req['description'])

        if req['ingredients'] != menu.getDescription():
            menu.updateField('ingredients',req['ingredients'])

        if req['keywords'] != menu.getKeywords():
            menu.updateField('keywords',req['keywords'])

        if req['newPassword']:
            user.updateField('password',req['newPassword'])

        return json.dumps({'error': 'Updated'})

    return json.dumps({'error': 'Current Password is Incorrect'})

@bp.route('/getMenu',methods=['GET', 'POST'])
def showChefMenu():
    menu = menu_model.MenuModel()
    print(menu.showListing(session['userId']))
    return json.dumps({'dishes': menu.showListing(session['profileId'])})

@bp.route('/remove',methods=['GET', 'POST'])
def removeDish():
    error = None
    if request.method == 'POST':
        req = request.json
      
        if error is None:
            menu = menu_model.MenuModel(session['profileId'])
            menu.removeDish(req['dishId'])
            return json.dumps({'Remove': True})

    return json.dumps({'Remove': False, 'error': error})

@bp.route('/add',methods=['GET', 'POST'])
def addDish():
    error = None
    if request.method == 'POST':
        menu = menu_model.MenuModel()
        req = request.json

        if menu.isExist(menu.getDishName):
            error = 'dish already exist'
      
        if error is None:
            print(session['profileId'])
            menu.setDishName(req["dishName"])
            menu.setDescription(req['description'])
            menu.setIngredients(req['ingredients'])
            menu.setKeywords(req['keywords'])
            menu.addDish(session['profileId'])
           
            return json.dumps({'Added': True})

    return json.dumps({'Added': False, 'error': error})