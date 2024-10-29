import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  menuOpen = false;
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
}
closeMenu() {
  this.menuOpen = false;
}
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en'); // Set default language

    // Use browser language if available, otherwise default to 'en'
    const browserLang = this.translate.getBrowserLang();
    if (browserLang && browserLang.match(/en|de/)) {
      this.translate.use(browserLang);
    } else {
      this.translate.use('en');
    }
  }


  switchLang(lang: string) {
    this.translate.use(lang); // Switch language
  }
}