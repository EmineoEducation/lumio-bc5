// ══════════════════════════════════════════════════════════════
//  DATA — Projet IA Gen · Quand l'outil devient le problème
//  PAC · Parcours Activation Compétences · Éminéo · MSMC RNCP 38504
//  BC5 · Avril 2027 · Engager l'innovation et la transformation digitale
// ══════════════════════════════════════════════════════════════

window.LUMIO_DATA = {

  // ─── Identité de l'étudiant·e ────────────────────────────────
  student: {
    name: "{{PRENOM}} {{NOM}}",
    role: "Consultant·e — Transformation digitale marcom",
    email: "{{EMAIL_ETUDIANT}}",
    company: "Mission externe Lumio Health"
  },

  // ─── Fiche contexte Lumio (Finder — dès le démarrage) ────────
  contexte: {
    title: "Fiche contexte — Lumio Health · Avril 2027",
    subtitle: "À lire en premier si vous découvrez l'univers",
    body: `QUI EST LUMIO HEALTH ?

Lumio Health est une medtech parisienne fondée en 2018 par Théo Marczak,
spécialisée dans la mesure du stress chronique en milieu professionnel.

Son produit phare : le Lumio Patch — un capteur physiologique porté au poignet
qui mesure variabilité cardiaque, conductance cutanée et température, traités
par un algorithme propriétaire pour produire un « score de stress » continu.

OÙ EN EST LUMIO EN AVRIL 2027 ?

Bonne nouvelle : la certification MDR (règlement européen sur les dispositifs
médicaux) a été obtenue en mars 2027 — un mois de retard sur le calendrier
prévu, mais c'est fait. Lumio peut désormais revendiquer légalement une fonction
médicale. L'accord Darty Santé (50 000 unités B2C) peut se concrétiser.

Mauvaise nouvelle : Sonia Ferracci a lancé en février un projet d'intégration
de l'IA générative dans la production de contenus marcom, sans attendre la MDR.
Trois semaines après le démarrage, des signaux sérieux remontent.

LES TROIS SIGNAUX D'ALERTE

1. RGPD — Le prestataire DataViz Studio a intégré des données clients Lumio
   dans son pipeline d'entraînement IA sans autorisation explicite. Le contrat
   signé par Yassine Morel contient une clause d'utilisation des données floue.

2. Propriété intellectuelle — Un visuel de campagne généré par IA reproduit
   partiellement le style caractéristique d'un photographe concurrent (Léa Ferron,
   agence Mirage). Risque de litige en cours d'évaluation.

3. Résistance interne — L'équipe commerciale B2B refuse d'utiliser des contenus
   générés par IA dans ses échanges clients. Trois DRH ont exprimé des réserves.

LES PERSONNAGES CLÉS EN AVRIL 2027

— Sonia Ferracci · Directrice Marketing
  Pilote le projet IA Gen. Convaincue de son potentiel. Minimise les alertes.
  Budget annuel : 380 000€ (partiellement validé depuis la MDR).

— Théo Marczak · CEO fondateur
  Pose les questions juridiques que personne ne veut entendre.
  A transmis 5 questions non résolues à Sonia par email.

— Yassine Morel · Content Manager
  Pilote opérationnel du projet. A signé le contrat DataViz Studio seul,
  sans validation juridique. Enthousiaste mais sous-dimensionné sur les risques.

— Camille Ott · Responsable partenariats B2B
  Relais terrain de la résistance commerciale. A co-signé une pétition interne
  (non officielle) demandant un moratoire IA Gen en B2B.

VOTRE MISSION

Sonia vous mandate pour produire la contribution individuelle BC5 :
une proposition structurée d'implémentation de l'IA générative, qui tient
compte des facteurs de rupture, anticipe les risques, formalise les rôles
de chaque direction et propose un plan d'accompagnement du changement.

Deadline : vendredi 25 avril 2027 · 18h00.`
  },

  // ─── Email de mission — Sonia → étudiant·e ───────────────────
  briefEmail: {
    from: "Sonia Ferracci <sonia.ferracci@lumio-health.com>",
    to: "{{EMAIL_ETUDIANT}}",
    subject: "Mission — Contribution individuelle Projet IA Gen · deadline vendredi",
    date: "Lundi 21 avril 2027, 08h17",
    body: `Bonjour,

Je vais être directe parce que le temps presse.

Le projet d'intégration IA Gen que j'ai lancé en février avance bien dans
l'ensemble — mais il y a quelques points sensibles à régler avant qu'on
présente ça au CODIR de fin avril.

Ce que je vous demande : produire la contribution individuelle BC5 attendue
dans le cadre de votre formation. Pas un audit, pas une liste de problèmes —
une proposition structurée d'implémentation. Quelque chose de défendable
devant Théo et devant Jakob si ça remonte au board.

Vous avez accès à tout ce qu'il vous faut sur votre espace :
le rapport d'incident Yassine (confidentiel — ne pas diffuser), les questions
juridiques de Théo (que je vous transmets par courtoisie, même si je pense
qu'il dramatise), les notes du CODIR du 14 avril, et la veille de Yassine
sur Maddyness.

Une chose à savoir : Théo a décidé de vous contacter directement.
Vous pouvez l'écouter — mais la commande reste la mienne.

Ce que j'attends vendredi : une proposition qui dit OUI à l'IA Gen,
avec des garde-fous sérieux et un plan de déploiement réaliste.
Pas un "peut-être si les conditions sont réunies".

Sonia Ferracci
Directrice Marketing — Lumio Health
+33 6 ▒▒ ▒▒ ▒▒ ▒▒`
  },

  // ─── Email Théo → Sonia (transmis à l'étudiant·e) ────────────
  theoEmail: {
    from: "Théo Marczak <theo@lumio-health.com>",
    to: "Sonia Ferracci <sonia.ferracci@lumio-health.com>",
    subject: "Re: Projet IA Gen — questions que personne ne pose",
    date: "Vendredi 18 avril 2027, 22h43",
    tag: "TRANSMIS PAR SONIA — usage restreint",
    body: `Sonia,

Je t'écris en dehors des réunions parce que je n'ai pas obtenu de réponses
dans les réunions.

Cinq questions que j'attends de voir traitées dans la contribution individuelle
qui nous sera remise vendredi. Si la personne ne les traite pas, je ne valide
pas la contribution au CODIR.

1. PROPRIÉTÉ DES OUTPUTS — Qui détient les droits sur les contenus générés ?
   Le contrat DataViz Studio dit "licence d'usage" — pas propriété pleine.
   Si Lumio n'est pas propriétaire des visuels, on ne peut pas les utiliser
   dans nos campagnes sans risque de litige.

2. RESPONSABILITÉ PI — Le visuel Léa Ferron. Même si la ressemblance est
   "partielle", en droit français le critère c'est l'originalité de l'œuvre
   reproduite, pas le pourcentage de similarité. Nos assureurs ont été informés ?

3. RGPD ET DONNÉES D'ENTRAÎNEMENT — Les données clients utilisées par DataViz
   Studio : nos DPO sont au courant ? Le registre de traitement a été mis à jour ?
   Si on fait l'objet d'un contrôle CNIL maintenant, on répond comment ?

4. EU AI ACT — L'acte entre en phase d'application en mai 2027. Les systèmes IA
   utilisés dans un contexte médical ou para-médical sont classés "haut risque".
   Notre DPO a évalué si Lumio Patch + IA Gen = système à haut risque ?

5. ASSUREURS — Notre police RC Pro couvre-t-elle les dommages issus d'un contenu
   généré par IA qui causerait un préjudice à un tiers ?

Je ne suis pas contre l'IA générative. Je suis contre déployer quelque chose
qu'on ne comprend pas encore pleinement sur le plan juridique.

Si la contribution répond à ces cinq questions, je serai le premier
à soutenir le projet au CODIR.

Théo

—
Théo Marczak · CEO — Lumio Health
+33 6 ▒▒ ▒▒ ▒▒ ▒▒`
  },

  // ─── Rapport d'incident DataViz Studio (PDF Viewer) ──────────
  rapportIncident: {
    title: "Rapport d'incident — Prestataire DataViz Studio",
    subtitle: "CONFIDENTIEL — Ne pas diffuser hors équipe projet",
    date: "Rédigé par Yassine Morel · 15 avril 2027",
    warning: true,
    body: `OBJET : Utilisation non autorisée de données clients dans le pipeline IA

DATE DE DÉTECTION : 12 avril 2027
PRESTATAIRE CONCERNÉ : DataViz Studio (contrat signé le 3 février 2027)
RÉDACTEUR : Yassine Morel, Content Manager

─── DESCRIPTION DE L'INCIDENT ───────────────────────────────────────

Lors d'une réunion de suivi technique le 12 avril, l'équipe DataViz Studio
a mentionné — de façon incidente — qu'elle utilisait "les données de contexte
client fournies par Lumio" pour "améliorer la pertinence des outputs IA".

À la demande d'éclaircissement, il s'avère que DataViz Studio a intégré :
- Les fiches clients Lumio (secteur, taille, historique de contrat)
- Les verbatims DRH issus des enquêtes de satisfaction 2024-2026
- Les données NPS segmentées par secteur

dans le pipeline d'entraînement de son modèle de personnalisation.

─── ANALYSE CONTRACTUELLE ───────────────────────────────────────────

Le contrat signé le 3 février 2027 (signataire : Y. Morel) contient à
l'article 4.2 une clause stipulant que DataViz Studio peut utiliser
"les données fournies par le client à des fins d'optimisation du service".

Cette clause n'a pas été soumise à validation juridique avant signature.
Elle n'a pas non plus été signalée au DPO de Lumio Health.

─── RISQUES IDENTIFIÉS ──────────────────────────────────────────────

RGPD : Les données clients utilisées contiennent des informations nominatives
sur des personnes physiques (contacts DRH). Leur utilisation à des fins
d'entraînement IA constitue un traitement de données non déclaré.

CONTRACTUEL : Le contrat DataViz Studio ne prévoit pas de clause de
restitution ou destruction des données en fin de mission.

RÉPUTATIONNEL : Si un client Lumio apprend que ses données ont alimenté
un modèle IA tiers sans son consentement, impact potentiel sur la relation.

─── INCIDENT VISUEL PI ──────────────────────────────────────────────

Un visuel généré le 8 avril pour la campagne "Lumio B2C — Lancement grand
public" présente une composition et un traitement colorimétrique très proches
du style de Léa Ferron (agence Mirage), photographe connue dans le secteur
santé/bien-être. Léa Ferron a été informée par un confrère. Aucun contact
officiel à ce jour, mais le risque de mise en demeure est réel.

─── RECOMMANDATION IMMÉDIATE ────────────────────────────────────────

Suspendre l'utilisation des outputs DataViz Studio jusqu'à clarification
contractuelle et validation par le service juridique et le DPO.

Yassine Morel · Content Manager · Lumio Health`
  },

  // ─── Notes CODIR 14 avril (App Notes) ────────────────────────
  noteCodir: {
    title: "Notes CODIR — 14 avril 2027",
    subtitle: "Projet IA Gen · Usage interne strict",
    body: `PRÉSENTS : Théo Marczak (CEO), Sonia Ferracci (Marketing),
Camille Ott (Commercial), Yassine Morel (invité ponctuel)

ORDRE DU JOUR : Point d'avancement Projet IA Gen

─────────────────────────────────────────────────────

SONIA FERRACCI
Présente les premiers outputs du projet : 47 visuels générés,
3 séries de textes campaigns B2C, 1 prototype de personnalisation
email par segment cible. Résultats de production encourageants :
gain de temps estimé à 60% sur la production visuelle.

Reconnaît l'"incident DataViz" mais estime que "c'est contractuellement
gérable" et que "ça ne remet pas en question la direction du projet".

Demande une validation de principe pour continuer jusqu'au lancement B2C.

─────────────────────────────────────────────────────

THÉO MARCZAK
Refuse de valider sans réponse aux 5 questions juridiques qu'il a
transmises par email. Mentionne l'EU AI Act (mai 2027) et le risque
de classification "système haut risque" pour Lumio.

Demande un audit juridique complet avant toute communication externe
utilisant des contenus IA Gen.

Position : "On ne peut pas lancer une campagne B2C avec des contenus
dont on ne maîtrise pas la propriété ni la conformité réglementaire."

─────────────────────────────────────────────────────

CAMILLE OTT
Demande que l'IA Gen soit cantonnée au B2C pour l'instant.
Le B2B ne doit pas être touché : "Nos clients DRH ont une relation
de confiance avec nos commerciaux. Un contenu généré par machine
dans ce contexte, c'est un signal de désengagement."

Mentionne 3 clients qui ont déjà exprimé des réserves verbalement.

─────────────────────────────────────────────────────

CONCLUSION (relevé de décisions)

Aucune décision formelle prise.
Suite à définir avant fin avril.
Une contribution externe est attendue pour objectiver la situation.`
  },

  // ─── Articles navigateur ──────────────────────────────────────
  browserArticles: [
    {
      url: "maddyness.fr/yassine-morel-lumio-ia-gen-2027",
      source: "Maddyness",
      date: "avril 2027",
      author: "par Yassine Morel, Content Manager Lumio Health",
      headline: "IA générative et marques medtech : l'avantage aux audacieux",
      lede: "Pendant que les directions juridiques temporisent, les concurrents avancent. Retour sur deux mois d'expérimentation IA Gen chez Lumio Health.",
      body: `Il y a deux mois, Lumio Health a décidé d'aller vite. Pas d'attendre le consensus, pas de comité de pilotage à n+3. Juste : on teste, on apprend, on ajuste.

Le résultat ? 47 visuels de campagne produits en 3 semaines. Zéro agence. Zéro brief de 12 pages. Un prompt bien construit, un modèle entraîné sur nos codes visuels, et des outputs qui tiennent la route.

Est-ce que tout est parfait ? Non. Est-ce qu'on a tout anticipé ? Clairement pas. Mais pendant qu'on teste, Biostream vient d'annoncer son partenariat avec MidJourney pour sa production visuelle grand public. Neuroflow déploie ChatGPT en interne pour ses équipes content. Le secteur bouge.

La vraie question pour une marque comme Lumio, c'est : à quel moment le "on attend d'être sûrs" devient-il du retard qu'on ne rattrapera pas ?

Sur le RGPD et la PI, je ne vais pas prétendre que c'est simple. Ça ne l'est pas. Mais la réponse ne peut pas être "on arrête". La réponse, c'est "on cadre mieux". Et c'est ce qu'on fait.

L'EU AI Act arrive en mai. Oui. Est-ce que Lumio est concernée au titre des systèmes "haut risque" ? Franchement, je ne sais pas. Ce que je sais, c'est qu'attendre la réponse de nos juristes pour lancer la moindre expérimentation IA, c'est s'assurer d'arriver en retard dans chaque cycle d'innovation.

Les marques qui gagnent en 2027, ce sont celles qui ont appris à courir avec des garde-fous — pas celles qui ont attendu que les garde-fous soient parfaits pour commencer à courir.`
    },
    {
      url: "lesstrat.fr/eu-ai-act-medtech-mai-2027",
      source: "Les Stratégies",
      date: "14 avril 2027",
      author: "par la rédaction",
      headline: "EU AI Act : ce que l'entrée en application de mai 2027 change pour les marques medtech",
      lede: "À J-45, beaucoup d'entreprises du secteur santé n'ont pas encore évalué si leurs outils IA tombent dans la catégorie 'haut risque'. Les conséquences peuvent être sévères.",
      body: `L'EU AI Act entre en phase d'application obligatoire le 2 mai 2027. Pour les entreprises du secteur médical et para-médical, la question n'est plus "quand ça arrive" mais "est-ce qu'on est prêts".

La réglementation distingue quatre niveaux de risque. Les systèmes IA classés "haut risque" — qui incluent les applications dans le domaine de la santé, du bien-être médical et des dispositifs médicaux — sont soumis à des obligations strictes : documentation technique, évaluation de conformité, enregistrement dans une base de données européenne, et, en cas d'incident, notification obligatoire aux autorités.

La question que beaucoup de directions juridiques n'ont pas encore tranchée : est-ce qu'un outil d'IA générative utilisé par une marque medtech — même uniquement pour produire des contenus marketing — tombe dans cette catégorie ?

La réponse courte : peut-être. Si le contenu généré est utilisé pour communiquer sur les bénéfices d'un dispositif médical, ou si les données utilisées pour entraîner ou personnaliser le modèle incluent des données de santé, la classification "haut risque" peut s'appliquer.

Les sanctions prévues par l'AI Act pour non-conformité : jusqu'à 30 millions d'euros ou 6% du chiffre d'affaires mondial, selon le cas.

Plusieurs cabinets juridiques spécialisés estiment qu'entre 30 et 40% des entreprises medtech françaises n'ont pas encore conduit d'évaluation formelle de leurs outils IA au regard de l'AI Act. Le délai pour se mettre en conformité est désormais mesuré en semaines, pas en mois.`
    },
    {
      url: "cbradio-tech.fr/ia-gen-marques-sante-risques",
      source: "CB News Tech",
      date: "mars 2027",
      author: "par Sarah Klink",
      headline: "IA générative : les cinq erreurs que les directions marketing font encore",
      lede: "Déployer vite, cadrer après. Ce modèle a un coût — et pas seulement juridique.",
      body: `Depuis 18 mois, CB News Tech documente les déploiements IA Gen dans les directions marketing de PME et ETI françaises. Le bilan est contrasté : des gains de productivité réels, des angles morts récurrents.

Erreur n°1 : Signer des contrats prestataires sans clause de protection des données d'entraînement. Les modèles IA se nourrissent de données. Si le contrat ne précise pas que les données client ne peuvent pas être utilisées à des fins d'entraînement du modèle, elles le seront — légalement, selon la plupart des CGU standard.

Erreur n°2 : Confondre "outputs conformes à nos guidelines" et "outputs dont on détient la propriété". Selon le droit français, les œuvres générées par IA ne bénéficient pas automatiquement de la protection du droit d'auteur au profit de l'utilisateur. La question de qui est propriétaire des visuels générés reste juridiquement ouverte dans la plupart des contrats.

Erreur n°3 : Ignorer les résistances internes comme un problème de communication. Les équipes commerciales B2B qui refusent d'utiliser des contenus IA Gen ne sont pas "en retard". Elles expriment une préoccupation légitime sur la qualité relationnelle de leurs interactions client. La réponse ne peut pas être "on leur explique que c'est bien".

Erreur n°4 : Lancer sans évaluer l'EU AI Act. L'acte s'applique dès mai 2027. Les directions juridiques qui n'ont pas encore conduit d'analyse de conformité jouent une course contre la montre.

Erreur n°5 : Oublier les indicateurs. Un déploiement IA Gen sans KPI de mesure d'impact — production, engagement, conformité — est un déploiement qu'on ne peut pas piloter, et encore moins défendre en CODIR.`
    }
  ],

  // ─── Messages Slack ───────────────────────────────────────────
  slackMessages: {
    initial: [
      {
        from: "Sonia Ferracci",
        time: "08:32",
        text: "Bonjour — j'ai besoin de ta contribution individuelle sur le projet IA Gen avant vendredi. Le brief est dans ta boîte mail. Lis-le en premier.",
        read: true
      },
      {
        from: "Sonia Ferracci",
        time: "08:34",
        text: "Il y a quelques points sensibles à gérer mais rien d'insurmontable. Ce que j'attends : une proposition structurée, pas une liste de problèmes.",
        read: true
      }
    ],
    delayed: [
      {
        from: "Yassine Morel",
        time: "+12min",
        text: "Hello ! Tu as vu le rapport d'incident ? Je veux pas dramatiser mais le truc du prestataire c'est un peu chaud. Sonia dit que c'est gérable. Tu penses quoi toi ?",
        channel: "DM"
      },
      {
        from: "Théo Marczak",
        time: "+28min",
        text: "J'ai transmis mes questions juridiques à Sonia. Si tu travailles sur la contribution BC5, je te conseille de lire mon email avant de produire quoi que ce soit. Ce projet a des angles morts.",
        channel: "DM"
      }
    ]
  },

  // ─── Mémo vocal Camille ───────────────────────────────────────
  memoVocal: {
    from: "Camille Ott",
    duration: "2:34",
    date: "Lundi 21 avril 2027 · 09h11",
    transcript: `Bonjour. Je me permets de vous laisser ce mémo parce que
je pense que certaines choses ne vont pas remonter dans les documents officiels.

L'IA Gen, en B2B, c'est un vrai problème — pas théorique, concret.

Trois DRH m'ont appelée la semaine dernière. Pas pour se plaindre, pour
poser une question : "C'est vous qui écrivez vos emails, ou c'est une machine ?"
C'est la question. Et elle dit tout.

Un de nos commerciaux, Marc — 6 ans d'ancienneté, excellent — a refusé
d'envoyer une campagne email générée par IA à son portefeuille. Il m'a dit :
"Camille, mes clients me font confiance à moi. Si je leur envoie un truc
produit par un algorithme sans leur dire, c'est une forme de tromperie."

Je ne dis pas qu'il a tort.

Sonia voit le gain de productivité. Elle voit les visuels. Elle ne voit pas
que la relation commerciale B2B, ça tient à du qualitatif que l'IA ne saisit
pas encore — la mémoire des échanges, le ton qui s'ajuste, l'humain derrière
l'écran.

Ce que j'attends de la contribution individuelle : pas un "on va former les
équipes à accepter l'IA". Ça, c'est condescendant. J'attends qu'on reconnaisse
que les résistances ont une valeur, et qu'on les intègre dans le plan.

Mon numéro direct si vous voulez échanger : +33 6 ▒▒ ▒▒ ▒▒ ▒▒.

Camille.`
  },

  // ─── Easter egg WhatsApp ──────────────────────────────────────
  whatsapp: {
    participants: ["Yassine Morel", "Camille Ott"],
    date: "Dimanche 20 avril 2027",
    messages: [
      {
        from: "Yassine",
        time: "18:42",
        text: "Camille t'es dispo ? J'ai un truc un peu urgent à te dire sur DataViz"
      },
      {
        from: "Camille",
        time: "18:55",
        text: "Oui dis-moi"
      },
      {
        from: "Yassine",
        time: "18:57",
        text: "Le contrat que j'ai signé en février... j'ai pas fait relire par Théo. Sonia voulait qu'on lance vite, j'ai validé direct. La clause 4.2 sur les données, je l'avais pas vue."
      },
      {
        from: "Camille",
        time: "19:02",
        text: "Yassine."
      },
      {
        from: "Camille",
        time: "19:02",
        text: "Tu m'aurais dit ça avant que j'envoie le rapport à Théo ça m'aurait arrangée"
      },
      {
        from: "Yassine",
        time: "19:04",
        text: "T'as envoyé le rapport à Théo directement ??"
      },
      {
        from: "Camille",
        time: "19:05",
        text: "Vendredi soir. J'avais pas le choix, il me l'avait demandé en réunion et Sonia était pas là."
      },
      {
        from: "Yassine",
        time: "19:07",
        text: "Donc Théo sait pour la clause"
      },
      {
        from: "Camille",
        time: "19:08",
        text: "Il sait tout. Et il prépare quelque chose. Il m'a dit qu'il allait écrire à Jakob pour le mettre au courant des risques juridiques."
      },
      {
        from: "Yassine",
        time: "19:11",
        text: "Sans passer par Sonia ???"
      },
      {
        from: "Camille",
        time: "19:12",
        text: "Sans passer par Sonia."
      },
      {
        from: "Camille",
        time: "19:13",
        text: "La contribution individuelle de lundi... elle a intérêt à être sérieuse sur les risques. Parce que si Théo envoie son email à Jakob avant vendredi, tout le monde va regarder ce document de très près."
      },
      {
        from: "Yassine",
        time: "19:15",
        text: "ok. merci de m'avoir dit."
      }
    ]
  },

  // ─── Fausse Une Les Stratégies ────────────────────────────────
  fausseUne: {
    source: "Les Stratégies",
    date: "14 avril 2027",
    headline: "EU AI Act : à J-45, les marques medtech face à l'heure de vérité",
    accroche: "L'acte européen sur l'IA entre en application le 2 mai. Pour les entreprises du secteur santé utilisant des outils IA Gen, la question n'est plus théorique.",
    url: "lesstrat.fr/eu-ai-act-medtech-mai-2027"
  }

};

// ══════════════════════════════════════════════════════════════
//  PASS_CONFIG — Configuration BC5
//  PAC · Parcours Activation Compétences
// ══════════════════════════════════════════════════════════════
window.PASS_CONFIG = {
  bloc: 'bc5',
  accroche_namescreen: {
    "subtitle": "Projet IA Gen — conduire le changement",
    "role": "consultant·e externe en transformation",
    "intro": "Tu es {{STUDENT}}, consultant·e externe chez Lumio Health sur le Projet IA Gen : intégrer une innovation de rupture dans les outils marketing/communication, malgré les résistances internes et les enjeux RGPD et propriété intellectuelle. Tu produis ta contribution individuelle (PPI). Les documents posent les facteurs de rupture, les innovations à implémenter et la conduite du changement.",
    "ratio_label": "3 semaines dans la vraie vie",
    "regles": [
      {
        "ico": "📄",
        "txt": "Tout ce que tu sais, c'est dans les documents du projet IA Gen."
      },
      {
        "ico": "🤐",
        "txt": "Le jury évalue ta lecture des facteurs de rupture, ta maîtrise RGPD/PI et ta conduite du changement."
      },
      {
        "ico": "💬",
        "txt": "Quand tu as une hypothèse solide → Slack → Sonia Ferracci. Sa réaction débloque la suite."
      }
    ]
  },
  titre: 'Engager l\'innovation et la transformation digitale de la communication de la marque',
  epreuve: 'E7 — Proposition de mise en place d\'une transformation d\'outils ou canaux marketing communication induite par une innovation de rupture',
  deadline: 'Vendredi 25 avril 2027 · 18h00',
  commanditaire: 'Sonia Ferracci',
  dispositif: 'PAC',

  temps: [
    {
      n: 1, label: 'Ancrage terrain', debut: 0, fin: 20, couleur: '#7a756c',
      objectif: 'Entrer dans l\'univers du Projet IA Gen. Comprendre le contexte post-MDR de Lumio, identifier les acteurs, cerner les signaux d\'alerte.',
      todoSuggere: [
        'Lire le brief du Projet IA Gen de Sonia (Mail)',
        'Lire la fiche contexte Lumio si vous découvrez l\'univers (Finder)',
        'Consulter les portraits équipe — Sonia, Yassine, Théo (Finder > Portraits)',
        'Ouvrir Slack — lire les messages de Sonia'
      ]
    },
    {
      n: 2, label: 'Entrée dans l\'affaire', debut: 20, fin: 50, couleur: '#1b4f8a',
      objectif: 'Les signaux d\'alerte se précisent. Lire les documents qui révèlent les trois problèmes concrets : données clients aspirées, risque PI visuel, résistance commerciale.',
      todoSuggere: [
        'Lire le rapport d\'incident DataViz Studio (PDF Viewer — confidentiel)',
        'Lire l\'email de Théo sur les risques juridiques (Mail — transmis par Sonia)',
        'Lire la veille IA Gen de Yassine sur Maddyness (Navigateur)',
        'Écouter le mémo vocal de Camille Ott (Mémos vocaux)',
        'Lire l\'article Les Stratégies sur l\'EU AI Act (Navigateur)'
      ]
    },
    {
      n: 3, label: 'Diagnostic', debut: 50, fin: 95, couleur: '#1a6641',
      objectif: 'Construire votre analyse des facteurs de rupture et qualifier les risques. Envoyer votre diagnostic à Sonia sur Slack — 2 échanges débloquent l\'app Livrable.',
      todoSuggere: [
        'Identifier les facteurs de rupture IA Gen pertinents pour Lumio (C.20-II)',
        'Qualifier les opportunités vs risques : RGPD, PI, EU AI Act, RSE',
        'Consulter les notes CODIR du 14 avril (Notes)',
        'Envoyer votre premier diagnostic à Sonia sur Slack',
        'Envoyer un second message avec votre position sur le go/no-go'
      ]
    },
    {
      n: 4, label: 'Production', debut: 95, fin: 175, couleur: '#c4420f',
      objectif: 'Rédiger la contribution individuelle BC5. 3 compétences RNCP (C.20-II, C.21-II, C.22-II). Utilisez les gabarits pour C.21-II.',
      todoSuggere: [
        'Ouvrir l\'app Livrable (débloquée après 2 échanges Slack)',
        'Rédiger C.20-II : facteurs de rupture IA Gen contextualisés Lumio',
        'Rédiger C.21-II : innovations à implémenter + rôles directions + risques + KPI',
        'Rédiger C.22-II : accompagnement du changement — stratégies différenciées',
        'Vérifier les minimums de mots sur chaque compétence',
        'Soumettre la contribution'
      ]
    },
    {
      n: 5, label: 'Réflexion', debut: 175, fin: 210, couleur: '#7a756c',
      objectif: 'Note réflexive E7 — retour sur vos choix. Ce que vous auriez fait différemment. Ce que ce projet révèle de votre posture professionnelle face à l\'IA.',
      todoSuggere: [
        'Relire votre contribution dans le Livrable',
        'Rédiger la note réflexive dans l\'onglet dédié (min. 100 mots)',
        'Identifier la compétence sur laquelle vous avez le plus progressé',
        'Soumettre la note réflexive avant la fin du timer'
      ]
    }
  ],

  competences: [
    {
      code: 'C.20-II',
      label: 'Identifier les facteurs de rupture',
      libelle: 'Rupture',
      rncp: 'Identifier les facteurs de rupture et d\'innovation principalement liés aux technologies digitales et aux modèles économiques émergents qui leur sont associés, en s\'appuyant sur une veille prospective, afin de définir une stratégie d\'innovation porteuse de développement pour la marque et optimisant sa visibilité et son positionnement au sein de son écosystème.',
      placeholder: 'Quels facteurs de rupture technologiques et économiques liés à l\'IA générative identifiez-vous pour Lumio Health en avril 2027 ? Appuyez-vous sur une veille prospective (ce que vous avez lu dans les documents disponibles). Qualifiez chaque facteur : opportunité ou risque ? Impact sur le positionnement Lumio dans son écosystème medtech ? Proposez une orientation stratégique d\'innovation qui tient compte de la nouvelle situation post-MDR de Lumio.',
      min: 120,
      motsCles: ['rupture', 'IA générative', 'veille prospective', 'modèle économique', 'positionnement', 'écosystème', 'opportunité', 'risque', 'innovation'],
      conseil: 'Le jury attend une identification contextualisée — pas une liste générique sur l\'IA. Ancrez chaque facteur de rupture dans la réalité de Lumio : MDR obtenue, pivot B2C en cours, données propriétaires 8 ans. Un facteur sans lien avec Lumio = non évalué.'
    },
    {
      code: 'C.21-II',
      label: 'Déterminer les innovations à implémenter',
      libelle: 'Implémentation',
      rncp: 'Déterminer les innovations à implémenter dans la stratégie marketing et communication de la marque et ses outils associés, en établissant leur processus de développement avec les différentes directions de l\'entreprise et en identifiant les facteurs de risque devant être anticipés (cybersécurité, obligations règlementaires, dimension RSE…), afin de les mettre en place en toute sécurité et dans le respect de l\'éthique.',
      placeholder: 'Quelles innovations IA Gen recommandez-vous d\'implémenter dans la stratégie marcom de Lumio ?\n\n1. PROCESSUS ET RÔLES — Précisez explicitement le rôle et les responsabilités de chaque direction : qui valide quoi, qui est garant de quoi (Marketing, Juridique, Commercial, CEO). Une direction sans rôle défini = angle mort.\n\n2. RISQUES ET GARDE-FOUS — Traitez les incidents en cours : RGPD DataViz Studio, PI visuel Léa Ferron, EU AI Act mai 2027, RSE. Pour chaque risque : mesure de mitigation ET indicateur de contrôle.\n\n3. INDICATEURS D\'IMPACT — Proposez des KPI mesurables : production (gain de temps, volume), marcom (engagement, conversion), conformité (incidents, audits). Sans indicateurs chiffrés, votre proposition n\'est pas évaluable.',
      min: 200,
      motsCles: ['RGPD', 'propriété intellectuelle', 'EU AI Act', 'RSE', 'rôles', 'responsabilités', 'directions', 'indicateurs', 'KPI', 'impact', 'garde-fous', 'conformité'],
      conseil: 'Deux erreurs éliminatoires : (1) Décrire un processus sans dire QUI fait QUOI dans chaque direction — "impliquer le juridique" ne suffit pas. (2) Lister des risques sans indicateur de suivi — un risque sans métrique n\'est pas géré, il est juste nommé. Utilisez les gabarits disponibles.'
    },
    {
      code: 'C.22-II',
      label: 'Conduire le changement',
      libelle: 'Changement',
      rncp: 'Définir les stratégies d\'accompagnement des acteurs internes à mettre en place, en choisissant les modalités permettant de les impliquer et de surmonter les éventuelles résistances pouvant être rencontrées, afin d\'optimiser la mise en œuvre de l\'innovation et de conduire le changement.',
      placeholder: 'Comment conduire le changement chez Lumio face à l\'intégration de l\'IA générative ? Identifiez les acteurs internes et leurs niveaux de résistance (vous avez entendu Camille Ott et lu l\'email de Théo). Proposez des stratégies d\'accompagnement différenciées selon les profils. Précisez les modalités concrètes : formations, ateliers de cocréation, implication progressive. Comment transformer les plus réticents en ambassadeurs ?',
      min: 120,
      motsCles: ['résistance', 'accompagnement', 'changement', 'acteurs internes', 'formation', 'cocréation', 'implication', 'profils', 'ambassadeurs', 'modalités'],
      conseil: 'La résistance commerciale B2B (Camille, Marc) et la méfiance de Théo sont vos deux cas à traiter. Un plan générique sans ancrage dans les personnages Lumio = insuffisant. Le jury attend des stratégies différenciées — pas un plan unique pour tous.'
    }
  ],

  gabarits: {
    ROLES: {
      label: 'Rôles et responsabilités par direction',
      structure: [
        { cle: 'direction_marketing', label: 'Direction Marketing (Sonia Ferracci)', placeholder: 'Quel est le rôle exact de la direction marketing dans le processus ? Qui valide les outputs IA Gen ? Quel livrable est attendu de sa part ?' },
        { cle: 'direction_juridique', label: 'Direction Juridique / DPO', placeholder: 'Quel est le périmètre d\'intervention du juridique ? Quelles validations sont obligatoires avant déploiement ? Qui est garant de la conformité RGPD et EU AI Act ?' },
        { cle: 'direction_commerciale', label: 'Direction Commerciale (Camille Ott)', placeholder: 'Quel rôle pour le commercial dans l\'acceptation et le déploiement ? Comment l\'impliquer sans court-circuiter sa légitimité terrain ?' },
        { cle: 'direction_generale', label: 'Direction Générale (Théo Marczak)', placeholder: 'Quel est le rôle du CEO ? Quelles décisions lui reviennent exclusivement ? Comment traiter ses 5 questions juridiques dans le processus ?' }
      ]
    },
    RISQUES: {
      label: 'Plan de gestion des risques IA Gen',
      structure: [
        { cle: 'risque_rgpd', label: 'Risque RGPD — Données DataViz Studio', placeholder: 'Mesure de mitigation concrète pour l\'incident DataViz Studio. Indicateur permettant de vérifier que le risque est maîtrisé (ex : validation DPO, mise à jour registre de traitement).' },
        { cle: 'risque_pi', label: 'Risque PI — Visuel Léa Ferron', placeholder: 'Mesure de mitigation pour le risque PI. Processus de vérification des outputs avant publication. Indicateur de contrôle (ex : taux de validation juridique des visuels).' },
        { cle: 'risque_aiact', label: 'Risque réglementaire — EU AI Act mai 2027', placeholder: 'Évaluation du niveau de risque AI Act pour Lumio. Mesures de mise en conformité. Indicateur : audit conduit avant le 2 mai 2027.' },
        { cle: 'risque_rse', label: 'Risque RSE — éthique et transparence', placeholder: 'Comment Lumio communique sur l\'usage de l\'IA Gen ? Politique de transparence. Indicateur de conformité éthique (ex : % de contenus IA Gen clairement identifiés).' }
      ]
    }
  },

  personnages: {
    commanditaire: { nom: 'Sonia Ferracci', role: 'Directrice Marketing', avatar: 'SF', couleur: '#c4420f' },
    terrain: { nom: 'Camille Ott', role: 'Responsable partenariats B2B', avatar: 'CO', couleur: '#0a7a6e' },
    direction: { nom: 'Théo Marczak', role: 'CEO fondateur', avatar: 'TM', couleur: '#5c2d8f' },
    content: { nom: 'Yassine Morel', role: 'Content Manager', avatar: 'YM', couleur: '#2d6a4f' }
  }
};

// === [PAC v2 complétion] juryPrompt + dispositif + accroche — auto-ajout ===
(function() {
  var cfg = window.PAC_CONFIG || window.PASS_CONFIG;
  if (!cfg) return;
  if (!cfg.juryPrompt) cfg.juryPrompt = "Tu es le jury certifiant du bloc 5 (Manager Stratégie Marketing & Communication — MSMC, RNCP 38504).\nContexte : Lumio Health — Proposition de mise en place d'une transformation des outils ou canaux marketing/communication induite par une innovation de rupture (IA générative). Enjeux RGPD (incident DataViz Studio), propriété intellectuelle (visuel Léa Ferron), conformité EU AI Act (échéance 2 mai 2027), engagement RSE. Résistances internes à anticiper. Avril 2027.\nTu évalues une production étudiante aux critères RNCP stricts. Sois exigeant mais juste.\nCritères éliminatoires :\n- Les facteurs de rupture (C.20-II) ne sont pas hiérarchisés en termes d'opportunités et de risques explicites pour Lumio, ni adossés à une veille prospective documentée : la compétence est invalidée.\n- Les innovations à implémenter (C.21-II) sont listées sans rôles ni responsabilités attribués (directions impactées, garde-fous, indicateurs de conformité RGPD / PI / AI Act / RSE) : invalidation immédiate.\n- Aucun KPI mesurable n'est associé aux innovations proposées (impact business ou conformité), rendant le pilotage du déploiement impossible : la compétence C.21-II est insuffisante.\n- La conduite du changement (C.22-II) ignore les résistances internes documentées ou ne propose ni ambassadeurs, ni dispositif de cocréation, ni plan de formation différencié par profils : invalidation C.22-II.\n- Aucune référence n'est faite aux contraintes juridiques actives (RGPD, EU AI Act, propriété intellectuelle) ou aux mesures de mitigation des incidents précédents (DataViz Studio, Léa Ferron) : le dossier est déclaré non conforme.\n\nRéponds EXACTEMENT dans ce format :\n### C.20-II — [Satisfaisant / Insuffisant / Absent]\nUne phrase de retour précise et exigeante.\n\n### C.21-II — [Satisfaisant / Insuffisant / Absent]\nUne phrase de retour précise et exigeante.\n\n### C.22-II — [Satisfaisant / Insuffisant / Absent]\nUne phrase de retour précise et exigeante.\n\n## Niveau global\n**[Non conforme / Partiellement conforme / Conforme / Conforme avec distinction]**\n\n## Question de jury\nUne question dérangeante que tu poserais à l'oral.";
  window.PAC_CONFIG = cfg;
  window.PASS_CONFIG = cfg;
})();
// === [PAC v2 complétion] fin ===
