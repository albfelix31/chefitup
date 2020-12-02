from server import db


# Customer table from the database
class CustomerProfileModel:
    def __init__(self,userId = None):
        self.database = db.connection
        self.dataCur = db.connection.cursor()
        self.name = None
        self.address = None
        self.payment = None
        self.balance = None
        self.subscribe = None
        self.approve = None
        self.profileId = None
        if userId is not None:
            self.dataCur.execute('SELECT * FROM CustomerProfile WHERE userId = ' + "'" + str(userId) + "'" )
            results = self.dataCur.fetchone()
            if results:
                self.name = results['name']
                self.address = results['address']
                self.payment = results['payment']
                self.balance = results['balance']
                self.subscribe = results['subscribe']
                self.approve = results['approve']
                self.profileId = results['profileId']
    def setName(self,name):
        self.name = name

    def getName(self):
        return self.name

    def setProfileId(self,profileId):
        self.profileId = profileId

    def setAddress(self,address):
        self.address = address

    def getAddress(self):
        return self.address

    def setPayment(self,payment):
        self.payment = payment

    def getPayment(self):
        return self.payment

    def setBalance(self,balance):
        self.balance = balance

    def getBalance(self):
        return self.balance

    def setSubscribe(self,subscribe):
        self.subscribe = subscribe

    def getSubscribe(self):
        return self.subscribe
  
    def setApprove(self,approve):
        self.approve = approve

    def getApprove(self):
        return self.approve

    def updateField(self,field,attribute):
        self.dataCur.execute('UPDATE CustomerProfile Set ' + field + ' = ' + "'" + attribute + "'" + "WHERE profileId = " + "'" + str(self.profileId) + "'")
        self.database.commit()
    
    def initProfile(self,userId,name,deposit):
        self.dataCur.execute('INSERT INTO CustomerProfile(name,address,payment,balance,subscribe,approve,userId) VALUES (' +  "'" + str(name) + "'," + "'' , '', " +  "'" + str(deposit) + "'," +  " '0', '0'," +  "'" + str(userId) + "'" + ')')
        self.database.commit()

    def getNotApprove(self):
        self.dataCur.execute('SELECT * FROM CustomerProfile WHERE approve = "0"')
        results = self.dataCur.fetchall()
        return results

    def removeCustomer(self,profileId,userId):
        self.dataCur.execute('DELETE FROM CustomerProfile WHERE profileId = ' + "'" + str(profileId) + "'")
        self.dataCur.execute('DELETE FROM User WHERE userId = ' + "'" + str(userId) + "'")
        self.database.commit()

    def getCustomer(self):
        self.dataCur.execute('SELECT * FROM CustomerProfile WHERE approve = "1"')
        results = self.dataCur.fetchall()
        return results