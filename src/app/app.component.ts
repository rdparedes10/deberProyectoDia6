import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pass;
 // this.router.navigateByUrl(`/courses/${course.id}`);
 constructor(private router:Router, private route: ActivatedRoute) {
 }
 getPass(pass){
  this.pass = pass;
}
 login() {
   console.log(this.pass);
    this.router.navigateByUrl("authentication/login/"+this.pass);
  }
  logout(){
    this.router.navigateByUrl("/");
  }
}
