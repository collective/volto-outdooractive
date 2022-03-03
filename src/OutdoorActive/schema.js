import { defineMessages } from 'react-intl';

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
        ["gallery", "gallery"],
        ["map", "map"],
        ["list", "list"],
        ["listMap", "listMap"],
      ],
      default: "gallery",
      title: intl.formatMessage(messages.mode),
    },
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

    // fixed: {
    //   type: 'boolean',
    //   title: intl.formatMessage(messages.fixed),
    // },
    // compact: {
    //   type: 'boolean',
    //   title: intl.formatMessage(messages.compact),
    // },
    // basic: {
    //   type: 'boolean',
    //   title: intl.formatMessage(messages.basic),
    // },
    // celled: {
    //   type: 'boolean',
    //   title: intl.formatMessage(messages.celled),
    // },
    // inverted: {
    //   type: 'boolean',
    //   title: intl.formatMessage(messages.inverted),
    // },
    // striped: {
    //   type: 'boolean',
    //   title: intl.formatMessage(messages.striped),
    // },
  },

  required: [],
});

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
//   fixed: {
//     id: 'Fixed width table cells',
//     defaultMessage: 'Fixed width table cells',
//   },
//   compact: {
//     id: 'Make the table compact',
//     defaultMessage: 'Make the table compact',
//   },
//   basic: {
//     id: 'Reduce complexity',
//     defaultMessage: 'Reduce complexity',
//   },
//   celled: {
//     id: 'Divide each row into separate cells',
//     defaultMessage: 'Divide each row into separate cells',
//   },
//   inverted: {
//     id: 'Table color inverted',
//     defaultMessage: 'Table color inverted',
//   },
//   striped: {
//     id: 'Stripe alternate rows with color',
//     defaultMessage: 'Stripe alternate rows with color',
//   },
  mapFieldset: {
    id: 'Map',
    defaultMessage: 'Map',
  },
  defaultFieldset: {
    id: 'Default',
    defaultMessage: 'Default',
  },
//   dataFile: {
//     id: 'Data file',
//     defaultMessage: 'Data file',
//   },
});