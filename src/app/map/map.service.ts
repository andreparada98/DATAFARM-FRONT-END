
import {Injectable} from '@angular/core';
import {MapData} from "./map.model";
import {Feature} from "geojson";
import * as L from 'leaflet';
import {PathOptions} from "leaflet";



@Injectable({
    providedIn: 'root'
})
export class MapService {

    // @ts-ignore
    private _map: MapData;

    constructor() {
    }

    public get map(): MapData {
        if (this._map == null) {throw 'map is undefined'}
        return this._map;
    }

    public set map(basemap: MapData) {
        this._map = basemap;
    }

    /**
     * The feature is a geometry, this geometry can be polygons or points.
     */
    insertFeature(feature: Feature | Feature[], style?: PathOptions): void {

        if (!Array.isArray(feature)) {
            feature = [feature];
        }

        if (style == undefined) {
            style = {
                stroke: true,
                color: '#ffffff',
                fillColor: '#000000',
                fillOpacity: 0.2}
        }

        L.geoJSON(feature, {
            style: style
        }).addTo(this._map)
    }
}
