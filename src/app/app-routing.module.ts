import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DefaultLayoutComponent } from './containers';
import { Page404Component } from './views/pages/page404/page404.component';
import { Page500Component } from './views/pages/page500/page500.component';
import { LoginComponent } from './views/pages/login/login.component';
import { RegisterComponent } from './views/pages/register/register.component';
import {AdminComponent} from  './components/admin/admin.component';
import {UtilisateurComponent} from './components/utilisateur/utilisateur.component';
import { AdminconcComponent } from './components/adminconc/adminconc.component';
import{ConsulteradminComponent} from './components/consulteradmin/consulteradmin.component';
import{AjouterUtilisateurComponent} from './components/ajouter-utilisateur/ajouter-utilisateur.component';
import{ModifierutilisateurComponent} from './components/modifierutilisateur/modifierutilisateur.component';
import{SupprimerutilisateurComponent} from './components/supprimerutilisateur/supprimerutilisateur.component'
import {ConsulterroleComponent}from'./components/consulterrole/consulterrole.component';
import { AjouterroleComponent } from './components/ajouterrole/ajouterrole.component';
import{ModifierroleComponent} from './components/modifierrole/modifierrole.component';
import{ConsultermarqueComponent}from './components/consultermarque/consultermarque.component';
import{MarketplaceComponent} from './components/marketplace/marketplace.component';
import{ConsulterproduitComponent} from './components/consulterproduit/consulterproduit.component';
import{ProduitmarqueComponent} from './components/produitmarque/produitmarque.component';
import{GerermarqueComponent} from './components/admin/stock/gerermarque/gerermarque.component';
import{AjoutermarqueComponent} from './components/admin/stock/ajoutermarque/ajoutermarque.component';
import{ModifiermarqueComponent} from './components/admin/stock/modifiermarque/modifiermarque.component'
import{GererproduitComponent} from './components/admin/stock/gererproduit/gererproduit.component';
import{AjoutmarqueComponent} from './components/concessionnaire/ajoutmarque/ajoutmarque.component'
import{ValidermarqueComponent} from './components/admin/stock/validermarque/validermarque.component'
import{ConcessionnaireComponent} from './components/concessionnaire/concessionnaire.component'
import{ConsultemarqueComponent}from './components/concessionnaire/consultemarque/consultemarque.component'
import{ModifierproduitComponent}from './components/admin/stock/modifierproduit/modifierproduit.component'
import{ValiderproduitComponent} from './components/admin/stock/validerproduit/validerproduit.component';
import{PanierComponent}from './components/panier/panier.component';
import{ConsulterdemandeComponent}from './components/consulterdemande/consulterdemande.component';
import{SimulateurComponent} from './components/simulateur/simulateur.component';
import{DetailsproduitComponent} from'./components/client/detailproduit/detailproduit.component';
import{AjouterdemandeComponent} from'./components/client/ajouterdemande/ajouterdemande.component';
import{DemandedevisComponent} from'./components/client/demandedevis/demandedevis.component';
import{AjouterproduitComponent}from './components/concessionnaire/ajouterproduit/ajouterproduit.component'
import{DocumentComponent} from './components/document/document.component';
import{UploaddocumentComponent} from './components/uploaddocument/uploaddocument.component';
import{ValiderDemandeComponent}from'./components/admin/stock/validerdemande/validerdemande.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  
  
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./views/dashboard/dashboard.module').then((m) => m.DashboardModule)
      },
      {
        path: 'theme',
        loadChildren: () =>
          import('./views/theme/theme.module').then((m) => m.ThemeModule)
      },
      {
        path: 'base',
        loadChildren: () =>
          import('./views/base/base.module').then((m) => m.BaseModule)
      },
      {
        path: 'buttons',
        loadChildren: () =>
          import('./views/buttons/buttons.module').then((m) => m.ButtonsModule)
      },
      {
        path: 'forms',
        loadChildren: () =>
          import('./views/forms/forms.module').then((m) => m.CoreUIFormsModule)
      },
      {
        path: 'charts',
        loadChildren: () =>
          import('./views/charts/charts.module').then((m) => m.ChartsModule)
      },
      {
        path: 'icons',
        loadChildren: () =>
          import('./views/icons/icons.module').then((m) => m.IconsModule)
      },
      {
        path: 'notifications',
        loadChildren: () =>
          import('./views/notifications/notifications.module').then((m) => m.NotificationsModule)
      },
      {
        path: 'widgets',
        loadChildren: () =>
          import('./views/widgets/widgets.module').then((m) => m.WidgetsModule)
      },
      {
        path: 'pages',
        loadChildren: () =>
          import('./views/pages/pages.module').then((m) => m.PagesModule)
      },
    ]
  },
  {
    path: '404',
    component: Page404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: Page500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {
    path:'admin',
  component:AdminComponent ,
  data: { layout: 'default-layout' } 
  },
  {
    path:'concessionnaire',
    component: ConcessionnaireComponent
   },

 {
  path:'produitmarque/:id',
  component: ProduitmarqueComponent
 },
 {
  path:'modifierproduit/:id',
  component: ModifierproduitComponent
 }, 
 {
  path:'validerproduit/:id',
  component: ValiderproduitComponent
 }, 
 {
  path:'ajoutermarque',
  component: AjoutermarqueComponent
  },
  {
    path:'doc/:iddemande',
    component: UploaddocumentComponent
    },
  {
    path:'simulateur',
    component: SimulateurComponent
    },
   
    {
      path:'detailsproduit/:id',
      component: DetailsproduitComponent
      },
      
  {
    path:'consultemarque',
    component: ConsultemarqueComponent
    },
    {
      path:'demandedevis',
      component: DemandedevisComponent
      },
      {
        path:'validerdemande',
        component: ValiderDemandeComponent
        },
    {
      path:'consulterdemande',
      component: ConsulterdemandeComponent
      },
  {
    path:'ajoutmarque',
    component: AjoutmarqueComponent
    },
    {
      path:'ajouterdemande',
      component: AjouterdemandeComponent
      },
      {
        path:'document',
        component: DocumentComponent
        },
  {
    path:'gererproduit',
    component: GererproduitComponent
    },

    {
      path:'consulterrole',
      component: ConsulterroleComponent
      },
      {
        path:'validermarque',
        component: ValidermarqueComponent
        },
      {
        path:'gerermarque',
        component: GerermarqueComponent
        },
        {
          path:'ajouterproduit',
          component: AjouterproduitComponent
          },
      {
        path:'modifierrole/:id',
        component: ModifierroleComponent
        },

  
  {
    path:'utilisateur',
    component:UtilisateurComponent
    },
    {
      path:'panier',
      component:PanierComponent
      },
    {
      path:'consultermarque',
      component:ConsultermarqueComponent
      },
    {
      path:'concessionnaire',
      component: AdminconcComponent
      },

    { path: 'admin/utilisateur', component: UtilisateurComponent },
  
    {
      path: 'consulteradmin', // Supprimez l'espace après 'consulteradmin'
      component: ConsulteradminComponent
    },
    {
      path: 'consulterproduit', // Supprimez l'espace après 'consulteradmin'
      component: ConsulterproduitComponent
    },
    { path: 'marques', component: ConsultermarqueComponent },
    
    {
      path: 'ajouterutilisateur', // Supprimez l'espace après 'consulteradmin'
      component: AjouterUtilisateurComponent
    },
    {
      path: 'ajouterrole', // Supprimez l'espace après 'consulteradmin'
      component: AjouterroleComponent
    },
    {
      path: 'ajouterutilisateur', // Supprimez l'espace après 'consulteradmin'
      component: AjouterroleComponent
    },
    {
      path: 'marketplace', // Supprimez l'espace après 'consulteradmin'
      component: MarketplaceComponent
    },

{
  path:'adminconc',
  component: AdminconcComponent
},

 {
  path: 'modifiermarque/:id', // Supprimez l'espace après 'consulteradmin'
  component: ModifiermarqueComponent
},

    {
      path: 'modifierutilisateur/:id', 
      component: ModifierutilisateurComponent
    },
    
    {
      path: 'supprimerutilisateur', // Supprimez l'espace après 'consulteradmin'
      component: SupprimerutilisateurComponent
    },

  {path: '**', redirectTo: 'dashboard'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled',
      initialNavigation: 'enabledBlocking'
      // relativeLinkResolution: 'legacy'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}


