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


bp = Blueprint('Dispute', __name__, url_prefix='/Dispute')


@bp.route('/getDispute', methods=['GET', 'POST'])
def getDispute():
    dispute = dispute_model.disputeModel()
    return json.dumps({'dispute': reservation.getDispute()})


@bp.route('/sendDispute', methods=['GET', 'POST'])
def sendDispute():
    error = None
    if request.method == 'POST':
        dispute = dispute_model.DisputeModel()
        req = request.json

        if error is None:
            dispute.setOrderNo(req["orderNo"])
            dispute.setUserId(req['userId'])
            dispute.setExplanation(req['explanation'])

    return json.dumps({'Added': True})
