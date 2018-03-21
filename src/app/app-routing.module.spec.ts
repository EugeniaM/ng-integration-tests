import { routes } from './app-routing.module';
import { UsersComponent } from './users/users.component';

describe('app-routing', () => {
  it('should contain /users route', () => {
    expect(routes).toContain({ path: 'users', component: UsersComponent });
  });
});
