import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: `home`,
    loadChildren: () =>
      import('./@pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'tags',
    loadChildren: () =>
      import('./@pages/tags/tags.module').then((m) => m.TagsModule),
  },
  {
    path: 'playlists',
    loadChildren: () =>
      import('./@pages/playlists/playlists.module').then(
        (m) => m.PlaylistsModule
      ),
  },
  { path: ``, redirectTo: `home`, pathMatch: `full` },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
