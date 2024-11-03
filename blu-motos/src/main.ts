import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router'; // Importa o provideRouter
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes'; // Importa as rotas
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient()

  ]
}).catch(err => console.error(err));
