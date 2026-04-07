import { HttpInterceptorFn } from "@angular/common/http";
import { inject } from "@angular/core";
import { LiffService } from "../services/liff.service";

export const liffAuthInterceptor: HttpInterceptorFn = (req, next) => {
    const _LiffService = inject(LiffService);
    const accessToken = _LiffService.GetAccessToken();

    if (accessToken) {
        req = req.clone({
            setHeaders: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
    }
    return next(req);
};