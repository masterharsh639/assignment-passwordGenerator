import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  password= '';
  includeLetters = false;
  includeNumbers = false;
  includeSymbol = false;
  length= 0;


  generatePassword() {
    const numbers='1234567890';
    const letters='abcdefghijklmnopqrstuvwxyz'
    const symbols='!@#$%^&*'

    let validChars='';
    
    if(this.includeLetters){
      validChars+=letters;
    }
    if(this.includeNumbers){
      validChars+=numbers;
    }
    if(this.includeSymbol){
      validChars+=symbols;
    }

    let generatedPassword = ''
    for(let i=0;i<this.length;i++){
      const index= Math.floor(Math.random() * validChars.length)
      generatedPassword+=validChars[index]
    }
    this.password=generatedPassword;
  }
  onChangeAplhabet(){    
    this.includeLetters=!this.includeLetters
  }

  onChangeNumbers(){
    this.includeNumbers=!this.includeNumbers;
  }
  onChangeSymbol(){
    this.includeSymbol=!this.includeSymbol 
  }

  onChangeLength(event: any){
    const parsedValue=parseInt(event.target.value);

    if(!isNaN(parsedValue)){
      this.length=parsedValue
    }
  }
}