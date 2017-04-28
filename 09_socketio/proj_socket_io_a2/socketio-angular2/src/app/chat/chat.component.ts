import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChatService } from "app/chat.service";
import { Message } from "app/message";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  providers: [ChatService]
})
export class ChatComponent implements OnInit, OnDestroy {
  private connection;
  private messages: Message[] = []; //Lista de mensajes recibidos
  private message: Message; //Mensaje que enviamos

  constructor(private service: ChatService) { }

  sendMessage(){
    console.log("Mensaje a enviar por componente: " + this.message);
    this.service.sendMessage(this.message); //Enviamos el mensaje
  }

  ngOnInit() {
    //incializamos el mensaje en el constructor o en ngOnInit
    this.message = new Message("","");
    //Se conecta y recibes los mensajes
    this.connection = this.service.getMessages().subscribe(
      (newMessage: Message) => {
        console.log("Nuevo mensaje recibido!" + newMessage);
        this.messages.push(newMessage); //Metemos el mensaje en el array
      }
    );
  }

  ngOnDestroy(){
    //Queremos que deje de recibir los eventos del observable
    this.connection.unsubscribe();
    //Al desuscribirse, se llama a la FORMA DE UNSUBSCRIBE del chat service y se desconecta
  }

}
