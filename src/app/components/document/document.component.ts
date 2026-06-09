import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DocumentService } from 'src/app/services/document.service';

@Component({
  selector: 'app-document',
  standalone: true,
  imports: [ReactiveFormsModule ],
  templateUrl: './document.component.html',
  styleUrl: './document.component.scss'
})
export class DocumentComponent {
  uploadForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private documentService: DocumentService) {
    this.uploadForm = this.formBuilder.group({
      typedocument: '',
      file: ['']
    });
  }
  
  
  onFileChange(event: Event) {
    if (this.uploadForm && event.target instanceof HTMLInputElement) {
      const file = event.target.files?.[0];
      if (file) {
        this.uploadForm.get('file')?.setValue(file);
      }
    }
  }

  

  onSubmit() {
    const file = this.uploadForm?.get('file')?.value;
    const typedocument = this.uploadForm?.get('typedocument')?.value;
  
    if (file instanceof File && typedocument) {
      this.documentService.ajouterDocument(file, { typedocument }).subscribe(
        response => {
          console.log('Document uploaded successfully!', response);
          // Gérer la réponse ici
        },
        error => {
          console.error('Error uploading document:', error);
          // Gérer les erreurs ici
        }
      );
    } else {
      console.error('Invalid file or typedocument value');
    }
  }
}  