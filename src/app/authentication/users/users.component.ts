import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, catchError, delay, pluck} from 'rxjs/operators';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute) { 
    activatedRoute.paramMap.pipe(pluck('params', 'id')).subscribe(console.log);
  }

  ngOnInit() {
  }

}
