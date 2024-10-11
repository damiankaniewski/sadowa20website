import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AngularFireFunctions } from '@angular/fire/compat/functions';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  standalone: true,
  styleUrls: ['./contact.component.scss'],
  imports: [ReactiveFormsModule],
})
export class ContactComponent {
  contactForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private functions: AngularFireFunctions
  ) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      message: ['', Validators.required],
      privacyPolicy: [false, Validators.requiredTrue],
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      const contactData = this.contactForm.value;

      const callable = this.functions.httpsCallable('sendContactEmail');
      callable(contactData).subscribe({
        next: (result) => {
          if (result.success) {
            console.log('Email sent successfully');
          } else {
            console.error('Failed to send email:', result.error);
          }
        },
        error: (err) => {
          console.error('Error calling cloud function:', err);
        },
      });
    } else {
      console.warn('Form is not valid');
    }
  }
}
