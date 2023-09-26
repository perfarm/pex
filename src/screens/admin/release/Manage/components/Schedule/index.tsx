import { FC, useState } from 'react';
import { Table as OriginalTable } from 'rsuite';

import { CSSProperties } from '@stitches/react';
import useDidMount from 'beautiful-react-hooks/useDidMount';
import { RequestError } from '~/commons/api/RequestError';
import { fetchSchedule } from '~/commons/api/fetchSchedule';
import { updateScheduleStatus } from '~/commons/api/updateScheduleStatus';
import { Schedule as ScheduleDefinition, Status, translate } from '~/commons/firebase/schedules/types';
import { Card } from '~/components/Card';
import { toast } from '~/components/Toaster';
import { Typography } from '~/components/Typography';
import { SwitchContainer, TitleContainer } from '~/screens/admin/release/Manage/style';
import { Table } from './style';

import * as ToggleGroup from '@radix-ui/react-toggle-group';

const { Column, HeaderCell, Cell } = OriginalTable;

const compactStyle: CSSProperties = {
  alignItems: 'center',
  display: 'flex',
  padding: '10px 20px',
};

const activeStatus: CSSProperties = {
  background: '#4BB066',
  color: '#FFF',
};

const rowKey = 'id';

export const Schedule: FC = () => {
  const [loading, setLoading] = useState(false);
  const [schedules, setSchedules] = useState<ScheduleDefinition[]>([]);

  const fetchData = async () => {
    try {
      const resp = await fetchSchedule();
      setSchedules([...resp]);
    } catch (e) {
      toast.error((e as RequestError).data.data);
    } finally {
      setLoading(false);
    }
  };

  useDidMount(async () => {
    setLoading(true);
    await fetchData();
  });

  const onChangeStatus = async (id: string, status: Status) => {
    setLoading(true);

    try {
      await updateScheduleStatus(id, status);
      await fetchData();

      toast.success('Cronograma atualizado');
    } catch (e) {
      toast.error((e as RequestError).data.data);
    } finally {
      setLoading(false);

      const schedule = schedules.find((s) => s.id === id);

      if (schedule && schedule.alert && status === 'IN_PROGRESS') {
        alert(schedule.alert);
      }
    }
  };

  return (
    <Card style={{ padding: 30 }}>
      <TitleContainer>
        <Typography variant="$headline4">Atualizar Cronograma</Typography>
      </TitleContainer>

      <SwitchContainer>
        <Table<ScheduleDefinition, any>
          data={schedules}
          loading={loading}
          height={300}
          style={{ marginTop: 20, width: '100%' }}
          headerHeight={30}
          rowHeight={60}
          rowKey={rowKey}
          rowClassName={(schedule: ScheduleDefinition) => {
            if (!schedule) return '';
            if (schedule.status === 'FINALIZED') return 'finalizaed-row';
            if (schedule.status === 'PENDING') return 'pending-row';

            return 'in-progress-row';
          }}
        >
          <Column fixed width={190}>
            <HeaderCell style={compactStyle}>
              <Typography color="$gray" variant="$body6" weight="$bold">
                Aviso
              </Typography>
            </HeaderCell>

            <Cell style={compactStyle}>
              {(rowData, rowIndex) => (
                <Typography color="$gray" variant="$body6">
                  {rowData.alert}
                </Typography>
              )}
            </Cell>
          </Column>

          <Column fixed width={90}>
            <HeaderCell style={compactStyle}>
              <Typography color="$gray" variant="$body6" weight="$bold">
                Horário
              </Typography>
            </HeaderCell>

            <Cell style={compactStyle}>
              {(rowData, rowIndex) => (
                <Typography color="$gray" variant="$body6">
                  {rowData.time}
                </Typography>
              )}
            </Cell>
          </Column>

          <Column width={200}>
            <HeaderCell style={compactStyle}>
              <Typography color="$gray" variant="$body6" weight="$bold">
                Título
              </Typography>
            </HeaderCell>
            <Cell style={compactStyle}>
              {(rowData, rowIndex) => (
                <Typography color="$gray" variant="$body6">
                  {rowData.title}
                </Typography>
              )}
            </Cell>
          </Column>

          <Column width={350}>
            <HeaderCell style={compactStyle}>
              <Typography color="$gray" variant="$body6" weight="$bold">
                Status
              </Typography>
            </HeaderCell>
            <Cell style={compactStyle}>
              {(rowData, rowIndex) => (
                <ToggleGroup.Root type="single" defaultValue={rowData.status}>
                  <ToggleGroup.Item
                    style={rowData.status === 'FINALIZED' && activeStatus}
                    onClick={() => onChangeStatus(rowData.id, 'FINALIZED')}
                    value="left"
                  >
                    {translate('FINALIZED')}
                  </ToggleGroup.Item>
                  <ToggleGroup.Item
                    style={rowData.status === 'IN_PROGRESS' && activeStatus}
                    onClick={() => onChangeStatus(rowData.id, 'IN_PROGRESS')}
                    value="center"
                  >
                    {translate('IN_PROGRESS')}
                  </ToggleGroup.Item>
                  <ToggleGroup.Item
                    style={rowData.status === 'PENDING' && activeStatus}
                    onClick={() => onChangeStatus(rowData.id, 'PENDING')}
                    value="right"
                  >
                    {translate('PENDING')}
                  </ToggleGroup.Item>
                </ToggleGroup.Root>
              )}
            </Cell>
          </Column>

          <Column width={200}>
            <HeaderCell style={compactStyle}>
              <Typography color="$gray" variant="$body6" weight="$bold">
                Palestrante
              </Typography>
            </HeaderCell>
            <Cell style={compactStyle}>
              {(rowData, rowIndex) => (
                <Typography color="$gray" variant="$body6">
                  {rowData.speaker}
                </Typography>
              )}
            </Cell>
          </Column>

          <Column width={300}>
            <HeaderCell style={compactStyle}>
              <Typography color="$gray" variant="$body6" weight="$bold">
                Descrição
              </Typography>
            </HeaderCell>
            <Cell style={compactStyle}>
              {(rowData, rowIndex) => (
                <Typography color="$gray" variant="$body6">
                  {rowData.description}
                </Typography>
              )}
            </Cell>
          </Column>
        </Table>
      </SwitchContainer>
    </Card>
  );
};
