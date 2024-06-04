import { Component, OnInit } from "@angular/core";
import { SortService } from "../../backend/services/sort.service";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styles: ``,
})
export class HomePageComponent implements OnInit {
  datos = [
    { nombre: 'Juan', edad: 30 },
    { nombre: 'Ana', edad: 25 },
    { nombre: 'Carlos', edad: 35 }
  ];
  permissions: Array<string> = [];

  constructor(private readonly _sortService: SortService) {}

  ngOnInit(): void {
    this._sortService.getAll().subscribe((permissions: string[]) => {
      this.permissions = permissions;
    });
  }
  
  ordenarPorNombre() {
    this.datos.sort((a, b) => a.nombre.localeCompare(b.nombre));
  }
}