import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  private apiUrl = 'http://localhost:8080/documents/add';

  constructor(private http: HttpClient) { }

  ajouterDocument(file: File, document: any): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);
    formData.append('typedocument', document.typedocument);

    return this.http.post<any>(this.apiUrl, formData).pipe(catchError(error => {
        throw error;
      })
    );
  }
}