import React from 'react';
import Table from 'examples/Tables/Table';

// Define columns for the table
const columns = [
  { name: 'date', align: 'left', width: '25%' },
  { name: 'Vitamin D (30 - 100) ng/ml', align: 'left', width: '25%' },
  { name: 'notes', align: 'left', width: '25%' },
  { name: 'hospital', align: 'left', width: '25%' },
];

// Define sample rows
const rows = [
  {
    date: '2024-03-20',
    'Vitamin D (30 - 100) ng/ml': '50',
    notes: 'Normal levels',
    hospital: 'Hospital A',
    hasBorder: true,
  },
  {
    date: '2024-03-21',
    'Vitamin D (30 - 100) ng/ml': '25',
    notes: 'Deficiency noted, recommend supplementation',
    hospital: 'Hospital B',
    hasBorder: true,
  },
];

function VitaminD3Table() {
  return (
    <div>
      <Table columns={columns} rows={rows} />
    </div>
  );
}

export default VitaminD3Table;