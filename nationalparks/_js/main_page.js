// 首頁亂數關閉 介紹葉面
function park_page_close() {
    document.getElementById("park_contect").style.width = "0%";
    document.getElementById("park_page").style.opacity = "0";
    document.getElementById("park_page").style.zIndex = "-2";
    document.getElementById("park_exit").style.visibility = "hidden";
    forest_video.play();
}
// 清單展示關閉 介紹葉面
function park_page_close_list() {
    document.getElementById("park_contect").style.width = "0%";
    document.getElementById("park_page").style.opacity = "0";
    document.getElementById("park_page").style.zIndex = "-2";
    document.getElementById("park_exit_list").style.visibility = "hidden";
}
    var array1 = ['AF', 'AS', 'EU', 'NA', 'OS', 'SA'];
    var array2 = ['001', '002', '003', '004', '005'];
    var array3 = [
        'AF_001_Iona_National_Park',
        'AF_002_Awash_National_Park',
        'AF_003_Kakum_National_Park',
        'AF_004_Bale_Mountains_National_Park',
        'AF_005_Namib_Naukluft_National_Park',
        'AS_001_Buxa_Tiger_Reserve',
        'AS_002_Great_Himalayan_National_Park',
        'AS_003_Саблинский_хребет',
        'AS_004_Ущелье_Караугом',
        'AS_005_Lake_Parishan',
        'EU_001_High_Tauern',
        'EU_002_Connemara_National_Park',
        'EU_003_Peneda-Gerês_National_Park',
        'EU_004_Swiss_National_Park',
        'EU_005_Peak_District',
        'NA_001_Auyuittuq_National_Park',
        'NA_002_Big_Bend_National_Park',
        'NA_003_Cape_Breton_Highlands_National_Park',
        'NA_004_Arches_National_Park',
        'NA_005_Great_Blue_Hole',
        'OS_001_Kahurangi_National_Park',
        'OS_002_Bago_Bluff_National_Park',
        'OS_003_Blue_Mountains_National_Park',
        'OS_004_Whanganui_National_Park',
        'OS_005_Fiordland_National_Park',
        'SA_001_Nacunday_National_Park',
        'SA_002_Alto_Cariri_National_Park',
        'SA_003_Alerce_Andino_National_Park',
        'SA_004_Chaco_National_Park',
        'SA_005_El_Palmar_National_Park'
    ];
    var array4 = ['AF_001', 'AF_002', 'AF_003', 'AF_004', 'AF_005',
        'AS_001', 'AS_002', 'AS_003', 'AS_004', 'AS_005',
        'EU_001', 'EU_002', 'EU_003', 'EU_004', 'EU_005',
        'NA_001', 'NA_002', 'NA_003', 'NA_004', 'NA_005',
        'OS_001', 'OS_002', 'OS_003', 'OS_004', 'OS_005',
        'SA_001', 'SA_002', 'SA_003', 'SA_004', 'SA_005'
    ];
    var array5 = [
        'Iona National Park',
        'Awash National Park',
        'Kakum National Park',
        'Bale Mountains National Park',
        'Namib Naukluft National Park',
        'Buxa Tiger Reserve',
        'Great Himalayan National Park',
        'Саблинский хребет',
        'Ущелье Караугом',
        'Lake Parishan',
        'High Tauern',
        'Connemara National Park',
        'Peneda-Gerês National Park',
        'Swiss National Park',
        'Peak District',
        'Auyuittuq National Park',
        'Big Bend National Park',
        'Cape Breton Highlands National Park',
        'Arches National Park',
        'Great Blue Hole',
        'Kahurangi National Park',
        'Bago Bluff National Park',
        'Blue Mountains National Park',
        'Whanganui National Park',
        'Fiordland National Park',
        'Nacunday National Park',
        'Alto Cariri National Park',
        'Alerce Andino National Park',
        'Chaco National Park',
        'El Palmar National Park'
    ];
    var array6 = [
        'Iona National Park (Portuguese: Parque Nacional do Iona) is the largest national park in Angola. It is situated in the Southwestern corner of the country, in Namibe Province. It is roughly bound by the Atlantic Ocean to the West, an escarpment to the East that marks the beginning of the interior plateau, the Curoca River to the North, and the Cunene River to the South. It is about 200 kilometres (120 mi) south of the city of Namibe and covers 5,850 square miles (15,200 km2) sq. miles.',
        'It must be recognized that one, Mr. Ebenezer Kwasi Agbley, the then Central Regional Manager for Ghana Tourist Board gave birth to this dream under a program he initiated and implemented - Tourism Development Scheme for Central Region (TODSCER)which was expanded and became CENTRAL REGION DEVELOPMENT PROGRAM under a later created Commission - Central Region Development Commission(CECECOM). He showcased the TODSCER program in America and drew a number of sponsoring institutions both bilateral and multi-lateral from the donor community for the project to its maturity. The project later brought on board Game & Wildlife to manage and maintain the Park.',
        'A Feasibility Study and Preliminary 5-year Management Plan for the development of Kakum National Park as an ecotourism destination were developed in 1990 under a project conducted for the United Nations Development Program (Dudley 1990). The Feasibility Study included preliminary biodiversity assessments of the flora and fauna of Kakum Forest Reserve and adjoining Assin-Attandanso Forest Reserve, and an elephant population survey (Dudley 1990; Dudley, Mensah-Ntiamoah,& Kpelle 1992; Dudley 1995). The Feasibility Study and Preliminary 5-year Management Plan were developed in a collaborative and consultative process involving a consulting biologist, forestry officials, wildlife officials, local communities, Ghanaian universities, regional government officials, and other key stakeholders (Dudley 1992).',
        'The dominant vegetation type in Kakum is the wet forest. Other vegetation types encountered in the park include swamp forests (permanent and periodic) and riverine forests. Also reported are the Boval vegetation of Hildegardia barteri-Polycarpaea tenuifolia community found in exposed granite rocks and in shallow soils. 105 species of vascular plants consisting of 57 trees, 10 shrubs, 9 climbers, 17 herbs and 12 grasses are reported from the park. Epiphytic plants are also reported to grow on the trees and shrubs are orchids and ferns and also figs.',
        'Logging operations were prevalent in the park between 1975 and 1989. It is, however, noted that the logged areas have regenerated secondary forest consisting of a thick green mantle and vine tangles. This does not extend over the entire park, as much of the dense forest still remains conserved.',
        'Buxa Tiger Reserve is a Tiger reserve and National park in northern West Bengal, India, covering an area of 760 km2 (290 sq mi). In altitude, it ranges from 60 m (200 ft) in the Gangetic Plains to 1,750 m (5,740 ft) bordering the Himalayas in the north. At least 284 bird species inhabit the reserve.',
        'The Great Himalayan National Park (GHNP) is a national park in India, located in Kullu region in the state of Himachal Pradesh. The park was established in 1984 and is spread over an area of 1171 km2; altitudes within the park range between 1500 and 6000 m. The Great Himalayan National Park is a habitat to numerous flora and more than 375 fauna species, including approximately 31 mammals, 181 birds, 3 reptiles, 9 amphibians, 11 annelids, 17 mollusks and 127 insects. They are protected under the strict guidelines of the Wildlife Protection Act of 1972; hence any sort of hunting is not permitted.',
        'Yugyd Va National Park (Komi, Russian: Югыд ва) is a national park in the Komi Republic, a constituent republic of the Russian Federation. It is Europes largest national park (ahead of Vatnajökull National Park in Iceland) and it was Russia largest national park until the creation of Beringia National Park in 2013.',
        'Alaniya National Park (Russian: Национальный парк «Ала́ния»), is a heavily glaciated, mountainous section of the northern slope of the Central Caucasus Mountains. It covers the southern third of the Irafsky District of the Republic of North Ossetia-Alania.',
        'Parishan Lake is a lake in Iran. The Parishan Lake is in Jereh and Baladeh District in Fars Province and is the largest freshwater lake in the country.It receives only very small amount of water from feeder rivers and the whole lake or wetland is a protected area, as it is considered a globally significant wetland ecosystem.',
        'The High Tauern (pl.; German: Hohe Tauern, Italian: Alti Tauri) are a mountain range on the main chain of the Central Eastern Alps, comprising the highest peaks east of the Brenner Pass. The crest forms the southern border of the Austrian states of Salzburg, Carinthia and East Tyrol, with a small part in the southwest belongs to the Italian province of South Tyrol. The range includes Austria highest mountain, the Grossglockner at 3,798 metres (12,461 ft) above the Adriatic.',
        'Connemara National Park (Irish: Páirc Naisiúnta Chonamara) is one of six national parks in Ireland, managed by the National Parks and Wildlife Service. It is located in the northwest of Connemara in County Galway, on the west coast.Connemara National Park was founded and opened to the public in 1980. It features 2,000 hectares of mountains, bogs, heaths, grasslands and forests. The entrance is situated on the Clifden side of Letterfrack. There are many remnants of human habitation within the park. There is a 19th-century graveyard as well as 4,000-year-old megalithic court tombs. Much of the land was once part of the Kylemore Abbey estate.',
        'The High Tauern (pl.; German: Hohe Tauern, Italian: Alti Tauri) are a mountain range on the main chain of the Central Eastern Alps, comprising the highest peaks east of the Brenner Pass. The crest forms the southern border of the Austrian states of Salzburg, Carinthia and East Tyrol, with a small part in the southwest belongs to the Italian province of South Tyrol. The range includes Austrias highest mountain, the Grossglockner at 3,798 metres (12,461 ft) above the Adriatic.',
        'The Swiss National Park (Romansh: Parc Naziunal Svizzer; German: Schweizerischer Nationalpark; Italian: Parco Nazionale Svizzero; French: Parc National Suisse) is located in the Western Rhaetian Alps, in eastern Switzerland. It is within the canton of Graubünden, between Zernez, S-chanf, Scuol, and the Fuorn Pass in the Engadin valley on the border with Italy.',
        'The Peak District is an upland area in England at the southern end of the Pennines. Mostly in Derbyshire, it extends into Cheshire, Greater Manchester, Staffordshire, West Yorkshire and South Yorkshire. It includes the Dark Peak, where moorland is found and the geology is dominated by gritstone, and the White Peak, a limestone area with valleys and gorges. The Dark Peak forms an arc on the north, east and west sides; the White Peak covers central and southern tracts. The historic Peak District extends beyond the National Park, which excludes major towns, quarries and industrial areas. It became the first of the national parks of England and Wales in 1951.',
        'Auyuittuq National Park (Inuktitut: ᐊᐅᔪᐃᑦᑐᖅ, IPA: [aujuitːuq], "the land that never melts") is a national park located on Baffin Island Cumberland Peninsula, in the Qikiqtaaluk Region of Nunavut, the largest political subdivision of Canada. The park was initially known as Baffin Island National Park when it was established in 1972, but the name was changed in 1976 to its current name to better reflect the region and its history. It features many terrains of Arctic wilderness, such as fjords, glaciers, and ice fields. Although Auyuittuq was established in 1972 as a national park reserve, it was upgraded to a full national park in 2000.',
        'Big Bend National Park is an American national park located in West Texas, bordering Mexico. The park has national significance as the largest protected area of Chihuahuan Desert topography and ecology in the United States,and was named after a large bend in the Rio Grande/Río Bravo.The park protects more than 1,200 species of plants, more than 450 species of birds, 56 species of reptiles, and 75 species of mammals.Additional park activities include scenic drives, programs led by Big Bend park rangers, and stargazing.',
        'Cape Breton Highlands National Park is a Canadian national park on northern Cape Breton Island in Nova Scotia.It consists of mountains, valleys, waterfalls, rocky coastlines and the Cape Breton Highlands, a tundra-esque plateau. Forest types include Acadian and Boreal. The park includes the highest point in Nova Scotia, White Hill, at 533.5m (1,750 ft) above sea level.Rivers in the park include the Chéticamp River and the North Aspy River.In 2014, Parks Canada started a four-year project with the Unamaki Institute of Natural Resources and other partners to begin to restore boreal forest regions within this park.',
        'Arches National Park is a national park in eastern Utah, United States. The park is adjacent to the Colorado River, 4 miles (6 km) north of Moab, Utah. More than 2,000 natural sandstone arches are located in the park, including the well-known Delicate Arch, as well as a variety of unique geological resources and formations. The park contains the highest density of natural arches in the world.',
        'The Great Blue Hole is a giant marine sinkhole off the coast of Belize. It lies near the center of Lighthouse Reef, a small atoll 70 km (43 mi) from the mainland and Belize City. The hole is circular in shape, 318 m (1,043 ft) across and 124 m (407 ft) deep.',
        'Situated in the north-west of the South Island, Kahurangi contains spectacular and remote country, including the well-used Heaphy Track. Ancient landforms and unique flora and fauna add to the value of New Zealand second largest national park.',
        'Bago Bluff is a national park in New South Wales, Australia, approximately 410 km northeast of Sydney. It is situated south west of Wauchope and includes parts of the former Broken Bago State Forest and a part of Lorne State Forest. The Bago Bluff National Park also includes in the northern section the old Bago Bluff Flora Reserve and Six B Flora Reserve.',
        'The Blue Mountains National Park is a protected national park that is located in the Blue Mountains region of New South Wales, in eastern Australia. The 267,954-hectare (662,130-acre) national park is situated approximately 80 kilometres (50 mi) west of Sydney, and the park boundary is quite irregular as it is broken up by roads, urban areas and inholdings.',
        'Bordering the Whanganui River, it incorporates areas of Crown land, former state forest and a number of former reserves.',
        'The largest national park in New Zealand and one of the largest in the world, the park covers the southwest corner of the South Island. The grandeur of its scenery, with its deep fiords, its glacial lakes, its mountains and waterfalls, make it a popular tourist destination.',
        'Ñacunday National Park is a national park, located in the district of Ñacunday, Alto Paraná, in Paraguay, situated between the latitude 26°03’ and longitude 54°42’. It covers an area of 20 square kilometres. In the park is located large waterfall - the 35 – 40 m tall and 110 m wide Salto Ñacunday',
        'Alto Cariri National Park (Portuguese: Parque Nacional do Alto Cariri) is a national park in Brazil.The eastern side of the rugged Cariri massif is moist and dominated by montane rainforest. Further west it is drier and semi-deciduous forest gradually becomes dominant. In the northern portion of the Cariri massif the forests meet the deciduous forest of the Jequitinhonha depression. At the tops of the tallest and steepest hills there are stony fields with rock outcroppings, holding many species of bromeliads, orchids, cactuses and ferns. There are 35 species of amphibians, of which nine are endemic and four are new to science.',
        'Alerce Andino National Park is located in the Andes, in Los Lagos Region of Chile. This national park covers about 393 km2. It is bounded by the Reloncaví Estuary on its east and south sides, and by the Reloncaví Sound to the west (excluding a coastal fringe of a few km). To its north lies Chapo Lake.',
        'The Chaco National Park (Spanish: Parque Nacional Chaco) is a national park of Argentina, located in the province of Chaco. It has an area of 150 km2. It was created in 1954 in order to protect a sample of the Eastern Chaco, composed mainly of warm lowlands, with an annual summer rainfall between 750 and 1,300 mm.This park is a protected area for the quebracho trees. Forests of quebracho colorado chaqueño (Schinopsis balansae) were once located in the north of Santa Fe and the western half of Chaco, and had entered the northeast region of the province of Corrientes. Its strong wood and its abundant tannin caused it to be over-exploited for a century.',
        'El Palmar National Park (in Spanish, Parque Nacional El Palmar) is one of Argentina national parks, located on the center-east of the province of Entre Ríos, midway between the cities of Colón (54 km) and Concordia (60 km). It has an area of about 85 km2 and was created in 1966 for the preservation of its characteristic yatay palm trees (Butia yatay, formerly Syagrus yatay).The park has a temperate-humid savanna ecosystem, typical of the Argentine Mesopotamia. The terrain features patches of palm trees of several species, grassland, small woods and forest, interrupted by streams flowing east into the Uruguay River. The local fauna includes woodpeckers, ñandús, foxes, viscachas, and capybaras.'
    ];

// 首頁亂數
function page_random() {
    document.getElementById("park_exit").style.visibility = "visible";
    document.getElementById("park_contect").style.width = "35%";
    document.getElementById("park_page").style.opacity = "1";
    document.getElementById("park_page").style.zIndex = "2";
    forest_video.pause();

    var turnArray3 = Math.floor(Math.random() * 30);

    document.getElementById('park_image_link').setAttribute('src', `./file/park_image/image/${array3[turnArray3]}.jpg`);
    document.getElementById('park_name').innerText = array5[turnArray3];
    document.getElementById('park_say').innerText = array6[turnArray3];
}
// 國家公園清單
function list_open() {
    forest_video.pause();
    document.getElementById("list_page").style.opacity = "1";
    document.getElementById("list_page").style.zIndex = "1";
    document.getElementById("park_exit_list").style.visibility = "visible";
}
// 國家公園清單關閉
function list_page_close() {
    document.getElementById("list_page").style.opacity = "0";
    document.getElementById("list_page").style.zIndex = "-1";
    document.getElementById("park_exit_list").style.visibility = "hidden";
    document.getElementById('list_content_AF').style.opacity = '0';
    document.getElementById('list_content_AS').style.opacity = '0';
    document.getElementById('list_content_EU').style.opacity = '0';
    document.getElementById('list_content_NA').style.opacity = '0';
    document.getElementById('list_content_SA').style.opacity = '0';
    document.getElementById('list_content_OS').style.opacity = '0';
    forest_video.play();
}
// 變換清單
function list_change(x) {
    switch (x) {
        case 'Africa':
            document.getElementById('list_content_AF').style.visibility = 'visible';
            document.getElementById('list_content_AF').style.opacity = '1';
            document.getElementById('list_content_AS').style.visibility = 'hidden';
            document.getElementById('list_content_AS').style.opacity = '0';
            document.getElementById('list_content_EU').style.visibility = 'hidden';
            document.getElementById('list_content_EU').style.opacity = '0';
            document.getElementById('list_content_NA').style.visibility = 'hidden';
            document.getElementById('list_content_NA').style.opacity = '0';
            document.getElementById('list_content_SA').style.visibility = 'hidden';
            document.getElementById('list_content_SA').style.opacity = '0';
            document.getElementById('list_content_OS').style.visibility = 'hidden';
            document.getElementById('list_content_OS').style.opacity = '0';
            break;
        case 'Asia':
            document.getElementById('list_content_AF').style.visibility = 'hidden';
            document.getElementById('list_content_AF').style.opacity = '0';
            document.getElementById('list_content_AS').style.visibility = 'visible';
            document.getElementById('list_content_AS').style.opacity = '1';
            document.getElementById('list_content_EU').style.visibility = 'hidden';
            document.getElementById('list_content_EU').style.opacity = '0';
            document.getElementById('list_content_NA').style.visibility = 'hidden';
            document.getElementById('list_content_NA').style.opacity = '0';
            document.getElementById('list_content_SA').style.visibility = 'hidden';
            document.getElementById('list_content_SA').style.opacity = '0';
            document.getElementById('list_content_OS').style.visibility = 'hidden';
            document.getElementById('list_content_OS').style.opacity = '0';
            break;
        case 'Europe':
            document.getElementById('list_content_AF').style.visibility = 'hidden';
            document.getElementById('list_content_AF').style.opacity = '0';
            document.getElementById('list_content_AS').style.visibility = 'hidden';
            document.getElementById('list_content_AS').style.opacity = '0';
            document.getElementById('list_content_EU').style.visibility = 'visible';
            document.getElementById('list_content_EU').style.opacity = '1';
            document.getElementById('list_content_NA').style.visibility = 'hidden';
            document.getElementById('list_content_NA').style.opacity = '0';
            document.getElementById('list_content_SA').style.visibility = 'hidden';
            document.getElementById('list_content_SA').style.opacity = '0';
            document.getElementById('list_content_OS').style.visibility = 'hidden';
            document.getElementById('list_content_OS').style.opacity = '0';
            break;
        case 'North America':
            document.getElementById('list_content_AF').style.visibility = 'hidden';
            document.getElementById('list_content_AF').style.opacity = '0';
            document.getElementById('list_content_AS').style.visibility = 'hidden';
            document.getElementById('list_content_AS').style.opacity = '0';
            document.getElementById('list_content_EU').style.visibility = 'hidden';
            document.getElementById('list_content_EU').style.opacity = '0';
            document.getElementById('list_content_NA').style.visibility = 'visible';
            document.getElementById('list_content_NA').style.opacity = '1';
            document.getElementById('list_content_SA').style.visibility = 'hidden';
            document.getElementById('list_content_SA').style.opacity = '0';
            document.getElementById('list_content_OS').style.visibility = 'hidden';
            document.getElementById('list_content_OS').style.opacity = '0';
            break;
        case 'South America':
            document.getElementById('list_content_AF').style.visibility = 'hidden';
            document.getElementById('list_content_AF').style.opacity = '0';
            document.getElementById('list_content_AS').style.visibility = 'hidden';
            document.getElementById('list_content_AS').style.opacity = '0';
            document.getElementById('list_content_EU').style.visibility = 'hidden';
            document.getElementById('list_content_EU').style.opacity = '0';
            document.getElementById('list_content_NA').style.visibility = 'hidden';
            document.getElementById('list_content_NA').style.opacity = '0';
            document.getElementById('list_content_SA').style.visibility = 'visible';
            document.getElementById('list_content_SA').style.opacity = '1';
            document.getElementById('list_content_OS').style.visibility = 'hidden';
            document.getElementById('list_content_OS').style.opacity = '0';
            break;
        case 'Oceania':
            document.getElementById('list_content_AF').style.visibility = 'hidden';
            document.getElementById('list_content_AF').style.opacity = '0';
            document.getElementById('list_content_AS').style.visibility = 'hidden';
            document.getElementById('list_content_AS').style.opacity = '0';
            document.getElementById('list_content_EU').style.visibility = 'hidden';
            document.getElementById('list_content_EU').style.opacity = '0';
            document.getElementById('list_content_NA').style.visibility = 'hidden';
            document.getElementById('list_content_NA').style.opacity = '0';
            document.getElementById('list_content_SA').style.visibility = 'hidden';
            document.getElementById('list_content_SA').style.opacity = '0';
            document.getElementById('list_content_OS').style.visibility = 'visible';
            document.getElementById('list_content_OS').style.opacity = '1';
            break;
        default:
            break;
    }
}
// 開啟離水號
function select_open() {
    forest_video.pause();
    document.getElementById("select_page").style.opacity = "1";
    document.getElementById("select_page").style.zIndex = "1";
    document.getElementById('main_page').style.opacity = "0";
    document.getElementById("select_page").style.visibility = "visible";
    document.getElementById("select_page").style.display = "block";
}
// 離開流水號
function select_page_close() {
    document.getElementById("select_page").style.opacity = "0";
    document.getElementById("select_page").style.zIndex = "-1";
    document.getElementById('main_page').style.opacity = "1";
    document.getElementById("select_page").style.visibility = "hidden";
    document.getElementById("select_page").style.display = "none";
    forest_video.play();
}