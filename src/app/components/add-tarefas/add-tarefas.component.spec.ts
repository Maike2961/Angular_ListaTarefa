import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTarefasComponent } from './add-tarefas.component';

describe('AddTarefasComponent', () => {
  let component: AddTarefasComponent;
  let fixture: ComponentFixture<AddTarefasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddTarefasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTarefasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
