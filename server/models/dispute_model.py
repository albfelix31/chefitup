from server import db


# Reservation table from the database
class DisputeModel:
    def __init__(self, userId=None):
        self.database = db.connection
        self.dataCur = db.connection.cursor()
        self.disputeId = None
        self.orderNo = None
        self.explanation = None
        self.userId = None

        if userId is not None:
            self.dataCur.execute(
                'SELECT * FROM Dispute WHERE userId = ' + "'" + str(userId) + "'")
            results = self.dataCur.fetchone()
            if results:
                self.explanation = results['explanation']
                self.orderNo = results['orderNo']

    def setOrderNo(self, orderNo):
        self.orderNo = orderNo

    def setUserId(self, userId):
        self.userId = userId

    def setExplanation(self, explanation):
        self.explanation = explanation

    def getDispute(self):
        self.dataCur.execute(
            'SELECT * FROM Dispute')
        results = self.dataCur.fetchall()
        return results

    def sendDispute(self):
        self.dataCur.execute('INSERT INTO Dispute (orderNo,explanation,userId) VALUES (' + "'" + str(self.orderNo) + "'," "'" + str(self.explanation) +
                             "'," + "'" + str(self.userId) + "'," + ')')
        self.database.commit()

    def isExist(self, userId):
        self.dataCur.execute(
            'SELECT * FROM Warning WHERE userId = ' + "'" + str(userId) + "'")
        results = self.dataCur.fetchone()
        if results:
            return True
        return False

    def updateField(self, field, attribute):
        self.dataCur.execute('UPDATE Dispute Set ' + field + ' = ' + "'" + str(
            attribute) + "'" + "WHERE userId = " + "'" + str(self.userId) + "'")
        self.database.commit()
