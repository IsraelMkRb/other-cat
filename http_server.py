import http.server
import os

class MyRequestHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):      
        if not os.path.exists(self.translate_path(self.path)):
            self.path = '/index.html'  

        # Llamar al comportamiento por defecto del servidor
        return super().do_GET()

if __name__ == "__main__":
    # Configura el directorio donde está tu proyecto (ajústalo si es necesario)
    os.chdir('C:/proyectos/other-cat')
    
    # Inicia el servidor en el puerto 8000
    server_address = ('', 8000)
    httpd = http.server.HTTPServer(server_address, MyRequestHandler)
    print("Server started on http://localhost:8000")
    httpd.serve_forever()
