import React from 'react';
import Table from 'examples/Tables/Table';

// Define columns for the table
const columns = [
  { name: 'date', align: 'left', width: '5%' },
  { name: 'WBC (3.98 - 10.04) 10⁹/L', align: 'left', width: '5%' },
  { name: 'RBC (3.93 - 5.22) 10¹²/L', align: 'left', width: '5%' },
  { name: 'HGB (112 - 157) g/L', align: 'left', width: '5%' },
  { name: 'HCT (34.1 - 44.9) %', align: 'left', width: '5%' },
  { name: 'MCV (79.4 - 94.8) fL', align: 'left', width: '5%' },
  { name: 'MCH (25.6 - 32.2) pg', align: 'left', width: '5%' },
  { name: 'MCHC (32.2 - 35.5) g/dL', align: 'left', width: '5%' },
  { name: 'PLT (182 - 369) 10⁹/L', align: 'left', width: '5%' },
  { name: 'RDW-SD (36.4 - 46.3) fL', align: 'left', width: '5%' },
  { name: 'RDW-CV (11.7 - 14.4) %', align: 'left', width: '5%' },
  { name: 'PDW* (9 - 17) fL', align: 'left', width: '5%' },
  { name: 'MPV (9.4 - 12.3) fL', align: 'left', width: '5%' },
  { name: 'P-LCR* (13 - 43) %', align: 'left', width: '5%' },
  { name: 'PCT* (0.17 - 0.35) %', align: 'left', width: '5%' },
  { name: 'Neutrophil# (1.56 - 6.13) 10⁹/L', align: 'left', width: '5%' },
  { name: 'Lymphocyte# (1.18 - 3.74) 10⁹/L', align: 'left', width: '5%' },
  { name: 'Monocyte# (0.24 - 0.36) 10⁹/L', align: 'left', width: '5%' },
  { name: 'Eosinophil# (0.04 - 0.36) 10⁹/L', align: 'left', width: '5%' },
  { name: 'Basophil# (0.01 - 0.08) 10⁹/L', align: 'left', width: '5%' },
  { name: 'Immature Granulocyte# (0 - 0.06) 10⁹/L', align: 'left', width: '5%' },
  { name: 'Neutrophil % (34 - 71.1) %', align: 'left', width: '5%' },
  { name: 'Lymphocyte % (19.3 - 51.7) %', align: 'left', width: '5%' },
  { name: 'Monocyte % (4.7 - 12.5) %', align: 'left', width: '5%' },
  { name: 'Eosinophil % (0.7 - 5.8) %', align: 'left', width: '5%' },
  { name: 'Basophil % (0.1 - 1.2) %', align: 'left', width: '5%' },
  { name: 'Immature granulocyte % (0 - 0.6) %', align: 'left', width: '5%' },
  { name: 'notes', align: 'left', width: '5%' },
  { name: 'hospital', align: 'left', width: '5%' },
];

// Define sample rows
const rows = [
  {
    date: '2024-03-20',
    'WBC (3.98 - 10.04) 10⁹/L': '5.2',
    'RBC (3.93 - 5.22) 10¹²/L': '4.5',
    'HGB (112 - 157) g/L': '130',
    'HCT (34.1 - 44.9) %': '40',
    'MCV (79.4 - 94.8) fL': '85',
    'MCH (25.6 - 32.2) pg': '28',
    'MCHC (32.2 - 35.5) g/dL': '33',
    'PLT (182 - 369) 10⁹/L': '250',
    'RDW-SD (36.4 - 46.3) fL': '40',
    'RDW-CV (11.7 - 14.4) %': '13',
    'PDW* (9 - 17) fL': '12',
    'MPV (9.4 - 12.3) fL': '10',
    'P-LCR* (13 - 43) %': '25',
    'PCT* (0.17 - 0.35) %': '0.25',
    'Neutrophil# (1.56 - 6.13) 10⁹/L': '3.0',
    'Lymphocyte# (1.18 - 3.74) 10⁹/L': '2.0',
    'Monocyte# (0.24 - 0.36) 10⁹/L': '0.3',
    'Eosinophil# (0.04 - 0.36) 10⁹/L': '0.2',
    'Basophil# (0.01 - 0.08) 10⁹/L': '0.05',
    'Immature Granulocyte# (0 - 0.06) 10⁹/L': '0.03',
    'Neutrophil % (34 - 71.1) %': '55',
    'Lymphocyte % (19.3 - 51.7) %': '35',
    'Monocyte % (4.7 - 12.5) %': '8',
    'Eosinophil % (0.7 - 5.8) %': '3',
    'Basophil % (0.1 - 1.2) %': '0.5',
    'Immature granulocyte % (0 - 0.6) %': '0.3',
    notes: 'Normal results',
    hospital: 'Hospital A',
    hasBorder: true,
  },
];

function HematologyTable() {
  return (
    <div>
      <Table columns={columns} rows={rows} />
    </div>
  );
}

export default HematologyTable;