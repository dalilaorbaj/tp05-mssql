import config from './dbconfig.js';
import sql from 'mssql';

class PizzaService {
    getAll = async () => {
        let rta = null;
        try {
            let pool = await sql.connect(config);
            let result = await pool.request().query("SELECT * FROM Pizzas");
            rta = result.recordsets[0];
        }
        catch (error) {
            console.log(error);
        }
        return rta;
    }

    getById = async (id) => {
        let rta = null;
        try {
            let pool = await sql.connect(config);
            let result = await pool.request().input('pId', sql.Int, id).query("SELECT * FROM Pizzas WHERE Id = @pId");
            rta = result.recordsets[0][0];
        }
        catch (error) {
            console.log(error);
        }
        return rta;
    }

    createPizza = async (Pizza) => {
        let filasAfectadas = 0;
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input("nombre", sql.VarChar, pizza.nombre)
                .input("libreGluten", sql.Bit, pizza.libreGluten)
                .input("importe", sql.Decimal(10, 2), pizza.importe)
                .input("descripcion", sql.VarChar, pizza.descripcion)
                .query("INSERT INTO Pizzas (nombre, libreGluten, importe, descripcion) VALUES (@nombre, @libreGluten, @importe, @descripcion)");
            filasAfectadas = result.rowsAffected;

        }
        catch (error) {
            console.log(error);
        }
        return filasAfectadas>0;
    }

    updatePizza = async (id, Pizza) => {
        let filasAfectadas = 0;
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input("id", sql.Int, pizza.id)
                .input("nombre", sql.VarChar, pizza.nombre)
                .input("libreGluten", sql.Bit, pizza.libreGluten)
                .input("importe", sql.Decimal(10, 2), pizza.importe)
                .input("descripcion", sql.VarChar, pizza.descripcion)
                .query("UPDATE Pizzas SET nombre = @nombre, libreGluten = @libreGluten, importe = @importe, descripcion = @descripcion WHERE id = @id"); 
                filasAfectadas = result.rowsAffected;
        }
        catch (error) {
            console.log(error);
        }
        return filasAfectadas>0;
    }

    deleteById = async (id) => {
        let filasAfectadas = 0;
        try {
            let pool = await sql.connect(config);
            let result = await pool.request().input('pPizza', sql.Pizza, pizza).query("DELETE FROM Pizzas WHERE Id=@id");
            filasAfectadas = result.rowsAffected;
        }
        catch (error) {
            console.log(error);
        }
        return filasAfectadas>0;
    }
}

export default PizzaService;
