import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f', { static: true }) signupForm: NgForm;
  subscriptions = ["Basic", "Advanced", "Pro"];
  defaultSubscription = "Advanced";
  user = {
    email: '',
    subscription: ''
  };
  submitted = false;
  showError = false;

  ngOnInit() {
    this.signupForm.valueChanges.subscribe(status => {
      console.log(status);
      this.showError = !this.signupForm.valid;
    })
  }

  closeAlert() {
    this.showError = false;
  }

  onSubmit() {
    this.submitted = true;
    const { email, subscription } = this.signupForm.value;
    this.user = {
      email,
      subscription
    }
    this.signupForm.reset();
  }

}
