import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './visual.component.html',
})
export class VisualComponent {
  readonly VALID = 'תקין';
  readonly NOT_VALID = 'לא תקין';
  list = [
    {
      id: 1,
      selectedValue: this.VALID,
      findings: [
        { value: 'אקריות', valid: false },
        { value: 'חרקים', valid: true },
        { value: 'חשד למחלות/וירוסים', valid: true },
        { value: 'מזיקים חיים', valid: false },
        { value: 'עיפוש', valid: false },
        { value: 'עשבייה', valid: true },
        { value: 'ריקבון', valid: false },
      ],
      note: 'יש לטפל בדחיפות בכל הממצאים שנמצאו ולשלוח דגימה חדשה',
    },
    {
      id: 2,
      selectedValue: this.NOT_VALID,
      findings: [
        { value: 'אקריות', valid: false },
        { value: 'חרקים', valid: true },
        { value: 'חשד למחלות/וירוסים', valid: true },
        { value: 'מזיקים חיים', valid: false },
        { value: 'עיפוש', valid: false },
        { value: 'עשבייה', valid: true },
        { value: 'ריקבון', valid: false },
      ],
      note: 'יש לטפל בדחיפות בכל הממצאים שנמצאו ולשלוח דגימה חדשה',
    },
    {
      id: 3,
      selectedValue: this.VALID,
      findings: [
        { value: 'אקריות', valid: false },
        { value: 'חרקים', valid: true },
        { value: 'חשד למחלות/וירוסים', valid: true },
        { value: 'מזיקים חיים', valid: false },
        { value: 'עיפוש', valid: false },
        { value: 'עשבייה', valid: true },
        { value: 'ריקבון', valid: false },
      ],
      note: 'יש לטפל בדחיפות בכל הממצאים שנמצאו ולשלוח דגימה חדשה',
    },
  ];
  isItemValid(item) {
    return item.selectedValue == this.VALID;
  }
  // handling switch
  checked: boolean = true;
  handleChange(e) {
    this.checked = e.checked;
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

  isReadOnly(item) {
    return item.readonly === undefined || item.readonly;
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
