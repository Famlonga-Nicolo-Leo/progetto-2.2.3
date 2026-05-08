import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescrizionePokemon } from './descrizione-pokemon';

describe('DescrizionePokemon', () => {
  let component: DescrizionePokemon;
  let fixture: ComponentFixture<DescrizionePokemon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DescrizionePokemon],
    }).compileComponents();

    fixture = TestBed.createComponent(DescrizionePokemon);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
