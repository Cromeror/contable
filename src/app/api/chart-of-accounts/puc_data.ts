import { AccountItem } from "./definitions";

const puc_data: AccountItem[] = [
    {
        parent: null,
        code: 1,
        description: "ACTIVO"
    },
    {
        parent: 1,
        code: 11,
        description: "DISPONIBLE"
    },
    {
        parent: 11,
        code: 1105,
        description: "CAJA"
    },
    {
        parent: 1105,
        code: 110505,
        description: "CAJA GENERAL"
    },
    {
        parent: 1105,
        code: 110510,
        description: "CAJAS MENORES"
    },
    {
        parent: 1105,
        code: 110515,
        description: "MONEDA EXTRANJERA"
    },
    {
        parent: 11,
        code: 1110,
        description: "BANCOS"
    },
    {
        parent: 1110,
        code: 111005,
        description: "MONEDA NACIONAL"
    },
    {
        parent: 1110,
        code: 111010,
        description: "MONEDA EXTRANJERA"
    },
    {
        parent: 11,
        code: 1115,
        description: "REMESAS EN TRANSITO"
    },
    {
        parent: 1115,
        code: 111505,
        description: "MONEDA NACIONAL"
    },
    {
        parent: 1115,
        code: 111510,
        description: "MONEDA EXTRANJERA"
    },
    {
        parent: 11,
        code: 1120,
        description: "CUENTAS DE AHORRO"
    },
    {
        parent: 1120,
        code: 112005,
        description: "BANCOS"
    },
    {
        parent: 1120,
        code: 112010,
        description: "CORPORACIONES DE AHORRO Y VIVIENDA"
    },
    {
        parent: 1120,
        code: 112015,
        description: "ORGANISMOS COOPERATIVOS FINANCIEROS"
    },
    {
        parent: 11,
        code: 1125,
        description: "FONDOS"
    },
    {
        parent: 1125,
        code: 112505,
        description: "ROTATORIOS MONEDA NACIONAL"
    },
    {
        parent: 1125,
        code: 112510,
        description: "ROTATORIOS MONEDA EXTRANJERA"
    },
    {
        parent: 1125,
        code: 112515,
        description: "ESPECIALES MONEDA NACIONAL"
    },
    {
        parent: 1125,
        code: 112520,
        description: "ESPECIALES MONEDA EXTRANJERA"
    },
    {
        parent: 1125,
        code: 112525,
        description: "DE AMORTIZACION MONEDA NACIONAL"
    },
    {
        parent: 1125,
        code: 112530,
        description: "DE AMORTIZACION MONEDA EXTRANJERA"
    },
    {
        parent: 1,
        code: 12,
        description: "INVERSIONES"
    },
    {
        parent: 12,
        code: 1205,
        description: "ACCIONES"
    },
    {
        parent: 1205,
        code: 120505,
        description: "AGRICULTURA, GANADERIA, CAZA Y SILVICULTURA"
    },
    {
        parent: 1205,
        code: 120510,
        description: "PESCA"
    },
    {
        parent: 1205,
        code: 120515,
        description: "EXPLOTACION DE MINAS Y CANTERAS"
    },
    {
        parent: 1205,
        code: 120520,
        description: "INDUSTRIA MANUFACTURERA"
    },
    {
        parent: 1205,
        code: 120525,
        description: "SUMINISTRO DE ELECTRICIDAD, GAS Y AGUA"
    },
    {
        parent: 1205,
        code: 120530,
        description: "CONSTRUCCION"
    },
    {
        parent: 1205,
        code: 120535,
        description: "COMERCIO AL POR MAYOR Y AL POR MENOR"
    },
    {
        parent: 1205,
        code: 120540,
        description: "HOTELES Y RESTAURANTES"
    },
    {
        parent: 1205,
        code: 120545,
        description: "TRANSPORTE, ALMACENAMIENTO Y COMUNICACIONES"
    },
    {
        parent: 1205,
        code: 120550,
        description: "ACTIVIDAD FINANCIERA"
    },
    {
        parent: 1205,
        code: 120555,
        description: "ACTIVIDADES INMOBILIARIAS, EMPRESARIALES Y DE ALQUILER"
    },
    {
        parent: 1205,
        code: 120560,
        description: "ENSEÑANZA"
    },
    {
        parent: 1205,
        code: 120565,
        description: "SERVICIOS SOCIALES Y DE SALUD"
    },
    {
        parent: 1205,
        code: 120570,
        description: "OTRAS ACTIVIDADES DE SERVICIOS COMUNITARIOS, SOCIALES"
    },
    {
        parent: 1205,
        code: 120599,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 12,
        code: 1210,
        description: "CUOTAS O PARTES DE INTERES SOCIAL"
    },
    {
        parent: 1210,
        code: 121005,
        description: "AGRICULTURA, GANADERIA, CAZA Y SILVICULTURA"
    },
    {
        parent: 1210,
        code: 121010,
        description: "PESCA"
    },
    {
        parent: 1210,
        code: 121015,
        description: "EXPLOTACION DE MINAS Y CANTERAS"
    },
    {
        parent: 1210,
        code: 121020,
        description: "INDUSTRIA MANUFACTURERA"
    },
    {
        parent: 1210,
        code: 121025,
        description: "SUMINISTRO DE ELECTRICIDAD, GAS Y AGUA"
    },
    {
        parent: 1210,
        code: 121030,
        description: "CONSTRUCCION"
    },
    {
        parent: 1210,
        code: 121035,
        description: "COMERCIO AL POR MAYOR Y AL POR MENOR"
    },
    {
        parent: 1210,
        code: 121040,
        description: "HOTELES Y RESTAURANTES"
    },
    {
        parent: 1210,
        code: 121045,
        description: "TRANSPORTE, ALMACENAMIENTO Y COMUNICACIONES"
    },
    {
        parent: 1210,
        code: 121050,
        description: "ACTIVIDAD FINANCIERA"
    },
    {
        parent: 1210,
        code: 121055,
        description: "ACTIVIDADES INMOBILIARIAS, EMPRESARIALES Y DE ALQUILER"
    },
    {
        parent: 1210,
        code: 121060,
        description: "ENSEÑANZA"
    },
    {
        parent: 1210,
        code: 121065,
        description: "SERVICIOS SOCIALES Y DE SALUD"
    },
    {
        parent: 1210,
        code: 121070,
        description: "OTRAS ACTIVIDADES DE SERVICIOS COMUNITARIOS, SOCIALES Y PERSONALES"
    },
    {
        parent: 1210,
        code: 121099,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 12,
        code: 1215,
        description: "BONOS"
    },
    {
        parent: 1215,
        code: 121505,
        description: "BONOS PUBLICOS MONEDA NACIONAL"
    },
    {
        parent: 1215,
        code: 121510,
        description: "BONOS PUBLICOS MONEDA EXTRANJERA"
    },
    {
        parent: 1215,
        code: 121515,
        description: "BONOS ORDINARIOS"
    },
    {
        parent: 1215,
        code: 121520,
        description: "BONOS CONVERTIBLES EN ACCIONES"
    },
    {
        parent: 1215,
        code: 121595,
        description: "OTROS"
    },
    {
        parent: 12,
        code: 1220,
        description: "CEDULAS"
    },
    {
        parent: 1220,
        code: 122005,
        description: "CEDULAS DE CAPITALIZACION"
    },
    {
        parent: 1220,
        code: 122010,
        description: "CEDULAS HIPOTECARIAS"
    },
    {
        parent: 1220,
        code: 122015,
        description: "CEDULAS DE INVERSION"
    },
    {
        parent: 1220,
        code: 122095,
        description: "OTRAS"
    },
    {
        parent: 12,
        code: 1225,
        description: "CERTIFICADOS"
    },
    {
        parent: 1225,
        code: 122505,
        description: "CERTIFICADOS DE DEPOSITO A TERMINO (C.D.T.)"
    },
    {
        parent: 1225,
        code: 122510,
        description: "CERTIFICADOS DE DEPOSITO DE AHORRO"
    },
    {
        parent: 1225,
        code: 122515,
        description: "CERTIFICADOS DE AHORRO DE VALOR CONSTANTE (C.A.V.C.)"
    },
    {
        parent: 1225,
        code: 122520,
        description: "CERTIFICADOS DE CAMBIO"
    },
    {
        parent: 1225,
        code: 122525,
        description: "CERTIFICADOS CAFETEROS VALORIZABLES"
    },
    {
        parent: 1225,
        code: 122530,
        description: "CERTIFICADOS ELECTRICOS VALORIZABLES (C.E.V.)"
    },
    {
        parent: 1225,
        code: 122535,
        description: "CERTIFICADOS DE REEMBOLSO TRIBUTARIO (C.E.R.T.)"
    },
    {
        parent: 1225,
        code: 122540,
        description: "CERTIFICADOS DE DESARROLLO TURISTICO"
    },
    {
        parent: 1225,
        code: 122545,
        description: "CERTIFICADOS DE INVERSION FORESTAL (C.I.F.)"
    },
    {
        parent: 1225,
        code: 122595,
        description: "OTROS"
    },
    {
        parent: 12,
        code: 1230,
        description: "PAPELES COMERCIALES"
    },
    {
        parent: 1230,
        code: 123005,
        description: "EMPRESAS COMERCIALES"
    },
    {
        parent: 1230,
        code: 123010,
        description: "EMPRESAS INDUSTRIALES"
    },
    {
        parent: 1230,
        code: 123015,
        description: "EMPRESAS DE SERVICIOS"
    },
    {
        parent: 12,
        code: 1235,
        description: "TITULOS"
    },
    {
        parent: 1235,
        code: 123505,
        description: "TITULOS DE DESARROLLO AGROPECUARIO"
    },
    {
        parent: 1235,
        code: 123510,
        description: "TITULOS CANJEABLES POR CERTIFICADOS DE CAMBIO"
    },
    {
        parent: 1235,
        code: 123515,
        description: "TITULOS DE TESORERIA (T.E.S.)"
    },
    {
        parent: 1235,
        code: 123520,
        description: "TITULOS DE PARTICIPACION"
    },
    {
        parent: 1235,
        code: 123525,
        description: "TITULOS DE CREDITO DE FOMENTO"
    },
    {
        parent: 1235,
        code: 123530,
        description: "TITULOS FINANCIEROS AGROINDUSTRIALES (T.F.A.)"
    },
    {
        parent: 1235,
        code: 123535,
        description: "TITULOS DE AHORRO CAFETERO (T.A.C.)"
    },
    {
        parent: 1235,
        code: 123540,
        description: "TITULOS DE AHORRO NACIONAL (T.A.N.)"
    },
    {
        parent: 1235,
        code: 123545,
        description: "TITULOS ENERGETICOS DE RENTABILIDAD CRECIENTE (T.E.R.)"
    },
    {
        parent: 1235,
        code: 123550,
        description: "TITULOS DE AHORRO EDUCATIVO (T.A.E.)"
    },
    {
        parent: 1235,
        code: 123555,
        description: "TITULOS FINANCIEROS  INDUSTRIALES Y COMERCIALES"
    },
    {
        parent: 1235,
        code: 123560,
        description: "TESOROS"
    },
    {
        parent: 1235,
        code: 123565,
        description: "TITULOS DE DEVOLUCION DE IMPUESTOS NACIONALES (TIDIS)"
    },
    {
        parent: 1235,
        code: 123570,
        description: "TITULOS INMOBILIARIOS"
    },
    {
        parent: 1235,
        code: 123595,
        description: "OTROS"
    },
    {
        parent: 12,
        code: 1240,
        description: "ACEPTACIONES BANCARIAS O FINANCIERAS"
    },
    {
        parent: 1240,
        code: 124005,
        description: "BANCOS COMERCIALES"
    },
    {
        parent: 1240,
        code: 124010,
        description: "COMPAÑIAS DE FINANCIAMIENTO COMERCIAL"
    },
    {
        parent: 1240,
        code: 124015,
        description: "CORPORACIONES FINANCIERAS"
    },
    {
        parent: 1240,
        code: 124095,
        description: "OTRAS"
    },
    {
        parent: 12,
        code: 1245,
        description: "DERECHOS FIDUCIARIOS"
    },
    {
        parent: 1245,
        code: 124505,
        description: "FIDEICOMISOS DE INVERSION MONEDA NACIONAL"
    },
    {
        parent: 1245,
        code: 124510,
        description: "FIDEICOMISOS DE INVERSION MONEDA EXTRANJERA"
    },
    {
        parent: 12,
        code: 1250,
        description: "DERECHOS DE RECOMPRA DE INVERSIONES NEGOCIADAS (REPOS)"
    },
    {
        parent: 1250,
        code: 125005,
        description: "ACCIONES"
    },
    {
        parent: 1250,
        code: 125010,
        description: "CUOTAS O PARTES DE INTERES SOCIAL"
    },
    {
        parent: 1250,
        code: 125015,
        description: "BONOS"
    },
    {
        parent: 1250,
        code: 125020,
        description: "CEDULAS"
    },
    {
        parent: 1250,
        code: 125025,
        description: "CERTIFICADOS"
    },
    {
        parent: 1250,
        code: 125030,
        description: "PAPELES COMERCIALES"
    },
    {
        parent: 1250,
        code: 125035,
        description: "TITULOS"
    },
    {
        parent: 1250,
        code: 125040,
        description: "ACEPTACIONES BANCARIAS O FINANCIERAS"
    },
    {
        parent: 1250,
        code: 125095,
        description: "OTROS"
    },
    {
        parent: 1250,
        code: 125099,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 12,
        code: 1255,
        description: "OBLIGATORIAS"
    },
    {
        parent: 1255,
        code: 125505,
        description: "BONOS DE FINANCIAMIENTO ESPECIAL"
    },
    {
        parent: 1255,
        code: 125510,
        description: "BONOS DE FINANCIAMIENTO PRESUPUESTAL"
    },
    {
        parent: 1255,
        code: 125515,
        description: "BONOS PARA DESARROLLO SOCIAL Y SEGURIDAD INTERNA (B.D.S.I.)"
    },
    {
        parent: 1255,
        code: 125595,
        description: "OTRAS"
    },
    {
        parent: 12,
        code: 1260,
        description: "CUENTAS EN PARTICIPACION"
    },
    {
        parent: 1260,
        code: 126099,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 12,
        code: 1295,
        description: "OTRAS INVERSIONES"
    },
    {
        parent: 1295,
        code: 129505,
        description: "APORTES EN COOPERATIVAS"
    },
    {
        parent: 1295,
        code: 129510,
        description: "DERECHOS EN CLUBES SOCIALES"
    },
    {
        parent: 1295,
        code: 129515,
        description: "ACCIONES O DERECHOS EN CLUBES DEPORTIVOS"
    },
    {
        parent: 1295,
        code: 129520,
        description: "BONOS EN COLEGIOS"
    },
    {
        parent: 1295,
        code: 129595,
        description: "DIVERSAS"
    },
    {
        parent: 1295,
        code: 129599,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 12,
        code: 1299,
        description: "PROVISIONES"
    },
    {
        parent: 1299,
        code: 129905,
        description: "ACCIONES"
    },
    {
        parent: 1299,
        code: 129910,
        description: "CUOTAS O PARTES DE INTERES SOCIAL"
    },
    {
        parent: 1299,
        code: 129915,
        description: "BONOS"
    },
    {
        parent: 1299,
        code: 129920,
        description: "CEDULAS"
    },
    {
        parent: 1299,
        code: 129925,
        description: "CERTIFICADOS"
    },
    {
        parent: 1299,
        code: 129930,
        description: "PAPELES COMERCIALES"
    },
    {
        parent: 1299,
        code: 129935,
        description: "TITULOS"
    },
    {
        parent: 1299,
        code: 129940,
        description: "ACEPTACIONES BANCARIAS O FINANCIERAS"
    },
    {
        parent: 1299,
        code: 129945,
        description: "DERECHOS FIDUCIARIOS"
    },
    {
        parent: 1299,
        code: 129950,
        description: "DERECHOS DE RECOMPRA DE INVERSIONES NEGOCIADAS"
    },
    {
        parent: 1299,
        code: 129955,
        description: "OBLIGATORIAS"
    },
    {
        parent: 1299,
        code: 129960,
        description: "CUENTAS EN PARTICIPACION"
    },
    {
        parent: 1299,
        code: 129995,
        description: "OTRAS INVERSIONES"
    },
    {
        parent: 1,
        code: 13,
        description: "DEUDORES"
    },
    {
        parent: 13,
        code: 1305,
        description: "CLIENTES"
    },
    {
        parent: 1305,
        code: 130505,
        description: "NACIONALES"
    },
    {
        parent: 1305,
        code: 130510,
        description: "DEL EXTERIOR"
    },
    {
        parent: 1305,
        code: 130515,
        description: "DEUDORES DEL SISTEMA"
    },
    {
        parent: 13,
        code: 1310,
        description: "CUENTAS CORRIENTES COMERCIALES"
    },
    {
        parent: 1310,
        code: 131005,
        description: "CASA MATRIZ"
    },
    {
        parent: 1310,
        code: 131010,
        description: "COMPAÑIAS VINCULADAS"
    },
    {
        parent: 1310,
        code: 131015,
        description: "ACCIONISTAS O SOCIOS"
    },
    {
        parent: 1310,
        code: 131020,
        description: "PARTICULARES"
    },
    {
        parent: 1310,
        code: 131095,
        description: "OTRAS"
    },
    {
        parent: 13,
        code: 1315,
        description: "CUENTAS POR COBRAR A CASA MATRIZ"
    },
    {
        parent: 1315,
        code: 131505,
        description: "VENTAS"
    },
    {
        parent: 1315,
        code: 131510,
        description: "PAGOS A NOMBRE DE CASA MATRIZ"
    },
    {
        parent: 1315,
        code: 131515,
        description: "VALORES RECIBIDOS POR CASA MATRIZ"
    },
    {
        parent: 1315,
        code: 131520,
        description: "PRESTAMOS"
    },
    {
        parent: 13,
        code: 1320,
        description: "CUENTAS POR COBRAR A VINCULADOS ECONOMICOS"
    },
    {
        parent: 1320,
        code: 132005,
        description: "FILIALES"
    },
    {
        parent: 1320,
        code: 132010,
        description: "SUBSIDIARIAS"
    },
    {
        parent: 1320,
        code: 132015,
        description: "SUCURSALES"
    },
    {
        parent: 13,
        code: 1325,
        description: "CUENTAS POR COBRAR A SOCIOS Y ACCIONISTAS"
    },
    {
        parent: 1325,
        code: 132505,
        description: "A SOCIOS"
    },
    {
        parent: 1325,
        code: 132510,
        description: "A ACCIONISTAS"
    },
    {
        parent: 13,
        code: 1328,
        description: "APORTES POR COBRAR"
    },
    {
        parent: 13,
        code: 1330,
        description: "ANTICIPOS Y AVANCES"
    },
    {
        parent: 1330,
        code: 133005,
        description: "A PROVEEDORES"
    },
    {
        parent: 1330,
        code: 133010,
        description: "A CONTRATISTAS"
    },
    {
        parent: 1330,
        code: 133015,
        description: "A TRABAJADORES"
    },
    {
        parent: 1330,
        code: 133020,
        description: "A AGENTES"
    },
    {
        parent: 1330,
        code: 133025,
        description: "A CONCESIONARIOS"
    },
    {
        parent: 1330,
        code: 133030,
        description: "DE ADJUDICACIONES"
    },
    {
        parent: 1330,
        code: 133095,
        description: "OTROS"
    },
    {
        parent: 13,
        code: 1332,
        description: "CUENTAS DE OPERACION CONJUNTA"
    },
    {
        parent: 13,
        code: 1335,
        description: "DEPOSITOS"
    },
    {
        parent: 1335,
        code: 133505,
        description: "PARA IMPORTACIONES"
    },
    {
        parent: 1335,
        code: 133510,
        description: "PARA SERVICIOS"
    },
    {
        parent: 1335,
        code: 133515,
        description: "PARA CONTRATOS"
    },
    {
        parent: 1335,
        code: 133520,
        description: "PARA RESPONSABILIDADES"
    },
    {
        parent: 1335,
        code: 133525,
        description: "PARA JUICIOS EJECUTIVOS"
    },
    {
        parent: 1335,
        code: 133530,
        description: "PARA ADQUISICION DE ACCIONES, CUOTAS O DERECHOS"
    },
    {
        parent: 1335,
        code: 133535,
        description: "EN GARANTIA"
    },
    {
        parent: 1335,
        code: 133595,
        description: "OTROS"
    },
    {
        parent: 13,
        code: 1340,
        description: "PROMESAS DE COMPRA VENTA"
    },
    {
        parent: 1340,
        code: 134005,
        description: "DE BIENES RAICES"
    },
    {
        parent: 1340,
        code: 134010,
        description: "DE MAQUINARIA Y EQUIPO"
    },
    {
        parent: 1340,
        code: 134015,
        description: "DE FLOTA Y EQUIPO DE TRANSPORTE"
    },
    {
        parent: 1340,
        code: 134020,
        description: "DE FLOTA Y EQUIPO AEREO"
    },
    {
        parent: 1340,
        code: 134025,
        description: "DE FLOTA Y EQUIPO FERREO"
    },
    {
        parent: 1340,
        code: 134030,
        description: "DE FLOTA Y EQUIPO FLUVIAL Y/O MARITIMO"
    },
    {
        parent: 1340,
        code: 134035,
        description: "DE SEMOVIENTES"
    },
    {
        parent: 1340,
        code: 134095,
        description: "DE OTROS BIENES"
    },
    {
        parent: 13,
        code: 1345,
        description: "INGRESOS POR COBRAR"
    },
    {
        parent: 1345,
        code: 134505,
        description: "DIVIDENDOS Y/O PARTICIPACIONES"
    },
    {
        parent: 1345,
        code: 134510,
        description: "INTERESES"
    },
    {
        parent: 1345,
        code: 134515,
        description: "COMISIONES"
    },
    {
        parent: 1345,
        code: 134520,
        description: "HONORARIOS"
    },
    {
        parent: 1345,
        code: 134525,
        description: "SERVICIOS"
    },
    {
        parent: 1345,
        code: 134530,
        description: "ARRENDAMIENTOS"
    },
    {
        parent: 1345,
        code: 134535,
        description: "CERT POR COBRAR"
    },
    {
        parent: 1345,
        code: 134595,
        description: "OTROS"
    },
    {
        parent: 13,
        code: 1350,
        description: "RETENCION SOBRE CONTRATOS"
    },
    {
        parent: 1350,
        code: 135005,
        description: "DE CONSTRUCCION"
    },
    {
        parent: 1350,
        code: 135010,
        description: "DE PRESTACION DE SERVICIOS"
    },
    {
        parent: 1350,
        code: 135095,
        description: "OTROS"
    },
    {
        parent: 13,
        code: 1355,
        description: "ANTICIPO DE IMPUESTOS Y CONTRIBUCIONES O SALDOS A FAVOR"
    },
    {
        parent: 1355,
        code: 135505,
        description: "ANTICIPO DE IMPUESTOS DE RENTA Y COMPLEMENTARIOS"
    },
    {
        parent: 1355,
        code: 135510,
        description: "ANTICIPO DE IMPUESTOS DE INDUSTRIA Y COMERCIO"
    },
    {
        parent: 1355,
        code: 135515,
        description: "RETENCION EN LA FUENTE"
    },
    {
        parent: 1355,
        code: 135520,
        description: "SOBRANTES EN LIQUIDACION PRIVADA DE IMPUESTOS"
    },
    {
        parent: 1355,
        code: 135525,
        description: "CONTRIBUCIONES"
    },
    {
        parent: 1355,
        code: 135530,
        description: "IMPUESTOS DESCONTABLES"
    },
    {
        parent: 1355,
        code: 135595,
        description: "OTROS"
    },
    {
        parent: 13,
        code: 1360,
        description: "RECLAMACIONES"
    },
    {
        parent: 1360,
        code: 136005,
        description: "A COMPAÑIAS ASEGURADORAS"
    },
    {
        parent: 1360,
        code: 136010,
        description: "A TRANSPORTADORES"
    },
    {
        parent: 1360,
        code: 136015,
        description: "POR TIQUETES AEREOS"
    },
    {
        parent: 1360,
        code: 136095,
        description: "OTRAS"
    },
    {
        parent: 13,
        code: 1365,
        description: "CUENTAS POR COBRAR A TRABAJADORES"
    },
    {
        parent: 1365,
        code: 136505,
        description: "VIVIENDA"
    },
    {
        parent: 1365,
        code: 136510,
        description: "VEHICULOS"
    },
    {
        parent: 1365,
        code: 136515,
        description: "EDUCACION"
    },
    {
        parent: 1365,
        code: 136520,
        description: "MEDICOS, ODONTOLOGICOS Y SIMILARES"
    },
    {
        parent: 1365,
        code: 136525,
        description: "CALAMIDAD DOMESTICA"
    },
    {
        parent: 1365,
        code: 136530,
        description: "RESPONSABILIDADES"
    },
    {
        parent: 1365,
        code: 136595,
        description: "OTROS"
    },
    {
        parent: 13,
        code: 1370,
        description: "PRESTAMOS A PARTICULARES"
    },
    {
        parent: 1370,
        code: 137005,
        description: "CON GARANTIA REAL"
    },
    {
        parent: 1370,
        code: 137010,
        description: "CON GARANTIA PERSONAL"
    },
    {
        parent: 13,
        code: 1380,
        description: "DEUDORES VARIOS"
    },
    {
        parent: 1380,
        code: 138005,
        description: "DEPOSITARIOS"
    },
    {
        parent: 1380,
        code: 138010,
        description: "COMISIONISTAS DE BOLSAS"
    },
    {
        parent: 1380,
        code: 138015,
        description: "FONDO DE INVERSION"
    },
    {
        parent: 1380,
        code: 138020,
        description: "CUENTAS POR COBRAR DE TERCEROS"
    },
    {
        parent: 1380,
        code: 138025,
        description: "PAGOS POR CUENTA DE TERCEROS"
    },
    {
        parent: 1380,
        code: 138030,
        description: "FONDOS DE INVERSION SOCIAL"
    },
    {
        parent: 1380,
        code: 138095,
        description: "OTROS"
    },
    {
        parent: 13,
        code: 1385,
        description: "DERECHOS DE RECOMPRA DE CARTERA NEGOCIADA"
    },
    {
        parent: 13,
        code: 1390,
        description: "DEUDAS DE DIFICIL COBRO"
    },
    {
        parent: 13,
        code: 1399,
        description: "PROVISIONES"
    },
    {
        parent: 1399,
        code: 139905,
        description: "CLIENTES"
    },
    {
        parent: 1399,
        code: 139910,
        description: "CUENTAS CORRIENTES COMERCIALES"
    },
    {
        parent: 1399,
        code: 139915,
        description: "CUENTAS POR COBRAR A CASA MATRIZ"
    },
    {
        parent: 1399,
        code: 139920,
        description: "CUENTAS POR COBRAR A VINCULADOS ECONOMICOS"
    },
    {
        parent: 1399,
        code: 139925,
        description: "CUENTAS POR COBRAR A SOCIOS Y ACCIONISTAS"
    },
    {
        parent: 1399,
        code: 139930,
        description: "ANTICIPOS Y AVANCES"
    },
    {
        parent: 1399,
        code: 139932,
        description: "CUENTAS DE OPERACION CONJUNTA"
    },
    {
        parent: 1399,
        code: 139935,
        description: "DEPOSITOS"
    },
    {
        parent: 1399,
        code: 139940,
        description: "PROMESAS DE COMPRAVENTA"
    },
    {
        parent: 1399,
        code: 139945,
        description: "INGRESOS POR COBRAR"
    },
    {
        parent: 1399,
        code: 139950,
        description: "RETENCION SOBRE CONTRATOS"
    },
    {
        parent: 1399,
        code: 139955,
        description: "RECLAMACIONES"
    },
    {
        parent: 1399,
        code: 139960,
        description: "CUENTAS POR COBRAR A TRABAJADORES"
    },
    {
        parent: 1399,
        code: 139965,
        description: "PRESTAMOS A PARTICULARES"
    },
    {
        parent: 1399,
        code: 139975,
        description: "DEUDORES VARIOS"
    },
    {
        parent: 1399,
        code: 139980,
        description: "DERECHOS DE RECOMPRA DE CARTERA NEGOCIADA"
    },
    {
        parent: 1,
        code: 14,
        description: "INVENTARIOS"
    },
    {
        parent: 14,
        code: 1405,
        description: "MATERIAS PRIMAS"
    },
    {
        parent: 1405,
        code: 140599,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 14,
        code: 1410,
        description: "PRODUCTOS EN PROCESO"
    },
    {
        parent: 1410,
        code: 141099,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 14,
        code: 1415,
        description: "OBRAS DE CONSTRUCCION EN CURSO"
    },
    {
        parent: 1415,
        code: 141599,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 14,
        code: 1417,
        description: "OBRAS DE URBANISMO"
    },
    {
        parent: 1417,
        code: 141799,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 14,
        code: 1420,
        description: "CONTRATOS EN EJECUCION"
    },
    {
        parent: 1420,
        code: 142099,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 14,
        code: 1425,
        description: "CULTIVOS EN DESARROLLO"
    },
    {
        parent: 1425,
        code: 142599,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 14,
        code: 1430,
        description: "PRODUCTOS TERMINADOS"
    },
    {
        parent: 1430,
        code: 143005,
        description: "PRODUCTOS MANUFACTURADOS"
    },
    {
        parent: 1430,
        code: 143010,
        description: "PRODUCTOS EXTRAIDOS Y/O PROCESADOS"
    },
    {
        parent: 1430,
        code: 143015,
        description: "PRODUCTOS AGRICOLAS Y FORESTALES"
    },
    {
        parent: 1430,
        code: 143020,
        description: "SUBPRODUCTOS"
    },
    {
        parent: 1430,
        code: 143025,
        description: "PRODUCTOS DE PESCA"
    },
    {
        parent: 1430,
        code: 143099,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 14,
        code: 1435,
        description: "MERCANCIAS NO FABRICADAS POR LA EMPRESA"
    },
    {
        parent: 1435,
        code: 143599,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 14,
        code: 1440,
        description: "BIENES RAICES PARA LA VENTA"
    },
    {
        parent: 1440,
        code: 144099,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 14,
        code: 1445,
        description: "SEMOVIENTES"
    },
    {
        parent: 1445,
        code: 144505,
        description: "ESPECIES MAYORES"
    },
    {
        parent: 1445,
        code: 144510,
        description: "ESPECIES MENORES"
    },
    {
        parent: 1445,
        code: 144599,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 14,
        code: 1450,
        description: "TERRENOS"
    },
    {
        parent: 1450,
        code: 145005,
        description: "POR URBANIZAR"
    },
    {
        parent: 1450,
        code: 145010,
        description: "URBANIZADOS POR CONSTRUIR"
    },
    {
        parent: 1450,
        code: 145099,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 14,
        code: 1455,
        description: "MATERIALES, REPUESTOS Y ACCESORIOS"
    },
    {
        parent: 1455,
        code: 145505,
        description: "COMBUSTIBLES Y LUBRICANTES"
    },
    {
        parent: 1455,
        code: 145510,
        description: "ABONOS Y FERTILIZANTES"
    },
    {
        parent: 1455,
        code: 145515,
        description: "SEMILLAS TERMINADAS"
    },
    {
        parent: 1455,
        code: 145520,
        description: "FUNGICIDAS Y HERBICIDAS"
    },
    {
        parent: 1455,
        code: 145525,
        description: "MATERIALES Y REPUESTOS"
    },
    {
        parent: 1455,
        code: 145530,
        description: "LOZA Y CRISTALERIA"
    },
    {
        parent: 1455,
        code: 145535,
        description: "HERRAMIENTAS"
    },
    {
        parent: 1455,
        code: 145540,
        description: "MEDICINAS"
    },
    {
        parent: 1455,
        code: 145545,
        description: "ELEMENTOS HOSPITALARIOS"
    },
    {
        parent: 1455,
        code: 145550,
        description: "INSTRUMENTAL QUIRURGICO"
    },
    {
        parent: 1455,
        code: 145555,
        description: "DOTACION Y SUMINISTRO A TRABAJADORES"
    },
    {
        parent: 1455,
        code: 145560,
        description: "ELEMENTOS DE ROPERIA Y LENCERIA"
    },
    {
        parent: 1455,
        code: 145595,
        description: "OTROS"
    },
    {
        parent: 1455,
        code: 145599,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 14,
        code: 1460,
        description: "ENVASES Y EMPAQUES"
    },
    {
        parent: 1460,
        code: 146099,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 14,
        code: 1465,
        description: "INVENTARIOS EN TRANSITO"
    },
    {
        parent: 1465,
        code: 146599,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 14,
        code: 1499,
        description: "PROVISIONES"
    },
    {
        parent: 1499,
        code: 149905,
        description: "PARA OBSOLESCENCIA"
    },
    {
        parent: 1499,
        code: 149910,
        description: "PARA DIFERENCIA DE INVENTARIO FISICO"
    },
    {
        parent: 1499,
        code: 149915,
        description: "PARA PERDIDAS DE INVENTARIOS"
    },
    {
        parent: 1499,
        code: 149920,
        description: "LIFO"
    },
    {
        parent: 1,
        code: 15,
        description: "PROPIEDADES PLANTA Y EQUIPO"
    },
    {
        parent: 15,
        code: 1504,
        description: "TERRENOS"
    },
    {
        parent: 1504,
        code: 150405,
        description: "URBANOS"
    },
    {
        parent: 1504,
        code: 150410,
        description: "RURALES"
    },
    {
        parent: 1504,
        code: 150499,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 15,
        code: 1506,
        description: "MATERIALES PROYECTOS PETROLEROS"
    },
    {
        parent: 1506,
        code: 150605,
        description: "TUBERIAS Y EQUIPO"
    },
    {
        parent: 1506,
        code: 150610,
        description: "COSTOS DE IMPORTACION MATERIALES"
    },
    {
        parent: 1506,
        code: 150615,
        description: "PROYECTOS DE CONSTRUCCION"
    },
    {
        parent: 1506,
        code: 150699,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 15,
        code: 1508,
        description: "CONSTRUCCIONES EN CURSO"
    },
    {
        parent: 1508,
        code: 150805,
        description: "CONSTRUCCIONES Y EDIFICACIONES"
    },
    {
        parent: 1508,
        code: 150810,
        description: "ACUEDUCTOS PLANTAS Y REDES"
    },
    {
        parent: 1508,
        code: 150815,
        description: "VIAS DE COMUNICACION"
    },
    {
        parent: 1508,
        code: 150820,
        description: "POZOS ARTESIANOS"
    },
    {
        parent: 1508,
        code: 150825,
        description: "PROYECTOS DE EXPLORACION"
    },
    {
        parent: 1508,
        code: 150830,
        description: "PROYECTOS DE DESARROLLO"
    },
    {
        parent: 1508,
        code: 150899,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 15,
        code: 1512,
        description: "MAQUINARIA Y EQUIPOS EN MONTAJE"
    },
    {
        parent: 1512,
        code: 151205,
        description: "MAQUINARIA Y EQUIPO"
    },
    {
        parent: 1512,
        code: 151210,
        description: "EQUIPO DE OFICINA"
    },
    {
        parent: 1512,
        code: 151215,
        description: "EQUIPO DE COMPUTACION Y COMUNICACION"
    },
    {
        parent: 1512,
        code: 151220,
        description: "EQUIPO MEDICO-CIENTIFICO"
    },
    {
        parent: 1512,
        code: 151225,
        description: "EQUIPO DE HOTELES Y RESTAURANTES"
    },
    {
        parent: 1512,
        code: 151230,
        description: "FLOTA Y EQUIPO DE TRANSPORTE"
    },
    {
        parent: 1512,
        code: 151235,
        description: "FLOTA Y EQUIPO FLUVIAL Y/O MARITIMO"
    },
    {
        parent: 1512,
        code: 151240,
        description: "FLOTA Y EQUIPO AEREO"
    },
    {
        parent: 1512,
        code: 151245,
        description: "FLOTA Y EQUIPO FERREO"
    },
    {
        parent: 1512,
        code: 151250,
        description: "PLANTAS Y REDES"
    },
    {
        parent: 1512,
        code: 151299,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 15,
        code: 1516,
        description: "CONSTRUCCIONES Y EDIFICACIONES"
    },
    {
        parent: 1516,
        code: 151605,
        description: "EDIFICIOS"
    },
    {
        parent: 1516,
        code: 151610,
        description: "OFICINAS"
    },
    {
        parent: 1516,
        code: 151615,
        description: "ALMACENES"
    },
    {
        parent: 1516,
        code: 151620,
        description: "FABRICAS Y PLANTAS INDUSTRIALES"
    },
    {
        parent: 1516,
        code: 151625,
        description: "SALAS DE EXHIBICION Y VENTAS"
    },
    {
        parent: 1516,
        code: 151630,
        description: "CAFETERIA Y CASINOS"
    },
    {
        parent: 1516,
        code: 151635,
        description: "SILOS"
    },
    {
        parent: 1516,
        code: 151640,
        description: "INVERNADEROS"
    },
    {
        parent: 1516,
        code: 151645,
        description: "CASETAS Y CAMPAMENTOS"
    },
    {
        parent: 1516,
        code: 151650,
        description: "INSTALACIONES AGROPECUARIAS"
    },
    {
        parent: 1516,
        code: 151655,
        description: "VIVIENDAS PARA EMPLEADOS Y OBREROS"
    },
    {
        parent: 1516,
        code: 151660,
        description: "TERMINAL DE BUSES Y TAXIS"
    },
    {
        parent: 1516,
        code: 151663,
        description: "TERMINAL MARITIMO"
    },
    {
        parent: 1516,
        code: 151665,
        description: "TERMINAL FERREO"
    },
    {
        parent: 1516,
        code: 151670,
        description: "PARQUEADEROS, GARAJES Y DEPOSITOS"
    },
    {
        parent: 1516,
        code: 151675,
        description: "HANGARES"
    },
    {
        parent: 1516,
        code: 151680,
        description: "BODEGAS"
    },
    {
        parent: 1516,
        code: 151695,
        description: "OTROS"
    },
    {
        parent: 1516,
        code: 151699,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 15,
        code: 1520,
        description: "MAQUINARIA Y EQUIPO"
    },
    {
        parent: 1520,
        code: 152099,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 15,
        code: 1524,
        description: "EQUIPO DE OFICINA"
    },
    {
        parent: 1524,
        code: 152405,
        description: "MUEBLES Y ENSERES"
    },
    {
        parent: 1524,
        code: 152410,
        description: "EQUIPOS"
    },
    {
        parent: 1524,
        code: 152495,
        description: "OTROS"
    },
    {
        parent: 1524,
        code: 152499,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 15,
        code: 1528,
        description: "EQUIPO DE COMPUTACION Y COMUNICACION"
    },
    {
        parent: 1528,
        code: 152805,
        description: "EQUIPOS DE PROCESAMIENTO DE DATOS"
    },
    {
        parent: 1528,
        code: 152810,
        description: "EQUIPOS DE TELECOMUNICACIONES"
    },
    {
        parent: 1528,
        code: 152815,
        description: "EQUIPOS DE RADIO"
    },
    {
        parent: 1528,
        code: 152820,
        description: "SATELITES Y ANTENAS"
    },
    {
        parent: 1528,
        code: 152825,
        description: "LINEAS TELEFONICAS"
    },
    {
        parent: 1528,
        code: 152895,
        description: "OTROS"
    },
    {
        parent: 1528,
        code: 152899,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 15,
        code: 1532,
        description: "EQUIPO MEDICO - CIENTIFICO"
    },
    {
        parent: 1532,
        code: 153205,
        description: "MEDICO"
    },
    {
        parent: 1532,
        code: 153210,
        description: "ODONTOLOGICO"
    },
    {
        parent: 1532,
        code: 153215,
        description: "LABORATORIO"
    },
    {
        parent: 1532,
        code: 153220,
        description: "INSTRUMENTAL"
    },
    {
        parent: 1532,
        code: 153295,
        description: "OTROS"
    },
    {
        parent: 1532,
        code: 153299,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 15,
        code: 1536,
        description: "EQUIPO DE HOTELES Y RESTAURANTES"
    },
    {
        parent: 1536,
        code: 153605,
        description: "DE HABITACIONES"
    },
    {
        parent: 1536,
        code: 153610,
        description: "DE COMESTIBLES Y BEBIDAS"
    },
    {
        parent: 1536,
        code: 153695,
        description: "OTROS"
    },
    {
        parent: 1536,
        code: 153699,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 15,
        code: 1540,
        description: "FLOTA Y EQUIPO DE TRANSPORTE"
    },
    {
        parent: 1540,
        code: 154005,
        description: "AUTOS, CAMIONETAS Y CAMPEROS"
    },
    {
        parent: 1540,
        code: 154008,
        description: "CAMIONES, VOLQUETAS Y FURGONES"
    },
    {
        parent: 1540,
        code: 154010,
        description: "TRACTOMULAS Y REMOLQUES"
    },
    {
        parent: 1540,
        code: 154015,
        description: "BUSES Y BUSETAS"
    },
    {
        parent: 1540,
        code: 154017,
        description: "RECOLECTORES Y CONTENEDORES"
    },
    {
        parent: 1540,
        code: 154020,
        description: "MONTACARGAS"
    },
    {
        parent: 1540,
        code: 154025,
        description: "PALAS Y GRUAS"
    },
    {
        parent: 1540,
        code: 154030,
        description: "MOTOCICLETAS"
    },
    {
        parent: 1540,
        code: 154035,
        description: "BICICLETAS"
    },
    {
        parent: 1540,
        code: 154040,
        description: "ESTIBAS Y CARRETAS"
    },
    {
        parent: 1540,
        code: 154045,
        description: "BANDAS TRANSPORTADORAS"
    },
    {
        parent: 1540,
        code: 154095,
        description: "OTROS"
    },
    {
        parent: 1540,
        code: 154099,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 15,
        code: 1544,
        description: "FLOTA Y EQUIPO FLUVIAL Y/O MARITIMO"
    },
    {
        parent: 1544,
        code: 154405,
        description: "BUQUES"
    },
    {
        parent: 1544,
        code: 154410,
        description: "LANCHAS"
    },
    {
        parent: 1544,
        code: 154415,
        description: "REMOLCADORAS"
    },
    {
        parent: 1544,
        code: 154420,
        description: "BOTES"
    },
    {
        parent: 1544,
        code: 154425,
        description: "BOYAS"
    },
    {
        parent: 1544,
        code: 154430,
        description: "AMARRES"
    },
    {
        parent: 1544,
        code: 154435,
        description: "CONTENEDORES Y CHASSISES"
    },
    {
        parent: 1544,
        code: 154440,
        description: "GABARRAS"
    },
    {
        parent: 1544,
        code: 154495,
        description: "OTROS"
    },
    {
        parent: 1544,
        code: 154499,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 15,
        code: 1548,
        description: "FLOTA Y EQUIPO AEREO"
    },
    {
        parent: 1548,
        code: 154805,
        description: "AVIONES"
    },
    {
        parent: 1548,
        code: 154810,
        description: "AVIONETAS"
    },
    {
        parent: 1548,
        code: 154815,
        description: "HELICOPTEROS"
    },
    {
        parent: 1548,
        code: 154820,
        description: "TURBINAS Y MOTORES"
    },
    {
        parent: 1548,
        code: 154825,
        description: "MANUALES DE ENTRENAMIENTO PERSONAL TECNICO"
    },
    {
        parent: 1548,
        code: 154830,
        description: "EQUIPOS DE VUELO"
    },
    {
        parent: 1548,
        code: 154895,
        description: "OTROS"
    },
    {
        parent: 1548,
        code: 154899,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 15,
        code: 1552,
        description: "FLOTA Y EQUIPO FERREO"
    },
    {
        parent: 1552,
        code: 155205,
        description: "LOCOMOTORAS"
    },
    {
        parent: 1552,
        code: 155210,
        description: "VAGONES"
    },
    {
        parent: 1552,
        code: 155215,
        description: "REDES FERREAS"
    },
    {
        parent: 1552,
        code: 155295,
        description: "OTROS"
    },
    {
        parent: 1552,
        code: 155299,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 15,
        code: 1556,
        description: "ACUEDUCTOS PLANTAS Y REDES"
    },
    {
        parent: 1556,
        code: 155605,
        description: "INSTALACIONES PARA AGUA Y ENERGIA"
    },
    {
        parent: 1556,
        code: 155610,
        description: "ACUEDUCTO ACEQUIAS Y CANALIZACIONES"
    },
    {
        parent: 1556,
        code: 155615,
        description: "PLANTAS DE GENERACION HIDRAULICA"
    },
    {
        parent: 1556,
        code: 155620,
        description: "PLANTAS DE GENERACION TERMICA"
    },
    {
        parent: 1556,
        code: 155625,
        description: "PLANTAS DE GENERACION A GAS"
    },
    {
        parent: 1556,
        code: 155628,
        description: "PLANTAS DE GENERACION DIESEL, GASOLINA Y PETROLEO"
    },
    {
        parent: 1556,
        code: 155630,
        description: "PLANTAS DE DISTRIBUCION"
    },
    {
        parent: 1556,
        code: 155635,
        description: "PLANTAS DE TRANSMISION Y SUBESTACIONES"
    },
    {
        parent: 1556,
        code: 155640,
        description: "OLEODUCTOS"
    },
    {
        parent: 1556,
        code: 155645,
        description: "GASODUCTOS"
    },
    {
        parent: 1556,
        code: 155647,
        description: "POLIDUCTOS"
    },
    {
        parent: 1556,
        code: 155650,
        description: "REDES DE DISTRIBUCION"
    },
    {
        parent: 1556,
        code: 155655,
        description: "PLANTAS DE TRATAMIENTO"
    },
    {
        parent: 1556,
        code: 155660,
        description: "REDES DE RECOLECCION DE AGUAS NEGRAS"
    },
    {
        parent: 1556,
        code: 155665,
        description: "INSTALACIONES Y EQUIPO DE BOMBEO"
    },
    {
        parent: 1556,
        code: 155670,
        description: "REDES DE DISTRIBUCION DE VAPOR"
    },
    {
        parent: 1556,
        code: 155675,
        description: "REDES DE AIRE"
    },
    {
        parent: 1556,
        code: 155680,
        description: "REDES ALIMENTACION DE GAS"
    },
    {
        parent: 1556,
        code: 155682,
        description: "REDES EXTERNAS DE TELEFONIA"
    },
    {
        parent: 1556,
        code: 155685,
        description: "PLANTAS DESHIDRATADORAS"
    },
    {
        parent: 1556,
        code: 155695,
        description: "OTROS"
    },
    {
        parent: 1556,
        code: 155699,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 15,
        code: 1560,
        description: "ARMAMENTO DE VIGILANCIA"
    },
    {
        parent: 1560,
        code: 156099,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 15,
        code: 1562,
        description: "ENVASES Y EMPAQUES"
    },
    {
        parent: 1562,
        code: 156299,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 15,
        code: 1564,
        description: "PLANTACIONES AGRICOLAS Y FORESTALES"
    },
    {
        parent: 1564,
        code: 156405,
        description: "CULTIVOS EN DESARROLLO"
    },
    {
        parent: 1564,
        code: 156410,
        description: "CULTIVOS AMORTIZABLES"
    },
    {
        parent: 1564,
        code: 156499,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 15,
        code: 1568,
        description: "VIAS DE COMUNICACION"
    },
    {
        parent: 1568,
        code: 156805,
        description: "PAVIMENTACION Y PATIOS"
    },
    {
        parent: 1568,
        code: 156810,
        description: "VIAS"
    },
    {
        parent: 1568,
        code: 156815,
        description: "PUENTES"
    },
    {
        parent: 1568,
        code: 156820,
        description: "CALLES"
    },
    {
        parent: 1568,
        code: 156825,
        description: "AERODROMOS"
    },
    {
        parent: 1568,
        code: 156895,
        description: "OTROS"
    },
    {
        parent: 1568,
        code: 156899,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 15,
        code: 1572,
        description: "MINAS Y CANTERAS"
    },
    {
        parent: 1572,
        code: 157205,
        description: "MINAS"
    },
    {
        parent: 1572,
        code: 157210,
        description: "CANTERAS"
    },
    {
        parent: 1572,
        code: 157299,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 15,
        code: 1576,
        description: "POZOS ARTESIANOS"
    },
    {
        parent: 1576,
        code: 157699,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 15,
        code: 1580,
        description: "YACIMIENTOS"
    },
    {
        parent: 1580,
        code: 158099,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 15,
        code: 1584,
        description: "SEMOVIENTES"
    },
    {
        parent: 1584,
        code: 158405,
        description: "ESPECIES MENORES"
    },
    {
        parent: 1584,
        code: 158410,
        description: "ESPECIES MAYORES"
    },
    {
        parent: 1584,
        code: 158499,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 15,
        code: 1588,
        description: "PROPIEDADES PLANTA Y EQUIPO EN TRANSITO"
    },
    {
        parent: 1588,
        code: 158805,
        description: "MAQUINARIA Y EQUIPO"
    },
    {
        parent: 1588,
        code: 158810,
        description: "EQUIPO DE OFICINA"
    },
    {
        parent: 1588,
        code: 158815,
        description: "EQUIPO DE COMPUTACION Y COMUNICACION"
    },
    {
        parent: 1588,
        code: 158820,
        description: "EQUIPO MEDICO CIENTIFICO"
    },
    {
        parent: 1588,
        code: 158825,
        description: "EQUIPO DE HOTELES Y RESTAURANTES"
    },
    {
        parent: 1588,
        code: 158830,
        description: "FLOTA Y EQUIPO DE TRANSPORTE"
    },
    {
        parent: 1588,
        code: 158835,
        description: "FLOTA Y EQUIPO FLUVIAL Y/O MARITIMO"
    },
    {
        parent: 1588,
        code: 158840,
        description: "FLOTA Y EQUIPO AEREO"
    },
    {
        parent: 1588,
        code: 158845,
        description: "FLOTA Y EQUIPO FERREO"
    },
    {
        parent: 1588,
        code: 158850,
        description: "PLANTAS Y REDES"
    },
    {
        parent: 1588,
        code: 158855,
        description: "ARMAMENTO DE VIGILANCIA"
    },
    {
        parent: 1588,
        code: 158860,
        description: "SEMOVIENTES"
    },
    {
        parent: 1588,
        code: 158865,
        description: "ENVASES Y EMPAQUES"
    },
    {
        parent: 1588,
        code: 158899,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 15,
        code: 1592,
        description: "DEPRECIACION ACUMULADA"
    },
    {
        parent: 1592,
        code: 159205,
        description: "CONSTRUCCIONES Y EDIFICACIONES"
    },
    {
        parent: 1592,
        code: 159210,
        description: "MAQUINARIA Y EQUIPO"
    },
    {
        parent: 1592,
        code: 159215,
        description: "EQUIPO DE OFICINA"
    },
    {
        parent: 1592,
        code: 159220,
        description: "EQUIPO DE COMPUTACION Y COMUNICACION"
    },
    {
        parent: 1592,
        code: 159225,
        description: "EQUIPO MEDICO CIENTIFICO"
    },
    {
        parent: 1592,
        code: 159230,
        description: "EQUIPO DE HOTELES Y RESTAURANTES"
    },
    {
        parent: 1592,
        code: 159235,
        description: "FLOTA Y EQUIPO DE TRANSPORTE"
    },
    {
        parent: 1592,
        code: 159240,
        description: "FLOTA Y EQUIPO FLUVIAL Y/O MARITIMO"
    },
    {
        parent: 1592,
        code: 159245,
        description: "FLOTA Y EQUIPO AEREO"
    },
    {
        parent: 1592,
        code: 159250,
        description: "FLOTA Y EQUIPO FERREO"
    },
    {
        parent: 1592,
        code: 159255,
        description: "ACUEDUCTOS PLANTAS Y REDES"
    },
    {
        parent: 1592,
        code: 159260,
        description: "ARMAMENTO DE VIGILANCIA"
    },
    {
        parent: 1592,
        code: 159265,
        description: "ENVASES Y EMPAQUES"
    },
    {
        parent: 1592,
        code: 159299,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 15,
        code: 1596,
        description: "DEPRECIACION DIFERIDA"
    },
    {
        parent: 1596,
        code: 159605,
        description: "EXCESO FISCAL SOBRE LA CONTABLE"
    },
    {
        parent: 1596,
        code: 159610,
        description: "DEFECTO FISCAL SOBRE LA CONTABLE (CR)"
    },
    {
        parent: 1596,
        code: 159699,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 15,
        code: 1597,
        description: "AMORTIZACION ACUMULADA"
    },
    {
        parent: 1597,
        code: 159705,
        description: "PLANTACIONES AGRICOLAS Y FORESTALES"
    },
    {
        parent: 1597,
        code: 159710,
        description: "VIAS DE COMUNICACION"
    },
    {
        parent: 1597,
        code: 159715,
        description: "SEMOVIENTES"
    },
    {
        parent: 1597,
        code: 159799,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 15,
        code: 1598,
        description: "AGOTAMIENTO ACUMULADO"
    },
    {
        parent: 1598,
        code: 159805,
        description: "MINAS Y CANTERAS"
    },
    {
        parent: 1598,
        code: 159815,
        description: "POZOS ARTESIANOS"
    },
    {
        parent: 1598,
        code: 159820,
        description: "YACIMIENTOS"
    },
    {
        parent: 1598,
        code: 159899,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 15,
        code: 1599,
        description: "PROVISIONES"
    },
    {
        parent: 1599,
        code: 159904,
        description: "TERRENOS"
    },
    {
        parent: 1599,
        code: 159906,
        description: "MATERIALES PROYECTOS PETROLEROS"
    },
    {
        parent: 1599,
        code: 159908,
        description: "CONSTRUCCIONES EN CURSO"
    },
    {
        parent: 1599,
        code: 159912,
        description: "MAQUINARIA EN MONTAJE"
    },
    {
        parent: 1599,
        code: 159916,
        description: "CONSTRUCCIONES Y EDIFICACIONES"
    },
    {
        parent: 1599,
        code: 159920,
        description: "MAQUINARIA Y EQUIPO"
    },
    {
        parent: 1599,
        code: 159924,
        description: "EQUIPO DE OFICINA"
    },
    {
        parent: 1599,
        code: 159928,
        description: "EQUIPO DE COMPUTACION Y COMUNICACION"
    },
    {
        parent: 1599,
        code: 159932,
        description: "EQUIPO MEDICO CIENTIFICO"
    },
    {
        parent: 1599,
        code: 159936,
        description: "EQUIPO DE HOTELES Y RESTAURANTES"
    },
    {
        parent: 1599,
        code: 159940,
        description: "FLOTA Y EQUIPO DE TRANSPORTE"
    },
    {
        parent: 1599,
        code: 159944,
        description: "FLOTA Y EQUIPO FLUVIAL Y/O MARITIMO"
    },
    {
        parent: 1599,
        code: 159948,
        description: "FLOTA Y EQUIPO AEREO"
    },
    {
        parent: 1599,
        code: 159952,
        description: "FLOTA Y EQUIPO FERREO"
    },
    {
        parent: 1599,
        code: 159956,
        description: "ACUEDUCTOS, PLANTAS Y REDES"
    },
    {
        parent: 1599,
        code: 159960,
        description: "ARMAMENTO DE VIGILANCIA"
    },
    {
        parent: 1599,
        code: 159962,
        description: "ENVASES Y EMPAQUES"
    },
    {
        parent: 1599,
        code: 159964,
        description: "PLANTACIONES AGRICOLAS Y FORESTALES"
    },
    {
        parent: 1599,
        code: 159968,
        description: "VIAS DE COMUNICACION"
    },
    {
        parent: 1599,
        code: 159972,
        description: "MINAS Y CANTERAS"
    },
    {
        parent: 1599,
        code: 159980,
        description: "POZOS ARTESIANOS"
    },
    {
        parent: 1599,
        code: 159984,
        description: "YACIMIENTOS"
    },
    {
        parent: 1599,
        code: 159988,
        description: "SEMOVIENTES"
    },
    {
        parent: 1599,
        code: 159992,
        description: "PROPIEDADES PLANTA Y EQUIPO EN TRANSITO"
    },
    {
        parent: 1,
        code: 16,
        description: "INTANGIBLES"
    },
    {
        parent: 16,
        code: 1605,
        description: "CREDITO MERCANTIL"
    },
    {
        parent: 1605,
        code: 160505,
        description: "FORMADO O ESTIMADO"
    },
    {
        parent: 1605,
        code: 160510,
        description: "ADQUIRIDO O COMPRADO"
    },
    {
        parent: 1605,
        code: 160599,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 16,
        code: 1610,
        description: "MARCAS"
    },
    {
        parent: 1610,
        code: 161005,
        description: "ADQUIRIDAS"
    },
    {
        parent: 1610,
        code: 161010,
        description: "FORMADAS"
    },
    {
        parent: 1610,
        code: 161099,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 16,
        code: 1615,
        description: "PATENTES"
    },
    {
        parent: 1615,
        code: 161505,
        description: "ADQUIRIDAS"
    },
    {
        parent: 1615,
        code: 161510,
        description: "FORMADAS"
    },
    {
        parent: 1615,
        code: 161599,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 16,
        code: 1620,
        description: "CONCESIONES Y FRANQUICIAS"
    },
    {
        parent: 1620,
        code: 162005,
        description: "CONCESIONES"
    },
    {
        parent: 1620,
        code: 162010,
        description: "FRANQUICIAS"
    },
    {
        parent: 1620,
        code: 162099,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 16,
        code: 1625,
        description: "DERECHOS"
    },
    {
        parent: 1625,
        code: 162505,
        description: "DERECHOS DE AUTOR"
    },
    {
        parent: 1625,
        code: 162510,
        description: "PUESTO DE BOLSA"
    },
    {
        parent: 1625,
        code: 162515,
        description: "EN FIDEICOMISOS INMOBILIARIOS"
    },
    {
        parent: 1625,
        code: 162520,
        description: "EN FIDEICOMISOS DE GARANTIA"
    },
    {
        parent: 1625,
        code: 162525,
        description: "EN FIDEICOMISOS DE ADMINISTRACION"
    },
    {
        parent: 1625,
        code: 162595,
        description: "OTROS"
    },
    {
        parent: 1625,
        code: 162599,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 16,
        code: 1630,
        description: "KNOW HOW"
    },
    {
        parent: 1630,
        code: 163099,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 16,
        code: 1635,
        description: "LICENCIAS"
    },
    {
        parent: 1635,
        code: 163599,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 16,
        code: 1698,
        description: "AMORTIZACION ACUMULADA"
    },
    {
        parent: 1698,
        code: 169805,
        description: "CREDITO MERCANTIL"
    },
    {
        parent: 1698,
        code: 169810,
        description: "MARCAS"
    },
    {
        parent: 1698,
        code: 169815,
        description: "PATENTES"
    },
    {
        parent: 1698,
        code: 169820,
        description: "CONCESIONES Y FRANQUICIAS"
    },
    {
        parent: 1698,
        code: 169830,
        description: "DERECHOS"
    },
    {
        parent: 1698,
        code: 169835,
        description: "KNOW HOW"
    },
    {
        parent: 1698,
        code: 169840,
        description: "LICENCIAS"
    },
    {
        parent: 1698,
        code: 169899,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 16,
        code: 1699,
        description: "PROVISIONES"
    },
    {
        parent: 1,
        code: 17,
        description: "DIFERIDOS"
    },
    {
        parent: 17,
        code: 1705,
        description: "GASTOS PAGADOS POR ANTICIPADO"
    },
    {
        parent: 1705,
        code: 170505,
        description: "INTERESES"
    },
    {
        parent: 1705,
        code: 170510,
        description: "HONORARIOS"
    },
    {
        parent: 1705,
        code: 170515,
        description: "COMISIONES"
    },
    {
        parent: 1705,
        code: 170520,
        description: "SEGUROS Y FIANZAS"
    },
    {
        parent: 1705,
        code: 170525,
        description: "ARRENDAMIENTOS"
    },
    {
        parent: 1705,
        code: 170530,
        description: "BODEGAJES"
    },
    {
        parent: 1705,
        code: 170535,
        description: "MANTENIMIENTO EQUIPOS"
    },
    {
        parent: 1705,
        code: 170540,
        description: "SERVICIOS"
    },
    {
        parent: 1705,
        code: 170545,
        description: "SUSCRIPCIONES"
    },
    {
        parent: 1705,
        code: 170595,
        description: "OTROS"
    },
    {
        parent: 17,
        code: 1710,
        description: "CARGOS DIFERIDOS"
    },
    {
        parent: 1710,
        code: 171004,
        description: "ORGANIZACION Y PREOPERATIVOS"
    },
    {
        parent: 1710,
        code: 171008,
        description: "REMODELACIONES"
    },
    {
        parent: 1710,
        code: 171012,
        description: "ESTUDIOS, INVESTIGACIONES Y PROYECTOS"
    },
    {
        parent: 1710,
        code: 171016,
        description: "PROGRAMAS PARA COMPUTADOR (SOFTWARE)"
    },
    {
        parent: 1710,
        code: 171020,
        description: "UTILES Y PAPELERIA"
    },
    {
        parent: 1710,
        code: 171024,
        description: "MEJORAS A PROPIEDADES AJENAS"
    },
    {
        parent: 1710,
        code: 171028,
        description: "CONTRIBUCIONES Y AFILIACIONES"
    },
    {
        parent: 1710,
        code: 171032,
        description: "ENTRENAMIENTO DE PERSONAL"
    },
    {
        parent: 1710,
        code: 171036,
        description: "FERIAS Y EXPOSICIONES"
    },
    {
        parent: 1710,
        code: 171040,
        description: "LICENCIAS"
    },
    {
        parent: 1710,
        code: 171044,
        description: "PUBLICIDAD, PROPAGANDA Y AVISOS"
    },
    {
        parent: 1710,
        code: 171048,
        description: "ELEMENTOS DE ASEO Y CAFETERIA"
    },
    {
        parent: 1710,
        code: 171052,
        description: "MOLDES Y TROQUELES"
    },
    {
        parent: 1710,
        code: 171056,
        description: "INSTRUMENTAL QUIRURGICO"
    },
    {
        parent: 1710,
        code: 171060,
        description: "DOTACION Y SUMINISTRO A TRABAJADORES"
    },
    {
        parent: 1710,
        code: 171064,
        description: "ELEMENTOS DE ROPERIA Y LENCERIA"
    },
    {
        parent: 1710,
        code: 171068,
        description: "LOZA Y CRISTALERIA"
    },
    {
        parent: 1710,
        code: 171072,
        description: "DESCUENTO EN COLOCACION DE BONOS"
    },
    {
        parent: 1710,
        code: 171076,
        description: "IMPUESTO DE RENTA DIFERIDO \"DEBITOS\" POR DIFERENCIAS"
    },
    {
        parent: 1710,
        code: 171080,
        description: "CONCURSOS Y LICITACIONES"
    },
    {
        parent: 1710,
        code: 171095,
        description: "OTROS"
    },
    {
        parent: 1710,
        code: 171099,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 17,
        code: 1715,
        description: "COSTOS DE EXPLORACION POR AMORTIZAR"
    },
    {
        parent: 1715,
        code: 171505,
        description: "POZOS SECOS"
    },
    {
        parent: 1715,
        code: 171510,
        description: "POZOS NO COMERCIALES"
    },
    {
        parent: 1715,
        code: 171515,
        description: "OTROS COSTOS DE EXPLORACION"
    },
    {
        parent: 1715,
        code: 171599,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 17,
        code: 1720,
        description: "COSTOS DE EXPLOTACION Y DESARROLLO"
    },
    {
        parent: 1720,
        code: 172005,
        description: "PERFORACION Y EXPLOTACION"
    },
    {
        parent: 1720,
        code: 172010,
        description: "PERFORACIONES CAMPOS EN DESARROLLO"
    },
    {
        parent: 1720,
        code: 172015,
        description: "FACILIDADES DE PRODUCCION"
    },
    {
        parent: 1720,
        code: 172020,
        description: "SERVICIO A POZOS"
    },
    {
        parent: 1720,
        code: 172099,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 17,
        code: 1730,
        description: "CARGOS POR CORRECCION MONETARIA DIFERIDA"
    },
    {
        parent: 17,
        code: 1798,
        description: "AMORTIZACION ACUMULADA"
    },
    {
        parent: 1798,
        code: 179805,
        description: "COSTOS DE EXPLORACION POR AMORTIZAR"
    },
    {
        parent: 1798,
        code: 179810,
        description: "COSTOS DE EXPLOTACION Y DESARROLLO"
    },
    {
        parent: 1798,
        code: 179899,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 1,
        code: 18,
        description: "OTROS ACTIVOS"
    },
    {
        parent: 18,
        code: 1805,
        description: "BIENES DE ARTE Y CULTURA"
    },
    {
        parent: 1805,
        code: 180505,
        description: "OBRAS DE ARTE"
    },
    {
        parent: 1805,
        code: 180510,
        description: "BIBLIOTECAS"
    },
    {
        parent: 1805,
        code: 180595,
        description: "OTROS"
    },
    {
        parent: 1805,
        code: 180599,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 18,
        code: 1895,
        description: "DIVERSOS"
    },
    {
        parent: 1895,
        code: 189505,
        description: "MAQUINAS PORTEADORAS"
    },
    {
        parent: 1895,
        code: 189510,
        description: "BIENES ENTREGADOS EN COMODATO"
    },
    {
        parent: 1895,
        code: 189515,
        description: "AMORTIZACION ACUMULADA DE BIENES ENTREGADOS EN COMODATO (CR)"
    },
    {
        parent: 1895,
        code: 189520,
        description: "BIENES RECIBIDOS EN PAGO"
    },
    {
        parent: 1895,
        code: 189525,
        description: "DERECHOS SUCESORALES"
    },
    {
        parent: 1895,
        code: 189530,
        description: "ESTAMPILLAS"
    },
    {
        parent: 1895,
        code: 189595,
        description: "OTROS"
    },
    {
        parent: 1895,
        code: 189599,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 18,
        code: 1899,
        description: "PROVISIONES"
    },
    {
        parent: 1899,
        code: 189905,
        description: "BIENES DE ARTE Y CULTURA"
    },
    {
        parent: 1899,
        code: 189995,
        description: "DIVERSOS"
    },
    {
        parent: 1,
        code: 19,
        description: "VALORIZACIONES"
    },
    {
        parent: 19,
        code: 1905,
        description: "DE INVERSIONES"
    },
    {
        parent: 1905,
        code: 190505,
        description: "ACCIONES"
    },
    {
        parent: 1905,
        code: 190510,
        description: "CUOTAS O PARTES DE INTERES SOCIAL"
    },
    {
        parent: 1905,
        code: 190515,
        description: "DERECHOS FIDUCIARIOS"
    },
    {
        parent: 19,
        code: 1910,
        description: "DE PROPIEDADES PLANTA Y EQUIPO"
    },
    {
        parent: 1910,
        code: 191004,
        description: "TERRENOS"
    },
    {
        parent: 1910,
        code: 191006,
        description: "MATERIALES PROYECTOS PETROLEROS"
    },
    {
        parent: 1910,
        code: 191008,
        description: "CONSTRUCCIONES Y EDIFICACIONES"
    },
    {
        parent: 1910,
        code: 191012,
        description: "MAQUINARIA Y EQUIPO"
    },
    {
        parent: 1910,
        code: 191016,
        description: "EQUIPO DE OFICINA"
    },
    {
        parent: 1910,
        code: 191020,
        description: "EQUIPO DE COMPUTACION Y COMUNICACION"
    },
    {
        parent: 1910,
        code: 191024,
        description: "EQUIPO MEDICO CIENTIFICO"
    },
    {
        parent: 1910,
        code: 191028,
        description: "EQUIPO DE HOTELES Y RESTAURANTES"
    },
    {
        parent: 1910,
        code: 191032,
        description: "FLOTA Y EQUIPO DE TRANSPORTE"
    },
    {
        parent: 1910,
        code: 191036,
        description: "FLOTA Y EQUIPO FLUVIAL Y/O MARITIMO"
    },
    {
        parent: 1910,
        code: 191040,
        description: "FLOTA Y EQUIPO AEREO"
    },
    {
        parent: 1910,
        code: 191044,
        description: "FLOTA Y EQUIPO FERREO"
    },
    {
        parent: 1910,
        code: 191048,
        description: "ACUEDUCTOS PLANTAS Y REDES"
    },
    {
        parent: 1910,
        code: 191052,
        description: "ARMAMENTO DE VIGILANCIA"
    },
    {
        parent: 1910,
        code: 191056,
        description: "ENVASES Y EMPAQUES"
    },
    {
        parent: 1910,
        code: 191060,
        description: "PLANTACIONES AGRICOLAS Y FORESTALES"
    },
    {
        parent: 1910,
        code: 191064,
        description: "VIAS DE COMUNICACION"
    },
    {
        parent: 1910,
        code: 191068,
        description: "MINAS Y CANTERAS"
    },
    {
        parent: 1910,
        code: 191072,
        description: "POZOS ARTESIANOS"
    },
    {
        parent: 1910,
        code: 191076,
        description: "YACIMIENTOS"
    },
    {
        parent: 1910,
        code: 191080,
        description: "SEMOVIENTES"
    },
    {
        parent: 19,
        code: 1995,
        description: "DE OTROS ACTIVOS"
    },
    {
        parent: 1995,
        code: 199505,
        description: "BIENES DE ARTE Y CULTURA"
    },
    {
        parent: 1995,
        code: 199510,
        description: "BIENES ENTREGADOS EN COMODATO"
    },
    {
        parent: 1995,
        code: 199515,
        description: "BIENES RECIBIDOS EN PAGO"
    },
    {
        parent: 1995,
        code: 199520,
        description: "INVENTARIO DE SEMOVIENTES"
    },
    {
        parent: null,
        code: 2,
        description: "PASIVO"
    },
    {
        parent: 2,
        code: 21,
        description: "OBLIGACIONES FINANCIERAS"
    },
    {
        parent: 21,
        code: 2105,
        description: "BANCOS NACIONALES"
    },
    {
        parent: 2105,
        code: 210505,
        description: "SOBREGIROS"
    },
    {
        parent: 2105,
        code: 210510,
        description: "PAGARES"
    },
    {
        parent: 2105,
        code: 210515,
        description: "CARTAS DE CREDITO"
    },
    {
        parent: 2105,
        code: 210520,
        description: "ACEPTACIONES BANCARIAS"
    },
    {
        parent: 21,
        code: 2110,
        description: "BANCOS DEL EXTERIOR"
    },
    {
        parent: 2110,
        code: 211005,
        description: "SOBREGIROS"
    },
    {
        parent: 2110,
        code: 211010,
        description: "PAGARES"
    },
    {
        parent: 2110,
        code: 211015,
        description: "CARTAS DE CREDITO"
    },
    {
        parent: 2110,
        code: 211020,
        description: "ACEPTACIONES BANCARIAS"
    },
    {
        parent: 21,
        code: 2115,
        description: "CORPORACIONES FINANCIERAS"
    },
    {
        parent: 2115,
        code: 211505,
        description: "PAGARES"
    },
    {
        parent: 2115,
        code: 211510,
        description: "ACEPTACIONES FINANCIERAS"
    },
    {
        parent: 2115,
        code: 211515,
        description: "CARTAS DE CREDITO"
    },
    {
        parent: 21,
        code: 2120,
        description: "COMPAÑIAS DE FINANCIAMIENTO COMERCIAL"
    },
    {
        parent: 2120,
        code: 212005,
        description: "PAGARES"
    },
    {
        parent: 2120,
        code: 212010,
        description: "ACEPTACIONES FINANCIERAS"
    },
    {
        parent: 21,
        code: 2125,
        description: "CORPORACIONES DE AHORRO Y VIVIENDA"
    },
    {
        parent: 2125,
        code: 212505,
        description: "SOBREGIROS"
    },
    {
        parent: 2125,
        code: 212510,
        description: "PAGARES"
    },
    {
        parent: 2125,
        code: 212515,
        description: "HIPOTECARIAS"
    },
    {
        parent: 21,
        code: 2130,
        description: "ENTIDADES FINANCIERAS DEL EXTERIOR"
    },
    {
        parent: 21,
        code: 2135,
        description: "COMPROMISOS DE RECOMPRA DE INVERSIONES NEGOCIADAS"
    },
    {
        parent: 2135,
        code: 213505,
        description: "ACCIONES"
    },
    {
        parent: 2135,
        code: 213510,
        description: "CUOTAS O PARTES DE INTERES SOCIAL"
    },
    {
        parent: 2135,
        code: 213515,
        description: "BONOS"
    },
    {
        parent: 2135,
        code: 213520,
        description: "CEDULAS"
    },
    {
        parent: 2135,
        code: 213525,
        description: "CERTIFICADOS"
    },
    {
        parent: 2135,
        code: 213530,
        description: "PAPELES COMERCIALES"
    },
    {
        parent: 2135,
        code: 213535,
        description: "TITULOS"
    },
    {
        parent: 2135,
        code: 213540,
        description: "ACEPTACIONES BANCARIAS O FINANCIERAS"
    },
    {
        parent: 2135,
        code: 213595,
        description: "OTROS"
    },
    {
        parent: 21,
        code: 2140,
        description: "COMPROMISOS DE RECOMPRA DE CARTERA NEGOCIADA"
    },
    {
        parent: 21,
        code: 2145,
        description: "OBLIGACIONES GUBERNAMENTALES"
    },
    {
        parent: 2145,
        code: 214505,
        description: "GOBIERNO NACIONAL"
    },
    {
        parent: 2145,
        code: 214510,
        description: "ENTIDADES OFICIALES"
    },
    {
        parent: 21,
        code: 2195,
        description: "OTRAS OBLIGACIONES"
    },
    {
        parent: 2195,
        code: 219505,
        description: "PARTICULARES"
    },
    {
        parent: 2195,
        code: 219510,
        description: "COMPAÑIAS VINCULADAS"
    },
    {
        parent: 2195,
        code: 219515,
        description: "CASA MATRIZ"
    },
    {
        parent: 2195,
        code: 219520,
        description: "SOCIOS O ACCIONISTAS"
    },
    {
        parent: 2195,
        code: 219525,
        description: "FONDOS Y COOPERATIVAS"
    },
    {
        parent: 2195,
        code: 219595,
        description: "OTRAS"
    },
    {
        parent: 2,
        code: 22,
        description: "PROVEEDORES"
    },
    {
        parent: 22,
        code: 2205,
        description: "NACIONALES"
    },
    {
        parent: 22,
        code: 2210,
        description: "DEL EXTERIOR"
    },
    {
        parent: 22,
        code: 2215,
        description: "CUENTAS CORRIENTES COMERCIALES"
    },
    {
        parent: 22,
        code: 2220,
        description: "CASA MATRIZ"
    },
    {
        parent: 22,
        code: 2225,
        description: "COMPAÑIAS VINCULADAS"
    },
    {
        parent: 2,
        code: 23,
        description: "CUENTAS POR PAGAR"
    },
    {
        parent: 23,
        code: 2305,
        description: "CUENTAS CORRIENTES COMERCIALES"
    },
    {
        parent: 23,
        code: 2310,
        description: "A CASA MATRIZ"
    },
    {
        parent: 23,
        code: 2315,
        description: "A COMPAÑIAS VINCULADAS"
    },
    {
        parent: 23,
        code: 2320,
        description: "A CONTRATISTAS"
    },
    {
        parent: 23,
        code: 2330,
        description: "ORDENES DE COMPRA POR UTILIZAR"
    },
    {
        parent: 23,
        code: 2335,
        description: "COSTOS Y GASTOS POR  PAGAR"
    },
    {
        parent: 2335,
        code: 233505,
        description: "GASTOS FINANCIEROS"
    },
    {
        parent: 2335,
        code: 233510,
        description: "GASTOS LEGALES"
    },
    {
        parent: 2335,
        code: 233515,
        description: "LIBROS, SUSCRIPCIONES, PERIODICOS Y REVISTAS"
    },
    {
        parent: 2335,
        code: 233520,
        description: "COMISIONES"
    },
    {
        parent: 2335,
        code: 233525,
        description: "HONORARIOS"
    },
    {
        parent: 2335,
        code: 233530,
        description: "SERVICIOS TECNICOS"
    },
    {
        parent: 2335,
        code: 233535,
        description: "SERVICIOS DE MANTENIMIENTO"
    },
    {
        parent: 2335,
        code: 233540,
        description: "ARRENDAMIENTOS"
    },
    {
        parent: 2335,
        code: 233545,
        description: "TRANSPORTES, FLETES Y ACARREOS"
    },
    {
        parent: 2335,
        code: 233550,
        description: "SERVICIOS PUBLICOS"
    },
    {
        parent: 2335,
        code: 233555,
        description: "SEGUROS"
    },
    {
        parent: 2335,
        code: 233560,
        description: "GASTOS DE VIAJE"
    },
    {
        parent: 2335,
        code: 233565,
        description: "GASTOS DE REPRESENTACION Y RELACIONES PUBLICAS"
    },
    {
        parent: 2335,
        code: 233570,
        description: "SERVICIOS ADUANEROS"
    },
    {
        parent: 2335,
        code: 233595,
        description: "OTROS"
    },
    {
        parent: 23,
        code: 2340,
        description: "INSTALAMENTOS POR PAGAR"
    },
    {
        parent: 23,
        code: 2345,
        description: "ACREEDORES OFICIALES"
    },
    {
        parent: 23,
        code: 2350,
        description: "REGALIAS POR PAGAR"
    },
    {
        parent: 23,
        code: 2355,
        description: "DEUDAS CON ACCIONISTAS O SOCIOS"
    },
    {
        parent: 2355,
        code: 235505,
        description: "ACCIONISTAS"
    },
    {
        parent: 2355,
        code: 235510,
        description: "SOCIOS"
    },
    {
        parent: 23,
        code: 2360,
        description: "DIVIDENDOS O PARTICIPACIONES POR PAGAR"
    },
    {
        parent: 2360,
        code: 236005,
        description: "DIVIDENDOS"
    },
    {
        parent: 2360,
        code: 236010,
        description: "PARTICIPACIONES"
    },
    {
        parent: 23,
        code: 2365,
        description: "RETENCION EN LA FUENTE"
    },
    {
        parent: 2365,
        code: 236505,
        description: "SALARIOS Y PAGOS LABORALES"
    },
    {
        parent: 2365,
        code: 236510,
        description: "DIVIDENDOS Y/O PARTICIPACIONES"
    },
    {
        parent: 2365,
        code: 236515,
        description: "HONORARIOS"
    },
    {
        parent: 2365,
        code: 236520,
        description: "COMISIONES"
    },
    {
        parent: 2365,
        code: 236525,
        description: "SERVICIOS"
    },
    {
        parent: 2365,
        code: 236530,
        description: "ARRENDAMIENTOS"
    },
    {
        parent: 2365,
        code: 236535,
        description: "RENDIMIENTOS FINANCIEROS"
    },
    {
        parent: 2365,
        code: 236540,
        description: "COMPRAS"
    },
    {
        parent: 2365,
        code: 236545,
        description: "LOTERIAS, RIFAS, APUESTAS Y SIMILARES"
    },
    {
        parent: 2365,
        code: 236550,
        description: "POR PAGOS AL EXTERIOR"
    },
    {
        parent: 2365,
        code: 236555,
        description: "POR INGRESOS OBTENIDOS EN EL EXTERIOR"
    },
    {
        parent: 2365,
        code: 236560,
        description: "ENAJENACION PROPIEDADES PLANTA Y EQUIPO PERSONAS NATURALES"
    },
    {
        parent: 2365,
        code: 236565,
        description: "POR IMPUESTO DE TIMBRE"
    },
    {
        parent: 2365,
        code: 236570,
        description: "OTRAS RETENCIONES Y PATRIMONIO"
    },
    {
        parent: 2365,
        code: 236575,
        description: "AUTORRETENCIONES"
    },
    {
        parent: 23,
        code: 2370,
        description: "RETENCIONES Y APORTES DE NOMINA"
    },
    {
        parent: 2370,
        code: 237005,
        description: "APORTES AL I.S.S."
    },
    {
        parent: 2370,
        code: 237010,
        description: "APORTES AL I.C.B.F., SENA Y CAJAS DE COMPENSACION"
    },
    {
        parent: 2370,
        code: 237015,
        description: "APORTES AL F.I.C."
    },
    {
        parent: 2370,
        code: 237025,
        description: "EMBARGOS JUDICIALES"
    },
    {
        parent: 2370,
        code: 237030,
        description: "LIBRANZAS"
    },
    {
        parent: 2370,
        code: 237035,
        description: "SINDICATOS"
    },
    {
        parent: 2370,
        code: 237040,
        description: "COOPERATIVAS"
    },
    {
        parent: 2370,
        code: 237045,
        description: "FONDOS"
    },
    {
        parent: 2370,
        code: 237095,
        description: "OTROS"
    },
    {
        parent: 23,
        code: 2375,
        description: "CUOTAS POR DEVOLVER"
    },
    {
        parent: 23,
        code: 2380,
        description: "ACREEDORES VARIOS"
    },
    {
        parent: 2380,
        code: 238005,
        description: "DEPOSITARIOS"
    },
    {
        parent: 2380,
        code: 238010,
        description: "COMISIONISTAS DE BOLSAS"
    },
    {
        parent: 2380,
        code: 238015,
        description: "SOCIEDAD ADMINISTRADORA - FONDOS DE INVERSION"
    },
    {
        parent: 2380,
        code: 238020,
        description: "REINTEGROS POR PAGAR"
    },
    {
        parent: 2380,
        code: 238025,
        description: "FONDO DE PERSEVERANCIA"
    },
    {
        parent: 2380,
        code: 238030,
        description: "FONDOS DE CESANTIAS Y/O PENSIONES"
    },
    {
        parent: 2380,
        code: 238035,
        description: "DONACIONES ASIGNADAS POR PAGAR"
    },
    {
        parent: 2380,
        code: 238095,
        description: "OTROS"
    },
    {
        parent: 2,
        code: 24,
        description: "IMPUESTOS, GRAVAMENES Y TASAS"
    },
    {
        parent: 24,
        code: 2404,
        description: "DE RENTA Y COMPLEMENTARIOS"
    },
    {
        parent: 2404,
        code: 240405,
        description: "VIGENCIA FISCAL CORRIENTE"
    },
    {
        parent: 2404,
        code: 240410,
        description: "VIGENCIAS FISCALES ANTERIORES"
    },
    {
        parent: 24,
        code: 2408,
        description: "IMPUESTO SOBRE LAS VENTAS POR PAGAR"
    },
    {
        parent: 24,
        code: 2412,
        description: "DE INDUSTRIA Y COMERCIO"
    },
    {
        parent: 2412,
        code: 241205,
        description: "VIGENCIA FISCAL CORRIENTE"
    },
    {
        parent: 2412,
        code: 241210,
        description: "VIGENCIAS FISCALES ANTERIORES"
    },
    {
        parent: 24,
        code: 2416,
        description: "A LA PROPIEDAD RAIZ"
    },
    {
        parent: 24,
        code: 2420,
        description: "DERECHOS SOBRE INSTRUMENTOS PUBLICOS"
    },
    {
        parent: 24,
        code: 2424,
        description: "DE VALORIZACION"
    },
    {
        parent: 2424,
        code: 242405,
        description: "VIGENCIA FISCAL CORRIENTE"
    },
    {
        parent: 2424,
        code: 242410,
        description: "VIGENCIAS FISCALES ANTERIORES"
    },
    {
        parent: 24,
        code: 2428,
        description: "DE TURISMO"
    },
    {
        parent: 24,
        code: 2432,
        description: "TASA POR UTILIZACION DE PUERTOS"
    },
    {
        parent: 24,
        code: 2436,
        description: "DE VEHICULOS"
    },
    {
        parent: 2436,
        code: 243605,
        description: "VIGENCIA FISCAL CORRIENTE"
    },
    {
        parent: 2436,
        code: 243610,
        description: "VIGENCIAS FISCALES ANTERIORES"
    },
    {
        parent: 24,
        code: 2440,
        description: "DE ESPECTACULOS PUBLICOS"
    },
    {
        parent: 24,
        code: 2444,
        description: "DE HIDROCARBUROS Y MINAS"
    },
    {
        parent: 2444,
        code: 244405,
        description: "DE HIDROCARBUROS"
    },
    {
        parent: 2444,
        code: 244410,
        description: "DE MINAS"
    },
    {
        parent: 24,
        code: 2448,
        description: "REGALIAS E IMPUESTOS A LA PEQUEÑA Y MEDIANA MINERIA"
    },
    {
        parent: 24,
        code: 2452,
        description: "A LAS EXPORTACIONES CAFETERAS"
    },
    {
        parent: 24,
        code: 2456,
        description: "A LAS IMPORTACIONES"
    },
    {
        parent: 24,
        code: 2460,
        description: "CUOTAS DE FOMENTO"
    },
    {
        parent: 24,
        code: 2464,
        description: "DE LICORES, CERVEZAS Y CIGARRILLOS"
    },
    {
        parent: 2464,
        code: 246405,
        description: "DE LICORES"
    },
    {
        parent: 2464,
        code: 246410,
        description: "DE CERVEZAS"
    },
    {
        parent: 2464,
        code: 246415,
        description: "DE CIGARRILLOS"
    },
    {
        parent: 24,
        code: 2468,
        description: "AL SACRIFICIO DE GANADO"
    },
    {
        parent: 24,
        code: 2472,
        description: "AL AZAR Y JUEGOS"
    },
    {
        parent: 24,
        code: 2495,
        description: "OTROS"
    },
    {
        parent: 2,
        code: 25,
        description: "OBLIGACIONES LABORALES"
    },
    {
        parent: 25,
        code: 2505,
        description: "SALARIOS POR PAGAR"
    },
    {
        parent: 25,
        code: 2510,
        description: "CESANTIAS CONSOLIDADAS"
    },
    {
        parent: 2510,
        code: 251005,
        description: "LEY LABORAL ANTERIOR"
    },
    {
        parent: 2510,
        code: 251010,
        description: "LEY 50 DE 1990 Y NORMAS POSTERIORES"
    },
    {
        parent: 25,
        code: 2515,
        description: "INTERESES SOBRE CESANTIAS"
    },
    {
        parent: 25,
        code: 2520,
        description: "PRIMA DE SERVICIOS"
    },
    {
        parent: 25,
        code: 2525,
        description: "VACACIONES CONSOLIDADAS"
    },
    {
        parent: 2525,
        code: 252501,
        description: "a 252598"
    },
    {
        parent: 25,
        code: 2530,
        description: "PRESTACIONES EXTRALEGALES"
    },
    {
        parent: 2530,
        code: 253005,
        description: "PRIMAS"
    },
    {
        parent: 2530,
        code: 253010,
        description: "AUXILIOS"
    },
    {
        parent: 2530,
        code: 253015,
        description: "DOTACION Y SUMINISTRO A TRABAJADORES"
    },
    {
        parent: 2530,
        code: 253020,
        description: "BONIFICACIONES"
    },
    {
        parent: 2530,
        code: 253025,
        description: "SEGUROS"
    },
    {
        parent: 2530,
        code: 253095,
        description: "OTRAS"
    },
    {
        parent: 25,
        code: 2532,
        description: "PENSIONES POR PAGAR"
    },
    {
        parent: 25,
        code: 2535,
        description: "CUOTAS PARTES PENSIONES DE JUBILACION"
    },
    {
        parent: 25,
        code: 2540,
        description: "INDEMNIZACIONES LABORALES"
    },
    {
        parent: 2,
        code: 26,
        description: "PASIVOS ESTIMADOS Y PROVISIONES"
    },
    {
        parent: 26,
        code: 2605,
        description: "PARA COSTOS Y GASTOS"
    },
    {
        parent: 2605,
        code: 260505,
        description: "INTERESES"
    },
    {
        parent: 2605,
        code: 260510,
        description: "COMISIONES"
    },
    {
        parent: 2605,
        code: 260515,
        description: "HONORARIOS"
    },
    {
        parent: 2605,
        code: 260520,
        description: "SERVICIOS TECNICOS"
    },
    {
        parent: 2605,
        code: 260525,
        description: "TRANSPORTES, FLETES Y ACARREOS"
    },
    {
        parent: 2605,
        code: 260530,
        description: "GASTOS DE VIAJE"
    },
    {
        parent: 2605,
        code: 260535,
        description: "SERVICIOS PUBLICOS"
    },
    {
        parent: 2605,
        code: 260540,
        description: "REGALIAS"
    },
    {
        parent: 2605,
        code: 260545,
        description: "GARANTIAS"
    },
    {
        parent: 2605,
        code: 260550,
        description: "MATERIALES Y REPUESTOS"
    },
    {
        parent: 2605,
        code: 260595,
        description: "OTROS"
    },
    {
        parent: 26,
        code: 2610,
        description: "PARA OBLIGACIONES LABORALES"
    },
    {
        parent: 2610,
        code: 261005,
        description: "CESANTIAS"
    },
    {
        parent: 2610,
        code: 261010,
        description: "INTERESES SOBRE CESANTIAS"
    },
    {
        parent: 2610,
        code: 261015,
        description: "VACACIONES"
    },
    {
        parent: 2610,
        code: 261020,
        description: "PRIMA DE SERVICIOS"
    },
    {
        parent: 2610,
        code: 261025,
        description: "PRESTACIONES EXTRALEGALES"
    },
    {
        parent: 2610,
        code: 261030,
        description: "VIATICOS"
    },
    {
        parent: 2610,
        code: 261095,
        description: "OTRAS"
    },
    {
        parent: 26,
        code: 2615,
        description: "PARA OBLIGACIONES FISCALES"
    },
    {
        parent: 2615,
        code: 261505,
        description: "DE RENTA Y COMPLEMENTARIOS"
    },
    {
        parent: 2615,
        code: 261510,
        description: "DE INDUSTRIA Y COMERCIO"
    },
    {
        parent: 2615,
        code: 261515,
        description: "TASA POR UTILIZACION DE PUERTOS"
    },
    {
        parent: 2615,
        code: 261520,
        description: "DE VEHICULOS"
    },
    {
        parent: 2615,
        code: 261525,
        description: "DE HIDROCARBUROS Y MINAS"
    },
    {
        parent: 2615,
        code: 261595,
        description: "OTROS"
    },
    {
        parent: 26,
        code: 2620,
        description: "PENSIONES DE JUBILACION"
    },
    {
        parent: 2620,
        code: 262005,
        description: "CALCULO ACTUARIAL PENSIONES DE JUBILACION"
    },
    {
        parent: 2620,
        code: 262010,
        description: "PENSIONES DE JUBILACION POR AMORTIZAR (DB)"
    },
    {
        parent: 26,
        code: 2625,
        description: "PARA OBRAS DE URBANISMO"
    },
    {
        parent: 2625,
        code: 262505,
        description: "ACUEDUCTO Y ALCANTARILLADO"
    },
    {
        parent: 2625,
        code: 262510,
        description: "ENERGIA ELECTRICA"
    },
    {
        parent: 2625,
        code: 262515,
        description: "TELEFONOS"
    },
    {
        parent: 2625,
        code: 262595,
        description: "OTROS"
    },
    {
        parent: 26,
        code: 2630,
        description: "PARA MANTENIMIENTO Y REPARACIONES"
    },
    {
        parent: 2630,
        code: 263005,
        description: "TERRENOS"
    },
    {
        parent: 2630,
        code: 263010,
        description: "CONSTRUCCIONES Y EDIFICACIONES"
    },
    {
        parent: 2630,
        code: 263015,
        description: "MAQUINARIA Y EQUIPO"
    },
    {
        parent: 2630,
        code: 263020,
        description: "EQUIPO DE OFICINA"
    },
    {
        parent: 2630,
        code: 263025,
        description: "EQUIPO DE COMPUTACION Y COMUNICACION"
    },
    {
        parent: 2630,
        code: 263030,
        description: "EQUIPO MEDICO - CIENTIFICO"
    },
    {
        parent: 2630,
        code: 263035,
        description: "EQUIPO DE HOTELES Y RESTAURANTES"
    },
    {
        parent: 2630,
        code: 263040,
        description: "FLOTA Y EQUIPO DE TRANSPORTE"
    },
    {
        parent: 2630,
        code: 263045,
        description: "FLOTA Y EQUIPO FLUVIAL Y/O MARITIMO"
    },
    {
        parent: 2630,
        code: 263050,
        description: "FLOTA Y EQUIPO AEREO"
    },
    {
        parent: 2630,
        code: 263055,
        description: "FLOTA Y EQUIPO FERREO"
    },
    {
        parent: 2630,
        code: 263060,
        description: "ACUEDUCTOS PLANTAS Y REDES"
    },
    {
        parent: 2630,
        code: 263065,
        description: "ARMAMENTO DE VIGILANCIA"
    },
    {
        parent: 2630,
        code: 263070,
        description: "ENVASES Y EMPAQUES"
    },
    {
        parent: 2630,
        code: 263075,
        description: "PLANTACIONES AGRICOLAS Y FORESTALES"
    },
    {
        parent: 2630,
        code: 263080,
        description: "VIAS DE CUMUNICACION"
    },
    {
        parent: 2630,
        code: 263085,
        description: "POZOS ARTESIANOS"
    },
    {
        parent: 2630,
        code: 263095,
        description: "OTROS"
    },
    {
        parent: 26,
        code: 2635,
        description: "PARA CONTINGENCIAS"
    },
    {
        parent: 2635,
        code: 263505,
        description: "MULTAS Y SANCIONES AUTORIDADES ADMINISTRATIVAS"
    },
    {
        parent: 2635,
        code: 263510,
        description: "INTERESES POR MULTAS Y SANCIONES"
    },
    {
        parent: 2635,
        code: 263515,
        description: "RECLAMOS"
    },
    {
        parent: 2635,
        code: 263520,
        description: "LABORALES"
    },
    {
        parent: 2635,
        code: 263525,
        description: "CIVILES"
    },
    {
        parent: 2635,
        code: 263530,
        description: "PENALES"
    },
    {
        parent: 2635,
        code: 263535,
        description: "ADMINISTRATIVOS"
    },
    {
        parent: 2635,
        code: 263540,
        description: "COMERCIALES"
    },
    {
        parent: 2635,
        code: 263595,
        description: "OTRAS"
    },
    {
        parent: 26,
        code: 2640,
        description: "PARA OBLIGACIONES DE GARANTIAS"
    },
    {
        parent: 26,
        code: 2695,
        description: "PROVISIONES DIVERSAS"
    },
    {
        parent: 2695,
        code: 269505,
        description: "PARA BENEFICENCIA"
    },
    {
        parent: 2695,
        code: 269510,
        description: "PARA COMUNICACIONES"
    },
    {
        parent: 2695,
        code: 269515,
        description: "PARA PERDIDA EN TRANSPORTE"
    },
    {
        parent: 2695,
        code: 269520,
        description: "PARA OPERACION"
    },
    {
        parent: 2695,
        code: 269525,
        description: "PARA PROTECCION DE BIENES AGOTABLES"
    },
    {
        parent: 2695,
        code: 269530,
        description: "PARA AJUSTES EN REDENCION DE UNIDADES"
    },
    {
        parent: 2695,
        code: 269535,
        description: "AUTOSEGURO"
    },
    {
        parent: 2695,
        code: 269540,
        description: "PLANES Y PROGRAMAS DE REFORESTACION Y ELECTRIFICACION"
    },
    {
        parent: 2695,
        code: 269595,
        description: "OTRAS"
    },
    {
        parent: 2,
        code: 27,
        description: "DIFERIDOS"
    },
    {
        parent: 27,
        code: 2705,
        description: "INGRESOS RECIBIDOS POR ANTICIPADO"
    },
    {
        parent: 2705,
        code: 270505,
        description: "INTERESES"
    },
    {
        parent: 2705,
        code: 270510,
        description: "COMISIONES"
    },
    {
        parent: 2705,
        code: 270515,
        description: "ARRENDAMIENTOS"
    },
    {
        parent: 2705,
        code: 270520,
        description: "HONORARIOS"
    },
    {
        parent: 2705,
        code: 270525,
        description: "SERVICIOS TECNICOS"
    },
    {
        parent: 2705,
        code: 270530,
        description: "DE SUSCRIPTORES"
    },
    {
        parent: 2705,
        code: 270535,
        description: "TRANSPORTES, FLETES Y ACARREOS"
    },
    {
        parent: 2705,
        code: 270540,
        description: "MERCANCIA EN TRANSITO YA VENDIDA"
    },
    {
        parent: 2705,
        code: 270545,
        description: "MATRICULAS Y PENSIONES"
    },
    {
        parent: 2705,
        code: 270550,
        description: "CUOTAS DE ADMINISTRACION"
    },
    {
        parent: 2705,
        code: 270595,
        description: "OTROS"
    },
    {
        parent: 27,
        code: 2710,
        description: "ABONOS DIFERIDOS"
    },
    {
        parent: 2710,
        code: 271005,
        description: "REAJUSTE DEL SISTEMA"
    },
    {
        parent: 27,
        code: 2715,
        description: "UTILIDAD DIFERIDA EN VENTAS A PLAZOS"
    },
    {
        parent: 27,
        code: 2720,
        description: "CREDITO POR CORRECCION MONETARIA DIFERIDA"
    },
    {
        parent: 27,
        code: 2725,
        description: "IMPUESTOS DIFERIDOS"
    },
    {
        parent: 2725,
        code: 272505,
        description: "POR DEPRECIACION FLEXIBLE"
    },
    {
        parent: 2725,
        code: 272595,
        description: "DIVERSOS"
    },
    {
        parent: 2725,
        code: 272599,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 2,
        code: 28,
        description: "OTROS PASIVOS"
    },
    {
        parent: 28,
        code: 2805,
        description: "ANTICIPOS Y AVANCES RECIBIDOS"
    },
    {
        parent: 2805,
        code: 280505,
        description: "DE CLIENTES"
    },
    {
        parent: 2805,
        code: 280510,
        description: "SOBRE CONTRATOS"
    },
    {
        parent: 2805,
        code: 280515,
        description: "PARA OBRAS EN PROCESO"
    },
    {
        parent: 2805,
        code: 280595,
        description: "OTROS"
    },
    {
        parent: 28,
        code: 2810,
        description: "DEPOSITOS RECIBIDOS"
    },
    {
        parent: 2810,
        code: 281005,
        description: "PARA FUTURA SUSCRIPCION DE ACCIONES"
    },
    {
        parent: 2810,
        code: 281010,
        description: "PARA FUTURO PAGO DE CUOTAS O DERECHOS SOCIALES"
    },
    {
        parent: 2810,
        code: 281015,
        description: "PARA GARANTIA EN LA PRESTACION DE SERVICIOS"
    },
    {
        parent: 2810,
        code: 281020,
        description: "PARA GARANTIA DE CONTRATOS"
    },
    {
        parent: 2810,
        code: 281025,
        description: "DE LICITACIONES"
    },
    {
        parent: 2810,
        code: 281030,
        description: "DE MANEJO DE BIENES"
    },
    {
        parent: 2810,
        code: 281035,
        description: "FONDO DE RESERVA"
    },
    {
        parent: 2810,
        code: 281095,
        description: "OTROS"
    },
    {
        parent: 28,
        code: 2815,
        description: "INGRESOS RECIBIDOS PARA TERCEROS"
    },
    {
        parent: 2815,
        code: 281505,
        description: "VALORES RECIBIDOS PARA TERCEROS"
    },
    {
        parent: 2815,
        code: 281510,
        description: "VENTA POR CUENTA DE TERCEROS"
    },
    {
        parent: 28,
        code: 2820,
        description: "CUENTAS DE OPERACION CONJUNTA"
    },
    {
        parent: 28,
        code: 2825,
        description: "RETENCIONES A TERCEROS SOBRE CONTRATOS"
    },
    {
        parent: 2825,
        code: 282505,
        description: "CUMPLIMIENTO OBLIGACIONES LABORALES"
    },
    {
        parent: 2825,
        code: 282510,
        description: "PARA ESTABILIDAD DE OBRA"
    },
    {
        parent: 2825,
        code: 282515,
        description: "GARANTIA CUMPLIMIENTO DE CONTRATOS"
    },
    {
        parent: 28,
        code: 2830,
        description: "EMBARGOS JUDICIALES"
    },
    {
        parent: 2830,
        code: 283005,
        description: "INDEMNIZACIONES"
    },
    {
        parent: 2830,
        code: 283010,
        description: "DEPOSITOS JUDICIALES"
    },
    {
        parent: 28,
        code: 2835,
        description: "ACREEDORES DEL SISTEMA"
    },
    {
        parent: 2835,
        code: 283505,
        description: "CUOTAS NETAS"
    },
    {
        parent: 2835,
        code: 283510,
        description: "GRUPOS EN FORMACION"
    },
    {
        parent: 28,
        code: 2840,
        description: "CUENTAS EN PARTICIPACION"
    },
    {
        parent: 28,
        code: 2895,
        description: "DIVERSOS"
    },
    {
        parent: 2895,
        code: 289505,
        description: "PRESTAMOS DE PRODUCTOS"
    },
    {
        parent: 2895,
        code: 289510,
        description: "REEMBOLSO DE COSTOS EXPLORATORIOS"
    },
    {
        parent: 2895,
        code: 289515,
        description: "PROGRAMA DE EXTENSION AGROPECUARIA"
    },
    {
        parent: 2,
        code: 29,
        description: "BONOS Y PAPELES COMERCIALES"
    },
    {
        parent: 29,
        code: 2905,
        description: "BONOS EN CIRCULACION"
    },
    {
        parent: 2905,
        code: 290505,
        description: "GARANTIA GENERAL"
    },
    {
        parent: 2905,
        code: 290510,
        description: "GARANTIA ESPECIFICA"
    },
    {
        parent: 29,
        code: 2910,
        description: "BONOS OBLIGATORIAMENTE CONVERTIBLES EN ACCIONES"
    },
    {
        parent: 29,
        code: 2915,
        description: "PAPELES COMERCIALES"
    },
    {
        parent: null,
        code: 3,
        description: "PATRIMONIO"
    },
    {
        parent: 3,
        code: 31,
        description: "CAPITAL SOCIAL"
    },
    {
        parent: 31,
        code: 3105,
        description: "CAPITAL SUSCRITO Y PAGADO"
    },
    {
        parent: 3105,
        code: 310505,
        description: "CAPITAL AUTORIZADO"
    },
    {
        parent: 3105,
        code: 310510,
        description: "CAPITAL POR SUSCRIBIR (DB)"
    },
    {
        parent: 3105,
        code: 310515,
        description: "CAPITAL SUSCRITO POR COBRAR (DB)"
    },
    {
        parent: 31,
        code: 3110,
        description: "ACCIONES, CUOTAS O PARTES DE INTERES SOCIAL PROPIAS READQUIRIDAS (DB)"
    },
    {
        parent: 3110,
        code: 311005,
        description: "ACCIONES PROPIAS READQUIRIDAS (DB)"
    },
    {
        parent: 3110,
        code: 311010,
        description: "CUOTAS O PARTES DE INTERES SOCIAL PROPIAS READQUIRIDAS (DB)"
    },
    {
        parent: 31,
        code: 3115,
        description: "APORTES SOCIALES"
    },
    {
        parent: 3115,
        code: 311505,
        description: "CUOTAS O PARTES DE INTERES SOCIAL"
    },
    {
        parent: 3115,
        code: 311510,
        description: "APORTES DE SOCIOS - FONDO MUTUO DE INVERSION"
    },
    {
        parent: 3115,
        code: 311515,
        description: "CONTRIBUCION DE LA EMPRESA - FONDO MUTUO DE INVERSION"
    },
    {
        parent: 3115,
        code: 311520,
        description: "SUSCRIPCIONES DEL PUBLICO"
    },
    {
        parent: 31,
        code: 3120,
        description: "CAPITAL ASIGNADO"
    },
    {
        parent: 31,
        code: 3125,
        description: "INVERSION SUPLEMENTARIA AL CAPITAL ASIGNADO"
    },
    {
        parent: 31,
        code: 3130,
        description: "CAPITAL DE PERSONAS NATURALES"
    },
    {
        parent: 31,
        code: 3135,
        description: "APORTES DEL ESTADO"
    },
    {
        parent: 31,
        code: 3140,
        description: "FONDO SOCIAL"
    },
    {
        parent: 3,
        code: 32,
        description: "SUPERAVIT DE CAPITAL"
    },
    {
        parent: 32,
        code: 3205,
        description: "PRIMA EN COLOCACION DE ACCIONES, CUOTAS O PARTES DE INTERES"
    },
    {
        parent: 3205,
        code: 320505,
        description: "PRIMA EN COLOCACION DE ACCIONES"
    },
    {
        parent: 3205,
        code: 320510,
        description: "PRIMA EN COLOCACION DE ACCIONES POR COBRAR (DB)"
    },
    {
        parent: 3205,
        code: 320515,
        description: "PRIMA EN COLOCACION DE CUOTAS O PARTES DE INTERES SOCIAL"
    },
    {
        parent: 32,
        code: 3210,
        description: "DONACIONES"
    },
    {
        parent: 3210,
        code: 321005,
        description: "EN DINERO"
    },
    {
        parent: 3210,
        code: 321010,
        description: "EN VALORES MOBILIARIOS"
    },
    {
        parent: 3210,
        code: 321015,
        description: "EN BIENES MUEBLES"
    },
    {
        parent: 3210,
        code: 321020,
        description: "EN BIENES INMUEBLES"
    },
    {
        parent: 3210,
        code: 321025,
        description: "EN INTANGIBLES"
    },
    {
        parent: 32,
        code: 3215,
        description: "CREDITO MERCANTIL"
    },
    {
        parent: 3,
        code: 33,
        description: "RESERVAS"
    },
    {
        parent: 33,
        code: 3305,
        description: "RESERVAS OBLIGATORIAS"
    },
    {
        parent: 3305,
        code: 330505,
        description: "RESERVA LEGAL"
    },
    {
        parent: 3305,
        code: 330510,
        description: "RESERVAS POR DISPOSICIONES FISCALES"
    },
    {
        parent: 3305,
        code: 330515,
        description: "RESERVA PARA READQUISICION DE ACCIONES"
    },
    {
        parent: 3305,
        code: 330517,
        description: "RESERVA PARA READQUISICION DE CUOTAS O PARTES DE INTERES SOCIAL"
    },
    {
        parent: 3305,
        code: 330520,
        description: "RESERVA PARA EXTENSION AGROPECUARIA"
    },
    {
        parent: 3305,
        code: 330525,
        description: "RESERVA LEY 7a. DE 1990"
    },
    {
        parent: 3305,
        code: 330530,
        description: "RESERVA PARA REPOSICION DE SEMOVIENTES"
    },
    {
        parent: 3305,
        code: 330535,
        description: "RESERVA LEY 4a DE 1980"
    },
    {
        parent: 3305,
        code: 330595,
        description: "OTRAS"
    },
    {
        parent: 33,
        code: 3310,
        description: "RESERVAS ESTATUTARIAS"
    },
    {
        parent: 3310,
        code: 331005,
        description: "PARA FUTURAS CAPITALIZACIONES"
    },
    {
        parent: 3310,
        code: 331010,
        description: "PARA REPOSICION DE ACTIVOS"
    },
    {
        parent: 3310,
        code: 331015,
        description: "PARA FUTUROS ENSANCHES"
    },
    {
        parent: 3310,
        code: 331095,
        description: "OTRAS"
    },
    {
        parent: 33,
        code: 3315,
        description: "RESERVAS OCASIONALES"
    },
    {
        parent: 3315,
        code: 331505,
        description: "PARA BENEFICENCIA Y CIVISMO"
    },
    {
        parent: 3315,
        code: 331510,
        description: "PARA FUTURAS CAPITALIZACIONES"
    },
    {
        parent: 3315,
        code: 331515,
        description: "PARA FUTUROS ENSANCHES"
    },
    {
        parent: 3315,
        code: 331520,
        description: "PARA ADQUISICION O REPOSICION DE PROPIEDADES PLANTA Y EQUIPO"
    },
    {
        parent: 3315,
        code: 331525,
        description: "PARA INVESTIGACIONES Y DESARROLLO"
    },
    {
        parent: 3315,
        code: 331530,
        description: "PARA FOMENTO ECONOMICO"
    },
    {
        parent: 3315,
        code: 331535,
        description: "PARA CAPITAL DE TRABAJO"
    },
    {
        parent: 3315,
        code: 331540,
        description: "PARA ESTABILIZACION DE RENDIMIENTOS"
    },
    {
        parent: 3315,
        code: 331545,
        description: "A DISPOSICION DEL MAXIMO ORGANO SOCIAL"
    },
    {
        parent: 3315,
        code: 331595,
        description: "OTRAS"
    },
    {
        parent: 3,
        code: 34,
        description: "REVALORIZACION DEL PATRIMONIO"
    },
    {
        parent: 34,
        code: 3405,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 3405,
        code: 340505,
        description: "DE CAPITAL SOCIAL"
    },
    {
        parent: 3405,
        code: 340510,
        description: "DE SUPERAVIT DE CAPITAL"
    },
    {
        parent: 3405,
        code: 340515,
        description: "DE RESERVAS"
    },
    {
        parent: 3405,
        code: 340520,
        description: "DE RESULTADOS DE EJERCICIOS ANTERIORES"
    },
    {
        parent: 3405,
        code: 340525,
        description: "DE ACTIVOS EN PERIODO IMPRODUCTIVO"
    },
    {
        parent: 34,
        code: 3410,
        description: "SANEAMIENTO FISCAL"
    },
    {
        parent: 34,
        code: 3415,
        description: "AJUSTES POR INFLACION DECRETO 3019 DE 1989"
    },
    {
        parent: 3,
        code: 35,
        description: "DIVIDENDOS O PARTICIPACIONES DECRETADOS EN ACCIONES, CUOTAS O PARTES DE INTERES SOCIAL"
    },
    {
        parent: 35,
        code: 3505,
        description: "DIVIDENDOS DECRETADOS EN ACCIONES"
    },
    {
        parent: 35,
        code: 3510,
        description: "PARTICIPACIONES DECRETADAS EN CUOTAS O PARTES DE INTERES SOCIAL"
    },
    {
        parent: 3,
        code: 36,
        description: "RESULTADOS DEL EJERCICIO"
    },
    {
        parent: 36,
        code: 3605,
        description: "UTILIDAD DEL EJERCICIO"
    },
    {
        parent: 3605,
        code: 360505,
        description: "UTILIDAD DEL EJERCICIO"
    },
    {
        parent: 3605,
        code: 360510,
        description: "UTILIDAD POR EXPOSICION A LA INFLACION"
    },
    {
        parent: 36,
        code: 3610,
        description: "PERDIDA DEL EJERCICIO"
    },
    {
        parent: 3610,
        code: 361005,
        description: "PERDIDA DEL EJERCICIO"
    },
    {
        parent: 3610,
        code: 361010,
        description: "PERDIDA POR EXPOSICION A LA INFLACION"
    },
    {
        parent: 3,
        code: 37,
        description: "RESULTADOS DE EJERCICIOS ANTERIORES"
    },
    {
        parent: 37,
        code: 3705,
        description: "UTILIDADES O EXCEDENTES ACUMULADOS"
    },
    {
        parent: 37,
        code: 3710,
        description: "PERDIDAS ACUMULADAS"
    },
    {
        parent: 3,
        code: 38,
        description: "SUPERAVIT POR VALORIZACIONES"
    },
    {
        parent: 38,
        code: 3805,
        description: "DE INVERSIONES"
    },
    {
        parent: 3805,
        code: 380505,
        description: "ACCIONES"
    },
    {
        parent: 3805,
        code: 380510,
        description: "CUOTAS O PARTES DE INTERES SOCIAL"
    },
    {
        parent: 3805,
        code: 380515,
        description: "DERECHOS FIDUCIARIOS"
    },
    {
        parent: 38,
        code: 3810,
        description: "DE PROPIEDADES PLANTA Y EQUIPO"
    },
    {
        parent: 3810,
        code: 381004,
        description: "TERRENOS"
    },
    {
        parent: 3810,
        code: 381006,
        description: "MATERIALES PROYECTOS PETROLEROS"
    },
    {
        parent: 3810,
        code: 381008,
        description: "CONSTRUCCIONES Y EDIFICACIONES"
    },
    {
        parent: 3810,
        code: 381012,
        description: "MAQUINARIA Y EQUIPO"
    },
    {
        parent: 3810,
        code: 381016,
        description: "EQUIPO DE OFICINA"
    },
    {
        parent: 3810,
        code: 381020,
        description: "EQUIPO DE COMPUTACION Y COMUNICACION"
    },
    {
        parent: 3810,
        code: 381024,
        description: "EQUIPO MEDICO CIENTIFICO"
    },
    {
        parent: 3810,
        code: 381028,
        description: "EQUIPO DE HOTELES Y RESTAURANTES"
    },
    {
        parent: 3810,
        code: 381032,
        description: "FLOTA Y EQUIPO DE TRANSPORTE"
    },
    {
        parent: 3810,
        code: 381036,
        description: "FLOTA Y EQUIPO FLUVIAL Y/O MARITIMO"
    },
    {
        parent: 3810,
        code: 381040,
        description: "FLOTA Y EQUIPO AEREO"
    },
    {
        parent: 3810,
        code: 381044,
        description: "FLOTA Y EQUIPO FERREO"
    },
    {
        parent: 3810,
        code: 381048,
        description: "ACUEDUCTOS PLANTAS Y REDES"
    },
    {
        parent: 3810,
        code: 381052,
        description: "ARMAMENTO DE VIGILANCIA"
    },
    {
        parent: 3810,
        code: 381056,
        description: "ENVASES Y EMPAQUES"
    },
    {
        parent: 3810,
        code: 381060,
        description: "PLANTACIONES AGRICOLAS Y FORESTALES"
    },
    {
        parent: 3810,
        code: 381064,
        description: "VIAS DE COMUNICACION"
    },
    {
        parent: 3810,
        code: 381068,
        description: "MINAS Y CANTERAS"
    },
    {
        parent: 3810,
        code: 381072,
        description: "POZOS ARTESIANOS"
    },
    {
        parent: 3810,
        code: 381076,
        description: "YACIMIENTOS"
    },
    {
        parent: 3810,
        code: 381080,
        description: "SEMOVIENTES"
    },
    {
        parent: 38,
        code: 3895,
        description: "DE OTROS ACTIVOS"
    },
    {
        parent: 3895,
        code: 389505,
        description: "BIENES DE ARTE Y CULTURA"
    },
    {
        parent: 3895,
        code: 389510,
        description: "BIENES ENTREGADOS EN COMODATO"
    },
    {
        parent: 3895,
        code: 389515,
        description: "BIENES RECIBIDOS EN PAGO"
    },
    {
        parent: 3895,
        code: 389520,
        description: "INVENTARIO DE SEMOVIENTES"
    },
    {
        parent: null,
        code: 4,
        description: "INGRESOS"
    },
    {
        parent: 4,
        code: 41,
        description: "OPERACIONALES"
    },
    {
        parent: 41,
        code: 4105,
        description: "AGRICULTURA, GANADERIA, CAZA Y SILVICULTURA"
    },
    {
        parent: 4105,
        code: 410505,
        description: "CULTIVO DE CEREALES"
    },
    {
        parent: 4105,
        code: 410510,
        description: "CULTIVOS DE HORTALIZAS, LEGUMBRES Y PLANTAS ORNAMENTALES"
    },
    {
        parent: 4105,
        code: 410515,
        description: "CULTIVOS DE FRUTAS, NUECES Y PLANTAS AROMATICAS"
    },
    {
        parent: 4105,
        code: 410520,
        description: "CULTIVO DE CAFE"
    },
    {
        parent: 4105,
        code: 410525,
        description: "CULTIVO DE FLORES"
    },
    {
        parent: 4105,
        code: 410530,
        description: "CULTIVO DE CAÑA DE AZUCAR"
    },
    {
        parent: 4105,
        code: 410535,
        description: "CULTIVO DE ALGODON Y PLANTAS PARA MATERIAL TEXTIL"
    },
    {
        parent: 4105,
        code: 410540,
        description: "CULTIVO DE BANANO"
    },
    {
        parent: 4105,
        code: 410545,
        description: "OTROS CULTIVOS AGRICOLAS"
    },
    {
        parent: 4105,
        code: 410550,
        description: "CRIA DE OVEJAS, CABRAS, ASNOS, MULAS Y BURDEGANOS"
    },
    {
        parent: 4105,
        code: 410555,
        description: "CRIA DE GANADO CABALLAR Y VACUNO."
    },
    {
        parent: 4105,
        code: 410560,
        description: "PRODUCCION AVICOLA"
    },
    {
        parent: 4105,
        code: 410565,
        description: "CRIA DE OTROS ANIMALES"
    },
    {
        parent: 4105,
        code: 410570,
        description: "SERVICIOS AGRICOLAS Y GANADEROS"
    },
    {
        parent: 4105,
        code: 410575,
        description: "ACTIVIDAD DE CAZA"
    },
    {
        parent: 4105,
        code: 410580,
        description: "ACTIVIDAD DE SILVICULTURA"
    },
    {
        parent: 4105,
        code: 410599,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 41,
        code: 4110,
        description: "PESCA"
    },
    {
        parent: 4110,
        code: 411005,
        description: "ACTIVIDAD DE PESCA"
    },
    {
        parent: 4110,
        code: 411010,
        description: "EXPLOTACION DE CRIADEROS DE PECES"
    },
    {
        parent: 4110,
        code: 411095,
        description: "ACTIVIDADES CONEXAS"
    },
    {
        parent: 4110,
        code: 411099,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 41,
        code: 4115,
        description: "EXPLOTACION DE MINAS Y CANTERAS"
    },
    {
        parent: 4115,
        code: 411505,
        description: "CARBON"
    },
    {
        parent: 4115,
        code: 411510,
        description: "PETROLEO CRUDO"
    },
    {
        parent: 4115,
        code: 411512,
        description: "GAS NATURAL"
    },
    {
        parent: 4115,
        code: 411514,
        description: "SERVICIOS RELACIONADOS CON EXTRACCION DE PETROLEO Y GAS"
    },
    {
        parent: 4115,
        code: 411515,
        description: "MINERALES DE HIERRO"
    },
    {
        parent: 4115,
        code: 411520,
        description: "MINERALES METALIFEROS NO FERROSOS"
    },
    {
        parent: 4115,
        code: 411525,
        description: "PIEDRA, ARENA Y ARCILLA"
    },
    {
        parent: 4115,
        code: 411527,
        description: "PIEDRAS PRECIOSAS"
    },
    {
        parent: 4115,
        code: 411528,
        description: "ORO"
    },
    {
        parent: 4115,
        code: 411530,
        description: "OTRAS MINAS Y CANTERAS"
    },
    {
        parent: 4115,
        code: 411532,
        description: "PRESTACION DE SERVICIOS SECTOR MINERO"
    },
    {
        parent: 4115,
        code: 411595,
        description: "ACTIVIDADES CONEXAS"
    },
    {
        parent: 4115,
        code: 411599,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 41,
        code: 4120,
        description: "INDUSTRIAS MANUFACTURERAS"
    },
    {
        parent: 4120,
        code: 412001,
        description: "PRODUCCION Y PROCESAMIENTO DE CARNES Y PRODUCTOS CARNICOS"
    },
    {
        parent: 4120,
        code: 412002,
        description: "PRODUCTOS DE PESCADO"
    },
    {
        parent: 4120,
        code: 412003,
        description: "PRODUCTOS DE FRUTAS, LEGUMBRES Y HORTALIZAS"
    },
    {
        parent: 4120,
        code: 412004,
        description: "ELABORACION DE ACEITES Y GRASAS"
    },
    {
        parent: 4120,
        code: 412005,
        description: "ELABORACION DE PRODUCTOS LACTEOS"
    },
    {
        parent: 4120,
        code: 412006,
        description: "ELABORACION DE PRODUCTOS DE MOLINERIA"
    },
    {
        parent: 4120,
        code: 412007,
        description: "ELABORACION DE ALMIDONES Y DERIVADOS"
    },
    {
        parent: 4120,
        code: 412008,
        description: "ELABORACION DE ALIMENTOS PARA ANIMALES"
    },
    {
        parent: 4120,
        code: 412009,
        description: "ELABORACION DE PRODUCTOS PARA PANADERIA"
    },
    {
        parent: 4120,
        code: 412010,
        description: "ELABORACION DE AZUCAR Y MELAZAS"
    },
    {
        parent: 4120,
        code: 412011,
        description: "ELABORACION DE CACAO, CHOCOLATE Y CONFITERIA"
    },
    {
        parent: 4120,
        code: 412012,
        description: "ELABORACION DE PASTAS  Y PRODUCTOS FARINACEOS"
    },
    {
        parent: 4120,
        code: 412013,
        description: "ELABORACION DE PRODUCTOS DE CAFE"
    },
    {
        parent: 4120,
        code: 412014,
        description: "ELABORACION DE OTROS PRODUCTOS ALIMENTICIOS"
    },
    {
        parent: 4120,
        code: 412015,
        description: "ELABORACION DE BEBIDAS ALCOHOLICAS Y ALCOHOL ETILICO"
    },
    {
        parent: 4120,
        code: 412016,
        description: "ELABORACION DE VINOS"
    },
    {
        parent: 4120,
        code: 412017,
        description: "ELABORACION DE BEBIDAS MALTEADAS Y DE MALTA"
    },
    {
        parent: 4120,
        code: 412018,
        description: "ELABORACION DE BEBIDAS NO ALCOHOLICAS"
    },
    {
        parent: 4120,
        code: 412019,
        description: "ELABORACION DE PRODUCTOS DE TABACO"
    },
    {
        parent: 4120,
        code: 412020,
        description: "PREPARACION E HILATURA DE FIBRAS TEXTILES Y TEJEDURIA"
    },
    {
        parent: 4120,
        code: 412021,
        description: "ACABADO DE PRODUCTOS TEXTILES"
    },
    {
        parent: 4120,
        code: 412022,
        description: "ELABORACION DE ARTICULOS DE MATERIALES TEXTILES"
    },
    {
        parent: 4120,
        code: 412023,
        description: "ELABORACION DE TAPICES Y ALFOMBRAS"
    },
    {
        parent: 4120,
        code: 412024,
        description: "ELABORACION DE CUERDAS, CORDELES, BRAMANTES Y REDES"
    },
    {
        parent: 4120,
        code: 412025,
        description: "ELABORACION DE OTROS PRODUCTOS TEXTILES"
    },
    {
        parent: 4120,
        code: 412026,
        description: "ELABORACION DE TEJIDOS"
    },
    {
        parent: 4120,
        code: 412027,
        description: "ELABORACION DE PRENDAS DE VESTIR"
    },
    {
        parent: 4120,
        code: 412028,
        description: "PREPARACION, ADOBO Y TEÑIDO DE PIELES"
    },
    {
        parent: 4120,
        code: 412029,
        description: "CURTIDO, ADOBO O PREPARACION DE CUERO"
    },
    {
        parent: 4120,
        code: 412030,
        description: "ELABORACION DE MALETAS, BOLSOS Y SIMILARES"
    },
    {
        parent: 4120,
        code: 412031,
        description: "ELABORACION DE CALZADO"
    },
    {
        parent: 4120,
        code: 412032,
        description: "PRODUCCION DE MADERA, ARTICULOS DE MADERA Y CORCHO"
    },
    {
        parent: 4120,
        code: 412033,
        description: "ELABORACION DE PASTA Y PRODUCTOS DE MADERA, PAPEL Y CARTON"
    },
    {
        parent: 4120,
        code: 412034,
        description: "EDICIONES Y PUBLICACIONES"
    },
    {
        parent: 4120,
        code: 412035,
        description: "IMPRESION"
    },
    {
        parent: 4120,
        code: 412036,
        description: "SERVICIOS RELACIONADOS CON LA EDICION Y LA IMPRESION"
    },
    {
        parent: 4120,
        code: 412037,
        description: "REPRODUCCION DE GRABACIONES"
    },
    {
        parent: 4120,
        code: 412038,
        description: "ELABORACION DE PRODUCTOS DE HORNO DE COQUE"
    },
    {
        parent: 4120,
        code: 412039,
        description: "ELABORACION DE PRODUCTOS DE LA REFINACION DE PETROLEO"
    },
    {
        parent: 4120,
        code: 412040,
        description: "ELABORACION DE SUSTANCIAS QUIMICAS BASICAS"
    },
    {
        parent: 4120,
        code: 412041,
        description: "ELABORACION DE ABONOS Y COMPUESTOS DE NITROGENO"
    },
    {
        parent: 4120,
        code: 412042,
        description: "ELABORACION DE PLASTICO Y CAUCHO SINTETICO"
    },
    {
        parent: 4120,
        code: 412043,
        description: "ELABORACION DE PRODUCTOS QUIMICOS DE USO AGROPECUARIO"
    },
    {
        parent: 4120,
        code: 412044,
        description: "ELABORACION DE PINTURAS, TINTAS Y MASILLAS"
    },
    {
        parent: 4120,
        code: 412045,
        description: "ELABORACION DE PRODUCTOS FARMACEUTICOS Y BOTANICOS"
    },
    {
        parent: 4120,
        code: 412046,
        description: "ELABORACION DE JABONES, DETERGENTES Y PREPARADOS DE TOCADOR"
    },
    {
        parent: 4120,
        code: 412047,
        description: "ELABORACION DE OTROS PRODUCTOS QUIMICOS"
    },
    {
        parent: 4120,
        code: 412048,
        description: "ELABORACION DE FIBRAS"
    },
    {
        parent: 4120,
        code: 412049,
        description: "ELABORACION DE OTROS PRODUCTOS DE CAUCHO"
    },
    {
        parent: 4120,
        code: 412050,
        description: "ELABORACION DE PRODUCTOS DE PLASTICO"
    },
    {
        parent: 4120,
        code: 412051,
        description: "ELABORACION DE VIDRIO Y PRODUCTOS DE VIDRIO"
    },
    {
        parent: 4120,
        code: 412052,
        description: "ELABORACION DE PRODUCTOS DE CERAMICA, LOZA, PIEDRA, ARCILLA Y PORCELANA"
    },
    {
        parent: 4120,
        code: 412053,
        description: "ELABORACION DE CEMENTO, CAL Y YESO"
    },
    {
        parent: 4120,
        code: 412054,
        description: "ELABORACION DE ARTICULOS DE HORMIGON, CEMENTO Y YESO"
    },
    {
        parent: 4120,
        code: 412055,
        description: "CORTE, TALLADO Y ACABADO DE LA PIEDRA"
    },
    {
        parent: 4120,
        code: 412056,
        description: "ELABORACION DE OTROS PRODUCTOS MINERALES NO METALICOS"
    },
    {
        parent: 4120,
        code: 412057,
        description: "INDUSTRIAS BASICAS Y FUNDICION DE HIERRO Y ACERO"
    },
    {
        parent: 4120,
        code: 412058,
        description: "PRODUCTOS PRIMARIOS DE METALES PRECIOSOS Y DE METALES NO FERROSOS"
    },
    {
        parent: 4120,
        code: 412059,
        description: "FUNDICION DE METALES NO FERROSOS"
    },
    {
        parent: 4120,
        code: 412060,
        description: "FABRICACION DE PRODUCTOS METALICOS PARA USO ESTRUCTURAL"
    },
    {
        parent: 4120,
        code: 412061,
        description: "FORJA, PRENSADO, ESTAMPADO, LAMINADO DE METAL Y PULVIMETALURGIA"
    },
    {
        parent: 4120,
        code: 412062,
        description: "REVESTIMIENTO DE METALES Y OBRAS DE INGENIERIA MECANICA"
    },
    {
        parent: 4120,
        code: 412063,
        description: "FABRICACION DE ARTICULOS DE FERRETERIA"
    },
    {
        parent: 4120,
        code: 412064,
        description: "ELABORACION DE OTROS PRODUCTOS DE METAL"
    },
    {
        parent: 4120,
        code: 412065,
        description: "FABRICACION DE MAQUINARIA Y EQUIPO"
    },
    {
        parent: 4120,
        code: 412066,
        description: "FABRICACION DE EQUIPOS DE ELEVACION Y MANIPULACION"
    },
    {
        parent: 4120,
        code: 412067,
        description: "ELABORACION DE APARATOS DE USO DOMESTICO"
    },
    {
        parent: 4120,
        code: 412068,
        description: "ELABORACION DE EQUIPO DE OFICINA"
    },
    {
        parent: 4120,
        code: 412069,
        description: "ELABORACION DE PILAS Y BATERIAS PRIMARIAS"
    },
    {
        parent: 4120,
        code: 412070,
        description: "ELABORACION DE EQUIPO DE ILUMINACION"
    },
    {
        parent: 4120,
        code: 412071,
        description: "ELABORACION DE OTROS TIPOS DE EQUIPO ELECTRICO"
    },
    {
        parent: 4120,
        code: 412072,
        description: "FABRICACION DE EQUIPOS DE RADIO, TELEVISION Y COMUNICACIONES"
    },
    {
        parent: 4120,
        code: 412073,
        description: "FABRICACION DE APARATOS E INSTRUMENTOS MEDICOS"
    },
    {
        parent: 4120,
        code: 412074,
        description: "FABRICACION DE INSTRUMENTOS DE MEDICION Y CONTROL"
    },
    {
        parent: 4120,
        code: 412075,
        description: "FABRICACION DE INSTRUMENTOS DE OPTICA Y EQUIPO FOTOGRAFICO"
    },
    {
        parent: 4120,
        code: 412076,
        description: "FABRICACION DE RELOJES"
    },
    {
        parent: 4120,
        code: 412077,
        description: "FABRICACION DE VEHICULOS AUTOMOTORES"
    },
    {
        parent: 4120,
        code: 412078,
        description: "FABRICACION DE CARROCERIAS PARA AUTOMOTORES"
    },
    {
        parent: 4120,
        code: 412079,
        description: "FABRICACION DE PARTES PIEZAS Y ACCESORIOS PARA AUTOMOTORES"
    },
    {
        parent: 4120,
        code: 412080,
        description: "FABRICACION Y REPARACION DE BUQUES Y OTRAS EMBARCACIONES"
    },
    {
        parent: 4120,
        code: 412081,
        description: "FABRICACION DE LOCOMOTORAS Y MATERIAL RODANTE PARA FERROCARRILES"
    },
    {
        parent: 4120,
        code: 412082,
        description: "FABRICACION DE AERONAVES"
    },
    {
        parent: 4120,
        code: 412083,
        description: "FABRICACION DE MOTOCICLETAS"
    },
    {
        parent: 4120,
        code: 412084,
        description: "FABRICACION DE BICICLETAS Y SILLAS DE RUEDAS"
    },
    {
        parent: 4120,
        code: 412085,
        description: "FABRICACION DE OTROS TIPOS DE TRANSPORTE"
    },
    {
        parent: 4120,
        code: 412086,
        description: "FABRICACION DE MUEBLES"
    },
    {
        parent: 4120,
        code: 412087,
        description: "FABRICACION DE JOYAS Y ARTICULOS CONEXOS"
    },
    {
        parent: 4120,
        code: 412088,
        description: "FABRICACION DE INSTRUMENTOS DE MUSICA"
    },
    {
        parent: 4120,
        code: 412089,
        description: "FABRICACION DE ARTICULOS Y EQUIPO PARA DEPORTE"
    },
    {
        parent: 4120,
        code: 412090,
        description: "FABRICACION DE JUEGOS Y JUGUETES"
    },
    {
        parent: 4120,
        code: 412091,
        description: "RECICLAMIENTO DE DESPERDICIOS"
    },
    {
        parent: 4120,
        code: 412095,
        description: "PRODUCTOS DE OTRAS INDUSTRIAS MANUFACTURERAS"
    },
    {
        parent: 4120,
        code: 412099,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 41,
        code: 4125,
        description: "SUMINISTRO DE ELECTRICIDAD, GAS Y AGUA"
    },
    {
        parent: 4125,
        code: 412505,
        description: "GENERACION, CAPTACION Y DISTRIBUCION DE ENERGIA ELECTRICA"
    },
    {
        parent: 4125,
        code: 412510,
        description: "FABRICACION DE GAS Y DISTRIBUCION DE COMBUSTIBLES GASEOSOS"
    },
    {
        parent: 4125,
        code: 412515,
        description: "CAPTACION, DEPURACION Y DISTRIBUCION DE AGUA"
    },
    {
        parent: 4125,
        code: 412595,
        description: "ACTIVIDADES CONEXAS"
    },
    {
        parent: 4125,
        code: 412599,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 41,
        code: 4130,
        description: "CONSTRUCCION"
    },
    {
        parent: 4130,
        code: 413005,
        description: "PREPARACION DE TERRENOS"
    },
    {
        parent: 4130,
        code: 413010,
        description: "CONSTRUCCION DE EDIFICIOS Y OBRAS DE INGENIERIA CIVIL"
    },
    {
        parent: 4130,
        code: 413015,
        description: "ACONDICIONAMIENTO DE EDIFICIOS"
    },
    {
        parent: 4130,
        code: 413020,
        description: "TERMINACION DE EDIFICACIONES"
    },
    {
        parent: 4130,
        code: 413025,
        description: "ALQUILER DE EQUIPO CON OPERARIOS"
    },
    {
        parent: 4130,
        code: 413095,
        description: "ACTIVIDADES CONEXAS"
    },
    {
        parent: 4130,
        code: 413099,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 41,
        code: 4135,
        description: "COMERCIO AL POR MAYOR Y AL POR MENOR"
    },
    {
        parent: 4135,
        code: 413502,
        description: "VENTA DE VEHICULOS AUTOMOTORES"
    },
    {
        parent: 4135,
        code: 413504,
        description: "MANTENIMIENTO, REPARACION Y LAVADO DE VEHICULOS AUTOMOTORES"
    },
    {
        parent: 4135,
        code: 413506,
        description: "VENTA DE PARTES, PIEZAS Y ACCESORIOS DE VEHICULOS AUTOMOTORES"
    },
    {
        parent: 4135,
        code: 413508,
        description: "VENTA DE COMBUSTIBLES SOLIDOS, LIQUIDOS, GASEOSOS"
    },
    {
        parent: 4135,
        code: 413510,
        description: "VENTA DE LUBRICANTES, ADITIVOS, LLANTAS Y LUJOS PARA AUTOMOTORES"
    },
    {
        parent: 4135,
        code: 413512,
        description: "VENTA A CAMBIO DE RETRIBUCION O POR CONTRATA"
    },
    {
        parent: 4135,
        code: 413514,
        description: "VENTA DE INSUMOS, MATERIAS PRIMAS AGROPECUARIAS Y FLORES"
    },
    {
        parent: 4135,
        code: 413516,
        description: "VENTA DE OTROS INSUMOS Y MATERIAS PRIMAS NO AGROPECUARIAS"
    },
    {
        parent: 4135,
        code: 413518,
        description: "VENTA DE ANIMALES VIVOS Y CUEROS"
    },
    {
        parent: 4135,
        code: 413520,
        description: "VENTA DE PRODUCTOS EN ALMACENES NO ESPECIALIZADOS"
    },
    {
        parent: 4135,
        code: 413522,
        description: "VENTA DE PRODUCTOS AGROPECUARIOS"
    },
    {
        parent: 4135,
        code: 413524,
        description: "VENTA DE PRODUCTOS TEXTILES, DE VESTIR, DE CUERO Y CALZADO"
    },
    {
        parent: 4135,
        code: 413526,
        description: "VENTA DE PAPEL Y CARTON"
    },
    {
        parent: 4135,
        code: 413528,
        description: "VENTA DE LIBROS, REVISTAS, ELEMENTOS DE PAPELERIA, UTILES Y TEXTOS ESCOLARES"
    },
    {
        parent: 4135,
        code: 413530,
        description: "VENTA DE JUEGOS, JUGUETES Y ARTICULOS DEPORTIVOS"
    },
    {
        parent: 4135,
        code: 413532,
        description: "VENTA DE INSTRUMENTOS QUIRURGICOS Y ORTOPEDICOS"
    },
    {
        parent: 4135,
        code: 413534,
        description: "VENTA DE ARTICULOS EN RELOJERIAS Y JOYERIAS"
    },
    {
        parent: 4135,
        code: 413536,
        description: "VENTA DE ELECTRODOMESTICOS Y MUEBLES"
    },
    {
        parent: 4135,
        code: 413538,
        description: "VENTA DE PRODUCTOS DE ASEO, FARMACEUTICOS, MEDICINALES, Y ARTICULOS DE TOCADOR"
    },
    {
        parent: 4135,
        code: 413540,
        description: "VENTA DE CUBIERTOS, VAJILLAS, CRISTALERIA, PORCELANAS, CERAMICAS Y OTROS ARTICULOS DE USO DOMESTICO"
    },
    {
        parent: 4135,
        code: 413542,
        description: "VENTA DE MATERIALES DE CONSTRUCCION, FONTANERIA Y CALEFACCION"
    },
    {
        parent: 4135,
        code: 413544,
        description: "VENTA DE PINTURAS Y LACAS"
    },
    {
        parent: 4135,
        code: 413546,
        description: "VENTA DE PRODUCTOS DE VIDRIOS Y MARQUETERIA"
    },
    {
        parent: 4135,
        code: 413548,
        description: "VENTA DE HERRAMIENTAS Y ARTICULOS DE FERRETERIA"
    },
    {
        parent: 4135,
        code: 413550,
        description: "VENTA DE QUIMICOS"
    },
    {
        parent: 4135,
        code: 413552,
        description: "VENTA DE PRODUCTOS INTERMEDIOS, DESPERDICIOS Y DESECHOS"
    },
    {
        parent: 4135,
        code: 413554,
        description: "VENTA DE MAQUINARIA, EQUIPO DE OFICINA Y PROGRAMAS DE COMPUTADOR"
    },
    {
        parent: 4135,
        code: 413556,
        description: "VENTA DE ARTICULOS EN CACHARRERIAS Y MISCELANEAS"
    },
    {
        parent: 4135,
        code: 413558,
        description: "VENTA DE INSTRUMENTOS MUSICALES"
    },
    {
        parent: 4135,
        code: 413560,
        description: "VENTA DE ARTICULOS EN CASAS DE EMPEÑO Y PRENDERIAS"
    },
    {
        parent: 4135,
        code: 413562,
        description: "VENTA DE EQUIPO FOTOGRAFICO"
    },
    {
        parent: 4135,
        code: 413564,
        description: "VENTA DE EQUIPO OPTICO Y DE PRECISION"
    },
    {
        parent: 4135,
        code: 413566,
        description: "VENTA DE EMPAQUES"
    },
    {
        parent: 4135,
        code: 413568,
        description: "VENTA DE EQUIPO PROFESIONAL Y CIENTIFICO"
    },
    {
        parent: 4135,
        code: 413570,
        description: "VENTA DE LOTERIAS, RIFAS, CHANCE, APUESTAS Y SIMILARES"
    },
    {
        parent: 4135,
        code: 413572,
        description: "REPARACION DE EFECTOS PERSONALES Y ELECTRODOMESTICOS"
    },
    {
        parent: 4135,
        code: 413595,
        description: "VENTA DE OTROS PRODUCTOS"
    },
    {
        parent: 4135,
        code: 413599,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 41,
        code: 4140,
        description: "HOTELES Y RESTAURANTES"
    },
    {
        parent: 4140,
        code: 414005,
        description: "HOTELERIA"
    },
    {
        parent: 4140,
        code: 414010,
        description: "CAMPAMENTO Y OTROS TIPOS DE HOSPEDAJE"
    },
    {
        parent: 4140,
        code: 414015,
        description: "RESTAURANTES"
    },
    {
        parent: 4140,
        code: 414020,
        description: "BARES Y CANTINAS"
    },
    {
        parent: 4140,
        code: 414095,
        description: "ACTIVIDADES CONEXAS"
    },
    {
        parent: 4140,
        code: 414099,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 41,
        code: 4145,
        description: "TRANSPORTE, ALMACENAMIENTO Y COMUNICACIONES"
    },
    {
        parent: 4145,
        code: 414505,
        description: "SERVICIO DE TRANSPORTE POR CARRETERA"
    },
    {
        parent: 4145,
        code: 414510,
        description: "SERVICIO DE TRANSPORTE POR VIA FERREA"
    },
    {
        parent: 4145,
        code: 414515,
        description: "SERVICIO DE TRANSPORTE POR VIA ACUATICA"
    },
    {
        parent: 4145,
        code: 414520,
        description: "SERVICIO DE TRANSPORTE POR VIA AEREA"
    },
    {
        parent: 4145,
        code: 414525,
        description: "SERVICIO DE TRANSPORTE POR TUBERIAS"
    },
    {
        parent: 4145,
        code: 414530,
        description: "MANIPULACION DE CARGA"
    },
    {
        parent: 4145,
        code: 414535,
        description: "ALMACENAMIENTO Y DEPOSITO"
    },
    {
        parent: 4145,
        code: 414540,
        description: "SERVICIOS COMPLEMENTARIOS PARA EL TRANSPORTE"
    },
    {
        parent: 4145,
        code: 414545,
        description: "AGENCIAS DE VIAJE"
    },
    {
        parent: 4145,
        code: 414550,
        description: "OTRAS AGENCIAS DE TRANSPORTE"
    },
    {
        parent: 4145,
        code: 414555,
        description: "SERVICIO POSTAL Y DE CORREO"
    },
    {
        parent: 4145,
        code: 414560,
        description: "SERVICIO TELEFONICO"
    },
    {
        parent: 4145,
        code: 414565,
        description: "SERVICIO DE TELEGRAFO"
    },
    {
        parent: 4145,
        code: 414570,
        description: "SERVICIO DE TRANSMISION DE DATOS"
    },
    {
        parent: 4145,
        code: 414575,
        description: "SERVICIO DE RADIO Y TELEVISION POR CABLE"
    },
    {
        parent: 4145,
        code: 414580,
        description: "TRANSMISION DE SONIDO E IMAGENES POR CONTRATO"
    },
    {
        parent: 4145,
        code: 414595,
        description: "ACTIVIDADES CONEXAS"
    },
    {
        parent: 4145,
        code: 414599,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 41,
        code: 4150,
        description: "ACTIVIDAD FINANCIERA"
    },
    {
        parent: 4150,
        code: 415005,
        description: "VENTA DE INVERSIONES"
    },
    {
        parent: 4150,
        code: 415010,
        description: "DIVIDENDOS DE SOCIEDADES ANONIMAS Y/O ASIMILADAS"
    },
    {
        parent: 4150,
        code: 415015,
        description: "PARTICIPACIONES DE SOCIEDADES LIMITADAS Y/O ASIMILADAS"
    },
    {
        parent: 4150,
        code: 415020,
        description: "INTERESES"
    },
    {
        parent: 4150,
        code: 415025,
        description: "REAJUSTE MONETARIO - UPAC"
    },
    {
        parent: 4150,
        code: 415030,
        description: "COMISIONES"
    },
    {
        parent: 4150,
        code: 415035,
        description: "OPERACIONES DE DESCUENTO"
    },
    {
        parent: 4150,
        code: 415040,
        description: "CUOTAS DE INSCRIPCION - CONSORCIOS"
    },
    {
        parent: 4150,
        code: 415045,
        description: "CUOTAS DE ADMINISTRACION - CONSORCIOS"
    },
    {
        parent: 4150,
        code: 415050,
        description: "REAJUSTE DEL SISTEMA - CONSORCIOS"
    },
    {
        parent: 4150,
        code: 415055,
        description: "ELIMINACION DE SUSCRIPTORES - CONSORCIOS"
    },
    {
        parent: 4150,
        code: 415060,
        description: "CUOTAS DE INGRESO O RETIRO - SOCIEDAD ADMINISTRADORA"
    },
    {
        parent: 4150,
        code: 415065,
        description: "SERVICIOS A COMISIONISTAS"
    },
    {
        parent: 4150,
        code: 415070,
        description: "INSCRIPCIONES Y CUOTAS"
    },
    {
        parent: 4150,
        code: 415075,
        description: "RECUPERACION DE GARANTIAS"
    },
    {
        parent: 4150,
        code: 415095,
        description: "ACTIVIDADES CONEXAS"
    },
    {
        parent: 4150,
        code: 415099,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 41,
        code: 4155,
        description: "ACTIVIDADES INMOBILIARIAS, EMPRESARIALES Y DE ALQUILER"
    },
    {
        parent: 4155,
        code: 415505,
        description: "ARRENDAMIENTOS DE BIENES INMUEBLES"
    },
    {
        parent: 4155,
        code: 415510,
        description: "INMOBILIARIAS POR RETRIBUCION O CONTRATA"
    },
    {
        parent: 4155,
        code: 415515,
        description: "ALQUILER EQUIPO DE TRANSPORTE"
    },
    {
        parent: 4155,
        code: 415520,
        description: "ALQUILER MAQUINARIA Y EQUIPO"
    },
    {
        parent: 4155,
        code: 415525,
        description: "ALQUILER DE EFECTOS PERSONALES Y ENSERES DOMESTICOS"
    },
    {
        parent: 4155,
        code: 415530,
        description: "CONSULTORIA EN EQUIPO Y PROGRAMAS DE INFORMATICA"
    },
    {
        parent: 4155,
        code: 415535,
        description: "PROCESAMIENTO DE DATOS"
    },
    {
        parent: 4155,
        code: 415540,
        description: "MANTENIMIENTO Y REPARACION DE MAQUINARIA DE OFICINA"
    },
    {
        parent: 4155,
        code: 415545,
        description: "INVESTIGACIONES CIENTIFICAS Y DE DESARROLLO"
    },
    {
        parent: 4155,
        code: 415550,
        description: "ACTIVIDADES EMPRESARIALES DE CONSULTORIA"
    },
    {
        parent: 4155,
        code: 415555,
        description: "PUBLICIDAD"
    },
    {
        parent: 4155,
        code: 415560,
        description: "DOTACION DE PERSONAL"
    },
    {
        parent: 4155,
        code: 415565,
        description: "INVESTIGACION Y SEGURIDAD"
    },
    {
        parent: 4155,
        code: 415570,
        description: "LIMPIEZA DE INMUEBLES"
    },
    {
        parent: 4155,
        code: 415575,
        description: "FOTOGRAFIA"
    },
    {
        parent: 4155,
        code: 415580,
        description: "ENVASE Y EMPAQUE"
    },
    {
        parent: 4155,
        code: 415585,
        description: "FOTOCOPIADO"
    },
    {
        parent: 4155,
        code: 415590,
        description: "MANTENIMIENTO Y REPARACION DE MAQUINARIA Y EQUIPO"
    },
    {
        parent: 4155,
        code: 415595,
        description: "ACTIVIDADES CONEXAS"
    },
    {
        parent: 4155,
        code: 415599,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 41,
        code: 4160,
        description: "ENSEÑANZA"
    },
    {
        parent: 4160,
        code: 416005,
        description: "ACTIVIDADES RELACIONADAS CON LA EDUCACION"
    },
    {
        parent: 4160,
        code: 416095,
        description: "ACTIVIDADES CONEXAS"
    },
    {
        parent: 4160,
        code: 416099,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 41,
        code: 4165,
        description: "SERVICIOS SOCIALES Y DE SALUD"
    },
    {
        parent: 4165,
        code: 416505,
        description: "SERVICIO HOSPITALARIO"
    },
    {
        parent: 4165,
        code: 416510,
        description: "SERVICIO MEDICO"
    },
    {
        parent: 4165,
        code: 416515,
        description: "SERVICIO ODONTOLOGICO"
    },
    {
        parent: 4165,
        code: 416520,
        description: "SERVICIO DE LABORATORIO"
    },
    {
        parent: 4165,
        code: 416525,
        description: "ACTIVIDADES VETERINARIAS"
    },
    {
        parent: 4165,
        code: 416530,
        description: "ACTIVIDADES DE SERVICIOS SOCIALES"
    },
    {
        parent: 4165,
        code: 416595,
        description: "ACTIVIDADES CONEXAS"
    },
    {
        parent: 4165,
        code: 416599,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 41,
        code: 4170,
        description: "OTRAS ACTIVIDADES DE SERVICIOS COMUNITARIOS, SOCIALES Y PERSONALES"
    },
    {
        parent: 4170,
        code: 417005,
        description: "ELIMINACION DE DESPERDICIOS Y AGUAS RESIDUALES"
    },
    {
        parent: 4170,
        code: 417010,
        description: "ACTIVIDADES DE ASOCIACION"
    },
    {
        parent: 4170,
        code: 417015,
        description: "PRODUCCION Y DISTRIBUCION DE FILMES Y VIDEOCINTAS"
    },
    {
        parent: 4170,
        code: 417020,
        description: "EXHIBICION DE FILMES Y VIDEOCINTAS"
    },
    {
        parent: 4170,
        code: 417025,
        description: "ACTIVIDAD DE RADIO Y TELEVISION"
    },
    {
        parent: 4170,
        code: 417030,
        description: "ACTIVIDAD TEATRAL, MUSICAL Y ARTISTICA"
    },
    {
        parent: 4170,
        code: 417035,
        description: "GRABACION Y PRODUCCION DE DISCOS"
    },
    {
        parent: 4170,
        code: 417040,
        description: "ENTRETENIMIENTO Y ESPARCIMIENTO"
    },
    {
        parent: 4170,
        code: 417045,
        description: "AGENCIAS DE NOTICIAS"
    },
    {
        parent: 4170,
        code: 417050,
        description: "LAVANDERIAS Y SIMILARES"
    },
    {
        parent: 4170,
        code: 417055,
        description: "PELUQUERIAS Y SIMILARES"
    },
    {
        parent: 4170,
        code: 417060,
        description: "SERVICIOS FUNERARIOS"
    },
    {
        parent: 4170,
        code: 417065,
        description: "ZONAS FRANCAS"
    },
    {
        parent: 4170,
        code: 417095,
        description: "ACTIVIDADES CONEXAS"
    },
    {
        parent: 4170,
        code: 417099,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 41,
        code: 4175,
        description: "DEVOLUCIONES, REBAJAS Y DESCUENTOS EN VENTAS (DB)"
    },
    {
        parent: 4175,
        code: 417599,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 4,
        code: 42,
        description: "NO OPERACIONALES"
    },
    {
        parent: 42,
        code: 4205,
        description: "OTRAS VENTAS"
    },
    {
        parent: 4205,
        code: 420505,
        description: "MATERIA PRIMA"
    },
    {
        parent: 4205,
        code: 420510,
        description: "MATERIAL DE DESECHO"
    },
    {
        parent: 4205,
        code: 420515,
        description: "MATERIALES VARIOS"
    },
    {
        parent: 4205,
        code: 420520,
        description: "PRODUCTOS DE DIVERSIFICACION"
    },
    {
        parent: 4205,
        code: 420525,
        description: "EXCEDENTES DE EXPORTACION"
    },
    {
        parent: 4205,
        code: 420530,
        description: "ENVASES Y EMPAQUES"
    },
    {
        parent: 4205,
        code: 420535,
        description: "PRODUCTOS AGRICOLAS"
    },
    {
        parent: 4205,
        code: 420540,
        description: "DE PROPAGANDA"
    },
    {
        parent: 4205,
        code: 420545,
        description: "PRODUCTOS EN REMATE"
    },
    {
        parent: 4205,
        code: 420550,
        description: "COMBUSTIBLES Y LUBRICANTES"
    },
    {
        parent: 4205,
        code: 420599,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 42,
        code: 4210,
        description: "FINANCIEROS"
    },
    {
        parent: 4210,
        code: 421005,
        description: "INTERESES"
    },
    {
        parent: 4210,
        code: 421010,
        description: "REAJUSTE MONETARIO - UPAC"
    },
    {
        parent: 4210,
        code: 421015,
        description: "DESCUENTOS AMORTIZADOS"
    },
    {
        parent: 4210,
        code: 421020,
        description: "DIFERENCIA EN CAMBIO"
    },
    {
        parent: 4210,
        code: 421025,
        description: "FINANCIACION VEHICULOS"
    },
    {
        parent: 4210,
        code: 421030,
        description: "FINANCIACION SISTEMAS DE VIAJES"
    },
    {
        parent: 4210,
        code: 421035,
        description: "ACEPTACIONES BANCARIAS"
    },
    {
        parent: 4210,
        code: 421040,
        description: "DESCUENTOS COMERCIALES CONDICIONADOS"
    },
    {
        parent: 4210,
        code: 421045,
        description: "DESCUENTOS BANCARIOS"
    },
    {
        parent: 4210,
        code: 421050,
        description: "COMISIONES CHEQUES DE OTRAS PLAZAS"
    },
    {
        parent: 4210,
        code: 421055,
        description: "MULTAS Y RECARGOS"
    },
    {
        parent: 4210,
        code: 421060,
        description: "SANCIONES CHEQUES DEVUELTOS"
    },
    {
        parent: 4210,
        code: 421095,
        description: "OTROS"
    },
    {
        parent: 4210,
        code: 421099,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 42,
        code: 4215,
        description: "DIVIDENDOS Y PARTICIPACIONES"
    },
    {
        parent: 4215,
        code: 421505,
        description: "DE SOCIEDADES ANONIMAS Y/O ASIMILADAS"
    },
    {
        parent: 4215,
        code: 421510,
        description: "DE SOCIEDADES LIMITADAS Y/O ASIMILADAS"
    },
    {
        parent: 4215,
        code: 421599,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 42,
        code: 4220,
        description: "ARRENDAMIENTOS"
    },
    {
        parent: 4220,
        code: 422005,
        description: "TERRENOS"
    },
    {
        parent: 4220,
        code: 422010,
        description: "CONSTRUCCIONES Y EDIFICIOS"
    },
    {
        parent: 4220,
        code: 422015,
        description: "MAQUINARIA Y EQUIPO"
    },
    {
        parent: 4220,
        code: 422020,
        description: "EQUIPO DE OFICINA"
    },
    {
        parent: 4220,
        code: 422025,
        description: "EQUIPO DE COMPUTACION Y COMUNICACION"
    },
    {
        parent: 4220,
        code: 422030,
        description: "EQUIPO MEDICO - CIENTIFICO"
    },
    {
        parent: 4220,
        code: 422035,
        description: "EQUIPO DE HOTELES Y RESTAURANTES"
    },
    {
        parent: 4220,
        code: 422040,
        description: "FLOTA Y EQUIPO DE TRANSPORTE"
    },
    {
        parent: 4220,
        code: 422045,
        description: "FLOTA Y EQUIPO FLUVIAL Y/O MARITIMO"
    },
    {
        parent: 4220,
        code: 422050,
        description: "FLOTA Y EQUIPO AEREO"
    },
    {
        parent: 4220,
        code: 422055,
        description: "FLOTA Y EQUIPO FERREO"
    },
    {
        parent: 4220,
        code: 422060,
        description: "ACUEDUCTOS PLANTAS Y REDES"
    },
    {
        parent: 4220,
        code: 422062,
        description: "ENVASES Y EMPAQUES"
    },
    {
        parent: 4220,
        code: 422065,
        description: "PLANTACIONES AGRICOLAS  Y FORESTALES"
    },
    {
        parent: 4220,
        code: 422070,
        description: "AERODROMOS"
    },
    {
        parent: 4220,
        code: 422075,
        description: "SEMOVIENTES"
    },
    {
        parent: 4220,
        code: 422099,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 42,
        code: 4225,
        description: "COMISIONES"
    },
    {
        parent: 4225,
        code: 422505,
        description: "SOBRE INVERSIONES"
    },
    {
        parent: 4225,
        code: 422510,
        description: "DE CONCESIONARIOS"
    },
    {
        parent: 4225,
        code: 422515,
        description: "DE ACTIVIDADES FINANCIERAS"
    },
    {
        parent: 4225,
        code: 422520,
        description: "POR VENTA DE SERVICIOS DE TALLER"
    },
    {
        parent: 4225,
        code: 422525,
        description: "POR VENTA DE SEGUROS"
    },
    {
        parent: 4225,
        code: 422530,
        description: "POR INGRESOS PARA TERCEROS"
    },
    {
        parent: 4225,
        code: 422535,
        description: "POR DISTRIBUCION DE PELICULAS"
    },
    {
        parent: 4225,
        code: 422540,
        description: "DERECHOS DE AUTOR"
    },
    {
        parent: 4225,
        code: 422545,
        description: "DERECHOS DE PROGRAMACION"
    },
    {
        parent: 4225,
        code: 422599,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 42,
        code: 4230,
        description: "HONORARIOS"
    },
    {
        parent: 4230,
        code: 423005,
        description: "ASESORIAS"
    },
    {
        parent: 4230,
        code: 423010,
        description: "ASISTENCIA TECNICA"
    },
    {
        parent: 4230,
        code: 423015,
        description: "ADMINISTRACION DE VINCULADAS"
    },
    {
        parent: 4230,
        code: 423099,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 42,
        code: 4235,
        description: "SERVICIOS"
    },
    {
        parent: 4235,
        code: 423505,
        description: "DE BASCULA"
    },
    {
        parent: 4235,
        code: 423510,
        description: "DE TRANSPORTE"
    },
    {
        parent: 4235,
        code: 423515,
        description: "DE PRENSA"
    },
    {
        parent: 4235,
        code: 423520,
        description: "ADMINISTRATIVOS"
    },
    {
        parent: 4235,
        code: 423525,
        description: "TECNICOS"
    },
    {
        parent: 4235,
        code: 423530,
        description: "DE COMPUTACION"
    },
    {
        parent: 4235,
        code: 423535,
        description: "DE TELEFAX"
    },
    {
        parent: 4235,
        code: 423540,
        description: "TALLER DE VEHICULOS"
    },
    {
        parent: 4235,
        code: 423545,
        description: "DE RECEPCION DE AERONAVES"
    },
    {
        parent: 4235,
        code: 423550,
        description: "DE TRANSPORTE PROGRAMA GAS NATURAL"
    },
    {
        parent: 4235,
        code: 423555,
        description: "POR CONTRATOS"
    },
    {
        parent: 4235,
        code: 423560,
        description: "DE TRILLLA"
    },
    {
        parent: 4235,
        code: 423565,
        description: "DE MANTENIMIENTO"
    },
    {
        parent: 4235,
        code: 423570,
        description: "AL PERSONAL"
    },
    {
        parent: 4235,
        code: 423575,
        description: "DE CASINO"
    },
    {
        parent: 4235,
        code: 423580,
        description: "FLETES"
    },
    {
        parent: 4235,
        code: 423585,
        description: "ENTRE COMPAÑIAS"
    },
    {
        parent: 4235,
        code: 423595,
        description: "OTROS"
    },
    {
        parent: 4235,
        code: 423599,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 42,
        code: 4240,
        description: "UTILIDAD EN VENTA DE INVERSIONES"
    },
    {
        parent: 4240,
        code: 424005,
        description: "ACCIONES"
    },
    {
        parent: 4240,
        code: 424010,
        description: "CUOTAS O PARTES DE INTERES SOCIAL"
    },
    {
        parent: 4240,
        code: 424015,
        description: "BONOS"
    },
    {
        parent: 4240,
        code: 424020,
        description: "CEDULAS"
    },
    {
        parent: 4240,
        code: 424025,
        description: "CERTIFICADOS"
    },
    {
        parent: 4240,
        code: 424030,
        description: "PAPELES COMERCIALES"
    },
    {
        parent: 4240,
        code: 424035,
        description: "TITULOS"
    },
    {
        parent: 4240,
        code: 424045,
        description: "DERECHOS FIDUCIARIOS"
    },
    {
        parent: 4240,
        code: 424050,
        description: "OBLIGATORIAS"
    },
    {
        parent: 4240,
        code: 424095,
        description: "OTRAS"
    },
    {
        parent: 4240,
        code: 424099,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 42,
        code: 4245,
        description: "UTILIDAD EN VENTA DE PROPIEDADES PLANTA Y EQUIPO"
    },
    {
        parent: 4245,
        code: 424504,
        description: "TERRENOS"
    },
    {
        parent: 4245,
        code: 424506,
        description: "MATERIALES INDUSTRIA PETROLERA"
    },
    {
        parent: 4245,
        code: 424508,
        description: "CONSTRUCCIONES EN CURSO"
    },
    {
        parent: 4245,
        code: 424512,
        description: "MAQUINARIA EN MONTAJE"
    },
    {
        parent: 4245,
        code: 424516,
        description: "CONSTRUCCIONES Y EDIFICACIONES"
    },
    {
        parent: 4245,
        code: 424520,
        description: "MAQUINARIA Y EQUIPO"
    },
    {
        parent: 4245,
        code: 424524,
        description: "EQUIPO DE OFICINA"
    },
    {
        parent: 4245,
        code: 424528,
        description: "EQUIPO DE COMPUTACION Y COMUNICACION"
    },
    {
        parent: 4245,
        code: 424532,
        description: "EQUIPO MEDICO - CIENTIFICO"
    },
    {
        parent: 4245,
        code: 424536,
        description: "EQUIPO DE HOTELES Y RESTAURANTES"
    },
    {
        parent: 4245,
        code: 424540,
        description: "FLOTA Y EQUIPO DE TRANSPORTE"
    },
    {
        parent: 4245,
        code: 424544,
        description: "FLOTA Y EQUIPO FLUVIAL Y/O MARITIMO"
    },
    {
        parent: 4245,
        code: 424548,
        description: "FLOTA Y EQUIPO AEREO"
    },
    {
        parent: 4245,
        code: 424552,
        description: "FLOTA Y EQUIPO FERREO"
    },
    {
        parent: 4245,
        code: 424556,
        description: "ACUEDUCTOS PLANTAS Y REDES"
    },
    {
        parent: 4245,
        code: 424560,
        description: "ARMAMENTO DE VIGILANCIA"
    },
    {
        parent: 4245,
        code: 424562,
        description: "ENVASES Y EMPAQUES"
    },
    {
        parent: 4245,
        code: 424564,
        description: "PLANTACIONES AGRICOLAS  Y FORESTALES"
    },
    {
        parent: 4245,
        code: 424568,
        description: "VIAS DE COMUNICACION"
    },
    {
        parent: 4245,
        code: 424572,
        description: "MINAS Y CANTERAS"
    },
    {
        parent: 4245,
        code: 424580,
        description: "POZOS ARTESIANOS"
    },
    {
        parent: 4245,
        code: 424584,
        description: "YACIMIENTOS"
    },
    {
        parent: 4245,
        code: 424588,
        description: "SEMOVIENTES"
    },
    {
        parent: 4245,
        code: 424599,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 42,
        code: 4248,
        description: "UTILIDAD EN VENTA DE OTROS BIENES"
    },
    {
        parent: 4248,
        code: 424805,
        description: "INTANGIBLES"
    },
    {
        parent: 4248,
        code: 424810,
        description: "OTROS ACTIVOS"
    },
    {
        parent: 4248,
        code: 424899,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 42,
        code: 4250,
        description: "RECUPERACIONES"
    },
    {
        parent: 4250,
        code: 425005,
        description: "DEUDAS MALAS"
    },
    {
        parent: 4250,
        code: 425010,
        description: "SEGUROS"
    },
    {
        parent: 4250,
        code: 425015,
        description: "RECLAMOS"
    },
    {
        parent: 4250,
        code: 425020,
        description: "REINTEGRO POR PERSONAL EN COMISION"
    },
    {
        parent: 4250,
        code: 425025,
        description: "REINTEGRO GARANTIAS"
    },
    {
        parent: 4250,
        code: 425030,
        description: "DESCUENTOS CONCEDIDOS"
    },
    {
        parent: 4250,
        code: 425035,
        description: "REINTEGRO PROVISIONES"
    },
    {
        parent: 4250,
        code: 425040,
        description: "GASTOS BANCARIOS"
    },
    {
        parent: 4250,
        code: 425045,
        description: "DE DEPRECIACION"
    },
    {
        parent: 4250,
        code: 425050,
        description: "REINTEGRO DE OTROS COSTOS Y GASTOS"
    },
    {
        parent: 4250,
        code: 425099,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 42,
        code: 4255,
        description: "INDEMNIZACIONES"
    },
    {
        parent: 4255,
        code: 425505,
        description: "POR SINIESTRO"
    },
    {
        parent: 4255,
        code: 425510,
        description: "POR SUMINISTROS"
    },
    {
        parent: 4255,
        code: 425515,
        description: "LUCRO CESANTE COMPAÑIAS DE SEGUROS"
    },
    {
        parent: 4255,
        code: 425520,
        description: "DAÑO EMERGENTE COMPAÑIAS DE SEGUROS"
    },
    {
        parent: 4255,
        code: 425525,
        description: "POR PERDIDA DE MERCANCIA"
    },
    {
        parent: 4255,
        code: 425530,
        description: "POR INCUMPLIMIENTO DE CONTRATOS"
    },
    {
        parent: 4255,
        code: 425535,
        description: "DE TERCEROS"
    },
    {
        parent: 4255,
        code: 425540,
        description: "POR INCAPACIDADES I.S.S."
    },
    {
        parent: 4255,
        code: 425595,
        description: "OTRAS"
    },
    {
        parent: 4255,
        code: 425599,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 42,
        code: 4260,
        description: "PARTICIPACIONES EN CONCESIONES"
    },
    {
        parent: 4260,
        code: 426099,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 42,
        code: 4265,
        description: "INGRESOS DE EJERCICIOS ANTERIORES"
    },
    {
        parent: 4265,
        code: 426599,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 42,
        code: 4275,
        description: "DEVOLUCIONES, REBAJAS Y DESCUENTOS EN OTRAS VENTAS (DB)"
    },
    {
        parent: 4275,
        code: 427599,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 42,
        code: 4295,
        description: "DIVERSOS"
    },
    {
        parent: 4295,
        code: 429503,
        description: "CERT"
    },
    {
        parent: 4295,
        code: 429505,
        description: "APROVECHAMIENTOS"
    },
    {
        parent: 4295,
        code: 429507,
        description: "AUXILIOS"
    },
    {
        parent: 4295,
        code: 429509,
        description: "DONACIONES"
    },
    {
        parent: 4295,
        code: 429511,
        description: "INGRESOS POR INVESTIGACION Y DESARROLLO"
    },
    {
        parent: 4295,
        code: 429513,
        description: "POR TRABAJOS EJECUTADOS"
    },
    {
        parent: 4295,
        code: 429515,
        description: "REGALIAS"
    },
    {
        parent: 4295,
        code: 429517,
        description: "DERIVADOS DE LAS EXPORTACIONES"
    },
    {
        parent: 4295,
        code: 429519,
        description: "OTROS INGRESOS DE EXPLOTACION"
    },
    {
        parent: 4295,
        code: 429521,
        description: "DE LA ACTIVIDAD GANADERA"
    },
    {
        parent: 4295,
        code: 429525,
        description: "DERECHOS Y LICITACIONES"
    },
    {
        parent: 4295,
        code: 429530,
        description: "INGRESOS POR ELEMENTOS PERDIDOS"
    },
    {
        parent: 4295,
        code: 429533,
        description: "MULTAS Y RECARGOS"
    },
    {
        parent: 4295,
        code: 429535,
        description: "PREAVISOS DESCONTADOS"
    },
    {
        parent: 4295,
        code: 429537,
        description: "RECLAMOS"
    },
    {
        parent: 4295,
        code: 429540,
        description: "RECOBRO DE DAÑOS"
    },
    {
        parent: 4295,
        code: 429543,
        description: "PREMIOS"
    },
    {
        parent: 4295,
        code: 429545,
        description: "BONIFICACIONES"
    },
    {
        parent: 4295,
        code: 429547,
        description: "PRODUCTOS DESCONTADOS"
    },
    {
        parent: 4295,
        code: 429549,
        description: "RECONOCIMIENTOS I.S.S."
    },
    {
        parent: 4295,
        code: 429551,
        description: "EXCEDENTES"
    },
    {
        parent: 4295,
        code: 429553,
        description: "SOBRANTES DE CAJA MENOR"
    },
    {
        parent: 4295,
        code: 429555,
        description: "SOBRANTES EN LIQUIDACION FLETES"
    },
    {
        parent: 4295,
        code: 429557,
        description: "SUBSIDIOS ESTATALES"
    },
    {
        parent: 4295,
        code: 429559,
        description: "CAPACITACION DISTRIBUIDORES"
    },
    {
        parent: 4295,
        code: 429561,
        description: "DE ESCRITURACION"
    },
    {
        parent: 4295,
        code: 429563,
        description: "REGISTRO PROMESAS DE VENTA"
    },
    {
        parent: 4295,
        code: 429567,
        description: "UTILES, PAPELERIA Y FOTOCOPIAS"
    },
    {
        parent: 4295,
        code: 429571,
        description: "RESULTADOS MATRICULAS Y TRASPASOS"
    },
    {
        parent: 4295,
        code: 429573,
        description: "DECORACIONES"
    },
    {
        parent: 4295,
        code: 429575,
        description: "MANEJO DE CARGA"
    },
    {
        parent: 4295,
        code: 429579,
        description: "HISTORIA CLINICA"
    },
    {
        parent: 4295,
        code: 429581,
        description: "AJUSTE AL PESO"
    },
    {
        parent: 4295,
        code: 429583,
        description: "LLAMADAS TELEFONICAS"
    },
    {
        parent: 4295,
        code: 429599,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 4,
        code: 47,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 47,
        code: 4705,
        description: "CORRECCION MONETARIA"
    },
    {
        parent: 4705,
        code: 470505,
        description: "INVERSIONES (CR)"
    },
    {
        parent: 4705,
        code: 470510,
        description: "INVENTARIOS (CR)"
    },
    {
        parent: 4705,
        code: 470515,
        description: "PROPIEDADES, PLANTA Y EQUIPO (CR)"
    },
    {
        parent: 4705,
        code: 470520,
        description: "INTANGIBLES (CR)"
    },
    {
        parent: 4705,
        code: 470525,
        description: "ACTIVOS DIFERIDOS"
    },
    {
        parent: 4705,
        code: 470530,
        description: "OTROS ACTIVOS (CR)"
    },
    {
        parent: 4705,
        code: 470535,
        description: "PASIVOS SUJETOS DE AJUSTE"
    },
    {
        parent: 4705,
        code: 470540,
        description: "PATRIMONIO"
    },
    {
        parent: 4705,
        code: 470545,
        description: "DEPRECIACION ACUMULADA (DB)"
    },
    {
        parent: 4705,
        code: 470550,
        description: "DEPRECIACION DIFERIDA (CR)"
    },
    {
        parent: 4705,
        code: 470555,
        description: "AGOTAMIENTO ACUMULADO (DB)"
    },
    {
        parent: 4705,
        code: 470560,
        description: "AMORTIZACION ACUMULADA (DB)"
    },
    {
        parent: 4705,
        code: 470565,
        description: "INGRESOS OPERACIONALES (DB)"
    },
    {
        parent: 4705,
        code: 470570,
        description: "INGRESOS NO OPERACIONALES (DB)"
    },
    {
        parent: 4705,
        code: 470575,
        description: "GASTOS OPERACIONALES DE ADMINISTRACION (CR)"
    },
    {
        parent: 4705,
        code: 470580,
        description: "GASTOS OPERACIONALES DE VENTAS (CR)"
    },
    {
        parent: 4705,
        code: 470585,
        description: "GASTOS NO OPERACIONALES (CR)"
    },
    {
        parent: 4705,
        code: 470590,
        description: "COMPRAS (CR)"
    },
    {
        parent: 4705,
        code: 470592,
        description: "COSTO DE VENTAS (CR)"
    },
    {
        parent: 4705,
        code: 470594,
        description: "COSTOS DE PRODUCCION O DE OPERACION (DB)"
    },
    {
        parent: null,
        code: 5,
        description: "GASTOS"
    },
    {
        parent: 5,
        code: 51,
        description: "OPERACIONALES DE ADMINISTRACION"
    },
    {
        parent: 51,
        code: 5105,
        description: "GASTOS DE PERSONAL"
    },
    {
        parent: 5105,
        code: 510503,
        description: "SALARIO INTEGRAL"
    },
    {
        parent: 5105,
        code: 510506,
        description: "SUELDOS"
    },
    {
        parent: 5105,
        code: 510512,
        description: "JORNALES"
    },
    {
        parent: 5105,
        code: 510515,
        description: "HORAS EXTRAS Y RECARGOS"
    },
    {
        parent: 5105,
        code: 510518,
        description: "COMISIONES"
    },
    {
        parent: 5105,
        code: 510521,
        description: "VIATICOS"
    },
    {
        parent: 5105,
        code: 510524,
        description: "INCAPACIDADES"
    },
    {
        parent: 5105,
        code: 510527,
        description: "AUXILIO DE TRANSPORTE"
    },
    {
        parent: 5105,
        code: 510530,
        description: "CESANTIAS"
    },
    {
        parent: 5105,
        code: 510533,
        description: "INTERESES SOBRE CESANTIAS"
    },
    {
        parent: 5105,
        code: 510536,
        description: "PRIMA DE SERVICIOS"
    },
    {
        parent: 5105,
        code: 510539,
        description: "VACACIONES"
    },
    {
        parent: 5105,
        code: 510542,
        description: "PRIMAS EXTRALEGALES"
    },
    {
        parent: 5105,
        code: 510545,
        description: "AUXILIOS"
    },
    {
        parent: 5105,
        code: 510548,
        description: "BONIFICACIONES"
    },
    {
        parent: 5105,
        code: 510551,
        description: "DOTACION Y SUMINISTRO A TRABAJADORES"
    },
    {
        parent: 5105,
        code: 510554,
        description: "SEGUROS"
    },
    {
        parent: 5105,
        code: 510557,
        description: "CUOTAS PARTES PENSIONES DE JUBILACION"
    },
    {
        parent: 5105,
        code: 510558,
        description: "AMORTIZACION CALCULO ACTUARIAL PENSIONES DE JUBILACION"
    },
    {
        parent: 5105,
        code: 510559,
        description: "PENSIONES DE JUBILACION"
    },
    {
        parent: 5105,
        code: 510560,
        description: "INDEMNIZACIONES LABORALES"
    },
    {
        parent: 5105,
        code: 510563,
        description: "CAPACITACION AL PERSONAL"
    },
    {
        parent: 5105,
        code: 510566,
        description: "GASTOS DEPORTIVOS Y DE RECREACION"
    },
    {
        parent: 5105,
        code: 510569,
        description: "APORTES AL I.S.S"
    },
    {
        parent: 5105,
        code: 510572,
        description: "APORTES CAJAS DE COMPENSACION FAMILIAR"
    },
    {
        parent: 5105,
        code: 510575,
        description: "APORTES I.C.B.F."
    },
    {
        parent: 5105,
        code: 510578,
        description: "SENA"
    },
    {
        parent: 5105,
        code: 510581,
        description: "APORTES SINDICALES"
    },
    {
        parent: 5105,
        code: 510584,
        description: "GASTOS MEDICOS Y DROGAS"
    },
    {
        parent: 5105,
        code: 510595,
        description: "OTROS"
    },
    {
        parent: 5105,
        code: 510599,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 51,
        code: 5110,
        description: "HONORARIOS"
    },
    {
        parent: 5110,
        code: 511005,
        description: "JUNTA DIRECTIVA"
    },
    {
        parent: 5110,
        code: 511010,
        description: "REVISORIA FISCAL"
    },
    {
        parent: 5110,
        code: 511015,
        description: "AUDITORIA EXTERNA"
    },
    {
        parent: 5110,
        code: 511020,
        description: "AVALUOS"
    },
    {
        parent: 5110,
        code: 511025,
        description: "ASESORIA JURIDICA"
    },
    {
        parent: 5110,
        code: 511030,
        description: "ASESORIA FINANCIERA"
    },
    {
        parent: 5110,
        code: 511035,
        description: "ASESORIA TECNICA"
    },
    {
        parent: 5110,
        code: 511095,
        description: "OTROS"
    },
    {
        parent: 5110,
        code: 511099,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 51,
        code: 5115,
        description: "IMPUESTOS"
    },
    {
        parent: 5115,
        code: 511505,
        description: "INDUSTRIA Y COMERCIO"
    },
    {
        parent: 5115,
        code: 511510,
        description: "DE TIMBRES"
    },
    {
        parent: 5115,
        code: 511515,
        description: "A LA PROPIEDAD RAIZ"
    },
    {
        parent: 5115,
        code: 511520,
        description: "DERECHOS SOBRE INSTRUMENTOS PUBLICOS"
    },
    {
        parent: 5115,
        code: 511525,
        description: "DE VALORIZACION"
    },
    {
        parent: 5115,
        code: 511530,
        description: "DE TURISMO"
    },
    {
        parent: 5115,
        code: 511535,
        description: "TASA POR UTILIZACION DE PUERTOS"
    },
    {
        parent: 5115,
        code: 511540,
        description: "DE VEHICULOS"
    },
    {
        parent: 5115,
        code: 511545,
        description: "DE ESPECTACULOS PUBLICOS"
    },
    {
        parent: 5115,
        code: 511550,
        description: "CUOTAS DE FOMENTO"
    },
    {
        parent: 5115,
        code: 511570,
        description: "IVA DESCONTABLE"
    },
    {
        parent: 5115,
        code: 511595,
        description: "OTROS"
    },
    {
        parent: 5115,
        code: 511599,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 51,
        code: 5120,
        description: "ARRENDAMIENTOS"
    },
    {
        parent: 5120,
        code: 512005,
        description: "TERRENOS"
    },
    {
        parent: 5120,
        code: 512010,
        description: "CONSTRUCCIONES Y EDIFICACIONES"
    },
    {
        parent: 5120,
        code: 512015,
        description: "MAQUINARIA Y EQUIPO"
    },
    {
        parent: 5120,
        code: 512020,
        description: "EQUIPO DE OFICINA"
    },
    {
        parent: 5120,
        code: 512025,
        description: "EQUIPO DE COMPUTACION Y COMUNICACION"
    },
    {
        parent: 5120,
        code: 512030,
        description: "EQUIPO MEDICO - CIENTIFICO"
    },
    {
        parent: 5120,
        code: 512035,
        description: "EQUIPO DE HOTELES Y RESTAURANTES"
    },
    {
        parent: 5120,
        code: 512040,
        description: "FLOTA Y EQUIPO DE TRANSPORTE"
    },
    {
        parent: 5120,
        code: 512045,
        description: "FLOTA Y EQUIPO FLUVIAL Y/O MARITIMO"
    },
    {
        parent: 5120,
        code: 512050,
        description: "FLOTA Y EQUIPO AEREO"
    },
    {
        parent: 5120,
        code: 512055,
        description: "FLOTA Y EQUIPO FERREO"
    },
    {
        parent: 5120,
        code: 512060,
        description: "ACUEDUCTOS PLANTAS Y REDES"
    },
    {
        parent: 5120,
        code: 512065,
        description: "AERODROMOS"
    },
    {
        parent: 5120,
        code: 512070,
        description: "SEMOVIENTES"
    },
    {
        parent: 5120,
        code: 512095,
        description: "OTROS"
    },
    {
        parent: 5120,
        code: 512099,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 51,
        code: 5125,
        description: "CONTRIBUCIONES Y AFILIACIONES"
    },
    {
        parent: 5125,
        code: 512505,
        description: "CONTRIBUCIONES"
    },
    {
        parent: 5125,
        code: 512510,
        description: "AFILIACIONES Y SOSTENIMIENTO"
    },
    {
        parent: 5125,
        code: 512599,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 51,
        code: 5130,
        description: "SEGUROS"
    },
    {
        parent: 5130,
        code: 513005,
        description: "MANEJO"
    },
    {
        parent: 5130,
        code: 513010,
        description: "CUMPLIMIENTO"
    },
    {
        parent: 5130,
        code: 513015,
        description: "CORRIENTE DEBIL"
    },
    {
        parent: 5130,
        code: 513020,
        description: "VIDA COLECTIVA"
    },
    {
        parent: 5130,
        code: 513025,
        description: "INCENDIO"
    },
    {
        parent: 5130,
        code: 513030,
        description: "TERREMOTO"
    },
    {
        parent: 5130,
        code: 513035,
        description: "SUSTRACCION Y HURTO"
    },
    {
        parent: 5130,
        code: 513040,
        description: "FLOTA Y EQUIPO DE TRANSPORTE"
    },
    {
        parent: 5130,
        code: 513045,
        description: "FLOTA Y EQUIPO FLUVIAL Y/O MARITIMO"
    },
    {
        parent: 5130,
        code: 513050,
        description: "FLOTA Y EQUIPO AEREO"
    },
    {
        parent: 5130,
        code: 513055,
        description: "FLOTA Y EQUIPO FERREO"
    },
    {
        parent: 5130,
        code: 513060,
        description: "RESPONSABILIDAD CIVIL Y EXTRACONTRACTUAL"
    },
    {
        parent: 5130,
        code: 513065,
        description: "VUELO"
    },
    {
        parent: 5130,
        code: 513070,
        description: "ROTURA DE MAQUINARIA"
    },
    {
        parent: 5130,
        code: 513075,
        description: "OBLIGATORIO ACCIDENTE DE TRANSITO"
    },
    {
        parent: 5130,
        code: 513080,
        description: "LUCRO CESANTE"
    },
    {
        parent: 5130,
        code: 513095,
        description: "OTROS"
    },
    {
        parent: 5130,
        code: 513099,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 51,
        code: 5135,
        description: "SERVICIOS"
    },
    {
        parent: 5135,
        code: 513505,
        description: "ASEO Y VIGILANCIA"
    },
    {
        parent: 5135,
        code: 513510,
        description: "TEMPORALES"
    },
    {
        parent: 5135,
        code: 513515,
        description: "ASISTENCIA TECNICA"
    },
    {
        parent: 5135,
        code: 513520,
        description: "PROCESAMIENTO ELECTRONICO DE DATOS"
    },
    {
        parent: 5135,
        code: 513525,
        description: "ACUEDUCTO Y ALCANTARILLADO"
    },
    {
        parent: 5135,
        code: 513530,
        description: "ENERGIA ELECTRICA"
    },
    {
        parent: 5135,
        code: 513535,
        description: "TELEFONO"
    },
    {
        parent: 5135,
        code: 513540,
        description: "CORREO, PORTES Y TELEGRAMAS"
    },
    {
        parent: 5135,
        code: 513545,
        description: "FAX Y TELEX"
    },
    {
        parent: 5135,
        code: 513550,
        description: "TRANSPORTE, FLETES Y ACARREOS"
    },
    {
        parent: 5135,
        code: 513555,
        description: "GAS"
    },
    {
        parent: 5135,
        code: 513595,
        description: "OTROS"
    },
    {
        parent: 5135,
        code: 513599,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 51,
        code: 5140,
        description: "GASTOS LEGALES"
    },
    {
        parent: 5140,
        code: 514005,
        description: "NOTARIALES"
    },
    {
        parent: 5140,
        code: 514010,
        description: "REGISTRO MERCANTIL"
    },
    {
        parent: 5140,
        code: 514015,
        description: "TRAMITES Y LICENCIAS"
    },
    {
        parent: 5140,
        code: 514020,
        description: "ADUANEROS"
    },
    {
        parent: 5140,
        code: 514025,
        description: "CONSULARES"
    },
    {
        parent: 5140,
        code: 514095,
        description: "OTROS"
    },
    {
        parent: 5140,
        code: 514099,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 51,
        code: 5145,
        description: "MANTENIMIENTO Y REPARACIONES"
    },
    {
        parent: 5145,
        code: 514505,
        description: "TERRENOS"
    },
    {
        parent: 5145,
        code: 514510,
        description: "CONSTRUCCIONES Y EDIFICACIONES"
    },
    {
        parent: 5145,
        code: 514515,
        description: "MAQUINARIA Y EQUIPO"
    },
    {
        parent: 5145,
        code: 514520,
        description: "EQUIPO DE OFICINA"
    },
    {
        parent: 5145,
        code: 514525,
        description: "EQUIPO DE COMPUTACION Y COMUNICACION"
    },
    {
        parent: 5145,
        code: 514530,
        description: "EQUIPO MEDICO-CIENTIFICO"
    },
    {
        parent: 5145,
        code: 514535,
        description: "EQUIPO DE HOTELES Y RESTAURANTES"
    },
    {
        parent: 5145,
        code: 514540,
        description: "FLOTA Y EQUIPO DE TRANSPORTE"
    },
    {
        parent: 5145,
        code: 514545,
        description: "FLOTA Y EQUIPO FLUVIAL Y/O MARITIMO"
    },
    {
        parent: 5145,
        code: 514550,
        description: "FLOTA Y EQUIPO AEREO"
    },
    {
        parent: 5145,
        code: 514555,
        description: "FLOTA Y EQUIPO FERREO"
    },
    {
        parent: 5145,
        code: 514560,
        description: "ACUEDUCTOS PLANTAS Y REDES"
    },
    {
        parent: 5145,
        code: 514565,
        description: "ARMAMENTO DE VIGILANCIA"
    },
    {
        parent: 5145,
        code: 514570,
        description: "VIAS DE COMUNICACION"
    },
    {
        parent: 5145,
        code: 514599,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 51,
        code: 5150,
        description: "ADECUACION E INSTALACION"
    },
    {
        parent: 5150,
        code: 515005,
        description: "INSTALACIONES ELECTRICAS"
    },
    {
        parent: 5150,
        code: 515010,
        description: "ARREGLOS ORNAMENTALES"
    },
    {
        parent: 5150,
        code: 515015,
        description: "REPARACIONES LOCATIVAS"
    },
    {
        parent: 5150,
        code: 515095,
        description: "OTROS"
    },
    {
        parent: 5150,
        code: 515099,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 51,
        code: 5155,
        description: "GASTOS DE VIAJE"
    },
    {
        parent: 5155,
        code: 515505,
        description: "ALOJAMIENTO Y MANUTENCION"
    },
    {
        parent: 5155,
        code: 515510,
        description: "PASAJES FLUVIALES Y/O MARITIMOS"
    },
    {
        parent: 5155,
        code: 515515,
        description: "PASAJES AEREOS"
    },
    {
        parent: 5155,
        code: 515520,
        description: "PASAJES TERRESTRES"
    },
    {
        parent: 5155,
        code: 515525,
        description: "PASAJES FERREOS"
    },
    {
        parent: 5155,
        code: 515595,
        description: "OTROS"
    },
    {
        parent: 5155,
        code: 515599,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 51,
        code: 5160,
        description: "DEPRECIACIONES"
    },
    {
        parent: 5160,
        code: 516005,
        description: "CONSTRUCCIONES Y EDIFICACIONES"
    },
    {
        parent: 5160,
        code: 516010,
        description: "MAQUINARIA Y EQUIPO"
    },
    {
        parent: 5160,
        code: 516015,
        description: "EQUIPO DE OFICINA"
    },
    {
        parent: 5160,
        code: 516020,
        description: "EQUIPO DE COMPUTACION Y COMUNICACION"
    },
    {
        parent: 5160,
        code: 516025,
        description: "EQUIPO MEDICO - CIENTIFICO"
    },
    {
        parent: 5160,
        code: 516030,
        description: "EQUIPO DE HOTELES Y RESTAURANTES"
    },
    {
        parent: 5160,
        code: 516035,
        description: "FLOTA Y EQUIPO DE TRANSPORTE"
    },
    {
        parent: 5160,
        code: 516040,
        description: "FLOTA Y EQUIPO FLUVIAL Y/O MARITIMO"
    },
    {
        parent: 5160,
        code: 516045,
        description: "FLOTA Y EQUIPO AEREO"
    },
    {
        parent: 5160,
        code: 516050,
        description: "FLOTA Y EQUIPO FERREO"
    },
    {
        parent: 5160,
        code: 516055,
        description: "ACUEDUCTOS, PLANTAS Y REDES"
    },
    {
        parent: 5160,
        code: 516060,
        description: "ARMAMENTO DE VIGILANCIA"
    },
    {
        parent: 5160,
        code: 516099,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 51,
        code: 5165,
        description: "AMORTIZACIONES"
    },
    {
        parent: 5165,
        code: 516505,
        description: "VIAS DE COMUNICACION"
    },
    {
        parent: 5165,
        code: 516510,
        description: "INTANGIBLES"
    },
    {
        parent: 5165,
        code: 516515,
        description: "CARGOS DIFERIDOS"
    },
    {
        parent: 5165,
        code: 516595,
        description: "OTRAS"
    },
    {
        parent: 5165,
        code: 516599,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 51,
        code: 5195,
        description: "DIVERSOS"
    },
    {
        parent: 5195,
        code: 519505,
        description: "COMISIONES"
    },
    {
        parent: 5195,
        code: 519510,
        description: "LIBROS, SUSCRIPCIONES, PERIODICOS Y REVISTAS"
    },
    {
        parent: 5195,
        code: 519515,
        description: "MUSICA AMBIENTAL"
    },
    {
        parent: 5195,
        code: 519520,
        description: "GASTOS DE REPRESENTACION Y RELACIONES PUBLICAS"
    },
    {
        parent: 5195,
        code: 519525,
        description: "ELEMENTOS DE ASEO Y CAFETERIA"
    },
    {
        parent: 5195,
        code: 519530,
        description: "UTILES, PAPELERIA Y FOTOCOPIAS"
    },
    {
        parent: 5195,
        code: 519535,
        description: "COMBUSTIBLES Y LUBRICANTES"
    },
    {
        parent: 5195,
        code: 519540,
        description: "ENVASES Y EMPAQUES"
    },
    {
        parent: 5195,
        code: 519545,
        description: "TAXIS Y BUSES"
    },
    {
        parent: 5195,
        code: 519550,
        description: "ESTAMPILLAS"
    },
    {
        parent: 5195,
        code: 519555,
        description: "MICROFILMACION"
    },
    {
        parent: 5195,
        code: 519560,
        description: "CASINO Y RESTAURANTE"
    },
    {
        parent: 5195,
        code: 519565,
        description: "PARQUEADEROS"
    },
    {
        parent: 5195,
        code: 519570,
        description: "INDEMNIZACION POR DAÑOS A TERCEROS"
    },
    {
        parent: 5195,
        code: 519575,
        description: "POLVORA Y SIMILARES"
    },
    {
        parent: 5195,
        code: 519595,
        description: "OTROS"
    },
    {
        parent: 5195,
        code: 519599,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 51,
        code: 5199,
        description: "PROVISIONES"
    },
    {
        parent: 5199,
        code: 519905,
        description: "INVERSIONES"
    },
    {
        parent: 5199,
        code: 519910,
        description: "DEUDORES"
    },
    {
        parent: 5199,
        code: 519915,
        description: "PROPIEDADES, PLANTA Y EQUIPO"
    },
    {
        parent: 5199,
        code: 519995,
        description: "OTROS ACTIVOS"
    },
    {
        parent: 5199,
        code: 519999,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 5,
        code: 52,
        description: "OPERACIONALES DE VENTAS"
    },
    {
        parent: 52,
        code: 5205,
        description: "GASTOS DE PERSONAL"
    },
    {
        parent: 5205,
        code: 520503,
        description: "SALARIO INTEGRAL"
    },
    {
        parent: 5205,
        code: 520506,
        description: "SUELDOS"
    },
    {
        parent: 5205,
        code: 520512,
        description: "JORNALES"
    },
    {
        parent: 5205,
        code: 520515,
        description: "HORAS EXTRAS Y RECARGOS"
    },
    {
        parent: 5205,
        code: 520518,
        description: "COMISIONES"
    },
    {
        parent: 5205,
        code: 520521,
        description: "VIATICOS"
    },
    {
        parent: 5205,
        code: 520524,
        description: "INCAPACIDADES"
    },
    {
        parent: 5205,
        code: 520527,
        description: "AUXILIO DE TRANSPORTE"
    },
    {
        parent: 5205,
        code: 520530,
        description: "CESANTIAS"
    },
    {
        parent: 5205,
        code: 520533,
        description: "INTERESES SOBRE CESANTIAS"
    },
    {
        parent: 5205,
        code: 520536,
        description: "PRIMA DE SERVICIOS"
    },
    {
        parent: 5205,
        code: 520539,
        description: "VACACIONES"
    },
    {
        parent: 5205,
        code: 520542,
        description: "PRIMAS EXTRALEGALES"
    },
    {
        parent: 5205,
        code: 520545,
        description: "AUXILIOS"
    },
    {
        parent: 5205,
        code: 520548,
        description: "BONIFICACIONES"
    },
    {
        parent: 5205,
        code: 520551,
        description: "DOTACION Y SUMINISTRO A TRABAJADORES"
    },
    {
        parent: 5205,
        code: 520554,
        description: "SEGUROS"
    },
    {
        parent: 5205,
        code: 520557,
        description: "CUOTAS PARTES PENSIONES DE JUBILACION"
    },
    {
        parent: 5205,
        code: 520558,
        description: "AMORTIZACION CALCULO ACTUARIAL PENSIONES DE JUBILACION"
    },
    {
        parent: 5205,
        code: 520559,
        description: "PENSIONES DE JUBILACION"
    },
    {
        parent: 5205,
        code: 520560,
        description: "INDEMNIZACIONES LABORALES"
    },
    {
        parent: 5205,
        code: 520563,
        description: "CAPACITACION AL PERSONAL"
    },
    {
        parent: 5205,
        code: 520566,
        description: "GASTOS DEPORTIVOS Y DE RECREACION"
    },
    {
        parent: 5205,
        code: 520569,
        description: "APORTES AL I.S.S"
    },
    {
        parent: 5205,
        code: 520572,
        description: "APORTES CAJAS DE COMPENSACION FAMILIAR"
    },
    {
        parent: 5205,
        code: 520575,
        description: "APORTES I.C.B.F."
    },
    {
        parent: 5205,
        code: 520578,
        description: "SENA"
    },
    {
        parent: 5205,
        code: 520581,
        description: "APORTES SINDICALES"
    },
    {
        parent: 5205,
        code: 520584,
        description: "GASTOS MEDICOS Y DROGAS"
    },
    {
        parent: 5205,
        code: 520595,
        description: "OTROS"
    },
    {
        parent: 5205,
        code: 520599,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 52,
        code: 5210,
        description: "HONORARIOS"
    },
    {
        parent: 5210,
        code: 521005,
        description: "JUNTA DIRECTIVA"
    },
    {
        parent: 5210,
        code: 521010,
        description: "REVISORIA FISCAL"
    },
    {
        parent: 5210,
        code: 521015,
        description: "AUDITORIA EXTERNA"
    },
    {
        parent: 5210,
        code: 521020,
        description: "AVALUOS"
    },
    {
        parent: 5210,
        code: 521025,
        description: "ASESORIA JURIDICA"
    },
    {
        parent: 5210,
        code: 521030,
        description: "ASESORIA FINANCIERA"
    },
    {
        parent: 5210,
        code: 521035,
        description: "ASESORIA TECNICA"
    },
    {
        parent: 5210,
        code: 521095,
        description: "OTROS"
    },
    {
        parent: 5210,
        code: 521099,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 52,
        code: 5215,
        description: "IMPUESTOS"
    },
    {
        parent: 5215,
        code: 521505,
        description: "INDUSTRIA Y COMERCIO"
    },
    {
        parent: 5215,
        code: 521510,
        description: "DE TIMBRES"
    },
    {
        parent: 5215,
        code: 521515,
        description: "A LA PROPIEDAD RAIZ"
    },
    {
        parent: 5215,
        code: 521520,
        description: "DERECHOS SOBRE INSTRUMENTOS PUBLICOS"
    },
    {
        parent: 5215,
        code: 521525,
        description: "DE VALORIZACION"
    },
    {
        parent: 5215,
        code: 521530,
        description: "DE TURISMO"
    },
    {
        parent: 5215,
        code: 521535,
        description: "TASA POR UTILIZACION DE PUERTOS"
    },
    {
        parent: 5215,
        code: 521540,
        description: "DE VEHICULOS"
    },
    {
        parent: 5215,
        code: 521545,
        description: "DE ESPECTACULOS PUBLICOS"
    },
    {
        parent: 5215,
        code: 521550,
        description: "CUOTAS DE FOMENTO"
    },
    {
        parent: 5215,
        code: 521555,
        description: "LICORES"
    },
    {
        parent: 5215,
        code: 521560,
        description: "CERVEZAS"
    },
    {
        parent: 5215,
        code: 521565,
        description: "CIGARRILLOS"
    },
    {
        parent: 5215,
        code: 521570,
        description: "IVA DESCONTABLE"
    },
    {
        parent: 5215,
        code: 521595,
        description: "OTROS"
    },
    {
        parent: 5215,
        code: 521599,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 52,
        code: 5220,
        description: "ARRENDAMIENTOS"
    },
    {
        parent: 5220,
        code: 522005,
        description: "TERRENOS"
    },
    {
        parent: 5220,
        code: 522010,
        description: "CONSTRUCCIONES Y EDIFICACIONES"
    },
    {
        parent: 5220,
        code: 522015,
        description: "MAQUINARIA Y EQUIPO"
    },
    {
        parent: 5220,
        code: 522020,
        description: "EQUIPO DE OFICINA"
    },
    {
        parent: 5220,
        code: 522025,
        description: "EQUIPO DE COMPUTACION Y COMUNICACION"
    },
    {
        parent: 5220,
        code: 522030,
        description: "EQUIPO MEDICO - CIENTIFICO"
    },
    {
        parent: 5220,
        code: 522035,
        description: "EQUIPO DE HOTELES Y RESTAURANTES"
    },
    {
        parent: 5220,
        code: 522040,
        description: "FLOTA Y EQUIPO DE TRANSPORTE"
    },
    {
        parent: 5220,
        code: 522045,
        description: "FLOTA Y EQUIPO FLUVIAL Y/O MARITIMO"
    },
    {
        parent: 5220,
        code: 522050,
        description: "FLOTA Y EQUIPO AEREO"
    },
    {
        parent: 5220,
        code: 522055,
        description: "FLOTA Y EQUIPO FERREO"
    },
    {
        parent: 5220,
        code: 522060,
        description: "ACUEDUCTOS PLANTAS Y REDES"
    },
    {
        parent: 5220,
        code: 522065,
        description: "AERODROMOS"
    },
    {
        parent: 5220,
        code: 522070,
        description: "SEMOVIENTES"
    },
    {
        parent: 5220,
        code: 522095,
        description: "OTROS"
    },
    {
        parent: 5220,
        code: 522099,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 52,
        code: 5225,
        description: "CONTRIBUCIONES Y AFILIACIONES"
    },
    {
        parent: 5225,
        code: 522505,
        description: "CONTRIBUCIONES"
    },
    {
        parent: 5225,
        code: 522510,
        description: "AFILIACIONES Y SOSTENIMIENTO"
    },
    {
        parent: 5225,
        code: 522599,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 52,
        code: 5230,
        description: "SEGUROS"
    },
    {
        parent: 5230,
        code: 523005,
        description: "MANEJO"
    },
    {
        parent: 5230,
        code: 523010,
        description: "CUMPLIMIENTO"
    },
    {
        parent: 5230,
        code: 523015,
        description: "CORRIENTE DEBIL"
    },
    {
        parent: 5230,
        code: 523020,
        description: "VIDA COLECTIVA"
    },
    {
        parent: 5230,
        code: 523025,
        description: "INCENDIO"
    },
    {
        parent: 5230,
        code: 523030,
        description: "TERREMOTO"
    },
    {
        parent: 5230,
        code: 523035,
        description: "SUSTRACCION Y HURTO"
    },
    {
        parent: 5230,
        code: 523040,
        description: "FLOTA Y EQUIPO DE TRANSPORTE"
    },
    {
        parent: 5230,
        code: 523045,
        description: "FLOTA Y EQUIPO FLUVIAL Y/O MARITIMO"
    },
    {
        parent: 5230,
        code: 523050,
        description: "FLOTA Y EQUIPO AEREO"
    },
    {
        parent: 5230,
        code: 523055,
        description: "FLOTA Y EQUIPO FERREO"
    },
    {
        parent: 5230,
        code: 523060,
        description: "RESPONSABILIDAD CIVIL Y EXTRACONTRACTUAL"
    },
    {
        parent: 5230,
        code: 523065,
        description: "VUELO"
    },
    {
        parent: 5230,
        code: 523070,
        description: "ROTURA DE MAQUINARIA"
    },
    {
        parent: 5230,
        code: 523075,
        description: "OBLIGATORIO ACCIDENTE DE TRANSITO"
    },
    {
        parent: 5230,
        code: 523080,
        description: "LUCRO CESANTE"
    },
    {
        parent: 5230,
        code: 523095,
        description: "OTROS"
    },
    {
        parent: 5230,
        code: 523099,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 52,
        code: 5235,
        description: "SERVICIOS"
    },
    {
        parent: 5235,
        code: 523505,
        description: "ASEO Y VIGILANCIA"
    },
    {
        parent: 5235,
        code: 523510,
        description: "TEMPORALES"
    },
    {
        parent: 5235,
        code: 523515,
        description: "ASISTENCIA TECNICA"
    },
    {
        parent: 5235,
        code: 523520,
        description: "PROCESAMIENTO ELECTRONICO DE DATOS"
    },
    {
        parent: 5235,
        code: 523525,
        description: "ACUEDUCTO Y ALCANTARILLADO"
    },
    {
        parent: 5235,
        code: 523530,
        description: "ENERGIA ELECTRICA"
    },
    {
        parent: 5235,
        code: 523535,
        description: "TELEFONO"
    },
    {
        parent: 5235,
        code: 523540,
        description: "CORREO, PORTES Y TELEGRAMAS"
    },
    {
        parent: 5235,
        code: 523545,
        description: "FAX Y TELEX"
    },
    {
        parent: 5235,
        code: 523550,
        description: "TRANSPORTE, FLETES Y ACARREOS"
    },
    {
        parent: 5235,
        code: 523555,
        description: "GAS"
    },
    {
        parent: 5235,
        code: 523560,
        description: "PROPAGANDA Y PUBLICIDAD"
    },
    {
        parent: 5235,
        code: 523595,
        description: "OTROS"
    },
    {
        parent: 5235,
        code: 523599,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 52,
        code: 5240,
        description: "GASTOS LEGALES"
    },
    {
        parent: 5240,
        code: 524005,
        description: "NOTARIALES"
    },
    {
        parent: 5240,
        code: 524010,
        description: "REGISTRO MERCANTIL"
    },
    {
        parent: 5240,
        code: 524015,
        description: "TRAMITES Y LICENCIAS"
    },
    {
        parent: 5240,
        code: 524020,
        description: "ADUANEROS"
    },
    {
        parent: 5240,
        code: 524025,
        description: "CONSULARES"
    },
    {
        parent: 5240,
        code: 524095,
        description: "OTROS"
    },
    {
        parent: 5240,
        code: 524099,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 52,
        code: 5245,
        description: "MANTENIMIENTO Y REPARACIONES"
    },
    {
        parent: 5245,
        code: 524505,
        description: "TERRENOS"
    },
    {
        parent: 5245,
        code: 524510,
        description: "CONSTRUCCIONES Y EDIFICACIONES"
    },
    {
        parent: 5245,
        code: 524515,
        description: "MAQUINARIA Y EQUIPO"
    },
    {
        parent: 5245,
        code: 524520,
        description: "EQUIPO DE OFICINA"
    },
    {
        parent: 5245,
        code: 524525,
        description: "EQUIPO DE COMPUTACION Y COMUNICACION"
    },
    {
        parent: 5245,
        code: 524530,
        description: "EQUIPO MEDICO - CIENTIFICO"
    },
    {
        parent: 5245,
        code: 524535,
        description: "EQUIPO DE HOTELES Y RESTAURANTES"
    },
    {
        parent: 5245,
        code: 524540,
        description: "FLOTA Y EQUIPO DE TRANSPORTE"
    },
    {
        parent: 5245,
        code: 524545,
        description: "FLOTA Y EQUIPO FLUVIAL Y/O MARITIMO"
    },
    {
        parent: 5245,
        code: 524550,
        description: "FLOTA Y EQUIPO AEREO"
    },
    {
        parent: 5245,
        code: 524555,
        description: "FLOTA Y EQUIPO FERREO"
    },
    {
        parent: 5245,
        code: 524560,
        description: "ACUEDUCTOS PLANTAS Y REDES"
    },
    {
        parent: 5245,
        code: 524565,
        description: "ARMAMENTO DE VIGILANCIA"
    },
    {
        parent: 5245,
        code: 524570,
        description: "VIAS DE COMUNICACION"
    },
    {
        parent: 5245,
        code: 524599,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 52,
        code: 5250,
        description: "ADECUACION E INSTALACION"
    },
    {
        parent: 5250,
        code: 525005,
        description: "INSTALACIONES ELECTRICAS"
    },
    {
        parent: 5250,
        code: 525010,
        description: "ARREGLOS ORNAMENTALES"
    },
    {
        parent: 5250,
        code: 525015,
        description: "REPARACIONES LOCATIVAS"
    },
    {
        parent: 5250,
        code: 525095,
        description: "OTROS"
    },
    {
        parent: 5250,
        code: 525099,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 52,
        code: 5255,
        description: "GASTOS DE VIAJE"
    },
    {
        parent: 5255,
        code: 525505,
        description: "ALOJAMIENTO Y MANUTENCION"
    },
    {
        parent: 5255,
        code: 525510,
        description: "PASAJES FLUVIALES Y/O MARITIMOS"
    },
    {
        parent: 5255,
        code: 525515,
        description: "PASAJES AEREOS"
    },
    {
        parent: 5255,
        code: 525520,
        description: "PASAJES TERRESTRES"
    },
    {
        parent: 5255,
        code: 525525,
        description: "PASAJES FERREOS"
    },
    {
        parent: 5255,
        code: 525595,
        description: "OTROS"
    },
    {
        parent: 5255,
        code: 525599,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 52,
        code: 5260,
        description: "DEPRECIACIONES"
    },
    {
        parent: 5260,
        code: 526005,
        description: "CONSTRUCCIONES Y EDIFICACIONES"
    },
    {
        parent: 5260,
        code: 526010,
        description: "MAQUINARIA Y EQUIPO"
    },
    {
        parent: 5260,
        code: 526015,
        description: "EQUIPO DE OFICINA"
    },
    {
        parent: 5260,
        code: 526020,
        description: "EQUIPO DE COMPUTACION Y COMUNICACION"
    },
    {
        parent: 5260,
        code: 526025,
        description: "EQUIPO MEDICO - CIENTIFICO"
    },
    {
        parent: 5260,
        code: 526030,
        description: "EQUIPO DE HOTELES Y RESTAURANTES"
    },
    {
        parent: 5260,
        code: 526035,
        description: "FLOTA Y EQUIPO DE TRANSPORTE"
    },
    {
        parent: 5260,
        code: 526040,
        description: "FLOTA Y EQUIPO FLUVIAL Y/O MARITIMO"
    },
    {
        parent: 5260,
        code: 526045,
        description: "FLOTA Y EQUIPO AEREO"
    },
    {
        parent: 5260,
        code: 526050,
        description: "FLOTA Y EQUIPO FERREO"
    },
    {
        parent: 5260,
        code: 526055,
        description: "ACUEDUCTOS, PLANTAS Y REDES"
    },
    {
        parent: 5260,
        code: 526060,
        description: "ARMAMENTO DE VIGILANCIA"
    },
    {
        parent: 5260,
        code: 526065,
        description: "ENVASES Y EMPAQUES"
    },
    {
        parent: 5260,
        code: 526099,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 52,
        code: 5265,
        description: "AMORTIZACIONES"
    },
    {
        parent: 5265,
        code: 526505,
        description: "VIAS DE COMUNICACION"
    },
    {
        parent: 5265,
        code: 526510,
        description: "INTANGIBLES"
    },
    {
        parent: 5265,
        code: 526515,
        description: "CARGOS DIFERIDOS"
    },
    {
        parent: 5265,
        code: 526595,
        description: "OTRAS"
    },
    {
        parent: 5265,
        code: 526599,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 52,
        code: 5270,
        description: "FINANCIEROS - REAJUSTE DEL SISTEMA"
    },
    {
        parent: 5270,
        code: 527001,
        description: "a 527098"
    },
    {
        parent: 5270,
        code: 527099,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 52,
        code: 5295,
        description: "DIVERSOS"
    },
    {
        parent: 5295,
        code: 529505,
        description: "COMISIONES"
    },
    {
        parent: 5295,
        code: 529510,
        description: "LIBROS, SUSCRIPCIONES, PERIODICOS Y REVISTAS"
    },
    {
        parent: 5295,
        code: 529515,
        description: "MUSICA AMBIENTAL"
    },
    {
        parent: 5295,
        code: 529520,
        description: "GASTOS DE REPRESENTACION Y RELACIONES PUBLICAS"
    },
    {
        parent: 5295,
        code: 529525,
        description: "ELEMENTOS DE ASEO Y CAFETERIA"
    },
    {
        parent: 5295,
        code: 529530,
        description: "UTILES, PAPELERIA Y FOTOCOPIAS"
    },
    {
        parent: 5295,
        code: 529535,
        description: "COMBUSTIBLES Y LUBRICANTES"
    },
    {
        parent: 5295,
        code: 529540,
        description: "ENVASES Y EMPAQUES"
    },
    {
        parent: 5295,
        code: 529545,
        description: "TAXIS Y BUSES"
    },
    {
        parent: 5295,
        code: 529550,
        description: "ESTAMPILLAS"
    },
    {
        parent: 5295,
        code: 529555,
        description: "MICROFILMACION"
    },
    {
        parent: 5295,
        code: 529560,
        description: "CASINO Y RESTAURANTE"
    },
    {
        parent: 5295,
        code: 529565,
        description: "PARQUEADEROS"
    },
    {
        parent: 5295,
        code: 529570,
        description: "INDEMNIZACION POR DAÑOS A TERCEROS"
    },
    {
        parent: 5295,
        code: 529575,
        description: "POLVORA Y SIMILARES"
    },
    {
        parent: 5295,
        code: 529595,
        description: "OTROS"
    },
    {
        parent: 5295,
        code: 529599,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 52,
        code: 5299,
        description: "PROVISIONES"
    },
    {
        parent: 5299,
        code: 529905,
        description: "INVERSIONES"
    },
    {
        parent: 5299,
        code: 529910,
        description: "DEUDORES"
    },
    {
        parent: 5299,
        code: 529915,
        description: "INVENTARIOS"
    },
    {
        parent: 5299,
        code: 529920,
        description: "PROPIEDADES, PLANTA Y EQUIPO"
    },
    {
        parent: 5299,
        code: 529995,
        description: "OTROS ACTIVOS"
    },
    {
        parent: 5299,
        code: 529999,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 5,
        code: 53,
        description: "NO OPERACIONALES"
    },
    {
        parent: 53,
        code: 5305,
        description: "FINANCIEROS"
    },
    {
        parent: 5305,
        code: 530505,
        description: "GASTOS BANCARIOS"
    },
    {
        parent: 5305,
        code: 530510,
        description: "REAJUSTE MONETARIO - UPAC"
    },
    {
        parent: 5305,
        code: 530515,
        description: "COMISIONES"
    },
    {
        parent: 5305,
        code: 530520,
        description: "INTERESES"
    },
    {
        parent: 5305,
        code: 530525,
        description: "DIFERENCIA EN CAMBIO"
    },
    {
        parent: 5305,
        code: 530530,
        description: "GASTOS EN NEGOCIACION CERTIFICADOS DE CAMBIO"
    },
    {
        parent: 5305,
        code: 530535,
        description: "DESCUENTOS COMERCIALES CONDICIONADOS"
    },
    {
        parent: 5305,
        code: 530540,
        description: "GASTOS MANEJO Y EMISION DE BONOS"
    },
    {
        parent: 5305,
        code: 530545,
        description: "PRIMA AMORTIZADA"
    },
    {
        parent: 5305,
        code: 530595,
        description: "OTROS"
    },
    {
        parent: 5305,
        code: 530599,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 53,
        code: 5310,
        description: "PERDIDA EN VENTA Y RETIRO DE BIENES"
    },
    {
        parent: 5310,
        code: 531005,
        description: "VENTA DE INVERSIONES"
    },
    {
        parent: 5310,
        code: 531010,
        description: "VENTA DE CARTERA"
    },
    {
        parent: 5310,
        code: 531015,
        description: "VENTA DE PROPIEDADES PLANTA Y EQUIPO"
    },
    {
        parent: 5310,
        code: 531020,
        description: "VENTA DE INTANGIBLES"
    },
    {
        parent: 5310,
        code: 531025,
        description: "VENTA DE OTROS ACTIVOS"
    },
    {
        parent: 5310,
        code: 531030,
        description: "RETIRO DE PROPIEDADES PLANTA Y EQUIPO"
    },
    {
        parent: 5310,
        code: 531035,
        description: "RETIRO DE OTROS ACTIVOS"
    },
    {
        parent: 5310,
        code: 531040,
        description: "PERDIDAS POR SINIESTROS"
    },
    {
        parent: 5310,
        code: 531095,
        description: "OTROS"
    },
    {
        parent: 5310,
        code: 531099,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 53,
        code: 5315,
        description: "GASTOS EXTRAORDINARIOS"
    },
    {
        parent: 5315,
        code: 531505,
        description: "COSTAS Y PROCESOS JUDICIALES"
    },
    {
        parent: 5315,
        code: 531510,
        description: "ACTIVIDADES CULTURALES Y CIVICAS"
    },
    {
        parent: 5315,
        code: 531515,
        description: "COSTOS Y GASTOS DE EJERCICIOS ANTERIORES"
    },
    {
        parent: 5315,
        code: 531520,
        description: "IMPUESTOS ASUMIDOS"
    },
    {
        parent: 5315,
        code: 531595,
        description: "OTROS"
    },
    {
        parent: 5315,
        code: 531599,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 53,
        code: 5395,
        description: "GASTOS DIVERSOS"
    },
    {
        parent: 5395,
        code: 539505,
        description: "DEMANDAS LABORALES"
    },
    {
        parent: 5395,
        code: 539510,
        description: "DEMANDAS POR INCUMPLIMIENTO DE CONTRATOS"
    },
    {
        parent: 5395,
        code: 539515,
        description: "INDEMNIZACIONES"
    },
    {
        parent: 5395,
        code: 539520,
        description: "MULTAS, SANCIONES Y LITIGIOS"
    },
    {
        parent: 5395,
        code: 539525,
        description: "DONACIONES"
    },
    {
        parent: 5395,
        code: 539530,
        description: "CONSTITUCION DE GARANTIAS"
    },
    {
        parent: 5395,
        code: 539535,
        description: "AMORTIZACION DE BIENES ENTREGADOS EN COMODATO"
    },
    {
        parent: 5395,
        code: 539595,
        description: "OTROS"
    },
    {
        parent: 5395,
        code: 539599,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 5,
        code: 54,
        description: "IMPUESTO DE RENTA Y COMPLEMENTARIOS"
    },
    {
        parent: 54,
        code: 5405,
        description: "IMPUESTO DE RENTA Y COMPLEMENTARIOS"
    },
    {
        parent: 5405,
        code: 540505,
        description: "IMPUESTO DE RENTA Y COMPLEMENTARIOS"
    },
    {
        parent: 5,
        code: 59,
        description: "GANANCIAS Y PERDIDAS"
    },
    {
        parent: 59,
        code: 5905,
        description: "GANANCIAS Y PERDIDAS"
    },
    {
        parent: 5905,
        code: 590505,
        description: "GANANCIAS Y PERDIDAS"
    },
    {
        parent: null,
        code: 6,
        description: "COSTOS DE VENTAS"
    },
    {
        parent: 6,
        code: 61,
        description: "COSTO DE VENTAS Y DE PRESTACION DE SERVICIOS"
    },
    {
        parent: 61,
        code: 6105,
        description: "AGRICULTURA, GANADERIA, CAZA Y SILVICULTURA"
    },
    {
        parent: 6105,
        code: 610505,
        description: "CULTIVO DE CEREALES"
    },
    {
        parent: 6105,
        code: 610510,
        description: "CULTIVOS DE HORTALIZAS, LEGUMBRES Y PLANTAS ORNAMENTALES"
    },
    {
        parent: 6105,
        code: 610515,
        description: "CULTIVOS DE FRUTAS, NUECES Y PLANTAS AROMATICAS"
    },
    {
        parent: 6105,
        code: 610520,
        description: "CULTIVO DE CAFE"
    },
    {
        parent: 6105,
        code: 610525,
        description: "CULTIVO DE FLORES"
    },
    {
        parent: 6105,
        code: 610530,
        description: "CULTIVO DE CAÑA DE AZUCAR"
    },
    {
        parent: 6105,
        code: 610535,
        description: "CULTIVO DE ALGODON Y PLANTAS PARA MATERIAL TEXTIL"
    },
    {
        parent: 6105,
        code: 610540,
        description: "CULTIVO DE BANANO"
    },
    {
        parent: 6105,
        code: 610545,
        description: "OTROS CULTIVOS AGRICOLAS"
    },
    {
        parent: 6105,
        code: 610550,
        description: "CRIA DE OVEJAS, CABRAS, ASNOS, MULAS Y BURDEGANOS"
    },
    {
        parent: 6105,
        code: 610555,
        description: "CRIA DE GANADO CABALLAR Y VACUNO."
    },
    {
        parent: 6105,
        code: 610560,
        description: "PRODUCCION AVICOLA"
    },
    {
        parent: 6105,
        code: 610565,
        description: "CRIA DE OTROS ANIMALES"
    },
    {
        parent: 6105,
        code: 610570,
        description: "SERVICIOS AGRICOLAS Y GANADEROS"
    },
    {
        parent: 6105,
        code: 610575,
        description: "ACTIVIDAD DE CAZA"
    },
    {
        parent: 6105,
        code: 610580,
        description: "ACTIVIDAD DE SILVICULTURA"
    },
    {
        parent: 6105,
        code: 610595,
        description: "ACTIVIDADES CONEXAS"
    },
    {
        parent: 6105,
        code: 610599,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 61,
        code: 6110,
        description: "PESCA"
    },
    {
        parent: 6110,
        code: 611005,
        description: "ACTIVIDAD DE PESCA"
    },
    {
        parent: 6110,
        code: 611010,
        description: "EXPLOTACION DE CRIADEROS DE PECES"
    },
    {
        parent: 6110,
        code: 611095,
        description: "ACTIVIDADES CONEXAS"
    },
    {
        parent: 6110,
        code: 611099,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 61,
        code: 6115,
        description: "EXPLOTACION DE MINAS Y CANTERAS"
    },
    {
        parent: 6115,
        code: 611505,
        description: "CARBON"
    },
    {
        parent: 6115,
        code: 611510,
        description: "PETROLEO CRUDO"
    },
    {
        parent: 6115,
        code: 611512,
        description: "GAS NATURAL"
    },
    {
        parent: 6115,
        code: 611514,
        description: "SERVICIOS RELACIONADOS CON EXTRACCION DE PETROLEO Y GAS"
    },
    {
        parent: 6115,
        code: 611515,
        description: "MINERALES DE HIERRO"
    },
    {
        parent: 6115,
        code: 611520,
        description: "MINERALES METALIFEROS NO FERROSOS"
    },
    {
        parent: 6115,
        code: 611525,
        description: "PIEDRA, ARENA Y ARCILLA"
    },
    {
        parent: 6115,
        code: 611527,
        description: "PIEDRAS PRECIOSAS"
    },
    {
        parent: 6115,
        code: 611528,
        description: "ORO"
    },
    {
        parent: 6115,
        code: 611530,
        description: "OTRAS MINAS Y CANTERAS"
    },
    {
        parent: 6115,
        code: 611532,
        description: "PRESTACION DE SERVICIOS SECTOR MINERO"
    },
    {
        parent: 6115,
        code: 611595,
        description: "ACTIVIDADES CONEXAS"
    },
    {
        parent: 6115,
        code: 611599,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 61,
        code: 6120,
        description: "INDUSTRIAS MANUFACTURERAS"
    },
    {
        parent: 6120,
        code: 612001,
        description: "PRODUCCION Y PROCESAMIENTO DE CARNES Y PRODUCTOS CARNICOS"
    },
    {
        parent: 6120,
        code: 612002,
        description: "PRODUCTOS DE PESCADO"
    },
    {
        parent: 6120,
        code: 612003,
        description: "PRODUCTOS DE FRUTAS, LEGUMBRES Y HORTALIZAS"
    },
    {
        parent: 6120,
        code: 612004,
        description: "ELABORACION DE ACEITES Y GRASAS"
    },
    {
        parent: 6120,
        code: 612005,
        description: "ELABORACION DE PRODUCTOS LACTEOS"
    },
    {
        parent: 6120,
        code: 612006,
        description: "ELABORACION DE PRODUCTOS DE MOLINERIA"
    },
    {
        parent: 6120,
        code: 612007,
        description: "ELABORACION DE ALMIDONES Y DERIVADOS"
    },
    {
        parent: 6120,
        code: 612008,
        description: "ELABORACION DE ALIMENTOS PARA ANIMALES"
    },
    {
        parent: 6120,
        code: 612009,
        description: "ELABORACION DE PRODUCTOS PARA PANADERIA"
    },
    {
        parent: 6120,
        code: 612010,
        description: "ELABORACION DE AZUCAR Y MELAZAS"
    },
    {
        parent: 6120,
        code: 612011,
        description: "ELABORACION DE CACAO, CHOCOLATE Y CONFITERIA"
    },
    {
        parent: 6120,
        code: 612012,
        description: "ELABORACION DE PASTAS  Y PRODUCTOS FARINACEOS"
    },
    {
        parent: 6120,
        code: 612013,
        description: "ELABORACION DE PRODUCTOS DE CAFE"
    },
    {
        parent: 6120,
        code: 612014,
        description: "ELABORACION DE OTROS PRODUCTOS ALIMENTICIOS"
    },
    {
        parent: 6120,
        code: 612015,
        description: "ELABORACION DE BEBIDAS ALCOHOLICAS Y ALCOHOL ETILICO"
    },
    {
        parent: 6120,
        code: 612016,
        description: "ELABORACION DE VINOS"
    },
    {
        parent: 6120,
        code: 612017,
        description: "ELABORACION DE BEBIDAS MALTEADAS Y DE MALTA"
    },
    {
        parent: 6120,
        code: 612018,
        description: "ELABORACION DE BEBIDAS NO ALCOHOLICAS"
    },
    {
        parent: 6120,
        code: 612019,
        description: "ELABORACION DE PRODUCTOS DE TABACO"
    },
    {
        parent: 6120,
        code: 612020,
        description: "PREPARACION E HILATURA DE FIBRAS TEXTILES Y TEJEDURIA"
    },
    {
        parent: 6120,
        code: 612021,
        description: "ACABADO DE PRODUCTOS TEXTILES"
    },
    {
        parent: 6120,
        code: 612022,
        description: "ELABORACION DE ARTICULOS DE MATERIALES TEXTILES"
    },
    {
        parent: 6120,
        code: 612023,
        description: "ELABORACION DE TAPICES Y ALFOMBRAS"
    },
    {
        parent: 6120,
        code: 612024,
        description: "ELABORACION DE CUERDAS, CORDELES, BRAMANTES Y REDES"
    },
    {
        parent: 6120,
        code: 612025,
        description: "ELABORACION DE OTROS PRODUCTOS TEXTILES"
    },
    {
        parent: 6120,
        code: 612026,
        description: "ELABORACION DE TEJIDOS"
    },
    {
        parent: 6120,
        code: 612027,
        description: "ELABORACION DE PRENDAS DE VESTIR"
    },
    {
        parent: 6120,
        code: 612028,
        description: "PREPARACION, ADOBO Y TEÑIDO DE PIELES"
    },
    {
        parent: 6120,
        code: 612029,
        description: "CURTIDO, ADOBO O PREPARACION DE CUERO"
    },
    {
        parent: 6120,
        code: 612030,
        description: "ELABORACION DE MALETAS, BOLSOS Y SIMILARES"
    },
    {
        parent: 6120,
        code: 612031,
        description: "ELABORACION DE CALZADO"
    },
    {
        parent: 6120,
        code: 612032,
        description: "PRODUCCION DE MADERA, ARTICULOS DE MADERA Y CORCHO"
    },
    {
        parent: 6120,
        code: 612033,
        description: "ELABORACION DE PASTA Y PRODUCTOS DE MADERA, PAPEL Y CARTON"
    },
    {
        parent: 6120,
        code: 612034,
        description: "EDICIONES Y PUBLICACIONES"
    },
    {
        parent: 6120,
        code: 612035,
        description: "IMPRESION"
    },
    {
        parent: 6120,
        code: 612036,
        description: "SERVICIOS RELACIONADOS CON LA EDICION Y LA IMPRESION"
    },
    {
        parent: 6120,
        code: 612037,
        description: "REPRODUCCION DE GRABACIONES"
    },
    {
        parent: 6120,
        code: 612038,
        description: "ELABORACION DE PRODUCTOS DE HORNO DE COQUE"
    },
    {
        parent: 6120,
        code: 612039,
        description: "ELABORACION DE PRODUCTOS DE LA REFINACION DE PETROLEO"
    },
    {
        parent: 6120,
        code: 612040,
        description: "ELABORACION DE SUSTANCIAS QUIMICAS BASICAS"
    },
    {
        parent: 6120,
        code: 612041,
        description: "ELABORACION DE ABONOS Y COMPUESTOS DE NITROGENO"
    },
    {
        parent: 6120,
        code: 612042,
        description: "ELABORACION DE PLASTICO Y CAUCHO SINTETICO"
    },
    {
        parent: 6120,
        code: 612043,
        description: "ELABORACION DE PRODUCTOS QUIMICOS DE USO AGROPECUARIO"
    },
    {
        parent: 6120,
        code: 612044,
        description: "ELABORACION DE PINTURAS, TINTAS Y MASILLAS"
    },
    {
        parent: 6120,
        code: 612045,
        description: "ELABORACION DE PRODUCTOS FARMACEUTICOS Y BOTANICOS"
    },
    {
        parent: 6120,
        code: 612046,
        description: "ELABORACION DE JABONES, DETERGENTES Y PREPARADOS DE TOCADOR"
    },
    {
        parent: 6120,
        code: 612047,
        description: "ELABORACION DE OTROS PRODUCTOS QUIMICOS"
    },
    {
        parent: 6120,
        code: 612048,
        description: "ELABORACION DE FIBRAS"
    },
    {
        parent: 6120,
        code: 612049,
        description: "ELABORACION DE OTROS PRODUCTOS DE CAUCHO"
    },
    {
        parent: 6120,
        code: 612050,
        description: "ELABORACION DE PRODUCTOS DE PLASTICO"
    },
    {
        parent: 6120,
        code: 612051,
        description: "ELABORACION DE VIDRIO Y PRODUCTOS DE VIDRIO"
    },
    {
        parent: 6120,
        code: 612052,
        description: "ELABORACION DE PRODUCTOS DE CERAMICA, LOZA, PIEDRA, ARCILLA Y PORCELANA"
    },
    {
        parent: 6120,
        code: 612053,
        description: "ELABORACION DE CEMENTO, CAL Y YESO"
    },
    {
        parent: 6120,
        code: 612054,
        description: "ELABORACION DE ARTICULOS DE HORMIGON, CEMENTO Y YESO"
    },
    {
        parent: 6120,
        code: 612055,
        description: "CORTE, TALLADO Y ACABADO DE LA PIEDRA"
    },
    {
        parent: 6120,
        code: 612056,
        description: "ELABORACION DE OTROS PRODUCTOS MINERALES NO METALICOS"
    },
    {
        parent: 6120,
        code: 612057,
        description: "INDUSTRIAS BASICAS Y FUNDICION DE HIERRO Y ACERO"
    },
    {
        parent: 6120,
        code: 612058,
        description: "PRODUCTOS PRIMARIOS DE METALES PRECIOSOS Y DE METALES NO FERROSOS"
    },
    {
        parent: 6120,
        code: 612059,
        description: "FUNDICION DE METALES NO FERROSOS"
    },
    {
        parent: 6120,
        code: 612060,
        description: "FABRICACION DE PRODUCTOS METALICOS PARA USO ESTRUCTURAL"
    },
    {
        parent: 6120,
        code: 612061,
        description: "FORJA, PRENSADO, ESTAMPADO, LAMINADO DE METAL Y PULVIMETALURGIA"
    },
    {
        parent: 6120,
        code: 612062,
        description: "REVESTIMIENTO DE METALES Y OBRAS DE INGENIERIA MECANICA"
    },
    {
        parent: 6120,
        code: 612063,
        description: "FABRICACION DE ARTICULOS DE FERRETERIA"
    },
    {
        parent: 6120,
        code: 612064,
        description: "ELABORACION DE OTROS PRODUCTOS DE METAL"
    },
    {
        parent: 6120,
        code: 612065,
        description: "FABRICACION DE MAQUINARIA Y EQUIPO"
    },
    {
        parent: 6120,
        code: 612066,
        description: "FABRICACION DE EQUIPOS DE ELEVACION Y MANIPULACION"
    },
    {
        parent: 6120,
        code: 612067,
        description: "ELABORACION DE APARATOS DE USO DOMESTICO"
    },
    {
        parent: 6120,
        code: 612068,
        description: "ELABORACION DE EQUIPO DE OFICINA"
    },
    {
        parent: 6120,
        code: 612069,
        description: "ELABORACION DE PILAS Y BATERIAS PRIMARIAS"
    },
    {
        parent: 6120,
        code: 612070,
        description: "ELABORACION DE EQUIPO DE ILUMINACION"
    },
    {
        parent: 6120,
        code: 612071,
        description: "ELABORACION DE OTROS TIPOS DE EQUIPO ELECTRICO"
    },
    {
        parent: 6120,
        code: 612072,
        description: "FABRICACION DE EQUIPOS DE RADIO, TELEVISION Y COMUNICACIONES"
    },
    {
        parent: 6120,
        code: 612073,
        description: "FABRICACION DE APARATOS E INSTRUMENTOS MEDICOS"
    },
    {
        parent: 6120,
        code: 612074,
        description: "FABRICACION DE INSTRUMENTOS DE MEDICION Y CONTROL"
    },
    {
        parent: 6120,
        code: 612075,
        description: "FABRICACION DE INSTRUMENTOS DE OPTICA Y EQUIPO FOTOGRAFICO"
    },
    {
        parent: 6120,
        code: 612076,
        description: "FABRICACION DE RELOJES"
    },
    {
        parent: 6120,
        code: 612077,
        description: "FABRICACION DE VEHICULOS AUTOMOTORES"
    },
    {
        parent: 6120,
        code: 612078,
        description: "FABRICACION DE CARROCERIAS PARA AUTOMOTORES"
    },
    {
        parent: 6120,
        code: 612079,
        description: "FABRICACION DE PARTES PIEZAS Y ACCESORIOS PARA AUTOMOTORES"
    },
    {
        parent: 6120,
        code: 612080,
        description: "FABRICACION Y REPARACION DE BUQUES Y OTRAS EMBARCACIONES"
    },
    {
        parent: 6120,
        code: 612081,
        description: "FABRICACION DE LOCOMOTORAS Y MATERIAL RODANTE PARA FERROCARRILES"
    },
    {
        parent: 6120,
        code: 612082,
        description: "FABRICACION DE AERONAVES"
    },
    {
        parent: 6120,
        code: 612083,
        description: "FABRICACION DE MOTOCICLETAS"
    },
    {
        parent: 6120,
        code: 612084,
        description: "FABRICACION DE BICICLETAS Y SILLAS DE RUEDAS"
    },
    {
        parent: 6120,
        code: 612085,
        description: "FABRICACION DE OTROS TIPOS DE TRANSPORTE"
    },
    {
        parent: 6120,
        code: 612086,
        description: "FABRICACION DE MUEBLES"
    },
    {
        parent: 6120,
        code: 612087,
        description: "FABRICACION DE JOYAS Y ARTICULOS CONEXOS"
    },
    {
        parent: 6120,
        code: 612088,
        description: "FABRICACION DE INSTRUMENTOS DE MUSICA"
    },
    {
        parent: 6120,
        code: 612089,
        description: "FABRICACION DE ARTICULOS Y EQUIPO PARA DEPORTE"
    },
    {
        parent: 6120,
        code: 612090,
        description: "FABRICACION DE JUEGOS Y JUGUETES"
    },
    {
        parent: 6120,
        code: 612091,
        description: "RECICLAMIENTO DE DESPERDICIOS"
    },
    {
        parent: 6120,
        code: 612095,
        description: "PRODUCTOS DE OTRAS INDUSTRIAS MANUFACTURERAS"
    },
    {
        parent: 6120,
        code: 612099,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 61,
        code: 6125,
        description: "SUMINISTRO DE ELECTRICIDAD, GAS Y AGUA"
    },
    {
        parent: 6125,
        code: 612505,
        description: "GENERACION, CAPTACION Y DISTRIBUCION DE ENERGIA ELECTRICA"
    },
    {
        parent: 6125,
        code: 612510,
        description: "FABRICACION DE GAS Y DISTRIBUCION DE COMBUSTIBLES GASEOSOS"
    },
    {
        parent: 6125,
        code: 612515,
        description: "CAPTACION, DEPURACION Y DISTRIBUCION DE AGUA"
    },
    {
        parent: 6125,
        code: 612595,
        description: "ACTIVIDADES CONEXAS"
    },
    {
        parent: 6125,
        code: 612599,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 61,
        code: 6130,
        description: "CONSTRUCCION"
    },
    {
        parent: 6130,
        code: 613005,
        description: "PREPARACION DE TERRENOS"
    },
    {
        parent: 6130,
        code: 613010,
        description: "CONSTRUCCION DE EDIFICIOS Y OBRAS DE INGENIERIA CIVIL"
    },
    {
        parent: 6130,
        code: 613015,
        description: "ACONDICIONAMIENTO DE EDIFICIOS"
    },
    {
        parent: 6130,
        code: 613020,
        description: "TERMINACION DE EDIFICACIONES"
    },
    {
        parent: 6130,
        code: 613025,
        description: "ALQUILER DE EQUIPO CON OPERARIO"
    },
    {
        parent: 6130,
        code: 613095,
        description: "ACTIVIDADES CONEXAS"
    },
    {
        parent: 6130,
        code: 613099,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 61,
        code: 6135,
        description: "COMERCIO AL POR MAYOR Y AL POR MENOR"
    },
    {
        parent: 6135,
        code: 613502,
        description: "VENTA DE VEHICULOS AUTOMOTORES"
    },
    {
        parent: 6135,
        code: 613504,
        description: "MANTENIMIENTO, REPARACION Y LAVADO DE VEHICULOS AUTOMOTORES"
    },
    {
        parent: 6135,
        code: 613506,
        description: "VENTA DE PARTES, PIEZAS Y ACCESORIOS DE VEHICULOS AUTOMOTORES"
    },
    {
        parent: 6135,
        code: 613508,
        description: "VENTA DE COMBUSTIBLES SOLIDOS, LIQUIDOS, GASEOSOS"
    },
    {
        parent: 6135,
        code: 613510,
        description: "VENTA DE LUBRICANTES, ADITIVOS, LLANTAS Y LUJOS PARA AUTOMOTORES"
    },
    {
        parent: 6135,
        code: 613512,
        description: "VENTA A CAMBIO DE RETRIBUCION O POR CONTRATA"
    },
    {
        parent: 6135,
        code: 613514,
        description: "VENTA DE INSUMOS, MATERIAS PRIMAS AGROPECUARIAS Y FLORES"
    },
    {
        parent: 6135,
        code: 613516,
        description: "VENTA DE OTROS INSUMOS Y MATERIAS PRIMAS NO AGROPECUARIAS"
    },
    {
        parent: 6135,
        code: 613518,
        description: "VENTA DE ANIMALES VIVOS Y CUEROS"
    },
    {
        parent: 6135,
        code: 613520,
        description: "VENTA DE PRODUCTOS EN ALMACENES NO ESPECIALIZADOS"
    },
    {
        parent: 6135,
        code: 613522,
        description: "VENTA DE PRODUCTOS AGROPECUARIOS"
    },
    {
        parent: 6135,
        code: 613524,
        description: "VENTA DE PRODUCTOS TEXTILES, DE VESTIR, DE CUERO Y CALZADO"
    },
    {
        parent: 6135,
        code: 613526,
        description: "VENTA DE PAPEL Y CARTON"
    },
    {
        parent: 6135,
        code: 613528,
        description: "VENTA DE LIBROS, REVISTAS, ELEMENTOS DE PAPELERIA, UTILES Y TEXTOS ESCOLARES"
    },
    {
        parent: 6135,
        code: 613530,
        description: "VENTA DE JUEGOS, JUGUETES Y ARTICULOS DEPORTIVOS"
    },
    {
        parent: 6135,
        code: 613532,
        description: "VENTA DE INSTRUMENTOS QUIRURGICOS Y ORTOPEDICOS"
    },
    {
        parent: 6135,
        code: 613534,
        description: "VENTA DE ARTICULOS EN RELOJERIAS Y JOYERIAS"
    },
    {
        parent: 6135,
        code: 613536,
        description: "VENTA DE ELECTRODOMESTICOS Y MUEBLES"
    },
    {
        parent: 6135,
        code: 613538,
        description: "VENTA DE PRODUCTOS DE ASEO, FARMACEUTICOS, MEDICINALES, Y ARTICULOS DE TOCADOR"
    },
    {
        parent: 6135,
        code: 613540,
        description: "VENTA DE CUBIERTOS, VAJILLAS, CRISTALERIA, PORCELANAS, CERAMICAS Y OTROS ARTICULOS DE USO DOMESTICO"
    },
    {
        parent: 6135,
        code: 613542,
        description: "VENTA DE MATERIALES DE CONSTRUCCION, FONTANERIA Y CALEFACCION"
    },
    {
        parent: 6135,
        code: 613544,
        description: "VENTA DE PINTURAS Y LACAS"
    },
    {
        parent: 6135,
        code: 613546,
        description: "VENTA DE PRODUCTOS DE VIDRIOS Y MARQUETERIA"
    },
    {
        parent: 6135,
        code: 613548,
        description: "VENTA DE HERRAMIENTAS Y ARTICULOS DE FERRETERIA"
    },
    {
        parent: 6135,
        code: 613550,
        description: "VENTA DE QUIMICOS"
    },
    {
        parent: 6135,
        code: 613552,
        description: "VENTA DE PRODUCTOS INTERMEDIOS, DESPERDICIOS Y DESECHOS"
    },
    {
        parent: 6135,
        code: 613554,
        description: "VENTA DE MAQUINARIA, EQUIPO DE OFICINA Y PROGRAMAS DE COMPUTADOR"
    },
    {
        parent: 6135,
        code: 613556,
        description: "VENTA DE ARTICULOS EN CACHARRERIAS Y MISCELANEAS"
    },
    {
        parent: 6135,
        code: 613558,
        description: "VENTA DE INSTRUMENTOS MUSICALES"
    },
    {
        parent: 6135,
        code: 613560,
        description: "VENTA DE ARTICULOS EN CASAS DE EMPEÑO Y PRENDERIAS"
    },
    {
        parent: 6135,
        code: 613562,
        description: "VENTA DE EQUIPO FOTOGRAFICO"
    },
    {
        parent: 6135,
        code: 613564,
        description: "VENTA DE EQUIPO OPTICO Y DE PRECISION"
    },
    {
        parent: 6135,
        code: 613566,
        description: "VENTA DE EMPAQUES"
    },
    {
        parent: 6135,
        code: 613568,
        description: "VENTA DE EQUIPO PROFESIONAL Y CIENTIFICO"
    },
    {
        parent: 6135,
        code: 613570,
        description: "VENTA DE LOTERIAS, RIFAS, CHANCE, APUESTAS Y SIMILARES"
    },
    {
        parent: 6135,
        code: 613572,
        description: "REPARACION DE EFECTOS PERSONALES Y ELECTRODOMESTICOS"
    },
    {
        parent: 6135,
        code: 613595,
        description: "VENTA DE OTROS PRODUCTOS"
    },
    {
        parent: 6135,
        code: 613599,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 61,
        code: 6140,
        description: "HOTELES Y RESTAURANTES"
    },
    {
        parent: 6140,
        code: 614005,
        description: "HOTELERIA"
    },
    {
        parent: 6140,
        code: 614010,
        description: "CAMPAMENTO Y OTROS TIPOS DE HOSPEDAJE"
    },
    {
        parent: 6140,
        code: 614015,
        description: "RESTAURANTES"
    },
    {
        parent: 6140,
        code: 614020,
        description: "BARES Y CANTINAS"
    },
    {
        parent: 6140,
        code: 614095,
        description: "ACTIVIDADES CONEXAS"
    },
    {
        parent: 6140,
        code: 614099,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 61,
        code: 6145,
        description: "TRANSPORTE, ALMACENAMIENTO Y COMUNICACIONES"
    },
    {
        parent: 6145,
        code: 614505,
        description: "SERVICIO DE TRANSPORTE POR CARRETERA"
    },
    {
        parent: 6145,
        code: 614510,
        description: "SERVICIO DE TRANSPORTE POR VIA FERREA"
    },
    {
        parent: 6145,
        code: 614515,
        description: "SERVICIO DE TRANSPORTE POR VIA ACUATICA"
    },
    {
        parent: 6145,
        code: 614520,
        description: "SERVICIO DE TRANSPORTE POR VIA AEREA"
    },
    {
        parent: 6145,
        code: 614525,
        description: "SERVICIO DE TRANSPORTE POR TUBERIAS"
    },
    {
        parent: 6145,
        code: 614530,
        description: "MANIPULACION DE CARGA"
    },
    {
        parent: 6145,
        code: 614535,
        description: "ALMACENAMIENTO Y DEPOSITO"
    },
    {
        parent: 6145,
        code: 614540,
        description: "SERVICIOS COMPLEMENTARIOS PARA EL TRANSPORTE"
    },
    {
        parent: 6145,
        code: 614545,
        description: "AGENCIAS DE VIAJE"
    },
    {
        parent: 6145,
        code: 614550,
        description: "OTRAS AGENCIAS DE TRANSPORTE"
    },
    {
        parent: 6145,
        code: 614555,
        description: "SERVICIO POSTAL Y DE CORREO"
    },
    {
        parent: 6145,
        code: 614560,
        description: "SERVICIO TELEFONICO"
    },
    {
        parent: 6145,
        code: 614565,
        description: "SERVICIO DE TELEGRAFO"
    },
    {
        parent: 6145,
        code: 614570,
        description: "SERVICIO DE TRANSMISION DE DATOS"
    },
    {
        parent: 6145,
        code: 614575,
        description: "SERVICIO DE RADIO Y TELEVISION POR CABLE"
    },
    {
        parent: 6145,
        code: 614580,
        description: "TRANSMISION DE SONIDO E IMAGENES POR CONTRATO"
    },
    {
        parent: 6145,
        code: 614595,
        description: "ACTIVIDADES CONEXAS"
    },
    {
        parent: 6145,
        code: 614599,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 61,
        code: 6150,
        description: "ACTIVIDAD FINANCIERA"
    },
    {
        parent: 6150,
        code: 615005,
        description: "DE INVERSIONES"
    },
    {
        parent: 6150,
        code: 615010,
        description: "DE SERVICIO DE BOLSA"
    },
    {
        parent: 6150,
        code: 615099,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 61,
        code: 6155,
        description: "ACTIVIDADES INMOBILIARIAS, EMPRESARIALES Y DE ALQUILER"
    },
    {
        parent: 6155,
        code: 615505,
        description: "ARRENDAMIENTOS DE BIENES INMUEBLES"
    },
    {
        parent: 6155,
        code: 615510,
        description: "INMOBILIARIAS POR RETRIBUCION O CONTRATA"
    },
    {
        parent: 6155,
        code: 615515,
        description: "ALQUILER EQUIPO DE TRANSPORTE"
    },
    {
        parent: 6155,
        code: 615520,
        description: "ALQUILER MAQUINARIA Y EQUIPO"
    },
    {
        parent: 6155,
        code: 615525,
        description: "ALQUILER DE EFECTOS PERSONALES Y ENSERES DOMESTICOS"
    },
    {
        parent: 6155,
        code: 615530,
        description: "CONSULTORIA EN EQUIPO Y PROGRAMAS DE INFORMATICA"
    },
    {
        parent: 6155,
        code: 615535,
        description: "PROCESAMIENTO DE DATOS"
    },
    {
        parent: 6155,
        code: 615540,
        description: "MANTENIMIENTO Y REPARACION DE MAQUINARIA DE OFICINA"
    },
    {
        parent: 6155,
        code: 615545,
        description: "INVESTIGACIONES CIENTIFICAS Y DE DESARROLLO"
    },
    {
        parent: 6155,
        code: 615550,
        description: "ACTIVIDADES EMPRESARIALES DE CONSULTORIA"
    },
    {
        parent: 6155,
        code: 615555,
        description: "PUBLICIDAD"
    },
    {
        parent: 6155,
        code: 615560,
        description: "DOTACION DE PERSONAL"
    },
    {
        parent: 6155,
        code: 615565,
        description: "INVESTIGACION Y SEGURIDAD"
    },
    {
        parent: 6155,
        code: 615570,
        description: "LIMPIEZA DE INMUEBLES"
    },
    {
        parent: 6155,
        code: 615575,
        description: "FOTOGRAFIA"
    },
    {
        parent: 6155,
        code: 615580,
        description: "ENVASE Y EMPAQUE"
    },
    {
        parent: 6155,
        code: 615585,
        description: "FOTOCOPIADO"
    },
    {
        parent: 6155,
        code: 615590,
        description: "MANTENIMIENTO Y REPARACION DE MAQUINARIA Y EQUIPO"
    },
    {
        parent: 6155,
        code: 615595,
        description: "ACTIVIDADES CONEXAS"
    },
    {
        parent: 6155,
        code: 615599,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 61,
        code: 6160,
        description: "ENSEÑANZA"
    },
    {
        parent: 6160,
        code: 616005,
        description: "ACTIVIDADES RELACIONADAS CON LA EDUCACION"
    },
    {
        parent: 6160,
        code: 616099,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 61,
        code: 6165,
        description: "SERVICIOS SOCIALES Y DE SALUD"
    },
    {
        parent: 6165,
        code: 616505,
        description: "SERVICIO HOSPITALARIO"
    },
    {
        parent: 6165,
        code: 616510,
        description: "SERVICIO MEDICO"
    },
    {
        parent: 6165,
        code: 616515,
        description: "SERVICIO ODONTOLOGICO"
    },
    {
        parent: 6165,
        code: 616520,
        description: "SERVICIO DE LABORATORIO"
    },
    {
        parent: 6165,
        code: 616525,
        description: "ACTIVIDADES VETERINARIAS"
    },
    {
        parent: 6165,
        code: 616530,
        description: "ACTIVIDADES DE SERVICIOS SOCIALES"
    },
    {
        parent: 6165,
        code: 616595,
        description: "ACTIVIDADES CONEXAS"
    },
    {
        parent: 6165,
        code: 616599,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 61,
        code: 6170,
        description: "OTRAS ACTIVIDADES DE SERVICIOS COMUNITARIOS, SOCIALES Y PERSONALES"
    },
    {
        parent: 6170,
        code: 617005,
        description: "ELIMINACION DE DESPERDICIOS Y AGUAS RESIDUALES"
    },
    {
        parent: 6170,
        code: 617010,
        description: "ACTIVIDADES DE ASOCIACION"
    },
    {
        parent: 6170,
        code: 617015,
        description: "PRODUCCION Y DISTRIBUCION DE FILMES Y VIDEOCINTAS"
    },
    {
        parent: 6170,
        code: 617020,
        description: "EXHIBICION DE FILMES Y VIDEOCINTAS"
    },
    {
        parent: 6170,
        code: 617025,
        description: "ACTIVIDAD DE RADIO Y TELEVISION"
    },
    {
        parent: 6170,
        code: 617030,
        description: "ACTIVIDAD TEATRAL, MUSICAL Y ARTISTICA"
    },
    {
        parent: 6170,
        code: 617035,
        description: "GRABACION Y PRODUCCION DE DISCOS"
    },
    {
        parent: 6170,
        code: 617040,
        description: "ENTRETENIMIENTO Y ESPARCIMIENTO"
    },
    {
        parent: 6170,
        code: 617045,
        description: "AGENCIAS DE NOTICIAS"
    },
    {
        parent: 6170,
        code: 617050,
        description: "LAVANDERIAS Y SIMILARES"
    },
    {
        parent: 6170,
        code: 617055,
        description: "PELUQUERIAS Y SIMILARES"
    },
    {
        parent: 6170,
        code: 617060,
        description: "SERVICIOS FUNERARIOS"
    },
    {
        parent: 6170,
        code: 617065,
        description: "ZONAS FRANCAS"
    },
    {
        parent: 6170,
        code: 617095,
        description: "ACTIVIDADES CONEXAS"
    },
    {
        parent: 6170,
        code: 617099,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 6,
        code: 62,
        description: "COMPRAS"
    },
    {
        parent: 62,
        code: 6205,
        description: "DE MERCANCIAS"
    },
    {
        parent: 6205,
        code: 620599,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 62,
        code: 6210,
        description: "DE MATERIAS PRIMAS"
    },
    {
        parent: 6210,
        code: 621099,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 62,
        code: 6215,
        description: "DE MATERIALES INDIRECTOS"
    },
    {
        parent: 6215,
        code: 621599,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 62,
        code: 6220,
        description: "COMPRA DE ENERGIA"
    },
    {
        parent: 6220,
        code: 622001,
        description: "a 622098"
    },
    {
        parent: 6220,
        code: 622099,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 62,
        code: 6225,
        description: "DEVOLUCIONES REBAJAS Y DESCUENTOS EN COMPRAS (CR)"
    },
    {
        parent: 6225,
        code: 622599,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: null,
        code: 7,
        description: "COSTOS DE PRODUCCION O DE OPERACION"
    },
    {
        parent: 7,
        code: 71,
        description: "MATERIA PRIMA"
    },
    {
        parent: 7,
        code: 72,
        description: "MANO DE OBRA DIRECTA"
    },
    {
        parent: 7,
        code: 73,
        description: "COSTOS INDIRECTOS"
    },
    {
        parent: 7,
        code: 74,
        description: "CONTRATOS DE SERVICIOS"
    },
    {
        parent: null,
        code: 8,
        description: "CUENTAS DE ORDEN DEUDORAS"
    },
    {
        parent: 8,
        code: 81,
        description: "DERECHOS CONTINGENTES"
    },
    {
        parent: 81,
        code: 8105,
        description: "BIENES Y VALORES ENTREGADOS EN CUSTODIA"
    },
    {
        parent: 8105,
        code: 810505,
        description: "VALORES MOBILIARIOS"
    },
    {
        parent: 8105,
        code: 810510,
        description: "BIENES MUEBLES"
    },
    {
        parent: 8105,
        code: 810599,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 81,
        code: 8110,
        description: "BIENES Y VALORES ENTREGADOS EN GARANTIA"
    },
    {
        parent: 8110,
        code: 811005,
        description: "VALORES MOBILIARIOS"
    },
    {
        parent: 8110,
        code: 811010,
        description: "BIENES MUEBLES"
    },
    {
        parent: 8110,
        code: 811015,
        description: "BIENES INMUEBLES"
    },
    {
        parent: 8110,
        code: 811020,
        description: "CONTRATOS DE GANADO EN PARTICIPACION"
    },
    {
        parent: 8110,
        code: 811099,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 81,
        code: 8115,
        description: "BIENES Y VALORES EN PODER DE TERCEROS"
    },
    {
        parent: 8115,
        code: 811505,
        description: "EN ARRENDAMIENTO"
    },
    {
        parent: 8115,
        code: 811510,
        description: "EN PRESTAMO"
    },
    {
        parent: 8115,
        code: 811515,
        description: "EN DEPOSITO"
    },
    {
        parent: 8115,
        code: 811520,
        description: "EN CONSIGNACION"
    },
    {
        parent: 8115,
        code: 811599,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 81,
        code: 8120,
        description: "LITIGIOS Y/O DEMANDAS"
    },
    {
        parent: 8120,
        code: 812005,
        description: "EJECUTIVOS"
    },
    {
        parent: 8120,
        code: 812010,
        description: "INCUMPLIMIENTO DE CONTRATOS"
    },
    {
        parent: 81,
        code: 8125,
        description: "PROMESAS DE COMPRAVENTA"
    },
    {
        parent: 81,
        code: 8195,
        description: "DIVERSAS"
    },
    {
        parent: 8195,
        code: 819505,
        description: "VALORES ADQUIRIDOS POR RECIBIR"
    },
    {
        parent: 8195,
        code: 819595,
        description: "OTRAS"
    },
    {
        parent: 8195,
        code: 819599,
        description: "AJUSTES POR INFLACION."
    },
    {
        parent: 8,
        code: 82,
        description: "DEUDORAS FISCALES"
    },
    {
        parent: 8,
        code: 83,
        description: "DEUDORAS DE CONTROL"
    },
    {
        parent: 83,
        code: 8305,
        description: "BIENES RECIBIDOS EN ARRENDAMIENTO FINANCIERO"
    },
    {
        parent: 8305,
        code: 830505,
        description: "BIENES MUEBLES"
    },
    {
        parent: 8305,
        code: 830510,
        description: "BIENES INMUEBLES"
    },
    {
        parent: 8305,
        code: 830599,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 83,
        code: 8310,
        description: "TITULOS DE INVERSION NO COLOCADOS"
    },
    {
        parent: 8310,
        code: 831005,
        description: "ACCIONES"
    },
    {
        parent: 8310,
        code: 831010,
        description: "BONOS"
    },
    {
        parent: 8310,
        code: 831095,
        description: "OTROS"
    },
    {
        parent: 83,
        code: 8315,
        description: "PROPIEDADES PLANTA Y EQUIPO TOTALMENTE DEPRECIADOS, AGOTADOS Y/O AMORTIZADOS"
    },
    {
        parent: 8315,
        code: 831506,
        description: "MATERIALES PROYECTOS PETROLEROS"
    },
    {
        parent: 8315,
        code: 831516,
        description: "CONSTRUCCIONES Y EDIFICACIONES"
    },
    {
        parent: 8315,
        code: 831520,
        description: "MAQUINARIA Y EQUIPO"
    },
    {
        parent: 8315,
        code: 831524,
        description: "EQUIPO DE OFICINA"
    },
    {
        parent: 8315,
        code: 831528,
        description: "EQUIPO DE COMPUTACION Y COMUNICACION"
    },
    {
        parent: 8315,
        code: 831532,
        description: "EQUIPO MEDICO - CIENTIFICO"
    },
    {
        parent: 8315,
        code: 831536,
        description: "EQUIPO DE HOTELES Y RESTAURANTES"
    },
    {
        parent: 8315,
        code: 831540,
        description: "FLOTA Y EQUIPO DE TRANSPORTE"
    },
    {
        parent: 8315,
        code: 831544,
        description: "FLOTA Y EQUIPO FLUVIAL Y/O MARITIMO"
    },
    {
        parent: 8315,
        code: 831548,
        description: "FLOTA Y EQUIPO AEREO"
    },
    {
        parent: 8315,
        code: 831552,
        description: "FLOTA Y EQUIPO FERREO"
    },
    {
        parent: 8315,
        code: 831556,
        description: "ACUEDUCTOS, PLANTAS Y REDES"
    },
    {
        parent: 8315,
        code: 831560,
        description: "ARMAMENTO DE VIGILANCIA"
    },
    {
        parent: 8315,
        code: 831562,
        description: "ENVASES Y EMPAQUES"
    },
    {
        parent: 8315,
        code: 831564,
        description: "PLANTACIONES AGRICOLAS Y FORESTALES"
    },
    {
        parent: 8315,
        code: 831568,
        description: "VIAS DE COMUNICACION"
    },
    {
        parent: 8315,
        code: 831572,
        description: "MINAS Y CANTERAS"
    },
    {
        parent: 8315,
        code: 831576,
        description: "POZOS ARTESIANOS"
    },
    {
        parent: 8315,
        code: 831580,
        description: "YACIMIENTOS"
    },
    {
        parent: 8315,
        code: 831584,
        description: "SEMOVIENTES"
    },
    {
        parent: 8315,
        code: 831599,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 83,
        code: 8320,
        description: "CREDITOS A FAVOR NO UTILIZADOS"
    },
    {
        parent: 8320,
        code: 832005,
        description: "PAIS"
    },
    {
        parent: 8320,
        code: 832010,
        description: "EXTERIOR"
    },
    {
        parent: 83,
        code: 8325,
        description: "ACTIVOS CASTIGADOS"
    },
    {
        parent: 8325,
        code: 832505,
        description: "INVERSIONES"
    },
    {
        parent: 8325,
        code: 832510,
        description: "DEUDORES"
    },
    {
        parent: 8325,
        code: 832595,
        description: "OTROS ACTIVOS"
    },
    {
        parent: 83,
        code: 8330,
        description: "TITULOS DE INVERSION AMORTIZADOS"
    },
    {
        parent: 8330,
        code: 833005,
        description: "BONOS"
    },
    {
        parent: 8330,
        code: 833095,
        description: "OTROS"
    },
    {
        parent: 83,
        code: 8335,
        description: "CAPITALIZACION POR REVALORIZACION DE PATRIMONIO"
    },
    {
        parent: 83,
        code: 8395,
        description: "OTRAS CUENTAS DEUDORAS DE CONTROL"
    },
    {
        parent: 8395,
        code: 839505,
        description: "CHEQUES POSTFECHADOS"
    },
    {
        parent: 8395,
        code: 839510,
        description: "CERTIFICADOS DE DEPOSITO A TERMINO"
    },
    {
        parent: 8395,
        code: 839515,
        description: "CHEQUES DEVUELTOS"
    },
    {
        parent: 8395,
        code: 839520,
        description: "BIENES Y VALORES EN FIDEICOMISO"
    },
    {
        parent: 8395,
        code: 839525,
        description: "INTERESES SOBRE DEUDAS VENCIDAS"
    },
    {
        parent: 8395,
        code: 839595,
        description: "DIVERSAS"
    },
    {
        parent: 8395,
        code: 839599,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 83,
        code: 8399,
        description: "AJUSTES POR INFLACION ACTIVOS"
    },
    {
        parent: 8399,
        code: 839905,
        description: "INVERSIONES"
    },
    {
        parent: 8399,
        code: 839910,
        description: "INVENTARIOS"
    },
    {
        parent: 8399,
        code: 839915,
        description: "PROPIEDADES PLANTA Y EQUIPO"
    },
    {
        parent: 8399,
        code: 839920,
        description: "INTANGIBLES"
    },
    {
        parent: 8399,
        code: 839925,
        description: "CARGOS DIFERIDOS"
    },
    {
        parent: 8399,
        code: 839995,
        description: "OTROS ACTIVOS"
    },
    {
        parent: 8,
        code: 84,
        description: "DERECHOS CONTINGENTES POR CONTRA (CR)"
    },
    {
        parent: 8,
        code: 85,
        description: "DEUDORAS FISCALES POR CONTRA (CR)"
    },
    {
        parent: 8,
        code: 86,
        description: "DEUDORAS DE CONTROL POR CONTRA (CR)"
    },
    {
        parent: null,
        code: 9,
        description: "CUENTAS DE ORDEN ACREEDORAS"
    },
    {
        parent: 9,
        code: 91,
        description: "RESPONSABILIDADES CONTINGENTES"
    },
    {
        parent: 91,
        code: 9105,
        description: "BIENES Y VALORES RECIBIDOS EN CUSTODIA"
    },
    {
        parent: 9105,
        code: 910505,
        description: "VALORES MOBILIARIOS"
    },
    {
        parent: 9105,
        code: 910510,
        description: "BIENES MUEBLES"
    },
    {
        parent: 9105,
        code: 910599,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 91,
        code: 9110,
        description: "BIENES Y VALORES RECIBIDOS EN GARANTIA"
    },
    {
        parent: 9110,
        code: 911005,
        description: "VALORES MOBILIARIOS"
    },
    {
        parent: 9110,
        code: 911010,
        description: "BIENES MUEBLES"
    },
    {
        parent: 9110,
        code: 911015,
        description: "BIENES INMUEBLES"
    },
    {
        parent: 9110,
        code: 911020,
        description: "CONTRATOS DE GANADO EN PARTICIPACION"
    },
    {
        parent: 9110,
        code: 911099,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 91,
        code: 9115,
        description: "BIENES Y VALORES RECIBIDOS DE TERCEROS"
    },
    {
        parent: 9115,
        code: 911505,
        description: "EN ARRENDAMIENTO"
    },
    {
        parent: 9115,
        code: 911510,
        description: "EN PRESTAMO"
    },
    {
        parent: 9115,
        code: 911515,
        description: "EN DEPOSITO"
    },
    {
        parent: 9115,
        code: 911520,
        description: "EN CONSIGNACION"
    },
    {
        parent: 9115,
        code: 911525,
        description: "EN COMODATO"
    },
    {
        parent: 9115,
        code: 911599,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 91,
        code: 9120,
        description: "LITIGIOS Y/O DEMANDAS"
    },
    {
        parent: 9120,
        code: 912005,
        description: "LABORALES"
    },
    {
        parent: 9120,
        code: 912010,
        description: "CIVILES"
    },
    {
        parent: 9120,
        code: 912015,
        description: "ADMINISTRATIVOS O ARBITRALES"
    },
    {
        parent: 9120,
        code: 912020,
        description: "TRIBUTARIOS"
    },
    {
        parent: 91,
        code: 9125,
        description: "PROMESAS DE COMPRAVENTA"
    },
    {
        parent: 91,
        code: 9130,
        description: "CONTRATOS DE ADMINISTRACION DELEGADA"
    },
    {
        parent: 91,
        code: 9135,
        description: "CUENTAS EN PARTICIPACION"
    },
    {
        parent: 91,
        code: 9195,
        description: "OTRAS RESPONSABILIDADES CONTINGENTES"
    },
    {
        parent: 9,
        code: 92,
        description: "ACREEDORAS FISCALES"
    },
    {
        parent: 9,
        code: 93,
        description: "ACREEDORAS DE CONTROL"
    },
    {
        parent: 93,
        code: 9305,
        description: "CONTRATOS DE ARRENDAMIENTO FINANCIERO"
    },
    {
        parent: 9305,
        code: 930505,
        description: "BIENES MUEBLES"
    },
    {
        parent: 9305,
        code: 930510,
        description: "BIENES INMUEBLES"
    },
    {
        parent: 93,
        code: 9395,
        description: "OTRAS CUENTAS DE ORDEN ACREEDORAS DE CONTROL"
    },
    {
        parent: 9395,
        code: 939505,
        description: "DOCUMENTOS POR COBRAR DESCONTADOS"
    },
    {
        parent: 9395,
        code: 939510,
        description: "CONVENIOS DE PAGO"
    },
    {
        parent: 9395,
        code: 939515,
        description: "CONTRATOS DE CONSTRUCCIONES E INSTALACIONES POR EJECUTAR"
    },
    {
        parent: 9395,
        code: 939520,
        description: "PEDIDOS COLOCADOS"
    },
    {
        parent: 9395,
        code: 939525,
        description: "ADJUDICACIONES PENDIENTES DE LEGALIZAR"
    },
    {
        parent: 9395,
        code: 939530,
        description: "RESERVA ARTICULO 3o. LEY 4/80"
    },
    {
        parent: 9395,
        code: 939535,
        description: "RESERVA COSTO REPOSICION SEMOVIENTES"
    },
    {
        parent: 9395,
        code: 939599,
        description: "AJUSTES POR INFLACION"
    },
    {
        parent: 93,
        code: 9399,
        description: "AJUSTES POR INFLACION PATRIMONIO"
    },
    {
        parent: 9399,
        code: 939905,
        description: "CAPITAL SOCIAL"
    },
    {
        parent: 9399,
        code: 939910,
        description: "SUPERAVIT DE CAPITAL"
    },
    {
        parent: 9399,
        code: 939915,
        description: "RESERVAS"
    },
    {
        parent: 9399,
        code: 939925,
        description: "DIVIDENDOS O PARTICIPACIONES DECRETADAS EN ACCIONES, CUOTAS O PARTES DE INTERES SOCIAL"
    },
    {
        parent: 9399,
        code: 939930,
        description: "RESULTADOS DE EJERCICIOS ANTERIORES"
    },
    {
        parent: 9,
        code: 94,
        description: "RESPONSABILIDADES CONTINGENTES POR CONTRA (DB)"
    },
    {
        parent: 9,
        code: 95,
        description: "ACREEDORAS FISCALES POR CONTRA (DB)"
    },
    {
        parent: 9,
        code: 96,
        description: "ACREEDORAS DE CONTROL POR CONTRA (DB)"
    }
]

export default puc_data;