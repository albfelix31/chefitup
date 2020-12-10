from server import db


# Menu table from the database
class CartModel:
    def __init__(self,userId = None):
        self.database = db.connection
        self.dataCur = db.connection.cursor()
        self.cartId = None
        self.price = None
        self.quantity = None
        self.dishId = None
        self.userId = userId
        self.dishName = None
        self.chefName = None

        if userId is not None:
            self.dataCur.execute('SELECT * FROM Cart WHERE userId = ' + "'" + str(userId) + "'" )
            results = self.dataCur.fetchone()
            if results:
                self.cartId = results['cartId']
                self.price = results['price']
                self.quantity = results['quantity']
                self.dishId = results['dishId']
                self.dishName = results['dishName']
                self.chefName = results['chefName']


    def setPrice(self,price):
        self.price = price

    def setQuantity(self,quantity):
        self.quantity = quantity

    def setDishId(self,dishId):
        self.dishId = dishId

    def setUserId(self,userId):
        self.userId = userId

    def setDishname(self,dishName):
        self.dishName = dishName

    def setChefName(self,chefName):
        self.chefName = chefName

    def getCart(self):
        self.dataCur.execute('SELECT * FROM Cart WHERE userId = ' + "'" + str(self.userId) + "'")
        results = self.dataCur.fetchall()
        return results

    def addItem(self):
        self.dataCur.execute('INSERT INTO Cart(price,quantity,dishId,chefName,dishName,userID) VALUES (' +  "'" + str(self.price) + "'," "'" + str(self.quantity) + "'," + "'" + str(self.dishId) + "'," + "'" + str(self.chefName) + "'," + "'" + str(self.dishName) + "'," + "'" + str(self.userId) + "'"  +  ')')
        self.database.commit()

    def isExist(self,dishId):
        self.dataCur.execute('SELECT * FROM Cart WHERE dishId = ' + "'" + str(dishId) + "'")
        results = self.dataCur.fetchone()
        if results:
            return True
        return False

    def updateField(self,field,attribute):
        self.dataCur.execute('UPDATE Cart Set ' + field + ' = ' + "'" + str(attribute) + "'" + "WHERE userId = " + "'" + str(self.userId) + "'")
        self.database.commit()
    
    