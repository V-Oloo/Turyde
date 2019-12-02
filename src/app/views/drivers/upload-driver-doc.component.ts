import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { DriverService } from '../../services/driver.service';

@Component({
  selector: 'app-upload-driver-doc',
  templateUrl: './upload-driver-doc.component.html',
  styles: []
})
export class UploadDriverDocComponent implements OnInit {
  public option: {};

  uploadUserDocs: FormGroup;
  constructor(private fb: FormBuilder, private _service: DriverService, private toastr: ToastrService) { }

  ngOnInit() {
    // vehicle form starts here
    this.uploadUserDocs = this.fb.group ({
      DocTypeName: ['', [Validators.required]],
      DateIssued: ['', [Validators.required]],
      ExpiresOn: ['', [Validators.required]],
      DriverId: ['', [Validators.required]],
      image: ['', [Validators.required]],
    });
  }

  onSubmit() {
     // this._service.addDriver(this.createUser.value).subscribe(res => {
               // console.log(res);
                this.uploadUserDocs.reset();
                this.toastr.success('User added successfully!', 'User Added');
              // },
              // err => {
               //  console.log(err);
               // });
  }


}
