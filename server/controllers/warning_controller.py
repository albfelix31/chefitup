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


bp = Blueprint('Warning', __name__, url_prefix='/Warning')


@bp.route('/getWarning', methods=['GET', 'POST'])
def getWarning():
    warning = warning_model.WarningModel()
    warning.setUserId(session['userId'])
    return json.dumps({'warning': reservation.getWarning()})


@bp.route('/sendWarningChef', methods=['GET', 'POST'])
def sendWarningChef():
    error = None
    if request.method == 'POST':
        warning = warning_model.WarningModel()
        req = request.json

        if error is None:
            warning.setOrderNo(req["orderNo"])
            warning.setComplainant(req['complainant'])
            warning.setComplainantId(req['complainantId'])
            warning.setComments(req['comments'])
            warning.setUserId(req['userId'])
            warning.sendWarningChef()

    return json.dumps({'Added': True})


@bp.route('/sendWarningDelivery', methods=['GET', 'POST'])
def sendWarningDelivery():
    error = None
    if request.method == 'POST':
        warning = warning_model.WarningModel()
        req = request.json

        if error is None:
            warning.setOrderNo(req["orderNo"])
            warning.setComplainant(req['complainant'])
            warning.setComplainantId(req['complainantId'])
            warning.setComments(req['comments'])
            warning.setUserId(req['userId'])
            warning.sendWarningChef()

    return json.dumps({'Added': True})
