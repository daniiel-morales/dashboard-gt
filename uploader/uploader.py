from json import dumps as toJSON
import dns

myclient = ('PRIVATE-URL')
mydb = myclient['Ministerio']
mycol = mydb['Grafica']

entities = ['MAGA', 'MCD', 'MINDEF', 'MINEDUC', 'MEM', 'MINFIN', 'MINEX', 'MSPAS', 'MINTRAB', 'USAC'] 

def parse_graph1(path_to_file='./MAGA/1/1.csv', delimiter=',', entity_number='1'):
    with open(path_to_file) as file:
        data = file.read().split('\n') # win:\n linux:\r\n
        document = list()
        # rows         
        for tupla in data:
            if tupla == '':
                continue
            if tupla.startswith('"'):
                i = tupla.find('"', 1)
                x = tupla.find(',',i)

                record = list()
                record.append(tupla[1:i])
                record.append(tupla[x+1:])
            else:
                record = tupla.split(delimiter)
            document.append({ 'detalle': record[0], 'egreso': float(record[1]) })
        if mycol.insert_one({ '_id' : (entity_number)*10 + 1, entities[entity_number-1] : document}) == None:
                return True
    return False

def parse_graph2(path_to_file='grafica2.csv', delimiter=','):
    err_flag = True
    with open(path_to_file) as file:
        data = file.read().split('\n') # win:\n linux:\r\n
        # columns
        for entity_number in range(len(entities)):
            document = list()
            # rows         
            for tupla in data:
                record = tupla.split(delimiter)
                # skip head row win:ï»¿ano linux:\xef\xbb\xbfano
                if record[0] == 'ï»¿ano' or tupla == '':
                    continue
                document.append({ 'ano': int(record[0]), 'asignado': int(record[entity_number+1]), 'presupuesto': int(record[11]) - int(record[12]) })
            if mycol.insert_one({ '_id' : (entity_number+1)*10 + 2, entities[entity_number] : document}) != None:
                err_flag = False
    return err_flag

def parse_graph3(path_to_file='./MAGA/3/2020.csv', delimiter=',', entity_number='1'):
    with open(path_to_file) as file:
        data = file.read().split('\n') # win:\n linux:\r\n
        document = list()
        # rows         
        for tupla in data:
            if tupla == '':
                continue
            if tupla.startswith('"'):
                i = tupla.find('"', 1)
                x = tupla.find(',',i)

                record = list()
                record.append(tupla[1:i])
                record.append(tupla[x+1:])
            else:
                record = tupla.split(delimiter)
            document.append({ 'detalle': record[0], 'ingreso': float(record[1]) })
        if mycol.insert_one({ '_id' : (entity_number)*10 + 3, entities[entity_number-1] : document}) == None:
                return True
    return False

def parse_graph4(path_to_folder='./MAGA/4/', delimiter=',', entity_number='1'):
    # 10 months of 2020 has passed through today
    for month in range(10):
        with open(path_to_folder + str(month+1) + '.csv') as file:
            data = file.read().split('\n') # win:\n linux:\r\n
            document = list()
            # rows         
            for tupla in data:
                if tupla.startswith('"'):
                    i = tupla.find('"', 1)
                    x = tupla.find(',',i)

                    record = list()
                    record.append(tupla[1:i])
                    record.append(tupla[x+1:])
                else:
                    record = tupla.split(delimiter)
                # skip head row
                if record[0] == 'DETALLE' or tupla == '':
                    continue
                document.append({ 'detalle': record[0], 'ingreso': float(record[1]) })
            if mycol.insert_one({ '_id' : str(entity_number) + '-4-' + str(month+1) , entities[entity_number-1] : document}) == None:
                return True
    return False

def parse_graph5(path_to_file='./MAGA/5/1.csv', delimiter=',', entity_number='1'):
    with open(path_to_file) as file:
        data = file.read().split('\n') # win:\n linux:\r\n
        document = list()
        # rows         
        for tupla in data:
            if tupla == '':
                continue
            if tupla.startswith('"'):
                i = tupla.find('"', 1)
                x = tupla.find(',',i)

                record = list()
                record.append(tupla[1:i])
                record.append(tupla[x+1:])
            else:
                record = tupla.split(delimiter)
            document.append({ 'proveedor': record[0], 'debito': float(record[1]) })
        if mycol.insert_one({ '_id' : (entity_number)*10 + 5, entities[entity_number-1] : document}) == None:
                return True
    return False

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
            if parse_graph1(path_to_file, delimiter, entity_number):
                print('ERR>> la carga de datos FALLO')
            else:
                print('MONGODB>> carga exitosa')
        elif graph_number == 2:
            if parse_graph2(path_to_file, delimiter):
                print('ERR>> la carga de datos FALLO')
            else:
                print('MONGODB>> carga exitosa')
        elif graph_number == 3:
            if parse_graph3(path_to_file, delimiter, entity_number):
                print('ERR>> la carga de datos FALLO')
            else:
                print('MONGODB>> carga exitosa')
        elif graph_number == 4:
            if parse_graph4(path_to_file, delimiter, entity_number):
                print('ERR>> la carga de datos FALLO')
            else:
                print('MONGODB>> carga exitosa')
        elif graph_number == 5:
            if parse_graph5(path_to_file, delimiter, entity_number):
                print('ERR>> la carga de datos FALLO')
            else:
                print('MONGODB>> carga exitosa')
        else:
            print('ERR>> el NUMERO de grafica es incorrecto')
    else:
        break

"""
mydoc = mycol.delete_many({'_id' : {"$regex": "^10-4-"}})
print(mydoc.deleted_count, " documents deleted.")

for x in mydoc:
  print(x)
""" 