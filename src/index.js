import { OutdoorActiveEdit, OutdoorActiveView } from './OutdoorActive';
import tableSVG from '@plone/volto/icons/table.svg';
import oaSVG from './icons/oa.svg';
import CategoriesWidget from './OutdoorActive/CategoriesWidget';

export default (config) => {
  config.settings['volto-outdooractive'] = {
    projectId: process.env.RAZZLE_OUTDOORACTIVE_PROJECT_ID ?? 'api-dev-oa',
    apiKey:
      process.env.RAZZLE_OUTDOORACTIVE_API_KEY ?? 'yourtest-outdoora-ctiveapi',
  };
  config.blocks.blocksConfig.outdoorActive = {
    id: 'outdoorActive',
    title: 'Outdoor Active',
    icon: oaSVG,
    group: 'common',
    view: OutdoorActiveView,
    edit: OutdoorActiveEdit,
    restricted: false,
    mostUsed: false,
    sidebarTab: 1,
    security: {
      addPermission: [],
      view: [],
    },
  };
  config.widgets.widget.oacategories = CategoriesWidget;
  return config;
};
