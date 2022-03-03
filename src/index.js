import { OutdoorActiveEdit, OutdoorActiveView } from './OutdoorActive';
import tableSVG from '@plone/volto/icons/table.svg';

export default (config) => {
  config.settings.outdooractive = {
    // projectId: 'api-visitmodena',
    projectId: process.env.RAZZLE_OUTDOOURACTIVE_PROJECT_ID ?? 'api-dev-oa',
    // apiKey: 'IYTDPITW-EMWGM3CW-4OSSMDOT',
    apiKey: process.env.RAZZLE_OUTDOOURACTIVE_API_KEY ?? 'yourtest-outdoora-ctiveapi',
  };
  config.blocks.blocksConfig.outdoorActive = {
    id: 'outdoorActive',
    title: 'outdoorActive',
    icon: tableSVG,
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
  return config;
};
