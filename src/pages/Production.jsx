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
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing'

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

function createData(MD, TH, SL,TONGTIEN, TT) {
  return {MD, TH, SL,TONGTIEN, TT};
}

const rows = [
  createData('111', 'Vai cốt tông', '100',1000 , 'Hoàn thành'),
  createData('112', 'Vải cứng', '200',1000 , 'Hoàn thành'),
  createData('113', 'Vải mềm', '100',1000 , 'Hoàn thành'),
  createData('114', 'Bìa cứng', '100',1000 , 'Hoàn thành'),
  createData('115', 'Bìa mềm', '100',1000 , 'Hoàn thành'),
  createData('116', 'Vải dai', '100',1000 , 'Hoàn thành'),
  createData('117', 'Vải hàn quốc', '100',1000 , 'Hoàn thành'),
  createData('118', 'Vải Việt Nam', '100',1000 , 'Hoàn thành'),
  createData('119', 'Naruto', '100',1000 , 'Hoàn thành'),
];

export default function Production() {
  return (
    <div className='min-w-full pl-20 pr-20 pt-10'>
      <div className='flex items-center justify-between mb-5'>
        <div className='flex gap-3 font-bold text-xl items-center border-2 rounded-md p-3'>
          <div>Quản Lý Sản Xuất</div>
          <PrecisionManufacturingIcon sx={{ fontSize: 40}}/>
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
            <StyledTableCell>Mã đơn</StyledTableCell>
            <StyledTableCell >Tên hàng</StyledTableCell>
            <StyledTableCell >Số lượng</StyledTableCell>
            <StyledTableCell >Tổng tiền</StyledTableCell>
            <StyledTableCell >Trạng thái</StyledTableCell>
            <StyledTableCell >Thao tác</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <StyledTableRow key={row.MD}>
              <StyledTableCell component="th" scope="row">
                {index + 1}
              </StyledTableCell>
              <StyledTableCell>{row.MD}</StyledTableCell>
              <StyledTableCell>{row.TH}</StyledTableCell>
              <StyledTableCell>{row.SL} </StyledTableCell>
              <StyledTableCell>{row.TONGTIEN} $</StyledTableCell>
              <StyledTableCell>{row.TT}</StyledTableCell>
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
