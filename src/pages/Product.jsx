import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import EditIcon from '@mui/icons-material/Edit'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import WarehouseIcon from '@mui/icons-material/Warehouse';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(MH, TH, LH, TK, PRICE) {
  return {MH, TH, LH, TK, PRICE };
}

const rows = [
  createData('111', 'Vai cốt tông', 'Loại đặc biệt', '100', 10),
  createData('112', 'Vải cứng', 'Loại đặc biệt', '200', 2),
  createData('113', 'Vải mềm', 'Loại đặc biệt', '100', 500),
  createData('114', 'Bìa cứng', 'Loại đặc biệt', '100', 19),
  createData('115', 'Bìa mềm', 'Loại đặc biệt', '100', 3),
  createData('116', 'Vải dai', 'Loại đặc biệt', '100', 1),
  createData('117', 'Vải hàn quốc', 'Loại đặc biệt', '100', 4),
  createData('118', 'Vải Việt Nam', 'Loại đặc biệt', '100', 5),
  createData('119', 'Naruto', 'Loại đặc biệt', '100', 6),
];

export default function Product() {
  return (
    <div className='min-w-full pl-20 pr-20 pt-10'>
      <div className='flex items-center justify-between mb-5'>
        <div className='flex gap-3 font-bold text-xl items-center border-2 rounded-md p-3'>
          <div>Quản Lý Hàng Hóa</div>
          <WarehouseIcon sx={{ fontSize: 40}}/>
        </div>
        <div className='flex gap-3'>
          <Button sx={{borderRadius: 5}} variant="contained">Thêm mới</Button>
          <Button sx={{borderRadius: 5}} variant="contained">Xuất file</Button>
        </div>
      </div>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>STT</StyledTableCell>
            <StyledTableCell>Mã hàng</StyledTableCell>
            <StyledTableCell >Tên hàng</StyledTableCell>
            <StyledTableCell >Loại hàng</StyledTableCell>
            <StyledTableCell >Tồn kho</StyledTableCell>
            <StyledTableCell >Giá</StyledTableCell>
            <StyledTableCell >Thao tác</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <StyledTableRow key={row.MH}>
              <StyledTableCell component="th" scope="row">
                {index + 1}
              </StyledTableCell>
              <StyledTableCell>{row.MH}</StyledTableCell>
              <StyledTableCell>{row.TH}</StyledTableCell>
              <StyledTableCell>{row.LH}</StyledTableCell>
              <StyledTableCell>{row.TK}</StyledTableCell>
              <StyledTableCell>{row.PRICE} $</StyledTableCell>
              <StyledTableCell>
                <div className='flex gap-2'>
                  <button><EditIcon sx={{color: 'gray'}}/></button>
                  <button><DeleteForeverIcon sx={{color: 'red'}}/></button>
                </div>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}
