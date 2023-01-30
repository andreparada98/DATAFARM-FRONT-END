
import {Injectable} from '@angular/core';
import {MapData} from "./map.model";
import {Feature} from "geojson";
import * as L from 'leaflet';
import {PathOptions} from "leaflet";
import { HttpClient } from '@angular/common/http';
import { FieldModel } from './model/fieldArrayCordinate.dto';



@Injectable({
    providedIn: 'root'
})
export class MapService {

    // @ts-ignore
    private _map: MapData;

    public activeField: string | undefined;

    constructor(
        private httpClient: HttpClient
    ) {
    }

    public get map(): MapData {
        if (this._map == null) {throw 'map is undefined'}
        return this._map;
    }

    public set map(basemap: MapData) {
        this._map = basemap;
    }

    /**
     * The feature is a geometry with properties, this geometry can be polygons or points.
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
            this.map.eachLayer((layer) => {
                layer.on('click', (event) =>{
                    if(event.target.feature.properties){
                        this.activeField = event.target.feature.properties['idField'];
                    }
                })
            });
    }


    requestGeometryField(){
        this.httpClient.get<FieldModel>('/api/farm').subscribe((res: FieldModel) => {
            this.insertFeature(res.data.fields as Feature[])
        })
    }
}
