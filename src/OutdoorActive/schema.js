import { defineMessages } from 'react-intl';

const messages = defineMessages({
  frontendtype: {
    id: 'frontendtype',
    defaultMessage: 'Frontendtype',
  },
  mode: {
    id: 'mode',
    defaultMessage: 'Mode',
  },
  zoom: {
    id: 'zoom',
    defaultMessage: 'Zoom',
  },
  latitude: {
    id: 'latitude',
    defaultMessage: 'Latitude',
  },
  longitude: {
    id: 'longitude',
    defaultMessage: 'Longitude',
  },
  categories: {
    id: 'categories',
    defaultMessage: 'Categories',
  },
  mapFieldset: {
    id: 'Map',
    defaultMessage: 'Map',
  },
  defaultFieldset: {
    id: 'Default',
    defaultMessage: 'Default',
  },
});

export const OutdoorActiveSchema = ({ intl }) => ({
  title: 'OutdoorActive',

  fieldsets: [
    {
      id: 'default',
      title: intl.formatMessage(messages.defaultFieldset),
      fields: ['mode', 'categories'],
    },
    {
      id: 'map',
      title: intl.formatMessage(messages.mapFieldset),
      fields: ['zoom', 'latitude', 'longitude'],
    },
  ],

  properties: {
    // frontendtype: {
    //     type: 'string',
    //     title: intl.formatMessage(messages.frontendtype),
    // frontendtype:
    // “tour”, “hut”
    // “poi”, “hut”, “loging”
    // “offer”
    // “skiresort”
    // “story”
    // “condition”
    // },
    mode: {
      type: 'string',
      choices: [
        ['gallery', 'gallery'],
        ['map', 'map'],
        ['list', 'list'],
        ['listMap', 'listMap'],
      ],
      default: 'gallery',
      title: intl.formatMessage(messages.mode),
    },
    fitDataBounds: true,
    zoom: {
      type: 'integer',
      title: intl.formatMessage(messages.zoom),
    },
    latitude: {
      type: 'integer',
      title: intl.formatMessage(messages.latitude),
      // esiste il concweto di default qui  ?
      default: 44.6502,
    },
    longitude: {
      type: 'integer',
      title: intl.formatMessage(messages.longitude),
      default: 10.8867,
    },
    // <category id="8982342" name="Escursionismo" mapOverlays="hiking">
    // <category id="8982347" name="In bici" mapOverlays="cycling">
    // http://www.outdooractive.com/api/project/api-dev-oa/category/tree?key=yourtest-outdoora-ctiveapi
    categories: {
      type: 'array',
      widget: 'oacategories',
      isMulti: true,
      // getVocabulary: getCategories,
      // TODO usare un vocabolario server side o poplarlo client side ?
      // choices: [
      //   ['8982342', "Escursionismo"],
      //   ['8982347', "In bici"],
      // ],
      // choices: getCategories,
      title: intl.formatMessage(messages.categories),
    },
  },

  required: [],
});
