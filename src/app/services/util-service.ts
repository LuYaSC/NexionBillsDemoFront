import { Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";

@Injectable()
export class UtilService {

  constructor(private toastr: ToastrService) {}

  showNotifications(from, align, message, color) {
    this.toastr.success(
      `<span data-notify="icon" class="nc-icon nc-bell-55"></span><span data-notify="message"><b>${message}</b></span>`,
        "",
        {
          timeOut: 4000,
          closeButton: true,
          enableHtml: true,
          toastClass: `alert alert-${color} alert-with-icon`,
          positionClass: "toast-" + from + "-" + align
        }
      );
  }

}
