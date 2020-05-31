import { Component } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { FileUpload } from 'primeng/fileupload/fileupload';

interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  cities: SelectItem[];
  selectedCity: City;
  constructor() {
    //SelectItem API with label-value pairs
    this.cities = [
      { label: 'Select City', value: null },
      { label: 'New York', value: { id: 1, name: 'New York', code: 'NY' } },
      { label: 'Rome', value: { id: 2, name: 'Rome', code: 'RM' } },
      { label: 'London', value: { id: 3, name: 'London', code: 'LDN' } },
      { label: 'Istanbul', value: { id: 4, name: 'Istanbul', code: 'IST' } },
      { label: 'Paris', value: { id: 5, name: 'Paris', code: 'PRS' } },
    ];
  }

  // handling accordion tabs
  tabIndex = 0;
  totalTabs = 7;
  nextTab() {
    this.tabIndex =
      this.tabIndex === this.totalTabs - 1 ? 0 : this.tabIndex + 1;
  }
  prevTab() {
    this.tabIndex =
      this.tabIndex === 0 ? this.totalTabs - 1 : this.tabIndex - 1;
  }
  onTabOpen(e) {
    this.tabIndex = e.index;
  }

  //handling steps inside the tab Integration
  myTabCurrentStep: number = 1;
  myTabTotalSteps: number = 2;
  handleMyTabNextStep() {
    const valid = true; //validation logic here
    if (valid)
      if (this.myTabCurrentStep < this.myTabTotalSteps) ++this.myTabCurrentStep;
      else this.nextTab();
  }
  handleMyTabPrevStep() {
    const valid = true; //validation logic here
    if (valid)
      if (this.myTabCurrentStep > 1) --this.myTabCurrentStep;
      else this.prevTab();
  }
  handleConfirm() {
    return true;
  }
  handleCancel() {
    return true;
  }

  //handling steps inside the current tab Payments
  myTab2CurrentStep: number = 1;
  myTab2TotalSteps: number = 2;
  handleMyTab2NextStep() {
    const valid = true; //validation logic here
    if (valid)
      if (this.myTab2CurrentStep < this.myTab2TotalSteps)
        ++this.myTab2CurrentStep;
    //else alert success
  }

  //file upload exmple
  includeFile: string = null; //'uploadedfile.pdf';
  uploadedFiles: any[] = [];
  onUpload(event) {
    for (let file of event.files) {
      this.includeFile = file.name;
    }
  }
  removeFile(file: File, uploader: FileUpload) {
    uploader.clear();
  }
  addFileIcon(fileName) {
    if (fileName.length === 0) {
      return '';
    }
    const lastDot = fileName.lastIndexOf('.');
    const ext = fileName.substring(lastDot + 1);
    return ext;
  }
  removeIncludedFile(combin) {
    this.includeFile = null;
  }

  //handling readonly
  combineList: any = [
    {
      includeFile: 'uploadedfile.pdf',
      /*combinationProps*/
    },
    {
      /*combinationProps*/
    },
    {
      /*combinationProps*/
    },
  ];

  isReadOnly(combin) {
    return combin.readonly === undefined || combin.readonly;
  }

  //steps handling
  activeIndex: number;
  items: any = [
    {
      label: 'בקשת שירות',
      command: (event: any) => {
        this.activeIndex = 0;
      },
    },
    {
      label: 'בדיקת בקשה',
      command: (event: any) => {
        this.activeIndex = 1;
      },
    },
    {
      label: 'בדיקה ויזואלית',
      command: (event: any) => {
        this.activeIndex = 2;
      },
    },
    {
      label: 'דגימה למעבדה',
      command: (event: any) => {
        this.activeIndex = 3;
      },
    },
    {
      label: 'החלטה',
      command: (event: any) => {
        this.activeIndex = 3;
      },
    },
  ];
}
