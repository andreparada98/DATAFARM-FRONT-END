export class FieldModel {
    data: {
        name: string;
        fields: Field[];
        success: string | null;
        warning: string | null;
        error: string | null;
    }
}

export interface Properties {
    idField: string;
    name: string;
}

export interface Geometry {
    type: string;
    coordinates: number[][][];
}

export interface Field {
    type: string;
    properties: Properties;
    geometry: Geometry;
}