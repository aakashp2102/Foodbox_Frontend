import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '../_models/user';
import { UserService} from '../_services/user.service';
import { AuthenticationService } from '../_services/authentication.service';

// @Component({ templateUrl: 'home.component.html' })
// export class HomeComponent {
//     loading = false;
//     currentUser: User;
//     userFromApi: User;

//     constructor(
//         private userService: UserService,
//         private authenticationService: AuthenticationService
//     ) {
//         this.currentUser = this.authenticationService.currentUserValue;
//     }

//     ngOnInit() {
//         this.loading = true;
//         this.userService.getById(this.currentUser.id).pipe(first()).subscribe(user => {
//             this.loading = false;
//             this.userFromApi = user;
//         });
//     }
// }

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent implements OnInit {
    currentUser: User;
    users = [];

    constructor(
        private authenticationService: AuthenticationService,
        private userService: UserService
    ) {
        this.currentUser = this.authenticationService.currentUserValue;
    }

    ngOnInit() {
        this.loadAllUsers();
    }

    deleteUser(id: number) {
            this.userService.deleteUser(id)
            .pipe(first())
            .subscribe(() => this.loadAllUsers());
    }

    private loadAllUsers() {
        this.userService.getAll()
            .pipe(first())
            .subscribe(users => this.users = users);
    }
}
