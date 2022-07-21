/*** Angular Material ***/
import { NgModule } from '@angular/core';
import { MatSliderModule}  from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMomentDateModule } from '@angular/material-moment-adapter';

import { MatChipsModule } from '@angular/material/chips';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTabsModule } from '@angular/material/tabs';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonToggle } from '@angular/material/button-toggle';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatRadioButton, MatRadioModule } from '@angular/material/radio';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatPaginatorModule } from '@angular/material/paginator';

/*** PrimeNg ***/
import { AccordionModule } from 'primeng/accordion';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { MenuModule } from 'primeng/menu';
import { TooltipModule } from 'primeng/tooltip';
import { PanelModule } from 'primeng/panel';
import { SpinnerModule } from 'primeng/spinner';
import { MessageModule } from 'primeng/message';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SidebarModule } from 'primeng/sidebar';
import { SlideMenuModule } from 'primeng/slidemenu';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { PaginatorModule } from 'primeng/paginator';
import { AvatarModule } from 'primeng/avatar';
import { DataViewModule } from 'primeng/dataview';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ChipsModule } from 'primeng/chips';
import { FieldsetModule } from 'primeng/fieldset';
import { GMapModule } from 'primeng/gmap';
import { MultiSelectModule } from 'primeng/multiselect';
import { PanelMenuModule } from 'primeng/panelmenu';
import { CaptchaModule } from 'primeng/captcha';
import { SelectButtonModule } from 'primeng/selectbutton';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { ProgressBarModule } from 'primeng/progressbar';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { VirtualScrollerModule } from 'primeng/virtualscroller';
import { TabMenuModule } from 'primeng/tabmenu';
import { ChartModule } from 'primeng/chart';
const MaterialModules =  [
    /*Angular Material*/
    MatRadioModule,
    MatButtonModule,
    MatSliderModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatCardModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatTooltipModule,
    MatChipsModule,
    MatCheckboxModule,
    MatTabsModule,
    MatMenuModule,
    MatDialogModule,
    MatIconModule,
    MatSelectModule,
    MatSnackBarModule,
    MatExpansionModule,
    MatSidenavModule,
    MatToolbarModule,
    MatProgressBarModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatGridListModule,
    MatPaginatorModule,
    /****************/

    /*** PrimeNg ***/
    AccordionModule,
    AutoCompleteModule,
    BadgeModule,
    ButtonModule,
    CalendarModule,
    MenuModule,
    TooltipModule,
    PanelModule,
    SpinnerModule,
    MessageModule,
    RadioButtonModule,
    SidebarModule,
    SlideMenuModule,
    BreadcrumbModule,
    PaginatorModule,
    AvatarModule,
    DataViewModule,
    DialogModule,
    DropdownModule,
    InputTextModule,
    InputTextareaModule,
    ChipsModule,
    FieldsetModule,
    GMapModule,
    MultiSelectModule,
    PanelMenuModule,
    CaptchaModule,
    SelectButtonModule,
    CardModule,
    CarouselModule, 
    ProgressBarModule,
    ProgressSpinnerModule,
    VirtualScrollerModule,
    TabMenuModule,
    MatDividerModule,
    ButtonModule,
    ChartModule
    /****************/
];

@NgModule({
    declarations: [],
    imports: [],
    exports: [...MaterialModules]
})
export class MaterialsModule{}