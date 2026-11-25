// Ricettario di partenza. Quantità per 4 persone (2 adulti + 2 bambini).
// p = proteina principale: pesce | carne | uova | legumi | formaggio | salumi | verdure
// c = base:               pasta | riso | zuppa | pane | patate | polenta | pizza
// s = slot ammessi:       c = cena, p = pranzo del weekend (default entrambi)
// Ingredienti: [nome, quantità, unità, reparto]   reparto "base" = cose che di solito hai già in dispensa
window.MC_RECIPES = [
  // ---------- PESCE (solo quelli che piacciono: tonno, platessa, merluzzo, polipo, totano, seppie) ----------
  { id: 'platessa-forno', n: 'Platessa impanata al forno con patate', p: 'pesce', c: 'patate', fish: 'platessa', ing: [
    ['Filetti di platessa', 600, 'g', 'pesce'], ['Patate', 800, 'g', 'ortofrutta'], ['Pangrattato', 80, 'g', 'base'], ['Limone', 1, 'pz', 'ortofrutta'], ['Olio EVO', 0, '', 'base']] },
  { id: 'platessa-limone', n: 'Platessa al limone con carote al vapore', p: 'pesce', c: 'pane', fish: 'platessa', ing: [
    ['Filetti di platessa', 600, 'g', 'pesce'], ['Carote', 600, 'g', 'ortofrutta'], ['Limone', 1, 'pz', 'ortofrutta'], ['Pane', 300, 'g', 'pane']] },
  { id: 'merluzzo-pomodoro', n: 'Merluzzo al pomodoro e olive con pane', p: 'pesce', c: 'pane', fish: 'merluzzo', ing: [
    ['Filetti di merluzzo', 650, 'g', 'pesce'], ['Passata di pomodoro', 500, 'g', 'condimenti'], ['Olive denocciolate', 1, 'conf', 'condimenti'], ['Pane', 300, 'g', 'pane'], ['Aglio', 0, '', 'base']] },
  { id: 'merluzzo-crosta', n: 'Merluzzo in crosta di patate con zucchine', p: 'pesce', c: 'patate', fish: 'merluzzo', ing: [
    ['Filetti di merluzzo', 650, 'g', 'pesce'], ['Patate', 500, 'g', 'ortofrutta'], ['Zucchine', 500, 'g', 'ortofrutta'], ['Rosmarino', 0, '', 'base']] },
  { id: 'polpette-merluzzo', n: 'Polpette di merluzzo e patate con insalata', p: 'pesce', c: 'patate', fish: 'merluzzo', ing: [
    ['Filetti di merluzzo', 500, 'g', 'pesce'], ['Patate', 500, 'g', 'ortofrutta'], ['Uova', 1, 'pz', 'frigo'], ['Grana grattugiato', 50, 'g', 'frigo'], ['Insalata', 1, 'pz', 'ortofrutta'], ['Pangrattato', 60, 'g', 'base']] },
  { id: 'bastoncini-casa', n: 'Bastoncini di merluzzo fatti in casa con purè', p: 'pesce', c: 'patate', fish: 'merluzzo', ing: [
    ['Filetti di merluzzo', 600, 'g', 'pesce'], ['Patate', 800, 'g', 'ortofrutta'], ['Latte', 200, 'ml', 'frigo'], ['Burro', 30, 'g', 'frigo'], ['Uova', 1, 'pz', 'frigo'], ['Pangrattato', 100, 'g', 'base']] },
  { id: 'tonno-fagiolini', n: 'Insalata tiepida di tonno, fagiolini e patate', p: 'pesce', c: 'patate', fish: 'tonno', ing: [
    ['Tonno sott\'olio', 3, 'conf', 'dispensa'], ['Fagiolini', 500, 'g', 'ortofrutta'], ['Patate', 700, 'g', 'ortofrutta'], ['Uova', 2, 'pz', 'frigo']] },
  { id: 'polpette-tonno', n: 'Polpette di tonno e ricotta con carote', p: 'pesce', c: 'pane', fish: 'tonno', ing: [
    ['Tonno sott\'olio', 3, 'conf', 'dispensa'], ['Ricotta', 250, 'g', 'frigo'], ['Uova', 1, 'pz', 'frigo'], ['Carote', 500, 'g', 'ortofrutta'], ['Pane', 300, 'g', 'pane'], ['Pangrattato', 60, 'g', 'base']] },
  { id: 'tonno-fresco', n: 'Tranci di tonno alla piastra con insalata e patate', p: 'pesce', c: 'patate', fish: 'tonno', ing: [
    ['Tonno fresco a tranci', 600, 'g', 'pesce'], ['Patate', 700, 'g', 'ortofrutta'], ['Insalata', 1, 'pz', 'ortofrutta']] },
  { id: 'polpo-patate', n: 'Polpo e patate', p: 'pesce', c: 'patate', fish: 'polipo', ing: [
    ['Polpo', 1000, 'g', 'pesce'], ['Patate', 800, 'g', 'ortofrutta'], ['Prezzemolo', 1, 'pz', 'ortofrutta'], ['Limone', 1, 'pz', 'ortofrutta']] },
  { id: 'seppie-piselli', n: 'Seppie in umido con piselli e polenta', p: 'pesce', c: 'polenta', fish: 'seppie', ing: [
    ['Seppie pulite', 800, 'g', 'pesce'], ['Piselli surgelati', 450, 'g', 'surgelati'], ['Passata di pomodoro', 300, 'g', 'condimenti'], ['Farina di mais istantanea', 300, 'g', 'dispensa'], ['Cipolla', 1, 'pz', 'ortofrutta']] },
  { id: 'seppie-griglia', n: 'Seppie alla griglia con insalata e pane', p: 'pesce', c: 'pane', fish: 'seppie', ing: [
    ['Seppie pulite', 800, 'g', 'pesce'], ['Insalata', 1, 'pz', 'ortofrutta'], ['Pomodorini', 300, 'g', 'ortofrutta'], ['Pane', 300, 'g', 'pane']] },
  { id: 'totani-gratinati', n: 'Anelli di totano gratinati al forno con patate', p: 'pesce', c: 'patate', fish: 'totano', ing: [
    ['Totani puliti', 800, 'g', 'pesce'], ['Patate', 700, 'g', 'ortofrutta'], ['Pangrattato', 80, 'g', 'base'], ['Prezzemolo', 1, 'pz', 'ortofrutta']] },
  { id: 'pasta-tonno', n: 'Pasta al tonno e pomodoro', p: 'pesce', c: 'pasta', fish: 'tonno', s: 'p', ing: [
    ['Pasta corta', 350, 'g', 'dispensa'], ['Tonno sott\'olio', 2, 'conf', 'dispensa'], ['Passata di pomodoro', 500, 'g', 'condimenti']] },
  { id: 'spaghetti-seppie', n: 'Spaghetti con seppie e piselli', p: 'pesce', c: 'pasta', fish: 'seppie', s: 'p', ing: [
    ['Spaghetti', 350, 'g', 'dispensa'], ['Seppie pulite', 500, 'g', 'pesce'], ['Piselli surgelati', 300, 'g', 'surgelati'], ['Passata di pomodoro', 300, 'g', 'condimenti']] },
  { id: 'risotto-merluzzo', n: 'Risotto con merluzzo e zucchine', p: 'pesce', c: 'riso', fish: 'merluzzo', s: 'p', ing: [
    ['Riso Carnaroli', 320, 'g', 'dispensa'], ['Filetti di merluzzo', 400, 'g', 'pesce'], ['Zucchine', 400, 'g', 'ortofrutta'], ['Cipolla', 1, 'pz', 'ortofrutta']] },

  // ---------- CARNE ----------
  { id: 'pollo-piastra', n: 'Petto di pollo alla piastra con insalata e patate', p: 'carne', c: 'patate', ing: [
    ['Petto di pollo a fette', 600, 'g', 'carne'], ['Patate', 700, 'g', 'ortofrutta'], ['Insalata', 1, 'pz', 'ortofrutta']] },
  { id: 'cotolette-forno', n: 'Cotolette di pollo al forno con purè', p: 'carne', c: 'patate', ing: [
    ['Petto di pollo a fette', 600, 'g', 'carne'], ['Uova', 2, 'pz', 'frigo'], ['Patate', 800, 'g', 'ortofrutta'], ['Latte', 200, 'ml', 'frigo'], ['Burro', 30, 'g', 'frigo'], ['Pangrattato', 120, 'g', 'base']] },
  { id: 'pollo-forno', n: 'Cosce di pollo al forno con patate', p: 'carne', c: 'patate', ing: [
    ['Cosce di pollo', 1200, 'g', 'carne'], ['Patate', 900, 'g', 'ortofrutta'], ['Rosmarino', 0, '', 'base']] },
  { id: 'straccetti-pollo', n: 'Straccetti di pollo al limone con spinaci', p: 'carne', c: 'pane', ing: [
    ['Petto di pollo a fette', 600, 'g', 'carne'], ['Spinaci surgelati', 600, 'g', 'surgelati'], ['Limone', 1, 'pz', 'ortofrutta'], ['Pane', 300, 'g', 'pane']] },
  { id: 'polpette-sugo', n: 'Polpette al sugo con pane', p: 'carne', c: 'pane', ing: [
    ['Macinato misto', 500, 'g', 'carne'], ['Uova', 1, 'pz', 'frigo'], ['Grana grattugiato', 50, 'g', 'frigo'], ['Passata di pomodoro', 700, 'g', 'condimenti'], ['Pane', 400, 'g', 'pane']] },
  { id: 'hamburger', n: 'Hamburger con patate al forno e carote', p: 'carne', c: 'patate', ing: [
    ['Hamburger di manzo', 4, 'pz', 'carne'], ['Patate', 800, 'g', 'ortofrutta'], ['Carote', 400, 'g', 'ortofrutta']] },
  { id: 'spezzatino', n: 'Spezzatino con patate', p: 'carne', c: 'patate', ing: [
    ['Spezzatino di manzo', 700, 'g', 'carne'], ['Patate', 700, 'g', 'ortofrutta'], ['Carote', 2, 'pz', 'ortofrutta'], ['Cipolla', 1, 'pz', 'ortofrutta'], ['Passata di pomodoro', 200, 'g', 'condimenti']] },
  { id: 'scaloppine', n: 'Scaloppine di tacchino al limone con fagiolini', p: 'carne', c: 'pane', ing: [
    ['Fesa di tacchino a fette', 600, 'g', 'carne'], ['Fagiolini', 500, 'g', 'ortofrutta'], ['Limone', 1, 'pz', 'ortofrutta'], ['Pane', 300, 'g', 'pane'], ['Farina 00', 0, '', 'base']] },
  { id: 'arrosto-tacchino', n: 'Arrosto di tacchino con verdure al forno', p: 'carne', c: 'patate', ing: [
    ['Arrosto di tacchino', 800, 'g', 'carne'], ['Patate', 500, 'g', 'ortofrutta'], ['Zucchine', 400, 'g', 'ortofrutta'], ['Carote', 300, 'g', 'ortofrutta']] },
  { id: 'pizzaiola', n: 'Fettine alla pizzaiola con purè', p: 'carne', c: 'patate', ing: [
    ['Fettine di vitello', 600, 'g', 'carne'], ['Passata di pomodoro', 400, 'g', 'condimenti'], ['Mozzarella', 1, 'pz', 'frigo'], ['Patate', 800, 'g', 'ortofrutta'], ['Latte', 200, 'ml', 'frigo']] },
  { id: 'salsiccia-polenta', n: 'Salsiccia e polenta con radicchio', p: 'carne', c: 'polenta', ing: [
    ['Salsiccia', 500, 'g', 'carne'], ['Farina di mais istantanea', 300, 'g', 'dispensa'], ['Radicchio', 1, 'pz', 'ortofrutta']] },
  { id: 'straccetti-manzo', n: 'Straccetti di manzo con rucola, grana e pane', p: 'carne', c: 'pane', ing: [
    ['Straccetti di manzo', 600, 'g', 'carne'], ['Rucola', 1, 'conf', 'ortofrutta'], ['Grana a scaglie', 80, 'g', 'frigo'], ['Pane', 300, 'g', 'pane']] },
  { id: 'pasta-ragu', n: 'Pasta al ragù', p: 'carne', c: 'pasta', s: 'p', ing: [
    ['Pasta corta', 350, 'g', 'dispensa'], ['Macinato misto', 400, 'g', 'carne'], ['Passata di pomodoro', 700, 'g', 'condimenti'], ['Carote', 1, 'pz', 'ortofrutta'], ['Cipolla', 1, 'pz', 'ortofrutta'], ['Sedano', 1, 'pz', 'ortofrutta']] },
  { id: 'lasagne', n: 'Lasagne al ragù', p: 'carne', c: 'pasta', s: 'p', ing: [
    ['Sfoglia per lasagne', 1, 'conf', 'frigo'], ['Macinato misto', 400, 'g', 'carne'], ['Passata di pomodoro', 700, 'g', 'condimenti'], ['Besciamella', 2, 'conf', 'frigo'], ['Grana grattugiato', 100, 'g', 'frigo']] },
  { id: 'risotto-salsiccia', n: 'Risotto con salsiccia e radicchio', p: 'carne', c: 'riso', s: 'p', ing: [
    ['Riso Carnaroli', 320, 'g', 'dispensa'], ['Salsiccia', 250, 'g', 'carne'], ['Radicchio', 1, 'pz', 'ortofrutta'], ['Grana grattugiato', 50, 'g', 'frigo']] },

  // ---------- SALUMI ----------
  { id: 'piadine', n: 'Piadine con prosciutto cotto, stracchino e insalata', p: 'salumi', c: 'pane', ing: [
    ['Piadine', 1, 'conf', 'pane'], ['Prosciutto cotto', 200, 'g', 'gastronomia'], ['Stracchino', 250, 'g', 'frigo'], ['Insalata', 1, 'pz', 'ortofrutta']] },
  { id: 'crespelle', n: 'Crespelle prosciutto e formaggio con carote', p: 'salumi', c: 'pane', ing: [
    ['Uova', 3, 'pz', 'frigo'], ['Latte', 500, 'ml', 'frigo'], ['Farina 00', 200, 'g', 'condimenti'], ['Prosciutto cotto', 150, 'g', 'gastronomia'], ['Fontina', 150, 'g', 'gastronomia'], ['Besciamella', 1, 'conf', 'frigo'], ['Carote', 400, 'g', 'ortofrutta']] },
  { id: 'tagliere', n: 'Tagliere di affettati, formaggi e verdure crude', p: 'salumi', c: 'pane', ing: [
    ['Prosciutto crudo', 150, 'g', 'gastronomia'], ['Bresaola', 100, 'g', 'gastronomia'], ['Formaggio misto', 200, 'g', 'gastronomia'], ['Carote', 300, 'g', 'ortofrutta'], ['Finocchi', 2, 'pz', 'ortofrutta'], ['Pane', 400, 'g', 'pane']] },

  // ---------- UOVA ----------
  { id: 'frittata-zucchine', n: 'Frittata di zucchine con insalata e pane', p: 'uova', c: 'pane', ing: [
    ['Uova', 6, 'pz', 'frigo'], ['Zucchine', 500, 'g', 'ortofrutta'], ['Grana grattugiato', 40, 'g', 'frigo'], ['Insalata', 1, 'pz', 'ortofrutta'], ['Pane', 300, 'g', 'pane']] },
  { id: 'frittata-patate', n: 'Frittata di patate e cipolle con carote', p: 'uova', c: 'patate', ing: [
    ['Uova', 6, 'pz', 'frigo'], ['Patate', 500, 'g', 'ortofrutta'], ['Cipolla', 1, 'pz', 'ortofrutta'], ['Carote', 400, 'g', 'ortofrutta']] },
  { id: 'uova-spinaci', n: 'Uova al tegamino con spinaci e pane', p: 'uova', c: 'pane', ing: [
    ['Uova', 6, 'pz', 'frigo'], ['Spinaci surgelati', 600, 'g', 'surgelati'], ['Pane', 400, 'g', 'pane']] },
  { id: 'torta-salata', n: 'Torta salata ricotta e spinaci', p: 'uova', c: 'pane', ing: [
    ['Pasta sfoglia', 1, 'conf', 'frigo'], ['Ricotta', 250, 'g', 'frigo'], ['Spinaci surgelati', 450, 'g', 'surgelati'], ['Uova', 2, 'pz', 'frigo'], ['Grana grattugiato', 50, 'g', 'frigo']] },
  { id: 'carbonara', n: 'Pasta alla carbonara (con cotto per i bimbi)', p: 'uova', c: 'pasta', s: 'p', ing: [
    ['Pasta corta', 350, 'g', 'dispensa'], ['Uova', 4, 'pz', 'frigo'], ['Pancetta a cubetti', 150, 'g', 'frigo'], ['Grana grattugiato', 80, 'g', 'frigo']] },

  // ---------- LEGUMI ----------
  { id: 'zuppa-lenticchie', n: 'Zuppa di lenticchie con crostini', p: 'legumi', c: 'zuppa', ing: [
    ['Lenticchie secche', 300, 'g', 'condimenti'], ['Carote', 2, 'pz', 'ortofrutta'], ['Sedano', 1, 'pz', 'ortofrutta'], ['Cipolla', 1, 'pz', 'ortofrutta'], ['Pane', 300, 'g', 'pane'], ['Passata di pomodoro', 200, 'g', 'condimenti']] },
  { id: 'minestrone-legumi', n: 'Minestrone con borlotti e crostini', p: 'legumi', c: 'zuppa', ing: [
    ['Minestrone surgelato', 1000, 'g', 'surgelati'], ['Fagioli borlotti in scatola', 2, 'conf', 'condimenti'], ['Pane', 300, 'g', 'pane'], ['Grana grattugiato', 50, 'g', 'frigo']] },
  { id: 'burger-ceci', n: 'Burger di ceci con verdure al forno', p: 'legumi', c: 'patate', ing: [
    ['Ceci in scatola', 2, 'conf', 'condimenti'], ['Patate', 500, 'g', 'ortofrutta'], ['Zucchine', 400, 'g', 'ortofrutta'], ['Carote', 300, 'g', 'ortofrutta'], ['Pangrattato', 60, 'g', 'base']] },
  { id: 'polpette-lenticchie', n: 'Polpette di lenticchie con purè di patate', p: 'legumi', c: 'patate', ing: [
    ['Lenticchie in scatola', 2, 'conf', 'condimenti'], ['Patate', 800, 'g', 'ortofrutta'], ['Grana grattugiato', 50, 'g', 'frigo'], ['Latte', 200, 'ml', 'frigo'], ['Pangrattato', 60, 'g', 'base']] },
  { id: 'vellutata-ceci', n: 'Vellutata di zucca con ceci croccanti e crostini', p: 'legumi', c: 'zuppa', ing: [
    ['Zucca a pezzi', 1000, 'g', 'ortofrutta'], ['Patate', 300, 'g', 'ortofrutta'], ['Ceci in scatola', 1, 'conf', 'condimenti'], ['Pane', 300, 'g', 'pane']] },
  { id: 'farinata', n: 'Farinata di ceci con insalata e pomodorini', p: 'legumi', c: 'pane', ing: [
    ['Farina di ceci', 300, 'g', 'condimenti'], ['Insalata', 1, 'pz', 'ortofrutta'], ['Pomodorini', 300, 'g', 'ortofrutta']] },
  { id: 'pasta-fagioli', n: 'Pasta e fagioli', p: 'legumi', c: 'pasta', s: 'p', ing: [
    ['Fagioli borlotti in scatola', 2, 'conf', 'condimenti'], ['Pasta mista', 250, 'g', 'dispensa'], ['Passata di pomodoro', 200, 'g', 'condimenti'], ['Carote', 1, 'pz', 'ortofrutta'], ['Sedano', 1, 'pz', 'ortofrutta'], ['Cipolla', 1, 'pz', 'ortofrutta']] },

  // ---------- FORMAGGI ----------
  { id: 'pizza', n: 'Pizza fatta in casa (MetroPizza)', p: 'formaggio', c: 'pizza', link: 'https://maxeo3.github.io/Metropizza/', ing: [
    ['Farina per pizza', 1000, 'g', 'condimenti'], ['Lievito di birra', 1, 'conf', 'frigo'], ['Passata di pomodoro', 700, 'g', 'condimenti'], ['Mozzarella per pizza', 500, 'g', 'frigo'], ['Prosciutto cotto', 100, 'g', 'gastronomia']] },
  { id: 'caprese', n: 'Mozzarella, pomodori e focaccia', p: 'formaggio', c: 'pane', ing: [
    ['Mozzarella', 3, 'pz', 'frigo'], ['Pomodori', 600, 'g', 'ortofrutta'], ['Focaccia', 400, 'g', 'pane']] },
  { id: 'polenta-formaggio', n: 'Polenta con formaggio fuso e funghi', p: 'formaggio', c: 'polenta', ing: [
    ['Farina di mais istantanea', 300, 'g', 'dispensa'], ['Asiago', 250, 'g', 'gastronomia'], ['Funghi champignon', 400, 'g', 'ortofrutta']] },
  { id: 'gnocchi-sorrentina', n: 'Gnocchi alla sorrentina', p: 'formaggio', c: 'pasta', s: 'p', ing: [
    ['Gnocchi di patate', 1000, 'g', 'frigo'], ['Passata di pomodoro', 700, 'g', 'condimenti'], ['Mozzarella', 2, 'pz', 'frigo'], ['Basilico', 1, 'pz', 'ortofrutta']] },
  { id: 'risotto-milanese', n: 'Risotto allo zafferano', p: 'formaggio', c: 'riso', s: 'p', ing: [
    ['Riso Carnaroli', 320, 'g', 'dispensa'], ['Zafferano', 1, 'conf', 'condimenti'], ['Grana grattugiato', 80, 'g', 'frigo'], ['Cipolla', 1, 'pz', 'ortofrutta'], ['Burro', 40, 'g', 'frigo']] },

  // ---------- VERDURE (cene leggere) ----------
  { id: 'passato-verdure', n: 'Passato di verdure con pastina e grana', p: 'verdure', c: 'zuppa', ing: [
    ['Minestrone surgelato', 1000, 'g', 'surgelati'], ['Pastina', 200, 'g', 'dispensa'], ['Grana grattugiato', 60, 'g', 'frigo']] },
  { id: 'vellutata-carote', n: 'Vellutata di carote e patate con crostini e stracchino', p: 'formaggio', c: 'zuppa', ing: [
    ['Carote', 800, 'g', 'ortofrutta'], ['Patate', 400, 'g', 'ortofrutta'], ['Stracchino', 250, 'g', 'frigo'], ['Pane', 300, 'g', 'pane']] },
  { id: 'verdure-gratinate', n: 'Verdure gratinate e patate al forno con pane', p: 'verdure', c: 'patate', ing: [
    ['Zucchine', 500, 'g', 'ortofrutta'], ['Pomodori', 400, 'g', 'ortofrutta'], ['Patate', 700, 'g', 'ortofrutta'], ['Pangrattato', 60, 'g', 'base'], ['Pane', 300, 'g', 'pane']] }
];

// Ordine di default dei reparti = ordine delle corsie dell'Esselunga (come in Bring!).
// Modificabile in Impostazioni.
window.MC_REPARTI = [
  ['ortofrutta', 'Frutta e verdura', '🥕'],
  ['frigo', 'Latte e formaggi', '🥛'],
  ['gastronomia', 'Salumi e gastronomia', '🍖'],
  ['condimenti', 'Ingredienti e spezie', '🧂'],
  ['carne', 'Carne', '🥩'],
  ['pesce', 'Pesce', '🐟'],
  ['dispensa', 'Pasta, riso e cereali', '🍝'],
  ['dolci', 'Snack e dolci', '🍪'],
  ['casa', 'Casa', '🧽'],
  ['igiene', 'Bellezza e igiene', '🧴'],
  ['bimbi', 'Bimbi (pannolini, pappe)', '🍼'],
  ['altro', 'Animali, giardino e altro', '🛒'],
  ['surgelati', 'Piatti pronti e surgelati', '🧊'],
  ['pane', 'Panetteria', '🥖'],
  ['bevande', 'Bevande', '🧃']
];
// ordine usato fino alla versione precedente (per aggiornare chi non l'aveva cambiato)
window.MC_REPARTI_OLD = ['ortofrutta', 'pane', 'gastronomia', 'carne', 'pesce', 'frigo', 'dispensa', 'surgelati', 'bevande', 'casa', 'bimbi', 'altro'];

// Parole chiave per indovinare il reparto di una voce aggiunta a mano
window.MC_REPARTO_HINTS = {
  ortofrutta: 'mel|pere|banan|aranc|mandarin|kiwi|uva|limon|frutta|insalat|lattuga|pomodor|zucchin|carot|patat|cipoll|aglio|sedan|finocch|spinac|broccol|cavol|verza|zucca|funghi|peperon|melanzan|rucola|radicchio|prezzemolo|basilico|fagiolini',
  pane: 'pane|focaccia|piadin|grissin|crackers|fette biscottate',
  gastronomia: 'prosciutto|salame|mortadella|bresaola|speck|affettat|fontina|asiago|gorgonzola',
  carne: 'pollo|tacchino|manzo|vitell|maiale|macinat|salsicc|hamburger|arrosto|bistecc|cotolett',
  pesce: 'pesce|merluzzo|platessa|polpo|polipo|totan|seppi|salmone|gamber|orata|branzino',
  frigo: 'latte|yogurt|burro|panna|mozzarella|ricotta|stracchino|grana|parmigian|uova|formagg|besciamella|sfoglia|gnocchi|lievito',
  bimbi: 'pannolin|salviett|omogeneizz|pappa|biscotti plasmon|crema cambio',
  condimenti: 'farina|passata|pelati|sugo|tonno|olio|aceto|sale|zucchero|spezi|pepe|dado|brodo|legumi|fagioli|ceci|lenticchie|scatola|zafferano|olive|capperi|maionese|ketchup|senape',
  dispensa: 'pasta|spaghett|penne|riso|cereali|fiocchi|couscous|polenta|mais istantanea',
  dolci: 'biscott|merendin|cioccolat|marmellata|nutella|miele|caffè|caffe|^tè|caramell|patatine|snack|cracker|torta|noci|mandorle|nocciole',
  surgelati: 'surgelat|gelato|bastoncini|minestrone|piselli',
  bevande: 'acqua|succo|birra|vino|bibit|coca|aranciata',
  igiene: 'sapone|shampoo|bagnoschiuma|dentifricio|spazzolin|deodorante|crema|assorbent|rasoio|cerott|cotton',
  casa: 'detersiv|carta|scottex|spugn|sacchett|sacchi|pellicola|alluminio|candeggina|ammorbidente|pastiglie|anticalcare|lavastoviglie|batterie'
};
