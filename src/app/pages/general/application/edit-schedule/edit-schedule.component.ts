import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HoraireService } from '../../../../services/horaire.service';

@Component({
  selector: 'app-edit-schedule',
  templateUrl: './edit-schedule.component.html',
  styleUrls: ['./edit-schedule.component.scss'],
 
})

export class EditScheduleComponent implements OnInit {
  horaireForm: FormGroup;
  horaireId!: number;
  isAdmin: boolean = false; //variable pour suivre le statut de l'user Admin

  constructor(
    private formBuilder: FormBuilder, 
    private horaireService: HoraireService
   
    ) {

    this.horaireForm = this.formBuilder.group({
      jour: ['', Validators.required],
      heureDebut: ['', Validators.required],
      heureFin: ['', Validators.required]
    });
  }
  
  ngOnInit(): void {
    //vérifier si l'user est un admin
    this.isAdmin = this.authService.isAdmin();

    if (this.isAdmin) {
       //récuperer l'id de l'horaire à modifier 
      this.horaireId=1;

      // méthode du service pour récup les détails de l'horaire
      this.horaireService.getHoraire(this.horaireId).subscribe(
        (data) => {
          //mettre à jour les champs du formulaire avec les données récupérées
          this.horaireForm.patchValue(data);
        },
        (error) => {
          //gérer les erreurs
          console.error('Erreur lors de la récupération de l\'horaire:',error);
        }
      );
    }

    onSubmit():void {
      if (this.isAdmin && this.horaireService.valid) {
        //mettre à jour l'horaire
        this.horaireService.updateHoraire(this.horaireId, this.horaireForm.value).subscribe(
          () => {
            console.log('Horaire mis à jour avec succès !');
          },
          (error) => {
          console.error('Erreur lors de la mise à jour de l\'horaire:',error);
        }
      );
    }
  } 
}

    
   
    


