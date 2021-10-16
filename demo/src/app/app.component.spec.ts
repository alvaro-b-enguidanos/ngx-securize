import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SecurizeTestingModule } from 'ngx-securize';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, SecurizeTestingModule],
      declarations: [AppComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create the app', () => {
    expect(component).toBeTruthy();
  });

  test(`should have as title 'demo'`, () => {
    expect(component.title).toEqual('demo');
  });

  test('should render title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('demo app is running!');
  });

  it('should have a say method', () => {
    const spy = jest.spyOn(component, 'say');
    component.ngOnInit();
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should have a say2 method', () => {
    const spy = jest.spyOn(component, 'say2');
    component.ngOnInit();
    expect(spy).toHaveBeenCalledWith('foo');
  });

  it('should have a say3 method', () => {
    const spy = jest.spyOn(component, 'say3');
    component.ngOnInit();
    expect(spy).toHaveBeenCalledWith('foo');
  });

  it('should have a say4 method', () => {
    const spy = jest.spyOn(component, 'say4');
    component.ngOnInit();
    expect(spy).toHaveBeenCalledWith('foo');
  });
});
