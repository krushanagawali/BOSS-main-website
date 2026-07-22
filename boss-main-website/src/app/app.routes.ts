import { Routes } from '@angular/router';

// 1. FORCE IMPORT THE COMPONENTS DIRECTLY (Adjust filenames if needed)
import { PrivacyPolicy } from './legal/privacy-policy/privacy-policy';
import { TermsConditions } from './legal/terms-conditions/terms-conditions';
import { CookiesPolicy } from './legal/cookies-policy/cookies-policy';
import { Disclaimer } from './legal/disclaimer/disclaimer';
import { Security } from './legal/security/security'; // If you made this file

export const routes: Routes = [


  // 1. Explicitly define the root (Home) path
  // Since your home content is in app.html, we can use a dummy component or redirect
{ path: '', children: [] , title: 'Bharat Online Safety Services' },
  
  // 2. Legal Pages
  { path: 'privacy-policy', title: 'Privacy Policy | Bharat Online Safety Services', loadComponent: () => import('./legal/privacy-policy/privacy-policy').then(m => m.PrivacyPolicy) },
  { path: 'terms-conditions', title: 'Terms Conditions | Bharat Online Safety Services', loadComponent: () => import('./legal/terms-conditions/terms-conditions').then(m => m.TermsConditions) },
  { path: 'cookies-policy', title: 'Cookies Policy | Bharat Online Safety Services',  loadComponent: () => import('./legal/cookies-policy/cookies-policy').then(m => m.CookiesPolicy) },
  { path: 'disclaimer', title: 'Disclaimer | Bharat Online Safety Services', loadComponent: () => import('./legal/disclaimer/disclaimer').then(m => m.Disclaimer) },
  { path: 'security', title: 'Security | Bharat Online Safety Services',loadComponent: () => import('./legal/security/security').then(m => m.Security) },

  // 3. Catch-all route (redirects everything else to home)
  { path: '**', redirectTo: 'home' }

];
