import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});

describe('Products component', () => {
  let component: ProductsComponent;
  beforeEach(async () => {
    component = new ProductsComponent()
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should have a products list with 6 product', () => {
      expect(component.products.length).toEqual(6);
  });
});
