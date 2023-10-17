export interface Client {
  id: string;
  name: string;
}

export interface Session {
  id: string;
  clientId: string;
  roomId: string;
}

export interface Room {
  id: string;
  name: string;
}
