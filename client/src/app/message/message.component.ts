import {Component, Inject, Injectable} from  '@angular/core';

import {MatDialogRef, MAT_DIALOG_DATA, MatDialog} from  '@angular/material';

@Component({
templateUrl:  'message.component.html'
})
export  class  MessageComponent {
    constructor(private  dialogRef:  MatDialogRef<MessageComponent>, @Inject(MAT_DIALOG_DATA) public  data:  any) {
    }
    onNoClick(): void {
      this.dialogRef.close();
    }
}