export class FieldChartModel {
    data: Data;
    success: any;
    warning: any;
    error: any;
}

    export interface Datum {
        x: number;
        y: number;
    }

    export interface Evolution {
        data: Datum[];
        xLabel: string;
        yLabel: string;
    }

    export interface Datum2 {
        x: string;
        y: number;
    }

    export interface Rain {
        data: Datum2[];
        xLabel: string;
        yLabel: string;
    }

    export interface Efficiency {
        data: number;
        label: string;
    }

    export interface Data {
        evolution: Evolution;
        rain: Rain;
        efficiency: Efficiency;
    }

    export interface RootObject {
        data: Data;
        success?: any;
        warning?: any;
        error?: any;
    }



