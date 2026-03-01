ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([-12020111.676444, 3550160.703530, -12007301.078174, 3563999.492045]);
var wms_layers = [];


        var lyr_ESRINationalGeographic_0 = new ol.layer.Tile({
            'title': 'ESRI National Geographic',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_AGEB_1 = new ol.format.GeoJSON();
var features_AGEB_1 = format_AGEB_1.readFeatures(json_AGEB_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AGEB_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AGEB_1.addFeatures(features_AGEB_1);
var lyr_AGEB_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AGEB_1, 
                style: style_AGEB_1,
                popuplayertitle: 'AGEB',
                interactive: true,
                title: '<img src="styles/legend/AGEB_1.png" /> AGEB'
            });
var format_Manzana_2 = new ol.format.GeoJSON();
var features_Manzana_2 = format_Manzana_2.readFeatures(json_Manzana_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Manzana_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Manzana_2.addFeatures(features_Manzana_2);
var lyr_Manzana_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Manzana_2, 
                style: style_Manzana_2,
                popuplayertitle: 'Manzana',
                interactive: true,
                title: '<img src="styles/legend/Manzana_2.png" /> Manzana'
            });
var format_Vialidad_3 = new ol.format.GeoJSON();
var features_Vialidad_3 = format_Vialidad_3.readFeatures(json_Vialidad_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vialidad_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vialidad_3.addFeatures(features_Vialidad_3);
var lyr_Vialidad_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Vialidad_3, 
                style: style_Vialidad_3,
                popuplayertitle: 'Vialidad',
                interactive: true,
                title: '<img src="styles/legend/Vialidad_3.png" /> Vialidad'
            });
var format_Produccindeadobeen2015_4 = new ol.format.GeoJSON();
var features_Produccindeadobeen2015_4 = format_Produccindeadobeen2015_4.readFeatures(json_Produccindeadobeen2015_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Produccindeadobeen2015_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Produccindeadobeen2015_4.addFeatures(features_Produccindeadobeen2015_4);
var lyr_Produccindeadobeen2015_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Produccindeadobeen2015_4, 
                style: style_Produccindeadobeen2015_4,
                popuplayertitle: 'Producción de adobe en 2015',
                interactive: true,
                title: '<img src="styles/legend/Produccindeadobeen2015_4.png" /> Producción de adobe en 2015'
            });
var format_Produccindeadobeen2025_5 = new ol.format.GeoJSON();
var features_Produccindeadobeen2025_5 = format_Produccindeadobeen2025_5.readFeatures(json_Produccindeadobeen2025_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Produccindeadobeen2025_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Produccindeadobeen2025_5.addFeatures(features_Produccindeadobeen2025_5);
var lyr_Produccindeadobeen2025_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Produccindeadobeen2025_5, 
                style: style_Produccindeadobeen2025_5,
                popuplayertitle: 'Producción de adobe en 2025',
                interactive: true,
                title: '<img src="styles/legend/Produccindeadobeen2025_5.png" /> Producción de adobe en 2025'
            });

lyr_ESRINationalGeographic_0.setVisible(true);lyr_AGEB_1.setVisible(true);lyr_Manzana_2.setVisible(true);lyr_Vialidad_3.setVisible(true);lyr_Produccindeadobeen2015_4.setVisible(true);lyr_Produccindeadobeen2025_5.setVisible(true);
var layersList = [lyr_ESRINationalGeographic_0,lyr_AGEB_1,lyr_Manzana_2,lyr_Vialidad_3,lyr_Produccindeadobeen2015_4,lyr_Produccindeadobeen2025_5];
lyr_AGEB_1.set('fieldAliases', {'fid': 'fid', 'CVEGEO': 'Clave AGEB', });
lyr_Manzana_2.set('fieldAliases', {'fid': 'fid', 'CVEGEO': 'Clave Manzana', });
lyr_Vialidad_3.set('fieldAliases', {'fid': 'fid', 'CVEVIAL': 'Clave de la Vialidad', 'TIPOVIAL': 'Tipo de la Vialidad', 'NOMVIAL': 'Nombre de la Vialidad', 'SENTIDO': 'Sentido de la Vialidad', });
lyr_Produccindeadobeen2015_4.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'Nombre de la Unidad Econ√≥mica': 'Nombre del establecimiento', 'C√≥digo de la clase de actividad SCIAN': 'Código de la actividad', 'Nombre de clase de la actividad': 'Nombre de la actividad', 'Descripcion estrato personal ocupado': 'Personal ocupado', 'Clave municipio': 'Clave municipio', 'Municipio': 'Municipio', '√Årea geoestad√≠stica b√°sica ': 'AGEB', 'Manzana': 'Manzana', 'Tipo de establecimiento': 'Tipo de establecimiento', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Fecha de incorporaci√≥n al DENUE': 'Fecha de alta', });
lyr_Produccindeadobeen2025_5.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'clee': 'clee', 'nom_estab': 'Nombre del establecimiento', 'codigo_act': 'Código de la actividad', 'nombre_act': 'Nombre de la actividad', 'per_ocu': 'Personal ocupado', 'cve_mun': 'cve_mun', 'municipio': 'municipio', 'ageb': 'AGEB', 'manzana': 'manzana', 'tipoUniEco': 'tipoUniEco', 'latitud': 'latitud', 'longitud': 'longitud', 'fecha_alta': 'Fecha de alta', });
lyr_AGEB_1.set('fieldImages', {'fid': 'TextEdit', 'CVEGEO': 'TextEdit', });
lyr_Manzana_2.set('fieldImages', {'fid': 'TextEdit', 'CVEGEO': 'TextEdit', });
lyr_Vialidad_3.set('fieldImages', {'fid': 'TextEdit', 'CVEVIAL': 'TextEdit', 'TIPOVIAL': 'TextEdit', 'NOMVIAL': 'TextEdit', 'SENTIDO': 'TextEdit', });
lyr_Produccindeadobeen2015_4.set('fieldImages', {'fid': 'TextEdit', 'ID': 'Range', 'Nombre de la Unidad Econ√≥mica': 'TextEdit', 'C√≥digo de la clase de actividad SCIAN': 'Range', 'Nombre de clase de la actividad': 'TextEdit', 'Descripcion estrato personal ocupado': 'TextEdit', 'Clave municipio': 'TextEdit', 'Municipio': 'TextEdit', '√Årea geoestad√≠stica b√°sica ': 'TextEdit', 'Manzana': 'TextEdit', 'Tipo de establecimiento': 'TextEdit', 'Latitud': 'TextEdit', 'Longitud': 'TextEdit', 'Fecha de incorporaci√≥n al DENUE': 'TextEdit', });
lyr_Produccindeadobeen2025_5.set('fieldImages', {'fid': 'TextEdit', 'id': 'Range', 'clee': 'TextEdit', 'nom_estab': 'TextEdit', 'codigo_act': 'Range', 'nombre_act': 'TextEdit', 'per_ocu': 'TextEdit', 'cve_mun': 'TextEdit', 'municipio': 'TextEdit', 'ageb': 'TextEdit', 'manzana': 'TextEdit', 'tipoUniEco': 'TextEdit', 'latitud': 'TextEdit', 'longitud': 'TextEdit', 'fecha_alta': 'TextEdit', });
lyr_AGEB_1.set('fieldLabels', {'fid': 'hidden field', 'CVEGEO': 'header label - visible with data', });
lyr_Manzana_2.set('fieldLabels', {'fid': 'hidden field', 'CVEGEO': 'header label - visible with data', });
lyr_Vialidad_3.set('fieldLabels', {'fid': 'hidden field', 'CVEVIAL': 'hidden field', 'TIPOVIAL': 'hidden field', 'NOMVIAL': 'header label - visible with data', 'SENTIDO': 'hidden field', });
lyr_Produccindeadobeen2015_4.set('fieldLabels', {'fid': 'hidden field', 'ID': 'hidden field', 'Nombre de la Unidad Econ√≥mica': 'header label - visible with data', 'C√≥digo de la clase de actividad SCIAN': 'hidden field', 'Nombre de clase de la actividad': 'hidden field', 'Descripcion estrato personal ocupado': 'header label - visible with data', 'Clave municipio': 'hidden field', 'Municipio': 'hidden field', '√Årea geoestad√≠stica b√°sica ': 'hidden field', 'Manzana': 'hidden field', 'Tipo de establecimiento': 'hidden field', 'Latitud': 'hidden field', 'Longitud': 'hidden field', 'Fecha de incorporaci√≥n al DENUE': 'hidden field', });
lyr_Produccindeadobeen2025_5.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'clee': 'hidden field', 'nom_estab': 'header label - visible with data', 'codigo_act': 'hidden field', 'nombre_act': 'hidden field', 'per_ocu': 'header label - visible with data', 'cve_mun': 'hidden field', 'municipio': 'hidden field', 'ageb': 'hidden field', 'manzana': 'hidden field', 'tipoUniEco': 'hidden field', 'latitud': 'hidden field', 'longitud': 'hidden field', 'fecha_alta': 'hidden field', });
lyr_Produccindeadobeen2025_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});