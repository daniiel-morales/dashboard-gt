from json import dumps as toJSON
import pymongo
import dns

myclient = pymongo.MongoClient('MONGO-PRIVATE-URL')
mydb = myclient['Ministerio']
mycol = mydb['Grafica']

entities = ['MAGA', 'MCD', 'MINDEF', 'MINEDUC', 'MEM', 'MINFIN', 'MINEX', 'MSPAS', 'MINTRAB', 'USAC'] 

def parse_graph2(path_to_file='grafica2.csv', delimiter=','):
    err_flag = True
    with open(path_to_file) as file:
        data = file.read().split("\n") # win:\n linux:\r\n
        document = list()
        # columns
        for entity_number in range(len(entities)):
            # rows         
            for tupla in data:
                record = tupla.split(delimiter)
                # skip head row win:ï»¿ano linux:\xef\xbb\xbf
                if record[0] == 'ï»¿ano' or tupla == '':
                    continue
                document.append({ 'ano': int(record[0]), 'asignado': int(record[entity_number+1]), 'presupuesto': int(record[11]) - int(record[12]) })
            if mycol.insert_one({ '_id' : (entity_number+1)*10 + 2, entities[entity_number] : document}) != None:
                err_flag = False
    return err_flag

while True:
    op = int(input('        MENU\n1. Ingrese la <direccion> a los datos a cargar\n2. Ingrese el <numero> de grafica al que pertenecen\n3. Ingrese el <delimitador> con el que fueron estructurados los datos\n4. Ingrese el <correlativo> de la entidad que pertenecen\n5. Cargar datos\n Ingrese el numero de la opcion o cualquier tecla para salir\n'))
    if op == 1:
        path_to_file = input('1. Ingrese la <direccion> a los datos a cargar\n')
    elif op == 2:
        graph_number = int(input('2. Ingrese el <numero> de grafica al que pertenecen\n'))
    elif op == 3:
        delimiter = input('3. Ingrese el <delimitador> con el que fueron estructurados los datos\n')
    elif op == 4:
        entity_number = int(input('4. Ingrese el <correlativo> de la entidad que pertenecen\n'))
    elif op == 5:
        if graph_number == 1:
            pass
        if graph_number == 2:
            if parse_graph2():
                print('ERR>> la carga de datos FALLO')
            else:
                print('MONGODB>> carga exitosa')
        if graph_number == 3:
            pass
        if graph_number == 4:
            pass
        if graph_number == 5:
            pass
        else:
            print('ERR>> el NUMERO de grafica es incorrecto')
    else:
        break

"""
mydoc = mycol.find({'_id' : 32})

for x in mydoc:
  print(x)
""" 
