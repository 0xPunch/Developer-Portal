import { HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { DocsModule } from './routes/docs/docs.module';
import { SettingsModule } from './routes/settings/settings.module';
import { ApplicationsModule } from './routes/applications/applications.module';
import { UsersModule } from './routes/users/users.module';
import { HeaderModule } from './ui/header/header.module';
import { AsideModule } from './ui/aside/aside.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthModule, AuthHttpInterceptor } from '@auth0/auth0-angular';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AsideModule,
    HeaderModule,
    BrowserModule,
    AppRoutingModule,
    UsersModule,
    ApplicationsModule,
    SettingsModule,
    DocsModule,
    HttpClientModule,

    AuthModule.forRoot({
      ...environment.auth,
    }),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi: true },
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        coreLibraryLoader: () => import('highlight.js/lib/core'),
        languages: {
          typescript: () => import('highlight.js/lib/languages/typescript'),
          json: () => import('highlight.js/lib/languages/json'),
        },
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
