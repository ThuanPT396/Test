import { Component } from '@angular/core';
import { ToasterService } from './toaster-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private toastService: ToasterService) {

  }

  Success() {
    this.toastService.Success("success button clicked")
  }
  Info() {
    this.toastService.Info("success button clicked")
  }
  Warning() {
    this.toastService.Success("Warning button clicked")
  }
  Error() {
    this.toastService.Error("Error button clicked")
  }
}
