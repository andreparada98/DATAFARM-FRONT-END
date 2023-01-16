import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Submission, SubmissionModel} from "./submission.model";

@Injectable({
    providedIn: 'root'
})
export class SubmissionService {

    API = '/api/submission'

    constructor(private http: HttpClient) {
    }

    submit(code: string, file: File): Observable<Submission> {

        let formData = new FormData();
        formData.append('file', file, `submission-${code}.zip`);

        return this.http.post<SubmissionModel>(
            `${this.API}/${code}`,
            formData)
            .pipe(map((response) => response.data));
    }
}
