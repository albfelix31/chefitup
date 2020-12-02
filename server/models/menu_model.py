from server import db


# Menu table from the database
class MenuModel:
    def __init__(self,profileId = None):
        self.database = db.connection
        self.dataCur = db.connection.cursor()
        self.dishName = None
        self.description = None
        self.ingredients = None
        self.keywords = None
        self.profileId = profileId
        self.dishId = None

        if profileId is not None:
            self.dataCur.execute('SELECT * FROM Menu WHERE profileId = ' + "'" + str(profileId) + "'" )
            results = self.dataCur.fetchone()
            if results:
                self.dishName = results['dishName']
                self.description = results['description']
                self.ingredients = results['ingredients']
                self.keywords = results['keywords']
                self.dishId = results['dishId']


    def getDishId(self):
        return self.getDishId

    def setDishName(self,dishName):
        self.dishName = dishName

    def setDescription(self,description):
        self.description = description

    def setIngredients(self,ingredients):
        self.ingredients = ingredients

    def setKeywords(self,keywords):
        self.keywords = keywords

    def getDishName(self):
        return self.dishName

    def getDescription(self):
        return self.description

    def getIngredients(self):
        return self.ingredients

    def getKeywords(self):
        return self.keywords

    def updateField(self,field,attribute):
        self.dataCur.execute('UPDATE Menu Set ' + field + ' = ' + "'" + attribute + "'" + "WHERE profileId = " + "'" + str(self.profileId) + "'")
        self.database.commit()
    
    def addDish(self,profileId):
        self.dataCur.execute('INSERT INTO Menu(dishName,description,ingredients,keywords,profileId) VALUES (' +  "'" + str(self.dishName) + "'," "'" + str(self.description) + "'," + "'" + str(self.ingredients) + "'," + "'" + str(self.keywords) + "',"  + "'" + str(profileId) + "'" + ')')
        self.database.commit()

    def removeDish(self,dishId):
        self.dataCur.execute('DELETE FROM Menu WHERE dishId = ' + "'" + str(dishId)  + "'" )
        self.database.commit()

    def isExist(self,dishName):
        self.dataCur.execute('SELECT * FROM Menu WHERE dishname = ' + "'" + str(dishName) + "'")
        results = self.dataCur.fetchone()
        if results:
            return True
        return False

    def showListing(self,profileId):
        self.dataCur.execute('SELECT * FROM Menu WHERE profileId = ' + "'" + str(profileId) + "'")
        results = self.dataCur.fetchall()
        return results