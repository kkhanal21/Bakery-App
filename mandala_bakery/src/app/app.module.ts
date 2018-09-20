import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from "@angular/http";
import { AgmCoreModule } from '@agm/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

//components here
import { AppComponent } from './app.component';
//navigation components
import { NavigationComponent } from './navigation/navigation/navigation.component';
//home components
import { HomeComponent } from './body/home/home.component';
import { HomeSliderContainerComponent } from './body/home/home-slider-container/home-slider-container.component';
import { HomeProductsSectionComponent } from './body/home/home-products-section/home-products-section.component';
//menu component
import { MenuComponent } from './body/menu/menu.component';
import { MenuTopSectionComponent } from './body/menu/menu-top-section/menu-top-section.component';
import { MenuProductSectionComponent } from './body/menu/menu-product-section/menu-product-section.component';
//about section
import { AboutComponent } from './body/about/about.component';
import { AboutTopSectionComponent } from './body/about/about-top-section/about-top-section.component';
import { AboutQuoteSectionComponent } from './body/about/about-quote-section/about-quote-section.component';
import { AboutAboutSectionComponent } from './body/about/about-about-section/about-about-section.component';
//contact components
import { ContactComponent } from './body/contact/contact.component';
import { ContactTopSectionComponent } from './body/contact/contact-top-section/contact-top-section.component';
import { ContactContactSectionComponent } from './body/contact/contact-contact-section/contact-contact-section.component';
//footer components
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { MainComponent } from './main/main.component';
import { SettingComponent } from './admin/setting/setting.component';
import { ManageHomeComponent } from './admin/manage-admin/manage-home/manage-home.component';
import { ManageMenuComponent } from './admin/manage-admin/manage-menu/manage-menu.component';
import { ManageAdminComponent } from './admin/manage-admin/manage-admin.component';
import { AdminNavigationComponent } from './navigation/admin-navigation/admin-navigation.component';
//services and others
import { customHttpProvider } from './_helpers/index';
import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { AlertService, AuthenticationService, UserService,MenuService } from './_services/index';
import { UploadFileService } from "./_services/upload-file.service";
import { HomeProductDetailComponent } from './body/home/home-product-detail/home-product-detail.component';
import { ProductService } from './_services/product.service';
import { LoaderComponent } from './_loaders/loader/loader.component';


const routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: MainComponent,
    children: [
      { path: '',redirectTo:'home',pathMatch:'full' },
      { path: 'home', component: HomeComponent },
      { path: 'menu', component: MenuComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'about', component: AboutComponent }]
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'menu', component: MenuComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'about', component: AboutComponent },
      {
        path: '', component: ManageAdminComponent,
        children: [
          { path: '', component: ManageHomeComponent },
        ]
      },
      { path: 'setting', component: SettingComponent },
    ]
  },


  // otherwise redirect to home
  { path: '**', redirectTo: '' },

]

// [
//   { path: "", redirectTo: "/home", pathMatch: "full" },
//   { path: "admin", redirectTo: "/admin", pathMatch: "full" },
//   { path: "home", component: HomeComponent },
//   { path: "menu", component: MenuComponent },
//   { path: "contact", component: ContactComponent },
//   { path: "about", component: AboutComponent },
// ]

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AlertComponent,
    FooterComponent,
    HomeComponent,
    HomeSliderContainerComponent,
    HomeProductsSectionComponent,
    MenuComponent,
    MenuTopSectionComponent,
    MenuProductSectionComponent,
    AboutComponent,
    AboutTopSectionComponent,
    AboutQuoteSectionComponent,
    AboutAboutSectionComponent,
    ContactComponent,
    ContactTopSectionComponent,
    ContactContactSectionComponent,
    LoginComponent,
    AdminComponent,
    MainComponent,
    SettingComponent,
    ManageHomeComponent,
    ManageMenuComponent,
    ManageAdminComponent,
    AdminNavigationComponent,
    HomeProductDetailComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBatjvB6esTTo-XESAdFKfimNIOoRj8daA'
    })

  ],
  providers: [
    customHttpProvider,
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,
    UploadFileService,
    MenuService,
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }