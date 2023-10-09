import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TriviaService {

  easylevelUrl: string = "https://firebasestorage.googleapis.com/v0/b/docsaqpgo.appspot.com/o/Facil.json?alt=media&token=543628c4-135f-4e8f-a83b-b3875f982ec3&_gl=1*1qbjk0g*_ga*NDgzNTY5NzEwLjE2OTY3NzcxNzM.*_ga_CW55HF8NVT*MTY5NjgyMjQzNy4zLjEuMTY5NjgyMjQ0NC41My4wLjA.";
  midlevelUrl: string = "https://firebasestorage.googleapis.com/v0/b/docsaqpgo.appspot.com/o/Intermedio%20(1).json?alt=media&token=8bc78ed8-2ccb-40a3-8ee5-f4896bd751b5&_gl=1*120xxjf*_ga*NDgzNTY5NzEwLjE2OTY3NzcxNzM.*_ga_CW55HF8NVT*MTY5NjgxNzU5MC4yLjEuMTY5NjgxOTM4MS42MC4wLjA.";

  constructor(private http: HttpClient) { }

  getQuestionsA(difficulty: string): Observable<any> {
    const url = difficulty === 'easy' ? this.easylevelUrl : this.midlevelUrl;
    return this.http.get(url).pipe(
            map(response => {
                return response;
            })
        );
  }
}
