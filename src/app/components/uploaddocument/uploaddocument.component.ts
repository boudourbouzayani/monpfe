import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Demandedocument } from 'src/app/models/demandedocument';
import { DemandeService } from 'src/app/services/demande.service';
import { DemandedocumentService } from 'src/app/services/demandedocument.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-uploaddocument',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterLink],
  templateUrl: './uploaddocument.component.html',
  styleUrl: './uploaddocument.component.scss'
})
export class UploaddocumentComponent implements OnInit {
 /* documents: Demandedocument[] = [];
  iddemande!: number;

  constructor(private route: ActivatedRoute, private demandedocumentService: DemandedocumentService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.iddemande = +params['iddemande'];
      this.getDocumentsByDemandeId(this.iddemande);
    });
  }

  getDocumentsByDemandeId(iddemande: number): void {
    this.demandedocumentService.getDocumentsByDemandeId(iddemande)
      .subscribe(documents => this.documents = documents);
  }

  onFileSelected(event: any, type: string): void {
    const file = event.target.files[0];
    let iddocument: number;
    // Sélectionner l'ID du document en fonction du type
    switch(type) {
      case 'CIN':
        iddocument = 1;
        break;
      case 'document':
        iddocument = 2;
        break;
      case 'extrait':
        iddocument = 3;
        break;
      default:
        iddocument = 0; // Valeur par défaut si le type n'est pas reconnu
    }
    if (iddocument !== 0) {
      this.demandedocumentService.ajouterDocumentALaDemande(iddocument, this.iddemande, file)
        .subscribe(response => {
          console.log('Document ajouté avec succès à la demande :', response);
          // Rafraîchir la liste des documents après l'ajout
          this.getDocumentsByDemandeId(this.iddemande);
        }, error => {
          console.error('Erreur lors de l\'ajout du document à la demande :', error);
        });
    } else {
      console.error('Type de document non reconnu :', type);
    }
  }
   confirmUpload(): void {
    // Code pour confirmer l'ajout des documents dans la base de données
    console.log('Documents ajoutés avec succès');
  }
}*/
demandedocument: Demandedocument[] = [];
  iddemande!: number ;
  totalUploadedFiles=0;
  //document!:string[];
  document: string[] = []; // Initialisez le tableau document

  constructor(private demandedocumentService: DemandedocumentService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Récupérer l'ID de la demande depuis l'URL
    this.route.params.subscribe(params => {
      this.iddemande = +params['iddemande']; // Convertir en nombre
      if (this.iddemande) {
        console.log(this.iddemande)
        this.getAssociations();
      }
    });
  }
//ici j'ai ajoute for pour pouvoir ajouter les labelles 
getAssociations(): void {
  this.demandedocumentService.getDocumentsByDemandeId(this.iddemande!).subscribe(
    (demandedocuments: Demandedocument[]) => {
      this.demandedocument = demandedocuments; // Utilisez demandedocuments reçu du service
      for (let index = 0; index < demandedocuments.length; index++) {
        const element = demandedocuments[index];
        this.demandedocumentService.getById(element.id.iddocument).subscribe(response => {
          this.document[index] = response.typedocument;
        });
      }
    },
    (error) => {
      console.error('Erreur lors de la récupération des associations :', error);
    }
  );
}

onFileChange(event: Event, demandedocument: Demandedocument): void {
  const inputElement = event.target as HTMLInputElement;
  const files = inputElement.files;
  if (files && files.length > 0) {
    const file = files[0];
    const iddocument = demandedocument.id.iddocument;
    const iddemande = this.iddemande!;
    this.demandedocumentService.ajouterDocumentALaDemande(iddocument, iddemande, file).subscribe(
      (response: any) => {
        console.log('Fichier téléchargé avec succès pour l\'association ID:', iddocument);
        this.totalUploadedFiles++; // Incrémentez le nombre de fichiers téléchargés avec succès
      },
      (error: any) => {
        console.error('Erreur lors du téléchargement du fichier pour l\'association ID:', iddocument, error);
        // Gérer les erreurs de téléchargement du fichier
      }
    );
  }
}



  getDocumentDetails(documentId: number): void {
    this.demandedocumentService.getById(documentId).subscribe(
      (document: Document) => {
        // Mettez à jour le type de document dans l'objet d'association
        const associationToUpdate = this.demandedocument.find(demandedocument => demandedocument.id.iddocument === documentId);
        if (associationToUpdate) {
        }
      },
      (error) => {
        console.error('Erreur lors de la récupération du document ID:', documentId, error);
      }
    );
  }








  confirmUpload(): void {
  if (this.totalUploadedFiles === this.demandedocument.length) {
    // Tous les fichiers ont été téléchargés avec succès
    Swal.fire('Succès', 'Tous les documents ont été envoyés avec succès', 'success');
  } else {
    // Afficher un message d'erreur si tous les documents n'ont pas été téléchargés
    Swal.fire('Erreur', 'Tous les documents n\'ont pas été envoyés avec succès', 'error');
  }
}

}
