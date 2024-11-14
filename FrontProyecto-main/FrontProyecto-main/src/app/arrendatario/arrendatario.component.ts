import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-arrendatario',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './arrendatario.component.html',
  styleUrl: './arrendatario.component.css'
})
export class ArrendatarioComponent {
  propertyTypes = ['Casa', 'Apartamento', 'Local', 'Oficina', 'Terreno'];
  conditions = ['Nuevo', 'Usado', 'En construcción'];
  searchForm: FormGroup;
  myGroup: FormGroup<{ firstName: any; }> | undefined;

  constructor(
    private fb: FormBuilder,
    // No descomentar hasta que se implemente el servicio
    // private servicioPropiedad: PropiedadServicioService
  ) {
    this.searchForm = new FormGroup({
      propertyType: new FormControl(['']),
      condition: new FormControl(['']), //
      location: new FormControl(['']),
      searchCriteriaNombre: new FormControl(false),
      searchCriteriaMunicipio: new FormControl(false),
      searchCriteriaCapacidad: new FormControl(false),
      searchText: new FormControl(['']),
    });
  }

  get searchCriteria() {
    return this.searchForm.get('hobbies') as FormArray;
  }

  ngOnInit(): void {
    this.myGroup = new FormGroup({
      firstName: new FormControl()
  });
  }
    onSearch() {
      console.log('Formulario enviado:', this.searchForm.value);
      //TODO: Implementar un paso de valores para mostrar un hijo (todas las propiedades) que cumplan con los criterios de búsqueda
    }
}