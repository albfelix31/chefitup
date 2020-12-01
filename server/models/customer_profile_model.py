from flask import app
from server import db
from hashlib import md5

# User table from the database
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

    def setName(self,name):
        self.name = name

    def getName(self):
        return self.name

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
        self.dataCur.execute('UPDATE CustomerProfile Set ' + field + ' = ' + "'" + attribute + "'" + "WHERE userId = " + "'" + str(self.userId) + "'")
        self.database.commit()
    
    def initProfile(self,userId,name):
        self.dataCur.execute('INSERT INTO CustomerProfile(name,address,payment,balance,subscribe,approve,userId) VALUES (' +  "'" + str(name) + "'," + "'' , '', '0', '0', '0'," +  "'" + str(userId) + "'" + ')')
        self.database.commit()