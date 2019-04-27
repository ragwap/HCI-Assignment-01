import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./components/auth/admin/login/login.component";
import { AppComponent } from "./app.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { RegisterComponent } from "./components/auth/admin/register/register.component";
import { AboutComponent } from "./components/about/about.component";
import { ContactComponent } from "./components/contact/contact.component";
import { HomeComponent } from "./components/home/home.component";
import { CregisterComponent } from "./components/auth/customer/register/cregister/cregister.component";
import { CloginComponent } from "./components/auth/customer/login/clogin/clogin.component";
import { AdminDashboardComponent } from "./components/admin-dashboard/admin-dashboard.component";
import { HConfigComponent } from "./components/admin-dashboard/admin-content/h-config/h-config.component";
import { BookingsComponent } from "./components/admin-dashboard/admin-content/bookings/bookings.component";
import { MenusComponent } from "./components/admin-dashboard/admin-content/menus/menus.component";
import { GuestsComponent } from "./components/admin-dashboard/admin-content/guests/guests.component";
import { CmsComponent } from "./components/admin-dashboard/admin-content/cms/cms.component";
import { CalendarComponent } from "./components/admin-dashboard/admin-content/calendar/calendar.component";
import { EditProfileComponent } from "./components/auth/admin/edit-profile/edit-profile.component";
import { UpdateComponent } from "./components/auth/admin/edit-profile/update/update.component";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "admin/login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "contact", component: ContactComponent },
  { path: "admin/register", component: RegisterComponent },
  { path: "user/register", component: CregisterComponent },
  { path: "user/login", component: CloginComponent },
  { path: "admin/edit_profile", component: EditProfileComponent },
  { path: "admin/dashboard", component: AdminDashboardComponent },
  { path: "admin/dashboard/h_config", component: HConfigComponent },
  { path: "admin/dashboard/bookings", component: BookingsComponent },
  { path: "admin/dashboard/menus", component: MenusComponent },
  { path: "admin/dashboard/guests", component: GuestsComponent },
  { path: "admin/dashboard/cms", component: CmsComponent },
  { path: "admin/dashboard/calendar", component: CalendarComponent },
  { path: "admin/update", component: UpdateComponent },

  { path: "**", component: NotFoundComponent }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
