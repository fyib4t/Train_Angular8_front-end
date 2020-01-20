import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { PlayerService } from 'src/app/player.service';
import * as moment from 'moment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  profileForm = new FormGroup({
    name: new FormControl(''),
    birth: new FormControl(''),
    highestScore: new FormControl('')
  })
  player : any;
  constructor(private playerService: PlayerService, private router: Router) { }
  ngOnInit() {
    this.player = {
        // "name": "NabitaChan99",
        // "birth": "01/01/2022",
        // "highestScore": "20.0"
    }

    this.playerService.addPlayer(this.player).subscribe(res=>{
    console.log(res)
    });
  }
  addPlayer(){
    // this.playerService.addPlayer(this.profileForm.value).subscribe(res =>{
    //   console.log(res)
    // });
    // console.log(this.profileForm.value);
    console.log(moment(this.profileForm.value.birth, "YYYY-MM-DD").format('DD/MM/YYYY'));
    let pla = {}
    pla = this.profileForm.value;
    pla['birth'] = moment(this.profileForm.value.birth, "YYYY-MM-DD").format('DD/MM/YYYY');
    console.log(pla);
    this.playerService.addPlayer(pla).subscribe(res =>{
      if(confirm(res)){
        this.router.navigateByUrl('Player');
      }
    })
  }
}
