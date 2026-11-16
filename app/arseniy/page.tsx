import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  MessageCircle,
  Mic2,
  MoveRight,
} from 'lucide-react';
import Image from 'next/image';
import styles from './arseniy.module.css';

const formats = [
  {
    number: '01',
    title: 'Свадьбы',
    text: 'Личная история пары, бережное внимание к близким и вечер без чужих сценариев.',
  },
  {
    number: '02',
    title: 'Корпоративы',
    text: 'Лёгкая программа, которая объединяет команду и сохраняет характер компании.',
  },
  {
    number: '03',
    title: 'Частные события',
    text: 'Дни рождения, юбилеи и камерные вечера с точной интонацией и живым общением.',
  },
  {
    number: '04',
    title: 'Деловые встречи',
    text: 'Конференции, открытия и официальные приёмы с собранной подачей и ясным таймингом.',
  },
];

const steps = [
  ['Знакомство', 'Вы рассказываете о событии, гостях и атмосфере, которую хочется создать.'],
  ['Концепция', 'Собираем структуру вечера, вопросы, важные истории и детали.'],
  ['Подготовка', 'Сверяются тайминг, участники, подрядчики и всё, что остаётся за кадром.'],
  ['Событие', 'Программа живёт вместе с залом: спокойно меняет темп и остаётся естественной.'],
];

const reviews = [
  {
    author: 'Клиент 01',
    text: '«С первой встречи было понятно: ведущий слышит людей и умеет собрать вечер вокруг их истории.»',
  },
  {
    author: 'Организатор события',
    text: '«Лёгкая подача, точный тайминг и атмосфера, в которой гостям действительно хочется быть вместе.»',
  },
  {
    author: 'Пара молодожёнов',
    text: '«Всё получилось живо, тепло и с юмором — без неловких конкурсов и чужих сценариев.»',
  },
];

const emotionPlaceholders = [
  'Смех в зале',
  'Реакции гостей',
  'Живые моменты',
];

export default function ArseniyPage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <a className={styles.logo} href="#top" aria-label="Алекс Ветров — наверх">
          <span>А</span>
          <span className={styles.logoText}>Алекс Ветров<small>ведущий событий · демо</small></span>
        </a>
        <nav aria-label="Основная навигация">
          <a href="#about">О ведущем</a>
          <a href="#formats">Форматы</a>
          <a href="#process">Подготовка</a>
        </nav>
        <a className={styles.headerCta} href="#contact">Проверить дату <ArrowUpRight size={16} /></a>
      </header>

      <section className={styles.hero} id="top">
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>Москва · Санкт-Петербург · Ваш город</p>
          <h1>
            <span>Алекс</span>
            <span className={styles.serif}>Ветров</span>
          </h1>
          <div className={styles.heroFooter}>
            <p>Ведущий, который слышит людей, чувствует момент и помогает событию оставаться настоящим.</p>
            <a href="#about" aria-label="Подробнее о ведущем"><ArrowDown /></a>
          </div>
        </div>

        <div className={styles.heroPortrait}>
          <Image src="/demo-hero.png" alt="Премиальный зал для события" width={1024} height={1536} priority />
          <div className={styles.imageLabel}><span>Демо-визуал</span><b>Легко. С юмором. Про вас.</b></div>
          <span className={styles.imageIndex}>01 / 05</span>
        </div>
      </section>

      <section className={styles.manifesto} id="about">
        <p className={styles.label}>О ведущем</p>
        <div className={styles.manifestoCopy}>
          <h2>Хороший ведущий не занимает собой весь вечер.</h2>
          <p>Он создаёт пространство, в котором гостям легко общаться, смеяться и проживать важные моменты без неловкости и формальных пауз.</p>
          <a href="#contact">Обсудить ваш проект <ArrowUpRight size={17} /></a>
        </div>
      </section>

      <section className={styles.profile}>
        <div className={styles.profileVisual}>
          <div className={styles.cropFrame}><Image src="/demo-stage.png" alt="Сцена и микрофон для события" width={1024} height={1536} /></div>
          <span className={styles.outlineWord}>ведущий</span>
        </div>
        <div className={styles.profileCopy}>
          <p className={styles.label}>Профессионально. Легко. По-человечески.</p>
          <h2>Чувство зала важнее заученного текста.</h2>
          <p className={styles.profileLead}>Несколько сотен событий — от камерных свадеб до конференций, открытий и официальных приёмов. Этот опыт помогает быть точным в моменте, не теряя лёгкости.</p>
          <ul>
            <li><Check size={18} /> Авторская подготовка под конкретных людей</li>
            <li><Check size={18} /> Современная подача и stand up-бэкграунд</li>
            <li><Check size={18} /> Уважение к гостям, таймингу и личным границам</li>
          </ul>
          <a className={styles.textLink} href="#contact">Обсудить ваше событие <ArrowRight size={18} /></a>
        </div>
      </section>

      <section className={styles.formats} id="formats">
        <div className={styles.formatsHeading}>
          <p className={styles.label}>Форматы</p>
          <h2>Разные поводы.<br /><i>Один точный тон.</i></h2>
          <p>В программе — акцент на смехе и живом юморе, который рождается из людей и самого события.</p>
        </div>
        <div className={styles.formatList}>
          {formats.map((format) => (
            <article key={format.number}>
              <span>{format.number}</span>
              <h3>{format.title}</h3>
              <p>{format.text}</p>
              <ArrowUpRight />
            </article>
          ))}
        </div>
      </section>

      <section className={styles.reviews} id="reviews" aria-labelledby="reviews-title">
        <div className={styles.reviewsVisual}>
          <Image src="/demo-audience.png" alt="Гости события аплодируют" width={1536} height={1024} />
        </div>
        <div className={styles.reviewsCopy}>
          <p className={styles.label}>Говорят клиенты</p>
          <h2 id="reviews-title">После события остаются <i>эмоции.</i></h2>
          <div className={styles.reviewList}>
            {reviews.map((review, index) => (
              <blockquote key={review.author}>
                <span>0{index + 1}</span>
                <p>{review.text}</p>
                <cite>{review.author}</cite>
              </blockquote>
            ))}
          </div>
          <a className={styles.textLink} href="#contact">
            Получить презентацию формата <ArrowUpRight size={17} />
          </a>
        </div>
      </section>

      <section className={styles.emotions} aria-labelledby="emotions-title">
        <div className={styles.emotionsHeading}>
          <p className={styles.label}>Эмоции события</p>
          <h2 id="emotions-title">Люди смеются.<br /><i>Вечер запоминается.</i></h2>
          <p>Здесь появятся фотографии с мероприятий — живые реакции гостей, улыбки и моменты, ради которых всё и происходит.</p>
        </div>
        <div className={styles.emotionRail} aria-label="Места для будущих фотографий с мероприятий">
          {emotionPlaceholders.map((title, index) => (
            <article key={title} className={styles.emotionPlaceholder}>
              <div><span>Фото будет добавлено</span><b>0{index + 1}</b></div>
              <p>{title}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.process} id="process">
        <div className={styles.processIntro}>
          <p className={styles.label}>Как всё происходит</p>
          <h2>От первого<br />сообщения<br /><i>до события.</i></h2>
          <div className={styles.mic}><Mic2 size={32} /></div>
        </div>
        <ol className={styles.steps}>
          {steps.map(([title, text], index) => (
            <li key={title}>
              <span>0{index + 1}</span>
              <div><h3>{title}</h3><p>{text}</p></div>
              <MoveRight />
            </li>
          ))}
        </ol>
      </section>

      <section className={styles.contact} id="contact">
        <div className={styles.contactTop}>
          <p className={styles.label}>Дата · город · формат</p>
          <span>05 / 05</span>
        </div>
        <h2>Расскажите<br />о вашем <i>событии.</i></h2>
        <p className={styles.contactLead}>Начнём с даты и короткого разговора.</p>
        <div className={styles.contactActions}>
          <a className={styles.primaryAction} href="mailto:hello@example.com">
            <span><MessageCircle /> Обсудить проект</span><ArrowUpRight />
          </a>
          <a className={styles.phone} href="tel:+70000000000">
            <small>Телефон для демо</small><b>+7 000 000-00-00</b><ArrowUpRight />
          </a>
        </div>
        <div className={styles.socialLinks} aria-label="Социальные сети ведущего">
          <a href="#contact">
            <span>ВКонтакте · демо</span><ArrowUpRight size={17} />
          </a>
          <span role="link" aria-disabled="true"><b>Telegram</b><small>скоро</small></span>
          <span role="link" aria-disabled="true"><b>MAX</b><small>скоро</small></span>
          <span role="link" aria-disabled="true"><b>Instagram</b><small>скоро</small></span>
        </div>
        <footer>
          <a className={styles.logo} href="#top"><span>А</span><span className={styles.logoText}>Алекс Ветров<small>ведущий событий · демо</small></span></a>
          <p>Москва · Санкт-Петербург · Ваш город</p>
          <a href="#top">Наверх ↑</a>
        </footer>
      </section>
    </main>
  );
}
