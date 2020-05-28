import { HttpInterceptor, HttpRequest, HttpHandler, HttpParams } from "@angular/common/http"
export class authlogin implements HttpInterceptor
{
    public authToken :string = null
    intercept(req: HttpRequest<any>,next: HttpHandler)
    {
        var modifiedReq : HttpRequest<any> = req;
        if(this.authToken!=null)
        {
            modifiedReq = req.clone({
                params: new HttpParams().append("auth",this.authToken)
            })
        }
        return next.handle(modifiedReq);
    }
}