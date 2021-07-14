import React from 'react';
import { useSelector } from "react-redux";
import { withStyles, Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme: Theme) =>
    createStyles({
        head: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        body: {
            fontSize: 14,
        },
    }),
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
    createStyles({
        root: {
            '&:nth-of-type(odd)': {
                backgroundColor: theme.palette.action.hover,
            },
        },
    }),
)(TableRow);


const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});

function monthDosCifras() {
    let month = new Date().getMonth()
    return month < 10 ? '0' + `${month + 1}` : month
}

export default function Detalles() {
    const classes = useStyles();


    const Results_Array = useSelector((state: any) => state?.product)
    const porcentaje = useSelector((state: any) => state?.porcentaje)


    function prueba (row:any){
        const precio_1 = ((row.__EMPTY_1)/(row.__EMPTY.match(/(\d+)/g) ? row.__EMPTY.match(/(\d+)/g) : 1 ))
        const precio_iva = (precio_1 + (0.21*precio_1))
        const precio_final= parseFloat(`${precio_iva + ((porcentaje/100)*precio_iva)}`).toFixed(2)
        
        return precio_final
    }


    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Codigo</StyledTableCell>
                        <StyledTableCell align="right">Nombre Producto</StyledTableCell>
                        <StyledTableCell align="right">Precio por Bulto</StyledTableCell>
                        <StyledTableCell align="right">Precio Unitario</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {Results_Array.map((row:any) => (
                        <StyledTableRow key={row[`PRECIOS AL ${new Date().getDate()}/${monthDosCifras()}/${new Date().getFullYear()}`]}>
                            <StyledTableCell component="th" scope="row">
                                {row[`PRECIOS AL ${new Date().getDate()}/${monthDosCifras()}/${new Date().getFullYear()}`]}
                            </StyledTableCell>
                            <StyledTableCell align="right">{row.__EMPTY}</StyledTableCell>
                            <StyledTableCell align="right">{row.__EMPTY_1}</StyledTableCell>
                            <StyledTableCell align="right">{prueba(row)}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}