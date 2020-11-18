from http.server import HTTPServer, BaseHTTPRequestHandler
from json import dumps as toJSON
from json import loads as formatJSON
import pymongo

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

            myclient = pymongo.MongoClient('MONGO-PRIVATE-URL')
            mydb = myclient['Ministerio']
            mycol = mydb['Grafica']

            opts = self.path.split('/')

            if opts[2] == '2':
                for item in mycol.find({ '_id': entities[opts[1]]*10 + 2 }, { '_id': 0, opts[1]: 1}):
                    for i in range(6):
                        db_dump.append(item[opts[1]][i]['asignado'])
                
            self.wfile.write(toJSON(db_dump).encode('utf-8'))

print( 'SERVER>> started' )
httpd = HTTPServer(('0.0.0.0', 8080), SimpleHTTPRequestHandler)
httpd.serve_forever()