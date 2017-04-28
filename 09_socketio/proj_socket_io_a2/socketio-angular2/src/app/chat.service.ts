import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';
import { Message } from "app/message";

@Injectable()
export class ChatService {
  private url: String = 'http://localhost:3000/chat';
  private socket;

  constructor() { }

  sendMessage(message: Message): void{
    console.log("Enviando un mensaje " + message);
    this.socket.emit("mando-un-mensaje", message);
  }

  getMessages(){
    return new Observable(
      (observer) => { //El observer es el componente suscrito a este servicio, es decir el componente chat
          //Conexion al servidor --> Usamos el socket para que se conecte a la libreria de io
          this.socket = io(this.url);
          //Podemos ver en el lado del cliente cuando nos hemos conectado
          this.socket.on("connect", () => {
            console.log("Cliente conectado con id: " + this.socket.id);
          });
          //Aqui capturamos algun mensaje recibido desde el servidor
          this.socket.on("mando-un-mensaje",(datos) => {
            //Lo publicamos sobre el observador
            observer.next(datos);
          });
          //Forma de unsubscribe
          return () => { this.socket.disconnect(); } //Devolvemos cuando alguien se desuscriba
      });
  }
}
