import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // yaani injectable f projet lkol mch ken composant wehed kahaw
})
export class CalculService {

  constructor() { }
  getNumberOf(list:any[], critiria:string, value:any){
    let n = 0;
    for(let i in list){
      if(list[i][critiria] === value){ // === test 3al valeur w type
        n++;
      }
    }
    return n;
  }
  
}
