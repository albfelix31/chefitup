from hashlib import md5
from io import SEEK_CUR
from random import getstate

from server.models import user_model
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


bp = Blueprint('employeeProfile', __name__, url_prefix='/employeeProfile')

# Boiler Plate Test Code


@bp.route('/update', methods=['GET', 'POST'])
def updateProfile():
    employeeProfile = employee_profile_model.EmployeeProfileModel(
        session['userId'])
    user = user_model.UserModel(session['userId'])
    req = request.json
    if md5(req['Password'].encode('utf-8')).hexdigest() == user.getPassword():
        if req['firstName'] != employeeProfile.getFirstName():
            employeeProfile.updateField('firstName', req['firstName'])

        if req['lastName'] != employeeProfile.getLastName():
            employeeProfile.updateField('lastName', req['lastName'])

        if req['employeeId'] != employeeProfile.getEmployeeId():
            employeeProfile.updateField('employeeId', req['employeeId'])

        if req['phone'] != employeeProfile.getPhoneNumber():
            employeeProfile.updateField('phone', req['phone'])

        if req['position'] != employeeProfile.getPosition():
            employeeProfile.updateField('position', req['position'])

        if req['salary'] != employeeProfile.getSalary():
            employeeProfile.updateField('salary', req['salary'])

        if req['newPassword']:
            user.updateField('password', req['newPassword'])

        return json.dumps({'error': 'Updated'})

    return json.dumps({'error': 'Current Password is Incorrect'})


@bp.route('/getEmployee', methods=['GET', 'POST'])
def getEmployee():
    employeeProfile = employee_profile_model.EmployeeProfileModel()
    employeeProfile = employeeProfile.getEmployee()
    for i in range(len(employeeProfile)):
        user = user_model.UserModel(employeeProfile[i]['userId'])
        employeeProfile[i]['userName'] = user.getUserName()
        employeeProfile[i]['email'] = user.getEmail()
        employeeProfile[i]['userId'] = user.getUserId()
        employeeProfile[i]['registrationDate'] = user.getRegistrationDate()
    return json.dumps({'employees': employeeProfile})


@bp.route('/add', methods=['GET', 'POST'])
def addEmployee():
    error = None
    if request.method == 'POST':

        req = request.json
        username = req['userName']
        email = req['email']
        password = req['password']
        user = user_model.UserModel()
        employeeProfile = employee_profile_model.EmployeeProfileModel()
        req = request.json

        if user.isExist("userName", username):
            error = 'Username already taken'
        elif user.isExist("email", email):
            error = 'Email already used'
        if error is None:
            user.setUserName(username)
            user.setEmail(email)
            user.setPassword(password)
            user.setType("e")
            user.insertUser()
            user.setUser(username)
            employeeProfile.setFirstName(req['firstName'])
            employeeProfile.setLastName(req['lastName'])
            employeeProfile.setEmployeeId(req['employeeId'])
            employeeProfile.setPhoneNumber(req['phoneNumber'])
            employeeProfile.setPosition(req['position'])
            employeeProfile.setSalary(req['salary'])
            employeeProfile.addEmployee(user.getUserId())
            return json.dumps({'Added': True})

    return json.dumps({'Added': False, 'error': error})


@bp.route('/remove', methods=['GET', 'POST'])
def removeDish():
    error = None
    if request.method == 'POST':
        req = request.json

        if error is None:
            employeeProfile = employee_profile_model.EmployeeProfileModel(
                req['profileId'])
            employeeProfile.removeEmployee(req['profileId'], req['userId'])
            return json.dumps({'Remove': True})

    return json.dumps({'Remove': False, 'error': error})
