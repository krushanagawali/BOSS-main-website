import { Routes } from '@angular/router';

export const routes: Routes = [


  // 5. Legal Pages (Must come BEFORE the '**' route)
  { 
    path: 'privacy-policy', 
    loadComponent: () => import('./legal/privacy-policy/privacy-policy').then(m => m.PrivacyPolicy) 
  },
  { 
    path: 'terms-conditions', 
    loadComponent: () => import('./legal/terms-conditions/terms-conditions').then(m => m.TermsConditions) 
  },
  { 
    path: 'cookies-policy', 
    loadComponent: () => import('./legal/cookies-policy/cookies-policy').then(m => m.CookiesPolicy) 
  },
  { 
    path: 'disclaimer', 
    loadComponent: () => import('./legal/disclaimer/disclaimer').then(m => m.Disclaimer) 
  },

  { path: 'security', 
   loadComponent: () => import('./legal/security/security').then(m => m.Security) },

  // Catch-all route (should always be last)
  { path: '**', redirectTo: '' }

];
