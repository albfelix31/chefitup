from server import db
from hashlib import md5

# User table from the database
class EmployeeProfileModel:
    def __init__(self,userId = None):
        self.database = db.connection
        self.dataCur = db.connection.cursor()
        self.firstName = None
        self.lastName = None
        self.phoneNumber = None
        self.employeeId = None
        self.position = None
        self.salary = None
        self.userId = userId

        if userId is not None:
            self.dataCur.execute('SELECT * FROM EmployeeProfile WHERE userId = ' + "'" + str(userId) + "'" )
            results = self.dataCur.fetchone()
            if results:
                self.firstName = results['firstName']
                self.lastName = results['lastName']
                self.phoneNumber = results['phone']
                self.employeeId = results['employeeId']
                self.position = results['position']
                self.salary = results['salary']
                

    def setFirstName(self,firstName):
        self.firstName = firstName

    def setLastName(self,lastName):
        self.lastName = lastName

    def setPhoneNumber(self,phoneNumber):
        self.phoneNumber = phoneNumber

    def setEmployeeId(self,employeeId):
        self.employeeId = employeeId

    def setPosition(self,position):
        self.position = position

    def setSalary(self,salary):
        self.salary = salary


    def getFirstName(self):
        return self.firstName

    def getLastName(self):
        return self.lastName

    def getPhoneNumber(self):
        return self.phoneNumber

    def getEmployeeId(self):
        return self.employeeId

    def getPosition(self):
        return self.position 

    def getSalary(self):
        return self.salary 

    def updateField(self,field,attribute):
        self.dataCur.execute('UPDATE EmployeeProfile Set ' + field + ' = ' + "'" + attribute + "'" + "WHERE userId = " + "'" + str(self.userId) + "'")
        self.database.commit()
    
    def initProfile(self,userId):
        self.dataCur.execute('INSERT INTO EmployeeProfile(firstName,lastName,employeeId,joiningDate,phone,state,position,salary,userId) VALUES ('  +  "'" + str(self.firstName) + "'," + "'" + str(self.lastName) + "'," + "'" + str(self.employeeId) + "'," + 'NOW(), ' + "'" + str(self.phoneNumber) + "'," + "'" + str(self.position) + "'," + "'" + str(self.salary) + "'," + "'" + str(userId) + "'" + ')')
        self.database.commit()
