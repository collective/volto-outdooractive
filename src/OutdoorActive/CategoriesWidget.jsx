/**
 * CategoriesWidget component.
 *
 * Widget for the `categories` field of the `outdoorActive` block: a multiselect
 * of the Outdoor Active project categories, reorderable by drag and drop.
 *
 * Up to 1.0.5 this component was a fork of Volto 16's ArrayWidget (same
 * arrayMove/normalizeArrayValue/normalizeChoices, same mapStateToProps, same
 * react-select rendering) with a single addition: fetching the Outdoor Active
 * category tree to use as the field choices. The fork never received the
 * migration made upstream: since Volto 17 the core moved its sortable
 * multiselect from react-sortable-hoc to @dnd-kit, and so did the
 * SortableMultiValue/SortableMultiValueLabel components of Widgets/SelectStyling
 * that this widget imports.
 *
 * On Volto >= 17 the widget therefore crashed with "can't access property
 * 'load', LoadableLibrary is undefined", the `reactSortableHOC` lazy lib no
 * longer being registered by the core. Supplying react-sortable-hoc again would
 * not have been enough: the core's SortableMultiValue now calls @dnd-kit's
 * useSortable(), which finds no DndContext/SortableContext inside
 * react-sortable-hoc's SortableContainer, so drag reordering would silently stop
 * working.
 *
 * So rather than realigning the fork, we delegate to the core ArrayWidget, which
 * already does exactly the same job and is maintained upstream. Only what is
 * specific to Outdoor Active is kept here: fetching the project category tree
 * and passing it as `choices`. Everything else - handling a Plone vocabulary
 * when the schema declares one, normalizing values and choices, serializing back
 * - comes from the core, and is the very logic this file used to duplicate.
 *
 * @module components/manage/Widgets/CategoriesWidget
 */

import React, { useEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import ArrayWidget from '@plone/volto/components/manage/Widgets/ArrayWidget';
import config from '@plone/volto/registry';

const CategoriesWidget = (props) => {
  const intl = useIntl();
  const [choices, setChoices] = useState(props.items?.choices || []);

  useEffect(() => {
    // The project category tree, pruned to the categories that currently have
    // published content. Other cuts available on the same API:
    //   .../category/tree             the whole tree
    //   .../category/tree/tour        tour categories only
    //   .../category/tree/poi         poi categories only
    //   .../category/tree/tour/pruned, .../category/tree/poi/pruned
    const outdooractiveConfig = config.settings['volto-outdooractive'];
    const api =
      `https://www.outdooractive.com/api/project/${outdooractiveConfig.projectId}` +
      `/category/tree/pruned?key=${outdooractiveConfig.apiKey}&lang=${intl.locale}`;

    let ignore = false;
    fetch(api, { headers: { accept: 'application/json' } })
      .then((response) => response.json())
      .then((data) => {
        if (ignore) return;
        // Top level categories only, as before: nested ones live in
        // `category[i].category` and have never been offered as choices.
        setChoices(
          (data.category || []).map((item) => ({
            value: item.id,
            label: item.name,
          })),
        );
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error(error);
      });

    return () => {
      ignore = true;
    };
  }, [intl.locale]);

  // `items.choices` is the load bearing one: the ArrayWidget mapStateToProps
  // picks those choices up and skips requesting a vocabulary.
  return (
    <ArrayWidget
      {...props}
      items={{ ...props.items, choices }}
      choices={choices}
    />
  );
};

export const CategoriesWidgetComponent = CategoriesWidget;

export default CategoriesWidget;
