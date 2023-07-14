const express = require("express")
const axios = require("axios")
const bodyParser = require("body-parser")

const PORT = process.env.PORT || 5000
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get("/", (req, res) => {
  res.send(JSON.stringify({
    "p_pais" : "CR",
    "p_nacionalidad" : "CR",
    "p_sexo" : "F",
    "p_paisorigen" : "CR",
    "p_provincia" : "2",
    "p_canton" : "13",
    "p_distrito" : "001",
    "p_barrio" : "",
    "p_direccion" : "UPALA CENTRO",
    "p_art15" : "N",
    "p_art15bis" : "N",
    "p_alias" : "",
    "p_estado_civil" : "2",
    "p_conyugue" : "DUNCAN ALBERTO JARQUIN AMPIE",
    "p_hijos" : "1",
    "p_pepsestado" : "N",
    "p_listas_internacionales" : "N",
    "p_sentencias_internacionales" : "N",
    "p_interpol" : "N",
    "p_ofac" : "N",
    "p_fbi" : "N",
    "p_dea" : "N",
    "p_onu" : "N",
    "p_federacion_rusa" : "N",
    "p_fdle" : "N",
    "p_polic_argentina" : "N",
    "p_polic_francesa" : "N",
    "p_polic_suiza" : "N",
    "p_peps_cargo" : "",
    "p_peps_lugar_trabajo" : "",
    "p_peps_fecha_inicio" : "",
    "p_peps_fecha_fin" : "",
    "p_peps_ced_conyuge" : "",
    "p_peps_nombre_conyuge" : "",
    "p_peps_nacionalidad_conyuge" : "",
    "p_peps_cargo_conyuge" : "",
    "p_peps_lugtrab_conyuge" : "",
    "p_peps_fec_ini_conyuge" : "",
    "p_peps_fec_fin_conyuge" : "",
    "p_bienes" : [ {
      "tipo" : "INMUEBLE",
      "identificacion" : "605492",
      "descripcion" : "ALAJUELA            -UPALA               -YOLILLAL            ",
      "valor" : "0.00",
      "adquisicion" : "",
      "metodo" : "",
      "gravamenes" : ""
    } ],
    "status" : "200"
  }))
})

app.get("/users", (req, res) => {
  axios.get("http://localhost:5000/")
    .then(function(response) {
      res.json(response.data)
    }).catch(function(error) {
      res.json("Error occured!")
  })
})

app.post("/getUserById", (req, res) => {
  if (!req.body.id) {
    res.json("No ID found in reqest body.")
  } else {
    axios.get(`https://jsonplaceholder.typicode.com/users/${req.body.id}`)
      .then(function(response) {
        res.json(response.data)
      }).catch(function(error) {
        res.json("Error occured!")
      })
  }
})

app.listen(PORT, function () {
  console.log(`Express server listening on port ${PORT}`)
})