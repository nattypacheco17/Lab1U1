

import { Component, EventEmitter, Input, OnInit, Output, OnDestroy, SimpleChanges, OnChanges } from '@angular/core';


@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  standalone: true,
  imports: [],
  styleUrl: './countdown.component.css'
  
})
export class CountdownComponent implements OnInit, OnDestroy, OnChanges {

  ngOnChanges(changes: SimpleChanges): void {
    console.log("Valor de init cambio  a:", changes['init'].currentValue) ;
    this.startCountdown(); }

  ngOnDestroy(): void {
    this.clearTimeOutRef();
  }

  ngOnInit(): void {
    this.startCountdown();
  }

  @Output() onDecrease = new EventEmitter<number>();
  @Output() onComplete = new EventEmitter<void>();

  @Input() init: number = 0;

  public counter: number = 0;

  private countdownTimerRef: any = null;

  startCountdown() {
    if (this.init && this.init > 0) 
      {
        this.clearTimeOutRef();
      this.counter = this.init;
      this.doCountdown();
    }
  }

  doCountdown() {
    this.countdownTimerRef = setTimeout(()=>{
      this.counter = this.counter - 1;
      this.processCountdown();
    },1000);
  }
  
  private clearTimeOutRef(){
    if(this.countdownTimerRef){
      clearTimeout(this.countdownTimerRef);
      this.countdownTimerRef = null;
    }
  }
  processCountdown(){
    //emitir un evento count
    this.onDecrease.emit(this.counter);
    console.log("la cuenta va en:", this.counter);
    
    if(this.counter==0){
        //emitir evento de counter end
        this.onComplete.emit();
      console.log("---Fin del contador -----");
    }else{
      this.doCountdown();
  
    }
  }
}




