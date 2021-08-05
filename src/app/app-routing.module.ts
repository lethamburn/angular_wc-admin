import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/guard/auth.guard';

const routes: Routes = [
  {
    path: `home`,
    loadChildren: () =>
      import('./@pages/home/home.module').then((m) => m.HomeModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'tags',
    loadChildren: () =>
      import('./@pages/tags/tags.module').then((m) => m.TagsModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'playlists',
    loadChildren: () =>
      import('./@pages/playlists/playlists.module').then(
        (m) => m.PlaylistsModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'comments',
    loadChildren: () =>
      import('./@pages/comments/comments.module').then((m) => m.CommentsModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'users',
    loadChildren: () =>
      import('./@pages/users/users.module').then((m) => m.UsersModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./@pages/login/login.module').then((m) => m.LoginModule),
  },
  { path: ``, redirectTo: `home`, pathMatch: `full` },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
