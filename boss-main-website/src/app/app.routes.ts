import { Routes } from '@angular/router';

export const routes: Routes = [


  // 1. Explicitly define the root (Home) path
  // Since your home content is in app.html, we can use a dummy component or redirect
  { path: '', pathMatch: 'full', children: [] },
  
  // 2. Legal Pages
  { path: 'privacy-policy', loadComponent: () => import('./legal/privacy-policy/privacy-policy').then(m => m.PrivacyPolicy) },
  { path: 'terms-conditions', loadComponent: () => import('./legal/terms-conditions/terms-conditions').then(m => m.TermsConditions) },
  { path: 'cookies-policy', loadComponent: () => import('./legal/cookies-policy/cookies-policy').then(m => m.CookiesPolicy) },
  { path: 'disclaimer', loadComponent: () => import('./legal/disclaimer/disclaimer').then(m => m.Disclaimer) },
  { path: 'security', loadComponent: () => import('./legal/security/security').then(m => m.Security) },

  // 3. Catch-all route (redirects everything else to home)
  { path: '**', redirectTo: 'home' }

];
