"use client"
import React, { useState } from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
  Menu,
  MenuItem,
  TextField,
} from '@mui/material';
import PopupState, { bindMenu, bindTrigger } from 'material-ui-popup-state';
import ReactDatePicker from 'react-datepicker';

// Define the structure of the data
interface Data {
  id: number;
  date: string;
  warehouse: string;
  reference: string;
  invoice: string;
  unit: string;
  status: string;
  amount: string;
  email: string;
}

// Sample data
const rows: Data[] = [
  {
    id: 1,
    date: '01 Jan 2024',
    warehouse: 'Warehouse 1',
    reference: 'S-920873850390',
    invoice: '58756689',
    unit: 'Cash',
    status: 'Completed',
    amount: '$630.00',
    email: 'Joseph@example.com',
  },
  {
    id: 2,
    date: '01 Jan 2024',
    warehouse: 'Warehouse 2',
    reference: 'S-920873855869',
    invoice: '58756689',
    unit: 'Cash',
    status: 'Completed',
    amount: '$520.00',
    email: 'paul@example.com',
  }, {
    id: 3,
    date: '01 Jan 2024',
    warehouse: 'Warehouse 3',
    reference: 'S-920873855868',
    invoice: '58756689',
    unit: 'Cash',
    status: 'Completed',
    amount: '$310.00',
    email: 'matthew@example.com',
  },
  {
    id: 4,
    date: '01 Jan 2024',
    warehouse: 'Warehouse 4',
    reference: 'S-920873855867',
    invoice: '58756689',
    unit: 'Cash',
    status: 'Partial',
    amount: '$160.00',
    email: 'glenn@example.com',
  },
  {
    id: 5,
    date: '01 Jan 2024',
    warehouse: 'Warehouse 5',
    reference: 'S-920873855866',
    invoice: '58756689',
    unit: 'Cash',
    status: 'Partial',
    amount: '$460.00',
    email: 'crow@example.com',
  },
  {
    id: 6,
    date: '01 Jan 2024',
    warehouse: 'Warehouse 6',
    reference: 'S-920873855865',
    invoice: '58756689',
    unit: 'Bank',
    status: 'Completed',
    amount: '$360.00',
    email: 'clark@example.com',
  },
  {
    id: 7,
    date: '01 Jan 2024',
    warehouse: 'Warehouse 7',
    reference: 'S-920873855864',
    invoice: '58756689',
    unit: 'Bank',
    status: 'Completed',
    amount: '$420.00',
    email: 'jennifer@example.com',
  },
  {
    id: 8,
    date: '01 Jan 2024',
    warehouse: 'Warehouse 8',
    reference: 'S-920873855863',
    invoice: '58756689',
    unit: 'Bank',
    status: 'Completed',
    amount: '$290.00',
    email: 'boser@example.com',
  },
  {
    id: 9,
    date: '01 Jan 2024',
    warehouse: 'Warehouse 9',
    reference: 'S-920873855862',
    invoice: '58756689',
    unit: 'Cash',
    status: 'Completed',
    amount: '$250.00',
    email: 'maria@example.com',
  },
  {
    id: 10,
    date: '01 Jan 2024',
    warehouse: 'Warehouse 10',
    reference: 'S-920873855861',
    invoice: '58756689',
    unit: 'Cheque',
    status: 'Completed',
    amount: '$472.00',
    email: 'maria@example.com',
  },
  {
    id: 11,
    date: '01 Jan 2024',
    warehouse: 'Warehouse 11',
    reference: 'S-920873855860',
    invoice: '58756689',
    unit: '---',
    status: 'Due',
    amount: '$302.00',
    email: 'maria@example.com',
  },
  {
    id: 12,
    date: '01 Jan 2024',
    warehouse: 'Warehouse 12',
    reference: 'S-920873855859',
    invoice: '58756689',
    unit: '---',
    status: 'Due',
    amount: '$588.00',
    email: 'maria@example.com',
  },
  {
    id: 13,
    date: '01 Jan 2024',
    warehouse: 'Warehouse 13',
    reference: 'S-920873855858',
    invoice: '58756689',
    unit: 'Bank',
    status: 'Completed',
    amount: '$482.00',
    email: 'maria@example.com',
  },
  {
    id: 14,
    date: '01 Jan 2024',
    warehouse: 'Warehouse 14',
    reference: 'S-920873855888',
    invoice: '58756689',
    unit: 'Bank',
    status: 'Completed',
    amount: '$500.00',
    email: 'boser@example.com',
  },
  {
    id: 15,
    date: '01 Jan 2024',
    warehouse: 'Warehouse 15',
    reference: 'S-920873855822',
    invoice: '58756689',
    unit: 'Cash',
    status: 'Completed',
    amount: '$480.00',
    email: 'crow@example.com',
  },
];

const PaymentReport = () => {

  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(new Date());

  const dummyData = (e: any) => {
    e.preventDefault();
  };

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(25);
  const [selected, setSelected] = useState<number[]>([]);
  const [order, setOrder] = useState<'asc' | 'desc'>('asc');
  const [orderBy, setOrderBy] = useState<keyof Data>('id');

  // Handlers for pagination
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 25));
    setPage(0);
  };

  // Handlers for sorting
  const handleRequestSort = (property: keyof Data) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  // Handler for selecting/deselecting all items
  const handleSelectAllClick = (checked: boolean) => {
    if (checked) {
      setSelected(rows.map((row) => row.id));
    } else {
      setSelected([]);
    }
  };

  // Handler for selecting/deselecting a single item
  const handleClick = (id: number) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected: number[] = [];

    if (selectedIndex === -1) {
      newSelected = [...selected, id];
    } else if (selectedIndex === 0) {
      newSelected = selected.slice(1);
    } else if (selectedIndex === selected.length - 1) {
      newSelected = selected.slice(0, -1);
    } else if (selectedIndex > 0) {
      newSelected = [
        ...selected.slice(0, selectedIndex),
        ...selected.slice(selectedIndex + 1),
      ];
    }

    setSelected(newSelected);
  };

  // Check if a particular item is selected
  const isSelected = (id: number) => selected.indexOf(id) !== -1;

  // Function to sort data
  const sortedRows = rows.slice().sort((a, b) => {
    const isAsc = order === 'asc';
    const aValue = (a as any)[orderBy];
    const bValue = (b as any)[orderBy];

    if (aValue < bValue) {
      return isAsc ? -1 : 1;
    }
    if (aValue > bValue) {
      return isAsc ? 1 : -1;
    }
    return 0;
  });

  return (

    <>
      <div className="inventual-content-area px-4 sm:px-7">
        <div className="inventual-report-area bg-white p-5 sm:p-7 custom-shadow rounded-8 mt-7">
          <div className="flex flex-col xl:flex-row xl:items-end w-full gap-7 mb-7">
            <div className="grid grid-cols-12 gap-y-7 sm:gap-7 w-full">
              <div className="col-span-12 md:col-span-6 xl:col-span-3">
                <div className="inventual-form-field">
                  <h5>Start Date</h5>
                  <div className="inventual-input-field-style">
                    <ReactDatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      showYearDropdown
                      showMonthDropdown
                      useShortMonthInDropdown
                      showPopperArrow={false}
                      peekNextMonth
                      dropdownMode="select"
                      isClearable
                      placeholderText="MM/DD/YYYY"
                      className="w-full"
                    />
                  </div>
                </div>
              </div>
              <div className="col-span-12 md:col-span-6 xl:col-span-3">
                <div className="inventual-form-field">
                  <h5>End Date</h5>
                  <div className="inventual-input-field-style">
                    <ReactDatePicker
                      selected={endDate}
                      onChange={(date) => setEndDate(date)}
                      showYearDropdown
                      showMonthDropdown
                      useShortMonthInDropdown
                      showPopperArrow={false}
                      peekNextMonth
                      dropdownMode="select"
                      isClearable
                      placeholderText="MM/DD/YYYY"
                      className="w-full"
                    />
                  </div>
                </div>
              </div>
              <div className="col-span-12 md:col-span-6 xl:col-span-3">
                <div className="inventual-form-field">
                  <h5>Warehouse</h5>
                  <div className="inventual-select-field-style">
                    <TextField
                      select
                      label="Select"
                      defaultValue=""
                      SelectProps={{
                        displayEmpty: true,
                        renderValue: (value: any) => {
                          if (value === '') {
                            return <em>Select Warehouse</em>;
                          }
                          return value;
                        },
                      }}
                    >
                      <MenuItem value="">
                        <em>Select Warehouse</em>
                      </MenuItem>
                      <MenuItem value="Warehouse 1">Warehouse 1</MenuItem>
                      <MenuItem value="Warehouse 2">Warehouse 2</MenuItem>
                      <MenuItem value="Warehouse 3">Warehouse 3</MenuItem>
                      <MenuItem value="Warehouse 4">Warehouse 4</MenuItem>
                      <MenuItem value="Warehouse 5">Warehouse 5</MenuItem>
                    </TextField>
                  </div>
                </div>
              </div>
              <div className="col-span-12 md:col-span-6 xl:col-span-3">
                <div className="inventual-form-field">
                  <h5>Report Shortcut</h5>
                  <div className="inventual-select-field-style">
                    <TextField
                      select
                      label="Select"
                      defaultValue=""
                      SelectProps={{
                        displayEmpty: true,
                        renderValue: (value: any) => {
                          if (value === '') {
                            return <em>Select Report</em>;
                          }
                          return value;
                        },
                      }}
                    >
                      <MenuItem value="">
                        <em>Select Report</em>
                      </MenuItem>
                      <MenuItem value="Daily">Daily</MenuItem>
                      <MenuItem value="Weekly">Weekly</MenuItem>
                      <MenuItem value="Monthly">Monthly</MenuItem>
                      <MenuItem value="Yearly">Yearly</MenuItem>
                    </TextField>
                  </div>
                </div>
              </div>
            </div>
            <div className="min-w-[200px]">
              <button type='button' className='inventual-btn'>Generate Report</button>
            </div>
          </div>
          <div className="inventual-table-header-search-area">
            <div className="grid grid-cols-12 gap-x-5 gap-y-4 mb-7 pb-0.5">
              <div className="col-span-12 md:col-span-7 lg:col-span-7 xl:col-span-5">
                <div className="inventual-table-header-search relative">
                  <input type="text" placeholder="Search List" />
                  <span><i className="fa-sharp fa-regular fa-magnifying-glass"></i></span>
                </div>
              </div>
              <div className="col-span-12 md:col-span-5 lg:col-span-5 xl:col-span-7">
                <div className="inventual-action-btn-wrapper md:justify-end">
                  <div className="inventual-list-action-style is-filter teal-btn">
                    <PopupState variant="popover">
                      {(popupState: any) => (
                        <React.Fragment>
                          <button className='' type='button' {...bindTrigger(popupState)}>
                            <svg id="filter" xmlns="http://www.w3.org/2000/svg" width="15.766" height="13.34" viewBox="0 0 15.766 13.34"><path id="Path_196" data-name="Path 196" d="M18.159,6.213H9.67A1.214,1.214,0,0,0,8.457,5H7.245A1.214,1.214,0,0,0,6.032,6.213H3.606a.606.606,0,1,0,0,1.213H6.032A1.214,1.214,0,0,0,7.245,8.638H8.457A1.214,1.214,0,0,0,9.67,7.426h8.489a.606.606,0,1,0,0-1.213ZM7.245,7.426V6.213H8.457v.6s0,0,0,0,0,0,0,0v.6Z" transform="translate(-3 -5)" fill="#611bcb"></path><path id="Path_197" data-name="Path 197" d="M18.159,14.213H14.521A1.214,1.214,0,0,0,13.308,13H12.1a1.214,1.214,0,0,0-1.213,1.213H3.606a.606.606,0,1,0,0,1.213h7.277A1.214,1.214,0,0,0,12.1,16.638h1.213a1.214,1.214,0,0,0,1.213-1.213h3.638a.606.606,0,1,0,0-1.213ZM12.1,15.426V14.213h1.213v.6s0,0,0,0,0,0,0,0v.6Z" transform="translate(-3 -8.149)" fill="#611bcb"></path><path id="Path_198" data-name="Path 198" d="M18.159,22.213H9.67A1.214,1.214,0,0,0,8.457,21H7.245a1.214,1.214,0,0,0-1.213,1.213H3.606a.606.606,0,0,0,0,1.213H6.032a1.214,1.214,0,0,0,1.213,1.213H8.457A1.214,1.214,0,0,0,9.67,23.426h8.489a.606.606,0,0,0,0-1.213ZM7.245,23.426V22.213H8.457v.6s0,0,0,0,0,0,0,0v.6Z" transform="translate(-3 -11.298)" fill="#611bcb"></path></svg>  Filter
                          </button>
                          <Menu {...bindMenu(popupState)}>
                            <MenuItem onClick={popupState.close}>Date</MenuItem>
                            <MenuItem onClick={popupState.close}>Warehouse</MenuItem>
                            <MenuItem onClick={popupState.close}>Invoice No</MenuItem>
                            <MenuItem onClick={popupState.close}>Status</MenuItem>
                          </Menu>
                        </React.Fragment>
                      )}
                    </PopupState>
                  </div>
                  <button type="button" className="inventual-action-btn warning-btn">
                    <span><svg id="pdf-file" xmlns="http://www.w3.org/2000/svg" width="19.027" height="19.72" viewBox="0 0 19.027 19.72"><path id="Path_188" data-name="Path 188" d="M82.8,209H81.578a.578.578,0,0,0-.578.58l.009,4.389a.578.578,0,1,0,1.155,0v-1.333l.636,0a1.817,1.817,0,1,0,0-3.634Zm0,2.478-.639,0c0-.246,0-.511,0-.664,0-.131,0-.4,0-.661H82.8a.662.662,0,1,1,0,1.323Z" transform="translate(-78.227 -200.95)" fill="#ff9720"></path><path id="Path_189" data-name="Path 189" d="M210.784,209h-1.207a.578.578,0,0,0-.578.579s.009,4.246.009,4.262a.578.578,0,0,0,.578.576h0c.036,0,.9,0,1.241-.009a2.449,2.449,0,0,0,2.253-2.7C213.083,210.088,212.159,209,210.784,209Zm.025,4.251c-.15,0-.407,0-.647.006,0-.5,0-2.581-.006-3.1h.628c1.06,0,1.143,1.188,1.143,1.553C211.927,212.467,211.582,213.238,210.81,213.251Z" transform="translate(-201.297 -200.95)" fill="#ff9720"></path><path id="Path_190" data-name="Path 190" d="M355.344,209a.578.578,0,1,0,0-1.155h-1.766a.578.578,0,0,0-.578.578v4.358a.578.578,0,0,0,1.155,0v-1.643H355.2a.578.578,0,1,0,0-1.155h-1.048V209Z" transform="translate(-339.75 -199.837)" fill="#ff9720"></path><path id="Path_191" data-name="Path 191" d="M26.294,5.585H25.87V5.42a2.877,2.877,0,0,0-.792-1.987L22.678.9a2.9,2.9,0,0,0-2.1-.9H12.89a1.735,1.735,0,0,0-1.733,1.733V5.585h-.424A1.735,1.735,0,0,0,9,7.318v6.933a1.735,1.735,0,0,0,1.733,1.733h.424v2A1.735,1.735,0,0,0,12.89,19.72H24.137a1.735,1.735,0,0,0,1.733-1.733v-2h.424a1.735,1.735,0,0,0,1.733-1.733V7.318A1.735,1.735,0,0,0,26.294,5.585ZM12.312,1.733a.578.578,0,0,1,.578-.578h7.691a1.74,1.74,0,0,1,1.258.541l2.4,2.531a1.726,1.726,0,0,1,.475,1.192v.165h-12.4Zm12.4,16.254a.578.578,0,0,1-.578.578H12.89a.578.578,0,0,1-.578-.578v-2h12.4Zm2.157-3.736a.578.578,0,0,1-.578.578H10.733a.578.578,0,0,1-.578-.578V7.318a.578.578,0,0,1,.578-.578h15.56a.578.578,0,0,1,.578.578Z" transform="translate(-9 0)" fill="#ff9720"></path></svg></span>
                  </button>
                  <button type="button" className="inventual-action-btn secondary-btn">
                    <span><svg id="csv" xmlns="http://www.w3.org/2000/svg" width="18.105" height="18.105" viewBox="0 0 18.105 18.105"><path id="Path_184" data-name="Path 184" d="M16.514,8.558h-.566V4.774a.535.535,0,0,0-.155-.375h0L11.55.155A.535.535,0,0,0,11.174,0H3.748A1.593,1.593,0,0,0,2.157,1.591V8.558H1.591A1.593,1.593,0,0,0,0,10.149v6.365a1.593,1.593,0,0,0,1.591,1.591H16.514a1.593,1.593,0,0,0,1.591-1.591V10.149A1.593,1.593,0,0,0,16.514,8.558ZM11.7,1.811l2.432,2.432h-1.9a.531.531,0,0,1-.53-.53Zm-8.487-.22a.531.531,0,0,1,.53-.53h6.9V3.713A1.593,1.593,0,0,0,12.235,5.3h2.652V8.558H3.218ZM17.045,16.514a.531.531,0,0,1-.53.53H1.591a.531.531,0,0,1-.53-.53V10.149a.531.531,0,0,1,.53-.53H16.514a.531.531,0,0,1,.53.53Z" transform="translate(0 0)" fill="#27db8d"></path><path id="Path_185" data-name="Path 185" d="M92.591,303.061a.531.531,0,0,1,.53.53.53.53,0,1,0,1.061,0,1.591,1.591,0,0,0-3.183,0v2.122a1.591,1.591,0,1,0,3.183,0,.53.53,0,0,0-1.061,0,.53.53,0,1,1-1.061,0v-2.122A.531.531,0,0,1,92.591,303.061Z" transform="translate(-87.782 -291.321)" fill="#27db8d"></path><path id="Path_186" data-name="Path 186" d="M212.591,304.122a.53.53,0,1,1,.375-.906.53.53,0,0,0,.75-.75,1.591,1.591,0,1,0-1.125,2.717.53.53,0,1,1-.375.906.53.53,0,1,0-.75.75,1.591,1.591,0,1,0,1.125-2.717Z" transform="translate(-203.539 -291.321)" fill="#27db8d"></path><path id="Path_187" data-name="Path 187" d="M333.778,302.013a.531.531,0,0,0-.643.386l-.546,2.185-.546-2.185a.53.53,0,1,0-1.029.257l1.061,4.243a.53.53,0,0,0,1.029,0l1.061-4.243A.53.53,0,0,0,333.778,302.013Z" transform="translate(-319.293 -291.317)" fill="#27db8d"></path></svg></span>
                  </button>
                  <button type="button" className="inventual-action-btn">
                    <span><svg id="printer" xmlns="http://www.w3.org/2000/svg" width="19.26" height="19.26" viewBox="0 0 19.26 19.26"><path id="Path_192" data-name="Path 192" d="M16.439,4.853h-.527V2.821A2.824,2.824,0,0,0,13.091,0H6.169A2.824,2.824,0,0,0,3.348,2.821V4.853H2.821A2.824,2.824,0,0,0,0,7.674v4.514a2.824,2.824,0,0,0,2.821,2.821h.527v2.558A1.7,1.7,0,0,0,5.041,19.26h9.178a1.7,1.7,0,0,0,1.693-1.693V15.009h.527a2.824,2.824,0,0,0,2.821-2.821V7.674A2.824,2.824,0,0,0,16.439,4.853ZM4.476,2.821A1.7,1.7,0,0,1,6.169,1.129h6.921a1.7,1.7,0,0,1,1.693,1.693V4.853H4.476ZM14.783,17.567a.565.565,0,0,1-.564.564H5.041a.565.565,0,0,1-.564-.564V12H14.783Zm3.348-5.379a1.7,1.7,0,0,1-1.693,1.693h-.527V12h.339a.564.564,0,1,0,0-1.129H3.009a.564.564,0,1,0,0,1.129h.339v1.881H2.821a1.7,1.7,0,0,1-1.693-1.693V7.674A1.7,1.7,0,0,1,2.821,5.981H16.439a1.7,1.7,0,0,1,1.693,1.693Z" fill="#2c6ae5"></path><path id="Path_193" data-name="Path 193" d="M204.574,353h-3.009a.564.564,0,1,0,0,1.128h3.009a.564.564,0,1,0,0-1.128Z" transform="translate(-193.439 -339.721)" fill="#2c6ae5"></path><path id="Path_194" data-name="Path 194" d="M204.574,417h-3.009a.564.564,0,1,0,0,1.129h3.009a.564.564,0,1,0,0-1.129Z" transform="translate(-193.439 -401.314)" fill="#2c6ae5"></path><path id="Path_195" data-name="Path 195" d="M67.37,193H65.564a.564.564,0,1,0,0,1.128H67.37a.564.564,0,1,0,0-1.128Z" transform="translate(-62.555 -185.74)" fill="#2c6ae5"></path></svg></span>
                  </button>
                </div>
              </div>
            </div>
            <div className="inventual-manageproduct-table-area">
              <div className="inventual-common-mat-list w-full mt-0.5">
                <div className="inner max2Xl:overflow-x-scroll">
                  <div className='min-w-[1225px] xl:w-full'>
                    <Paper sx={{ width: '100%', mb: 2 }}>
                      <TableContainer>
                        <Table aria-label="enhanced table" size="medium">
                          <TableHead className='bg-lightest'>
                            <TableRow>
                              <TableCell>
                                <TableSortLabel
                                  active={orderBy === 'date'}
                                  direction={orderBy === 'date' ? order : 'asc'}
                                  onClick={() => handleRequestSort('date')}
                                >
                                  Date
                                </TableSortLabel>
                              </TableCell>
                              <TableCell>
                                <TableSortLabel
                                  active={orderBy === 'warehouse'}
                                  direction={orderBy === 'warehouse' ? order : 'asc'}
                                  onClick={() => handleRequestSort('warehouse')}
                                >
                                  Warehouse
                                </TableSortLabel>
                              </TableCell>
                              <TableCell>
                                <TableSortLabel
                                  active={orderBy === 'email'}
                                  direction={orderBy === 'email' ? order : 'asc'}
                                  onClick={() => handleRequestSort('email')}
                                >
                                  Email
                                </TableSortLabel>
                              </TableCell>
                              <TableCell>
                                <TableSortLabel
                                  active={orderBy === 'reference'}
                                  direction={orderBy === 'reference' ? order : 'asc'}
                                  onClick={() => handleRequestSort('reference')}
                                >
                                  Reference No
                                </TableSortLabel>
                              </TableCell>
                              <TableCell>
                                <TableSortLabel
                                  active={orderBy === 'invoice'}
                                  direction={orderBy === 'invoice' ? order : 'asc'}
                                  onClick={() => handleRequestSort('invoice')}
                                >
                                  Invoice No
                                </TableSortLabel>
                              </TableCell>
                              <TableCell>
                                <TableSortLabel
                                  active={orderBy === 'unit'}
                                  direction={orderBy === 'unit' ? order : 'asc'}
                                  onClick={() => handleRequestSort('unit')}
                                >
                                  Paid By
                                </TableSortLabel>
                              </TableCell>
                              <TableCell>
                                <TableSortLabel
                                  active={orderBy === 'status'}
                                  direction={orderBy === 'status' ? order : 'asc'}
                                  onClick={() => handleRequestSort('status')}
                                >
                                  status
                                </TableSortLabel>
                              </TableCell>
                              <TableCell>
                                <TableSortLabel
                                  active={orderBy === 'amount'}
                                  direction={orderBy === 'amount' ? order : 'asc'}
                                  onClick={() => handleRequestSort('amount')}
                                >
                                  Amount
                                </TableSortLabel>
                              </TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {sortedRows
                              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                              .map((row) => (
                                <TableRow
                                  key={row.id}
                                  hover
                                  onClick={() => handleClick(row.id)}
                                  aria-checked={isSelected(row.id)}
                                  selected={isSelected(row.id)}
                                >
                                  <TableCell>{row.date}</TableCell>
                                  <TableCell>{row.warehouse}</TableCell>
                                  <TableCell>{row.email}</TableCell>
                                  <TableCell>{row.reference}</TableCell>
                                  <TableCell>{row.invoice}</TableCell>
                                  <TableCell>{row.unit}</TableCell>
                                  <TableCell>
                                    {
                                      row.status.toLowerCase() === "completed" ? (
                                        <span className='badge badge-success'>{row.status}</span>
                                      ) : (
                                        row.status.toLowerCase() === "due" ? (
                                          <span className='badge badge-danger'>{row.status}</span>
                                        ) : (
                                          row.status.toLowerCase() === "partial" ? (
                                            <span className='badge badge-teal'>{row.status}</span>
                                          ) : (
                                            <span className='badge badge-success'>{row.status}</span>
                                          )
                                        )
                                      )
                                    }
                                  </TableCell>
                                  <TableCell>{row.amount}</TableCell>
                                </TableRow>
                              ))}
                            <TableRow>
                              <TableCell colSpan={6}><span className="font-semibold text-heading">Total</span></TableCell>
                              <TableCell><span className="font-semibold text-heading">$435</span></TableCell>
                              <TableCell></TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </Paper>
                  </div>
                </div>
                <div className="inventual-pagination-area">
                  {/* Pagination */}
                  <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  );
}

export default PaymentReport