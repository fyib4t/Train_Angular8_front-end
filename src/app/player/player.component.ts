import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  
  profileForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    birth: new FormControl('')
  })
  
  playerId : any
  player : any;
  playerList : any;
  constructor(private router: ActivatedRoute,private service: PlayerService) { }

  ngOnInit() {
    this.player = {
      name: 'Fern',
      birth: '1-16-2020',
      playerId: '1',
      hightScore: '10.0',
      dateTime: '12-12-2020'
    }

    this.service.loadPlayer().subscribe(date =>{
    // console.log(date);
    this.playerList = date;
    });

  }
  setPlayer(ply){
    console.log(ply);
   this.player = ply;
  }

  delPlayer(){
    this.service.deletePlayer(this.profileForm.value).subscribe(res =>{
      console.log(res) //TEST
    })
  }
}
