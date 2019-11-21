import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Select2OptionData } from 'ng-Select2';
import { Options } from 'select2';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.css']
})
export class DriversComponent implements OnInit {
  @ViewChild('largeModal') public largeModal: ModalDirective;
  dtOptions: DataTables.Settings = {};
  public exampleData: Array<Select2OptionData>;
  public options: Options;
  public status = 'suspended';
  config = {
    displayKey: 'name', // if objects array passed which key to be displayed defaults to description
    search: true,
    placeholder: 'Select Items here',
  };

  option = [
    {
      '_id': '5a66d6c31d5e4e36c7711b7a',
      'index': 0,
      'balance': '$2,806.37',
      'picture': 'http://placehold.it/32x32',
      'name': 'Burns Dalton'
    },
    {
      '_id': '5a66d6c3657e60c6073a2d22',
      'index': 1,
      'balance': '$2,984.98',
      'picture': 'http://placehold.it/32x32',
      'name': 'Mcintyre Lawson'
    },
    {
      '_id': '5a66d6c376be165a5a7fae33',
      'index': 2,
      'balance': '$2,794.16',
      'picture': 'http://placehold.it/32x32',
      'name': 'Amie Franklin'
    },
    {
      '_id': '5a66d6c3f7854b6b4d96333b',
      'index': 3,
      'balance': '$2,537.14',
      'picture': 'http://placehold.it/32x32',
      'name': 'Jocelyn Horton'
    },
    {
      '_id': '5a66d6c3f7854b6b4d96333i',
      'index': 4,
      'balance': '$2,537.14',
      'picture': 'http://placehold.it/32x32',
      'name': 'Jocelyn Hortons'
    },
    {
      '_id': '5a66d6c3f7854b6b4d96333tu',
      'index': 5,
      'balance': '$2,537.14',
      'picture': 'http://placehold.it/32x32',
      'name': 'Jocelyn Hortyu'
    },
    {
      '_id': '5a66d6c3f7854b6b4d96333ty',
      'index': 6,
      'balance': '$2,537.14',
      'picture': 'http://placehold.it/32x32',
      'name': 'Jocelyn Horton'
    },
    {
      '_id': '5a66d6c3f7854b6b4d96333b',
      'index': 8,
      'balance': '$2,537.14',
      'picture': 'http://placehold.it/32x32',
      'name': 'Joc Horton'
    },
    {
      '_id': '5a66d6c3f7854b6b4d9633ut',
      'index': 9,
      'balance': '$2,537.14',
      'picture': 'http://placehold.it/32x32',
      'name': 'Jocelyn Horton'
    },

  ];

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers'
    };

    this.exampleData = [
      {
        id: 'opt1',
        text: 'Options 1'
      },
      {
        id: 'opt2',
        text: 'Options 2'
      },
      {
        id: 'opt3',
        text: 'Options 3'
      },
      {
        id: 'opt4',
        text: 'Options 4'
      },
      {
        id: 'opt5',
        text: 'Options 5'
      },
      {
        id: 'opt6',
        text: 'Options 6'
      },
      {
        id: 'opt7',
        text: 'Options 7'
      },
      {
        id: 'opt8',
        text: 'Options 8'
      }
    ];
    this.options = {
      multiple: true,
      theme: 'classic',
      closeOnSelect: false,
      width: '360',
      placeholder: 'Select Country..',
    };
}

}
