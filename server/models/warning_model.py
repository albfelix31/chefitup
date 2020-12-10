from server import db


# Reservation table from the database
class WarningModel:
    def __init__(self, userId=None):
        self.database = db.connection
        self.dataCur = db.connection.cursor()
        self.warningId = None
        self.orderNo = None
        self.complainant = None
        self.complainatId = None
        self.comments = None
        self.userId = userId

        if userId is not None:
            self.dataCur.execute(
                'SELECT * FROM Warning WHERE userId = ' + "'" + str(userId) + "'")
            results = self.dataCur.fetchone()
            if results:
                self.complainant = results['complainant']
                self.complainantId = results['complainantId']
                self.comments = results['comments']
                self.orderNo = results['orderNo']

    def setOrderNo(self, orderNo):
        self.orderNo = orderNo

    def setComplainant(self, complainant):
        self.complainant = complainant

    def setComplainantId(self, complainantId):
        self.complainantId = complainantId

    def setComments(self, comments):
        self.comments = comments

    def setUserId(self, userId):
        self.userId = userId

    def getWarning(self):
        self.dataCur.execute(
            'SELECT * FROM Warning WHERE userId = ' + "'" + str(self.userId) + "'")
        results = self.dataCur.fetchall()
        return results

    def sendWarningDelivery(self):
        self.dataCur.execute('INSERT INTO Warning (orderNo,complainant,complainantId,comments,time,guest,userID) VALUES (' + "'" + str(self.orderNo) + "'," "'" + str(self.complainant) +
                             "'," + "'" + str(self.complainantId) + "'," + "'" + str(self.comments) + "'," + "'" + str(self.userId) + "'" + ')')
        self.database.commit()

    def sendWarningChef(self):
        self.dataCur.execute('INSERT INTO Warning (orderNo,complainant,complainantId,comments,time,guest,userID) VALUES (' + "'" + str(self.orderNo) + "'," "'" + str(self.complainant) +
                             "'," + "'" + str(self.complainantId) + "'," + "'" + str(self.comments) + "'," + "'" + str(self.userId) + "'" + ')')
        self.database.commit()

    def isExist(self, userId):
        self.dataCur.execute(
            'SELECT * FROM Warning WHERE userId = ' + "'" + str(userId) + "'")
        results = self.dataCur.fetchone()
        if results:
            return True
        return False

    def updateField(self, field, attribute):
        self.dataCur.execute('UPDATE Warning Set ' + field + ' = ' + "'" + str(
            attribute) + "'" + "WHERE userId = " + "'" + str(self.userId) + "'")
        self.database.commit()
