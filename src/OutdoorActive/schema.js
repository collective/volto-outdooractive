import { defineMessages } from 'react-intl';

export const OutdoorActiveSchema = ({ intl }) => ({
  title: 'OutdoorActive',

  fieldsets: [
    {
      id: 'default',
      title: intl.formatMessage(messages.defaultFieldset),
      fields: ['mode', 'zoom', 'categories'],
    },
    // {
    //   id: 'style',
    //   title: intl.formatMessage(messages.styling),
    //   fields: ['fixed', 'celled', 'striped', 'compact', 'basic', 'inverted'],
    // },
  ],

  properties: {
    // frontendtype: {
    //     type: 'string',
    //     title: intl.formatMessage(messages.frontendtype),
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
    // <category id="8982342" name="Escursionismo" mapOverlays="hiking">
    // <category id="8982347" name="In bici" mapOverlays="cycling">
    // http://www.outdooractive.com/api/project/api-dev-oa/category/tree?key=yourtest-outdoora-ctiveapi
    categories: {
      type: 'array',
      isMulti: true,
      // TODO usare un vocabolario server side o poplarlo client side ?
      choices: [
        ['8982342', "Escursionismo"],
        ['8982347', "In bici"],
      ],
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
//   styling: {
//     id: 'Styling',
//     defaultMessage: 'Styling',
//   },
  defaultFieldset: {
    id: 'Default',
    defaultMessage: 'Default',
  },
//   dataFile: {
//     id: 'Data file',
//     defaultMessage: 'Data file',
//   },
});