import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarefasItemComponent } from './tarefas-item.component';

describe('TarefasItemComponent', () => {
  let component: TarefasItemComponent;
  let fixture: ComponentFixture<TarefasItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarefasItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarefasItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
