import { HeaderOnly } from '~/layouts';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import configs from '~/configs';
import Discover from '~/pages/Discover';
import Live from '~/pages/Live';

const publicRoutes = [
  { path: configs.routes.home, component: Home },
  { path: configs.routes.profile, component: Profile },
  { path: configs.routes.following, component: Following },
  { path: configs.routes.live, component: Live },
  { path: configs.routes.upload, component: Upload, layout: HeaderOnly },
  { path: configs.routes.discover, component: Discover, layout: HeaderOnly },
  { path: configs.routes.search, component: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
