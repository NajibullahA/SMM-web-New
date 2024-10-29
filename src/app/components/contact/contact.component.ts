import { Component, OnInit } from '@angular/core';
import emailjs from 'emailjs-com';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  contactForm = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };
  onSubmit() {
    // EmailJS configuration
    const serviceID = 'service_jdxbgfz';
    const templateID = 'SMM-Temp';
    const userID = 'kAkhq0mgLJ_-Dlm3M';

    emailjs.send(serviceID, templateID, this.contactForm, userID)
      .then((response) => {
        console.log('Email sent successfully:', response);
        alert('Your message has been sent!');
        // Reset form after submission
        this.contactForm = { name: '', email: '', subject: '', message: '' };
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        alert('An error occurred while sending your message. Please try again.');
      });
  }

  ngOnInit(): void {
    // You can access route parameters or query parameters here
  }
}