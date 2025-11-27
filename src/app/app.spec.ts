import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should display menu', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const entries = compiled.querySelectorAll('button')
    expect(entries.item(0)?.textContent).toContain('Main');
    expect(entries.item(1)?.textContent).toContain('Posts');
    expect(entries.item(2)?.textContent).toContain('Account');
  });
});
