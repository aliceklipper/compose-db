declare interface Style {
    use   () : void;
    unuse () : void;
}

declare type Level = 'success' | 'info' | 'warning' | 'error';

declare const __DEV__ : boolean;
declare const require : { <Type>(module : string) : Type };

declare interface DbComposeRecord {
    comment   : string;
    string    : string;
    sequences : string[];
    tags      : string[];
    keysym    : string;
}
