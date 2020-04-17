import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { CodegenService } from 'src/_service/codegen.service';
import * as fileSaver from 'file-saver';
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
  name = 'demo'
  group = 'com.example'
  codeGenForm : FormGroup;
  constructor(private codegenService : CodegenService,public dialog: MatDialog) { }


  ngOnInit() {
    this.codeGenForm = new FormGroup({
      project: new FormControl('maven-project', [
        Validators.required
      ]),
      language: new FormControl('java', [
        Validators.required
      ]),
      bootVersion: new FormControl('2.2.6.RELEASE', [
        Validators.required
      ]),
      // group: new FormControl('com.example', [
      //   Validators.required
      // ]),
      // artifact: new FormControl('demo', [
      //   Validators.required,
      // ]),
      // name: new FormControl('demo', [
      //   Validators.required
      // ]),
      description: new FormControl('Demo project for Spring Boot', [
        Validators.required
      ]),
      packageName: new FormControl('com.example.demo', [
        Validators.required
      ]),
      packaging: new FormControl('jar', [
        Validators.required
      ]),
      java: new FormControl('1.8', [
        Validators.required,
      ]),
      dependencies: new FormControl('web', [
        Validators.required,
      ])
    });
  }

  generateProject(){
    this.codegenService.getResponse(this.codeGenForm.value).subscribe(response =>{
      let blob:any = new Blob([response], { type: 'application/zip' });

      fileSaver.saveAs(blob, 'test.zip');
    }), error => console.log('Error downloading the file' + error),
    () => console.info('File downloaded successfully');
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
