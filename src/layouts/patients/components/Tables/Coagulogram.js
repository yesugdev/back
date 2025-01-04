import React from 'react';
import Table from 'examples/Tables/Table';

// Define columns for the table
const columns = [
  { name: 'date', align: 'left', width: '12.5%' },
  { name: 'PT (9 - 14) sec', align: 'left', width: '12.5%' },
  { name: 'INR (0.8 - 1.3)', align: 'left', width: '12.5%' },
  { name: 'aPTT (25 - 31.3) sec', align: 'left', width: '12.5%' },
  { name: 'TT (14 - 21) sec', align: 'left', width: '12.5%' },
  { name: 'Fibrinogen (2 - 4) g/L', align: 'left', width: '12.5%' },
  { name: 'notes', align: 'left', width: '12.5%' },
  { name: 'hospital', align: 'left', width: '12.5%' },
];

// Define sample rows
const rows = [
  {
    date: '2024-03-20',
    'PT (9 - 14) sec': '11',
    'INR (0.8 - 1.3)': '1.0',
    'aPTT (25 - 31.3) sec': '28',
    'TT (14 - 21) sec': '17',
    'Fibrinogen (2 - 4) g/L': '3.0',
    notes: 'Normal results',
    hospital: 'Hospital A',
    hasBorder: true,
  },
  {
    date: '2024-03-21',
    'PT (9 - 14) sec': '12',
    'INR (0.8 - 1.3)': '1.1',
    'aPTT (25 - 31.3) sec': '29',
    'TT (14 - 21) sec': '18',
    'Fibrinogen (2 - 4) g/L': '3.2',
    notes: 'Follow up required',
    hospital: 'Hospital B',
    hasBorder: true,
  },
];

function CoagulogramTable() {
  return (
    <div>
      <Table columns={columns} rows={rows} />
    </div>
  );
}

export default CoagulogramTable;