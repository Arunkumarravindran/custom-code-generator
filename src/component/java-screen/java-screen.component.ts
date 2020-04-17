import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import{DependencyScreenComponent} from 'src/component/dependency-screen/dependency-screen.component'
import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'app-java-screen',
  templateUrl: './java-screen.component.html',
  styleUrls: ['./java-screen.component.css']
})
export class JavaScreenComponent implements OnInit {
  checkedIndex = -1;
  languages: any[] = [
    {value: 'java', viewValue: 'Java'},
    {value: 'kotlin', viewValue: 'Kotlin'},
    {value: 'groovy', viewValue: 'Groovy'}
  ];

  projects: any[] = [
    {value: 'maven', viewValue: 'Maven Project'},
    {value: 'gradle', viewValue: 'Gradle'}
  ];

  packaging: any[] = [
    {value: 'jar', viewValue: 'JAR'},
    {value: 'war', viewValue: 'WAR'}
  ];

  javaVersion: any[] = [
    {value: '14', viewValue: '14'},
    {value: '11', viewValue: '11'},
    {value: '8', viewValue: '8'}
  ];

  springVersion: any[] = [
    {value: '2.3.0 M4', viewValue: '2.3.0 M4'},
    {value: '2.3.0 (SNAPSHOT)', viewValue: '2.3.0 (SNAPSHOT)'},
    {value: '2.2.7 (SNAPSHOT)', viewValue: '2.2.7 (SNAPSHOT)'},
    {value: '2.2.6', viewValue: '2.2.6'},
    {value: '2.1.14 (SNAPSHOT)', viewValue: '2.1.14 (SNAPSHOT)'},
    {value: '2.1.13', viewValue: '2.1.13'}
  ];
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  checkboxChange(event: MatCheckboxChange, index: number) {
    this.checkedIndex = event.checked ? index : -1;
}
  openDependency() {
    const dialogRef = this.dialog.open(DependencyScreenComponent, {
      width: '50%',
   
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });

}
}
