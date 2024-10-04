import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ItinerariosService } from '../../services/itinerario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { Itinerario } from '../../interfaces/itinerario.interface';
import { filter, switchMap, tap } from 'rxjs';
import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-nuevoiti',
  templateUrl: './nuevoiti.component.html',
  styles: ``
})
export class NuevoitiComponent implements OnInit{
  //formulario reactivo
  public itinerarioForm = new FormGroup({
    id: new FormControl<string>(''),
    nombre: new FormControl<string>(''),
    dia_1: new FormControl<string>(''),
    actividades_dia_1: new FormControl<string>(''),
    dia_2: new FormControl<string>(''),
    actividades_dia_2: new FormControl<string>(''),
    dia_3: new FormControl<string>(''),
    actividades_dia_3: new FormControl<string>(''),
    dia_4: new FormControl<string>(''),
    actividades_dia_4: new FormControl<string>(''),
    alt_img: new FormControl<string>(''),
  });
  constructor(
    private itinerariosService: ItinerariosService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackbar: MatSnackBar,
    private dialog: MatDialog,
  ){}

  get currentItinerario():Itinerario{
    const itinerario = this.itinerarioForm.value as Itinerario;
    return itinerario;
  }

  ngOnInit():void {

    if (!this.router.url.includes('editariti') ) return;

    this.activatedRoute.params
    .pipe(
      switchMap( ({ id }) => this.itinerariosService.getItinerarioById( id) ),
    ).subscribe(itinerario =>{

      if ( !itinerario ) {
        return this.router.navigateByUrl('/');
      }
      this.itinerarioForm.reset( itinerario );
      return;
    });

  }
  onSubmit():void {
    if ( this.itinerarioForm.invalid ) return;
    if ( this.currentItinerario.id) {
      this.itinerariosService.updateItinerario(this.currentItinerario)
      .subscribe( itinerario => {
<<<<<<< Updated upstream
        this.showSnackbar(`${ itinerario.nombre } updated`);
=======
        this.showSnackbar(`Itinerario Actualizado Correctamente`);
>>>>>>> Stashed changes
      } );
      return;
    }
    this.itinerariosService.addItinerario( this.currentItinerario )
<<<<<<< Updated upstream
    .subscribe( itinerario => {
      // TODO: mostrar snackbar y navegar a administrador/editar/itinerario.id
      this.router.navigate(['/administrador/editariti', itinerario.id]);
      this.showSnackbar(`${ itinerario.nombre } created`);
=======
    .subscribe(() => {
      this.router.navigate(['/administrador/listpaq']);
      this.showSnackbar(`Itinerario Guardado Correctamente`);
>>>>>>> Stashed changes
    });

  }
  showSnackbar(message: string ):void{
    this.snackbar.open( message, 'Listo',{
      duration: 2500,
    })
  }
  // onDeleteItinerario(){
  //   if ( !this.currentItinerario.id ) throw Error('Itinerario id es required')
  //     const dialogRef = this.dialog.open(ConfirmDialogComponent, {
  //       data:this.itinerarioForm.value
  //     });

  //     dialogRef.afterClosed()
  //      .pipe(
  //       filter((result: boolean) => result),
  //       switchMap( () => this.itinerariosService.deleteItinerarioById( this.currentItinerario.id)),
  //       tap( wasDeleted => console.log({ wasDeleted})),
  //      )
  //      .subscribe(result =>{
  //         this.router.navigate(['administrador/listpaq'])
  //      })
  // }
  onDeleteItinerario(): void {
    if (!this.currentItinerario.id) return;

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Eliminar Itinerario',
        message: `¿Está seguro de eliminar el itinerario?`,
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.itinerariosService.deleteItinerarioById(this.currentItinerario.id)
          .subscribe(() => {
            this.showSnackbar(`Itinerario Eliminado Correctamente`);
            this.router.navigateByUrl('/administrador/listpaq');
          });
      }
    });
  }

  goBack():void{
    this.router.navigateByUrl('administrador/listpaq')
  }

}


