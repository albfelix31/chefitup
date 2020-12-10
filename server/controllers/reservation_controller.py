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


bp = Blueprint('Reservation', __name__, url_prefix='/Reservation')


@bp.route('/getReservation', methods=['GET', 'POST'])
def getReservation():
    reservation = reservation_model.ReservationModel()
    reservation.setUserId(session['userId'])
    return json.dumps({'reservation': reservation.getReservation()})


@bp.route('/add', methods=['GET', 'POST'])
def addReservation():
    error = None
    if request.method == 'POST':
        reservation = reservation_model.ReservationModel()
        req = request.json

        if reservation.isExist(req['userId']):
            reservation.setUserId(session['userId'])
            reservation.updateField('date', req["date"])
            reservation.updateField('time', req["time"])
            reservation.updateField('guest', req["guest"])

        else:
            if error is None:
                reservation.setFullName(req["fullName"])
                reservation.setPhoneNumber(req['phoneNumber'])
                reservation.setDate(req['date'])
                reservation.setUserId(session['userId'])
                reservation.setTime(req['time'])
                reservation.setGuest(req['guest'])
                reservation.addReservation()

    return json.dumps({'Added': True})
