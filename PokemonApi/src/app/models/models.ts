
export interface PokemonItem {
    name: string;
    url: string;
}

export interface ListaPokemon {
    count: number;
    next: string;
    previous: string | null;
    results: PokemonItem[];
}

// Per nomi-pokemon - singolo tipo di pokemon
export interface TypePokemon {
    pokemon: {
        name: string;
        url: string;
    };
    slot: number;
}

// Per nomi-pokemon - risposta API per un tipo specifico
export interface NomiPokemon {
    id: number;
    name: string;
    pokemon: TypePokemon[];
}

// Per descrizione-pokemon - singolo tipo
export interface PokemonType {
    type: {
        name: string;
        url: string;
    };
    slot: number;
}

// Per descrizione-pokemon - sprite e immagini
export interface PokemonSprites {
    front_default: string;
    [key: string]: any;
}

// Per descrizione-pokemon - risposta completa del dettaglio
export interface DescrizionePokemon {
    name: string;
    id: number;
    base_experience: number;
    height: number;
    weight: number;
    sprites: PokemonSprites;
    types: PokemonType[];
}