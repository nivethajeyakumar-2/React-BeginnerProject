import * as React from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import UndoOutlinedIcon from '@mui/icons-material/UndoOutlined';
import { BarChart } from '@mui/x-charts/BarChart';

const barChartsParams = {
  series: [
    {
      id: 'series-1',
      data: [3, 4, 1, 6, 5],
      label: 'A',
      stack: 'total',
      highlightScope: {
        highlight: 'item', 
      },
       color: '#1f2937',
    },
    {
      id: 'series-2',
      data: [4, 3, 1, 5, 8],
      label: 'B',
      stack: 'total',
      highlightScope: {
        highlight: 'item', 
      },
      color: '#1976d2',
    },
    {
      id: 'series-3',
      data: [4, 2, 5, 4, 1],
      label: 'C',
      highlightScope: {
        highlight: 'item',
      },
       color: '#4caf50', 
    },
  ],
  xAxis: [{ data: ['0', '3', '6', '9', '12'], id: 'axis1' }],
  height: 400,
};

export default function Chart() {
  const [itemData, setItemData] = React.useState();
  const [axisData, setAxisData] = React.useState();

  return (
    <Stack
      direction={{ xs: 'column', md: 'row' }}
      spacing={{ xs: 0, md: 4 }}
      sx={{ width: '100%' }}
    >
      <Box sx={{ flexGrow: 1 }}>
        <BarChart
          {...barChartsParams}
          onItemClick={(event, d) => setItemData(d)}
          onAxisClick={(event, d) => setAxisData(d)}
        />
      </Box>

      <Stack direction="column" sx={{ width: { xs: '100%', md: '40%' } }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
        </Box>

       
      </Stack>
    </Stack>
  );
}
