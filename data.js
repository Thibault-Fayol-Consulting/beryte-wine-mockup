/* =============================================================
   BERYTE WINE — CATALOGUE
   Extrait du vrai catalogue berytewine.com
   Schema WooCommerce-compatible
   ============================================================= */
const PRODUCTS = [
  // --- ITALIE — Piémont ---
  { id:'gaja-sperss-2019', name:'Gaja Sperss Barolo 2019', producer:'Gaja', country:'Italie', region:'Piémont', appellation:'Barolo DOCG', color:'rouge', grape:'Nebbiolo', year:2019, meta:'Nebbiolo · 75cl', price:341, old:385, pills:['iconic'], hue:'dark' },
  { id:'sottimano-pajore-2020', name:'Sottimano Pajoré Barbaresco 2020', producer:'Sottimano', country:'Italie', region:'Piémont', appellation:'Barbaresco DOCG', color:'rouge', grape:'Nebbiolo', year:2020, meta:'Nebbiolo · 75cl', price:51, hue:'dark' },
  { id:'margherita-otto-barolo-2020', name:'Margherita Otto Barolo 2020', producer:'Margherita Otto', country:'Italie', region:'Piémont', appellation:'Barolo DOCG', color:'rouge', grape:'Nebbiolo', year:2020, meta:'Nebbiolo · 75cl', price:69, hue:'dark' },
  { id:'schiavenza-prapo-2018', name:'Schiavenza Prapo Barolo 2018', producer:'Schiavenza', country:'Italie', region:'Piémont', appellation:'Barolo DOCG', color:'rouge', grape:'Nebbiolo', year:2018, meta:'Nebbiolo · 75cl', price:48, hue:'dark' },
  { id:'alessandria-barbera-2024', name:'Gianfranco Alessandria Barbera 2024', producer:'Alessandria', country:'Italie', region:'Piémont', appellation:'Barbera d\'Alba DOC', color:'rouge', grape:'Barbera', year:2024, meta:'Barbera · 75cl', price:11, pills:['new'], hue:'rouge' },
  { id:'negri-tartufaia-2021', name:'Giulia Negri La Tartufaia Barolo 2021', producer:'Giulia Negri', country:'Italie', region:'Piémont', appellation:'Barolo DOCG', color:'rouge', grape:'Nebbiolo', year:2021, meta:'Nebbiolo · Magnum 1,5L', price:94, hue:'dark' },

  // --- ITALIE — Toscane ---
  { id:'gianni-brunello-2020', name:'Gianni Brunelli Brunello 2020', producer:'Gianni Brunelli', country:'Italie', region:'Toscane', appellation:'Brunello di Montalcino DOCG', color:'rouge', grape:'Sangiovese', year:2020, meta:'Sangiovese · 75cl', price:57.50, pills:['iconic'], hue:'rouge' },
  { id:'felsina-rancia-2021', name:'Felsina Rancia Gran Selezione 2021', producer:'Felsina', country:'Italie', region:'Toscane', appellation:'Chianti Classico DOCG', color:'rouge', grape:'Sangiovese', year:2021, meta:'Sangiovese · 75cl', price:39, hue:'rouge' },
  { id:'avignonesi-desiderio-2021', name:'Avignonesi Desiderio Merlot 2021', producer:'Avignonesi', country:'Italie', region:'Toscane', appellation:'Toscane IGT', color:'rouge', grape:'Merlot', year:2021, meta:'Merlot · 75cl', price:46.50, hue:'dark' },
  { id:'buontempo-brunello-2018', name:'Tenuta Buon Tempo Brunello 2018', producer:'Tenuta Buon Tempo', country:'Italie', region:'Toscane', appellation:'Brunello di Montalcino DOCG', color:'rouge', grape:'Sangiovese', year:2018, meta:'Sangiovese · 75cl', price:29, hue:'rouge' },

  // --- ITALIE — Autres régions ---
  { id:'benanti-etna-2023', name:'Benanti Etna Rosso 2023', producer:'Benanti', country:'Italie', region:'Sicile', appellation:'Etna DOC', color:'rouge', grape:'Nerello Mascalese', year:2023, meta:'Nerello · 75cl', price:14.75, pills:['new'], hue:'rouge' },
  { id:'lonardo-taurasi-2016', name:'Cantine Lonardo Taurasi 2016', producer:'Lonardo', country:'Italie', region:'Campanie', appellation:'Taurasi DOCG', color:'rouge', grape:'Aglianico', year:2016, meta:'Aglianico · 75cl', price:24, hue:'dark' },
  { id:'jasci-montepulciano-2022', name:'Jasci Montepulciano 2022', producer:'Jasci', country:'Italie', region:'Abruzzes', appellation:'Montepulciano d\'Abruzzo DOC', color:'rouge', grape:'Montepulciano', year:2022, meta:'Montepulciano · 75cl', price:6.50, hue:'rouge' },
  { id:'buglioni-amarone-2020', name:'Buglioni Il Lussurioso Amarone 2020', producer:'Buglioni', country:'Italie', region:'Vénétie', appellation:'Amarone DOCG', color:'rouge', grape:'Corvina', year:2020, meta:'Corvina · 75cl', price:32.95, hue:'dark' },

  // --- ESPAGNE ---
  { id:'palacios-ermita-2022', name:"Álvaro Palacios L'Ermita 2022", producer:'Álvaro Palacios', country:'Espagne', region:'Catalogne', appellation:'Priorat DOC', color:'rouge', grape:'Grenache', year:2022, meta:'Grenache · 75cl', price:846, pills:['iconic'], hue:'dark' },
  { id:'palacios-dofi-2022', name:'Álvaro Palacios Finca Dofí 2022', producer:'Álvaro Palacios', country:'Espagne', region:'Catalogne', appellation:'Priorat DOC', color:'rouge', grape:'Grenache', year:2022, meta:'Grenache · 75cl', price:61, pills:['iconic'], hue:'dark' },
  { id:'palacios-terrasses-2022', name:'Álvaro Palacios Les Terrasses 2022', producer:'Álvaro Palacios', country:'Espagne', region:'Catalogne', appellation:'Priorat DOC', color:'rouge', grape:'Grenache', year:2022, meta:'Assemblage · 75cl', price:25.95, hue:'rouge' },
  { id:'palacios-lamas-2022', name:'Descendientes J.Palacios Las Lamas 2022', producer:'Descendientes Palacios', country:'Espagne', region:'Bierzo', appellation:'Bierzo DO', color:'rouge', grape:'Mencia', year:2022, meta:'Mencia · 75cl', price:87, hue:'dark' },
  { id:'palacios-faraona-2022', name:'Descendientes J.Palacios La Faraona 2022', producer:'Descendientes Palacios', country:'Espagne', region:'Bierzo', appellation:'Bierzo DO', color:'rouge', grape:'Mencia', year:2022, meta:'Mencia · 75cl', price:875, pills:['iconic'], hue:'dark' },
  { id:'rioja-ardanza-2019', name:'La Rioja Alta Viña Ardanza 2019', producer:'La Rioja Alta', country:'Espagne', region:'Rioja', appellation:'Rioja DOC', color:'rouge', grape:'Tempranillo', year:2019, meta:'Tempranillo · 75cl', price:24.50, hue:'rouge' },
  { id:'rioja-890-2011', name:'La Rioja Alta Gran Reserva 890 — 2011', producer:'La Rioja Alta', country:'Espagne', region:'Rioja', appellation:'Rioja DOC', color:'rouge', grape:'Tempranillo', year:2011, meta:'Tempranillo · 75cl', price:152, pills:['iconic'], hue:'dark' },
  { id:'aguila-picaro-2023', name:'Dominio del Aguila Pícaro 2023', producer:'Dominio del Aguila', country:'Espagne', region:'Ribera del Duero', appellation:'Ribera del Duero DO', color:'rouge', grape:'Tinto Fino', year:2023, meta:'Tinto Fino · 75cl', price:24.50, hue:'rouge' },
  { id:'acustic-brao-2019', name:'Acustic Brao Grenache Carignan 2019', producer:'Acustic', country:'Espagne', region:'Catalogne', appellation:'Montsant DO', color:'rouge', grape:'Grenache', year:2019, meta:'Grenache, Carignan · 75cl', price:19.30, pills:['bio'], hue:'rouge' },

  // --- FRANCE (fictif pour variété, catalogue réel limité sur FR) ---
  { id:'france-bordeaux-01', name:'Château Saint-Émilion Grand Cru 2020', producer:'Château SE', country:'France', region:'Bordeaux', appellation:'Saint-Émilion GC', color:'rouge', grape:'Merlot', year:2020, meta:'Merlot assemblé · 75cl', price:48, hue:'rouge' },
  { id:'france-rhone-01', name:'Domaine de la Vieille Julienne Châteauneuf 2019', producer:'Vieille Julienne', country:'France', region:'Rhône', appellation:'Châteauneuf-du-Pape AOC', color:'rouge', grape:'Grenache', year:2019, meta:'Grenache · 75cl', price:52, hue:'dark' },

  // --- ARGENTINE ---
  { id:'riccitelli-apple-malbec-2021', name:"Riccitelli 'The Apple' Malbec 2021", producer:'Matias Riccitelli', country:'Argentine', region:'Mendoza', appellation:'Mendoza', color:'rouge', grape:'Malbec', year:2021, meta:'Malbec · 75cl', price:15.50, pills:['new'], hue:'dark' },
  { id:'riccitelli-republica-2020', name:'Riccitelli República del Malbec 2020', producer:'Matias Riccitelli', country:'Argentine', region:'Mendoza', appellation:'Luján de Cuyo', color:'rouge', grape:'Malbec', year:2020, meta:'Malbec · 75cl', price:32, hue:'dark' },
  { id:'atamisque-malbec-2022', name:'Atamisque Malbec 2022', producer:'Atamisque', country:'Argentine', region:'Mendoza', appellation:'Vallée de Uco', color:'rouge', grape:'Malbec', year:2022, meta:'Malbec · 75cl', price:14.50, hue:'rouge' },
  { id:'rutini-antologia-2018', name:'Rutini Antología LIII 2018', producer:'La Rural', country:'Argentine', region:'Mendoza', appellation:'Vallée de Uco', color:'rouge', grape:'Malbec', year:2018, meta:'Assemblage · 75cl', price:32, hue:'dark' },

  // --- CHILI ---
  { id:'neyen-apalta-2017', name:'Neyen Espíritu de Apalta 2017', producer:'Neyen', country:'Chili', region:'Colchagua', appellation:'Apalta DO', color:'rouge', grape:'Carménère', year:2017, meta:'Carménère assemblé · 75cl', price:39.70, hue:'dark' },
  { id:'antiyal-kuyen-2020', name:'Antiyal Kuyen 2020', producer:'Antiyal', country:'Chili', region:'Maipo', appellation:'Maipo Valley', color:'rouge', grape:'Syrah', year:2020, meta:'Assemblage · 75cl', price:19.80, pills:['bio'], hue:'rouge' },

  // --- USA ---
  { id:'cayuse-god-2020', name:'Cayuse God Only Knows Grenache 2020', producer:'Cayuse', country:'USA', region:'Washington', appellation:'Walla Walla', color:'rouge', grape:'Grenache', year:2020, meta:'Grenache · 75cl', price:105, pills:['iconic'], hue:'dark' },
  { id:'cayuse-impulsivo-2021', name:'Cayuse Impulsivo Tempranillo 2021', producer:'Cayuse', country:'USA', region:'Washington', appellation:'Walla Walla', color:'rouge', grape:'Tempranillo', year:2021, meta:'Tempranillo · 75cl', price:105, pills:['iconic'], hue:'dark' },
  { id:'shafer-td9-2022', name:'Shafer TD9 2022', producer:'Shafer', country:'USA', region:'Napa', appellation:'Napa Valley', color:'rouge', grape:'Merlot', year:2022, meta:'Assemblage · 75cl', price:64, hue:'dark' },
  { id:'shafer-hillside-2021', name:'Shafer Hillside Select 2021', producer:'Shafer', country:'USA', region:'Napa', appellation:'Stags Leap', color:'rouge', grape:'Cabernet Sauvignon', year:2021, meta:'Cab. Sauvignon · 75cl', price:326, pills:['iconic'], hue:'dark' },

  // --- NOUVELLE-ZÉLANDE ---
  { id:'felton-block3-2023', name:'Felton Road Block 3 Pinot Noir 2023', producer:'Felton Road', country:'Nouvelle-Zélande', region:'Central Otago', appellation:'Central Otago', color:'rouge', grape:'Pinot Noir', year:2023, meta:'Pinot Noir · 75cl', price:56, pills:['iconic'], hue:'rouge' },
  { id:'felton-calvert-2023', name:'Felton Road Calvert Pinot Noir 2023', producer:'Felton Road', country:'Nouvelle-Zélande', region:'Central Otago', appellation:'Central Otago', color:'rouge', grape:'Pinot Noir', year:2023, meta:'Pinot Noir · 75cl', price:43, hue:'rouge' },
  { id:'atarangi-crimson-2022', name:'Ata Rangi Crimson Pinot Noir 2022', producer:'Ata Rangi', country:'Nouvelle-Zélande', region:'Martinborough', appellation:'Martinborough', color:'rouge', grape:'Pinot Noir', year:2022, meta:'Pinot Noir · 75cl', price:21, hue:'rouge' },

  // --- AUSTRALIE ---
  { id:'balnaves-tally-2018', name:'Balnaves The Tally Reserve 2018', producer:'Balnaves', country:'Australie', region:'Coonawarra', appellation:'Coonawarra', color:'rouge', grape:'Cabernet Sauvignon', year:2018, meta:'Cab. Sauvignon · 75cl', price:49.50, hue:'dark' },
  { id:'darenberg-dead-arm-2018', name:"D'Arenberg Dead Arm Shiraz 2018", producer:"D'Arenberg", country:'Australie', region:'McLaren Vale', appellation:'McLaren Vale', color:'rouge', grape:'Syrah', year:2018, meta:'Shiraz · 75cl', price:29.50, hue:'dark' },

  // --- AFRIQUE DU SUD ---
  { id:'sadie-columella-2023', name:'Sadie Family Columella 2023', producer:'Sadie Family', country:'Afrique du Sud', region:'Swartland', appellation:'WO Swartland', color:'rouge', grape:'Syrah', year:2023, meta:'Syrah assemblage · 75cl', price:80, pills:['bio'], hue:'dark' },
  { id:'sadie-pofadder-2024', name:'Sadie Family Pofadder Cinsault 2024', producer:'Sadie Family', country:'Afrique du Sud', region:'Swartland', appellation:'WO Swartland', color:'rouge', grape:'Cinsault', year:2024, meta:'Cinsault vieilles vignes · 75cl', price:40, pills:['bio','new'], hue:'rouge' },
  { id:'crystallum-peter-max-2023', name:'Crystallum Peter Max Pinot Noir 2023', producer:'Crystallum', country:'Afrique du Sud', region:'Western Cape', appellation:'WO Western Cape', color:'rouge', grape:'Pinot Noir', year:2023, meta:'Pinot Noir · 75cl', price:19.50, hue:'rouge' },

  // --- PORTUGAL ---
  { id:'niepoort-redoma-2022', name:'Niepoort Redoma Tinto 2022', producer:'Niepoort', country:'Portugal', region:'Douro', appellation:'Douro DOC', color:'rouge', grape:'Touriga Nacional', year:2022, meta:'Touriga N. · 75cl', price:23, hue:'rouge' },
  { id:'niepoort-drink-me-2022', name:'Niepoort Drink Me 2022', producer:'Niepoort', country:'Portugal', region:'Douro', appellation:'Douro DOC', color:'rouge', grape:'Touriga Nacional', year:2022, meta:'Assemblage · 75cl', price:6.95, pills:['new'], hue:'rouge' },
  { id:'madeira-granitos-2021', name:'António Madeira Os Granitos 2021', producer:'António Madeira', country:'Portugal', region:'Dão', appellation:'Dão DOC', color:'rouge', grape:'Jaen', year:2021, meta:'Jaen assemblé · 75cl', price:48.70, hue:'rouge' },

  // --- AUTRICHE / SUISSE / ALLEMAGNE ---
  { id:'moric-blaufrankisch-2023', name:'Moric Blaufränkisch 2023', producer:'Moric', country:'Autriche', region:'Burgenland', appellation:'Burgenland', color:'rouge', grape:'Blaufränkisch', year:2023, meta:'Blaufränkisch · 75cl', price:15, hue:'rouge' },
  { id:'chappaz-charrat-2023', name:'Chappaz Pinot Charrat 2023', producer:'Chappaz', country:'Suisse', region:'Valais', appellation:'Valais AOC', color:'rouge', grape:'Pinot Noir', year:2023, meta:'Pinot Noir · 75cl', price:58, pills:['bio'], hue:'rouge' },
  { id:'becker-spatburgunder-2019', name:'Friedrich Becker Spätburgunder 2019', producer:'Friedrich Becker', country:'Allemagne', region:'Pfalz', appellation:'VDP Pfalz', color:'rouge', grape:'Pinot Noir', year:2019, meta:'Pinot Noir · 75cl', price:16.30, hue:'rouge' },

  // --- LIBAN ---
  { id:'tourelles-syrah-2022', name:'Domaine des Tourelles Syrah 2022', producer:'Domaine des Tourelles', country:'Liban', region:'Bekaa', appellation:'Bekaa', color:'rouge', grape:'Syrah', year:2022, meta:'Syrah assemblée · 75cl', price:8.15, pills:['new'], hue:'rouge' },
  { id:'tourelles-marquis-2020', name:'Marquis des Beys 2020', producer:'Domaine des Tourelles', country:'Liban', region:'Bekaa', appellation:'Bekaa', color:'rouge', grape:'Syrah', year:2020, meta:'Syrah, Cab. · 75cl', price:19, hue:'dark' },
];

/* =============================================================
   AGGREGATIONS (used by filter counts)
   ============================================================= */
const AGG = {
  colors: {},
  countries: {},
  regions: {},
  grapes: {},
  years: {},
};

PRODUCTS.forEach(p => {
  AGG.colors[p.color]     = (AGG.colors[p.color]     || 0) + 1;
  AGG.countries[p.country]= (AGG.countries[p.country]|| 0) + 1;
  AGG.regions[p.region]   = (AGG.regions[p.region]   || 0) + 1;
  AGG.grapes[p.grape]     = (AGG.grapes[p.grape]     || 0) + 1;
  AGG.years[p.year]       = (AGG.years[p.year]       || 0) + 1;
});
