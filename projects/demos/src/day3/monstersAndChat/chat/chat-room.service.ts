import {Inject, Injectable} from '@angular/core';
import {fromEvent, merge, Observable, ReplaySubject} from 'rxjs';
import {mapTo, scan, startWith, switchMap} from 'rxjs/operators';

@Injectable()
export class ChatRoomService {
  // url$ = of('https://socket-chat-example-qsaokhakmv.now.sh/');
  url = 'http://localhost:3003';
  private socket$: ReplaySubject<any>;
  public connected$: any;
  public messages$: any;

  constructor(@Inject('io') private io: SocketIOClientStatic) {

    this.socket$ = new ReplaySubject(1);

    this.messages$ = this.socket$.pipe(
      switchMap(socket => {
        socket.onevnt = console.log;
        return fromEvent(socket, 'chat msg');
      }),
      startWith([]),
      scan((acc, curr) => [...<string[]>acc, curr]));

    const disconnect$ = this.socket$.pipe(
      switchMap(socket => fromEvent(socket, 'disconnect')));

    const connect$ = this.socket$.pipe(
      switchMap(socket => {
          return fromEvent(socket, 'connect');
        }
      ));

    this.connected$ = merge(
      connect$.pipe(mapTo(true)),
      disconnect$.pipe(mapTo(false))
    );

  }

  connect() {
    const socketRef = this.io(this.url);
    this.socket$.next(socketRef);
  }

  send(message) {
    this.socket$.subscribe((socket) => {
      socket.emit('chat msg', message);
    });
  }

  toggleConnectionStatus() {
    this.socket$.subscribe(socket => {
      socket.disconnected ? socket.connect() : socket.disconnect();
    });

  }

  disconnect() {
    this.socket$.subscribe(socket => {
      socket.disconnect();
    });
  }
}

