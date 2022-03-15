from http.server import HTTPServer, BaseHTTPRequestHandler
from json import dumps as toJSON
from json import loads as formatJSON

class SimpleHTTPRequestHandler(BaseHTTPRequestHandler):

    def do_GET(self):
        self.send_response(200)
        self.send_header('Content-type', 'application/json')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.end_headers()
        if self.path != '/favicon.ico':
            db_dump = []
            entities = {
                'MAGA' : 1, 
                'MCD' : 2,
                'MINDEF' : 3,
                'MINEDUC' : 4,
                'MEM' : 5,
                'MINFIN' : 6,
                'MINEX' : 7,
                'MSPAS' : 8,
                'MINTRAB' : 9,
                'USAC' : 10
            }

            myclient = ('PRIVATE-URL')
            mydb = myclient['Ministerio']
            mycol = mydb['Grafica']

            opts = self.path.split('/')

            if opts[2] == '1':
                for item in mycol.find({ '_id': entities[opts[1]]*10 + 1 }, { '_id': 0, opts[1]: 1}):
                    db_dump.append(['Detalle', 'Egreso'])
                    for i in range(6):
                        db_dump.append([item[opts[1]][i]['detalle'], float(item[opts[1]][i]['egreso'])])
            elif opts[2] == '2':
                for item in mycol.find({ '_id': entities[opts[1]]*10 + 2 }, { '_id': 0, opts[1]: 1}):
                    for i in range(6):
                        db_dump.append(float(item[opts[1]][i]['asignado'])/1000)
            elif opts[2] == '4':
                for item in mycol.find({ '_id': str(entities[opts[1]]) + '-4-10' }, { '_id': 0, opts[1]: 1}):
                    db_dump.append(['Detalle', 'Ingreso'])
                    for i in range(6):
                        db_dump.append([item[opts[1]][i]['detalle'], float(item[opts[1]][i]['ingreso'])])
            if opts[2] == '5':
                for item in mycol.find({ '_id': entities[opts[1]]*10 + 5 }, { '_id': 0, opts[1]: 1}):
                    db_dump.append(['Location','Parent','Market trade volume (size)','Market increase/decrease (color)'])
                    db_dump.append(['Proveedores', None, 0, 0])
                    for i in range(6):
                        db_dump.append([item[opts[1]][i]['proveedor'],'Proveedores', float(item[opts[1]][i]['debito']), -i*10])
            else:
                pass
                
            self.wfile.write(toJSON(db_dump).encode('utf-8'))

print( 'SERVER>> started' )
httpd = HTTPServer(('0.0.0.0', 8080), SimpleHTTPRequestHandler)
httpd.serve_forever()