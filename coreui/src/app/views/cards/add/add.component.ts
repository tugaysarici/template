import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent {

  cardForm = new FormGroup({
    cardHolder: new FormControl(''),
    cardNumber: new FormControl(''),
    cvv: new FormControl(''),
    expenseLimit: new FormControl('')
  })
  onSubmit(){
    console.log(this.cardForm.value);
    console.log('work');
  }
}

