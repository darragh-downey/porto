import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BlogComponent } from './blog/blog.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { EditorComponent } from './editor/editor.component';
import { ProjectComponent } from './project/project.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { NbThemeModule, NbLayoutModule, NbCardModule, NbButtonModule, NbSidebarModule, NbInputModule, NbCheckboxModule, NbToggleModule, NbUserModule, NbSpinnerModule, NbIconModule, NbChatModule, NbActionsModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    PortfolioComponent,
    EditorComponent,
    ProjectComponent,
    ProjectDetailsComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'dark' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbCardModule,
    NbButtonModule,
    NbSidebarModule,
    NbInputModule,
    NbCheckboxModule,
    NbToggleModule,
    NbUserModule,
    NbSpinnerModule,
    NbIconModule,
    NbChatModule,
    NbActionsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
