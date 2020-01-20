import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PlayerService } from 'src/app/player.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-edited',
  templateUrl: './edited.component.html',
  styleUrls: ['./edited.component.css']
})
export class EditedComponent implements OnInit {

  profileForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    birth: new FormControl('')
  })

  playerId : any
  player : any
  constructor(private router: ActivatedRoute, private playerService: PlayerService) { }

  ngOnInit() {
    this.router.paramMap.subscribe(params => {
      this.playerService.getPlayer(Number(params.get('id'))).subscribe( res =>{
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
  }

  editPlayer(ply){
    console.log(ply.getId)
    this.playerService.addPlayer(ply.getId).subscribe(res =>{
      console.log(res)
    })
  }

}
