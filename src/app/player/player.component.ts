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

    this.router.paramMap.subscribe(params => {
      this.service.getPlayer(Number(params.get('id'))).subscribe( res =>{
        this.profileForm.setValue({
        id: res['id'],
        name: res['name'],
        birth: res['birth']
        })
        console.log(res);
        this.playerId = res['id']
      })
      console.log(params.get('id'));
    })

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

  delPlayer(ply){ 
    window.location.href = "http://localhost:4200/player";
    this.service.deletePlayer(ply).subscribe(res =>{
    })
  }
}
