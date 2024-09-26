var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt0.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_KONSEPPOLARUANG_2 = new ol.format.GeoJSON();
var features_KONSEPPOLARUANG_2 = format_KONSEPPOLARUANG_2.readFeatures(json_KONSEPPOLARUANG_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KONSEPPOLARUANG_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KONSEPPOLARUANG_2.addFeatures(features_KONSEPPOLARUANG_2);
var lyr_KONSEPPOLARUANG_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KONSEPPOLARUANG_2, 
                style: style_KONSEPPOLARUANG_2,
                popuplayertitle: "KONSEP POLA RUANG",
                interactive: true,
    title: 'KONSEP POLA RUANG<br />\
    <img src="styles/legend/KONSEPPOLARUANG_2_0.png" /> Badan Air<br />\
    <img src="styles/legend/KONSEPPOLARUANG_2_1.png" /> Badan Jalan<br />\
    <img src="styles/legend/KONSEPPOLARUANG_2_2.png" /> Hutan Produksi Terbatas<br />\
    <img src="styles/legend/KONSEPPOLARUANG_2_3.png" /> Instalasi Pengolahan Air Limbah (IPAL)<br />\
    <img src="styles/legend/KONSEPPOLARUANG_2_4.png" /> Instalasi Pengolahan Air Minum (IPAM)<br />\
    <img src="styles/legend/KONSEPPOLARUANG_2_5.png" /> Jalur Hijau<br />\
    <img src="styles/legend/KONSEPPOLARUANG_2_6.png" /> Pariwisata<br />\
    <img src="styles/legend/KONSEPPOLARUANG_2_7.png" /> Pemakaman<br />\
    <img src="styles/legend/KONSEPPOLARUANG_2_8.png" /> Pembangkitan Tenaga Listrik<br />\
    <img src="styles/legend/KONSEPPOLARUANG_2_9.png" /> Perdagangan dan Jasa Skala Kota<br />\
    <img src="styles/legend/KONSEPPOLARUANG_2_10.png" /> Perdagangan dan Jasa Skala SWP<br />\
    <img src="styles/legend/KONSEPPOLARUANG_2_11.png" /> Perdagangan dan Jasa Skala WP<br />\
    <img src="styles/legend/KONSEPPOLARUANG_2_12.png" /> Perkantoran<br />\
    <img src="styles/legend/KONSEPPOLARUANG_2_13.png" /> Perkebunan<br />\
    <img src="styles/legend/KONSEPPOLARUANG_2_14.png" /> Perlindungan Setempat<br />\
    <img src="styles/legend/KONSEPPOLARUANG_2_15.png" /> Pertahanan dan Keamanan<br />\
    <img src="styles/legend/KONSEPPOLARUANG_2_16.png" /> Perumahan Kepadatan Rendah<br />\
    <img src="styles/legend/KONSEPPOLARUANG_2_17.png" /> Perumahan Kepadatan Sangat Rendah<br />\
    <img src="styles/legend/KONSEPPOLARUANG_2_18.png" /> Perumahan Kepadatan Sedang<br />\
    <img src="styles/legend/KONSEPPOLARUANG_2_19.png" /> Pos Lintas Batas Negara<br />\
    <img src="styles/legend/KONSEPPOLARUANG_2_20.png" /> SPU Skala Kecamatan<br />\
    <img src="styles/legend/KONSEPPOLARUANG_2_21.png" /> SPU Skala Kelurahan<br />\
    <img src="styles/legend/KONSEPPOLARUANG_2_22.png" /> SPU Skala RW<br />\
    <img src="styles/legend/KONSEPPOLARUANG_2_23.png" /> Taman Kecamatan<br />\
    <img src="styles/legend/KONSEPPOLARUANG_2_24.png" /> Taman Kelurahan<br />\
    <img src="styles/legend/KONSEPPOLARUANG_2_25.png" /> Taman Kota<br />\
    <img src="styles/legend/KONSEPPOLARUANG_2_26.png" /> Taman RW<br />\
    <img src="styles/legend/KONSEPPOLARUANG_2_27.png" /> Tanaman Pangan<br />'
        });
var format__1_5RD_LN_SR_PRASARANALAIN_JAGOIBABANG_2024_3 = new ol.format.GeoJSON();
var features__1_5RD_LN_SR_PRASARANALAIN_JAGOIBABANG_2024_3 = format__1_5RD_LN_SR_PRASARANALAIN_JAGOIBABANG_2024_3.readFeatures(json__1_5RD_LN_SR_PRASARANALAIN_JAGOIBABANG_2024_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__1_5RD_LN_SR_PRASARANALAIN_JAGOIBABANG_2024_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1_5RD_LN_SR_PRASARANALAIN_JAGOIBABANG_2024_3.addFeatures(features__1_5RD_LN_SR_PRASARANALAIN_JAGOIBABANG_2024_3);
var lyr__1_5RD_LN_SR_PRASARANALAIN_JAGOIBABANG_2024_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__1_5RD_LN_SR_PRASARANALAIN_JAGOIBABANG_2024_3, 
                style: style__1_5RD_LN_SR_PRASARANALAIN_JAGOIBABANG_2024_3,
                popuplayertitle: "_1_5RD_LN_SR_PRASARANALAIN_JAGOIBABANG_2024",
                interactive: true,
    title: '_1_5RD_LN_SR_PRASARANALAIN_JAGOIBABANG_2024<br />\
    <img src="styles/legend/_1_5RD_LN_SR_PRASARANALAIN_JAGOIBABANG_2024_3_0.png" /> Jalur Evakuasi Bencana<br />\
    <img src="styles/legend/_1_5RD_LN_SR_PRASARANALAIN_JAGOIBABANG_2024_3_1.png" /> Jalur Inspeksi dan Patroli Perbatasan<br />\
    <img src="styles/legend/_1_5RD_LN_SR_PRASARANALAIN_JAGOIBABANG_2024_3_2.png" /> Jaringan Pejalan Kaki<br />'
        });
var format__1_5RD_PT_SR_PRASARANALAIN_JAGOIBABANG_2024_4 = new ol.format.GeoJSON();
var features__1_5RD_PT_SR_PRASARANALAIN_JAGOIBABANG_2024_4 = format__1_5RD_PT_SR_PRASARANALAIN_JAGOIBABANG_2024_4.readFeatures(json__1_5RD_PT_SR_PRASARANALAIN_JAGOIBABANG_2024_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__1_5RD_PT_SR_PRASARANALAIN_JAGOIBABANG_2024_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1_5RD_PT_SR_PRASARANALAIN_JAGOIBABANG_2024_4.addFeatures(features__1_5RD_PT_SR_PRASARANALAIN_JAGOIBABANG_2024_4);
var lyr__1_5RD_PT_SR_PRASARANALAIN_JAGOIBABANG_2024_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__1_5RD_PT_SR_PRASARANALAIN_JAGOIBABANG_2024_4, 
                style: style__1_5RD_PT_SR_PRASARANALAIN_JAGOIBABANG_2024_4,
                popuplayertitle: "_1_5RD_PT_SR_PRASARANALAIN_JAGOIBABANG_2024",
                interactive: true,
    title: '_1_5RD_PT_SR_PRASARANALAIN_JAGOIBABANG_2024<br />\
    <img src="styles/legend/_1_5RD_PT_SR_PRASARANALAIN_JAGOIBABANG_2024_4_0.png" /> Pilar Batas Negara<br />\
    <img src="styles/legend/_1_5RD_PT_SR_PRASARANALAIN_JAGOIBABANG_2024_4_1.png" /> Pos Pengamanan Perbatasan<br />\
    <img src="styles/legend/_1_5RD_PT_SR_PRASARANALAIN_JAGOIBABANG_2024_4_2.png" /> Tempat Evakuasi Akhir (TEA)<br />\
    <img src="styles/legend/_1_5RD_PT_SR_PRASARANALAIN_JAGOIBABANG_2024_4_3.png" /> Tempat Evakuasi Sementara (TES)<br />'
        });
var format__1_5RD_LN_SR_AIR_JAGOIBABANG_2024_5 = new ol.format.GeoJSON();
var features__1_5RD_LN_SR_AIR_JAGOIBABANG_2024_5 = format__1_5RD_LN_SR_AIR_JAGOIBABANG_2024_5.readFeatures(json__1_5RD_LN_SR_AIR_JAGOIBABANG_2024_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__1_5RD_LN_SR_AIR_JAGOIBABANG_2024_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1_5RD_LN_SR_AIR_JAGOIBABANG_2024_5.addFeatures(features__1_5RD_LN_SR_AIR_JAGOIBABANG_2024_5);
var lyr__1_5RD_LN_SR_AIR_JAGOIBABANG_2024_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__1_5RD_LN_SR_AIR_JAGOIBABANG_2024_5, 
                style: style__1_5RD_LN_SR_AIR_JAGOIBABANG_2024_5,
                popuplayertitle: "_1_5RD_LN_SR_AIR_JAGOIBABANG_2024",
                interactive: true,
    title: '_1_5RD_LN_SR_AIR_JAGOIBABANG_2024<br />\
    <img src="styles/legend/_1_5RD_LN_SR_AIR_JAGOIBABANG_2024_5_0.png" /> Jaringan Distribusi Pembagi<br />\
    <img src="styles/legend/_1_5RD_LN_SR_AIR_JAGOIBABANG_2024_5_1.png" /> Jaringan Transmisi Air Minum<br />'
        });
var format__1_5RD_PT_SR_AIR_JAGOIBABANG_2024_6 = new ol.format.GeoJSON();
var features__1_5RD_PT_SR_AIR_JAGOIBABANG_2024_6 = format__1_5RD_PT_SR_AIR_JAGOIBABANG_2024_6.readFeatures(json__1_5RD_PT_SR_AIR_JAGOIBABANG_2024_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__1_5RD_PT_SR_AIR_JAGOIBABANG_2024_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1_5RD_PT_SR_AIR_JAGOIBABANG_2024_6.addFeatures(features__1_5RD_PT_SR_AIR_JAGOIBABANG_2024_6);
var lyr__1_5RD_PT_SR_AIR_JAGOIBABANG_2024_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__1_5RD_PT_SR_AIR_JAGOIBABANG_2024_6, 
                style: style__1_5RD_PT_SR_AIR_JAGOIBABANG_2024_6,
                popuplayertitle: "_1_5RD_PT_SR_AIR_JAGOIBABANG_2024",
                interactive: true,
    title: '_1_5RD_PT_SR_AIR_JAGOIBABANG_2024<br />\
    <img src="styles/legend/_1_5RD_PT_SR_AIR_JAGOIBABANG_2024_6_0.png" /> Instalasi Produksi<br />'
        });
var format__1_5RD_PT_SR_AIRLIMBAHDANB3_JAGOIBABANG_2024_7 = new ol.format.GeoJSON();
var features__1_5RD_PT_SR_AIRLIMBAHDANB3_JAGOIBABANG_2024_7 = format__1_5RD_PT_SR_AIRLIMBAHDANB3_JAGOIBABANG_2024_7.readFeatures(json__1_5RD_PT_SR_AIRLIMBAHDANB3_JAGOIBABANG_2024_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__1_5RD_PT_SR_AIRLIMBAHDANB3_JAGOIBABANG_2024_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1_5RD_PT_SR_AIRLIMBAHDANB3_JAGOIBABANG_2024_7.addFeatures(features__1_5RD_PT_SR_AIRLIMBAHDANB3_JAGOIBABANG_2024_7);
var lyr__1_5RD_PT_SR_AIRLIMBAHDANB3_JAGOIBABANG_2024_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__1_5RD_PT_SR_AIRLIMBAHDANB3_JAGOIBABANG_2024_7, 
                style: style__1_5RD_PT_SR_AIRLIMBAHDANB3_JAGOIBABANG_2024_7,
                popuplayertitle: "_1_5RD_PT_SR_AIRLIMBAHDANB3_JAGOIBABANG_2024",
                interactive: true,
    title: '_1_5RD_PT_SR_AIRLIMBAHDANB3_JAGOIBABANG_2024<br />\
    <img src="styles/legend/_1_5RD_PT_SR_AIRLIMBAHDANB3_JAGOIBABANG_2024_7_0.png" /> Sub-sistem Pengolahan Lumpur Tinja<br />'
        });
var format__1_5RD_LN_SR_DRAINASE_JAGOIBABANG_2024_8 = new ol.format.GeoJSON();
var features__1_5RD_LN_SR_DRAINASE_JAGOIBABANG_2024_8 = format__1_5RD_LN_SR_DRAINASE_JAGOIBABANG_2024_8.readFeatures(json__1_5RD_LN_SR_DRAINASE_JAGOIBABANG_2024_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__1_5RD_LN_SR_DRAINASE_JAGOIBABANG_2024_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1_5RD_LN_SR_DRAINASE_JAGOIBABANG_2024_8.addFeatures(features__1_5RD_LN_SR_DRAINASE_JAGOIBABANG_2024_8);
var lyr__1_5RD_LN_SR_DRAINASE_JAGOIBABANG_2024_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__1_5RD_LN_SR_DRAINASE_JAGOIBABANG_2024_8, 
                style: style__1_5RD_LN_SR_DRAINASE_JAGOIBABANG_2024_8,
                popuplayertitle: "_1_5RD_LN_SR_DRAINASE_JAGOIBABANG_2024",
                interactive: true,
    title: '_1_5RD_LN_SR_DRAINASE_JAGOIBABANG_2024<br />\
    <img src="styles/legend/_1_5RD_LN_SR_DRAINASE_JAGOIBABANG_2024_8_0.png" /> Rencana Jaringan Drainase Lokal<br />\
    <img src="styles/legend/_1_5RD_LN_SR_DRAINASE_JAGOIBABANG_2024_8_1.png" /> Rencana Jaringan Drainase Primer<br />\
    <img src="styles/legend/_1_5RD_LN_SR_DRAINASE_JAGOIBABANG_2024_8_2.png" /> Rencana Jaringan Drainase Sekunder<br />\
    <img src="styles/legend/_1_5RD_LN_SR_DRAINASE_JAGOIBABANG_2024_8_3.png" /> Rencana Jaringan Drainase Tersier<br />'
        });
var format__1_5RD_PT_SR_DRAINASE_JAGOIBABANG_2024_9 = new ol.format.GeoJSON();
var features__1_5RD_PT_SR_DRAINASE_JAGOIBABANG_2024_9 = format__1_5RD_PT_SR_DRAINASE_JAGOIBABANG_2024_9.readFeatures(json__1_5RD_PT_SR_DRAINASE_JAGOIBABANG_2024_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__1_5RD_PT_SR_DRAINASE_JAGOIBABANG_2024_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1_5RD_PT_SR_DRAINASE_JAGOIBABANG_2024_9.addFeatures(features__1_5RD_PT_SR_DRAINASE_JAGOIBABANG_2024_9);
var lyr__1_5RD_PT_SR_DRAINASE_JAGOIBABANG_2024_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__1_5RD_PT_SR_DRAINASE_JAGOIBABANG_2024_9, 
                style: style__1_5RD_PT_SR_DRAINASE_JAGOIBABANG_2024_9,
                popuplayertitle: "_1_5RD_PT_SR_DRAINASE_JAGOIBABANG_2024",
                interactive: true,
    title: '_1_5RD_PT_SR_DRAINASE_JAGOIBABANG_2024<br />\
    <img src="styles/legend/_1_5RD_PT_SR_DRAINASE_JAGOIBABANG_2024_9_0.png" /> Bangunan Tampungan (Polder)<br />'
        });
var format__1_5RD_LN_SR_ENERGI_JAGOIBABANG_2024_10 = new ol.format.GeoJSON();
var features__1_5RD_LN_SR_ENERGI_JAGOIBABANG_2024_10 = format__1_5RD_LN_SR_ENERGI_JAGOIBABANG_2024_10.readFeatures(json__1_5RD_LN_SR_ENERGI_JAGOIBABANG_2024_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__1_5RD_LN_SR_ENERGI_JAGOIBABANG_2024_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1_5RD_LN_SR_ENERGI_JAGOIBABANG_2024_10.addFeatures(features__1_5RD_LN_SR_ENERGI_JAGOIBABANG_2024_10);
var lyr__1_5RD_LN_SR_ENERGI_JAGOIBABANG_2024_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__1_5RD_LN_SR_ENERGI_JAGOIBABANG_2024_10, 
                style: style__1_5RD_LN_SR_ENERGI_JAGOIBABANG_2024_10,
                popuplayertitle: "_1_5RD_LN_SR_ENERGI_JAGOIBABANG_2024",
                interactive: true,
    title: '_1_5RD_LN_SR_ENERGI_JAGOIBABANG_2024<br />\
    <img src="styles/legend/_1_5RD_LN_SR_ENERGI_JAGOIBABANG_2024_10_0.png" /> Saluran Udara Tegangan Ekstra Tinggi (SUTET)<br />\
    <img src="styles/legend/_1_5RD_LN_SR_ENERGI_JAGOIBABANG_2024_10_1.png" /> Saluran Udara Tegangan Menengah (SUTM)<br />'
        });
var format__1_5RD_PT_SR_ENERGI_JAGOIBABANG_2024_11 = new ol.format.GeoJSON();
var features__1_5RD_PT_SR_ENERGI_JAGOIBABANG_2024_11 = format__1_5RD_PT_SR_ENERGI_JAGOIBABANG_2024_11.readFeatures(json__1_5RD_PT_SR_ENERGI_JAGOIBABANG_2024_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__1_5RD_PT_SR_ENERGI_JAGOIBABANG_2024_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1_5RD_PT_SR_ENERGI_JAGOIBABANG_2024_11.addFeatures(features__1_5RD_PT_SR_ENERGI_JAGOIBABANG_2024_11);
var lyr__1_5RD_PT_SR_ENERGI_JAGOIBABANG_2024_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__1_5RD_PT_SR_ENERGI_JAGOIBABANG_2024_11, 
                style: style__1_5RD_PT_SR_ENERGI_JAGOIBABANG_2024_11,
                popuplayertitle: "_1_5RD_PT_SR_ENERGI_JAGOIBABANG_2024",
                interactive: true,
    title: '_1_5RD_PT_SR_ENERGI_JAGOIBABANG_2024<br />\
    <img src="styles/legend/_1_5RD_PT_SR_ENERGI_JAGOIBABANG_2024_11_0.png" /> Pembangkit Listrik Tenaga Surya (PLTS)<br />'
        });
var format_TOPONIMIcopy_12 = new ol.format.GeoJSON();
var features_TOPONIMIcopy_12 = format_TOPONIMIcopy_12.readFeatures(json_TOPONIMIcopy_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TOPONIMIcopy_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TOPONIMIcopy_12.addFeatures(features_TOPONIMIcopy_12);
var lyr_TOPONIMIcopy_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TOPONIMIcopy_12,
maxResolution:1.4002233076130983,
 
                style: style_TOPONIMIcopy_12,
                popuplayertitle: "TOPONIMI copy",
                interactive: true,
                title: '<img src="styles/legend/TOPONIMIcopy_12.png" /> TOPONIMI copy'
            });
var format_Strukturruangpersampahan_13 = new ol.format.GeoJSON();
var features_Strukturruangpersampahan_13 = format_Strukturruangpersampahan_13.readFeatures(json_Strukturruangpersampahan_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Strukturruangpersampahan_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Strukturruangpersampahan_13.addFeatures(features_Strukturruangpersampahan_13);
var lyr_Strukturruangpersampahan_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Strukturruangpersampahan_13, 
                style: style_Strukturruangpersampahan_13,
                popuplayertitle: "Struktur ruang persampahan",
                interactive: true,
    title: 'Struktur ruang persampahan<br />\
    <img src="styles/legend/Strukturruangpersampahan_13_0.png" /> Tempat Pengelolaan Sampah Reuse, Reduce, Recycle (TPS3R)<br />'
        });
var format__1_5RD_LN_SR_TRANSPORTASI_JAGOIBABANG_2024_14 = new ol.format.GeoJSON();
var features__1_5RD_LN_SR_TRANSPORTASI_JAGOIBABANG_2024_14 = format__1_5RD_LN_SR_TRANSPORTASI_JAGOIBABANG_2024_14.readFeatures(json__1_5RD_LN_SR_TRANSPORTASI_JAGOIBABANG_2024_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__1_5RD_LN_SR_TRANSPORTASI_JAGOIBABANG_2024_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1_5RD_LN_SR_TRANSPORTASI_JAGOIBABANG_2024_14.addFeatures(features__1_5RD_LN_SR_TRANSPORTASI_JAGOIBABANG_2024_14);
var lyr__1_5RD_LN_SR_TRANSPORTASI_JAGOIBABANG_2024_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__1_5RD_LN_SR_TRANSPORTASI_JAGOIBABANG_2024_14, 
                style: style__1_5RD_LN_SR_TRANSPORTASI_JAGOIBABANG_2024_14,
                popuplayertitle: "_1_5RD_LN_SR_TRANSPORTASI_JAGOIBABANG_2024",
                interactive: true,
    title: '_1_5RD_LN_SR_TRANSPORTASI_JAGOIBABANG_2024<br />\
    <img src="styles/legend/_1_5RD_LN_SR_TRANSPORTASI_JAGOIBABANG_2024_14_0.png" /> Jalan Kolektor Primer<br />\
    <img src="styles/legend/_1_5RD_LN_SR_TRANSPORTASI_JAGOIBABANG_2024_14_1.png" /> Jalan Lokal Primer<br />\
    <img src="styles/legend/_1_5RD_LN_SR_TRANSPORTASI_JAGOIBABANG_2024_14_2.png" /> Jalan Lokal Sekunder<br />'
        });
var format__1_5RD_PT_SR_TRANSPORTASI_JAGOIBABANG_2024_15 = new ol.format.GeoJSON();
var features__1_5RD_PT_SR_TRANSPORTASI_JAGOIBABANG_2024_15 = format__1_5RD_PT_SR_TRANSPORTASI_JAGOIBABANG_2024_15.readFeatures(json__1_5RD_PT_SR_TRANSPORTASI_JAGOIBABANG_2024_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__1_5RD_PT_SR_TRANSPORTASI_JAGOIBABANG_2024_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1_5RD_PT_SR_TRANSPORTASI_JAGOIBABANG_2024_15.addFeatures(features__1_5RD_PT_SR_TRANSPORTASI_JAGOIBABANG_2024_15);
var lyr__1_5RD_PT_SR_TRANSPORTASI_JAGOIBABANG_2024_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__1_5RD_PT_SR_TRANSPORTASI_JAGOIBABANG_2024_15, 
                style: style__1_5RD_PT_SR_TRANSPORTASI_JAGOIBABANG_2024_15,
                popuplayertitle: "_1_5RD_PT_SR_TRANSPORTASI_JAGOIBABANG_2024",
                interactive: true,
    title: '_1_5RD_PT_SR_TRANSPORTASI_JAGOIBABANG_2024<br />\
    <img src="styles/legend/_1_5RD_PT_SR_TRANSPORTASI_JAGOIBABANG_2024_15_0.png" /> Halte<br />\
    <img src="styles/legend/_1_5RD_PT_SR_TRANSPORTASI_JAGOIBABANG_2024_15_1.png" /> Jembatan<br />\
    <img src="styles/legend/_1_5RD_PT_SR_TRANSPORTASI_JAGOIBABANG_2024_15_2.png" /> Terminal Barang<br />\
    <img src="styles/legend/_1_5RD_PT_SR_TRANSPORTASI_JAGOIBABANG_2024_15_3.png" /> Terminal Penumpang Tipe C<br />'
        });
var format_Strukturruangpusatpelayanan_16 = new ol.format.GeoJSON();
var features_Strukturruangpusatpelayanan_16 = format_Strukturruangpusatpelayanan_16.readFeatures(json_Strukturruangpusatpelayanan_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Strukturruangpusatpelayanan_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Strukturruangpusatpelayanan_16.addFeatures(features_Strukturruangpusatpelayanan_16);
var lyr_Strukturruangpusatpelayanan_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Strukturruangpusatpelayanan_16, 
                style: style_Strukturruangpusatpelayanan_16,
                popuplayertitle: "Struktur ruang pusat pelayanan",
                interactive: true,
    title: 'Struktur ruang pusat pelayanan<br />\
    <img src="styles/legend/Strukturruangpusatpelayanan_16_0.png" /> Pusat Lingkungan Kelurahan/Desa<br />\
    <img src="styles/legend/Strukturruangpusatpelayanan_16_1.png" /> Pusat Pelayanan Kota/Kawasan Perkotaan<br />\
    <img src="styles/legend/Strukturruangpusatpelayanan_16_2.png" /> Sub Pusat Pelayanan Kota/Kawasan Perkotaan<br />'
        });
var format_SWP_BLOK_17 = new ol.format.GeoJSON();
var features_SWP_BLOK_17 = format_SWP_BLOK_17.readFeatures(json_SWP_BLOK_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SWP_BLOK_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SWP_BLOK_17.addFeatures(features_SWP_BLOK_17);
var lyr_SWP_BLOK_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SWP_BLOK_17, 
                style: style_SWP_BLOK_17,
                popuplayertitle: "SWP_BLOK",
                interactive: true,
                title: '<img src="styles/legend/SWP_BLOK_17.png" /> SWP_BLOK'
            });
var format_BatasDesa_18 = new ol.format.GeoJSON();
var features_BatasDesa_18 = format_BatasDesa_18.readFeatures(json_BatasDesa_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasDesa_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasDesa_18.addFeatures(features_BatasDesa_18);
var lyr_BatasDesa_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasDesa_18, 
                style: style_BatasDesa_18,
                popuplayertitle: "Batas Desa",
                interactive: true,
                title: '<img src="styles/legend/BatasDesa_18.png" /> Batas Desa'
            });
var format_VIDEO_DRONE_19 = new ol.format.GeoJSON();
var features_VIDEO_DRONE_19 = format_VIDEO_DRONE_19.readFeatures(json_VIDEO_DRONE_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VIDEO_DRONE_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VIDEO_DRONE_19.addFeatures(features_VIDEO_DRONE_19);
var lyr_VIDEO_DRONE_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VIDEO_DRONE_19, 
                style: style_VIDEO_DRONE_19,
                popuplayertitle: "VIDEO_DRONE",
                interactive: true,
                title: '<img src="styles/legend/VIDEO_DRONE_19.png" /> VIDEO_DRONE'
            });
var group_StrukturRuangPusatPelayanan = new ol.layer.Group({
                                layers: [lyr_Strukturruangpusatpelayanan_16,],
                                fold: "open",
                                title: "Struktur Ruang Pusat Pelayanan"});
var group_StrukturRuangtransportasi = new ol.layer.Group({
                                layers: [lyr__1_5RD_LN_SR_TRANSPORTASI_JAGOIBABANG_2024_14,lyr__1_5RD_PT_SR_TRANSPORTASI_JAGOIBABANG_2024_15,],
                                fold: "open",
                                title: "Struktur Ruang transportasi"});
var group_StrukturRuangPersampahan = new ol.layer.Group({
                                layers: [lyr_TOPONIMIcopy_12,lyr_Strukturruangpersampahan_13,],
                                fold: "open",
                                title: "Struktur Ruang Persampahan"});
var group_StrukturRuangenergi = new ol.layer.Group({
                                layers: [lyr__1_5RD_LN_SR_ENERGI_JAGOIBABANG_2024_10,lyr__1_5RD_PT_SR_ENERGI_JAGOIBABANG_2024_11,],
                                fold: "open",
                                title: "Struktur Ruang energi"});
var group_StrukturRuangjaringandrainase = new ol.layer.Group({
                                layers: [lyr__1_5RD_LN_SR_DRAINASE_JAGOIBABANG_2024_8,lyr__1_5RD_PT_SR_DRAINASE_JAGOIBABANG_2024_9,],
                                fold: "open",
                                title: "Struktur Ruang jaringan drainase"});
var group_StrukturRuangairlimbah = new ol.layer.Group({
                                layers: [lyr__1_5RD_PT_SR_AIRLIMBAHDANB3_JAGOIBABANG_2024_7,],
                                fold: "open",
                                title: "Struktur Ruang air limbah"});
var group_StrukturRuangairminum = new ol.layer.Group({
                                layers: [lyr__1_5RD_LN_SR_AIR_JAGOIBABANG_2024_5,lyr__1_5RD_PT_SR_AIR_JAGOIBABANG_2024_6,],
                                fold: "open",
                                title: "Struktur Ruang air minum"});
var group_StrukturRuangprasaranalainnya = new ol.layer.Group({
                                layers: [lyr__1_5RD_LN_SR_PRASARANALAIN_JAGOIBABANG_2024_3,lyr__1_5RD_PT_SR_PRASARANALAIN_JAGOIBABANG_2024_4,],
                                fold: "open",
                                title: "Struktur Ruang prasarana lainnya"});

lyr_GoogleHybrid_0.setVisible(false);lyr_GoogleSatellite_1.setVisible(true);lyr_KONSEPPOLARUANG_2.setVisible(true);lyr__1_5RD_LN_SR_PRASARANALAIN_JAGOIBABANG_2024_3.setVisible(false);lyr__1_5RD_PT_SR_PRASARANALAIN_JAGOIBABANG_2024_4.setVisible(false);lyr__1_5RD_LN_SR_AIR_JAGOIBABANG_2024_5.setVisible(false);lyr__1_5RD_PT_SR_AIR_JAGOIBABANG_2024_6.setVisible(false);lyr__1_5RD_PT_SR_AIRLIMBAHDANB3_JAGOIBABANG_2024_7.setVisible(false);lyr__1_5RD_LN_SR_DRAINASE_JAGOIBABANG_2024_8.setVisible(false);lyr__1_5RD_PT_SR_DRAINASE_JAGOIBABANG_2024_9.setVisible(false);lyr__1_5RD_LN_SR_ENERGI_JAGOIBABANG_2024_10.setVisible(false);lyr__1_5RD_PT_SR_ENERGI_JAGOIBABANG_2024_11.setVisible(false);lyr_TOPONIMIcopy_12.setVisible(true);lyr_Strukturruangpersampahan_13.setVisible(false);lyr__1_5RD_LN_SR_TRANSPORTASI_JAGOIBABANG_2024_14.setVisible(false);lyr__1_5RD_PT_SR_TRANSPORTASI_JAGOIBABANG_2024_15.setVisible(false);lyr_Strukturruangpusatpelayanan_16.setVisible(false);lyr_SWP_BLOK_17.setVisible(true);lyr_BatasDesa_18.setVisible(true);lyr_VIDEO_DRONE_19.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_GoogleSatellite_1,lyr_KONSEPPOLARUANG_2,group_StrukturRuangprasaranalainnya,group_StrukturRuangairminum,group_StrukturRuangairlimbah,group_StrukturRuangjaringandrainase,group_StrukturRuangenergi,group_StrukturRuangPersampahan,group_StrukturRuangtransportasi,group_StrukturRuangPusatPelayanan,lyr_SWP_BLOK_17,lyr_BatasDesa_18,lyr_VIDEO_DRONE_19];
lyr_KONSEPPOLARUANG_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'Nama Objek', 'NAMZON': 'Nama Zona', 'KODZON': 'Kode Zona', 'NAMSZN': 'Nama Sub-Zona', 'KODSZN': 'Kode Sub-Zona', 'JNSRPR': 'Jenis Rencana Pola Ruang', 'KODEWP': 'Kode WP', 'KODSWP': 'Kode SWP', 'KODBLK': 'Kode Blok', 'KODSBL': 'Kode Sub-Blok', 'WADMPR': 'Wilayah Administrasi Provinsi', 'WADMKK': 'Wilayah Administrasi Kabupaten/Kota', 'WADMKC': 'Wilayah Administrasi Kecamatan', 'WADMKD': 'Wilayah Administrasi Kelurahan/Desa', 'KKOP_1': 'Kawasan Keselamatan Operasi Penerbangan', 'LP2B_2': 'Lahan Pertanian Pangan Berkelanjutan', 'KRB_03': 'Kawasan Rawan Bencana', 'TOD_04': 'Kawasan Berorientasi Transit', 'TEB_05': 'Tempat Evakuasi Bencana', 'PUSLIT': 'Pusat Penelitian', 'CAGBUD': 'Kawasan Cagar Budaya', 'RESAIR': 'Kawasan Resapan Air', 'KSMPDN': 'Kawasan Sempadan', 'HANKAM': 'Kawasan Pertahanan dan Keamanan', 'KKARST': 'Kawasan Karst', 'PTBGMB': 'Kawasan Pertambangan Mineral dan Batubara', 'MGRSAT': 'Kawasan Migrasi Satwa', 'RDBUMI': 'Ruang Dalam Bumi', 'TPZ_00': 'Teknik Pengaturan Zonasi', 'REMARK': 'Catatan', 'LUASHA': 'Luas Area', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr__1_5RD_LN_SR_PRASARANALAIN_JAGOIBABANG_2024_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'Nama Objek', 'ORDE01': 'Orde 1', 'ORDE02': 'Orde 2', 'JNSRSR': 'Jenis Rencana Struktur Ruang', 'STSJRN': 'Status Jaringan Infrastruktur', 'WADMPR': 'Wilayah Administrasi Provinsi', 'WADMKK': 'Wilayah Administrasi Kabupaten/Kota', 'REMARK': 'Catatan', 'SBDATA': 'Sumber Data', 'Shape_Length': 'Shape_Length', });
lyr__1_5RD_PT_SR_PRASARANALAIN_JAGOIBABANG_2024_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'Nama Objek', 'ORDE01': 'Orde 1', 'ORDE02': 'Orde 2', 'JNSRSR': 'Jenis Rencana Struktur Ruang', 'STSJRN': 'Status Jaringan Infrastruktur', 'WADMPR': 'Wilayah Administrasi Provinsi', 'WADMKK': 'Wilayah Administrasi Kabupaten/Kota', 'REMARK': 'Catatan', 'SBDATA': 'Sumber Data', });
lyr__1_5RD_LN_SR_AIR_JAGOIBABANG_2024_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'Nama Objek', 'ORDE01': 'Orde 1', 'ORDE02': 'Orde 2', 'JNSRSR': 'Jenis Rencana Struktur Ruang', 'STSJRN': 'Status Jaringan Infrastruktur', 'WADMPR': 'Wilayah Administrasi Provinsi', 'WADMKK': 'Wilayah Administrasi Kabupaten/Kota', 'REMARK': 'Catatan', 'SBDATA': 'Sumber Data', 'Shape_Length': 'Shape_Length', });
lyr__1_5RD_PT_SR_AIR_JAGOIBABANG_2024_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'Nama Objek', 'ORDE01': 'Orde 1', 'ORDE02': 'Orde 2', 'JNSRSR': 'Jenis Rencana Struktur Ruang', 'STSJRN': 'Status Jaringan Infrastruktur', 'WADMPR': 'Wilayah Administrasi Provinsi', 'WADMKK': 'Wilayah Administrasi Kabupaten/Kota', 'REMARK': 'Catatan', 'SBDATA': 'Sumber Data', });
lyr__1_5RD_PT_SR_AIRLIMBAHDANB3_JAGOIBABANG_2024_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'Nama Objek', 'ORDE01': 'Orde 1', 'ORDE02': 'Orde 2', 'JNSRSR': 'Jenis Rencana Struktur Ruang', 'STSJRN': 'Status Jaringan Infrastruktur', 'WADMPR': 'Wilayah Administrasi Provinsi', 'WADMKK': 'Wilayah Administrasi Kabupaten/Kota', 'REMARK': 'Catatan', 'SBDATA': 'Sumber Data', });
lyr__1_5RD_LN_SR_DRAINASE_JAGOIBABANG_2024_8.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'Nama Objek', 'ORDE01': 'Orde 1', 'ORDE02': 'Orde 2', 'JNSRSR': 'Jenis Rencana Struktur Ruang', 'STSJRN': 'Status Jaringan Infrastruktur', 'WADMPR': 'Wilayah Administrasi Provinsi', 'WADMKK': 'Wilayah Administrasi Kabupaten/Kota', 'REMARK': 'Catatan', 'SBDATA': 'Sumber Data', 'Shape_Length': 'Shape_Length', });
lyr__1_5RD_PT_SR_DRAINASE_JAGOIBABANG_2024_9.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'Nama Objek', 'ORDE01': 'Orde 1', 'ORDE02': 'Orde 2', 'JNSRSR': 'Jenis Rencana Struktur Ruang', 'STSJRN': 'Status Jaringan Infrastruktur', 'WADMPR': 'Wilayah Administrasi Provinsi', 'WADMKK': 'Wilayah Administrasi Kabupaten/Kota', 'REMARK': 'Catatan', 'SBDATA': 'Sumber Data', });
lyr__1_5RD_LN_SR_ENERGI_JAGOIBABANG_2024_10.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'Nama Objek', 'ORDE01': 'Orde 1', 'ORDE02': 'Orde 2', 'JNSRSR': 'Jenis Rencana Struktur Ruang', 'STSJRN': 'Status Jaringan Infrastruktur', 'WADMPR': 'Wilayah Administrasi Provinsi', 'WADMKK': 'Wilayah Administrasi Kabupaten/Kota', 'REMARK': 'Catatan', 'SBDATA': 'Sumber Data', 'Shape_Length': 'Shape_Length', });
lyr__1_5RD_PT_SR_ENERGI_JAGOIBABANG_2024_11.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'Nama Objek', 'ORDE01': 'Orde 1', 'ORDE02': 'Orde 2', 'JNSRSR': 'Jenis Rencana Struktur Ruang', 'STSJRN': 'Status Jaringan Infrastruktur', 'WADMPR': 'Wilayah Administrasi Provinsi', 'WADMKK': 'Wilayah Administrasi Kabupaten/Kota', 'REMARK': 'Catatan', 'SBDATA': 'Sumber Data', });
lyr_TOPONIMIcopy_12.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'JENIS_UTAM': 'JENIS_UTAM', 'JENIS': 'JENIS', 'KEGIATAN_O': 'KEGIATAN_O', 'TOPONIM': 'TOPONIM', 'SUMBER': 'SUMBER', 'FOTO': 'FOTO', 'WADMKD': 'WADMKD', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', });
lyr_Strukturruangpersampahan_13.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'Nama Objek', 'ORDE01': 'Orde 1', 'ORDE02': 'Orde 2', 'JNSRSR': 'Jenis Rencana Struktur Ruang', 'STSJRN': 'Status Jaringan Infrastruktur', 'WADMPR': 'Wilayah Administrasi Provinsi', 'WADMKK': 'Wilayah Administrasi Kabupaten/Kota', 'REMARK': 'Catatan', 'SBDATA': 'Sumber Data', });
lyr__1_5RD_LN_SR_TRANSPORTASI_JAGOIBABANG_2024_14.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'Nama Objek', 'ORDE01': 'Orde 1', 'ORDE02': 'Orde 2', 'JNSRSR': 'Jenis Rencana Struktur Ruang', 'STSJRN': 'Status Jaringan Infrastruktur', 'WADMPR': 'Wilayah Administrasi Provinsi', 'WADMKK': 'Wilayah Administrasi Kabupaten/Kota', 'REMARK': 'Catatan', 'SBDATA': 'Sumber Data', 'Shape_Length': 'Shape_Length', });
lyr__1_5RD_PT_SR_TRANSPORTASI_JAGOIBABANG_2024_15.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'Nama Objek', 'ORDE01': 'Orde 1', 'ORDE02': 'Orde 2', 'JNSRSR': 'Jenis Rencana Struktur Ruang', 'STSJRN': 'Status Jaringan Infrastruktur', 'WADMPR': 'Wilayah Administrasi Provinsi', 'WADMKK': 'Wilayah Administrasi Kabupaten/Kota', 'REMARK': 'Catatan', 'SBDATA': 'Sumber Data', });
lyr_Strukturruangpusatpelayanan_16.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'Nama Objek', 'ORDE01': 'Orde 1', 'ORDE02': 'Orde 2', 'JNSRSR': 'Jenis Rencana Struktur Ruang', 'STSJRN': 'Status Jaringan Infrastruktur', 'WADMPR': 'Wilayah Administrasi Provinsi', 'WADMKK': 'Wilayah Administrasi Kabupaten/Kota', 'REMARK': 'Catatan', 'SBDATA': 'Sumber Data', });
lyr_SWP_BLOK_17.set('fieldAliases', {'BWP': 'BWP', 'SBWP': 'SBWP', 'FID_Batas_': 'FID_Batas_', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'BLOK': 'BLOK', 'luas_ha': 'luas_ha', });
lyr_BatasDesa_18.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'NAMOBJ': 'NAMOBJ', 'METADATA': 'METADATA', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', });
lyr_VIDEO_DRONE_19.set('fieldAliases', {'objectid': 'objectid', 'fid_1': 'fid_1', 'video': 'video', 'LOKASI': 'LOKASI', });
lyr_KONSEPPOLARUANG_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'NAMZON': 'TextEdit', 'KODZON': 'ValueMap', 'NAMSZN': 'ValueMap', 'KODSZN': 'ValueMap', 'JNSRPR': 'ValueMap', 'KODEWP': 'TextEdit', 'KODSWP': 'TextEdit', 'KODBLK': 'TextEdit', 'KODSBL': 'ValueMap', 'WADMPR': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'KKOP_1': 'ValueMap', 'LP2B_2': 'ValueMap', 'KRB_03': 'ValueMap', 'TOD_04': 'ValueMap', 'TEB_05': 'ValueMap', 'PUSLIT': 'ValueMap', 'CAGBUD': 'ValueMap', 'RESAIR': 'ValueMap', 'KSMPDN': 'ValueMap', 'HANKAM': 'ValueMap', 'KKARST': 'ValueMap', 'PTBGMB': 'ValueMap', 'MGRSAT': 'ValueMap', 'RDBUMI': 'ValueMap', 'TPZ_00': 'TextEdit', 'REMARK': 'TextEdit', 'LUASHA': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr__1_5RD_LN_SR_PRASARANALAIN_JAGOIBABANG_2024_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'ORDE01': 'ValueMap', 'ORDE02': 'ValueMap', 'JNSRSR': 'ValueMap', 'STSJRN': 'ValueMap', 'WADMPR': 'TextEdit', 'WADMKK': 'TextEdit', 'REMARK': 'TextEdit', 'SBDATA': 'TextEdit', 'Shape_Length': 'TextEdit', });
lyr__1_5RD_PT_SR_PRASARANALAIN_JAGOIBABANG_2024_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'ORDE01': 'ValueMap', 'ORDE02': 'ValueMap', 'JNSRSR': 'ValueMap', 'STSJRN': 'ValueMap', 'WADMPR': 'TextEdit', 'WADMKK': 'TextEdit', 'REMARK': 'TextEdit', 'SBDATA': 'TextEdit', });
lyr__1_5RD_LN_SR_AIR_JAGOIBABANG_2024_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'ORDE01': 'ValueMap', 'ORDE02': 'ValueMap', 'JNSRSR': 'ValueMap', 'STSJRN': 'ValueMap', 'WADMPR': 'TextEdit', 'WADMKK': 'TextEdit', 'REMARK': 'TextEdit', 'SBDATA': 'TextEdit', 'Shape_Length': 'TextEdit', });
lyr__1_5RD_PT_SR_AIR_JAGOIBABANG_2024_6.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'ORDE01': 'ValueMap', 'ORDE02': 'ValueMap', 'JNSRSR': 'ValueMap', 'STSJRN': 'ValueMap', 'WADMPR': 'TextEdit', 'WADMKK': 'TextEdit', 'REMARK': 'TextEdit', 'SBDATA': 'TextEdit', });
lyr__1_5RD_PT_SR_AIRLIMBAHDANB3_JAGOIBABANG_2024_7.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'ORDE01': 'ValueMap', 'ORDE02': 'ValueMap', 'JNSRSR': 'ValueMap', 'STSJRN': 'ValueMap', 'WADMPR': 'TextEdit', 'WADMKK': 'TextEdit', 'REMARK': 'TextEdit', 'SBDATA': 'TextEdit', });
lyr__1_5RD_LN_SR_DRAINASE_JAGOIBABANG_2024_8.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'ORDE01': 'ValueMap', 'ORDE02': 'ValueMap', 'JNSRSR': 'ValueMap', 'STSJRN': 'ValueMap', 'WADMPR': 'TextEdit', 'WADMKK': 'TextEdit', 'REMARK': 'TextEdit', 'SBDATA': 'TextEdit', 'Shape_Length': 'TextEdit', });
lyr__1_5RD_PT_SR_DRAINASE_JAGOIBABANG_2024_9.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'ORDE01': 'ValueMap', 'ORDE02': 'ValueMap', 'JNSRSR': 'ValueMap', 'STSJRN': 'ValueMap', 'WADMPR': 'TextEdit', 'WADMKK': 'TextEdit', 'REMARK': 'TextEdit', 'SBDATA': 'TextEdit', });
lyr__1_5RD_LN_SR_ENERGI_JAGOIBABANG_2024_10.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'ORDE01': 'ValueMap', 'ORDE02': 'ValueMap', 'JNSRSR': 'ValueMap', 'STSJRN': 'ValueMap', 'WADMPR': 'TextEdit', 'WADMKK': 'TextEdit', 'REMARK': 'TextEdit', 'SBDATA': 'TextEdit', 'Shape_Length': 'TextEdit', });
lyr__1_5RD_PT_SR_ENERGI_JAGOIBABANG_2024_11.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'ORDE01': 'ValueMap', 'ORDE02': 'ValueMap', 'JNSRSR': 'ValueMap', 'STSJRN': 'ValueMap', 'WADMPR': 'TextEdit', 'WADMKK': 'TextEdit', 'REMARK': 'TextEdit', 'SBDATA': 'TextEdit', });
lyr_TOPONIMIcopy_12.set('fieldImages', {'OBJECTID': 'TextEdit', 'JENIS_UTAM': 'TextEdit', 'JENIS': 'TextEdit', 'KEGIATAN_O': 'TextEdit', 'TOPONIM': 'TextEdit', 'SUMBER': 'TextEdit', 'FOTO': 'ExternalResource', 'WADMKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', });
lyr_Strukturruangpersampahan_13.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'ORDE01': 'ValueMap', 'ORDE02': 'ValueMap', 'JNSRSR': 'ValueMap', 'STSJRN': 'ValueMap', 'WADMPR': 'TextEdit', 'WADMKK': 'TextEdit', 'REMARK': 'TextEdit', 'SBDATA': 'TextEdit', });
lyr__1_5RD_LN_SR_TRANSPORTASI_JAGOIBABANG_2024_14.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'ORDE01': 'ValueMap', 'ORDE02': 'ValueMap', 'JNSRSR': 'ValueMap', 'STSJRN': 'ValueMap', 'WADMPR': 'TextEdit', 'WADMKK': 'TextEdit', 'REMARK': 'TextEdit', 'SBDATA': 'TextEdit', 'Shape_Length': 'TextEdit', });
lyr__1_5RD_PT_SR_TRANSPORTASI_JAGOIBABANG_2024_15.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'ORDE01': 'ValueMap', 'ORDE02': 'ValueMap', 'JNSRSR': 'ValueMap', 'STSJRN': 'ValueMap', 'WADMPR': 'TextEdit', 'WADMKK': 'TextEdit', 'REMARK': 'TextEdit', 'SBDATA': 'TextEdit', });
lyr_Strukturruangpusatpelayanan_16.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'ORDE01': 'ValueMap', 'ORDE02': 'ValueMap', 'JNSRSR': 'ValueMap', 'STSJRN': 'ValueMap', 'WADMPR': 'TextEdit', 'WADMKK': 'TextEdit', 'REMARK': 'TextEdit', 'SBDATA': 'TextEdit', });
lyr_SWP_BLOK_17.set('fieldImages', {'BWP': 'TextEdit', 'SBWP': 'TextEdit', 'FID_Batas_': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'BLOK': 'TextEdit', 'luas_ha': 'TextEdit', });
lyr_BatasDesa_18.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'NAMOBJ': 'TextEdit', 'METADATA': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', });
lyr_VIDEO_DRONE_19.set('fieldImages', {'objectid': 'TextEdit', 'fid_1': 'TextEdit', 'video': 'TextEdit', 'LOKASI': 'TextEdit', });
lyr_KONSEPPOLARUANG_2.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'NAMOBJ': 'inline label - always visible', 'NAMZON': 'inline label - always visible', 'KODZON': 'inline label - always visible', 'NAMSZN': 'inline label - always visible', 'KODSZN': 'inline label - always visible', 'JNSRPR': 'inline label - always visible', 'KODEWP': 'inline label - always visible', 'KODSWP': 'inline label - always visible', 'KODBLK': 'inline label - always visible', 'KODSBL': 'inline label - always visible', 'WADMPR': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'WADMKC': 'inline label - always visible', 'WADMKD': 'inline label - always visible', 'KKOP_1': 'inline label - always visible', 'LP2B_2': 'inline label - always visible', 'KRB_03': 'inline label - always visible', 'TOD_04': 'inline label - always visible', 'TEB_05': 'inline label - always visible', 'PUSLIT': 'inline label - always visible', 'CAGBUD': 'inline label - always visible', 'RESAIR': 'inline label - always visible', 'KSMPDN': 'inline label - always visible', 'HANKAM': 'inline label - always visible', 'KKARST': 'inline label - always visible', 'PTBGMB': 'inline label - always visible', 'MGRSAT': 'inline label - always visible', 'RDBUMI': 'inline label - always visible', 'TPZ_00': 'inline label - always visible', 'REMARK': 'inline label - always visible', 'LUASHA': 'inline label - always visible', 'Shape_Length': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', });
lyr__1_5RD_LN_SR_PRASARANALAIN_JAGOIBABANG_2024_3.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'NAMOBJ': 'inline label - always visible', 'ORDE01': 'inline label - visible with data', 'ORDE02': 'inline label - always visible', 'JNSRSR': 'inline label - always visible', 'STSJRN': 'inline label - always visible', 'WADMPR': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'REMARK': 'inline label - always visible', 'SBDATA': 'inline label - always visible', 'Shape_Length': 'inline label - always visible', });
lyr__1_5RD_PT_SR_PRASARANALAIN_JAGOIBABANG_2024_4.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'NAMOBJ': 'inline label - always visible', 'ORDE01': 'inline label - always visible', 'ORDE02': 'inline label - always visible', 'JNSRSR': 'inline label - always visible', 'STSJRN': 'inline label - always visible', 'WADMPR': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'REMARK': 'inline label - always visible', 'SBDATA': 'inline label - always visible', });
lyr__1_5RD_LN_SR_AIR_JAGOIBABANG_2024_5.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'NAMOBJ': 'inline label - always visible', 'ORDE01': 'inline label - always visible', 'ORDE02': 'inline label - always visible', 'JNSRSR': 'inline label - visible with data', 'STSJRN': 'inline label - always visible', 'WADMPR': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'REMARK': 'inline label - always visible', 'SBDATA': 'inline label - always visible', 'Shape_Length': 'inline label - always visible', });
lyr__1_5RD_PT_SR_AIR_JAGOIBABANG_2024_6.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'NAMOBJ': 'inline label - always visible', 'ORDE01': 'inline label - always visible', 'ORDE02': 'inline label - always visible', 'JNSRSR': 'inline label - always visible', 'STSJRN': 'inline label - always visible', 'WADMPR': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'REMARK': 'inline label - always visible', 'SBDATA': 'inline label - always visible', });
lyr__1_5RD_PT_SR_AIRLIMBAHDANB3_JAGOIBABANG_2024_7.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'NAMOBJ': 'inline label - always visible', 'ORDE01': 'inline label - always visible', 'ORDE02': 'inline label - always visible', 'JNSRSR': 'inline label - always visible', 'STSJRN': 'inline label - always visible', 'WADMPR': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'REMARK': 'inline label - always visible', 'SBDATA': 'inline label - always visible', });
lyr__1_5RD_LN_SR_DRAINASE_JAGOIBABANG_2024_8.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'NAMOBJ': 'inline label - always visible', 'ORDE01': 'inline label - always visible', 'ORDE02': 'inline label - always visible', 'JNSRSR': 'inline label - always visible', 'STSJRN': 'inline label - always visible', 'WADMPR': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'REMARK': 'inline label - always visible', 'SBDATA': 'inline label - always visible', 'Shape_Length': 'inline label - always visible', });
lyr__1_5RD_PT_SR_DRAINASE_JAGOIBABANG_2024_9.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'NAMOBJ': 'inline label - always visible', 'ORDE01': 'inline label - always visible', 'ORDE02': 'inline label - always visible', 'JNSRSR': 'inline label - always visible', 'STSJRN': 'inline label - always visible', 'WADMPR': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'REMARK': 'inline label - always visible', 'SBDATA': 'inline label - always visible', });
lyr__1_5RD_LN_SR_ENERGI_JAGOIBABANG_2024_10.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'NAMOBJ': 'inline label - always visible', 'ORDE01': 'inline label - always visible', 'ORDE02': 'inline label - always visible', 'JNSRSR': 'inline label - always visible', 'STSJRN': 'inline label - always visible', 'WADMPR': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'REMARK': 'inline label - always visible', 'SBDATA': 'inline label - always visible', 'Shape_Length': 'inline label - always visible', });
lyr__1_5RD_PT_SR_ENERGI_JAGOIBABANG_2024_11.set('fieldLabels', {'OBJECTID': 'inline label - visible with data', 'NAMOBJ': 'inline label - always visible', 'ORDE01': 'inline label - always visible', 'ORDE02': 'inline label - always visible', 'JNSRSR': 'inline label - always visible', 'STSJRN': 'inline label - always visible', 'WADMPR': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'REMARK': 'inline label - always visible', 'SBDATA': 'inline label - always visible', });
lyr_TOPONIMIcopy_12.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'JENIS_UTAM': 'inline label - always visible', 'JENIS': 'inline label - always visible', 'KEGIATAN_O': 'inline label - always visible', 'TOPONIM': 'inline label - always visible', 'SUMBER': 'inline label - always visible', 'FOTO': 'inline label - always visible', 'WADMKD': 'no label', 'WADMKC': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', });
lyr_Strukturruangpersampahan_13.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'NAMOBJ': 'inline label - always visible', 'ORDE01': 'inline label - always visible', 'ORDE02': 'inline label - always visible', 'JNSRSR': 'inline label - always visible', 'STSJRN': 'inline label - always visible', 'WADMPR': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'REMARK': 'inline label - always visible', 'SBDATA': 'inline label - always visible', });
lyr__1_5RD_LN_SR_TRANSPORTASI_JAGOIBABANG_2024_14.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'NAMOBJ': 'inline label - visible with data', 'ORDE01': 'inline label - always visible', 'ORDE02': 'inline label - always visible', 'JNSRSR': 'inline label - always visible', 'STSJRN': 'inline label - always visible', 'WADMPR': 'inline label - always visible', 'WADMKK': 'inline label - visible with data', 'REMARK': 'inline label - always visible', 'SBDATA': 'inline label - always visible', 'Shape_Length': 'inline label - always visible', });
lyr__1_5RD_PT_SR_TRANSPORTASI_JAGOIBABANG_2024_15.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'NAMOBJ': 'inline label - always visible', 'ORDE01': 'inline label - always visible', 'ORDE02': 'inline label - always visible', 'JNSRSR': 'inline label - always visible', 'STSJRN': 'inline label - always visible', 'WADMPR': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'REMARK': 'inline label - always visible', 'SBDATA': 'inline label - always visible', });
lyr_Strukturruangpusatpelayanan_16.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'NAMOBJ': 'inline label - always visible', 'ORDE01': 'inline label - always visible', 'ORDE02': 'inline label - always visible', 'JNSRSR': 'inline label - always visible', 'STSJRN': 'inline label - always visible', 'WADMPR': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'REMARK': 'inline label - always visible', 'SBDATA': 'inline label - always visible', });
lyr_SWP_BLOK_17.set('fieldLabels', {'BWP': 'inline label - always visible', 'SBWP': 'inline label - always visible', 'FID_Batas_': 'inline label - always visible', 'WADMKC': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'BLOK': 'inline label - always visible', 'luas_ha': 'inline label - always visible', });
lyr_BatasDesa_18.set('fieldLabels', {'OBJECTID_1': 'inline label - always visible', 'NAMOBJ': 'inline label - always visible', 'METADATA': 'inline label - always visible', 'WADMKC': 'inline label - always visible', 'WADMKD': 'inline label - always visible', 'WADMKK': 'inline label - always visible', });
lyr_VIDEO_DRONE_19.set('fieldLabels', {'objectid': 'inline label - always visible', 'fid_1': 'inline label - always visible', 'video': 'inline label - always visible', 'LOKASI': 'no label', });
lyr_VIDEO_DRONE_19.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});