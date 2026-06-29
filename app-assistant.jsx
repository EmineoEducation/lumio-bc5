// ══════════════════════════════════════════════════════════════
//  JEFFERSON — Guide procédural PAC BC5
//  Projet IA Gen · Quand l'outil devient le problème
//  Charte Éminéo : #0B2B2D #5DE298 #E3FFF0 #E89B77
//  Posture : dit quoi faire, quand, avec quel outil
// ══════════════════════════════════════════════════════════════
const { useState: useJState, useEffect: useJEffect, useRef: useJRef } = React;

function buildJeffersonPrompt(studentName, elapsedMin) {
  const prenom = (studentName || '').split(' ')[0] || 'vous';
  const timeLeft = Math.max(0, 210 - elapsedMin);

  let phase, objectifPhase, toolsPhase, nextAction;

  if (elapsedMin < 20) {
    phase = 'Acte 1 — Ancrage terrain (0–20 min)';
    objectifPhase = 'Entrer dans l\'univers. Comprendre le contexte post-MDR de Lumio et le projet IA Gen lancé par Sonia. Identifier les acteurs. Pas de production encore — observation.';
    toolsPhase = 'Mail (brief Sonia), Finder > Fiche contexte Lumio, Finder > Portraits (Sonia / Yassine / Théo / Camille), Slack (messages Sonia)';
    nextAction = 'Ouvrir Mail en premier. Lire le brief de Sonia entièrement. Puis ouvrir Slack — deux messages de Sonia vous attendent.';
  } else if (elapsedMin < 50) {
    phase = 'Acte 2 — Entrée dans l\'affaire (20–50 min)';
    objectifPhase = 'Les signaux d\'alerte se précisent. Trois problèmes concrets à identifier : incident RGPD DataViz Studio, risque PI visuel Léa Ferron, résistance commerciale B2B.';
    toolsPhase = 'PDF Viewer (rapport incident DataViz Studio — confidentiel), Mail (email Théo sur les risques juridiques), Navigateur (veille Yassine Maddyness + article Les Stratégies EU AI Act), Mémos vocaux (Camille Ott — résistance commerciale)';
    nextAction = 'Ouvrir PDF Viewer. Lire le rapport d\'incident DataViz Studio en premier — c\'est le document le plus factuel et le plus compromettant. Puis l\'email de Théo dans Mail.';
  } else if (elapsedMin < 95) {
    phase = 'Acte 3 — Diagnostic (50–95 min)';
    objectifPhase = 'Construire votre analyse sur Slack avec Sonia. Elle teste vos hypothèses. 2 échanges débloquent l\'app Livrable. Consultez aussi les notes CODIR dans Notes.';
    toolsPhase = 'Slack (DM Sonia Ferracci — prioritaire, aussi Yassine et Théo disponibles), Notes (compte-rendu CODIR 14 avril)';
    nextAction = 'Ouvrir Slack. Écrire à Sonia votre premier diagnostic : quels sont les facteurs de rupture IA Gen pour Lumio, et quelle est votre position sur le go/no-go ? Soyez direct — elle attend une position, pas une analyse de contexte.';
  } else if (elapsedMin < 175) {
    phase = 'Acte 4 — Production (95–175 min)';
    objectifPhase = 'Rédiger la contribution individuelle BC5. 3 compétences RNCP (C.20-II, C.21-II, C.22-II). C.21-II est la plus exigeante — utilisez les deux gabarits disponibles.';
    toolsPhase = 'App Livrable (débloquée après 2 échanges Slack) — onglets C.20-II, C.21-II, C.22-II, Note réflexive. Gabarits disponibles dans C.21-II : Rôles/Responsabilités + Plan de risques.';
    nextAction = 'Ouvrir l\'app Livrable dans le dock. Commencer par C.20-II (facteurs de rupture) — c\'est la base de tout. Puis C.21-II avec les gabarits. C.22-II en dernier (accompagnement du changement).';
  } else {
    phase = 'Acte 5 — Réflexion (175–210 min)';
    objectifPhase = 'Note réflexive E7 obligatoire — minimum 100 mots. Retour sur vos choix. Ce que vous auriez fait différemment. Soumettre avant la fin du timer.';
    toolsPhase = 'App Livrable (onglet Réflexive + bouton Soumettre)';
    nextAction = 'Ouvrir l\'onglet "Réflexive" dans le Livrable. Écrire 100 mots minimum sur ce que cette affaire vous a appris. Puis soumettre — ne laissez pas le timer expirer sans avoir soumis.';
  }

  return `Tu es Jefferson — le compagnon guide du PAC (Parcours d'Activation des Compétences) d'Éminéo, BC5 — Engager l'innovation et la transformation digitale de la communication de la marque.

Tu es un lapin avec une montre. Tu sais toujours où on en est. Tu dis exactement quoi faire, avec quel outil, dans quel ordre. Tu ne poses pas de questions philosophiques. Tu guides.

CONTEXTE SESSION BC5 — Projet IA Gen, Lumio Health :
- Étudiant·e : ${prenom}
- Temps écoulé : ${elapsedMin} min sur 210 min
- Temps restant : ${timeLeft} min
- Phase actuelle : ${phase}
- Mission : produire la contribution individuelle E7 sur l'intégration IA Gen chez Lumio

OBJECTIF DE CETTE PHASE :
${objectifPhase}

OUTILS À UTILISER MAINTENANT :
${toolsPhase}

PROCHAINE ACTION CONCRÈTE :
${nextAction}

TENSIONS CLÉS DU CAS BC5 :
- Incident RGPD : DataViz Studio a aspiré des données clients Lumio sans autorisation — contrat signé par Yassine seul
- Incident PI : un visuel généré reproduit le style de Léa Ferron (agence Mirage) — risque de litige
- EU AI Act : entrée en application le 2 mai 2027 — Lumio potentiellement classé "système haut risque"
- Résistance B2B : l'équipe commerciale refuse les contenus IA Gen — 3 DRH clients ont exprimé des réserves
- Théo prépare un email à Jakob Rein sur les risques juridiques SANS passer par Sonia
- Sonia minimise les alertes et attend une proposition qui dit OUI à l'IA Gen

COMPÉTENCES C.20-II À C.22-II (livrable) :
- C.20-II : Identifier les facteurs de rupture IA Gen (anchrage dans le contexte Lumio obligatoire)
- C.21-II : Déterminer les innovations à implémenter — TROIS dimensions obligatoires : rôles/directions formalisés + risques avec indicateurs de contrôle + KPI d'impact
- C.22-II : Conduire le changement — stratégies différenciées selon les profils de résistance (commercial B2B ≠ direction)
- Note réflexive E7 : 100 mots minimum — obligatoire pour la conformité E7

ERREURS À ÉVITER :
- C.20-II : ne pas lister des facteurs IA génériques sans lien avec Lumio — le jury ne les évalue pas
- C.21-II : ne pas écrire "impliquer le juridique" sans préciser son rôle exact et sa responsabilité de validation
- C.21-II : ne pas lister des risques sans indicateur de suivi — un risque sans métrique n'est pas géré
- C.22-II : ne pas proposer un plan unique pour tous — distinguer au moins deux profils de résistance

RÈGLES JEFFERSON :
- Réponses courtes et directes — 3 à 5 lignes maximum
- Toujours terminer par une action concrète avec l'outil exact à ouvrir
- Jamais de "peut-être" ou "vous pourriez" — le guide dit ce qu'il faut faire
- Si l'étudiant·e hésite entre deux options, donner la réponse, pas la question`;
}

function getElapsedMin() {
  try {
    const start = parseInt(sessionStorage.getItem('pac_start_time') || localStorage.getItem('pac_start_time') || '0');
    if (!start) return 0;
    return Math.floor((Date.now() - start) / 60000);
  } catch { return 0; }
}

function getPhaseIndex(elapsed) {
  if (elapsed < 20) return 0;
  if (elapsed < 50) return 1;
  if (elapsed < 95) return 2;
  if (elapsed < 175) return 3;
  return 4;
}

function now() {
  return new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
}

// ─── Composant Jefferson ──────────────────────────────────────
function JeffersonApp() {
  const [messages, setMessages] = useJState([]);
  const [draft, setDraft] = useJState('');
  const [sending, setSending] = useJState(false);
  const [open, setOpen] = useJState(false);
  const [unread, setUnread] = useJState(0);
  const scrollRef = useJRef(null);
  const inputRef = useJRef(null);

  // Init
  useJEffect(() => {
    try {
      const saved = sessionStorage.getItem('pac_jefferson_history');
      if (saved) { setMessages(JSON.parse(saved)); return; }
    } catch {}

    const elapsed = getElapsedMin();
    const studentName = window.LUMIO_DATA?.student?.name || '';
    const prenom = (studentName || '').split(' ')[0] || '';

    if (elapsed === 0) {
      setMessages([{ role: 'assistant', text: `Je suis Jefferson — votre guide PAC.\n\nLe timer n'a pas encore démarré. Cliquez sur "Commencer l'affaire" dans le brief pour lancer la session. Je serai là dès que vous entrez sur le bureau.`, time: now() }]);
      return;
    }

    const phase = getPhaseIndex(elapsed);
    const welcomeTexts = [
      `Bonjour ${prenom}. Je suis Jefferson — votre guide.\n\nCommencez par ouvrir Mail. Le brief de Sonia Ferracci est là. Lisez-le entièrement avant de faire quoi que ce soit d'autre.`,
      `Vous êtes en Acte 2. Les signaux d'alerte du projet IA Gen se précisent.\n\nAvez-vous lu le rapport d'incident DataViz Studio dans PDF Viewer ? Et l'email de Théo dans Mail ?\n\nSi oui : passez aux Mémos vocaux — Camille Ott a quelque chose d'important à vous dire.`,
      `Acte 3 — il faut construire votre diagnostic sur Slack avec Sonia.\n\nOuvrez Slack. Écrivez-lui votre première analyse des facteurs de rupture IA Gen. Soyez direct — elle attend une position, pas un résumé des documents.`,
      `Acte 4 — l'app Livrable vous attend.\n\nOuvrez-la dans le dock. Commencez par C.20-II. Pour C.21-II : utilisez les deux gabarits disponibles (Rôles/Responsabilités et Plan de risques). Ne les ignorez pas — le jury vérifie ces deux dimensions explicitement.`,
      `Acte 5 — relecture et note réflexive.\n\nOuvrez l'onglet Réflexive dans le Livrable. 100 mots minimum — obligatoire pour E7. Puis soumettre avant la fin du timer.`
    ];
    setMessages([{ role: 'assistant', text: welcomeTexts[phase], time: now() }]);
  }, []);

  useJEffect(() => {
    try { sessionStorage.setItem('pac_jefferson_history', JSON.stringify(messages)); } catch {}
  }, [messages]);

  useJEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, sending]);

  useJEffect(() => {
    if (!open && messages.length > 0) {
      const last = messages[messages.length - 1];
      if (last.role === 'assistant') setUnread(u => u + 1);
    }
  }, [messages]);

  useJEffect(() => {
    if (open) { setUnread(0); if (inputRef.current) inputRef.current.focus(); }
  }, [open]);

  const send = async (text) => {
    const msg = (text || draft).trim();
    if (!msg || sending) return;
    setDraft('');
    const userMsg = { role: 'user', text: msg, time: now() };
    const next = [...messages, userMsg];
    setMessages(next);
    setSending(true);

    try {
      const apiHistory = next.map(m => ({ role: m.role, content: m.text }));
      const studentName = window.LUMIO_DATA?.student?.name || '';
      const elapsed = getElapsedMin();

      const resp = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'claude-sonnet-4-6',
          max_tokens: 300,
          system: buildJeffersonPrompt(studentName, elapsed),
          messages: apiHistory
        })
      });
      if (!resp.ok) throw new Error('API ' + resp.status);
      const data = await resp.json();
      const reply = (Array.isArray(data.content) && data.content[0]?.text)
        ? data.content[0].text
        : 'Jefferson ne peut pas répondre — l\'API est indisponible. Réessayez.';
      setMessages(h => [...h, { role: 'assistant', text: reply, time: now() }]);
    } catch (err) {
      setMessages(h => [...h, { role: 'assistant', text: 'Connexion impossible. Réessayez dans quelques secondes.', time: now() }]);
    }
    setSending(false);
  };

  const quickActions = [
    { label: 'Où j\'en suis ?', action: () => send('Où j\'en suis dans la session ?') },
    { label: 'Quoi faire maintenant ?', action: () => send('Que dois-je faire maintenant ?') },
    { label: 'C.21-II — aide', action: () => send('Comment aborder C.21-II ? Je ne sais pas par où commencer.') },
    { label: 'Tensions du cas', action: () => send('Rappelle-moi les tensions clés du cas que je dois traiter.') }
  ];

  // ── Rendu dock + fenêtre ──────────────────────────────────────
  return (
    <>
      {/* Icône dock */}
      <div
        onClick={() => setOpen(o => !o)}
        style={{
          width: 52, height: 52, borderRadius: 14,
          background: 'linear-gradient(145deg, #0B2B2D, #134547)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          cursor: 'pointer', position: 'relative', flexShrink: 0,
          boxShadow: open ? '0 0 0 2px #5DE298' : '0 2px 8px rgba(0,0,0,0.3)',
          transition: 'box-shadow 0.2s'
        }}
        title="Jefferson — Guide PAC"
      >
        {/* Lapin SVG */}
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          {/* Oreilles */}
          <ellipse cx="11" cy="9" rx="3.5" ry="7" fill="#5DE298" opacity="0.9"/>
          <ellipse cx="21" cy="9" rx="3.5" ry="7" fill="#5DE298" opacity="0.9"/>
          <ellipse cx="11" cy="9" rx="2" ry="5" fill="#E89B77" opacity="0.7"/>
          <ellipse cx="21" cy="9" rx="2" ry="5" fill="#E89B77" opacity="0.7"/>
          {/* Corps */}
          <ellipse cx="16" cy="22" rx="9" ry="8" fill="#5DE298"/>
          {/* Tête */}
          <circle cx="16" cy="16" r="7" fill="#5DE298"/>
          {/* Yeux */}
          <circle cx="13.5" cy="15" r="1.5" fill="#0B2B2D"/>
          <circle cx="18.5" cy="15" r="1.5" fill="#0B2B2D"/>
          <circle cx="14" cy="14.5" r="0.5" fill="white"/>
          <circle cx="19" cy="14.5" r="0.5" fill="white"/>
          {/* Nez */}
          <ellipse cx="16" cy="17.5" rx="1" ry="0.7" fill="#E89B77"/>
          {/* Montre discrète */}
          <rect x="8" y="24" width="5" height="3" rx="1" fill="#134547" opacity="0.8"/>
          <rect x="9" y="24.5" width="3" height="2" rx="0.5" fill="#5DE298" opacity="0.6"/>
        </svg>
        {/* Badge unread */}
        {unread > 0 && (
          <div style={{
            position: 'absolute', top: -4, right: -4,
            background: '#c4420f', color: 'white',
            borderRadius: '50%', width: 18, height: 18,
            fontSize: 10, fontWeight: 700, display: 'flex',
            alignItems: 'center', justifyContent: 'center',
            fontFamily: 'var(--font-mono)'
          }}>{unread}</div>
        )}
      </div>

      {/* Fenêtre Jefferson */}
      {open && (
        <div style={{
          position: 'fixed', bottom: 80, right: 16, width: 320, height: 440,
          background: 'white', borderRadius: 14, zIndex: 9000,
          boxShadow: '0 8px 40px rgba(0,0,0,0.25)',
          display: 'flex', flexDirection: 'column', overflow: 'hidden',
          border: '1px solid rgba(20,24,36,0.1)'
        }}>
          {/* Header Jefferson */}
          <div style={{
            background: 'linear-gradient(135deg, #0B2B2D, #134547)',
            padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 10
          }}>
            <div style={{ fontSize: 22 }}>🐇</div>
            <div>
              <div style={{ color: '#5DE298', fontWeight: 700, fontSize: 13, fontFamily: 'var(--font-sans)' }}>Jefferson</div>
              <div style={{ color: 'rgba(227,255,240,0.7)', fontSize: 10, fontFamily: 'var(--font-mono)' }}>Guide PAC · BC5</div>
            </div>
            <button onClick={() => setOpen(false)} style={{
              marginLeft: 'auto', background: 'rgba(255,255,255,0.1)',
              border: 'none', color: 'white', borderRadius: 6,
              width: 24, height: 24, cursor: 'pointer', fontSize: 12,
              display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}>✕</button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} style={{ flex: 1, overflowY: 'auto', padding: '12px', display: 'flex', flexDirection: 'column', gap: 8 }}>
            {messages.map((m, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: m.role === 'user' ? 'flex-end' : 'flex-start' }}>
                <div style={{
                  maxWidth: '85%', padding: '8px 12px', borderRadius: m.role === 'user' ? '12px 12px 2px 12px' : '12px 12px 12px 2px',
                  background: m.role === 'user' ? '#134547' : '#f4f2ee',
                  color: m.role === 'user' ? 'white' : '#141824',
                  fontSize: 12.5, lineHeight: 1.6, fontFamily: 'var(--font-sans)',
                  whiteSpace: 'pre-wrap'
                }}>{m.text}</div>
                {m.time && <div style={{ fontSize: 9, color: '#9aa0ae', marginTop: 2, fontFamily: 'var(--font-mono)' }}>{m.time}</div>}
              </div>
            ))}
            {sending && (
              <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                <div style={{ background: '#f4f2ee', borderRadius: '12px 12px 12px 2px', padding: '8px 12px' }}>
                  <span style={{ fontSize: 16, letterSpacing: 2 }}>···</span>
                </div>
              </div>
            )}
          </div>

          {/* Actions rapides */}
          <div style={{ padding: '6px 10px', borderTop: '1px solid rgba(20,24,36,0.06)', display: 'flex', flexWrap: 'wrap', gap: 4 }}>
            {quickActions.map((qa, i) => (
              <button key={i} onClick={qa.action} style={{
                padding: '3px 8px', fontSize: 10, fontFamily: 'var(--font-mono)',
                background: 'transparent', color: '#134547',
                border: '1px solid rgba(19,69,71,0.3)', borderRadius: 4,
                cursor: 'pointer', whiteSpace: 'nowrap'
              }}>{qa.label}</button>
            ))}
          </div>

          {/* Input */}
          <div style={{ padding: '8px 12px', borderTop: '1px solid rgba(20,24,36,0.08)', display: 'flex', gap: 6 }}>
            <input
              ref={inputRef}
              value={draft}
              onChange={e => setDraft(e.target.value)}
              onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(); } }}
              placeholder="Une question à Jefferson…"
              style={{
                flex: 1, padding: '7px 10px', fontSize: 12,
                border: '1px solid rgba(20,24,36,0.15)', borderRadius: 6,
                fontFamily: 'var(--font-sans)', outline: 'none', color: '#141824'
              }}
            />
            <button onClick={() => send()} disabled={!draft.trim() || sending} style={{
              padding: '7px 12px', background: '#134547', color: 'white',
              border: 'none', borderRadius: 6, cursor: draft.trim() ? 'pointer' : 'not-allowed',
              fontSize: 13, opacity: draft.trim() ? 1 : 0.5
            }}>↑</button>
          </div>
        </div>
      )}
    </>
  );
}
