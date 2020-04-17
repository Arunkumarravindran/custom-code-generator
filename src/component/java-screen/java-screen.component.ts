import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { CodegenService } from 'src/_service/codegen.service';
import * as fileSaver from 'file-saver';

@Component({
  selector: 'app-java-screen',
  templateUrl: './java-screen.component.html',
  styleUrls: ['./java-screen.component.css']
})
export class JavaScreenComponent implements OnInit {

  name = 'demo'
  group = 'com.example'
  codeGenForm : FormGroup;
  constructor(private codegenService : CodegenService) { }

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

}
