import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SecurizeTestingModule } from 'ngx-securize';
import { DetailsComponent } from './details.component';

describe('DetailsComponent', () => {
  let fixture: ComponentFixture<DetailsComponent>;
  let component: DetailsComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, SecurizeTestingModule],
      declarations: [DetailsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create the app', () => {
    expect(component).toBeTruthy();
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
