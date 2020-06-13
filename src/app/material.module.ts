import { NgModule } from '@angular/core';
import { MatButtonModule } from "@angular/material/button";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatTableModule } from "@angular/material/table";
import { MatDialogModule } from "@angular/material/dialog";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { MatInputModule } from "@angular/material/input";
import { MatPaginatorModule } from "@angular/material/paginator";

@NgModule({
    imports:[
        MatButtonModule,
        MatButtonToggleModule,
        MatTableModule,
        MatDialogModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatSelectModule,
        MatInputModule,
        MatPaginatorModule,
    ],
    exports:[
        MatButtonModule,
        MatButtonToggleModule,
        MatTableModule,
        MatDialogModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatSelectModule,
        MatInputModule,
        MatPaginatorModule,
    ],
})

export class MaterialModule{

}