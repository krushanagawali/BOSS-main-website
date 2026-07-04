// import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.html',
//   styleUrls: ['./app.css']
// })
// export class App implements OnInit, AfterViewInit {
//   currentYear: number = new Date().getFullYear();
//   isMobileMenuOpen: boolean = false;

//   constructor(private el: ElementRef) {}

//   ngOnInit() {}

//   ngAfterViewInit() {
//     // This is the code that makes the invisible sections visible when you scroll!
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add('show-animate');
//         }
//       });
//     }, { threshold: 0.1 });

//     // Finds all elements with 'fade-up' and watches them
//     const hiddenElements = this.el.nativeElement.querySelectorAll('.fade-up');
//     hiddenElements.forEach((el: any) => observer.observe(el));
//   }

//   toggleMenu() {
//     this.isMobileMenuOpen = !this.isMobileMenuOpen;
//   }

//   // Professional smooth scroll function for your navigation bar
//   scrollToSection(sectionId: string, event?: Event) {
//     if (event) {
//       event.preventDefault();
//     }
//     const element = document.getElementById(sectionId);
//     if (element) {
//       const yOffset = -90; 
//       const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
//       window.scrollTo({ top: y, behavior: 'smooth' });
//     }
//     this.isMobileMenuOpen = false; 
//   }
// }


import { Component, OnInit, ElementRef, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App implements OnInit, AfterViewInit {
  currentYear: number = new Date().getFullYear();
  isMobileMenuOpen: boolean = false;

  constructor(
    private el: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object // Injects the platform checker
  ) {}

  ngOnInit() {}

  ngAfterViewInit() {
    // --- BULLETPROOF SSR GUARD ---
    // This tells Angular: Only run this code if we are inside a real web browser!
    if (isPlatformBrowser(this.platformId)) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show-animate');
          }
        });
      }, { threshold: 0.1 });

      // Finds all elements with 'fade-up' and watches them safely
      const hiddenElements = this.el.nativeElement.querySelectorAll('.fade-up');
      hiddenElements.forEach((el: any) => observer.observe(el));
    }
  }

  toggleMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  // Professional smooth scroll function for your navigation bar
  scrollToSection(sectionId: string, event?: Event) {
    if (event) {
      event.preventDefault();
    }
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -90; 
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    this.isMobileMenuOpen = false; 
  }
}