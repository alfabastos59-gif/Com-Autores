import { AuthorItem } from '../types';
import { MANOEL_DE_BARROS_QUOTES } from '../components/FeaturedWriterCard';

export const DEFAULT_AUTHORS: AuthorItem[] = [
  {
    id: 'manoel-de-barros',
    name: 'Manoel de Barros',
    period: '1916 – 2014',
    role: 'Poeta Pantaneiro • Prêmio Jabuti',
    tag: 'Poesia Brasileira',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Manoel_Ramos_de_Barros.jpg',
    featuredQuote: 'Sentia mais prazer de brincar com as palavras do que de pensar com elas',
    quoteSource: 'Poeminha em língua de brincar',
    referenceUrl: 'https://www.companhiadasletras.com.br/BlogPost/6532/18-frases-de-manoel-de-barros-para-celebrar-sua-poesia?srsltid=AU7gw4UupGvCbGIrq1HeKDaFSmj_ntsDV3eWEO75ln8KliHmSh-qPnO7',
    additionalQuotes: MANOEL_DE_BARROS_QUOTES.map((q) => ({ text: q.text, source: q.source })),
    active: true,
    createdAt: '2024-01-01T00:00:00.000Z'
  },
  {
    id: 'machado-de-assis',
    name: 'Machado de Assis',
    period: '1839 – 1908',
    role: 'Fundador da Academia Brasileira de Letras',
    tag: 'Clássico Imortal',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Machado_de_Assis_real.jpg',
    featuredQuote: 'A melhor definição do amor não vale um beijo de moça namorada.',
    quoteSource: 'Memórias Póstumas de Brás Cubas',
    additionalQuotes: [
      { text: 'Esquecer é uma necessidade. A vida é uma lousa, em que o destino, para escrever um novo caso, precisa de apagar o já escrito.', source: 'Memórias Póstumas' },
      { text: 'A vida não é outra coisa senão um duelo entre o passado e o futuro.', source: 'Quincas Borba' },
      { text: 'Cada estação da vida é uma edição, que corrige a anterior, e que será corrigida também.', source: 'Esaú e Jacó' }
    ],
    active: true,
    createdAt: '2024-01-08T00:00:00.000Z'
  },
  {
    id: 'clarice-lispector',
    name: 'Clarice Lispector',
    period: '1920 – 1977',
    role: 'Romancista e Contista',
    tag: 'Vanguarda Literária',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/90/Clarice_Lispector.jpg',
    featuredQuote: 'Renda-se, como eu me rendi. Mergulhe no que você não conhece. Não se preocupe em entender: viver ultrapassa qualquer entendimento.',
    quoteSource: 'A Paixão Segundo G.H.',
    additionalQuotes: [
      { text: 'Liberdade é pouco. O que eu desejo ainda não tem nome.', source: 'Água Viva' },
      { text: 'Até cortar os próprios defeitos pode ser perigoso: nunca se sabe qual é o defeito que sustenta nosso edifício.', source: 'A Hora da Estrela' },
      { text: 'Tudo no mundo começou com um sim. Uma molécula disse sim a outra molécula e nasceu a vida.', source: 'A Hora da Estrela' }
    ],
    active: true,
    createdAt: '2024-01-15T00:00:00.000Z'
  },
  {
    id: 'conceicao-evaristo',
    name: 'Conceição Evaristo',
    period: '1946 – presente',
    role: 'Mestra da Escrevivência • Prêmio Jabuti',
    tag: 'Literatura Negra Contemporânea',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Concei%C3%A7%C3%A3o_Evaristo_em_2019.jpg',
    featuredQuote: 'A nossa escrevivência não é para adormecer os da casa grande, e sim para acordá-los dos seus sonos injustos.',
    quoteSource: 'Becos da Memória',
    additionalQuotes: [
      { text: 'Da minha mãe herdei a cor e a sabedoria da vida.', source: 'Ponciá Vicêncio' },
      { text: 'Eles combinaram de nos matar, mas nós combinamos de não morrer.', source: 'Olhos D’água' },
      { text: 'Escrever é uma forma de sangrar o peito e deixar o coração voar.', source: 'Insubmissas Lágrimas de Mulheres' }
    ],
    active: true,
    createdAt: '2024-01-22T00:00:00.000Z'
  },
  {
    id: 'guimaraes-rosa',
    name: 'Guimarães Rosa',
    period: '1908 – 1967',
    role: 'Escritor e Diplomata',
    tag: 'Mestre do Sertão',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Jo%C3%A3o_Guimar%C3%A3es_Rosa_%281967%29.jpg',
    featuredQuote: 'O correr da vida embrulha tudo. A vida esquenta e esfria, aperta e daí afrouxa. O que ela quer da gente é coragem.',
    quoteSource: 'Grande Sertão: Veredas',
    additionalQuotes: [
      { text: 'Mestre não é quem sempre ensina, mas quem de repente aprende.', source: 'Grande Sertão: Veredas' },
      { text: 'Viver é um descuido prosseguido.', source: 'Primeiras Estórias' },
      { text: 'O real não está na saída nem na chegada: ele se dispõe para a gente é no meio da travessia.', source: 'Grande Sertão: Veredas' }
    ],
    active: true,
    createdAt: '2024-01-29T00:00:00.000Z'
  },
  {
    id: 'carolina-maria-de-jesus',
    name: 'Carolina Maria de Jesus',
    period: '1914 – 1977',
    role: 'Escritora e Compositora',
    tag: 'Voz da Cidadania',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/1d/Carolina_Maria_de_Jesus_1960.jpg',
    featuredQuote: 'O livro é a melhor invenção do homem. O mundo seria horrível sem a leitura.',
    quoteSource: 'Quarto de Despejo',
    additionalQuotes: [
      { text: 'Quem inventou a fome são os que comem.', source: 'Quarto de Despejo' },
      { text: 'Escrever é o meu refúgio e o meu consolo.', source: 'Diário de Bitita' }
    ],
    active: true,
    createdAt: '2024-02-05T00:00:00.000Z'
  },
  {
    id: 'ariano-suassuna',
    name: 'Ariano Suassuna',
    period: '1927 – 2014',
    role: 'Dramaturgo e Romancista',
    tag: 'Cultura Popular Armorial',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/52/Ariano_Suassuna_%281980%29.jpg',
    featuredQuote: 'O otimista é um tolo. O pessimista, um chato. Bom mesmo é ser um realista esperançoso.',
    quoteSource: 'Auto da Compadecida',
    additionalQuotes: [
      { text: 'Arte para mim não é produto de mercado. É expressão da alma e do povo.', source: 'Movimento Armorial' },
      { text: 'Não troco o meu oxente pelo ok de ninguém.', source: 'Aulas-Espetáculo' }
    ],
    active: true,
    createdAt: '2024-02-12T00:00:00.000Z'
  },
  {
    id: 'cora-coralina',
    name: 'Cora Coralina',
    period: '1889 – 1985',
    role: 'Poetisa e Contista',
    tag: 'Sabedoria da Terra',
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/30/Cora_Coralina.jpg',
    featuredQuote: 'Não sei se a vida é curta ou longa para nós, mas sei que nada do que vivemos tem sentido se não tocamos o coração das pessoas.',
    quoteSource: 'Poemas dos Becos de Goiás',
    additionalQuotes: [
      { text: 'Feliz aquele que transfere o que sabe e aprende o que ensina.', source: 'Vintém de Cobre' },
      { text: 'Recria tua vida, sempre, sempre. Remove pedras e planta roseiras e faz doces. Recomeça.', source: 'Estórias da Casa Velha da Ponte' }
    ],
    active: true,
    createdAt: '2024-02-19T00:00:00.000Z'
  }
];

const STORAGE_KEY = 'cecmq_featured_authors';
const PINNED_STORAGE_KEY = 'cecmq_pinned_author_id';
const CUSTOM_EVENT_NAME = 'cecmq_authors_updated';

export function getStoredAuthors(): AuthorItem[] {
  if (typeof window === 'undefined') return DEFAULT_AUTHORS;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_AUTHORS));
      return DEFAULT_AUTHORS;
    }
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed) && parsed.length > 0) {
      // Atualiza automaticamente o Manoel de Barros caso ainda esteja com a frase antiga de testes
      const updated = parsed.map((a: AuthorItem) => {
        if (a.id === 'manoel-de-barros' && a.featuredQuote === 'O meu quintal é maior do que o mundo.') {
          return {
            ...a,
            featuredQuote: 'Sentia mais prazer de brincar com as palavras do que de pensar com elas',
            quoteSource: 'Poeminha em língua de brincar'
          };
        }
        return a;
      });
      return updated;
    }
    return DEFAULT_AUTHORS;
  } catch (e) {
    console.error('Erro ao ler autores do localStorage:', e);
    return DEFAULT_AUTHORS;
  }
}

export function saveStoredAuthors(authors: AuthorItem[]): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(authors));
    window.dispatchEvent(new Event(CUSTOM_EVENT_NAME));
  } catch (e) {
    console.error('Erro ao salvar autores no localStorage:', e);
  }
}

export function getPinnedAuthorId(): string | null {
  if (typeof window === 'undefined') return null;
  try {
    return localStorage.getItem(PINNED_STORAGE_KEY);
  } catch {
    return null;
  }
}

export function setPinnedAuthorId(id: string | null): void {
  if (typeof window === 'undefined') return;
  try {
    if (id) {
      localStorage.setItem(PINNED_STORAGE_KEY, id);
    } else {
      localStorage.removeItem(PINNED_STORAGE_KEY);
    }
    window.dispatchEvent(new Event(CUSTOM_EVENT_NAME));
  } catch (e) {
    console.error('Erro ao salvar autor fixado:', e);
  }
}

/**
 * Logística Semanal:
 * Verifica a data atual e calcula automaticamente o autor da semana.
 * A cada Segunda-feira às 00:00 a semana muda determinísticamente,
 * selecionando o próximo autor da lista de escritores.
 */
export function calculateWeeklyAuthorData(
  authorsList?: AuthorItem[],
  customDate?: Date
): {
  author: AuthorItem;
  authorIndex: number;
  totalActiveAuthors: number;
  mondayDate: Date;
  sundayDate: Date;
  isMondayToday: boolean;
  isPinned: boolean;
  weekLabel: string;
} {
  const allAuthors = authorsList && authorsList.length > 0 ? authorsList : getStoredAuthors();
  const activeAuthors = allAuthors.filter((a) => a.active !== false);
  const fallbackAuthors = activeAuthors.length > 0 ? activeAuthors : DEFAULT_AUTHORS;

  const pinnedId = getPinnedAuthorId();
  if (pinnedId) {
    const pinned = fallbackAuthors.find((a) => a.id === pinnedId);
    if (pinned) {
      const now = customDate ? new Date(customDate) : new Date();
      const day = now.getDay();
      const diffToMonday = (day + 6) % 7;
      const monday = new Date(now);
      monday.setDate(now.getDate() - diffToMonday);
      monday.setHours(0, 0, 0, 0);

      const sunday = new Date(monday);
      sunday.setDate(monday.getDate() + 6);
      sunday.setHours(23, 59, 59, 999);

      const monthNames = [
        'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
        'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
      ];
      const weekLabel = `${monday.getDate()} a ${sunday.getDate()} de ${monthNames[monday.getMonth()]}`;

      return {
        author: pinned,
        authorIndex: fallbackAuthors.indexOf(pinned),
        totalActiveAuthors: fallbackAuthors.length,
        mondayDate: monday,
        sundayDate: sunday,
        isMondayToday: day === 1,
        isPinned: true,
        weekLabel: `${weekLabel} (Destaque Fixado)`
      };
    }
  }

  // Data atual verificada
  const d = customDate ? new Date(customDate) : new Date();

  // No JavaScript Date: Domingo = 0, Segunda = 1, Terça = 2, ..., Sábado = 6
  const dayOfWeek = d.getDay();
  // Dias transcorridos desde a segunda-feira da semana atual:
  // Se for Domingo (0), a última segunda foi há 6 dias: (0 + 6) % 7 = 6
  // Se for Segunda (1), a segunda é hoje: (1 + 6) % 7 = 0
  // Se for Terça (2), a segunda foi ontem: (2 + 6) % 7 = 1
  const diffToMonday = (dayOfWeek + 6) % 7;

  const monday = new Date(d);
  monday.setDate(d.getDate() - diffToMonday);
  monday.setHours(0, 0, 0, 0);

  const sunday = new Date(monday);
  sunday.setDate(monday.getDate() + 6);
  sunday.setHours(23, 59, 59, 999);

  // Segunda-feira de referência fixa para cálculo ininterrupto
  const epochMonday = new Date(2024, 0, 1, 0, 0, 0, 0); // 01/01/2024 foi uma Segunda-feira
  const diffMilliseconds = monday.getTime() - epochMonday.getTime();
  const weeksSinceEpoch = Math.max(0, Math.floor(diffMilliseconds / (7 * 24 * 60 * 60 * 1000)));

  // Índice do autor muda toda segunda-feira automaticamente
  const authorIndex = weeksSinceEpoch % fallbackAuthors.length;
  const author = fallbackAuthors[authorIndex];

  const monthNames = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];

  const weekLabel = `${monday.getDate()} a ${sunday.getDate()} de ${monthNames[monday.getMonth()]}`;
  const isMondayToday = dayOfWeek === 1;

  return {
    author,
    authorIndex,
    totalActiveAuthors: fallbackAuthors.length,
    mondayDate: monday,
    sundayDate: sunday,
    isMondayToday,
    isPinned: false,
    weekLabel
  };
}

export function subscribeToAuthorsUpdate(callback: () => void): () => void {
  if (typeof window === 'undefined') return () => {};
  const handler = () => callback();
  window.addEventListener(CUSTOM_EVENT_NAME, handler);
  window.addEventListener('storage', handler);
  return () => {
    window.removeEventListener(CUSTOM_EVENT_NAME, handler);
    window.removeEventListener('storage', handler);
  };
}
