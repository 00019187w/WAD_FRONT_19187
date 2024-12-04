import { Component, inject } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  imports: [MatButtonModule, MatTooltipModule],
})
export class HeaderComponent {
  router = inject(Router);
  title: string = 'Recipe management ';
  disableCreateButton: boolean = false;
  btnClick(name: string) {
    this.router.navigateByUrl(name);
  }
}
