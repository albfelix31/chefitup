from hashlib import md5
from io import SEEK_CUR
from random import getstate

from server.models import user_model
from server.models import customer_profile_model
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


bp = Blueprint('customerprofile', __name__, url_prefix='/customerprofile')

# Boiler Plate Test Code
@bp.route('/update', methods=['GET', 'POST'])
def updateProfile():
    customerProfle = customer_profile_model.CustomerProfileModel(session['userId'])
    user = user_model.UserModel(session['userId'])
    req = request.json
    if md5(req['Password'].encode('utf-8')).hexdigest() == user.getPassword():
        if req['name'] != customerProfle.getName():
            customerProfle.updateField('firstName',req['firstName'])

        if req['address'] != customerProfle.getAddress():
            customerProfle.updateField('phoneNumber',req['phoneNumber'])

        if req['payment'] != customerProfle.getPayment():
            customerProfle.updateField('street',req['address'])

        if req['balance'] != customerProfle.getBalance():
            customerProfle.updateField('city',req['city'])

        if req['subscribe'] != customerProfle.getSubscribe():
            customerProfle.updateField('state',req['state'])

        if req['newPassword']:
            user.updateField('password',req['newPassword'])

        return json.dumps({'error': 'Updated'})

    return json.dumps({'error': 'Current Password is Incorrect'})

@bp.route('/getProfile',methods=['GET', 'POST'])
def getProfile():
    customerProfle = customer_profile_model.CustomerProfileModel(session['userId'])
    profile = {'name': customerProfle.getName(),'address': customerProfle.getAddress(), 'payment':customerProfle.getPayment(), 'balance': customerProfle.getBalance(), 'subscribe': customerProfle.getSubscribe()}
    return json.dumps({'profile': profile})

@bp.route('/checkApprove',methods=['GET', 'POST'])
def getNotApprove():
    customerProfle = customer_profile_model.CustomerProfileModel()
    customers = customerProfle.getNotApprove()
    for i in range(len(customers)):
        user = user_model.UserModel(customers[i]['userId'])
        customers[i]['userName'] = user.getUserName()
        customers[i]['email'] = user.getEmail()
        customers[i]['userId'] = user.getUserId()
    return json.dumps({'customers': customers})

@bp.route('/approve',methods=['GET', 'POST'])
def approve():
    customerProfle = customer_profile_model.CustomerProfileModel()
    req = request.json
    if req['approve'] == 1:
        customerProfle.setProfileId(req['profileId'])
        customerProfle.updateField("approve","1")
    else:
        customerProfle.removeCustomer(req['profileId'],req['userId'])
    return json.dumps({'status': "done"})


@bp.route('/getCustomer',methods=['GET', 'POST'])
def getCustomer():
    customerProfle = customer_profile_model.CustomerProfileModel()
    customers = customerProfle.getCustomer()
    for i in range(len(customers)):
        user = user_model.UserModel(customers[i]['userId'])
        customers[i]['userName'] = user.getUserName()
        customers[i]['email'] = user.getEmail()
        customers[i]['userId'] = user.getUserId()
        customers[i]['registrationDate'] = user.getRegistrationDate()
    return json.dumps({'customers': customers})

