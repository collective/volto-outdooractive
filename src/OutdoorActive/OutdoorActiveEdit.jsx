import React from 'react';
import OutdoorActiveView from './OutdoorActiveView';
import { Segment, Form } from 'semantic-ui-react';
import { SidebarPortal, Field, Icon } from '@plone/volto/components';
import { InlineForm } from '@plone/volto/components';
import { OutdoorActiveSchema } from './schema';

const OutdoorActiveEdit = (props) => {
  const { selected, onChangeBlock, block, data } = props;
  const schema = OutdoorActiveSchema(props);

  return (
    <div>
      <SidebarPortal selected={selected}>
        <Segment.Group raised>
          <InlineForm
            schema={schema}
            title={schema.title}
            onChangeField={(id, value) => {
              onChangeBlock(block, {
                ...data,
                [id]: value,
              });
            }}
            formData={data}
          />
        </Segment.Group>
      </SidebarPortal>

      <div>
        <OutdoorActiveView {...props} />
      </div>
    </div>
  );
};

export default OutdoorActiveEdit;
