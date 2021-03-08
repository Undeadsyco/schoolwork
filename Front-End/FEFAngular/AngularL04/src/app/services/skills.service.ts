import { Injectable } from '@angular/core';
import { Skill } from '../models/skill';
import { Level } from '../types/level.enum';
import { Observable, of } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  skills: Skill[] = [
    {
      id: 0,
      name: "gaming",
      level: Level.Expert
    },
    {
      id: 1,
      name: "Architecture",
      level: Level.Beginner
    },
    {
      id: 2,
      name: "Software dovelopment",
      level: Level.Beginner
    }
  ];
  constructor() { }

  getSkills=():Observable<Skill[]> =>{
    return of(this.skills);
  }
}
