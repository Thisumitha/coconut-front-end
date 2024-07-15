import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ContactUsComponent } from "../../components/contact-us/contact-us.component";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, NavbarComponent, FooterComponent, ContactUsComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

}
