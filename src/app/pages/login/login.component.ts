import { Component, ElementRef, ViewChild } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from "../../components/navbar/navbar.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FooterComponent, RouterLink, NavbarComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  @ViewChild('target-element') targetElement!: ElementRef;
  scrollToTarget(): void{
    this.targetElement.nativeElement.srollIntoView({behavior: 'smooth'})
  }
}
