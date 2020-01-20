import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  constructor(private http: HttpClient) {}
loadPlayer(){
  return this.http.get('http://localhost:8080/api/player/list')
}

addPlayer(player: any){
  return this.http.post('http://localhost:8080/api/player/create', player,{'responseType': 'text'});
}

getPlayer(id: any){
  return this.http.get('http://localhost:8080/api/player/player/'+id);
}

deletePlayer(id: any){
  return this.http.get('http://localhost:8080/api/player/delete/'+id);
}

}
