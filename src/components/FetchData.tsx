
import { Client } from 'contensis-delivery-api';
import CecTable from './CecTable';


const client = Client.create({
  rootUrl: `https://cms-${process.env.ALIAS}.cloud.contensis.com`,
  accessToken: process.env.ACCESS_TOKEN,
  projectId: process.env.PROJECT,
});


interface TableData {
  caption: string;
  contentType: { id: string }
};


async function FetchData(tableData: TableData) {
  const { caption } = tableData;
  const ct = tableData.contentType.id;

  const { fields } = await client.contentTypes.get(ct);
  const { items } = await client.entries
    .list({
      contentTypeId: ct,
    });
  return (
    <div className="table-wrapper">
      <CecTable caption={caption} fields={fields} items={items} />
    </div>
  );
}

export default FetchData;
