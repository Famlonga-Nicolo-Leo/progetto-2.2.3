import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NomiPokemon } from './nomi-pokemon';

describe('NomiPokemon', () => {
  let component: NomiPokemon;
  let fixture: ComponentFixture<NomiPokemon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NomiPokemon],
    }).compileComponents();

    fixture = TestBed.createComponent(NomiPokemon);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
