import { Component, signal } from '@angular/core';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MainComponent } from './components/main/main.component';

@Component({
  selector: 'app-root',
  imports: [ SidebarComponent, MainComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'feral-love';
  isSidebarCollapsed = signal<boolean>(false);
}
