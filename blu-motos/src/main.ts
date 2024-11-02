import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router'; // Importa o provideRouter
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes'; // Importa as rotas

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),

  ]
}).catch(err => console.error(err));
