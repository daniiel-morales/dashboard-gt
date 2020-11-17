from json import dumps as toJSON
import pymongo
import dns

myclient = pymongo.MongoClient('MONGO-PRIVATE-URL')
mydb = myclient['Ministerio']
mycol = mydb['Grafica']

document = list()

with open("data.csv") as file:

    data = file.read().split("\r\n")

    for tupla in data:
        record = tupla.split(",")
        if record[0] == '\xef\xbb\xbfano' or record[0] == '':
            continue

        document.append({ "ano": int(record[0]), "asignado": int(record[1]), "presupuesto": int(record[2]) })

    mycol.insert_one({"_id" : 14, "MAGA" : document})

mydoc = mycol.find({"_id" : 14})

for x in mydoc:
  print(x) 
