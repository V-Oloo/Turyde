import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vehicle-docs',
  templateUrl: './vehicle-docs.component.html',
  styles: []
})
export class VehicleDocsComponent implements OnInit {
    dtOptions: DataTables.Settings = {};
    public option: {};
    image: any;

    uploadUserDocs: FormGroup;
    constructor(
      private fb: FormBuilder,
      private toastr: ToastrService,
      private route: ActivatedRoute
      ) { }

    ngOnInit() {
      this.dtOptions = {
        pagingType: 'full_numbers'
      };
      // vehicle form starts here
      this.uploadUserDocs = this.fb.group ({
        DocTypeName: ['', [Validators.required]],
        DateIssued: ['', [Validators.required]],
        ExpiresOn: ['', [Validators.required]],
        image: ['', [Validators.required]],
      });
    }

    onFileSelected(fileInput: any) {
      const file = <File>fileInput.target.files[0];
      this.uploadUserDocs.patchValue({
        image: file
      });
      this.uploadUserDocs.get('image').updateValueAndValidity();
    }

    onSubmit() {
      // const UserId = this.route.snapshot.paramMap.get('userId');
      //  this._service.uploadDriverDocs(UserId, this.uploadUserDocs.value).subscribe(res => {
      //            console.log(res);
      //             this.uploadUserDocs.reset();
      //             this.toastr.success('Document uploaded successfully!', 'Document Added');
      //           },
      //           err => {
      //             console.log(err);
      //            });
    }


  }

