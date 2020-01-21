import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoggedinPage } from './loggedin.page';

describe('LoggedinPage', () => {
  let component: LoggedinPage;
  let fixture: ComponentFixture<LoggedinPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoggedinPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoggedinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
