import { Fragment } from "react";
import {
  Datagrid,
  List,
  TextField,
  ReferenceArrayField,
  Show,
  SimpleShowLayout,
  SingleFieldList,
  ReferenceField,
  useRecordContext,
  useGetOne,
  Loading,
  BulkExportButton,
  BulkDeleteButton,
  ReferenceManyField,
  Create,
  SimpleForm,
  ReferenceInput,
  TextInput,
  required,
  useGetIdentity,
} from "react-admin";

const InvitationListBulkActions = () => (
  <Fragment>
    <BulkExportButton />
    <BulkDeleteButton />
  </Fragment>
);

export const InvitationList = () => (
  <List>
    <Datagrid rowClick="show" bulkActionButtons={<InvitationListBulkActions />}>
      <TextField label="ID" source="id" />
      <TextField label="User ID" source="user_id" />
      {/* Right now we can't look up other users, we don't have access */}
      {/*<ReferenceField*/}
      {/*  label="User"*/}
      {/*  source="user_id"*/}
      {/*  reference="users"*/}
      {/*  link="show"*/}
      {/*/>*/}
      <ReferenceField
        label="Organization"
        source="organization_id"
        reference="organizations"
        link="show"
      />
      <TextField label="Expires" source="expiry" />
    </Datagrid>
  </List>
);

export const InvitationShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField label="ID" source="id" />
      <TextField label="User ID" source="user_id" />
      {/* Right now we can't look up other users, we don't have access */}
      {/*<ReferenceField*/}
      {/*  label="User"*/}
      {/*  source="user_id"*/}
      {/*  reference="users"*/}
      {/*  link="show"*/}
      {/*/>*/}
      <ReferenceField
        label="Organization"
        source="organization_id"
        reference="organizations"
        link="show"
      />
      <TextField label="Expires" source="expiry" />
    </SimpleShowLayout>
  </Show>
);

export const InvitationCreate = () => {
  const { identity, isLoading, error } = useGetIdentity();
  if (isLoading || error) {
    return <div />;
  }
  return (
    <Create>
      <SimpleForm>
        <TextInput
          label="User Name"
          name="user_name"
          source="user_name"
          validate={[required()]}
          fullWidth
        />
        <ReferenceInput
          label="User Name"
          name="organization_id"
          source="organization_id"
          reference="organizations"
          filter={{ owner_id: identity.id }}
        />
      </SimpleForm>
    </Create>
  );
};
