const path = require("path");
const menu = require("../data/dbMenu");

module.exports = {
    index : (req,res) => {
        return res.render("index",{
            menu
        });
    },
    detail : (req,res) => {

        let plato = menu.find(plato => plato.id === +req.params.id)

        return res.render("detalleMenu",{
            plato
        })
    }
}