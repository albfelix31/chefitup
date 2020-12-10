from server import db


# Reservation table from the database
class ReservationModel:
    def __init__(self, userId=None):
        self.database = db.connection
        self.dataCur = db.connection.cursor()
        self.reservationId = None
        self.fullName = None
        self.phoneNumber = None
        self.date = None
        self.userId = userId
        self.time = None
        self.guest = None

        if userId is not None:
            self.dataCur.execute(
                'SELECT * FROM Reservation WHERE userId = ' + "'" + str(userId) + "'")
            results = self.dataCur.fetchone()
            if results:
                self.FullName = results['fullName']
                self.phoneNumber = results['phoneNumber']
                self.date = results['date']
                self.time = results['time']
                self.guest = results['guest']

    def setFullName(self, fullName):
        self.fullName = fullName

    def setPhoneNumer(self, phoneNumber):
        self.phoneNumber = phoneNumber

    def setDate(self, date):
        self.date = date

    def setUserId(self, userId):
        self.userId = userId

    def setTime(self, time):
        self.time = time

    def setGuest(self, guest):
        self.guest = guest

    def getReservation(self):
        self.dataCur.execute(
            'SELECT * FROM Reservation WHERE userId = ' + "'" + str(self.userId) + "'")
        results = self.dataCur.fetchall()
        return results

    def addReservation(self):
        self.dataCur.execute('INSERT INTO Reservation(fullName,phoneNumber,date,time,guest,userID) VALUES (' + "'" + str(self.fullName) + "'," "'" + str(self.phoneNumber) +
                             "'," + "'" + str(self.date) + "'," + "'" + str(self.time) + "'," + "'" + str(self.guest) + "'," + "'" + str(self.userId) + "'" + ')')
        self.database.commit()

    def isExist(self, userId):
        self.dataCur.execute(
            'SELECT * FROM Reservation WHERE userId = ' + "'" + str(userId) + "'")
        results = self.dataCur.fetchone()
        if results:
            return True
        return False

    def updateField(self, field, attribute):
        self.dataCur.execute('UPDATE Reservation Set ' + field + ' = ' + "'" + str(
            attribute) + "'" + "WHERE userId = " + "'" + str(self.userId) + "'")
        self.database.commit()
