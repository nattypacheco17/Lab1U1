import { Component } from '@angular/core';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { CountdownComponent } from './countdown/countdown.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ProgressBarComponent,CountdownComponent, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Laboratorio1U1';

  counterProgress:number =0;
  totalCountdown:number = 15;
  updateProgress($event:number){
    this.counterProgress=(this.totalCountdown - $event)/this.totalCountdown*100;
  }

  countdownFin(){
    console.log("conteo finalizado");
  }
}
