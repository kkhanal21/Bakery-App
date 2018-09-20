import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";
import { HttpClient, HttpResponse, HttpEventType } from '@angular/common/http';
import { UploadFileService } from '../../../_services/upload-file.service';
import { unescape } from 'querystring';

declare var $: any;
@Component({
  selector: 'app-manage-home',
  templateUrl: './manage-home.component.html',
  styleUrls: ['./manage-home.component.css']
})
export class ManageHomeComponent implements OnInit {
  features: any = [];

  //related to image upload
  selectedFiles: FileList
  currentFileUpload: Blob;
  imagedata: any;
  filename: string;
  feature: any = {
    title: "",
    description: ""
  }
  progress: { percentage: number } = { percentage: 0 }

  constructor(private _http: Http, private uploadService: UploadFileService) { }

  ngOnInit() {
    this.getFeatures();

    $('#image-cropper').cropit();

    // In the demos I'm passing in an imageState option
    // so it renders an image by default:
    // $('#image-cropper').cropit({ imageState: { src: { imageSrc } } });

    // Exporting cropped image
    // $('#download-btn').click(function () {
    //   var imageData = $('#image-cropper').cropit('export');
    //   window.open(imageData);
    // });
  }

  getFeatures() {
    this._http.get('/featured').toPromise().then(res => {
      this.features = res.json();
    });
  }

  selectFile(event) {
    const file = event.target.files.item(0)

    if (file.type.match('image.*')) {
      this.selectedFiles = event.target.files;
    } else {
      alert('invalid format!');
    }
  }
  //related to image upload
  upload() {
    this.progress.percentage = 0;

    this.filename = this.selectedFiles.item(0).name;
    this.currentFileUpload = this.dataURItoBlob($('#image-cropper').cropit('export'));
    this.uploadService.pushFileToStorage(this.currentFileUpload, this.filename, this.feature).subscribe();
    this.feature={
      title:"",
      description:""
    }    
    this.selectedFiles = undefined
  }

  dataURItoBlob(dataURI) {
    // convert base64/URLEncoded data component to raw binary data held in a string
    var byteString;
    if (dataURI.split(',')[0].indexOf('base64') >= 0)
      byteString = atob(dataURI.split(',')[1]);
    else
      byteString = unescape(dataURI.split(',')[1]);

    // separate out the mime component
    var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

    // write the bytes of the string to a typed array
    var ia = new Uint8Array(byteString.length);
    for (var i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }

    return new Blob([ia], { type: mimeString });
  }

}
