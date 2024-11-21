import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ScrollService } from '../services/scroll/scroll.service';
import { HomepageComponent } from '../homepage/homepage.component';

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
    private http: HttpClient,
    private scrollService: ScrollService
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
    if (this.contactForm.invalid) {
      alert('Formularz jest niepoprawny. Uzupełnij wszystkie wymagane pola.');
      return;
    }

    const formData = this.contactForm.value;

    // Przygotowanie danych do wysyłki
    const body = {
      email: 'damian.kaniewski.contact@gmail.com',
      subject: `Sadowa 20 - Wiadomość od: ${formData.name}`,
      message: `Imię i nazwisko - ${formData.name}\nEmail - ${formData.email}\nTelefon - ${formData.phone}\n\n${formData.message}`,
    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-api-key': '_just-a\'test"key,or>is<it?',
    });

    this.http
      .post(
        'https://jc5vg6se5e.execute-api.eu-north-1.amazonaws.com/dev/send-mail',
        body,
        { headers }
      )
      .subscribe(
        (response) => {
          alert('Wiadomość została wysłana pomyślnie!');
          this.contactForm.reset();
          const element = document.getElementById('homepage');
          if (element) {
            this.scrollService.scrollToElement(element);
          }
        },
        (error) => {
          alert('Nie udało się wysłać wiadomości. Spróbuj ponownie za chwilę.');
          const element = document.getElementById('homepage');
          if (element) {
            this.scrollService.scrollToElement(element);
          }
        }
      );
  }
}
