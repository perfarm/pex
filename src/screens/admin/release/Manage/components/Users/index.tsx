import useDidMount from 'beautiful-react-hooks/useDidMount';
import { cpf } from 'cpf-cnpj-validator';
import jsFileDownload from 'js-file-download';
import { FC, useEffect, useState } from 'react';
import { Pagination, Table } from 'rsuite';

import { RequestError } from '~/commons/api/RequestError';
import { downloadCSV } from '~/commons/api/downloadCSV';
import { fetchUsers } from '~/commons/api/fetchUsers';
import { User } from '~/commons/firebase/users/types';

import { Card } from '~/components/Card';
import { toast } from '~/components/Toaster';
import { Typography } from '~/components/Typography';

import 'rsuite/dist/rsuite.min.css';

import { CSSProperties } from '@stitches/react';
import slugify from 'slugify';
import { Download as DownloadIcon } from '~/components/Icons/Download';
import { Select } from '~/components/Select';
import { Option } from '~/components/Select/type';
import { TextField } from '~/components/TextField';
import { Col } from '../../style';
import { DownloadButton, Header, IconLoading, RefreshButton, TitleContainer } from './style';

import CollaspedOutlineIcon from '@rsuite/icons/CollaspedOutline';
import ExpandOutlineIcon from '@rsuite/icons/ExpandOutline';
import { translate } from '~/commons/storage/release/types';
import { Button } from '~/components/Button';
import { Row } from '~/components/Grid';

const { Column, HeaderCell, Cell } = Table;

const compactStyle: CSSProperties = {
  alignItems: 'center',
  display: 'flex',
  padding: '4px 10px',
};

const fields: Option<keyof User>[] = [
  { label: 'Nome', value: 'name' },
  { label: 'E-mail', value: 'email' },
  { label: 'CPF', value: 'cpf' },
  { label: 'Telefone', value: 'phone' },
  { label: 'Máquina', value: 'machine' },
  { label: 'Produção', value: 'production' },
  { label: 'Insumo', value: 'productionInput' },
];

const slugfyConfig = { remove: /\s/gi, lower: true };
const rowKey = 'id';

const renderRowExpanded = (rowData: any) => (
  <div style={{ padding: '0 30px' }}>
    <Typography color="$gray" variant="$body6">
      <Typography tag="span" weight="$bold">
        {translate('REGISTER')}:&nbsp;
      </Typography>
      {(rowData?.feature['REGISTER'] as boolean) ? 'true' : 'false'}
    </Typography>
    <Typography color="$gray" variant="$body6">
      <Typography tag="span" weight="$bold">
        {translate('SELECT_PRODUCTION')}:&nbsp;
      </Typography>
      {(rowData?.feature['SELECT_PRODUCTION'] as boolean) ? 'true' : 'false'}
    </Typography>
    <Typography color="$gray" variant="$body6">
      <Typography tag="span" weight="$bold">
        {translate('SELECT_PRODUCTION_INPUT')}:&nbsp;
      </Typography>
      {(rowData?.feature['SELECT_PRODUCTION_INPUT'] as boolean) ? 'true' : 'false'}
    </Typography>
    <Typography color="$gray" variant="$body6">
      <Typography tag="span" weight="$bold">
        {translate('SELCET_MACHINE')}:&nbsp;
      </Typography>
      {(rowData?.feature['SELCET_MACHINE'] as boolean) ? 'true' : 'false'}
    </Typography>
    <Typography color="$gray" variant="$body6">
      <Typography tag="span" weight="$bold">
        {translate('FINISH')}:&nbsp;
      </Typography>
      {(rowData?.feature['FINISH'] as boolean) ? 'true' : 'false'}
    </Typography>
  </div>
);

const ExpandCell: FC<any> = ({ rowData, dataKey, expandedRowKeys, onChange, ...props }) => (
  <Cell {...props} style={{ ...compactStyle, padding: 5 }}>
    <Button color="white" onClick={() => onChange(rowData)}>
      {expandedRowKeys.some((key: any) => key === rowData[rowKey]) ? <CollaspedOutlineIcon /> : <ExpandOutlineIcon />}
    </Button>
    <Typography color="$gray" variant="$body6">
      {rowData.name}
    </Typography>
  </Cell>
);

export const Users: FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [tableData, setTableData] = useState<User[]>([]);
  const [fieldFilter, setFieldFilter] = useState<(typeof fields)[0]>(fields[0]);
  const [filterValue, setFilterValue] = useState('');
  const [expandedRowKeys, setExpandedRowKeys] = useState([]);

  const handleChangeLimit = (dataKey: any) => {
    setPage(1);
    setLimit(dataKey);
  };

  const handleExpanded = (rowData: any, dataKey: any) => {
    let open = false;
    const nextExpandedRowKeys = [];

    expandedRowKeys.forEach((key) => {
      if (key === rowData[rowKey]) open = true;
      else nextExpandedRowKeys.push(key);
    });

    if (!open) nextExpandedRowKeys.push(rowData[rowKey]);
    console.log('AQUI', nextExpandedRowKeys);

    setExpandedRowKeys(nextExpandedRowKeys);
  };

  const onFilter = (value: string) => {
    setPage(1);
    setFilterValue(value);

    return setTableData(
      users.filter((user) => {
        let userValue: string;

        if (fieldFilter.value === 'machine') userValue = user.machine?.name || '';
        else if (fieldFilter.value === 'production') userValue = user.production?.name || '';
        else if (fieldFilter.value === 'productionInput') userValue = user.productionInput?.name || '';
        else userValue = user[fieldFilter.value] as string;

        return slugify(userValue, slugfyConfig).includes(slugify(value, slugfyConfig));
      })
    );
  };

  const fetch = async () => {
    setLoading(true);
    setPage(1);
    setFilterValue('');
    setExpandedRowKeys([]);

    try {
      const data = await fetchUsers();

      setUsers(data);

      setTableData(
        data.filter((v, i) => {
          const start = 0;
          const end = start + limit;
          return i >= start && i < end;
        })
      );
    } catch (e) {
      toast.error((e as RequestError).data.data);
    } finally {
      setLoading(false);
    }
  };

  const exportCSV = async () => {
    setLoading(true);

    try {
      const data = await downloadCSV();
      jsFileDownload(data, 'users.csv', 'text/csv;charset=utf-8;');
    } catch (e) {
      toast.error((e as RequestError).data.data);
    } finally {
      setLoading(false);
    }
  };

  useDidMount(fetch);

  useEffect(() => {
    setTableData(
      users.filter((v, i) => {
        const start = limit * (page - 1);
        const end = start + limit;

        return i >= start && i < end;
      })
    );
  }, [limit, page, users]);

  return (
    <Card style={{ padding: 30 }}>
      <Header>
        <TitleContainer>
          <Typography variant="$headline4">Usuários cadastrados</Typography>
        </TitleContainer>

        <RefreshButton color="white" onClick={fetch}>
          <IconLoading loading={loading} />
        </RefreshButton>

        <DownloadButton color="white" onClick={exportCSV}>
          <DownloadIcon color="gray" />
        </DownloadButton>
      </Header>

      <Row>
        <Col>
          <Select
            name="select_field"
            onChange={(e) => {
              setFieldFilter(e);
              setFilterValue('');
            }}
            options={fields}
            value={fieldFilter}
          />
        </Col>
        <Col>
          <TextField
            name="search_name"
            onChange={(e) => onFilter(e.target.value)}
            size="small"
            placeholder="Texto para buscar"
            value={filterValue}
          />
        </Col>
      </Row>

      <Table
        data={tableData}
        expandedRowKeys={expandedRowKeys}
        renderRowExpanded={renderRowExpanded}
        loading={loading}
        height={300}
        style={{ marginTop: 20, width: '100%' }}
        headerHeight={30}
        rowHeight={30}
        rowKey={rowKey}
      >
        <Column fixed width={200}>
          <HeaderCell style={compactStyle}>
            <Typography color="$gray" variant="$body6" weight="$bold">
              Nome
            </Typography>
          </HeaderCell>
          <ExpandCell expandedRowKeys={expandedRowKeys} onChange={handleExpanded} />
        </Column>

        <Column>
          <HeaderCell style={compactStyle}>
            <Typography color="$gray" variant="$body6" weight="$bold">
              E-mail
            </Typography>
          </HeaderCell>
          <Cell style={compactStyle}>
            {(rowData, rowIndex) => (
              <Typography color="$gray" variant="$body6">
                <a href={`mailto:${rowData.email}`} target="_blank">
                  {rowData.email}
                </a>
              </Typography>
            )}
          </Cell>
        </Column>

        <Column>
          <HeaderCell style={compactStyle}>
            <Typography color="$gray" variant="$body6" weight="$bold">
              CPF
            </Typography>
          </HeaderCell>
          <Cell style={compactStyle}>
            {(rowData, rowIndex) => (
              <Typography color="$gray" variant="$body6">
                {cpf.format(rowData.cpf)}
              </Typography>
            )}
          </Cell>
        </Column>

        <Column>
          <HeaderCell style={compactStyle}>
            <Typography color="$gray" variant="$body6" weight="$bold">
              Telefone
            </Typography>
          </HeaderCell>
          <Cell style={compactStyle}>
            {(rowData, rowIndex) => (
              <Typography color="$gray" variant="$body6">
                {rowData.phone}
              </Typography>
            )}
          </Cell>
        </Column>

        <Column>
          <HeaderCell style={compactStyle}>
            <Typography color="$gray" variant="$body6" weight="$bold">
              Produção
            </Typography>
          </HeaderCell>
          <Cell style={compactStyle}>
            {(rowData, rowIndex) => (
              <Typography color="$gray" variant="$body6">
                {rowData.production?.name || '-'}
              </Typography>
            )}
          </Cell>
        </Column>

        <Column>
          <HeaderCell style={compactStyle}>
            <Typography color="$gray" variant="$body6" weight="$bold">
              Insumo
            </Typography>
          </HeaderCell>
          <Cell style={compactStyle}>
            {(rowData, rowIndex) => (
              <Typography color="$gray" variant="$body6">
                {rowData.productionInput?.name || '-'}
              </Typography>
            )}
          </Cell>
        </Column>

        <Column>
          <HeaderCell style={compactStyle}>
            <Typography color="$gray" variant="$body6" weight="$bold">
              Máquina
            </Typography>
          </HeaderCell>
          <Cell style={compactStyle}>
            {(rowData, rowIndex) => (
              <Typography color="$gray" variant="$body6">
                {rowData.machine?.name || '-'}
              </Typography>
            )}
          </Cell>
        </Column>
      </Table>

      <div style={{ paddingTop: 20 }}>
        <Pagination
          prev
          next
          first
          last
          ellipsis
          boundaryLinks
          maxButtons={2}
          size="xs"
          layout={['total', '-', 'pager']}
          total={users.length}
          limitOptions={[10, 30, 50]}
          limit={limit}
          activePage={page}
          onChangePage={setPage}
          onChangeLimit={handleChangeLimit}
        />
      </div>
    </Card>
  );
};
