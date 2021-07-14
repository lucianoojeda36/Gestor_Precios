import { Request, Response } from 'express'
var XLSX = require('xlsx')


export function ExcelAjson(req: Request, res: Response) {


    function monthDosCifras() {
        let month = new Date().getMonth()
        return month < 10 ? '0' + `${month + 1}` : month
    }


    const excel = XLSX.readFile('C:\\Users\\HP\\Desktop\\precios\\api\\src\\subidas\\file-excel.xls')

    var nombreHoja = excel.SheetNames;
    let datos = XLSX.utils.sheet_to_json(excel.Sheets[nombreHoja[0]])

    let expresion = new RegExp(`${req.params.name}.*`, "i");
    let productos_filtrados = datos.filter((dato: any) => expresion.test(dato[`PRECIOS AL ${new Date().getDate()}/${monthDosCifras()}/${new Date().getFullYear()}`]));

    return res.json(productos_filtrados)

}


