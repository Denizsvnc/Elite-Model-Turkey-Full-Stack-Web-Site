// Ülke ve şehir verileri

export interface Country {
  code: string;
  name: string;
  cities: string[];
}

export const countries: Country[] = [
  {
    code: 'TR',
    name: 'Turkey',
    cities: [
      'Adana', 'Adıyaman', 'Afyonkarahisar', 'Ağrı', 'Aksaray', 'Amasya', 'Ankara', 'Antalya',
      'Ardahan', 'Artvin', 'Aydın', 'Balıkesir', 'Bartın', 'Batman', 'Bayburt', 'Bilecik',
      'Bingöl', 'Bitlis', 'Bolu', 'Burdur', 'Bursa', 'Çanakkale', 'Çankırı', 'Çorum',
      'Denizli', 'Diyarbakır', 'Düzce', 'Edirne', 'Elazığ', 'Erzincan', 'Erzurum', 'Eskişehir',
      'Gaziantep', 'Giresun', 'Gümüşhane', 'Hakkari', 'Hatay', 'Iğdır', 'Isparta', 'Istanbul',
      'Izmir', 'Kahramanmaraş', 'Karabük', 'Karaman', 'Kars', 'Kastamonu', 'Kayseri', 'Kilis',
      'Kırıkkale', 'Kırklareli', 'Kırşehir', 'Kocaeli', 'Konya', 'Kütahya', 'Malatya', 'Manisa',
      'Mardin', 'Mersin', 'Muğla', 'Muş', 'Nevşehir', 'Niğde', 'Ordu', 'Osmaniye',
      'Rize', 'Sakarya', 'Samsun', 'Şanlıurfa', 'Siirt', 'Sinop', 'Şırnak', 'Sivas',
      'Tekirdağ', 'Tokat', 'Trabzon', 'Tunceli', 'Uşak', 'Van', 'Yalova', 'Yozgat', 'Zonguldak'
    ]
  },
  {
    code: 'DE',
    name: 'Germany',
    cities: [
      'Berlin', 'Hamburg', 'Munich', 'Cologne', 'Frankfurt', 'Stuttgart', 'Düsseldorf', 'Dortmund',
      'Essen', 'Leipzig', 'Bremen', 'Dresden', 'Hanover', 'Nuremberg', 'Duisburg', 'Bochum',
      'Wuppertal', 'Bielefeld', 'Bonn', 'Münster', 'Karlsruhe', 'Mannheim', 'Augsburg', 'Wiesbaden',
      'Gelsenkirchen', 'Mönchengladbach', 'Braunschweig', 'Chemnitz', 'Kiel', 'Aachen'
    ]
  },
  {
    code: 'FR',
    name: 'France',
    cities: [
      'Paris', 'Marseille', 'Lyon', 'Toulouse', 'Nice', 'Nantes', 'Strasbourg', 'Montpellier',
      'Bordeaux', 'Lille', 'Rennes', 'Reims', 'Le Havre', 'Saint-Étienne', 'Toulon', 'Grenoble',
      'Dijon', 'Angers', 'Nîmes', 'Villeurbanne', 'Saint-Denis', 'Le Mans', 'Aix-en-Provence',
      'Clermont-Ferrand', 'Brest', 'Tours', 'Amiens', 'Limoges', 'Annecy', 'Perpignan'
    ]
  },
  {
    code: 'IT',
    name: 'Italy',
    cities: [
      'Rome', 'Milan', 'Naples', 'Turin', 'Palermo', 'Genoa', 'Bologna', 'Florence',
      'Bari', 'Catania', 'Venice', 'Verona', 'Messina', 'Padua', 'Trieste', 'Taranto',
      'Brescia', 'Parma', 'Prato', 'Modena', 'Reggio Calabria', 'Reggio Emilia', 'Perugia',
      'Livorno', 'Ravenna', 'Cagliari', 'Foggia', 'Rimini', 'Salerno', 'Ferrara'
    ]
  },
  {
    code: 'ES',
    name: 'Spain',
    cities: [
      'Madrid', 'Barcelona', 'Valencia', 'Seville', 'Zaragoza', 'Málaga', 'Murcia', 'Palma',
      'Las Palmas', 'Bilbao', 'Alicante', 'Córdoba', 'Valladolid', 'Vigo', 'Gijón', 'Hospitalet',
      'A Coruña', 'Vitoria-Gasteiz', 'Granada', 'Elche', 'Oviedo', 'Badalona', 'Cartagena',
      'Terrassa', 'Jerez de la Frontera', 'Sabadell', 'Santa Cruz de Tenerife', 'Pamplona',
      'Almería', 'Alcalá de Henares'
    ]
  },
  {
    code: 'GB',
    name: 'United Kingdom',
    cities: [
      'London', 'Birmingham', 'Manchester', 'Leeds', 'Glasgow', 'Liverpool', 'Newcastle',
      'Sheffield', 'Bristol', 'Edinburgh', 'Leicester', 'Nottingham', 'Coventry', 'Bradford',
      'Cardiff', 'Belfast', 'Stoke-on-Trent', 'Wolverhampton', 'Plymouth', 'Southampton',
      'Reading', 'Derby', 'Aberdeen', 'Portsmouth', 'York', 'Oxford', 'Cambridge', 'Brighton',
      'Bournemouth', 'Norwich'
    ]
  },
  {
    code: 'US',
    name: 'United States',
    cities: [
      'New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia', 'San Antonio',
      'San Diego', 'Dallas', 'San Jose', 'Austin', 'Jacksonville', 'Fort Worth', 'Columbus',
      'San Francisco', 'Charlotte', 'Indianapolis', 'Seattle', 'Denver', 'Washington',
      'Boston', 'El Paso', 'Nashville', 'Detroit', 'Oklahoma City', 'Portland', 'Las Vegas',
      'Memphis', 'Louisville', 'Baltimore', 'Milwaukee', 'Albuquerque', 'Tucson', 'Fresno',
      'Mesa', 'Sacramento', 'Atlanta', 'Kansas City', 'Colorado Springs', 'Miami'
    ]
  },
  {
    code: 'RU',
    name: 'Russia',
    cities: [
      'Moscow', 'Saint Petersburg', 'Novosibirsk', 'Yekaterinburg', 'Kazan', 'Nizhny Novgorod',
      'Chelyabinsk', 'Samara', 'Omsk', 'Rostov-on-Don', 'Ufa', 'Krasnoyarsk', 'Voronezh',
      'Perm', 'Volgograd', 'Krasnodar', 'Saratov', 'Tyumen', 'Tolyatti', 'Izhevsk', 'Barnaul',
      'Vladivostok', 'Irkutsk', 'Khabarovsk', 'Yaroslavl', 'Makhachkala', 'Tomsk', 'Orenburg',
      'Kemerovo', 'Novokuznetsk'
    ]
  },
  {
    code: 'NL',
    name: 'Netherlands',
    cities: [
      'Amsterdam', 'Rotterdam', 'The Hague', 'Utrecht', 'Eindhoven', 'Tilburg', 'Groningen',
      'Almere', 'Breda', 'Nijmegen', 'Enschede', 'Haarlem', 'Arnhem', 'Zaanstad', 'Amersfoort',
      'Apeldoorn', 'Hoofddorp', 'Maastricht', 'Leiden', 'Dordrecht', 'Zoetermeer', 'Zwolle',
      'Deventer', 'Delft', 'Alkmaar', 'Heerlen', 'Venlo', 'Leeuwarden'
    ]
  },
  {
    code: 'GR',
    name: 'Greece',
    cities: [
      'Athens', 'Thessaloniki', 'Patras', 'Heraklion', 'Larissa', 'Volos', 'Ioannina', 'Chania',
      'Chalcis', 'Piraeus', 'Peristeri', 'Kallithea', 'Nikaia', 'Glyfada', 'Kalamaria', 'Rhodes',
      'Katerini', 'Serres', 'Alexandroupoli', 'Kozani', 'Kavala', 'Trikala', 'Lamia', 'Corfu'
    ]
  },
  {
    code: 'AZ',
    name: 'Azerbaijan',
    cities: [
      'Baku', 'Ganja', 'Sumqayit', 'Mingachevir', 'Shirvan', 'Nakhchivan', 'Lankaran', 'Shaki',
      'Yevlakh', 'Khankendi', 'Agdam', 'Quba', 'Shamakhi', 'Qazakh', 'Goychay', 'Sabirabad',
      'Salyan', 'Beylagan', 'Barda', 'Agjabadi'
    ]
  },
  {
    code: 'UA',
    name: 'Ukraine',
    cities: [
      'Kyiv', 'Kharkiv', 'Odesa', 'Dnipro', 'Donetsk', 'Zaporizhzhia', 'Lviv', 'Kryvyi Rih',
      'Mykolaiv', 'Mariupol', 'Luhansk', 'Vinnytsia', 'Simferopol', 'Kherson', 'Poltava',
      'Chernihiv', 'Cherkasy', 'Sumy', 'Zhytomyr', 'Khmelnytskyi', 'Rivne', 'Ivano-Frankivsk',
      'Ternopil', 'Lutsk', 'Uzhhorod'
    ]
  },
  {
    code: 'PL',
    name: 'Poland',
    cities: [
      'Warsaw', 'Kraków', 'Łódź', 'Wrocław', 'Poznań', 'Gdańsk', 'Szczecin', 'Bydgoszcz',
      'Lublin', 'Katowice', 'Białystok', 'Gdynia', 'Częstochowa', 'Radom', 'Sosnowiec',
      'Toruń', 'Kielce', 'Gliwice', 'Zabrze', 'Bytom', 'Bielsko-Biała', 'Olsztyn', 'Rzeszów',
      'Ruda Śląska', 'Rybnik'
    ]
  },
  {
    code: 'BE',
    name: 'Belgium',
    cities: [
      'Brussels', 'Antwerp', 'Ghent', 'Charleroi', 'Liège', 'Bruges', 'Namur', 'Leuven',
      'Mons', 'Mechelen', 'Aalst', 'La Louvière', 'Kortrijk', 'Hasselt', 'Ostend', 'Genk',
      'Seraing', 'Roeselare'
    ]
  },
  {
    code: 'AT',
    name: 'Austria',
    cities: [
      'Vienna', 'Graz', 'Linz', 'Salzburg', 'Innsbruck', 'Klagenfurt', 'Villach', 'Wels',
      'Sankt Pölten', 'Dornbirn', 'Steyr', 'Wiener Neustadt', 'Feldkirch', 'Bregenz', 'Leonding',
      'Klosterneuburg', 'Baden', 'Wolfsberg', 'Leoben', 'Krems'
    ]
  },
  {
    code: 'CH',
    name: 'Switzerland',
    cities: [
      'Zurich', 'Geneva', 'Basel', 'Lausanne', 'Bern', 'Winterthur', 'Lucerne', 'St. Gallen',
      'Lugano', 'Biel/Bienne', 'Thun', 'Köniz', 'La Chaux-de-Fonds', 'Schaffhausen', 'Fribourg',
      'Vernier', 'Chur', 'Neuchâtel', 'Uster', 'Sion'
    ]
  },
  {
    code: 'SE',
    name: 'Sweden',
    cities: [
      'Stockholm', 'Gothenburg', 'Malmö', 'Uppsala', 'Västerås', 'Örebro', 'Linköping', 'Helsingborg',
      'Jönköping', 'Norrköping', 'Lund', 'Umeå', 'Gävle', 'Borås', 'Eskilstuna', 'Södertälje',
      'Karlstad', 'Täby', 'Växjö', 'Halmstad'
    ]
  },
  {
    code: 'NO',
    name: 'Norway',
    cities: [
      'Oslo', 'Bergen', 'Stavanger', 'Trondheim', 'Drammen', 'Fredrikstad', 'Kristiansand',
      'Sandnes', 'Tromsø', 'Sarpsborg', 'Skien', 'Ålesund', 'Sandefjord', 'Haugesund', 'Tønsberg',
      'Moss', 'Porsgrunn', 'Bodø', 'Arendal', 'Hamar'
    ]
  },
  {
    code: 'DK',
    name: 'Denmark',
    cities: [
      'Copenhagen', 'Aarhus', 'Odense', 'Aalborg', 'Esbjerg', 'Randers', 'Kolding', 'Horsens',
      'Vejle', 'Roskilde', 'Herning', 'Hørsholm', 'Helsingør', 'Silkeborg', 'Næstved', 'Fredericia',
      'Viborg', 'Køge', 'Holstebro', 'Taastrup'
    ]
  },
  {
    code: 'FI',
    name: 'Finland',
    cities: [
      'Helsinki', 'Espoo', 'Tampere', 'Vantaa', 'Oulu', 'Turku', 'Jyväskylä', 'Lahti',
      'Kuopio', 'Pori', 'Joensuu', 'Lappeenranta', 'Hämeenlinna', 'Vaasa', 'Seinäjoki',
      'Rovaniemi', 'Mikkeli', 'Kotka', 'Salo', 'Porvoo'
    ]
  },
  {
    code: 'PT',
    name: 'Portugal',
    cities: [
      'Lisbon', 'Porto', 'Amadora', 'Braga', 'Setúbal', 'Coimbra', 'Queluz', 'Funchal',
      'Cacém', 'Vila Nova de Gaia', 'Loures', 'Évora', 'Rio de Mouro', 'Odivelas', 'Aveiro',
      'Amora', 'Corroios', 'Barreiro', 'Seixal', 'Agualva-Cacém'
    ]
  },
  {
    code: 'CZ',
    name: 'Czech Republic',
    cities: [
      'Prague', 'Brno', 'Ostrava', 'Plzeň', 'Liberec', 'Olomouc', 'Ústí nad Labem', 'České Budějovice',
      'Hradec Králové', 'Pardubice', 'Havířov', 'Zlín', 'Kladno', 'Most', 'Opava', 'Frýdek-Místek',
      'Karviná', 'Jihlava', 'Teplice', 'Děčín'
    ]
  },
  {
    code: 'HU',
    name: 'Hungary',
    cities: [
      'Budapest', 'Debrecen', 'Szeged', 'Miskolc', 'Pécs', 'Győr', 'Nyíregyháza', 'Kecskemét',
      'Székesfehérvár', 'Szombathely', 'Szolnok', 'Tatabánya', 'Kaposvár', 'Érd', 'Veszprém',
      'Békéscsaba', 'Zalaegerszeg', 'Sopron', 'Eger', 'Nagykanizsa'
    ]
  },
  {
    code: 'RO',
    name: 'Romania',
    cities: [
      'Bucharest', 'Cluj-Napoca', 'Timișoara', 'Iași', 'Constanța', 'Craiova', 'Brașov', 'Galați',
      'Ploiești', 'Oradea', 'Brăila', 'Arad', 'Pitești', 'Sibiu', 'Bacău', 'Târgu Mureș',
      'Baia Mare', 'Buzău', 'Botoșani', 'Satu Mare'
    ]
  },
  {
    code: 'BG',
    name: 'Bulgaria',
    cities: [
      'Sofia', 'Plovdiv', 'Varna', 'Burgas', 'Ruse', 'Stara Zagora', 'Pleven', 'Sliven',
      'Dobrich', 'Shumen', 'Pernik', 'Haskovo', 'Yambol', 'Pazardzhik', 'Blagoevgrad',
      'Veliko Tarnovo', 'Vratsa', 'Gabrovo', 'Asenovgrad', 'Vidin'
    ]
  },
  {
    code: 'CA',
    name: 'Canada',
    cities: [
      'Toronto', 'Montreal', 'Vancouver', 'Calgary', 'Edmonton', 'Ottawa', 'Winnipeg', 'Quebec City',
      'Hamilton', 'Kitchener', 'London', 'Victoria', 'Halifax', 'Oshawa', 'Windsor', 'Saskatoon',
      'Regina', 'Sherbrooke', 'St. Catharines', 'Kelowna', 'Barrie', 'Abbotsford', 'Kingston',
      'Trois-Rivières', 'Guelph'
    ]
  },
  {
    code: 'JP',
    name: 'Japan',
    cities: [
      'Tokyo', 'Yokohama', 'Osaka', 'Nagoya', 'Sapporo', 'Fukuoka', 'Kobe', 'Kyoto',
      'Kawasaki', 'Saitama', 'Hiroshima', 'Sendai', 'Chiba', 'Kitakyushu', 'Sakai', 'Niigata',
      'Hamamatsu', 'Shizuoka', 'Sagamihara', 'Okayama', 'Kumamoto', 'Kagoshima', 'Hachioji',
      'Funabashi', 'Nara'
    ]
  },
  {
    code: 'KR',
    name: 'South Korea',
    cities: [
      'Seoul', 'Busan', 'Incheon', 'Daegu', 'Daejeon', 'Gwangju', 'Suwon', 'Ulsan',
      'Changwon', 'Goyang', 'Yongin', 'Seongnam', 'Bucheon', 'Cheongju', 'Ansan', 'Jeonju',
      'Anyang', 'Pohang', 'Uijeongbu', 'Gimhae', 'Jeju City', 'Cheonan', 'Pyeongtaek', 'Siheung',
      'Paju'
    ]
  },
  {
    code: 'AU',
    name: 'Australia',
    cities: [
      'Sydney', 'Melbourne', 'Brisbane', 'Perth', 'Adelaide', 'Gold Coast', 'Canberra', 'Newcastle',
      'Wollongong', 'Logan City', 'Geelong', 'Hobart', 'Townsville', 'Cairns', 'Darwin', 'Toowoomba',
      'Ballarat', 'Bendigo', 'Albury', 'Launceston', 'MacKay', 'Rockhampton', 'Bunbury', 'Bundaberg',
      'Wagga Wagga'
    ]
  },
  {
    code: 'BR',
    name: 'Brazil',
    cities: [
      'São Paulo', 'Rio de Janeiro', 'Brasília', 'Salvador', 'Fortaleza', 'Belo Horizonte', 'Manaus',
      'Curitiba', 'Recife', 'Porto Alegre', 'Belém', 'Goiânia', 'Guarulhos', 'Campinas', 'São Luís',
      'São Gonçalo', 'Maceió', 'Duque de Caxias', 'Natal', 'Teresina', 'Campo Grande', 'Nova Iguaçu',
      'São Bernardo do Campo', 'João Pessoa', 'Santo André'
    ]
  },
  {
    code: 'AR',
    name: 'Argentina',
    cities: [
      'Buenos Aires', 'Córdoba', 'Rosario', 'Mendoza', 'La Plata', 'San Miguel de Tucumán', 'Mar del Plata',
      'Salta', 'Santa Fe', 'San Juan', 'Resistencia', 'Corrientes', 'Bahía Blanca', 'Posadas',
      'Neuquén', 'Santiago del Estero', 'Formosa', 'San Salvador de Jujuy', 'Paraná', 'San Luis'
    ]
  },
  {
    code: 'MX',
    name: 'Mexico',
    cities: [
      'Mexico City', 'Guadalajara', 'Monterrey', 'Puebla', 'Tijuana', 'León', 'Juárez', 'Zapopan',
      'Mérida', 'San Luis Potosí', 'Aguascalientes', 'Hermosillo', 'Saltillo', 'Mexicali', 'Culiacán',
      'Querétaro', 'Chihuahua', 'Toluca', 'Morelia', 'Reynosa', 'Veracruz', 'Cancún', 'Acapulco',
      'Durango', 'Tampico'
    ]
  },
  {
    code: 'IN',
    name: 'India',
    cities: [
      'Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Ahmedabad', 'Chennai', 'Kolkata', 'Pune',
      'Jaipur', 'Surat', 'Lucknow', 'Kanpur', 'Nagpur', 'Indore', 'Thane', 'Bhopal', 'Visakhapatnam',
      'Pimpri-Chinchwad', 'Patna', 'Vadodara', 'Ghaziabad', 'Ludhiana', 'Agra', 'Nashik', 'Faridabad'
    ]
  },
  {
    code: 'CN',
    name: 'China',
    cities: [
      'Beijing', 'Shanghai', 'Guangzhou', 'Shenzhen', 'Chengdu', 'Chongqing', 'Tianjin', 'Wuhan',
      'Dongguan', 'Hangzhou', 'Nanjing', 'Xi\'an', 'Shenyang', 'Harbin', 'Qingdao', 'Kunming',
      'Dalian', 'Zhengzhou', 'Changsha', 'Taiyuan', 'Jinan', 'Suzhou', 'Fuzhou', 'Xiamen', 'Urumqi'
    ]
  },
  {
    code: 'ZA',
    name: 'South Africa',
    cities: [
      'Johannesburg', 'Cape Town', 'Durban', 'Pretoria', 'Port Elizabeth', 'Bloemfontein', 'East London',
      'Nelspruit', 'Polokwane', 'Kimberley', 'Rustenburg', 'Pietermaritzburg', 'George', 'Midrand',
      'Vanderbijlpark', 'Centurion', 'Boksburg', 'Benoni', 'Somerset West', 'Newcastle'
    ]
  },
  {
    code: 'EG',
    name: 'Egypt',
    cities: [
      'Cairo', 'Alexandria', 'Giza', 'Shubra El Kheima', 'Port Said', 'Suez', 'Luxor', 'Mansoura',
      'El-Mahalla El-Kubra', 'Tanta', 'Asyut', 'Ismailia', 'Fayyum', 'Zagazig', 'Aswan', 'Damietta',
      'Damanhur', 'Minya', 'Beni Suef', 'Qena'
    ]
  },
  {
    code: 'IL',
    name: 'Israel',
    cities: [
      'Jerusalem', 'Tel Aviv', 'Haifa', 'Rishon LeZion', 'Petah Tikva', 'Ashdod', 'Netanya', 'Beersheba',
      'Holon', 'Bnei Brak', 'Ramat Gan', 'Ashkelon', 'Rehovot', 'Bat Yam', 'Herzliya', 'Kfar Saba',
      'Modi\'in', 'Hadera', 'Nazareth', 'Lod'
    ]
  },
  {
    code: 'IR',
    name: 'Iran',
    cities: [
      'Tehran', 'Mashhad', 'Isfahan', 'Karaj', 'Shiraz', 'Tabriz', 'Qom', 'Ahvaz',
      'Kermanshah', 'Urmia', 'Rasht', 'Zahedan', 'Hamadan', 'Kerman', 'Arak', 'Yazd',
      'Ardabil', 'Bandar Abbas', 'Eslamshahr', 'Zanjan'
    ]
  },
  {
    code: 'SA',
    name: 'Saudi Arabia',
    cities: [
      'Riyadh', 'Jeddah', 'Mecca', 'Medina', 'Dammam', 'Khobar', 'Tabuk', 'Buraidah',
      'Khamis Mushait', 'Al-Ahsa', 'Hofuf', 'Ta\'if', 'Najran', 'Yanbu', 'Abha', 'Jubail',
      'Hail', 'Arar', 'Sakaka', 'Jazan'
    ]
  },
  {
    code: 'AE',
    name: 'United Arab Emirates',
    cities: [
      'Dubai', 'Abu Dhabi', 'Sharjah', 'Al Ain', 'Ajman', 'Ras Al Khaimah', 'Fujairah', 'Umm Al Quwain',
      'Khor Fakkan', 'Kalba', 'Dhaid', 'Jebel Ali', 'Madinat Zayed', 'Ruwais', 'Liwa Oasis'
    ]
  },
  {
    code: 'IE',
    name: 'Ireland',
    cities: [
      'Dublin', 'Cork', 'Limerick', 'Galway', 'Waterford', 'Drogheda', 'Dundalk', 'Swords',
      'Bray', 'Navan', 'Kilkenny', 'Ennis', 'Tralee', 'Carlow', 'Newbridge', 'Naas',
      'Athlone', 'Portlaoise', 'Mullingar', 'Wexford'
    ]
  },
  {
    code: 'NZ',
    name: 'New Zealand',
    cities: [
      'Auckland', 'Wellington', 'Christchurch', 'Hamilton', 'Tauranga', 'Lower Hutt', 'Dunedin',
      'Palmerston North', 'Napier', 'Porirua', 'Hibiscus Coast', 'New Plymouth', 'Rotorua',
      'Whangarei', 'Nelson', 'Hastings', 'Invercargill', 'Upper Hutt', 'Whanganui', 'Gisborne'
    ]
  },
  {
    code: 'TH',
    name: 'Thailand',
    cities: [
      'Bangkok', 'Samut Prakan', 'Nonthaburi', 'Chiang Mai', 'Chon Buri', 'Nakhon Ratchasima', 'Hat Yai',
      'Pak Kret', 'Phuket', 'Khon Kaen', 'Udon Thani', 'Surat Thani', 'Nakhon Si Thammarat',
      'Rayong', 'Lampang', 'Ubon Ratchathani', 'Chiang Rai', 'Nakhon Pathom', 'Saraburi', 'Songkhla'
    ]
  },
  {
    code: 'ID',
    name: 'Indonesia',
    cities: [
      'Jakarta', 'Surabaya', 'Bandung', 'Bekasi', 'Medan', 'Tangerang', 'Depok', 'Semarang',
      'Palembang', 'Makassar', 'South Tangerang', 'Batam', 'Bogor', 'Pekanbaru', 'Bandar Lampung',
      'Padang', 'Malang', 'Denpasar', 'Samarinda', 'Tasikmalaya'
    ]
  },
  {
    code: 'MY',
    name: 'Malaysia',
    cities: [
      'Kuala Lumpur', 'George Town', 'Ipoh', 'Petaling Jaya', 'Shah Alam', 'Johor Bahru', 'Malacca City',
      'Kuching', 'Kota Kinabalu', 'Seremban', 'Klang', 'Kuantan', 'Taiping', 'Sandakan', 'Alor Setar',
      'Miri', 'Kulim', 'Kota Bharu', 'Kuala Terengganu', 'Sibu'
    ]
  },
  {
    code: 'SG',
    name: 'Singapore',
    cities: [
      'Singapore', 'Jurong', 'Woodlands', 'Tampines', 'Bedok', 'Sengkang', 'Punggol', 'Hougang',
      'Yishun', 'Bukit Batok', 'Choa Chu Kang', 'Ang Mo Kio', 'Toa Payoh', 'Queenstown', 'Kallang',
      'Marine Parade', 'Clementi', 'Pasir Ris', 'Bishan', 'Serangoon'
    ]
  },
  {
    code: 'OTHER',
    name: 'Other',
    cities: []
  }
];

// Helper functions
export const getCountryByCode = (code: string): Country | undefined => {
  return countries.find(c => c.code === code);
};

export const getCountryByName = (name: string): Country | undefined => {
  return countries.find(c => c.name === name);
};

export const getCitiesByCountryCode = (code: string): string[] => {
  const country = getCountryByCode(code);
  return country?.cities || [];
};

export const getCitiesByCountryName = (name: string): string[] => {
  const country = getCountryByName(name);
  return country?.cities || [];
};

// React-Select formatına dönüştürme
export const getCountryOptions = () => {
  return countries.map(c => ({
    value: c.name,
    label: c.name,
    code: c.code
  }));
};

export const getCityOptions = (countryName: string) => {
  const cities = getCitiesByCountryName(countryName);
  return cities.map(city => ({
    value: city,
    label: city
  }));
};
