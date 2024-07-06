import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpErrorResponse} from '@angular/common/http';
import { catchError, Observable,throwError } from 'rxjs';
import { User } from '../user';
@Injectable({
  providedIn: 'root'
})
export class UserService {
private apiUrl="http://localhost:3000/user";
private userApiUrl="http://localhost:3000/registerLicense";
  constructor(private http: HttpClient) {

  }

  regUser(user:User):Observable<User>{
    console.log("***************************************am into this**************");
    return this.http.post<User>(this.userApiUrl,user).pipe(catchError(this.handleError));
  }
  private handleError(error: HttpErrorResponse) {
    console.error(`Server Error: ${error.message}`);
    return throwError('Something went wrong; please try again later.');
  }
}
