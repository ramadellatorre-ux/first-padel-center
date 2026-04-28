/* global React */
const { useState, useEffect, useMemo, useRef } = React;

// ================================================================
//  ICONS
// ================================================================
const Icon = {
  arrow: (p) => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M5 12h14M13 6l6 6-6 6"/>
    </svg>
  ),
  wa: (p) => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.7.9-.9 1.1-.2.1-.3.2-.6.1-.3-.1-1.2-.5-2.4-1.5-.9-.8-1.4-1.8-1.6-2.1-.2-.3 0-.4.1-.6.1-.1.3-.3.4-.5.1-.1.2-.2.2-.4.1-.2 0-.4 0-.5 0-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5 0 1.5 1.1 2.9 1.2 3.1.1.2 2.1 3.3 5.1 4.6.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.4.2-.6.2-1.2.2-1.4 0-.1-.3-.2-.6-.4zM12 22h0a10 10 0 0 1-5.1-1.4L2 22l1.4-4.7A10 10 0 0 1 12 2h0c5.5 0 10 4.5 10 10s-4.5 10-10 10z"/>
    </svg>
  ),
  ig: (p) => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}>
      <rect x="3" y="3" width="18" height="18" rx="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
    </svg>
  ),
  pin: (p) => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  ),
  clock: (p) => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}>
      <circle cx="12" cy="12" r="10"/>
      <path d="M12 6v6l4 2"/>
    </svg>
  ),
  play: (p) => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M6 4l14 8-14 8z"/>
    </svg>
  ),
};

// WhatsApp helper
const WA_NUMBER = "5491127589272";
const waLink = (msg) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;

// ================================================================
//  NAV
// ================================================================
function Nav() {
  const [open, setOpen] = useState(false);

  // Lock body scroll when drawer open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const links = [
    { href: '#hero', label: 'Inicio' },
    { href: '#courts', label: 'Canchas' },
    { href: '#book', label: 'Reservar' },
    { href: '#pricing', label: 'Precios' },
    { href: '#location', label: 'Ubicación' },
  ];

  return (
    <>
      <nav className="nav">
        <div className="nav__logo">
          <span className="ball"></span>
          <span>FIRST<span style={{color:'var(--lime)'}}>·</span>PADEL</span>
        </div>
        <div className="nav__links">
          <a className="nav__link --active" href="#hero">Inicio</a>
          <a className="nav__link" href="#courts">Canchas</a>
          <a className="nav__link" href="#book">Reservar</a>
          <a className="nav__link" href="#pricing">Precios</a>
          <a className="nav__link" href="#location">Ubicación</a>
        </div>
        <a className="btn3d --sm --wa" href={waLink("Hola! Quiero reservar una cancha en First Padel Center.")} target="_blank" rel="noopener">
          <Icon.wa /> Reservar
        </a>
        <button
          className={`nav__burger ${open ? '--open' : ''}`}
          onClick={() => setOpen(o => !o)}
          aria-label="Menú"
        >
          <span></span><span></span><span></span>
        </button>
      </nav>

      <div className={`mobile-drawer ${open ? '--open' : ''}`}>
        {links.map(l => (
          <a
            key={l.href}
            href={l.href}
            className="mobile-drawer__link"
            onClick={() => setOpen(false)}
          >
            {l.label}
            <span className="arrow"><Icon.arrow /></span>
          </a>
        ))}
        <div className="mobile-drawer__cta">
          <a
            className="btn3d --ghost --lg"
            style={{justifyContent:'center'}}
            href="https://instagram.com/firstpadelcenter"
            target="_blank"
            rel="noopener"
            onClick={() => setOpen(false)}
          >
            <Icon.ig /> @firstpadelcenter
          </a>
        </div>
      </div>
    </>
  );
}

// ================================================================
//  HERO
// ================================================================
function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero__grid">
          <div>
            <div className="eyebrow"><span className="dot"></span>Av. Fco. Beiró 2720 · CABA · Abierto ahora</div>
            <h1 className="display hero__title">
              JUGÁ.<br/>
              GANÁ.<br/>
              <span className="accent">REPETÍ.</span>
            </h1>
            <p className="hero__sub">
              6 canchas profesionales · 4 indoor con sistema Blindex y 2 outdoor con césped sintético. La casa del pádel en Villa Devoto.
            </p>
            <div className="hero__cta">
              <a className="btn3d --lg" href="#book">
                Reservar cancha <Icon.arrow />
              </a>
              <a className="btn3d --lg --wa" href={waLink("Hola! Necesito información sobre First Padel Center.")} target="_blank" rel="noopener">
                <Icon.wa /> WhatsApp
              </a>
            </div>
            <div className="hero__stats">
              <div>
                <div className="stat__num">6</div>
                <div className="stat__lbl">Canchas pro</div>
              </div>
              <div>
                <div className="stat__num">12<span className="small">h</span></div>
                <div className="stat__lbl">Abierto / día</div>
              </div>
              <div>
                <div className="stat__num">2.4<span className="small">k</span></div>
                <div className="stat__lbl">Jugadores</div>
              </div>
              <div>
                <div className="stat__num">4.9<span className="small">★</span></div>
                <div className="stat__lbl">Reseñas</div>
              </div>
            </div>
          </div>

          <div className="hero__visual">
            <div className="court3d">
              <div className="court3d__floor">
                <div className="court3d__lines"></div>
                <div className="court3d__service-v"></div>
              </div>
              <div className="court3d__wall --back-1"></div>
              <div className="court3d__wall --back-2"></div>
              <div className="court3d__wall --side"></div>
              <div className="court3d__ball"></div>

              <div className="court3d__tag --live">
                <div className="label">EN VIVO · CANCHA 02</div>
                <div className="value" style={{fontSize:18}}>🔴 Match · 4–3</div>
              </div>
              <div className="court3d__tag --book">
                <div className="label">PRÓXIMO TURNO · CANCHA 04</div>
                <div className="value" style={{fontSize:18}}>19:00 hs · $14.500</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ================================================================
//  TICKER
// ================================================================
function Ticker() {
  const items = [
    "ABIERTO 8AM – 12PM ", "BLINDEX PROFESIONAL", "CÉSPED SINTÉTICO MONOFILAMENTO", "CLASES PARTICULARES",
    "TORNEOS SEMANALES", "PARRILLA · BAR · ESTACIONAMIENTO", "ALQUILER DE PALETAS",
  ];
  return (
    <div className="ticker">
      <div className="ticker__track">
        {[...items, ...items].map((t, i) => (
          <React.Fragment key={i}>
            <span>{t}</span>
            <span className="star">✦</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

// ================================================================
//  COURTS
// ================================================================
const COURTS = [
  { id: 1, type: 'indoor',  name: 'C-01', features: ['Blindex', 'LED'], live: false, busy: false, next: '19:00' },
  { id: 2, type: 'indoor',  name: 'C-02', features: ['Blindex', 'LED'], live: true,  busy: true,  next: '20:30' },
  { id: 3, type: 'indoor',  name: 'C-03', features: ['Blindex', 'LED', 'Pro'], live: false, busy: false, next: '19:30' },
  { id: 4, type: 'indoor',  name: 'C-04', features: ['Blindex', 'LED'], live: false, busy: false, next: '19:00' },
  { id: 5, type: 'outdoor', name: 'C-05', features: ['Césped', 'Sol'], live: false, busy: true, next: '21:00' },
  { id: 6, type: 'outdoor', name: 'C-06', features: ['Césped', 'Sol'], live: false, busy: false, next: '19:30' },
];

function Courts() {
  return (
    <section className="section courts" id="courts">
      <div className="container">
        <div className="section__head">
          <div>
            <div className="eyebrow"><span className="dot"></span>Nuestras canchas</div>
            <h2 className="display section__title">SEIS CANCHAS<br/>UN SOLO RITUAL.</h2>
          </div>
          <div className="chip --lime">
            <span style={{display:'inline-block',width:6,height:6,borderRadius:'50%',background:'var(--lime)'}}></span>
            3 disponibles ahora
          </div>
        </div>

        <div className="courts__grid">
          {COURTS.map(c => (
            <div key={c.id} className={`courtcard --${c.type}`}>
              <div className="courtcard__num">{c.id < 10 ? '0' : ''}{c.id}<span className="small">/06</span></div>
              <div className="courtcard__type">
                <span className="indicator"></span>
                {c.type === 'indoor' ? 'INDOOR' : 'OUTDOOR'}
              </div>
              <div className="courtcard__viz"></div>
              <div className="courtcard__status">
                <span className="lbl">Próximo</span>
                <span className={`val ${c.busy ? '--busy' : ''}`}>{c.busy ? 'Ocupada · ' : ''}{c.next}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ================================================================
//  BOOKING
// ================================================================
const DAYS_ES = ['DOM', 'LUN', 'MAR', 'MIÉ', 'JUE', 'VIE', 'SÁB'];
function buildDates() {
  const out = [];
  const today = new Date();
  for (let i = 0; i < 7; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    out.push({ day: DAYS_ES[d.getDay()], num: d.getDate(), iso: d.toISOString().slice(0,10) });
  }
  return out;
}

const SLOTS = [
  { time: '08:00', price: 9500,  taken: false },
  { time: '09:00', price: 9500,  taken: true  },
  { time: '10:00', price: 11000, taken: false },
  { time: '11:00', price: 11000, taken: false },
  { time: '12:00', price: 11000, taken: true  },
  { time: '13:00', price: 11000, taken: false },
  { time: '14:00', price: 11000, taken: false },
  { time: '15:00', price: 11000, taken: false },
  { time: '16:00', price: 13500, taken: false },
  { time: '17:00', price: 13500, taken: true  },
  { time: '18:00', price: 14500, taken: false, peak: true },
  { time: '19:00', price: 14500, taken: false, peak: true },
  { time: '20:00', price: 14500, taken: true,  peak: true },
  { time: '21:00', price: 14500, taken: false, peak: true },
  { time: '22:00', price: 12500, taken: false },
  { time: '23:00', price: 12500, taken: false },
];

function Booking() {
  const dates = useMemo(buildDates, []);
  const [date, setDate] = useState(dates[1].iso);
  const [time, setTime] = useState(null);
  const [court, setCourt] = useState(null);
  const [step, setStep] = useState(1);

  // Auto-progress steps
  useEffect(() => {
    if (court && time) setStep(3);
    else if (time) setStep(2);
    else setStep(1);
  }, [time, court]);

  const slotData = SLOTS.find(s => s.time === time);
  const total = slotData ? slotData.price : 0;
  const dateObj = dates.find(d => d.iso === date);
  const courtObj = COURTS.find(c => c.id === court);

  const reservaMsg = `Hola! Quiero reservar:\n\n📅 ${dateObj?.day} ${dateObj?.num}\n🕐 ${time || '—'} hs\n🎾 Cancha ${courtObj?.name || '—'} (${courtObj?.type || ''})\n💰 $${total.toLocaleString('es-AR')}\n\n¿Está disponible?`;

  return (
    <section className="section booking" id="book">
      <div className="container">
        <div className="section__head">
          <div>
            <div className="eyebrow"><span className="dot"></span>Reservas en línea</div>
            <h2 className="display section__title">RESERVÁ TU<br/>CANCHA.</h2>
          </div>
          <div className="chip --live">
            <span style={{display:'inline-block',width:6,height:6,borderRadius:'50%',background:'#ff8a8a',boxShadow:'0 0 8px #ff8a8a'}}></span>
            Disponibilidad en vivo
          </div>
        </div>

        <div className="booking__panel">
          {/* Steps */}
          <div className="booking__steps">
            <div className={`booking__step ${step >= 1 ? '--done' : ''} ${step === 1 ? '--active' : ''}`}></div>
            <div className={`booking__step ${step >= 2 ? '--done' : ''} ${step === 2 ? '--active' : ''}`}></div>
            <div className={`booking__step ${step >= 3 ? '--active' : ''}`}></div>
          </div>
          <div className="booking__steplbl">
            <span className="num">PASO {step}/3</span> ·{' '}
            {step === 1 ? 'Elegí día y horario' : step === 2 ? 'Elegí cancha' : 'Confirmá tu reserva'}
          </div>

          {/* Date picker */}
          <h3 style={{margin:'0 0 14px', fontSize:14, fontWeight:600, color:'var(--ink-dim)'}}>FECHA</h3>
          <div className="dategrid" style={{marginBottom:32}}>
            {dates.map(d => (
              <button
                key={d.iso}
                className={`datebtn ${date === d.iso ? '--active' : ''}`}
                onClick={() => { setDate(d.iso); setTime(null); setCourt(null); }}
              >
                <div className="day">{d.day}</div>
                <div className="num">{d.num}</div>
              </button>
            ))}
          </div>

          {/* Time slots */}
          <h3 style={{margin:'0 0 14px', fontSize:14, fontWeight:600, color:'var(--ink-dim)'}}>HORARIO · DURACIÓN 90 MIN</h3>
          <div className="slotgrid" style={{marginBottom: 32}}>
            {SLOTS.map(s => (
              <button
                key={s.time}
                className={`slot ${time === s.time ? '--active' : ''} ${s.taken ? '--taken' : ''} ${s.peak ? '--peak' : ''}`}
                disabled={s.taken}
                onClick={() => { setTime(s.time); setCourt(null); }}
              >
                {s.time}
                <span className="price">${s.price.toLocaleString('es-AR')}</span>
              </button>
            ))}
          </div>

          {/* Court chooser - shown after time selected */}
          {time && (
            <div style={{animation:'stepFill .4s'}}>
              <h3 style={{margin:'0 0 14px', fontSize:14, fontWeight:600, color:'var(--ink-dim)'}}>CANCHA</h3>
              <div className="courtchooser" style={{marginBottom: 32}}>
                {COURTS.map(c => (
                  <button
                    key={c.id}
                    className={`courtopt ${court === c.id ? '--active' : ''}`}
                    onClick={() => setCourt(c.id)}
                  >
                    <div className="courtopt__name">Cancha {c.name}</div>
                    <div className="courtopt__type">{c.type === 'indoor' ? 'Indoor · Blindex' : 'Outdoor · Césped'}</div>
                    <div className="courtopt__feat">
                      {c.features.map(f => <span key={f} className="f">{f}</span>)}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Summary */}
          {court && (
            <div className="summary" style={{animation:'stepFill .4s'}}>
              <div>
                <div className="summary__row"><span className="lbl">Fecha</span><span className="val">{dateObj.day} {dateObj.num}</span></div>
                <div className="summary__row"><span className="lbl">Horario</span><span className="val">{time} hs · 90 min</span></div>
                <div className="summary__row"><span className="lbl">Cancha</span><span className="val">{courtObj.name} · {courtObj.type === 'indoor' ? 'Indoor' : 'Outdoor'}</span></div>
                <div className="summary__row"><span className="lbl">Jugadores</span><span className="val">Hasta 4</span></div>
              </div>
              <div style={{display:'flex', flexDirection:'column', justifyContent:'space-between', alignItems:'flex-end'}}>
                <div>
                  <div style={{fontSize:11, color:'var(--ink-mute)', textAlign:'right', letterSpacing:'.1em', textTransform:'uppercase'}}>Total</div>
                  <div className="summary__total"><span className="cur">$</span>{total.toLocaleString('es-AR')}</div>
                </div>
                <a
                  className="btn3d --wa --lg"
                  href={waLink(reservaMsg)}
                  target="_blank"
                  rel="noopener"
                >
                  <Icon.wa /> Confirmar por WhatsApp
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

// ================================================================
//  PRICING
// ================================================================
function Pricing() {
  const plans = [
    {
      name: 'Hora suelta',
      sub: 'Pagás solo lo que jugás',
      price: '11.000',
      per: '/ 90 min',
      featured: false,
      feat: [
        'Reserva online inmediata',
        'Cualquier cancha disponible',
        'Sin compromiso mensual',
        'Pelotas y red incluidas',
      ],
      cta: 'Reservar hora',
      msg: 'Hola! Quiero reservar una hora suelta.',
    },
    {
      name: 'Membresía',
      sub: 'Para los que viven el pádel',
      price: '38.500',
      per: '/ mes',
      featured: true,
      feat: [
        '4 horas semanales fijas',
        '20% off en horas extra',
        'Reserva con 14 días anticipación',
        'Acceso a torneos internos',
        'Vestuario premium con casillero',
        'Bebida de cortesía post-partido',
      ],
      cta: 'Sumarme al club',
      msg: 'Hola! Quiero info sobre la membresía mensual.',
    },
    {
      name: 'Clases',
      sub: 'Subí tu nivel con profes pro',
      price: '14.500',
      per: '/ clase',
      featured: false,
      feat: [
        'Profesores certificados FAP',
        'Clases individuales o grupales',
        'Plan de progresión personalizado',
        'Análisis de video disponible',
      ],
      cta: 'Quiero una clase',
      msg: 'Hola! Quiero info sobre las clases con profesor.',
    },
  ];

  return (
    <section className="section" id="pricing">
      <div className="container">
        <div className="section__head">
          <div>
            <div className="eyebrow"><span className="dot"></span>Tarifas y planes</div>
            <h2 className="display section__title">PRECIOS<br/>SIN VUELTAS.</h2>
          </div>
          <div className="chip">Vigente abril 2026</div>
        </div>

        <div className="pricing__grid">
          {plans.map(p => (
            <div key={p.name} className={`plan ${p.featured ? '--featured' : ''}`}>
              {p.featured && <div className="plan__tag">★ Más elegido</div>}
              <div className="plan__name">{p.name}</div>
              <div className="plan__sub">{p.sub}</div>
              <div className="plan__price">
                <span className="cur">$</span>{p.price}
                <span className="per">{p.per}</span>
              </div>
              <ul className="plan__feat">
                {p.feat.map(f => (
                  <li key={f}>
                    <span className="check">✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                className={`btn3d ${p.featured ? '' : '--ghost'} --lg`}
                style={{width: '100%', justifyContent: 'center'}}
                href={waLink(p.msg)}
                target="_blank"
                rel="noopener"
              >
                <Icon.wa /> {p.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ================================================================
//  AMENITIES
// ================================================================
function Amenities() {
  const items = [
    { ic: '🥩', name: 'Parrilla & Bar', desc: 'Asado, picadas y bebidas. La sobremesa es parte del juego.' },
    { ic: '🚿', name: 'Vestuarios', desc: 'Duchas con agua caliente, casilleros y secadores.' },
    { ic: '🅿️', name: 'Estacionamiento', desc: 'Cocheras propias para socios e invitados, sin cargo.' },
    { ic: '🎾', name: 'Pro Shop', desc: 'Paletas, pelotas, calzado e indumentaria de las mejores marcas.' },
    { ic: '🏆', name: 'Torneos', desc: 'Internos cada 15 días, abiertos los fines de semana largos.' },
    { ic: '🧒', name: 'Escuela', desc: 'Pádel para chicos desde los 6 años, grupos por nivel.' },
    { ic: '📺', name: 'Bar pantalla', desc: 'Pantalla gigante para ver fútbol, WPT y Premier Padel.' },
    { ic: '🌐', name: 'Wi-Fi', desc: 'Internet gratis en todo el complejo para socios.' },
  ];
  return (
    <section className="section">
      <div className="container">
        <div className="section__head">
          <div>
            <div className="eyebrow"><span className="dot"></span>Más que canchas</div>
            <h2 className="display section__title">UN CLUB<br/>COMPLETO.</h2>
          </div>
        </div>
        <div className="amenities__grid">
          {items.map(a => (
            <div key={a.name} className="amen">
              <div className="amen__icon">{a.ic}</div>
              <div className="amen__name">{a.name}</div>
              <div className="amen__desc">{a.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ================================================================
//  TESTIMONIALS
// ================================================================
function Social() {
  const t = [
    {
      q: 'Las mejores canchas de la zona oeste sin discusión. El Blindex impecable y la atención de otro nivel.',
      name: 'Martín G.',
      rank: 'Socio · 3era categoría',
      bg: 'var(--lime)',
    },
    {
      q: 'Reservás por WhatsApp en 30 segundos. La parrilla después del partido la hace única.',
      name: 'Camila R.',
      rank: 'Socia · 5ta categoría',
      bg: 'var(--blindex)',
    },
    {
      q: 'Las dos canchas outdoor con césped son una belleza. Vengo desde Belgrano y vale 100%.',
      name: 'Federico P.',
      rank: 'Habitué · 4ta',
      bg: 'var(--gold)',
    },
  ];
  return (
    <section className="section">
      <div className="container">
        <div className="section__head">
          <div>
            <div className="eyebrow"><span className="dot"></span>Lo que dicen</div>
            <h2 className="display section__title">JUGADORES<br/>FELICES.</h2>
          </div>
          <a className="btn3d --sm --ghost" href="https://instagram.com/firstpadelcenter" target="_blank" rel="noopener">
            <Icon.ig /> @firstpadelcenter
          </a>
        </div>
        <div className="social__grid">
          {t.map((x, i) => (
            <div key={i} className="testi">
              <p className="testi__quote">{x.q}</p>
              <div className="testi__who">
                <div className="testi__avatar" style={{background: x.bg}}>{x.name[0]}</div>
                <div>
                  <div className="testi__name">{x.name}</div>
                  <div className="testi__rank">{x.rank}</div>
                  <div className="testi__stars">★★★★★</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ================================================================
//  LOCATION
// ================================================================
function Location() {
  return (
    <section className="section location" id="location">
      <div className="container">
        <div className="section__head">
          <div>
            <div className="eyebrow"><span className="dot"></span>Cómo llegar</div>
            <h2 className="display section__title">VILLA<br/>DEVOTO.</h2>
          </div>
        </div>

        <div className="location__grid">
          <div className="map">
            <svg className="map__svg" viewBox="0 0 600 480" preserveAspectRatio="xMidYMid slice">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,.04)" strokeWidth="1"/>
                </pattern>
                <linearGradient id="streetGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#1a2a20"/>
                  <stop offset="100%" stopColor="#0e1812"/>
                </linearGradient>
              </defs>
              <rect width="600" height="480" fill="url(#streetGrad)"/>
              <rect width="600" height="480" fill="url(#grid)"/>
              {/* Streets */}
              <path d="M 0 240 L 600 200" stroke="#2a3a30" strokeWidth="14" fill="none"/>
              <path d="M 0 240 L 600 200" stroke="#1a2a20" strokeWidth="2" fill="none" strokeDasharray="8 6"/>
              <path d="M 280 0 L 320 480" stroke="#2a3a30" strokeWidth="10" fill="none"/>
              <path d="M 0 100 L 600 80" stroke="#1f2c25" strokeWidth="6" fill="none"/>
              <path d="M 0 380 L 600 360" stroke="#1f2c25" strokeWidth="6" fill="none"/>
              <path d="M 100 0 L 130 480" stroke="#1f2c25" strokeWidth="5" fill="none"/>
              <path d="M 480 0 L 510 480" stroke="#1f2c25" strokeWidth="5" fill="none"/>
              {/* Street labels */}
              <text x="40" y="234" fill="rgba(255,255,255,.3)" fontSize="10" fontFamily="JetBrains Mono">AV. FCO. BEIRÓ</text>
              <text x="320" y="40" fill="rgba(255,255,255,.2)" fontSize="9" fontFamily="JetBrains Mono">AV. SEGUROLA</text>
              {/* Blocks */}
              {[
                [40, 60, 60, 30], [140, 50, 80, 35], [340, 30, 80, 35], [520, 40, 60, 30],
                [40, 280, 60, 70], [140, 270, 80, 70], [340, 250, 80, 70], [520, 270, 60, 70],
                [40, 400, 60, 50], [140, 410, 80, 50], [340, 400, 80, 50], [520, 410, 60, 50],
              ].map(([x,y,w,h], i) => (
                <rect key={i} x={x} y={y} width={w} height={h} fill="rgba(255,255,255,.025)" stroke="rgba(255,255,255,.05)"/>
              ))}
              {/* Highlight block */}
              <rect x="240" y="160" width="120" height="100" fill="rgba(200,255,61,.08)" stroke="rgba(200,255,61,.4)" strokeWidth="1.5"/>
              <text x="252" y="180" fill="rgba(200,255,61,.7)" fontSize="9" fontFamily="JetBrains Mono">FIRST PADEL</text>
            </svg>
            <div className="map__pin">
              <span className="label">First Padel Center</span>
              <div className="dot"></div>
            </div>
          </div>

          <div className="location__info">
            <div className="info__card">
              <div className="info__lbl">Dirección</div>
              <div className="info__val">Av. Fco. Beiró 2720/2750</div>
              <div style={{color:'var(--ink-dim)', fontSize:14, marginTop:4}}>Villa Devoto · CABA · Argentina</div>
            </div>
            <div className="info__card">
              <div className="info__lbl">Horarios</div>
              <div className="info__val" style={{display:'flex', justifyContent:'space-between'}}>
                <span>Lun – Vie</span><span>08:00 – 24:00</span>
              </div>
              <div className="info__val" style={{display:'flex', justifyContent:'space-between', marginTop:6}}>
                <span>Sáb – Dom</span><span>09:00 – 24:00</span>
              </div>
            </div>
            <div className="info__card">
              <div className="info__lbl">Contacto</div>
              <div className="info__val">+54 11 2758-9272</div>
              <div style={{color:'var(--ink-dim)', fontSize:14, marginTop:4}}>info@firstpadelcenter.com</div>
              <div style={{display:'flex', gap:10, marginTop:18}}>
                <a className="btn3d --sm --wa" href={waLink("Hola! Necesito información sobre el club.")} target="_blank" rel="noopener">
                  <Icon.wa /> WhatsApp
                </a>
                <a className="btn3d --sm --ghost" href="https://instagram.com/firstpadelcenter" target="_blank" rel="noopener">
                  <Icon.ig /> Instagram
                </a>
              </div>
            </div>
            <a
              className="btn3d --court --lg"
              style={{justifyContent:'center'}}
              href="https://maps.google.com/?q=Av.+Fco+Beiro+2720+CABA"
              target="_blank"
              rel="noopener"
            >
              <Icon.pin /> Cómo llegar en Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ================================================================
//  WHATSAPP FAB
// ================================================================
function WAFab() {
  const [showBubble, setShowBubble] = useState(true);
  return (
    <div className="wafab">
      {showBubble && (
        <div className="wafab__bubble">
          ¿Reservás por WhatsApp?
          <button
            onClick={() => setShowBubble(false)}
            style={{position:'absolute', top:-6, right:-6, width:18, height:18, borderRadius:'50%', background:'var(--bg)', border:'1px solid var(--line-2)', color:'var(--ink-mute)', fontSize:10, cursor:'pointer'}}
          >×</button>
        </div>
      )}
      <a
        className="wafab__btn"
        href={waLink("Hola! Vengo del sitio web.")}
        target="_blank"
        rel="noopener"
        aria-label="Contactar por WhatsApp"
      >
        <span className="ring"></span>
        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.7.9-.9 1.1-.2.1-.3.2-.6.1-.3-.1-1.2-.5-2.4-1.5-.9-.8-1.4-1.8-1.6-2.1-.2-.3 0-.4.1-.6.1-.1.3-.3.4-.5.1-.1.2-.2.2-.4.1-.2 0-.4 0-.5 0-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5 0 1.5 1.1 2.9 1.2 3.1.1.2 2.1 3.3 5.1 4.6.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.4.2-.6.2-1.2.2-1.4 0-.1-.3-.2-.6-.4zM12 22h0a10 10 0 0 1-5.1-1.4L2 22l1.4-4.7A10 10 0 0 1 12 2h0c5.5 0 10 4.5 10 10s-4.5 10-10 10z"/>
        </svg>
      </a>
    </div>
  );
}

// ================================================================
//  FOOTER
// ================================================================
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <div className="footer__brand">FIRST<br/>PADEL<span style={{color:'var(--lime)'}}>.</span></div>
            <div className="footer__tag">La casa del pádel en Villa Devoto. 6 canchas, mil partidos, una sola pasión.</div>
            <div style={{display:'flex', gap:10, marginTop:24}}>
              <a className="fab3d" href={waLink("Hola!")} target="_blank" rel="noopener" aria-label="WhatsApp"><Icon.wa /></a>
              <a className="fab3d" href="https://instagram.com/firstpadelcenter" target="_blank" rel="noopener" aria-label="Instagram"><Icon.ig /></a>
              <a className="fab3d" href="https://maps.google.com" target="_blank" rel="noopener" aria-label="Maps"><Icon.pin /></a>
            </div>
          </div>
          <div className="footer__col">
            <h4>Club</h4>
            <a href="#courts">Canchas</a>
            <a href="#book">Reservar</a>
            <a href="#pricing">Precios</a>
            <a href="#location">Ubicación</a>
          </div>
          <div className="footer__col">
            <h4>Servicios</h4>
            <a href="#">Clases</a>
            <a href="#">Torneos</a>
            <a href="#">Pro Shop</a>
            <a href="#">Eventos</a>
          </div>
          <div className="footer__col">
            <h4>Contacto</h4>
            <a href={`tel:+${WA_NUMBER}`}>+54 11 2758-9272</a>
            <a href="mailto:info@firstpadelcenter.com">info@firstpadelcenter.com</a>
            <a href="#">Av. Fco. Beiró 2720</a>
            <a href="#">Villa Devoto, CABA</a>
          </div>
        </div>

        <div className="footer__big">FIRST PADEL</div>

        <div className="footer__bottom">
          <div>© 2026 First Padel Center · Todos los derechos reservados</div>
          <div style={{display:'flex', gap:20}}>
            <a href="#" style={{color:'var(--ink-mute)'}}>Términos</a>
            <a href="#" style={{color:'var(--ink-mute)'}}>Privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ================================================================
//  APP
// ================================================================
function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Ticker />
      <Courts />
      <Booking />
      <Pricing />
      <Amenities />
      <Social />
      <Location />
      <Footer />
      <WAFab />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
