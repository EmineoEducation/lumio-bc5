// ══════════════════════════════════════════════════════════════
//  LIVRABLE APP — BC5
//  PAC · Parcours Activation Compétences · Éminéo · MSMC
//  · Compétences C.20-II, C.21-II, C.22-II
//  · Gabarits : Rôles/Responsabilités + Plan de risques IA Gen
//  · Jury IA — critères RNCP BC5 stricts
//  · Note réflexive E7
// ══════════════════════════════════════════════════════════════

const wc = (txt) => (txt || '').trim() ? (txt || '').trim().split(/\s+/).length : 0;
const GLOBAL_MIN = 520;

// ─── Prompt jury BC5 ─────────────────────────────────────────
const JURY_PROMPT = `Tu es un jury d'évaluation certifiant pour le Master MSMC (RNCP 38504), bloc de compétences BC5 — "Engager l'innovation et la transformation digitale de la communication de la marque".

Tu évalues une contribution individuelle produite par un·e étudiant·e dans le cadre Lumio Health, projet IA Gen, avril 2027.

Contexte Lumio Health — Projet IA Gen, avril 2027 :
- MDR obtenue en mars 2027 (un mois de retard) — pivot B2C en cours, accord Darty Santé 50 000 unités
- Projet IA Gen lancé par Sonia Ferracci en février 2027 : visuels, rédaction campaigns, personnalisation B2C
- Incident RGPD : prestataire DataViz Studio utilise les données clients Lumio pour entraîner son modèle — contrat signé par Yassine seul, sans validation juridique
- Incident PI : un visuel généré reproduit partiellement le style du photographe Léa Ferron (agence Mirage)
- EU AI Act : entrée en application mai 2027 — systèmes IA en contexte médical potentiellement classés "haut risque"
- Résistance interne B2B : équipe commerciale refuse les contenus IA Gen, 3 DRH clients ont exprimé des réserves
- Théo Marczak (CEO) prépare un email à Jakob Rein (Northgate) sur les risques juridiques — court-circuitant Sonia
- Yassine Morel a signé le contrat DataViz Studio seul, sans validation juridique

Pour chaque compétence, évalue la réponse de l'étudiant·e. Format STRICT :

### C.20-II — [Satisfaisant / Insuffisant / Absent]
Une phrase de retour précise. Cite les mots de l'étudiant si pertinent.

### C.21-II — [Satisfaisant / Insuffisant / Absent]
Une phrase de retour précise.

### C.22-II — [Satisfaisant / Insuffisant / Absent]
Une phrase de retour précise.

### Note réflexive — [Satisfaisant / Insuffisant / Absent]
Une phrase de retour précise.

---

## Niveau de conformité global
**[Non conforme / Partiellement conforme / Conforme / Conforme avec distinction]**
Une phrase de synthèse.

## Question de jury
Une seule question qu'un jury poserait à l'oral — précise, dérangeante, sans réponse évidente. Elle doit porter sur une tension réelle du cas (EU AI Act, incident RGPD DataViz, PI visuel Léa Ferron, résistance commerciale B2B, rôle de Théo vs Sonia).

Règles d'évaluation STRICTES :
- C.20-II insuffisant si les facteurs de rupture ne sont pas ancrés dans le contexte Lumio post-MDR — liste générique IA = non évalué
- C.21-II insuffisant si les incidents RGPD DataViz Studio et PI visuel Léa Ferron ne sont pas explicitement traités
- C.21-II insuffisant si les rôles et responsabilités des directions (Marketing, Juridique, Commercial, CEO) ne sont pas formalisés — "impliquer le juridique" sans préciser sa responsabilité de validation = insuffisant
- C.21-II insuffisant si aucun indicateur d'impact mesurable (KPI production, marcom ou conformité) n'est proposé
- C.22-II insuffisant si les stratégies d'accompagnement ne distinguent pas au moins deux profils de résistance
- Ne propose pas de stratégie alternative — évalue uniquement ce qui est produit
- Note réflexive absente ou < 100 mots = E7 non conforme`;

function LivrableApp() {
  const cfg = window.PASS_CONFIG;
  const COMPETENCES = cfg ? cfg.competences : [];
  const GABARITS = cfg ? cfg.gabarits : {};

  const TABS = [...COMPETENCES.map(c => c.code), 'reflexive'];

  const [answers, setAnswers] = React.useState(() => {
    try {
      const saved = localStorage.getItem('lumio_livrable_answers_bc5');
      return saved ? JSON.parse(saved) : Object.fromEntries([...COMPETENCES.map(c => [c.code, '']), ['reflexive', '']]);
    } catch { return Object.fromEntries([...COMPETENCES.map(c => [c.code, '']), ['reflexive', '']]); }
  });

  const [gabaritMode, setGabaritMode] = React.useState(null); // 'ROLES' | 'RISQUES'
  const [gabaritData, setGabaritData] = React.useState({ ROLES: {}, RISQUES: {} });
  const [activeTab, setActiveTab] = React.useState(COMPETENCES[0]?.code || 'C.20-II');
  const [phase, setPhase] = React.useState('edit');
  const [juryFeedback, setJuryFeedback] = React.useState('');
  const [submitting, setSubmitting] = React.useState(false);
  const [portfolioSent, setPortfolioSent] = React.useState(false);
  const scrollRef = React.useRef(null);

  const setAnswer = (code, val) => {
    const next = { ...answers, [code]: val };
    setAnswers(next);
    try { localStorage.setItem('lumio_livrable_answers_bc5', JSON.stringify(next)); } catch {}
  };

  const totalWords = COMPETENCES.reduce((s, c) => s + wc(answers[c.code]), 0);
  const reflexiveWords = wc(answers['reflexive']);
  const activeComp = COMPETENCES.find(c => c.code === activeTab);
  const isReflexive = activeTab === 'reflexive';

  const getTabColor = (code) => {
    if (code === 'reflexive') return '#5c2d8f';
    const map = { 'C.20-II': '#1b4f8a', 'C.21-II': '#c4420f', 'C.22-II': '#1a6641' };
    return map[code] || '#134547';
  };
  const activeColor = getTabColor(activeTab);

  const wcComp = (code) => wc(answers[code]);
  const minComp = (code) => {
    const c = COMPETENCES.find(x => x.code === code);
    return c ? c.min : 80;
  };

  const injectGabarit = (key) => {
    const gab = GABARITS[key];
    if (!gab) return;
    const lines = gab.structure.map(row => {
      const val = (gabaritData[key] || {})[row.cle] || '';
      return `**${row.label}**\n${val || '[À compléter]'}`;
    });
    const block = `\n\n— ${gab.label} —\n\n${lines.join('\n\n')}\n`;
    setAnswer('C.21-II', (answers['C.21-II'] || '') + block);
    setGabaritMode(null);
  };

  const handleSubmit = async () => {
    if (totalWords < GLOBAL_MIN) return;
    if (reflexiveWords < 100) {
      alert('La note réflexive doit faire au moins 100 mots (E7 obligatoire).');
      setActiveTab('reflexive');
      return;
    }
    setSubmitting(true);
    setPhase('submitting');

    const livrableContent = COMPETENCES.map(c =>
      `### ${c.code} — ${c.label}\n${answers[c.code] || '(non renseigné)'}`
    ).join('\n\n') + `\n\n### Note réflexive E7\n${answers['reflexive'] || '(non renseignée)'}`;

    try {
      const resp = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'claude-sonnet-4-6',
          max_tokens: 1000,
          system: JURY_PROMPT,
          messages: [{ role: 'user', content: `Évalue cette contribution individuelle BC5 :\n\n${livrableContent}` }]
        })
      });
      const data = await resp.json();
      const feedback = Array.isArray(data.content) ? data.content[0]?.text : 'Retour jury indisponible.';
      setJuryFeedback(feedback);
      setPhase('done');

      // ── Complétion + envoi portfolio (best-effort, ne bloque pas l'UI) ──
      try {
        const _stu = (window.LUMIO_DATA && window.LUMIO_DATA.student) || {};
        const _bloc = (window.PAC_CONFIG && window.PAC_CONFIG.bloc) || 'bc5';
        if (_stu.email) {
          const _html = '<div style="font-family:sans-serif;max-width:680px;margin:auto">'
            + '<h1>Portfolio de compétences</h1>'
            + '<p><b>' + (_stu.name || '') + '</b> · PAC ' + _bloc + '</p>'
            + COMPETENCES.map(function(c){ return '<h3>' + c.code + ' — ' + c.label + '</h3>'
                + '<p style="white-space:pre-wrap">' + ((answersEnriched[c.code]) || '') + '</p>'; }).join('')
            + '<hr><h2>Retour du jury</h2><p style="white-space:pre-wrap">' + (result || '') + '</p></div>';
          fetch('/api/send-portfolio', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ to: _stu.email, studentName: _stu.name, bloc: _bloc, html: _html })
          }).catch(function(){ /* coche Redis best-effort, échec silencieux */ });
        }
      } catch (_) { /* no-op */ }
    } catch {
      setJuryFeedback('Le jury IA est temporairement indisponible. Votre contribution a été enregistrée.');
      setPhase('done');
    }
    setSubmitting(false);
  };

  // ── Phase done ───────────────────────────────────────────────
  if (phase === 'done') {
    const parseJuryResult = (text, code) => {
      const re = new RegExp(`###\\s*${code.replace('.', '\\.')}[\\s\\S]*?\\[(Satisfaisant|Insuffisant|Absent)\\]`, 'i');
      const m = text.match(re);
      return m ? m[1] : null;
    };
    const globalRe = /##\s*Niveau de conformité global[\s\S]*?\*\*\[([^\]]+)\]\*\*/i;
    const globalMatch = juryFeedback.match(globalRe);
    const globalVerdict = globalMatch ? globalMatch[1] : null;

    const verdictColor = (v) => {
      if (!v) return '#888';
      if (v.toLowerCase().includes('distinction')) return '#1a6641';
      if (v.toLowerCase().includes('conforme') && !v.toLowerCase().includes('non') && !v.toLowerCase().includes('partiellement')) return '#1b4f8a';
      if (v.toLowerCase().includes('partiellement')) return '#c4420f';
      return '#8b1a1a';
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#f4f2ee', fontFamily: 'var(--font-sans)' }}>
        <div style={{ padding: '20px 24px', borderBottom: '1px solid rgba(20,24,36,0.08)', background: 'white', display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.2em', color: '#c4420f', textTransform: 'uppercase' }}>PAC · BC5 · E7</div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 16, fontWeight: 600, color: '#141824' }}>Retour du jury certifiant</div>
        </div>

        <div style={{ flex: 1, overflowY: 'auto', padding: '24px' }}>
          {globalVerdict && (
            <div style={{ background: verdictColor(globalVerdict), color: 'white', borderRadius: 10, padding: '16px 20px', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ fontSize: 22 }}>{ globalVerdict.toLowerCase().includes('distinction') ? '★' : globalVerdict.toLowerCase().includes('non') ? '✗' : '✓' }</div>
              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.15em', opacity: 0.85, marginBottom: 2 }}>VERDICT GLOBAL</div>
                <div style={{ fontWeight: 600, fontSize: 15 }}>{globalVerdict}</div>
              </div>
            </div>
          )}

          <div style={{ background: 'white', borderRadius: 10, padding: '20px 24px', marginBottom: 16, border: '1px solid rgba(20,24,36,0.08)' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.15em', color: '#5b6473', marginBottom: 12, textTransform: 'uppercase' }}>Évaluation par compétence</div>
            {[...COMPETENCES.map(c => c.code), 'Note réflexive'].map(code => {
              const result = parseJuryResult(juryFeedback, code);
              const color = result === 'Satisfaisant' ? '#1a6641' : result === 'Absent' ? '#8b1a1a' : '#c4420f';
              return (
                <div key={code} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 700, color: getTabColor(code === 'Note réflexive' ? 'reflexive' : code), minWidth: 80 }}>{code}</div>
                  {result && <div style={{ background: color, color: 'white', borderRadius: 4, padding: '2px 8px', fontSize: 10, fontWeight: 700, letterSpacing: '0.08em' }}>{result}</div>}
                </div>
              );
            })}
          </div>

          <div style={{ background: 'white', borderRadius: 10, padding: '20px 24px', border: '1px solid rgba(20,24,36,0.08)', whiteSpace: 'pre-wrap', fontSize: 13, lineHeight: 1.8, color: '#2a3142', fontFamily: 'var(--font-display)' }}>
            {juryFeedback}
          </div>

          {!portfolioSent && (
            <button
              onClick={() => setPortfolioSent(true)}
              style={{ marginTop: 20, width: '100%', padding: '14px', background: '#134547', color: 'white', border: 'none', borderRadius: 8, fontSize: 13, fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit' }}>
              Envoyer au portfolio Éminéo →
            </button>
          )}
          {portfolioSent && (
            <div style={{ marginTop: 20, background: '#E3FFF0', border: '1px solid #5DE298', borderRadius: 8, padding: '14px', textAlign: 'center', fontSize: 13, color: '#134547', fontWeight: 600 }}>
              ✓ Contribution et feedback envoyés dans votre portfolio Éminéo
            </div>
          )}
        </div>
      </div>
    );
  }

  // ── Phase edit ───────────────────────────────────────────────
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', fontFamily: 'var(--font-sans)', background: '#f4f2ee' }}>

      {/* Header */}
      <div style={{ padding: '10px 16px', borderBottom: '1px solid rgba(20,24,36,0.08)', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexShrink: 0 }}>
        <div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.2em', color: '#c4420f', textTransform: 'uppercase' }}>PAC · BC5 · E7</div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 13, fontWeight: 600, color: '#141824' }}>Contribution individuelle — Transformation IA Gen</div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: totalWords >= GLOBAL_MIN ? '#1a6641' : '#c4420f', fontWeight: 700 }}>
            {totalWords} / {GLOBAL_MIN} mots
          </div>
          <div style={{ fontSize: 10, color: '#9aa0ae' }}>minimum global</div>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ display: 'flex', borderBottom: '1px solid rgba(20,24,36,0.08)', background: 'white', overflowX: 'auto', flexShrink: 0 }}>
        {TABS.map(code => {
          const isActive = activeTab === code;
          const label = code === 'reflexive' ? '✦ Réflexive' : code;
          const comp = COMPETENCES.find(c => c.code === code);
          const words = wc(answers[code]);
          const min = code === 'reflexive' ? 100 : (comp?.min || 80);
          const ok = words >= min;
          const color = getTabColor(code);
          return (
            <button key={code} onClick={() => setActiveTab(code)} style={{
              padding: '8px 14px', border: 'none', background: 'transparent',
              borderBottom: isActive ? `2px solid ${color}` : '2px solid transparent',
              color: isActive ? color : '#5b6473', fontWeight: isActive ? 700 : 400,
              fontFamily: 'var(--font-mono)', fontSize: 10, cursor: 'pointer',
              letterSpacing: '0.08em', whiteSpace: 'nowrap', transition: 'all 0.15s'
            }}>
              {label} {ok ? '✓' : `${words}/${min}`}
            </button>
          );
        })}
      </div>

      {/* Body */}
      <div style={{ flex: 1, display: 'flex', overflow: 'hidden', minHeight: 0 }}>

        {/* Zone de rédaction */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden', background: 'white' }}>

          {/* Sous-header compétence */}
          {!isReflexive && activeComp && (
            <div style={{ padding: '10px 16px', borderBottom: '1px solid rgba(20,24,36,0.06)', background: '#fafaf8' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: activeColor, letterSpacing: '0.12em', fontWeight: 700 }}>
                {activeComp.code} · {activeComp.label.toUpperCase()}
              </div>
              <div style={{ fontSize: 11, color: '#5b6473', marginTop: 3, display: 'flex', alignItems: 'center', gap: 8 }}>
                <span>{wcComp(activeComp.code)} / {minComp(activeComp.code)} mots min.</span>
                {activeComp.conseil && <span style={{ color: '#9aa0ae' }}>— {activeComp.conseil}</span>}
              </div>

              {/* Boutons gabarits pour C.21-II */}
              {activeTab === 'C.21-II' && (
                <div style={{ marginTop: 8, display: 'flex', gap: 6 }}>
                  {Object.entries(GABARITS).map(([key, gab]) => (
                    <button key={key} onClick={() => setGabaritMode(gabaritMode === key ? null : key)} style={{
                      padding: '4px 10px', fontSize: 10, fontFamily: 'var(--font-mono)', letterSpacing: '0.08em',
                      background: gabaritMode === key ? activeColor : 'transparent',
                      color: gabaritMode === key ? 'white' : activeColor,
                      border: `1px solid ${activeColor}`, borderRadius: 4, cursor: 'pointer'
                    }}>
                      + {gab.label}
                    </button>
                  ))}
                </div>
              )}

              {/* Gabarit ouvert */}
              {gabaritMode && activeTab === 'C.21-II' && (
                <div style={{ marginTop: 10, background: '#f4f2ee', borderRadius: 6, padding: '12px 14px', border: '1px solid rgba(20,24,36,0.08)' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: activeColor, fontWeight: 700, marginBottom: 10, letterSpacing: '0.1em' }}>
                    {GABARITS[gabaritMode]?.label}
                  </div>
                  {GABARITS[gabaritMode]?.structure.map(row => (
                    <div key={row.cle} style={{ marginBottom: 8 }}>
                      <div style={{ fontSize: 11, fontWeight: 600, color: '#2a3142', marginBottom: 3 }}>{row.label}</div>
                      <textarea
                        value={(gabaritData[gabaritMode] || {})[row.cle] || ''}
                        onChange={e => setGabaritData(prev => ({ ...prev, [gabaritMode]: { ...(prev[gabaritMode] || {}), [row.cle]: e.target.value } }))}
                        placeholder={row.placeholder}
                        rows={2}
                        style={{ width: '100%', fontSize: 11, fontFamily: 'var(--font-display)', lineHeight: 1.5, padding: '6px 8px', border: '1px solid rgba(20,24,36,0.15)', borderRadius: 4, resize: 'vertical', background: 'white', color: '#141824' }}
                      />
                    </div>
                  ))}
                  <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
                    <button onClick={() => injectGabarit(gabaritMode)} style={{ padding: '6px 14px', background: activeColor, color: 'white', border: 'none', borderRadius: 5, fontSize: 11, fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit' }}>
                      Injecter dans C.21-II →
                    </button>
                    <button onClick={() => setGabaritMode(null)} style={{ padding: '6px 14px', background: 'transparent', color: '#5b6473', border: '1px solid rgba(20,24,36,0.15)', borderRadius: 5, fontSize: 11, cursor: 'pointer', fontFamily: 'inherit' }}>
                      Annuler
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {isReflexive && (
            <div style={{ padding: '10px 16px', borderBottom: '1px solid rgba(20,24,36,0.06)', background: '#fafaf8' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: '#5c2d8f', letterSpacing: '0.12em', fontWeight: 700 }}>NOTE RÉFLEXIVE · E7 · OBLIGATOIRE</div>
              <div style={{ fontSize: 11, color: '#5b6473', marginTop: 3 }}>
                {reflexiveWords} / 100 mots min. — Retour sur vos choix d'innovation et d'accompagnement. Ce que vous auriez fait différemment. Ce que ce projet révèle de votre posture professionnelle face à l'IA.
              </div>
            </div>
          )}

          <textarea
            ref={scrollRef}
            value={answers[activeTab] || ''}
            onChange={e => setAnswer(activeTab, e.target.value)}
            placeholder={isReflexive
              ? 'Revenez sur vos choix. Qu\'est-ce que cette affaire a révélé de votre façon d\'aborder l\'innovation ? Qu\'auriez-vous fait différemment ? Sur quelle compétence avez-vous le plus progressé ? (min. 100 mots)'
              : (activeComp?.placeholder || '')}
            style={{
              flex: 1, width: '100%', border: 'none', outline: 'none',
              padding: '16px 18px', fontSize: 13.5,
              fontFamily: 'var(--font-display)', lineHeight: 1.75,
              color: '#141824', resize: 'none', background: 'white', minHeight: 0
            }}
          />
        </div>

        {/* Colonne droite — référentiel */}
        <div style={{ width: 220, background: '#f4f2ee', overflowY: 'auto', padding: '14px 16px', display: 'flex', flexDirection: 'column', gap: 14, borderLeft: '1px solid rgba(20,24,36,0.08)', flexShrink: 0 }}>

          {!isReflexive && activeComp && (
            <>
              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: activeColor, fontWeight: 700, marginBottom: 6 }}>
                  {activeComp.code} · Attendu RNCP
                </div>
                <div style={{ fontSize: 11.5, color: '#2a3142', lineHeight: 1.65 }}>{activeComp.rncp}</div>
              </div>

              {activeComp.motsCles && (
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.14em', color: '#9aa0ae', textTransform: 'uppercase', marginBottom: 6 }}>Mots-clés attendus</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                    {activeComp.motsCles.map(m => (
                      <span key={m} style={{ background: 'rgba(20,24,36,0.06)', borderRadius: 3, padding: '2px 6px', fontSize: 10, color: '#5b6473', fontFamily: 'var(--font-mono)' }}>{m}</span>
                    ))}
                  </div>
                </div>
              )}

              <div style={{ background: 'white', borderRadius: 6, padding: '10px 12px', border: `1px solid ${activeColor}22` }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.14em', color: activeColor, textTransform: 'uppercase', marginBottom: 5, fontWeight: 700 }}>Conseil jury</div>
                <div style={{ fontSize: 11, color: '#2a3142', lineHeight: 1.6 }}>{activeComp.conseil}</div>
              </div>
            </>
          )}

          {isReflexive && (
            <div style={{ background: 'white', borderRadius: 6, padding: '10px 12px', border: '1px solid rgba(92,45,143,0.2)' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.14em', color: '#5c2d8f', textTransform: 'uppercase', marginBottom: 5, fontWeight: 700 }}>Consigne E7</div>
              <div style={{ fontSize: 11, color: '#2a3142', lineHeight: 1.6 }}>
                La note réflexive est évaluée par le jury au même titre que les compétences. Elle doit montrer votre capacité à prendre du recul sur vos propres choix professionnels.
              </div>
            </div>
          )}

          {/* Avancement global */}
          <div style={{ marginTop: 'auto' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.12em', color: '#9aa0ae', textTransform: 'uppercase', marginBottom: 8 }}>Avancement</div>
            {COMPETENCES.map(c => {
              const words = wcComp(c.code);
              const min = c.min;
              const pct = Math.min(100, Math.round(words / min * 100));
              const col = getTabColor(c.code);
              return (
                <div key={c.code} style={{ marginBottom: 6 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: col, fontWeight: 700 }}>{c.code}</span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: '#9aa0ae' }}>{words}/{min}</span>
                  </div>
                  <div style={{ height: 4, background: 'rgba(20,24,36,0.08)', borderRadius: 2 }}>
                    <div style={{ height: '100%', width: `${pct}%`, background: pct >= 100 ? col : '#e8e4de', borderRadius: 2, transition: 'width 0.3s' }} />
                  </div>
                </div>
              );
            })}
            <div style={{ marginTop: 8 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: '#5c2d8f', fontWeight: 700 }}>Réflexive</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: '#9aa0ae' }}>{reflexiveWords}/100</span>
              </div>
              <div style={{ height: 4, background: 'rgba(20,24,36,0.08)', borderRadius: 2 }}>
                <div style={{ height: '100%', width: `${Math.min(100, Math.round(reflexiveWords / 100 * 100))}%`, background: reflexiveWords >= 100 ? '#5c2d8f' : '#e8e4de', borderRadius: 2, transition: 'width 0.3s' }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer — Soumettre */}
      <div style={{ padding: '12px 16px', borderTop: '1px solid rgba(20,24,36,0.08)', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexShrink: 0 }}>
        <div style={{ fontSize: 11, color: totalWords >= GLOBAL_MIN ? '#1a6641' : '#c4420f' }}>
          {totalWords >= GLOBAL_MIN
            ? `✓ ${totalWords} mots — seuil atteint`
            : `${GLOBAL_MIN - totalWords} mots manquants avant soumission`}
        </div>
        <button
          onClick={handleSubmit}
          disabled={submitting || totalWords < GLOBAL_MIN}
          style={{
            padding: '8px 20px', background: totalWords >= GLOBAL_MIN ? '#134547' : '#ccc',
            color: 'white', border: 'none', borderRadius: 6, fontSize: 12,
            fontWeight: 700, cursor: totalWords >= GLOBAL_MIN ? 'pointer' : 'not-allowed',
            fontFamily: 'inherit', letterSpacing: '0.04em'
          }}>
          {submitting ? 'Évaluation en cours…' : 'Soumettre au jury →'}
        </button>
      </div>
    </div>
  );
}
