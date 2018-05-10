import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthGuard implements CanActivate {
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
      ): boolean {
        return  route.params.id ==='Todo1';
        // return true;
      }
  }