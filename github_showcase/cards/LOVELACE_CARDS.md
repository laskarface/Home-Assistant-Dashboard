# 📋 Configurations des Cartes (Lovelace Cards configs)

Ce guide regroupe les cartes principales du tableau de bord.
Chaque bloc de code correspond à une **carte Lovelace Manuelle** indépendante.
Le code est prêt à être copié/collé tel quel dans Home Assistant.

## 🗂️ Modèles globaux (Templates)

> [!IMPORTANT]
> À insérer au tout début de votre code Dashbord Principal (RAW Configuration) sous la balise `button_card_templates:`.

```yaml
button_card_templates:
  inkwell:
    show_name: false
    show_state: true
    extra_styles: "[[[\n  return `\n    @keyframes pulse {\n      5% {\n        background-color:\
      \ ${variables.color};\n      }\n    }\n  `;\n]]]\n"
    styles:
      icon:
      - opacity: 1
      - color: '[[[ return variables.color ]]]'
      - filter: "[[[\n  const glow = 'drop-shadow(0 0 3px rgba(255,255,255,0.95))';\n\
          \  const edge = 'drop-shadow(0 0 1px rgba(0,0,0,0.7))';\n  return glow +\
          \ ' ' + edge;\n]]]\n"
      state:
      - font-size: 0.8em
      - font-weight: bold
      - text-shadow: 0 0 3px black
      - overflow: visible
      card:
      - border: none
      - border-radius: 4px
      - box-shadow: 0 2px 4px rgba(0, 0, 0, 0.6)
      - background: "[[[\n  let level = parseFloat(entity.state);\n  if (isNaN(level))\
          \ level = 0;\n  level = Math.max(0, Math.min(100, level));\n\n  // couleur\
          \ d'encre avec 70% de transparence\n  const c = variables.color;\n\n  const\
          \ fillColor = (c.startsWith('#'))\n    ? `${c}B3`     // HEX → alpha \"\
          B3\" ≈ 70%\n    : `rgba(${{\n        cyan: '0,255,255',\n        magenta:\
          \ '255,0,255',\n        yellow: '255,255,0',\n        black: '0,0,0'\n \
          \     }[c] || '255,255,255'}, 0.3)`;   // 0.3 = 70% de transparence\n\n\
          \  const fill = `linear-gradient(\n    to top,\n    ${fillColor},\n    ${fillColor}\
          \ ${level}%,\n    rgba(255,255,255,0.10) ${level}%\n  )`;\n\n  const gloss\
          \ = `linear-gradient(\n    to bottom,\n    rgba(255,255,255,0.45),\n   \
          \ rgba(255,255,255,0.10) 0%,\n    transparent 0%\n  )`;\n\n  return `${gloss},\
          \ ${fill}`;\n]]]\n"
      - animation: "[[[\n  let level = parseFloat(entity.state);\n  if (isNaN(level))\
          \ level = 0;\n  return level < 2 ? 'pulse ease-in-out 1s infinite' : 'none';\n\
          ]]]\n"
  energy_half:
    show_name: true
    show_state: true
    state_display: "[[[\n  if (!entity || entity.state === 'unavailable' || entity.state\
      \ === 'unknown') return '0.00 kWh';\n  const val = parseFloat(entity.state);\n\
      \  // On n'affiche que 2 décimales pour la propreté\n  return isNaN(val) ? '0.00\
      \ kWh' : val.toFixed(2) + ' kWh';\n]]]\n"
    styles:
      card:
      - background: rgba(20, 27, 38, 0.6)
      - backdrop-filter: blur(10px)
      - -webkit-backdrop-filter: blur(10px)
      - border-radius: 20px
      - border: 1px solid rgba(255,255,255,0.1)
      - box-shadow: 0 4px 15px rgba(0,0,0,0.2)
      - padding: 12px
      - height: 110px
      grid:
      - grid-template-areas: '"n" "s" "graph"'
      - grid-template-rows: auto auto 1fr
      name:
      - font-size: 13px
      - font-weight: 600
      - color: rgba(255,255,255,0.8)
      - justify-self: start
      state:
      - font-size: 18px
      - font-weight: 700
      - color: '#FFFFFF'
      - justify-self: start
      - margin-top: 5px
    custom_fields:
      graph:
        card:
          type: sensor
          entity: '[[[ return entity.entity_id ]]]'
          graph: line
          detail: 1
          card_mod:
            style: 'ha-card { background: transparent !important; border: none !important;
              }

              .header, .value, .name, .measurement { display: none !important; }

              .graph { padding: 0 !important; }

              '
  greffe_task_glossy:
    show_name: true
    show_icon: true
    show_state: false
    layout: vertical
    tap_action:
      action: none
    hidden: "[[[\n  if (!entity) return true;\n\n  const attr = variables.attr;\n\
      \  if (attr) {\n    const v = entity.attributes?.[attr];\n    return !(v ===\
      \ true || v === 'true' || v === 'True' || v === 1);\n  }\n\n  // fallback =\
      \ ne montrer la carte que si l'entité est \"on\"\n  return entity.state !==\
      \ 'on';\n]]]\n"
    styles:
      card:
      - border: none
      - border-radius: 4px
      - box-shadow: 0 4px 8px rgba(0, 0, 0, 0.6)
      - height: 64px
      - padding: 6px 10px
      - background: "[[[\n  const c = variables.color || '#4CAF50';\n  const fill\
          \ = `linear-gradient(to bottom, ${c}DD, ${c}AA)`;\n  const gloss =\n   \
          \ 'linear-gradient(to bottom,' +\n    'rgba(255,255,255,0.45),' +\n    'rgba(255,255,255,0.10)\
          \ 0%,' +\n    'transparent 0%)';\n  return `${gloss}, ${fill}`;\n]]]\n"
      grid:
      - grid-template-areas: '"i" "n"'
      - grid-template-rows: auto auto
      - grid-template-columns: 1fr
      - row-gap: 2px
      - align-items: center
      - justify-items: center
      icon:
      - width: 26px
      - height: 26px
      - color: white
      - filter: drop-shadow(0 0 4px rgba(0,0,0,0.9))
      name:
      - font-size: 0.8rem
      - font-weight: 500
      - text-overflow: ellipsis
      - white-space: nowrap
      - overflow: hidden
  notif_glossy:
    show_icon: false
    show_state: false
    show_name: true
    layout: vertical
    tap_action:
      action: more-info
    variables:
      color: '#ff3b30'
    styles:
      card:
      - border-radius: 4px
      - border: none
      - padding: 6px 10px
      - height: 54px
      - box-shadow: 0 4px 10px rgba(0,0,0,0.6)
      - overflow: hidden
      - background: "[[[\n  const c = variables.color || '#ff3b30';\n  const fill\
          \ = `linear-gradient(to bottom, ${c}DD, ${c}AA)`;\n  const gloss =\n   \
          \ 'linear-gradient(to bottom,' +\n    'rgba(255,255,255,0.45),' +\n    'rgba(255,255,255,0.10)\
          \ 0%,' +\n    'transparent 0%)';\n  return `${gloss}, ${fill}`;\n]]]\n"
      name:
      - font-size: 0.9rem
      - font-weight: 600
      - text-align: center
      - white-space: normal
      - overflow: visible
      - text-overflow: unset
      - line-height: 1.1rem
      - padding: 0 4px
      - color: white
  nav_glossy:
    show_icon: true
    show_name: true
    color_type: card
    aspect_ratio: 2/1
    variables:
      accent_color: rgba(0, 160, 255, 1)
    styles:
      card:
      - border-radius: 18px
      - padding: 10px
      - border: 1px solid rgba(255,255,255,0.10)
      - box-shadow: 0 6px 14px rgba(0,0,0,0.55)
      - background: "[[[\n  const c = variables.accent_color || 'rgba(0,160,255,1)';\n\
          \  return `linear-gradient(145deg,\n            rgba(0,0,0,0.75),\n    \
          \        rgba(15,15,15,0.95) 40%,\n            ${c} 140%)`;\n]]]\n"
      icon:
      - width: 48%
      - color: '[[[ return variables.accent_color || "var(--primary-color)" ]]]'
      - filter: drop-shadow(0 0 6px rgba(0,0,0,0.9))
      name:
      - padding-top: 6px
      - font-weight: 700
      - font-size: 0.95em
      - text-align: center
      - color: '#ffffff'
      - text-shadow: 0 0 4px rgba(0,0,0,0.9)
  nav_minimal:
    show_icon: true
    show_name: true
    color_type: icon
    aspect_ratio: 2/1
    variables:
      accent_color: rgba(0, 160, 255, 1)
    styles:
      card:
      - border-radius: 4px
      - padding: 8px 12px
      - background: 'var(--ha-card-background, rgba(18, 22, 33, 0.98))

          '
      - box-shadow: 0 4px 8px rgba(0,0,0,0.35)
      - border: 1px solid rgba(255,255,255,0.04)
      icon:
      - color: "[[[\n  return variables.accent_color || 'rgba(0,160,255,1)';\n]]]\n"
      - width: 32px
      - height: 32px
      name:
      - color: var(--primary-text-color)
      - font-weight: 500
      - font-size: 14px
  weather_forecast_row:
    show_icon: false
    show_state: false
    show_name: false
    custom_fields:
      day: "[[[\n  return states['weather.home'].attributes.forecast[variables.index].datetime\n\
        \    ? new Date(states['weather.home'].attributes.forecast[variables.index].datetime).toLocaleDateString('fr-FR',\
        \ { weekday: 'short' })\n    : '-';\n]]]\n"
      icon: "[[[\n  return states['weather.home'].attributes.forecast[variables.index].condition;\n\
        ]]]\n"
      temp_min: "[[[\n  return Math.round(states['weather.home'].attributes.forecast[variables.index].templow)\
        \ + \"°C\";\n]]]\n"
      temp_max: "[[[\n  return Math.round(states['weather.home'].attributes.forecast[variables.index].temperature)\
        \ + \"°C\";\n]]]\n"
      bar: "[[[\n  const f = states['weather.home'].attributes.forecast;\n  const\
        \ min = Math.min(...f.map(x => x.templow));\n  const max = Math.max(...f.map(x\
        \ => x.temperature));\n  const tmin = f[variables.index].templow;\n  const\
        \ tmax = f[variables.index].temperature;\n\n  const total = max - min;\n \
        \ const start = ((tmin - min) / total) * 100;\n  const end = ((tmax - min)\
        \ / total) * 100;\n\n  return `\n    <div style=\"width:100%;height:10px;background:#dfeffa;border-radius:20px;position:relative;\"\
        >\n      <div style=\"\n        position:absolute;\n        left:${start}%;\n\
        \        width:${end - start}%;\n        height:10px;\n        background:linear-gradient(90deg,#7dd3fc,#86efac);\n\
        \        border-radius:20px;\">\n      </div>\n    </div>\n  `;\n]]]\n"
    styles:
      card:
      - padding: 2px 0
      - background: transparent
      - box-shadow: none
      - height: 28px
      grid:
      - grid-template-columns: 30px 1fr 30px 50px
      custom_fields:
        day:
        - justify-self: start
        - font-size: 14px
        - color: white
        icon:
        - justify-self: start
        - font-size: 18px
        temp_min:
        - justify-self: end
        - font-size: 14px
        - color: white
        temp_max:
        - justify-self: start
        - font-size: 14px
        - color: white
  button_card_templates:
    modern_task_glass:
      show_state: false
      show_name: true
      show_icon: true
      styles:
        card:
        - padding: 12px
        - height: 100px
        - border-radius: 20px
        - border: 1px solid rgba(255,255,255,0.1)
        - background: rgba(20, 27, 38, 0.6)
        - backdrop-filter: blur(10px)
        - -webkit-backdrop-filter: blur(10px)
        - box-shadow: 0 4px 15px rgba(0,0,0,0.2)
        - transition: transform 0.1s ease
        icon:
        - width: 32px
        - height: 32px
        - margin-bottom: 8px
        - color: '[[[ return variables.color; ]]]

            '
        - filter: '[[[ return `drop-shadow(0 0 8px ${variables.color}aa)`; ]]]

            '
        name:
        - font-size: 13px
        - font-weight: 600
        - color: white
        custom_fields:
          status:
          - font-size: 11px
          - opacity: 0.7
          - padding-top: 4px
      grid:
      - grid-template-areas: '"i" "n" "status"'
      - grid-template-rows: 1fr min-content min-content
      custom_fields:
        status: "[[[\n  return entity.attributes[variables.attr] || '—';\n]]]\n"

```

---

## Trajets (Commute)

<div align="center">
  <img src="images/showcase/commute_closed.png" width="45%" />
  <img src="images/showcase/commute_expanded.png" width="45%" />
</div>

**Code YAML :**

```yaml
type: conditional
conditions:
- condition: state
  entity: binary_sensor.commute_workday
  state: 'on'
card:
  type: custom:fold-entity-row
  padding: 0
  clickable: true
  card_mod:
    style: "div#head {\n  display: block !important;\n  width: 100% !important;\n\
      \  padding: 0 !important;\n  margin: 0 !important;\n  --toggle-icon-width: 0px\
      \ !important;\n}\n#head {\n  padding: 0 !important;\n  margin: 0 !important;\n\
      \  width: 100% !important;\n  cursor: pointer !important;\n  pointer-events:\
      \ auto !important;\n}\n#head ha-icon {\n  display: none !important;\n  width:\
      \ 0px !important;\n}\ndiv#items {\n  padding: 0 !important;\n  margin: 0 !important;\n\
      }\n"
  head:
    type: custom:button-card
    entity: input_boolean.commute_card_flip
    show_name: false
    show_icon: false
    show_state: false
    tap_action:
      action: none
    variables:
      is_home: "[[[\n  const flip = states['input_boolean.commute_card_flip'] && states['input_boolean.commute_card_flip'].state\
        \ === 'on';\n  const is_pm = new Date().getHours() >= 12;\n  return (is_pm\
        \ && !flip) || (!is_pm && flip);\n]]]\n"
    styles:
      card:
      - padding: 0
      - background: rgba(20, 27, 38, 0.6)
      - backdrop-filter: blur(10px)
      - -webkit-backdrop-filter: blur(10px)
      - border-radius: 20px
      - border: "[[[ \n  const is_home = variables.is_home;\n  return is_home ? '1px\
          \ solid rgba(255, 165, 0, 0.5)' : '1px solid rgba(61, 219, 184, 0.5)';\n\
          ]]]\n"
      - box-shadow: "[[[ \n  return '0 8px 32px rgba(0,0,0,0.4)';\n]]]\n"
      - overflow: hidden
      - margin: 0px
      - box-sizing: border-box
      - position: relative
      - transition: box-shadow 0.4s ease-in-out, border 0.4s ease-in-out
      grid:
      - grid-template-areas: '"icon details switch" "footer footer footer"'
      - grid-template-columns: 130px 1fr 60px
      - grid-template-rows: "[[[ \n  return \"80px 30px\";\n]]]\n"
      - gap: 0px
      - width: 100%
      - margin: 0
      custom_fields:
        icon:
        - justify-self: stretch
        - align-self: stretch
        - border-right: 2px solid rgba(255,255,255,0.6)
        - border-top-left-radius: 20px
        - display: flex
        - align-items: center
        - justify-content: center
        - padding: 0
        details:
        - justify-self: stretch
        - align-self: stretch
        - display: flex
        - flex-direction: column
        - justify-content: center
        - align-items: center
        - padding-right: 15px
        - overflow: hidden
        - position: relative
        switch:
        - justify-self: stretch
        - align-self: stretch
        - display: flex
        - justify-content: center
        - align-items: center
        - border-left: 1px solid rgba(255,255,255,0.1)
        - cursor: pointer
        - pointer-events: auto
        footer:
        - justify-self: stretch
        - align-self: stretch
        - background: rgba(0,0,0,0.2)
        - border-top: 1px solid rgba(255,255,255,0.05)
        - display: flex
        - align-items: center
        - justify-content: center
        - border-radius: 0 0 20px 20px
    custom_fields:
      icon: "[[[\n  const is_home = variables.is_home;\n  const color = is_home ?\
        \ '#FFA500' : '#3DDBB8';\n  \n  const svg = `\n    <svg viewBox=\"0 0 100\
        \ 100\" width=\"70\" height=\"70\">\n      <defs>\n        <linearGradient\
        \ id=\"roadGradient\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">\n       \
        \   <stop offset=\"0%\" style=\"stop-color:#2c3e50;stop-opacity:1\" />\n \
        \         <stop offset=\"100%\" style=\"stop-color:#000000;stop-opacity:1\"\
        \ />\n        </linearGradient>\n        <filter id=\"roadInnerShadow\">\n\
        \           <feOffset dx=\"0\" dy=\"2\"/>\n           <feGaussianBlur stdDeviation=\"\
        2\" result=\"offset-blur\"/>\n           <feComposite operator=\"out\" in=\"\
        SourceGraphic\" in2=\"offset-blur\" result=\"inverse\"/>\n           <feFlood\
        \ flood-color=\"black\" flood-opacity=\"0.8\" result=\"color\"/>\n       \
        \    <feComposite operator=\"in\" in=\"color\" in2=\"inverse\" result=\"shadow\"\
        />\n           <feComponentTransfer in=\"shadow\" result=\"shadow\">\n   \
        \          <feFuncA type=\"linear\" slope=\"0.5\"/>\n           </feComponentTransfer>\n\
        \           <feComposite operator=\"over\" in=\"shadow\" in2=\"SourceGraphic\"\
        />\n        </filter>\n      </defs>\n      \n      <!-- Road Shape with Perspective\
        \ -->\n      <path d=\"M20,90 L40,15 L60,15 L80,90 Z\" fill=\"url(#roadGradient)\"\
        \ filter=\"url(#roadInnerShadow)\" />\n      \n      <!-- Lane Markings (Dashed)\
        \ -->\n      <line x1=\"50\" y1=\"20\" x2=\"50\" y2=\"85\" stroke=\"white\"\
        \ stroke-width=\"2\" stroke-dasharray=\"8,8\" opacity=\"0.8\" />\n      \n\
        \      <!-- Horizon / Depth Line -->\n      <line x1=\"40\" y1=\"15\" x2=\"\
        60\" y2=\"15\" stroke=\"white\" stroke-width=\"1\" opacity=\"0.3\" />\n  \
        \    \n      <!-- Gloss Overlays -->\n      <path d=\"M20,90 L40,15 L45,15\
        \ L25,90 Z\" fill=\"white\" opacity=\"0.05\" />\n      <path d=\"M75,90 L55,15\
        \ L60,15 L80,90 Z\" fill=\"white\" opacity=\"0.03\" />\n    </svg>\n  `;\n\
        \  \n  return `\n    <div style=\"width: 100%; height: 100%; display: flex;\
        \ flex-direction: column; align-items: center; justify-content: center; background:\
        \ linear-gradient(135deg, ${color}44 0%, rgba(20, 27, 38, 0) 100%); border-top-left-radius:\
        \ 20px; box-sizing: border-box; position: relative;\">\n       <!-- Pulsing\
        \ Glow -->\n       <div style=\"position: absolute; width: 60px; height: 60px;\
        \ background: ${color}; border-radius: 50%; filter: blur(25px); opacity: 0.3;\
        \ animation: pulseGlow 3s infinite alternate ease-in-out;\"></div>\n     \
        \  <div style=\"position: relative; z-index: 1; filter: drop-shadow(0 0 12px\
        \ ${color}80); display: flex; flex-direction: column; align-items: center;\
        \ justify-content: center;\">\n         ${svg}\n         <div style=\"font-size:\
        \ 9px; font-weight: 900; color: white; text-transform: uppercase; letter-spacing:\
        \ 1px; margin-top: -5px;\">Trajets</div>\n       </div>\n       <style>\n\
        \         @keyframes pulseGlow {\n           0% { transform: scale(0.8); opacity:\
        \ 0.2; }\n           100% { transform: scale(1.2); opacity: 0.4; }\n     \
        \    }\n       </style>\n    </div>\n  `;\n]]]\n"
      details: "[[[\n  const is_home = variables.is_home;\n  const color = is_home\
        \ ? '#FFA500' : '#3DDBB8';\n  const text = is_home ? 'RETOUR MAISON' : 'ALLER\
        \ TRAVAIL';\n  const icon = is_home ? 'mdi:home' : 'mdi:office-building';\n\
        \  \n  const a_sid = is_home ? 'sensor.aline_travail_maison' : 'sensor.trajet_maison_travail_aline';\n\
        \  const c_sid = is_home ? 'sensor.chris_travail_maison' : 'sensor.trajet_maison_travail_chris';\n\
        \  \n  const a_val = states[a_sid] ? Math.round(states[a_sid].state) : '?';\n\
        \  const c_val = states[c_sid] ? Math.round(states[c_sid].state) : '?';\n\n\
        \  const getTrafficColor = (val, normal_id) => {\n    const normal = Math.round(parseFloat(states[normal_id]?.state)\
        \ || val);\n    const delay = val - normal;\n    if (delay > 25) return '#DC5050';\n\
        \    if (delay > 10) return '#FFA500';\n    if (delay > 5) return 'white';\n\
        \    return '#3DDBB8';\n  };\n\n  const a_pic = states['person.user_2']?.attributes.entity_picture;\n\
        \  const c_pic = states['person.user_1']?.attributes.entity_picture;\n  const\
        \ a_color = getTrafficColor(a_val, 'input_number.aline_commute_normal');\n\
        \  const c_color = getTrafficColor(c_val, 'input_number.chris_commute_normal');\n\
        \  \n  return `\n    <div style=\"width: 100%; height: 100%; display: flex;\
        \ flex-direction: column; justify-content: center; align-items: center; gap:\
        \ 4px; padding-right: 5px;\">\n      <div style=\"display: flex; flex-direction:\
        \ row; align-items: center; gap: 6px; margin-bottom: 2px;\">\n        <ha-icon\
        \ icon=\"${icon}\" style=\"width: 14px; height: 14px; color: ${color}; opacity:\
        \ 0.8;\"></ha-icon>\n        <div style=\"font-size: 10px; font-weight: 900;\
        \ color: white; text-transform: uppercase; letter-spacing: 1px; opacity: 0.8;\"\
        >${text}</div>\n      </div>\n      <div style=\"display: flex; flex-direction:\
        \ row; justify-content: center; gap: 12px; width: 100%;\">\n        <div style=\"\
        display: flex; flex-direction: row; align-items: center; gap: 8px; background:\
        \ rgba(255,255,255,0.03); padding: 4px 10px 4px 4px; border-radius: 20px;\
        \ border: 1px solid rgba(255,255,255,0.05);\">\n          <img src=\"${a_pic}\"\
        \ style=\"width: 36px; height: 36px; border-radius: 50%; border: 2px solid\
        \ ${a_color}; flex-shrink: 0; filter: drop-shadow(0 0 5px ${a_color}60);\"\
        \ />\n          <div style=\"display: flex; flex-direction: column; align-items:\
        \ flex-start; line-height: 1;\">\n            <div style=\"font-size: 13px;\
        \ font-weight: 900; color: white;\">${a_val}</div>\n            <div style=\"\
        font-size: 8px; font-weight: 700; opacity: 0.6; text-transform: uppercase;\"\
        >MIN</div>\n          </div>\n        </div>\n        <div style=\"display:\
        \ flex; flex-direction: row; align-items: center; gap: 8px; background: rgba(255,255,255,0.03);\
        \ padding: 4px 10px 4px 4px; border-radius: 20px; border: 1px solid rgba(255,255,255,0.05);\"\
        >\n          <img src=\"${c_pic}\" style=\"width: 36px; height: 36px; border-radius:\
        \ 50%; border: 2px solid ${c_color}; flex-shrink: 0; filter: drop-shadow(0\
        \ 0 5px ${c_color}60);\" />\n          <div style=\"display: flex; flex-direction:\
        \ column; align-items: flex-start; line-height: 1;\">\n            <div style=\"\
        font-size: 13px; font-weight: 900; color: white;\">${c_val}</div>\n      \
        \      <div style=\"font-size: 8px; font-weight: 700; opacity: 0.6; text-transform:\
        \ uppercase;\">MIN</div>\n          </div>\n        </div>\n      </div>\n\
        \    </div>\n  `;\n]]]\n"
      switch: "[[[\n  const is_home = variables.is_home;\n  const color = is_home\
        \ ? '#FFA500' : '#3DDBB8';\n  return `\n    <div onclick=\"event.stopPropagation();\
        \ window.event && window.event.preventDefault(); this.style.transform='scale(0.8)';\
        \ setTimeout(()=>this.style.transform='scale(1)', 150); document.querySelector('home-assistant').hass.callService('input_boolean',\
        \ 'toggle', {entity_id: 'input_boolean.commute_card_flip'});\" \n        \
        \ onpointerdown=\"event.stopPropagation();\"\n         ontouchstart=\"event.stopPropagation();\"\
        \n         ontouchend=\"event.stopPropagation();\"\n         style=\"width:\
        \ 100%; height: 100%; display: flex; align-items: center; justify-content:\
        \ center; background: rgba(255,255,255,0.03); transition: all 0.2s ease;\"\
        >\n      <ha-icon icon=\"mdi:swap-horizontal\" style=\"width: 24px; height:\
        \ 24px; color: ${color}; filter: drop-shadow(0 0 8px ${color}aa); pointer-events:\
        \ none;\"></ha-icon>\n    </div>\n  `;\n]]]\n"
      footer: "[[[\n   setTimeout(() => {\n     const isEditMode = window.location.search.includes('edit=1')\
        \ || window.location.pathname.includes('edit');\n     if (isEditMode) {\n\
        \        const el = document.querySelector(\"hui-conditional-card\"); \n \
        \       if (el) el.style.display = 'block';\n     }\n   }, 1000);\n\n   return\
        \ (function() {\n     return `\n       <div style=\"display:flex; width:100%;\
        \ justify-content:center; align-items:center;\">\n         <ha-icon icon=\"\
        mdi:chevron-down\" style=\"color: rgba(255,255,255,0.7); width: 18px; height:\
        \ 18px;\"></ha-icon>\n       </div>\n     `;\n   })();\n]]]\n"
  entities:
  - type: custom:button-card
    show_name: false
    show_icon: false
    styles:
      card:
      - background: transparent
      - border: none
      - box-shadow: none
      - padding: 0
      - margin-top: 15px
      grid:
      - grid-template-areas: '"content"'
      - grid-template-columns: 100%
    custom_fields:
      content:
        card:
          type: horizontal-stack
          cards:
          - type: custom:button-card
            entity: "[[[\n  const flip = states['input_boolean.commute_card_flip']\
              \ && states['input_boolean.commute_card_flip'].state === 'on';\n  const\
              \ is_pm = new Date().getHours() >= 12;\n  const is_home = (is_pm &&\
              \ !flip) || (!is_pm && flip);\n  return is_home ? 'sensor.aline_travail_maison'\
              \ : 'sensor.trajet_maison_travail_aline';\n]]]\n"
            name: "[[[\n  // --- RESPONSIVE ---\n  const isMobile = window.innerWidth\
              \ < 500;\n  const carSize = isMobile ? '30px' : '38px';\n  const titleSize\
              \ = isMobile ? '12px' : '14px';\n  const journeyScale = isMobile ? '1.05'\
              \ : '1.2';\n  const timeSize = isMobile ? '18px' : '20px';\n  const\
              \ statusSize = isMobile ? '12px' : '14px';\n  const metricSize = isMobile\
              \ ? '10px' : '11px';\n  const topMargin = isMobile ? '-4px' : '-6px';\n\
              \  const titleLeftShift = isMobile ? '-10px' : '-14px'; \n  // --- LOGIC\
              \ ---\n  const t_red = 25; const t_orange = 10; const t_white = 5;\n\
              \  const flip = states['input_boolean.commute_card_flip'] && states['input_boolean.commute_card_flip'].state\
              \ === 'on';\n  const is_pm = new Date().getHours() >= 12;\n  const is_home\
              \ = (is_pm && !flip) || (!is_pm && flip);\n  const sid = is_home ? 'sensor.aline_travail_maison'\
              \ : 'sensor.trajet_maison_travail_aline';\n  const s1_sid = is_home\
              \ ? 'sensor.trajet_aline_retour_semaine_derniere' : 'sensor.trajet_aline_semaine_derniere';\n\
              \  const avg_sid = is_home ? 'sensor.trajet_aline_retour_moyenne' :\
              \ 'sensor.trajet_aline_moyenne';\n  const normal_sid = 'input_number.aline_commute_normal';\n\
              \  const main_entity = states[sid];\n  if (!main_entity) return 'Chargement...';\n\
              \  \n  const current = Math.round(parseFloat(main_entity.state) || 0);\n\
              \  const normal = Math.round(parseFloat(states[normal_sid]?.state) ||\
              \ 0);\n  const delay = current - normal;\n  \n  let status = 'Fluide';\
              \ let statusColor = '#3DDBB8';\n  if (delay > t_red) { status = 'Bouché';\
              \ statusColor = '#DC5050'; }\n  else if (delay > t_orange) { status\
              \ = 'Dense'; statusColor = '#FFA500'; }\n  else if (delay > t_white)\
              \ { status = 'Normal'; statusColor = 'white'; }\n  \n  const arrow =\
              \ is_home ? 'mdi:arrow-left-bold' : 'mdi:arrow-right-bold';\n  const\
              \ green = '#3DDBB8';\n  const homeColor = is_home ? 'white' : green;\n\
              \  const workColor = is_home ? green : 'white';\n  const delayNotice\
              \ = delay > 0 ? ` (+${Math.abs(delay)} min)` : '';\n  const deadline\
              \ = new Date('2026-02-01T07:20:00');\n  const isLearning = new Date()\
              \ < deadline;\n  \n  const getStatDisplay = (sid, isLearn) => {\n  \
              \  const state = states[sid]?.state;\n    if (!state || state === 'unavailable'\
              \ || state === 'unknown') return 'Indisp.';\n    const val = parseFloat(state);\n\
              \    if (isNaN(val) || val <= 0) return isLearn ? 'Appre.' : 'Indisp.';\n\
              \    return `${Math.round(val)} min`;\n  };\n\n  const avg7d_display\
              \ = getStatDisplay(avg_sid, isLearning);\n  const s1_display = getStatDisplay(s1_sid,\
              \ isLearning);\n  \n  const avatar = states['person.user_2']?.attributes.entity_picture;\n\
              \  const avatar_html = avatar \n    ? `<img src=\"${avatar}\" style=\"\
              width: ${carSize}; height: ${carSize}; border-radius: 50%; border: 2px\
              \ solid ${statusColor}; flex-shrink: 0; filter: drop-shadow(0 0 5px\
              \ ${statusColor}80);\" />`\n    : `<ha-icon icon=\"mdi:car\" style=\"\
              width: ${carSize}; height: ${carSize}; color: ${statusColor}; flex-shrink:\
              \ 0;\"></ha-icon>`;\n\n  return `\n    <div style=\"display: flex; flex-direction:\
              \ column; align-items: flex-start; width: 100%; overflow: visible;\"\
              >\n      <div style=\"display: flex; align-items: center; justify-content:\
              \ flex-start; gap: 8px; margin-bottom: 2px; margin-top: ${topMargin};\
              \ margin-left: ${titleLeftShift}; width: 100%; overflow: visible;\"\
              >\n        ${avatar_html}\n        <span style=\"font-weight: 900; font-size:\
              \ ${titleSize}; color: white; flex-shrink: 0; margin-left: -2px;\">Trajet\
              \ User 2</span>\n        <div style=\"display: flex; align-items: center;\
              \ gap: 2px; transform: scale(${journeyScale}); transform-origin: left\
              \ center; margin-left: 6px; flex-shrink: 0; overflow: visible;\">\n\
              \          <ha-icon icon=\"mdi:home-variant\" style=\"width: 14px; height:\
              \ 14px; color: ${homeColor};\"></ha-icon>\n          <ha-icon icon=\"\
              ${arrow}\" style=\"width: 16px; height: 16px; color: #FFA500;\"></ha-icon>\n\
              \          <ha-icon icon=\"mdi:office-building\" style=\"width: 14px;\
              \ height: 14px; color: ${workColor};\"></ha-icon>\n        </div>\n\
              \      </div>\n      <div style=\"line-height: 0.85em; text-align: left;\
              \ width: 100%; margin-top: 4px; overflow: visible;\">\n        <div\
              \ style=\"font-weight: 800; color: white; font-size: ${statusSize};\
              \ margin-bottom: 3px; white-space: nowrap;\">\n          <span style=\"\
              font-size: ${timeSize};\">${current} min</span> • <span style=\"color:\
              \ ${statusColor}\">${status}</span>${delayNotice}\n        </div>\n\
              \        <div style=\"font-weight: 700; color: white; font-size: ${metricSize};\
              \ opacity: 0.9;\">Même heure (S-1) : ${s1_display}</div>\n        <div\
              \ style=\"font-weight: 700; color: white; font-size: ${metricSize};\
              \ opacity: 0.9; margin-top: 1px;\">Moyenne 7j : ${avg7d_display}</div>\n\
              \        <div style=\"font-weight: 800; color: white; font-size: ${metricSize};\
              \ opacity: 0.9; margin-top: 4px;\">Sans bouchon : ${normal} min</div>\n\
              \      </div>\n    </div>\n  `;\n]]]\n"
            show_state: false
            show_label: false
            show_icon: false
            styles:
              card:
              - padding: '[[[ return window.innerWidth < 500 ? ''12px 10px'' : ''15px
                  15px''; ]]]

                  '
              - border-radius: 20px
              - border: "[[[\n  const t_red = 25; const t_orange = 10; const t_white\
                  \ = 5;\n  const flip = states['input_boolean.commute_card_flip']\
                  \ && states['input_boolean.commute_card_flip'].state === 'on';\n\
                  \  const is_pm = new Date().getHours() >= 12;\n  const is_home =\
                  \ (is_pm && !flip) || (!is_pm && flip);\n  const sid = is_home ?\
                  \ 'sensor.aline_travail_maison' : 'sensor.trajet_maison_travail_aline';\n\
                  \  const duration = Math.round(parseFloat(states[sid]?.state) ||\
                  \ 0);\n  const normal = Math.round(parseFloat(states['input_number.aline_commute_normal']?.state)\
                  \ || duration);\n  const delay = duration - normal;\n  if (delay\
                  \ > t_red) return '1px solid rgba(220, 80, 80, 0.5)';\n  if (delay\
                  \ > t_orange) return '1px solid rgba(255, 165, 0, 0.5)';\n  if (delay\
                  \ > t_white) return '1px solid rgba(255, 255, 255, 0.2)';\n  return\
                  \ '1px solid rgba(61, 219, 184, 0.5)';\n]]]\n"
              - background: "[[[\n  const t_red = 25; const t_orange = 10; const t_white\
                  \ = 5;\n  const flip = states['input_boolean.commute_card_flip']\
                  \ && states['input_boolean.commute_card_flip'].state === 'on';\n\
                  \  const is_pm = new Date().getHours() >= 12;\n  const is_home =\
                  \ (is_pm && !flip) || (!is_pm && flip);\n  const sid = is_home ?\
                  \ 'sensor.aline_travail_maison' : 'sensor.trajet_maison_travail_aline';\n\
                  \  const duration = Math.round(parseFloat(states[sid]?.state) ||\
                  \ 0);\n  const normal = Math.round(parseFloat(states['input_number.aline_commute_normal']?.state)\
                  \ || duration);\n  const delay = duration - normal;\n  if (delay\
                  \ > t_red) return 'linear-gradient(145deg, rgba(220, 80, 80, 0.3),\
                  \ rgba(20, 27, 38, 0.8))';\n  if (delay > t_orange) return 'linear-gradient(145deg,\
                  \ rgba(255, 165, 0, 0.3), rgba(20, 27, 38, 0.8))';\n  if (delay\
                  \ > t_white) return 'linear-gradient(145deg, rgba(255, 255, 255,\
                  \ 0.08), rgba(20, 27, 38, 0.8))';\n  return 'linear-gradient(145deg,\
                  \ rgba(61, 219, 184, 0.2), rgba(20, 27, 38, 0.8))';\n]]]\n"
              - backdrop-filter: blur(20px)
              - -webkit-backdrop-filter: blur(20px)
              - box-shadow: 0 4px 15px rgba(0,0,0,0.3)
              - margin-top: 15px
              - transition: all 0.3s ease
              grid:
              - grid-template-areas: '"n"'
              - grid-template-columns: 100%
              name:
              - justify-self: start
              - width: 100%
              - overflow: visible
            tap_action:
              action: more-info
          - type: custom:button-card
            entity: "[[[\n  const flip = states['input_boolean.commute_card_flip']\
              \ && states['input_boolean.commute_card_flip'].state === 'on';\n  const\
              \ is_pm = new Date().getHours() >= 12;\n  const is_home = (is_pm &&\
              \ !flip) || (!is_pm && flip);\n  return is_home ? 'sensor.chris_travail_maison'\
              \ : 'sensor.trajet_maison_travail_chris';\n]]]\n"
            name: "[[[\n  // --- RESPONSIVE ---\n  const isMobile = window.innerWidth\
              \ < 500;\n  const carSize = isMobile ? '30px' : '38px';\n  const titleSize\
              \ = isMobile ? '12px' : '14px';\n  const journeyScale = isMobile ? '1.05'\
              \ : '1.2';\n  const timeSize = isMobile ? '18px' : '20px';\n  const\
              \ statusSize = isMobile ? '12px' : '14px';\n  const metricSize = isMobile\
              \ ? '10px' : '11px';\n  const topMargin = isMobile ? '-4px' : '-6px';\n\
              \  const titleLeftShift = isMobile ? '-10px' : '-14px'; \n  // --- LOGIC\
              \ ---\n  const t_red = 25; const t_orange = 10; const t_white = 5;\n\
              \  const flip = states['input_boolean.commute_card_flip'] && states['input_boolean.commute_card_flip'].state\
              \ === 'on';\n  const is_pm = new Date().getHours() >= 12;\n  const is_home\
              \ = (is_pm && !flip) || (!is_pm && flip);\n  const sid = is_home ? 'sensor.chris_travail_maison'\
              \ : 'sensor.trajet_maison_travail_chris';\n  const s1_sid = is_home\
              \ ? 'sensor.trajet_chris_retour_semaine_derniere' : 'sensor.trajet_chris_semaine_derniere';\n\
              \  const avg_sid = is_home ? 'sensor.trajet_chris_retour_moyenne' :\
              \ 'sensor.trajet_chris_moyenne';\n  const normal_sid = 'input_number.chris_commute_normal';\n\
              \  const main_entity = states[sid];\n  if (!main_entity) return 'Chargement...';\n\
              \  \n  const current = Math.round(parseFloat(main_entity.state) || 0);\n\
              \  const normal = Math.round(parseFloat(states[normal_sid]?.state) ||\
              \ 0);\n  const delay = current - normal;\n  \n  let status = 'Fluide';\
              \ let statusColor = '#3DDBB8';\n  if (delay > t_red) { status = 'Bouché';\
              \ statusColor = '#DC5050'; }\n  else if (delay > t_orange) { status\
              \ = 'Dense'; statusColor = '#FFA500'; }\n  else if (delay > t_white)\
              \ { status = 'Normal'; statusColor = 'white'; }\n  \n  const arrow =\
              \ is_home ? 'mdi:arrow-left-bold' : 'mdi:arrow-right-bold';\n  const\
              \ green = '#3DDBB8';\n  const homeColor = is_home ? 'white' : green;\n\
              \  const workColor = is_home ? green : 'white';\n  const delayNotice\
              \ = delay > 0 ? ` (+${Math.abs(delay)} min)` : '';\n  const deadline\
              \ = new Date('2026-02-01T07:20:00');\n  const isLearning = new Date()\
              \ < deadline;\n\n  const getStatDisplay = (sid, isLearn) => {\n    const\
              \ state = states[sid]?.state;\n    if (!state || state === 'unavailable'\
              \ || state === 'unknown') return 'Indisp.';\n    const val = parseFloat(state);\n\
              \    if (isNaN(val) || val <= 0) return isLearn ? 'Appre.' : 'Indisp.';\n\
              \    return `${Math.round(val)} min`;\n  };\n\n  const avg7d_display\
              \ = getStatDisplay(avg_sid, isLearning);\n  const s1_display = getStatDisplay(s1_sid,\
              \ isLearning);\n  \n  const avatar = states['person.user_1']?.attributes.entity_picture;\n\
              \  const avatar_html = avatar \n    ? `<img src=\"${avatar}\" style=\"\
              width: ${carSize}; height: ${carSize}; border-radius: 50%; border: 2px\
              \ solid ${statusColor}; flex-shrink: 0; filter: drop-shadow(0 0 5px\
              \ ${statusColor}80);\" />`\n    : `<ha-icon icon=\"mdi:car\" style=\"\
              width: ${carSize}; height: ${carSize}; color: ${statusColor}; flex-shrink:\
              \ 0;\"></ha-icon>`;\n\n  return `\n    <div style=\"display: flex; flex-direction:\
              \ column; align-items: flex-start; width: 100%; overflow: visible;\"\
              >\n      <div style=\"display: flex; align-items: center; justify-content:\
              \ flex-start; gap: 8px; margin-bottom: 2px; margin-top: ${topMargin};\
              \ margin-left: ${titleLeftShift}; width: 100%; overflow: visible;\"\
              >\n        ${avatar_html}\n        <span style=\"font-weight: 900; font-size:\
              \ ${titleSize}; color: white; flex-shrink: 0; margin-left: -2px;\">Trajet\
              \ User 1</span>\n        <div style=\"display: flex; align-items: center;\
              \ gap: 2px; transform: scale(${journeyScale}); transform-origin: left\
              \ center; margin-left: 6px; flex-shrink: 0; overflow: visible;\">\n\
              \          <ha-icon icon=\"mdi:home-variant\" style=\"width: 14px; height:\
              \ 14px; color: ${homeColor};\"></ha-icon>\n          <ha-icon icon=\"\
              ${arrow}\" style=\"width: 16px; height: 16px; color: #FFA500;\"></ha-icon>\n\
              \          <ha-icon icon=\"mdi:office-building\" style=\"width: 14px;\
              \ height: 14px; color: ${workColor};\"></ha-icon>\n        </div>\n\
              \      </div>\n      <div style=\"line-height: 0.85em; text-align: left;\
              \ width: 100%; margin-top: 4px; overflow: visible;\">\n        <div\
              \ style=\"font-weight: 800; color: white; font-size: ${statusSize};\
              \ margin-bottom: 3px; white-space: normal;\">\n          <span style=\"\
              font-size: ${timeSize};\">${current} min</span> • <span style=\"color:\
              \ ${statusColor}\">${status}</span>${delayNotice}\n        </div>\n\
              \        <div style=\"font-weight: 700; color: white; font-size: ${metricSize};\
              \ opacity: 0.9; white-space: normal; word-wrap: break-word;\">Même heure\
              \ (S-1) : ${s1_display}</div>\n        <div style=\"font-weight: 700;\
              \ color: white; font-size: ${metricSize}; opacity: 0.9; margin-top:\
              \ 1px; white-space: normal; word-wrap: break-word;\">Moyenne 7j : ${avg7d_display}</div>\n\
              \        <div style=\"font-weight: 800; color: white; font-size: ${metricSize};\
              \ opacity: 0.9; margin-top: 4px; white-space: normal; word-wrap: break-word;\"\
              >Sans bouchon : ${normal} min</div>\n      </div>\n    </div>\n  `;\n\
              ]]]\n"
            show_state: false
            show_label: false
            show_icon: false
            styles:
              card:
              - padding: '[[[ return window.innerWidth < 500 ? ''12px 10px'' : ''15px
                  15px''; ]]]

                  '
              - border-radius: 20px
              - border: "[[[\n  const t_red = 25; const t_orange = 10; const t_white\
                  \ = 5;\n  const flip = states['input_boolean.commute_card_flip']\
                  \ && states['input_boolean.commute_card_flip'].state === 'on';\n\
                  \  const is_pm = new Date().getHours() >= 12;\n  const is_home =\
                  \ (is_pm && !flip) || (!is_pm && flip);\n  const sid = is_home ?\
                  \ 'sensor.chris_travail_maison' : 'sensor.trajet_maison_travail_chris';\n\
                  \  const duration = Math.round(parseFloat(states[sid]?.state) ||\
                  \ 0);\n  const normal = Math.round(parseFloat(states['input_number.chris_commute_normal']?.state)\
                  \ || duration);\n  const delay = duration - normal;\n  if (delay\
                  \ > t_red) return '1px solid rgba(220, 80, 80, 0.5)';\n  if (delay\
                  \ > t_orange) return '1px solid rgba(255, 165, 0, 0.5)';\n  if (delay\
                  \ > t_white) return '1px solid rgba(255, 255, 255, 0.2)';\n  return\
                  \ '1px solid rgba(61, 219, 184, 0.5)';\n]]]\n"
              - background: "[[[\n  const t_red = 25; const t_orange = 10; const t_white\
                  \ = 5;\n  const flip = states['input_boolean.commute_card_flip']\
                  \ && states['input_boolean.commute_card_flip'].state === 'on';\n\
                  \  const is_pm = new Date().getHours() >= 12;\n  const is_home =\
                  \ (is_pm && !flip) || (!is_pm && flip);\n  const sid = is_home ?\
                  \ 'sensor.chris_travail_maison' : 'sensor.trajet_maison_travail_chris';\n\
                  \  const duration = Math.round(parseFloat(states[sid]?.state) ||\
                  \ 0);\n  const normal = Math.round(parseFloat(states['input_number.chris_commute_normal']?.state)\
                  \ || duration);\n  const delay = duration - normal;\n  if (delay\
                  \ > t_red) return 'linear-gradient(145deg, rgba(220, 80, 80, 0.3),\
                  \ rgba(20, 27, 38, 0.8))';\n  if (delay > t_orange) return 'linear-gradient(145deg,\
                  \ rgba(255, 165, 0, 0.3), rgba(20, 27, 38, 0.8))';\n  if (delay\
                  \ > t_white) return 'linear-gradient(145deg, rgba(255, 255, 255,\
                  \ 0.08), rgba(20, 27, 38, 0.8))';\n  return 'linear-gradient(145deg,\
                  \ rgba(61, 219, 184, 0.2), rgba(20, 27, 38, 0.8))';\n]]]\n"
              - backdrop-filter: blur(20px)
              - -webkit-backdrop-filter: blur(20px)
              - box-shadow: 0 4px 15px rgba(0,0,0,0.3)
              - margin-top: 15px
              - transition: all 0.3s ease
              grid:
              - grid-template-areas: '"n"'
              - grid-template-columns: 100%
              name:
              - justify-self: start
              - width: 100%
              - overflow: visible
            tap_action:
              action: more-info
```

---

## Pompe à Chaleur & Eau Chaude (PAC)

<div align="center">
  <img src="images/showcase/pac_closed.png" width="45%" />
  <img src="images/showcase/pac_expanded.png" width="45%" />
</div>

**Code YAML :**

```yaml
type: custom:fold-entity-row
padding: 0
clickable: true
card_mod:
  style: 'div#head { display: block !important; width: 100% !important; padding: 0
    !important; margin: 0 !important; --toggle-icon-width: 0px !important; }

    #head { padding: 0 !important; margin: 0 !important; width: 100% !important; cursor:
    pointer !important; }

    #head ha-icon { display: none !important; }

    div#items { padding: 0 !important; margin: 0 !important; }

    '
head:
  type: custom:button-card
  show_name: false
  show_icon: false
  show_state: false
  styles:
    card:
    - padding: 0
    - background: rgba(20, 27, 38, 0.6)
    - backdrop-filter: blur(10px)
    - -webkit-backdrop-filter: blur(10px)
    - border-radius: 20px
    - border: "[[[ \n  const heating = states['binary_sensor.dhwp_actuator_energy_demand_status']?.state\
        \ === 'on';\n  const color = heating ? '#FFA500' : '#46D278';\n  return `1px\
        \ solid ${color}80`;\n]]]\n"
    - box-shadow: "[[[ \n  const heating = states['binary_sensor.dhwp_actuator_energy_demand_status']?.state\
        \ === 'on';\n  return heating ? '0 0 20px rgba(255, 165, 0, 0.3), 0 8px 32px\
        \ rgba(0,0,0,0.4)' : '0 8px 32px rgba(0,0,0,0.4)';\n]]]\n"
    - height: 85px
    grid:
    - grid-template-areas: '"icon details" "footer footer"'
    - grid-template-columns: 130px 1fr
    - grid-template-rows: 60px 25px
    custom_fields:
      icon:
      - justify-self: stretch
      - align-self: stretch
      - border-right: 2px solid rgba(255,255,255,0.6)
      - border-top-left-radius: 20px
      - display: flex
      - align-items: center
      - justify-content: center
      details:
      - justify-self: stretch
      - align-self: stretch
      - display: flex
      - align-items: center
      - justify-content: center
      - padding: 0 10px
  custom_fields:
    icon: "[[[\n  const heating = states['binary_sensor.dhwp_actuator_energy_demand_status']?.state\
      \ === 'on';\n  const color = heating ? '#FFA500' : '#46D278';\n  const fanAnim\
      \ = heating ? 'animation: rotateFan 2s linear infinite;' : '';\n  \n  const\
      \ svg = `\n    <svg viewBox=\"0 0 100 100\" width=\"55\" height=\"55\" style=\"\
      filter: drop-shadow(0 6px 12px rgba(0,0,0,0.5));\">\n      <defs>\n        <linearGradient\
      \ id=\"pacBody\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">\n          <stop\
      \ offset=\"0%\" style=\"stop-color:#ffffff;stop-opacity:1\" />\n          <stop\
      \ offset=\"100%\" style=\"stop-color:#f0f0f0;stop-opacity:1\" />\n        </linearGradient>\n\
      \        <radialGradient id=\"fanGlow\" cx=\"50%\" cy=\"50%\" r=\"50%\">\n \
      \         <stop offset=\"0%\" style=\"stop-color:${color};stop-opacity:0.3\"\
      \ />\n          <stop offset=\"100%\" style=\"stop-color:${color};stop-opacity:0\"\
      \ />\n        </radialGradient>\n      </defs>\n      <rect x=\"30\" y=\"20\"\
      \ width=\"40\" height=\"60\" rx=\"8\" ry=\"8\" fill=\"url(#pacBody)\" />\n \
      \     <circle cx=\"50\" cy=\"45\" r=\"14\" fill=\"rgba(0,0,0,0.05)\" stroke=\"\
      rgba(0,0,0,0.1)\" stroke-width=\"1\" />\n      <g style=\"transform-origin:\
      \ 50px 45px; ${fanAnim}\">\n        <path d=\"M50,45 L50,33 A1.5,1.5 0 0,1 51.5,33\
      \ L51.5,45 Z\" fill=\"${color}\" />\n        <path d=\"M50,45 L62,45 A1.5,1.5\
      \ 0 0,1 62,46.5 L50,46.5 Z\" fill=\"${color}\" />\n        <path d=\"M50,45\
      \ L50,57 A1.5,1.5 0 0,1 48.5,57 L48.5,45 Z\" fill=\"${color}\" />\n        <path\
      \ d=\"M50,45 L38,45 A1.5,1.5 0 0,1 38,43.5 L50,43.5 Z\" fill=\"${color}\" />\n\
      \        <circle cx=\"50\" cy=\"45\" r=\"3\" fill=\"${color}\" />\n      </g>\n\
      \      <rect x=\"38\" y=\"65\" width=\"24\" height=\"4\" rx=\"1.5\" fill=\"\
      rgba(0,0,0,0.1)\" />\n      <circle cx=\"50\" cy=\"45\" r=\"18\" fill=\"url(#fanGlow)\"\
      \ />\n    </svg>\n    <style>@keyframes rotateFan { from { transform: rotate(0deg);\
      \ } to { transform: rotate(360deg); } }</style>\n  `;\n\n  return `\n    <div\
      \ style=\"width: 100%; height: 100%; display: flex; flex-direction: column;\
      \ align-items: center; justify-content: center; background: linear-gradient(135deg,\
      \ ${color}33 0%, rgba(20, 27, 38, 0) 100%); border-top-left-radius: 20px; box-sizing:\
      \ border-box; position: relative;\">\n      <div style=\"position: absolute;\
      \ width: 50px; height: 50px; background: ${color}; border-radius: 50%; filter:\
      \ blur(25px); opacity: 0.3; animation: pulseGlow 3s infinite alternate ease-in-out;\"\
      ></div>\n      <div style=\"position: relative; z-index: 1; display: flex; flex-direction:\
      \ column; align-items: center; justify-content: center;\">\n        ${svg}\n\
      \        <div style=\"font-size: 8px; font-weight: 900; color: white; text-transform:\
      \ uppercase; letter-spacing: 0.8px; margin-top: -2px;\">PAC & Eau Chaude</div>\n\
      \      </div>\n      <style>@keyframes pulseGlow { 0% { transform: scale(0.8);\
      \ opacity: 0.2; } 100% { transform: scale(1.2); opacity: 0.4; } }</style>\n\
      \    </div>\n  `;\n]]]\n"
    details: "[[[\n  const t_maison = (parseFloat(states['sensor.hp_actuator_io_5470820_9_temperature']?.state)\
      \ || 0).toFixed(1);\n  const t_ext = (parseFloat(states['sensor.hp_actuator_io_5470820_3_temperature']?.state)\
      \ || 0).toFixed(1);\n  const s3 = states['water_heater.temperature_ballon'];\n\
      \  const t_ballon = (parseFloat(s3?.attributes?.current_temperature || s3?.attributes?.temperature)\
      \ || 0).toFixed(1);\n  const conso = (parseFloat(states['sensor.eau_chaude_du_jour_calculee']?.state)\
      \ || 0).toFixed(0);\n\n  const isMobile = window.innerWidth < 500;\n  const\
      \ mainGap = isMobile ? \"10px\" : \"25px\";\n  const valSize = isMobile ? \"\
      14px\" : \"18px\";\n  const labelSize = isMobile ? \"9px\" : \"10px\";\n  const\
      \ iconSize = isMobile ? \"16px\" : \"20px\";\n\n  return `\n    <div style=\"\
      display: flex; flex-direction: row; align-items: center; justify-content: center;\
      \ gap: ${mainGap}; height: 100%; width: 100%;\">\n      <!-- Groupe 1: Maison\
      \ & Ext -->\n      <div style=\"display: flex; flex-direction: column; gap:\
      \ 4px; align-items: center;\">\n        <div style=\"display: flex; align-items:\
      \ baseline; gap: 4px;\">\n          <ha-icon icon=\"mdi:home\" style=\"width:\
      \ ${iconSize}; height: ${iconSize}; color: #FFA500;\"></ha-icon>\n         \
      \ <span style=\"font-size: ${valSize}; font-weight: 900; color: white;\">${t_maison}°</span>\n\
      \        </div>\n        <div style=\"font-size: ${labelSize}; font-weight:\
      \ 700; color: rgba(255,255,255,0.5); text-transform: uppercase; letter-spacing:\
      \ 0.5px;\">Ext. <span style=\"color: #3DDBB8;\">${t_ext}°</span></div>\n   \
      \   </div>\n\n      <div style=\"width: 1px; height: 30px; background: rgba(255,255,255,0.1);\"\
      ></div>\n\n      <!-- Groupe 2: Eau Chaude -->\n      <div style=\"display:\
      \ flex; flex-direction: column; gap: 4px; align-items: center;\">\n        <div\
      \ style=\"display: flex; align-items: baseline; gap: 4px;\">\n          <ha-icon\
      \ icon=\"mdi:water-boiler\" style=\"width: ${iconSize}; height: ${iconSize};\
      \ color: #008CFF;\"></ha-icon>\n          <span style=\"font-size: ${valSize};\
      \ font-weight: 900; color: white;\">${t_ballon}°</span>\n        </div>\n  \
      \      <div style=\"font-size: ${labelSize}; font-weight: 700; color: rgba(255,255,255,0.5);\
      \ text-transform: uppercase; letter-spacing: 0.5px;\">Conso. <span style=\"\
      color: #78EBFF;\">${conso}L</span></div>\n      </div>\n    </div>\n  `;\n]]]\n"
    footer: '[[[ return `<div style="display:flex; width:100%; justify-content:center;
      align-items:center; padding-bottom: 5px;"><ha-icon icon="mdi:chevron-down" style="color:
      rgba(255,255,255,0.5); width: 16px; height: 16px;"></ha-icon></div>`; ]]]

      '
entities:
- type: custom:button-card
  show_name: false
  show_icon: false
  styles:
    card:
    - background: transparent
    - border: none
    - box-shadow: none
    - padding: 0
    - margin-top: 15px
    grid:
    - grid-template-areas: '"content"'
    - grid-template-columns: 100%
  custom_fields:
    content:
      card:
        type: horizontal-stack
        cards:
        - type: custom:button-card
          entity: climate.hp_actuator_thermostat
          name: Pompe à Chaleur
          show_state: true
          show_icon: false
          aspect_ratio: 16/9
          styles:
            card:
            - padding: 0
            - border-radius: 20px
            - border: "[[[\n  const stateObj = states['binary_sensor.dhwp_actuator_energy_demand_status'];\n\
                \  const heating = stateObj && stateObj.state === 'on';\n  return\
                \ heating ? '1px solid rgba(255, 165, 0, 0.5)' : '1px solid rgba(255,255,255,0.1)';\n\
                ]]]\n"
            - background: rgba(20, 27, 38, 0.6)
            - backdrop-filter: blur(20px)
            - -webkit-backdrop-filter: blur(20px)
            - box-shadow: "[[[\n  const stateObj = states['binary_sensor.dhwp_actuator_energy_demand_status'];\n\
                \  const heating = stateObj && stateObj.state === 'on';\n  return\
                \ heating \n    ? '0 0 20px rgba(255, 165, 0, 0.3), 0 8px 32px rgba(0,0,0,0.3)'\
                \ \n    : '0 8px 32px rgba(0,0,0,0.3)';\n]]]\n"
            - overflow: hidden
            - min-height: 220px
            - transition: all 0.5s ease
            name:
            - position: absolute
            - z-index: 2
            - top: 12px
            - left: 0
            - right: 0
            - text-align: center
            - font-size: 16px
            - font-weight: 700
            - letter-spacing: 0.5px
            - color: white
            - text-shadow: 0 2px 4px rgba(0,0,0,0.8)
            state:
            - position: absolute
            - z-index: 2
            - top: 34px
            - left: 0
            - right: 0
            - text-align: center
            - font-size: 13px
            - opacity: 0.8
            - font-weight: 500
            - color: rgba(255,255,255,0.9)
            - text-shadow: 0 2px 4px rgba(0,0,0,0.8)
            custom_fields:
              bg:
              - position: absolute
              - inset: 0
              - z-index: 0
              - opacity: 0.9
              - pointer-events: none
              overlay:
              - position: absolute
              - inset: 0
              - z-index: 1
              - background: linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0)
                  30%, rgba(0,0,0,0) 70%, rgba(0,0,0,0.8) 100%)
              - pointer-events: none
              gauge_pac:
              - position: absolute
              - z-index: 3
              - left: 16px
              - top: 60px
              - bottom: 40px
              - width: 14px
              - border-radius: 10px
              - background: rgba(0,0,0,0.3)
              - border: 1px solid rgba(255,255,255,0.1)
              - box-shadow: 0 4px 10px rgba(0,0,0,0.3)
              gauge_ext:
              - position: absolute
              - z-index: 3
              - right: 16px
              - top: 60px
              - bottom: 40px
              - width: 14px
              - border-radius: 10px
              - background: rgba(0,0,0,0.3)
              - border: 1px solid rgba(255,255,255,0.1)
              - box-shadow: 0 4px 10px rgba(0,0,0,0.3)
              ext_label:
              - position: absolute
              - z-index: 4
              - right: 16px
              - bottom: 20px
              - font-size: 11px
              - font-weight: 600
              - color: rgba(255,255,255,0.8)
              - text-shadow: 0 1px 2px rgba(0,0,0,0.8)
              - text-align: center
              - width: 40px
              - margin-right: -13px
              temp:
              - position: absolute
              - z-index: 4
              - left: 50%
              - bottom: 35px
              - transform: translateX(-50%)
              - font-size: 28px
              - font-weight: 800
              - color: white
              - text-shadow: 0 4px 12px rgba(0,0,0,0.5)
              - letter-spacing: -0.5px
              consigne_inline:
              - position: absolute
              - z-index: 4
              - left: 50%
              - bottom: 15px
              - transform: translateX(-50%)
              - font-size: 12px
              - font-weight: 600
              - color: rgba(255,255,255,0.7)
              - background: rgba(0,0,0,0.3)
              - padding: 2px 8px
              - border-radius: 10px
              - border: 1px solid rgba(255,255,255,0.05)
          custom_fields:
            overlay: ''
            bg: "[[[\n  const demand = states['binary_sensor.dhwp_actuator_energy_demand_status'];\n\
              \  const heating = demand && demand.state === 'on';\n  const bust =\
              \ (demand && demand.last_changed ? demand.last_changed : Date.now()).toString().replace(/\\\
              D/g,'');\n  const src = heating\n    ? `/local/pac_atlantic_heating_16_9_nostretch2.png?v=${bust}`\n\
              \    : `/local/pac_atlantic_idle_16_9_nostretch.png?v=${bust}`;\n  const\
              \ zoom = heating ? 1.4 : 1.6;\n  const anim = heating ? 'animation:\
              \ pulse_img_anim 1.2s infinite alternate ease-in-out;' : '';\n  return\
              \ `\n    <style>\n      @keyframes pulse_img_anim {\n        0% { opacity:\
              \ 0.35; filter: brightness(0.85); }\n        100% { opacity: 1; filter:\
              \ brightness(1.15); }\n      }\n    </style>\n    <div style=\"\n  \
              \    width:100%; height:100%;\n      background: url('${src}') center/contain\
              \ no-repeat;\n      transform: scale(${zoom});\n      transform-origin:\
              \ center;\n      transition: transform 0.5s ease;\n      ${anim}\n \
              \   \"></div>\n  `;\n]]]\n"
            temp: "[[[\n  var s = states['sensor.hp_actuator_io_5470820_9_temperature'];\n\
              \  var tRaw = s ? s.state : '—';\n  var t = parseFloat(tRaw.toString().replace(',',\
              \ '.'));\n  return (isFinite(t) ? t.toFixed(1) : '—') + '°';\n]]]\n"
            consigne_inline: "[[[\n  const stateObj = states['climate.hp_actuator_thermostat'];\n\
              \  if (!stateObj || !stateObj.attributes) return 'Cible —°';\n  let\
              \ raw = stateObj.attributes.temperature;\n  if (raw === undefined ||\
              \ raw === null) {\n    raw = stateObj.attributes.target_temp_high;\n\
              \  }\n  const s = parseFloat(raw);\n  return 'Cible ' + (isFinite(s)\
              \ ? s.toFixed(1) : '—') + '°';\n]]]\n"
            ext_label: "[[[\n  var s = states['sensor.hp_actuator_io_5470820_3_temperature'];\n\
              \  var eRaw = s ? s.state : '—';\n  var e = parseFloat(eRaw.toString().replace(',',\
              \ '.'));\n  return 'Ext\\n' + (isFinite(e) ? e.toFixed(1) : '—') + '°';\n\
              ]]]\n"
            gauge_pac: "[[[\n  var s = states['sensor.hp_actuator_io_5470820_9_temperature'];\n\
              \  var tRaw = s ? s.state : '—';\n  var t = parseFloat(tRaw.toString().replace(',',\
              \ '.'));\n  var min = -10, max = 38;\n  var safeT = isFinite(t) ? t\
              \ : min;\n  var pct = Math.max(0, Math.min(100, ((safeT - min) / (max\
              \ - min)) * 100));\n  var color = 'rgba(255,255,255,0.9)';\n  if (safeT\
              \ <= 7) color = '#78EBFF';\n  else if (safeT < 19) color = '#008CFF';\n\
              \  else if (safeT <= 25) color = '#46D278';\n  else if (safeT <= 31)\
              \ color = '#FFDC78';\n  else color = '#DC5050';\n  return '<div style=\"\
              width:100%; height:100%; position:relative; border-radius:10px; overflow:hidden;\"\
              ><div style=\"position:absolute; bottom:0; left:0; right:0; height:'\
              \ + pct + '%; background:' + color + '; transition: all 1s cubic-bezier(0.4,0,0.2,1);\
              \ box-shadow: 0 0 10px ' + color + ';\"></div></div>';\n]]]\n"
            gauge_ext: "[[[\n  var s = states['sensor.hp_actuator_io_5470820_3_temperature'];\n\
              \  var eRaw = s ? s.state : '—';\n  var e = parseFloat(eRaw.toString().replace(',',\
              \ '.'));\n  var min = -10, max = 38;\n  var safeT = isFinite(e) ? e\
              \ : min;\n  var pct = Math.max(0, Math.min(100, ((safeT - min) / (max\
              \ - min)) * 100));\n  var color = '#ffffff';\n  if (safeT <= 5) color\
              \ = '#78EBFF';\n  else if (safeT <= 15) color = '#008CFF';\n  else if\
              \ (safeT <= 25) color = '#46D278';\n  else if (safeT <= 30) color =\
              \ '#FFDC78';\n  else color = '#DC5050';\n  return '<div style=\"width:100%;\
              \ height:100%; position:relative; border-radius:10px; overflow:hidden;\"\
              ><div style=\"position:absolute; bottom:0; left:0; right:0; height:'\
              \ + pct + '%; background:' + color + '; transition: all 1s cubic-bezier(0.4,0,0.2,1);\
              \ box-shadow: 0 0 10px ' + color + ';\"></div></div>';\n]]]\n"
          extra_styles: "@keyframes pulse_img_anim {\n  0% { opacity: 0.4; filter:\
            \ brightness(0.8); }\n  100% { opacity: 1; filter: brightness(1.2); }\n\
            }\n"
        - type: custom:button-card
          entity: water_heater.temperature_ballon
          name: Ballon Thermor
          show_state: true
          show_icon: false
          styles:
            card:
            - padding: 0
            - border-radius: 20px
            - border: "[[[\n  const stateObj = states['binary_sensor.dhwp_actuator_energy_demand_status'];\n\
                \  const heating = stateObj && stateObj.state === 'on';\n  return\
                \ heating ? '1px solid rgba(255, 165, 0, 0.5)' : '1px solid rgba(255,255,255,0.1)';\n\
                ]]]\n"
            - background: rgba(20, 27, 38, 0.6)
            - backdrop-filter: blur(20px)
            - -webkit-backdrop-filter: blur(20px)
            - box-shadow: "[[[\n  const stateObj = states['binary_sensor.dhwp_actuator_energy_demand_status'];\n\
                \  const heating = stateObj && stateObj.state === 'on';\n  return\
                \ heating \n    ? '0 0 20px rgba(255, 165, 0, 0.3), 0 8px 32px rgba(0,0,0,0.3)'\
                \ \n    : '0 8px 32px rgba(0,0,0,0.3)';\n]]]\n"
            - overflow: hidden
            - min-height: 220px
            - transition: all 0.5s ease
            name:
            - position: absolute
            - z-index: 2
            - top: 12px
            - left: 0
            - right: 0
            - text-align: center
            - font-size: 16px
            - font-weight: 700
            - letter-spacing: 0.5px
            - color: white
            - text-shadow: 0 2px 4px rgba(0,0,0,0.8)
            state:
            - position: absolute
            - z-index: 2
            - top: 34px
            - left: 0
            - right: 0
            - text-align: center
            - font-size: 13px
            - opacity: 0.8
            - font-weight: 500
            - color: rgba(255,255,255,0.9)
            - text-shadow: 0 2px 4px rgba(0,0,0,0.8)
            custom_fields:
              bg:
              - position: absolute
              - inset: 0
              - z-index: 0
              overlay:
              - position: absolute
              - inset: 0
              - z-index: 1
              - background: linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0)
                  30%, rgba(0,0,0,0) 70%, rgba(0,0,0,0.8) 100%)
              gauge_temp_ballon:
              - position: absolute
              - z-index: 3
              - left: 16px
              - top: 60px
              - bottom: 40px
              - width: 14px
              - border-radius: 10px
              - background: rgba(0,0,0,0.3)
              - border: 1px solid rgba(255,255,255,0.1)
              - box-shadow: 0 4px 10px rgba(0,0,0,0.3)
              gauge:
              - position: absolute
              - z-index: 3
              - right: 16px
              - top: 60px
              - bottom: 40px
              - width: auto
              - display: flex
              - gap: 4px
              - align-items: flex-end
              max_label:
              - position: absolute
              - z-index: 4
              - right: 6px
              - top: 56%
              - transform: translateY(-50%) rotate(-90deg)
              - font-size: 12px
              - font-weight: 600
              - color: rgba(255,255,255,0.6)
              - text-align: center
              - width: 80px
              - opacity: 0.8
              temp:
              - position: absolute
              - z-index: 4
              - left: 50%
              - bottom: 35px
              - transform: translateX(-50%)
              - font-size: 28px
              - font-weight: 800
              - color: white
              - text-shadow: 0 4px 12px rgba(0,0,0,0.5)
              - letter-spacing: -0.5px
              conso_inline:
              - position: absolute
              - z-index: 4
              - left: 50%
              - bottom: 15px
              - transform: translateX(-50%)
              - font-size: 12px
              - font-weight: 600
              - color: rgba(255,255,255,0.7)
              - background: rgba(0,0,0,0.4)
              - padding: 2px 8px
              - border-radius: 10px
              - border: 1px solid rgba(255,255,255,0.05)
          custom_fields:
            overlay: ''
            bg: "[[[\n  const stateObj = states['binary_sensor.dhwp_actuator_energy_demand_status'];\n\
              \  const heating = stateObj && stateObj.state === 'on';\n  const bust\
              \ = (stateObj && stateObj.last_changed ? stateObj.last_changed : Date.now()).toString().replace(/\\\
              D/g,'');\n  const src = heating \n    ? `/local/ballon_thermore_200l_heating.png?v=${bust}`\
              \ \n    : `/local/ballon_thermore_200l.png?v=${bust}`;\n  const anim\
              \ = heating ? 'animation: pulse_ballon 1.2s infinite alternate ease-in-out;'\
              \ : '';\n  return `\n    <style>\n      @keyframes pulse_ballon {\n\
              \        0% { opacity: 0.35; filter: brightness(0.85); }\n        100%\
              \ { opacity: 1; filter: brightness(1.15); }\n      }\n    </style>\n\
              \    <div style=\"\n      width:100%; height:100%;\n      background:url('${src}')\
              \ center/contain no-repeat;\n      transform: scale(0.85);\n      transform-origin:\
              \ center;\n      ${anim}\n    \"></div>\n  `;\n]]]\n"
            temp: "[[[\n  const stateObj = states['water_heater.temperature_ballon'];\n\
              \  const tRaw = stateObj && stateObj.attributes ? (stateObj.attributes.current_temperature\
              \ || stateObj.attributes.temperature) : '—';\n  const t = parseFloat(tRaw);\n\
              \  return `${(isFinite(t) ? t.toFixed(1) : '—')}°`;\n]]]\n"
            conso_inline: "[[[\n  const sensorObj = states['sensor.eau_chaude_du_jour_calculee'];\n\
              \  const raw = (sensorObj && sensorObj.state) ? sensorObj.state.toString().replace(',',\
              \ '.') : '0';\n  const v = parseFloat(raw) || 0;\n  return `${v.toFixed(0)}\
              \ L / jour`;\n]]]\n"
            max_label: "[[[\n  const sensorObj = states['sensor.eau_chaude_du_jour_calculee'];\n\
              \  const raw = (sensorObj && sensorObj.state) ? sensorObj.state.toString().replace(',',\
              \ '.') : '0';\n  const v = parseFloat(raw) || 0;\n  let max = 200;\n\
              \  let color = 'rgba(255,255,255,0.6)';\n  if (v >= 400) {\n    max\
              \ = 600;\n    color = '#DC4646'; // Red\n  } else if (v >= 200) {\n\
              \    max = 400;\n    color = '#FFA500'; // Orange\n  }\n  return `<span\
              \ style=\"color: ${color}; transition: color 0.5s ease;\">Max ${max}\
              \ L</span>`;\n]]]\n"
            gauge_temp_ballon: "[[[\n  const stateObj = states['water_heater.temperature_ballon'];\n\
              \  const tRaw = stateObj && stateObj.attributes ? (stateObj.attributes.current_temperature\
              \ || stateObj.attributes.temperature) : '—';\n  const t = parseFloat(tRaw);\n\
              \  const min = 20, max = 65;\n  const safeT = isFinite(t) ? t : min;\n\
              \  const pct = Math.max(0, Math.min(100, ((safeT - min) / (max - min))\
              \ * 100));\n  \n  let color = '#ffffff';\n  if (safeT <= 35) color =\
              \ '#008CFF';\n  else if (safeT <= 45) color = '#FFD700';\n  else if\
              \ (safeT <= 55) color = '#FF8C00';\n  else color = '#DC4646';\n  return\
              \ `\n    <div style=\"width:100%; height:100%; position:relative; border-radius:10px;\
              \ overflow:hidden;\">\n      <div style=\"position:absolute; bottom:0;\
              \ left:0; right:0; height:${pct}%; background:${color}; box-shadow:\
              \ 0 0 12px ${color}; transition: height 1s ease;\"></div>\n    </div>\n\
              \  `;\n]]]\n"
            gauge: "[[[\n  var sensorObj = states['sensor.eau_chaude_du_jour_calculee'];\n\
              \  var raw = (sensorObj && sensorObj.state) ? sensorObj.state.toString().replace(',',\
              \ '.') : '0';\n  var v = parseFloat(raw) || 0;\n  \n  var color1 = '#00B4FF';\
              \ // Light blue\n  \n  var barStyle = function() { return `\n    width:\
              \ 14px; \n    height: 100%; \n    position: relative; \n    border-radius:\
              \ 10px; \n    background: rgba(0,0,0,0.3); \n    border: 1px solid rgba(255,255,255,0.1);\n\
              \    overflow: hidden;\n  `; };\n  \n  var innerStyle = function(pct,\
              \ clr) { return `\n    position: absolute; \n    bottom: 0; left: 0;\
              \ right: 0; \n    height: ${pct}%; \n    background: ${clr}; \n    box-shadow:\
              \ 0 0 10px ${clr}; \n    transition: height 0.8s ease;\n  `; };\n  \n\
              \  var gaugeOutput = '';\n  \n  // Jauge 1 (0-200)\n  var p1 = Math.max(0,\
              \ Math.min(100, (v / 200) * 100));\n  gaugeOutput += `<div style=\"\
              ${barStyle()}\"><div style=\"${innerStyle(p1, color1)}\"></div></div>`;\n\
              \  \n  // Jauge 2 (200-400)\n  if (v >= 200) {\n    var p2 = Math.max(0,\
              \ Math.min(100, ((v - 200) / 200) * 100));\n    gaugeOutput += `<div\
              \ style=\"${barStyle()}\"><div style=\"${innerStyle(p2, color1)}\"></div></div>`;\n\
              \  }\n  \n  // Jauge 3 (400-600)\n  if (v >= 400) {\n    var p3 = Math.max(0,\
              \ Math.min(100, ((v - 400) / 200) * 100));\n    gaugeOutput += `<div\
              \ style=\"${barStyle()}\"><div style=\"${innerStyle(p3, color1)}\"></div></div>`;\n\
              \  }\n  \n  return gaugeOutput;\n]]]\n"
          extra_styles: "@keyframes pulse {\n  0% { opacity: 0.3; }\n  100% { opacity:\
            \ 1; }\n}\n"
```

---

## Météo détaillée (Weather)

<div align="center">
  <img src="images/showcase/weather_closed.png" width="45%" />
  <img src="images/showcase/weather_expanded.png" width="45%" />
</div>

**Code YAML :**

```yaml
type: entities
card_mod:
  style: "ha-card {\n  background: transparent !important;\n  box-shadow: none !important;\n\
    \  border: none !important;\n  padding: 0 !important;\n  margin: 0 !important;\n\
    \  width: 100% !important;\n}\n.card-content {\n  padding: 0 !important;\n  margin:\
    \ 0 !important;\n  width: 100% !important;\n}\n"
entities:
- type: custom:fold-entity-row
  full_row: true
  padding: 0
  clickable: true
  card_mod:
    style: ":host { \n  --toggle-icon-width: 0px !important;\n}\n#head ha-icon, #head\
      \ ha-icon-button { \n  display: none !important; \n  width: 0px !important;\
      \ \n  visibility: hidden !important; \n}\ndiv#head { \n  display: block !important;\
      \ \n  width: 100% !important; \n  padding: 0 !important; \n  margin: 0 !important;\
      \ \n}\n#head { \n  padding: 0 !important; \n  margin: 0 !important; \n  width:\
      \ 100% !important; \n  cursor: pointer !important; \n}\n#head > * {\n  width:\
      \ 100% !important;\n  max-width: 100% !important;\n}\n"
  head:
    type: custom:button-card
    entity: weather.home
    show_name: false
    show_icon: false
    show_state: false
    tap_action:
      action: none
    styles:
      card:
      - padding: 0
      - background: rgba(20, 27, 38, 0.6)
      - backdrop-filter: blur(10px)
      - -webkit-backdrop-filter: blur(10px)
      - border-radius: 20px
      - overflow: hidden
      - transition: all 0.5s ease-in-out
      - border: "[[[\n  const alert = states['sensor.91_weather_alert'];\n  if (alert\
          \ && alert.state !== 'Vert' && alert.state !== 'unknown') {\n    const s\
          \ = String(alert.state).toLowerCase();\n    if (s === 'rouge' || s === '4'\
          \ || s === 'red') return '1px solid rgba(244, 67, 54, 0.8)';\n    if (s\
          \ === 'orange' || s === '3') return '1px solid rgba(255, 152, 0, 0.8)';\n\
          \    if (s === 'jaune' || s === '2' || s === 'yellow') return '1px solid\
          \ rgba(255, 235, 59, 0.6)';\n  }\n  return '1px solid rgba(255,255,255,0.1)';\n\
          ]]]\n"
      - box-shadow: 0 8px 32px rgba(0,0,0,0.4)
      - height: auto
      - pointer-events: none
      grid:
      - grid-template-areas: '"img details" "footer footer"'
      - grid-template-columns: 130px 1fr
      - grid-template-rows: auto 25px
      - align-items: stretch
      custom_fields:
        img:
        - justify-self: stretch
        - align-self: stretch
        - border-right: 2px solid rgba(255,255,255,0.6)
        - pointer-events: auto
        details:
        - justify-self: stretch
        - align-self: stretch
        - padding: 15px 18px
        - display: flex
        - flex-direction: column
        - justify-content: center
        - gap: 12px
        - pointer-events: auto
        footer:
        - justify-self: stretch
        - align-self: stretch
        - background: rgba(0,0,0,0.2)
        - border-top: 1px solid rgba(255,255,255,0.05)
        - display: flex
        - align-items: center
        - justify-content: center
        - border-radius: 0 0 20px 20px
        - pointer-events: none
    custom_fields:
      img: "[[[\n  if (!entity) return '...';\n  const state = entity.state;\n  const\
        \ trans = {\n    'sunny': 'Ensoleillé', 'clear-night': 'Nuit claire', 'cloudy':\
        \ 'Nuageux',\n    'fog': 'Brouillard', 'hail': 'Grêle', 'lightning': 'Orages',\n\
        \    'lightning-rain': 'Pluie orageuse', 'partlycloudy': 'Éclaircies',\n \
        \   'pouring': 'Pluie forte', 'rainy': 'Pluvieux', 'snowy': 'Neige',\n   \
        \ 'snowy-rainy': 'Pluie et neige', 'windy': 'Venteux', 'windy-variant': 'Venteux'\n\
        \  };\n  const map = {\n    'sunny': { icon: '☀️', color: '#FFD600' }, 'clear-night':\
        \ { icon: '\U0001F319', color: '#7E57C2' },\n    'cloudy': { icon: '☁️', color:\
        \ '#90A4AE' }, 'fog': { icon: '\U0001F32B️', color: '#B0BEC5' },\n    'hail':\
        \ { icon: '\U0001F328️', color: '#4FC3F7' }, 'lightning': { icon: '⚡', color:\
        \ '#FFEB3B' },\n    'lightning-rain': { icon: '⛈️', color: '#FFD600' }, 'partlycloudy':\
        \ { icon: '⛅', color: '#FFB74D' },\n    'pouring': { icon: '\U0001F327️',\
        \ color: '#448AFF' }, 'rainy': { icon: '\U0001F326️', color: '#29B6F6' },\n\
        \    'snowy': { icon: '❄️', color: '#E1F5FE' }, 'snowy-rainy': { icon: '\U0001F328\
        ️', color: '#B3E5FC' },\n    'windy': { icon: '\U0001F4A8', color: '#81C784'\
        \ }, 'windy-variant': { icon: '\U0001F343', color: '#A5D6A7' }\n  };\n  const\
        \ theme = map[state] || { icon: '\U0001F321️', color: '#00BFFF' };\n  return\
        \ `\n    <div style=\"width: 100%; height: 100%; display: flex; flex-direction:\
        \ column; align-items: center; justify-content: center; background: linear-gradient(135deg,\
        \ ${theme.color}33 0%, ${theme.color}0D 100%); cursor: pointer;\" \n     \
        \    onclick=\"event.stopPropagation(); const e = new CustomEvent('hass-more-info',\
        \ { detail: { entityId: 'weather.home' }, bubbles: true, composed: true });\
        \ this.dispatchEvent(e);\">\n      <div style=\"font-size: 50px; filter: drop-shadow(0\
        \ 4px 10px ${theme.color}80);\">${theme.icon}</div>\n      <div style=\"font-size:\
        \ 11px; font-weight: 900; color: white; text-transform: uppercase; letter-spacing:\
        \ 1px; margin-top: 5px; text-shadow: 0 2px 4px rgba(0,0,0,0.3);\">${trans[state]\
        \ || state}</div>\n    </div>\n  `;\n]]]\n"
      details: "[[[\n  if (!entity || !entity.attributes) return '...';\n  const cur\
        \ = parseFloat(entity.attributes.temperature || 0);\n  const low = parseFloat(entity.attributes.forecast?.[0]?.templow\
        \ || cur - 3);\n  const high = parseFloat(entity.attributes.forecast?.[0]?.temperature\
        \ || cur + 4);\n  const range = Math.max(high - low, 1);\n  const pos = Math.min(Math.max(((cur\
        \ - low) / range) * 100, 0), 100);\n  \n  const alert_ent = states['sensor.91_weather_alert'];\n\
        \  let alerts_html = '';\n  if (alert_ent && alert_ent.state !== 'Vert' &&\
        \ alert_ent.state !== 'unknown') {\n    const risks_map = {'inondation': 'mdi:home-flood',\
        \ 'vent': 'mdi:weather-windy','pluie': 'mdi:weather-pouring', 'orage': 'mdi:weather-lightning','neige':\
        \ 'mdi:weather-snowy-heavy', 'verglas': 'mdi:weather-snowy-heavy', 'canicule':\
        \ 'mdi:weather-sunny-alert', 'froid': 'mdi:snowflake-alert', 'avalanche':\
        \ 'mdi:terrain', 'vague': 'mdi:waves'};\n    const severity_labels = {'1':\
        \ 'Vert', '2': 'Jaune', '3': 'Orange', '4': 'Rouge','vert': 'Vert', 'jaune':\
        \ 'Jaune', 'orange': 'Orange', 'rouge': 'Rouge','yellow': 'Jaune', 'red':\
        \ 'Rouge'};\n    let active_alerts = [];\n    const risk_levels = ['2', '3',\
        \ '4', 'jaune', 'orange', 'rouge', 'yellow', 'red'];\n    for (const [key,\
        \ val] of Object.entries(alert_ent.attributes)) {\n      const vs = String(val).toLowerCase();\n\
        \      if (risk_levels.includes(vs)) {\n        let icon = 'mdi:alert-decagram';\n\
        \        const klow = key.toLowerCase();\n        for (const [kw, ic] of Object.entries(risks_map))\
        \ { if (klow.includes(kw)) { icon = ic; break; } }\n        active_alerts.push({name:\
        \ key.split('_').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),level:\
        \ severity_labels[vs] || vs.toUpperCase(),icon: icon});\n      }\n    }\n\
        \    const order = { 'Rouge': 1, 'Orange': 2, 'Jaune': 3 };\n    active_alerts.sort((a,\
        \ b) => (order[a.level] || 99) - (order[b.level] || 99));\n    alerts_html\
        \ = '<div style=\"display: flex; flex-direction: column; gap: 8px; margin-top:\
        \ 5px;\">' + active_alerts.map(a => {\n      const l = a.level.toLowerCase();\n\
        \      const color = l.includes('rouge') || l.includes('red') ? '#F44336'\
        \ : (l.includes('orange') ? '#FF9800' : '#FFEB3B');\n      return `<div style=\"\
        display: flex; justify-content: space-between; align-items: center; background:\
        \ ${color}20; padding: 10px 15px; border-radius: 12px; border: 1px solid ${color}40;\"\
        ><div style=\"display: flex; align-items: center; gap: 10px;\"><ha-icon icon=\"\
        ${a.icon}\" style=\"width: 20px; height: 20px; color: ${color}; filter: drop-shadow(0\
        \ 0 5px ${color}80);\"></ha-icon><span style=\"font-size: 13px; font-weight:\
        \ 800; color: white;\">${a.name}</span></div><span style=\"font-size: 10px;\
        \ font-weight: 900; color: ${color}; text-transform: uppercase;\">Vigilance\
        \ ${a.level}</span></div>`;\n    }).join('') + '</div>';\n  }\n\n  const uv_ent\
        \ = states['sensor.openuv_maison_indice_uv_actuel'];\n  const sun = states['sun.sun'];\n\
        \  const isNight = sun?.state === 'below_horizon' || entity.state === 'clear-night';\n\
        \  let uv_val = parseFloat(uv_ent?.state || 0);\n  if (isNight) uv_val = 0;\n\
        \  const uv_pct = Math.min((uv_val / 12) * 100, 100);\n  let uv_color = '#4CAF50';\n\
        \  if (uv_val >= 3) uv_color = '#FDD835';\n  if (uv_val >= 6) uv_color = '#FB8C00';\n\
        \  if (uv_val >= 8) uv_color = '#F44336';\n  if (uv_val >= 11) uv_color =\
        \ '#9C27B0';\n\n  return `\n    <div style=\"cursor: pointer;\" \n       \
        \  onclick=\"event.stopPropagation(); const e = new CustomEvent('hass-more-info',\
        \ { detail: { entityId: 'weather.home' }, bubbles: true, composed: true });\
        \ this.dispatchEvent(e);\">\n      <div style=\"display: flex; align-items:\
        \ center; gap: 10px; width: 100%; margin-bottom: 2px;\">\n        <span style=\"\
        font-size: 12px; font-weight: 900; color: white; min-width: 25px;\">${Math.round(low)}°</span>\n\
        \        <div style=\"flex: 1; height: 12px; background: rgba(255,255,255,0.1);\
        \ border-radius: 6px; position: relative;\">\n          <div style=\"position:\
        \ absolute; width: 100%; height: 100%; background: linear-gradient(90deg,\
        \ #4FC3F7, #FFA726); border-radius: 6px; opacity: 0.8;\"></div>\n        \
        \  <div style=\"position: absolute; left: ${pos}%; top: 50%; transform: translate(-50%,\
        \ -50%); width: 24px; height: 24px; background: white; border-radius: 50%;\
        \ box-shadow: 0 2px 8px rgba(0,0,0,0.5); z-index: 2; border: 2px solid #29B6F6;\
        \ display: flex; align-items: center; justify-content: center;\">\n      \
        \      <span style=\"color: #141B26; font-size: 11px; font-weight: 900;\"\
        >${Math.round(cur)}°</span>\n          </div>\n        </div>\n        <span\
        \ style=\"font-size: 12px; font-weight: 900; color: white; min-width: 25px;\
        \ text-align: right;\">${Math.round(high)}°</span>\n      </div>\n      ${alerts_html}\n\
        \      <div style=\"display: flex; flex-direction: column; gap: 8px; width:\
        \ 100%; margin-top: 8px;\">\n        <div style=\"display: flex; justify-content:\
        \ space-between; align-items: center; margin-bottom: 2px;\">\n           <span\
        \ style=\"font-size: 11px; font-weight: 950; color: rgba(255,255,255,0.5);\
        \ text-transform: uppercase; letter-spacing: 1.5px;\">Indice UV</span>\n \
        \       </div>\n        <div style=\"display: flex; align-items: center; gap:\
        \ 10px; width: 100%;\">\n          <span style=\"font-size: 12px; font-weight:\
        \ 900; color: white; min-width: 25px;\">0</span>\n          <div style=\"\
        flex: 1; height: 12px; background: rgba(0,0,0,0.3); border-radius: 6px; position:\
        \ relative; border: 1px solid rgba(255,255,255,0.05);\">\n            <div\
        \ style=\"position: absolute; width: 100%; height: 100%; background: linear-gradient(90deg,\
        \ #4CAF50 0%, #FDD835 25%, #FB8C00 50%, #F44336 75%, #9C27B0 100%); border-radius:\
        \ 6px; opacity: 0.8;\"></div>\n            <div style=\"position: absolute;\
        \ left: ${uv_pct}%; top: 50%; transform: translate(-50%, -50%); width: 24px;\
        \ height: 24px; background: white; border-radius: 50%; box-shadow: 0 2px 8px\
        \ rgba(0,0,0,0.5); z-index: 2; border: 2px solid ${uv_color}; display: flex;\
        \ align-items: center; justify-content: center;\">\n              <span style=\"\
        color: #141B26; font-size: 11px; font-weight: 900;\">${uv_val.toFixed(1)}</span>\n\
        \            </div>\n          </div>\n          <span style=\"font-size:\
        \ 12px; font-weight: 900; color: white; min-width: 30px; text-align: right;\"\
        >12</span>\n        </div>\n      </div>\n    </div>\n  `;\n]]]\n"
      footer: "[[[\n  return `<div style=\"display:flex; width:100%; justify-content:center;\
        \ align-items:center;\"><ha-icon icon=\"mdi:chevron-down\" style=\"color:\
        \ rgba(255,255,255,0.7); width: 18px; height: 18px;\"></ha-icon></div>`;\n\
        ]]]\n"
  entities:
  - type: custom:button-card
    color_type: blank-card
    styles:
      card:
      - height: 14px
  - type: custom:button-card
    show_name: false
    show_icon: false
    show_state: false
    tap_action:
      action: more-info
      entity: sensor.openuv_maison_indice_uv_actuel
    styles:
      card:
      - padding: 0
      - background: rgba(20, 27, 38, 0.6)
      - backdrop-filter: blur(10px)
      - -webkit-backdrop-filter: blur(10px)
      - border-radius: 20px
      - border: 1px solid rgba(126, 87, 194, 0.4)
      - box-shadow: 0 8px 32px rgba(0,0,0,0.4)
      - min-height: 110px
      - height: auto
      grid:
      - grid-template-areas: '"icon details"'
      - grid-template-columns: 130px minmax(0, 1fr)
      - grid-template-rows: 1fr
      custom_fields:
        icon:
        - justify-self: stretch
        - align-self: stretch
        - border-right: 2px solid rgba(255,255,255,0.6)
        - border-top-left-radius: 20px
        - border-bottom-left-radius: 20px
        - display: flex
        - align-items: center
        - justify-content: center
        details:
        - justify-self: stretch
        - align-self: stretch
        - display: flex
        - flex-direction: column
        - justify-content: center
        - align-items: center
        - padding: 12px 10px
    custom_fields:
      icon: "[[[\n  const purple = \"#7E57C2\";\n  return `\n    <div style=\"width:100%;height:100%;display:flex;flex-direction:column;\n\
        \    align-items:center;justify-content:center;\n    background:linear-gradient(135deg,${purple}33\
        \ 0%,${purple}0D 100%);\n    border-top-left-radius:20px;border-bottom-left-radius:20px;\"\
        >\n      <ha-icon icon=\"mdi:white-balance-sunny\"\n      style=\"width:42px;height:42px;color:#FFD54F;\n\
        \      filter:drop-shadow(0 4px 8px rgba(0,0,0,0.5));\"></ha-icon>\n     \
        \ <div style=\"font-size:10px;font-weight:900;color:white;\n      text-transform:uppercase;letter-spacing:1px;margin-top:-4px;\"\
        >\n      UV\n      </div>\n    </div>\n  `;\n]]]\n"
      details: "[[[\n  const sunState = states['sun.sun']?.state;\n  const uvReal\
        \ = parseFloat(states['sensor.openuv_maison_indice_uv_actuel']?.state ?? 'NaN');\n\
        \  const uv = (sunState === 'below_horizon') ? 0.0 : uvReal;\n  const uvTxt\
        \ = Number.isFinite(uv) ? uv.toFixed(1) : '?';\n  const count = parseInt(states['counter.openuv_updates_today']?.state\
        \ ?? '0');\n  const intervalS = parseInt(states['input_number.openuv_interval_seconds']?.state\
        \ ?? '0');\n  const intervalMin = intervalS ? Math.round(intervalS / 60) :\
        \ 0;\n  const remaining = Math.max(0, 50 - count);\n  const pctRaw = Math.round((count\
        \ / 50) * 100);\n  const pct = (count > 0 && pctRaw < 8) ? 8 : pctRaw;\n \
        \ const pad2 = (n) => String(n).padStart(2, '0');\n  const fmtFR = (d) =>\
        \ `${pad2(d.getDate())}/${pad2(d.getMonth()+1)}/${d.getFullYear()} ${pad2(d.getHours())}:${pad2(d.getMinutes())}`;\n\
        \  const lastDtStr = states['input_datetime.openuv_last_update']?.state ||\
        \ '';\n  let lastFR = '—';\n  const lastTs = parseInt(states['input_number.openuv_last_update_ts']?.state\
        \ ?? '0');\n  if (lastTs > 0) { lastFR = fmtFR(new Date(lastTs * 1000)); }\n\
        \  else if (lastDtStr) { const d = new Date(lastDtStr.replace(' ', 'T'));\
        \ if (!isNaN(d.getTime())) lastFR = fmtFR(d); }\n  let nextFR = '—';\n  if\
        \ (sunState === 'above_horizon' && lastTs > 0 && intervalS > 0) { nextFR =\
        \ fmtFR(new Date((lastTs + intervalS) * 1000)); }\n  const uvColor = (v) =>\
        \ {\n    if (v < 3) return \"#00C853\";\n    if (v < 6) return \"#FFEB3B\"\
        ;\n    if (v < 8) return \"#FF9800\";\n    if (v < 11) return \"#F44336\"\
        ;\n    return \"#9C27B0\";\n  };\n  return `\n  <div style=\"display:flex;flex-direction:column;width:100%;\n\
        \  align-items:center;justify-content:center;text-align:center;\">\n    <div\
        \ style=\"display:flex;align-items:baseline;gap:10px;margin-bottom:6px;\"\
        >\n      <div style=\"font-size:12px;font-weight:800;color:rgba(255,255,255,0.65);text-transform:uppercase;\"\
        >Indice UV</div>\n      <div style=\"font-size:28px;font-weight:900;color:${uvColor(uv)};text-shadow:0\
        \ 6px 16px rgba(0,0,0,0.45);\">${uvTxt}</div>\n    </div>\n    <div style=\"\
        display:flex;gap:14px;flex-wrap:wrap;justify-content:center;margin-bottom:8px;\"\
        >\n      <div style=\"font-size:10px;color:rgba(255,255,255,0.6);font-weight:700;\"\
        >DERNIÈRE: <span style=\"color:white;font-weight:800;\">${lastFR}</span></div>\n\
        \      <div style=\"font-size:10px;color:rgba(255,255,255,0.6);font-weight:700;\"\
        >PROCHAINE: <span style=\"color:white;font-weight:800;\">${nextFR}</span></div>\n\
        \      <div style=\"font-size:10px;color:rgba(255,255,255,0.6);font-weight:700;\"\
        >INTERVALLE: <span style=\"color:white;font-weight:800;\">${intervalMin}min</span></div>\n\
        \    </div>\n    <div style=\"width:92%; margin-top:-6px; padding-bottom:6px;\"\
        >\n      <div style=\"display:flex;justify-content:space-between;font-size:10px;color:rgba(255,255,255,0.6);font-weight:800;margin-bottom:4px;\"\
        >\n        <div>MAJ ${count}/50</div>\n        <div>RESTE ${remaining}</div>\n\
        \      </div>\n      <div style=\"width:100%;height:8px;background:rgba(255,255,255,0.1);border-radius:999px;overflow:hidden;\"\
        >\n        <div style=\"height:100%;width:${pct}%;background:rgba(126,87,194,0.9);box-shadow:0\
        \ 0 16px rgba(126,87,194,0.5);\"></div>\n      </div>\n    </div>\n  </div>\n\
        \  `;\n]]]\n"
```

---

## Poubelles (Trash & Recyle)

<div align="center">
  <img src="images/showcase/trash_closed.png" width="45%" />
  <img src="images/showcase/trash_expanded.png" width="45%" />
</div>

**Code YAML :**

```yaml
type: entities
card_mod:
  style: "ha-card {\n  background: none !important;\n  border: none !important;\n\
    \  box-shadow: none !important;\n  padding: 0 !important;\n  margin-top: 0px !important;\n\
    \  margin-bottom: 0px !important;\n}\n.card-content {\n  padding: 0px !important;\n\
    \  margin: 0px !important;\n}\n#states {\n  padding: 0px !important;\n  margin:\
    \ 0px !important;\n}\n:host {\n  margin: 0px !important;\n}\n"
entities:
- type: custom:fold-entity-row
  padding: 0
  clickable: true
  card_mod:
    style: "div#head {\n  display: block !important;\n  width: 100% !important;\n\
      \  padding: 0 !important;\n  margin: 0 !important;\n  --toggle-icon-width: 0px\
      \ !important;\n}\n#head {\n  padding: 0 !important;\n  margin: 0 !important;\n\
      \  width: 100% !important;\n  cursor: pointer !important;\n  pointer-events:\
      \ auto !important;\n}\n#head ha-icon { display: none !important; }\n"
  head:
    type: custom:button-card
    entity: calendar.chris_billet_gmail_com
    show_name: false
    show_icon: false
    tap_action:
      action: none
    hold_action:
      action: none
    styles:
      card:
      - padding: 0
      - background: rgba(20, 27, 38, 0.6)
      - backdrop-filter: blur(10px)
      - -webkit-backdrop-filter: blur(10px)
      - border-radius: 20px
      - border: 1px solid rgba(255,255,255,0.15)
      - box-shadow: 0 4px 20px rgba(0,0,0,0.4)
      - margin: 0px
      - pointer-events: none
      grid:
      - grid-template-areas: '"date details" "footer footer"'
      - grid-template-columns: 130px minmax(0, 1fr)
      - grid-template-rows: auto 30px
      - min-height: 110px
      - width: 100%
      custom_fields:
        date:
        - justify-self: stretch
        - align-self: stretch
        - background: linear-gradient(135deg, rgba(255, 215, 0, 0.25) 0%, rgba(255,
            215, 0, 0.08) 100%)
        - border-right: 2px solid rgba(255,255,255,0.6)
        - display: flex
        - flex-direction: column
        - align-items: center
        - justify-content: center
        - padding: 12px 4px
        details:
        - justify-self: stretch
        - align-self: stretch
        - padding: 10px 15px 10px 0px
        - display: flex
        - align-items: center
        footer:
        - justify-self: stretch
        - align-self: stretch
        - background: rgba(0,0,0,0.2)
        - display: flex
        - align-items: center
        - justify-content: center
        - border-radius: 0 0 20px 20px
    custom_fields:
      date: "[[[\n  return `\n    <svg viewBox=\"0 0 200 200\" style=\"width: 55px;\
        \ height: 55px; margin-bottom: 5px; filter: drop-shadow(0 4px 8px rgba(0,0,0,0.5));\"\
        >\n      <defs>\n        <linearGradient id=\"glass\" x1=\"0%\" y1=\"0%\"\
        \ x2=\"100%\" y2=\"100%\">\n          <stop offset=\"0%\" style=\"stop-color:rgba(255,255,255,0.3)\"\
        />\n          <stop offset=\"50%\" style=\"stop-color:rgba(255,255,255,0.1)\"\
        />\n          <stop offset=\"100%\" style=\"stop-color:rgba(255,255,255,0.05)\"\
        />\n        </linearGradient>\n        <linearGradient id=\"gold-bar\" x1=\"\
        0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">\n          <stop offset=\"0%\" style=\"\
        stop-color:#FFD700\"/>\n          <stop offset=\"40%\" style=\"stop-color:#FFD700\"\
        />\n          <stop offset=\"100%\" style=\"stop-color:#ff9800\"/>\n     \
        \   </linearGradient>\n        <filter id=\"glow\">\n          <feGaussianBlur\
        \ stdDeviation=\"2\" result=\"coloredBlur\"/>\n          <feMerge>\n     \
        \       <feMergeNode in=\"coloredBlur\"/>\n            <feMergeNode in=\"\
        SourceGraphic\"/>\n          </feMerge>\n        </filter>\n      </defs>\n\
        \      <rect x=\"25\" y=\"45\" width=\"150\" height=\"130\" rx=\"25\" fill=\"\
        url(#glass)\" stroke=\"rgba(255,255,255,0.3)\" stroke-width=\"2\"/>\n    \
        \  <path d=\"M25 70 V55 a25 25 0 0 1 25 -25 h100 a25 25 0 0 1 25 25 v15 z\"\
        \ fill=\"url(#gold-bar)\" filter=\"url(#glow)\"/>\n      <rect x=\"35\" y=\"\
        33\" width=\"130\" height=\"3\" rx=\"1.5\" fill=\"rgba(255,255,255,0.7)\"\
        />\n      <rect x=\"60\" y=\"15\" width=\"12\" height=\"30\" rx=\"6\" fill=\"\
        #F0F0F0\" stroke=\"rgba(0,0,0,0.2)\" stroke-width=\"1\"/>\n      <rect x=\"\
        128\" y=\"15\" width=\"12\" height=\"30\" rx=\"6\" fill=\"#F0F0F0\" stroke=\"\
        rgba(0,0,0,0.2)\" stroke-width=\"1\"/>\n      <circle cx=\"100\" cy=\"120\"\
        \ r=\"25\" fill=\"none\" stroke=\"rgba(255,255,255,0.1)\" stroke-width=\"\
        4\" stroke-dasharray=\"2,6\"/>\n    </svg>\n    <div style=\"color: #FFFFFF;\
        \ font-size: 13px; font-weight: 900; letter-spacing: 0.5px; text-shadow: 0\
        \ 2px 4px rgba(0,0,0,0.4);\">\n      Aujourd'hui\n    </div>\n  `;\n]]]\n"
      details:
        card:
          type: custom:atomic-calendar-revive
          maxDaysToShow: 1
          maxEventCount: 3
          showDate: false
          showMonth: false
          showWeekDay: true
          showLocation: true
          showDescription: false
          showCurrentEvent: true
          showNoEventsForToday: true
          noEventText: Aucun RDV aujourd'hui
          showHiddenText: false
          showFinishedEvents: false
          hideFinishedEvents: true
          entities:
          - entity: calendar.chris_billet_gmail_com
            blocklist: poubelle|Sortir|VERTE|JAUNE
            blacklist: poubelle|Sortir|VERTE|JAUNE
          - entity: calendar.icloud
            blocklist: poubelle|Sortir|VERTE|JAUNE
            blacklist: poubelle|Sortir|VERTE|JAUNE
          - calendar.paris_saint_germain
          - calendar.jours_feries_et_autres_fetes_en_france
          - calendar.anniversaires
          card_mod:
            style: "ha-card { background: none !important; border: none !important;\
              \ box-shadow: none !important; padding: 0 !important; margin: 0 !important;\
              \ } .day-header { display: none !important; } .cal-table { border: none\
              \ !important; width: 100% !important; margin: 0 !important; border-collapse:\
              \ collapse !important; display: table !important; } .event-container\
              \ { padding: 0 !important; margin-bottom: 8px !important; } .event-left\
              \ { \n  width: 65px !important; \n  text-align: center !important; \n\
              \  font-size: 18px !important; \n  font-weight: 900 !important;\n  color:\
              \ rgba(255,255,255,0.95) !important;\n  padding: 0 !important;\n  vertical-align:\
              \ middle !important;\n  line-height: normal !important;\n} .event-left\
              \ > div { display: flex !important; flex-direction: column !important;\
              \ align-items: center !important; justify-content: center !important;\
              \ height: 100% !important; width: 100% !important; margin: 0 !important;\
              \ } .event-right { padding: 0 !important; text-align: left !important;\
              \ vertical-align: middle !important; } .event-title { color: white !important;\
              \ font-size: 13px !important; font-weight: 900 !important; line-height:\
              \ 1.1 !important; } .event-location, .event-location-icon, a, .event-progressBar\
              \ { color: #ff9800 !important; font-size: 10px !important; text-decoration:\
              \ none !important; } .event-time { color: rgba(255,255,255,0.4) !important;\
              \ font-size: 7px !important; } .event-right span { font-size: 7px !important;\
              \ color: rgba(255,255,255,0.3) !important; } .event-progressBar { background-color:\
              \ #ff9800 !important; height: 2px !important; margin-top: 4px !important;\
              \ }\n"
      footer: '[[[ return `<ha-icon icon="mdi:chevron-down" style="color: rgba(255,255,255,0.4);
        width: 24px; height: 24px;"></ha-icon>`; ]]]

        '
  entities:
  - type: custom:atomic-calendar-revive
    name: ' '
    entities:
    - calendar.chris_billet_gmail_com
    - calendar.icloud
    - calendar.paris_saint_germain
    - calendar.jours_feries_et_autres_fetes_en_france
    - calendar.anniversaires
    maxDaysToShow: 8
    maxEventCount: 6
    showMonth: false
    showWeekDay: true
    showDate: false
    sortByStartTime: true
    showLocation: true
    showDescription: false
    showNoEventsForToday: false
    showCurrentEvent: false
    showHiddenText: false
    showFinishedEvents: false
    hideFinishedEvents: true
    card_mod:
      style: "ha-card {\n  margin-top: 0px !important;\n  background: rgba(20, 27,\
        \ 38, 0.4) !important;\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter:\
        \ blur(10px);\n  border-radius: 20px !important;\n  border: 1px solid rgba(255,255,255,0.05)\
        \ !important;\n  box-shadow: 0 4px 15px rgba(0,0,0,0.2) !important;\n  margin:\
        \ 0 !important;\n  width: 100% !important;\n} .card-header { display: none\
        \ !important; } .day-header { color: rgba(255,255,255,0.7) !important; } .event-title\
        \ { color: rgba(255,255,255,0.9) !important; font-weight: bold !important;\
        \ font-size: 13px !important; } .event-location, .event-location-icon, a,\
        \ .event-progressBar { color: #ff9800 !important; text-decoration: none !important;\
        \ } .event-progressBar { background-color: #ff9800 !important; } .cal-table\
        \ tbody tr:nth-of-type(1), .cal-table tbody tr:nth-of-type(2) { display: none\
        \ !important; }\n"
```

---

## Alerte Températures (Temperature Alerts)

<div align="center">
  <img src="images/showcase/temperature_closed.png" width="45%" />
  <img src="images/showcase/temperature_expanded.png" width="45%" />
</div>

**Code YAML :**

```yaml
type: grid
columns: 3
square: false
cards:
- type: custom:button-card
  name: Accueil
  icon: mdi:home
  tap_action:
    action: navigate
    navigation_path: /lovelace/dashboard
  styles:
    card:
    - padding: 12px
    - height: 85px
    - border-radius: 20px
    - border: 1px solid rgba(255,255,255,0.1)
    - background: rgba(20, 27, 38, 0.6)
    - backdrop-filter: blur(10px)
    - -webkit-backdrop-filter: blur(10px)
    - box-shadow: 0 4px 15px rgba(0,0,0,0.2)
    - transition: transform 0.1s ease
    icon:
    - width: 28px
    - height: 28px
    - color: '#00FF00'
    - filter: drop-shadow(0 0 8px rgba(0, 255, 0, 0.4))
    - margin-bottom: 8px
    name:
    - font-size: 13px
    - font-weight: 600
    - color: rgba(255,255,255,0.9)
    grid:
    - grid-template-areas: '"i" "n"'
    - grid-template-rows: 1fr min-content
- type: custom:button-card
  name: Lumières
  icon: mdi:home-lightbulb-outline
  tap_action:
    action: navigate
    navigation_path: /lovelace/lumieres
  styles:
    card:
    - padding: 12px
    - height: 85px
    - border-radius: 20px
    - border: 1px solid rgba(255,255,255,0.1)
    - background: rgba(20, 27, 38, 0.6)
    - backdrop-filter: blur(10px)
    - -webkit-backdrop-filter: blur(10px)
    - box-shadow: 0 4px 15px rgba(0,0,0,0.2)
    - transition: transform 0.1s ease
    icon:
    - width: 28px
    - height: 28px
    - color: '#ffd54a'
    - filter: drop-shadow(0 0 8px rgba(255, 213, 74, 0.4))
    - margin-bottom: 8px
    name:
    - font-size: 13px
    - font-weight: 600
    - color: rgba(255,255,255,0.9)
    grid:
    - grid-template-areas: '"i" "n"'
    - grid-template-rows: 1fr min-content
- type: custom:button-card
  name: Energies
  icon: mdi:home-lightning-bolt-outline
  tap_action:
    action: navigate
    navigation_path: /lovelace/energies
  styles:
    card:
    - padding: 12px
    - height: 85px
    - border-radius: 20px
    - border: 1px solid rgba(255,255,255,0.1)
    - background: rgba(20, 27, 38, 0.6)
    - backdrop-filter: blur(10px)
    - -webkit-backdrop-filter: blur(10px)
    - box-shadow: 0 4px 15px rgba(0,0,0,0.2)
    - transition: transform 0.1s ease
    icon:
    - width: 28px
    - height: 28px
    - color: '#0080ff'
    - filter: drop-shadow(0 0 8px rgba(0, 128, 255, 0.4))
    - margin-bottom: 8px
    name:
    - font-size: 13px
    - font-weight: 600
    - color: rgba(255,255,255,0.9)
    grid:
    - grid-template-areas: '"i" "n"'
    - grid-template-rows: 1fr min-content
```

---

## Alerte Humidité (Humidity Alerts)

<div align="center">
  <img src="images/showcase/humidity_closed.png" width="45%" />
  <img src="images/showcase/humidity_rooms_expanded.png" width="45%" />
</div>

**Code YAML :**

```yaml
type: entities
card_mod:
  style: "ha-card {\n  background: transparent !important;\n  box-shadow: none !important;\n\
    \  border: none !important;\n  padding: 0 !important;\n  margin: 0 !important;\n\
    \  width: 100% !important;\n  display: {% set count = namespace(v=0) %}\n    \
    \       {% for s in states.sensor if s.state | float(-1) >= 65 %}\n          \
    \   {% set name = (s.attributes.friendly_name | default('') | lower) %}\n    \
    \         {% set eid = s.entity_id | lower %}\n             {% if ('humid' in\
    \ eid or 'humid' in name)\n                and not ('battery' in eid or 'voltage'\
    \ in eid or 'signal' in eid or 'ecojoko' in eid or 'home' in eid or 'oil' in\
    \ eid or 'diffus' in eid)\n                and not ('battery' in name or 'voltage'\
    \ in name or 'signal' in name or 'ecojoko' in name or 'home' in name or 'oil'\
    \ in name or 'diffus' in name) %}\n               {% set count.v = count.v + 1\
    \ %}\n             {% endif %}\n           {% endfor %}\n           {{ 'block'\
    \ if count.v > 0 else 'none' }} !important;\n}\n.card-content {\n  padding: 0\
    \ !important;\n  margin: 0 !important;\n}\n"
entities:
- type: custom:fold-entity-row
  full_row: true
  padding: 0
  clickable: true
  card_mod:
    style: ":host { \n  --toggle-icon-width: 0px !important;\n}\n#head ha-icon, #head\
      \ ha-icon-button { \n  display: none !important; \n  width: 0px !important;\
      \ \n  visibility: hidden !important; \n}\ndiv#head { \n  display: block !important;\
      \ \n  width: 100% !important; \n  padding: 0 !important; \n  margin: 0 !important;\
      \ \n}\n#head { \n  padding: 0 !important; \n  margin: 0 !important; \n  width:\
      \ 100% !important; \n  cursor: pointer !important; \n}\n#head > * {\n  width:\
      \ 100% !important;\n  max-width: 100% !important;\n}\n"
  head:
    type: custom:button-card
    show_name: false
    show_icon: false
    show_state: false
    tap_action:
      action: none
    variables:
      color: '#00BCD4'
    styles:
      card:
      - padding: 0
      - background: rgba(20, 27, 38, 0.6)
      - backdrop-filter: blur(10px)
      - -webkit-backdrop-filter: blur(10px)
      - border-radius: 20px
      - border: '[[[ return `1px solid ${variables.color}80`; ]]]'
      - box-shadow: '[[[ return `0 0 20px ${variables.color}40, 0 8px 32px rgba(0,0,0,0.4)`;
          ]]]'
      - overflow: hidden
      - margin: 0px
      - box-sizing: border-box
      - position: relative
      - height: 85px
      - width: 100%
      grid:
      - grid-template-areas: '"icon details" "footer footer"'
      - grid-template-columns: 130px minmax(0, 1fr)
      - grid-template-rows: 60px 25px
      - gap: 0px
      - width: 100%
      - margin: 0
      custom_fields:
        icon:
        - justify-self: stretch
        - align-self: stretch
        - border-right: 2px solid rgba(255,255,255,0.6)
        - border-top-left-radius: 20px
        - display: flex
        - align-items: center
        - justify-content: center
        - padding: 0
        details:
        - justify-self: stretch
        - align-self: stretch
        - display: flex
        - flex-direction: column
        - justify-content: center
        - align-items: center
        - padding: 0
        - overflow: hidden
        - position: relative
        footer:
        - justify-self: stretch
        - align-self: stretch
        - background: rgba(0,0,0,0.2)
        - border-top: 1px solid rgba(255,255,255,0.05)
        - display: flex
        - align-items: center
        - justify-content: center
        - border-radius: 0 0 20px 20px
    custom_fields:
      icon: "[[[\n  const color = variables.color;\n  return `\n    <div style=\"\
        width: 100%; height: 100%; display: flex; flex-direction: column; align-items:\
        \ center; justify-content: center; background: linear-gradient(135deg, ${color}33\
        \ 0%, ${color}0D 100%); border-top-left-radius: 20px; box-sizing: border-box;\
        \ position: relative;\">\n      <div style=\"position: absolute; width: 50px;\
        \ height: 50px; background: ${color}; border-radius: 50%; filter: blur(20px);\
        \ opacity: 0.3; animation: pulseGlow 4s infinite alternate ease-in-out;\"\
        ></div>\n      <div style=\"font-size: 32px; line-height: 1; filter: drop-shadow(0\
        \ 0 10px ${color}80); display: flex; align-items: center; justify-content:\
        \ center; z-index: 1;\">\U0001F4A7</div>\n      <div style=\"font-size: 10px;\
        \ font-weight: 900; color: white; text-transform: uppercase; letter-spacing:\
        \ 0.8px; margin-top: 2px; z-index: 1;\">Humidité</div>\n    </div>\n  `;\n\
        ]]]\n"
      details: "[[[\n  let count = 0;\n  const exclusions = /battery|voltage|signal|ecojoko|home|oil|diffus/;\n\
        \  for (const key in states) {\n    if (!key.startsWith('sensor.')) continue;\n\
        \    const s = states[key];\n    const val = parseFloat(String(s.state).replace('%','').replace(',','.'));\n\
        \    if (val >= 65) {\n      const name = (s.attributes.friendly_name || \"\
        \").toLowerCase();\n      const eid = key.toLowerCase();\n      if (s.attributes.device_class\
        \ === 'humidity' || name.includes('humid') || eid.includes('humid')) {\n \
        \       if (!exclusions.test(eid) && !exclusions.test(name)) {\n         \
        \ count++;\n        }\n      }\n    }\n  }\n  const label = count > 1 ? 'PIÈCES\
        \ TROP HUMIDES' : 'PIÈCE TROP HUMIDE';\n  return `\n    <div style=\"width:\
        \ 100%; height: 100%; display: flex; flex-direction: row; justify-content:\
        \ center; align-items: center; padding: 0 15px; position: relative; gap: 15px;\"\
        >\n      <div style=\"font-size: 38px; font-weight: 900; color: #00BCD4; line-height:\
        \ 1; text-shadow: 0 0 15px #00BCD480;\">${count}</div>\n      <div style=\"\
        display: flex; flex-direction: column; align-items: flex-start; justify-content:\
        \ center;\">\n        <div style=\"font-size: 13px; font-weight: 800; color:\
        \ white; text-transform: uppercase; letter-spacing: 1px;\">${label}</div>\n\
        \        <div style=\"font-size: 11px; color: rgba(255,255,255,0.6); margin-top:\
        \ 4px; display: flex; align-items: center; font-weight: 600;\">HUMIDITÉ >\
        \ 65%</div>\n      </div>\n    </div>\n  `;\n]]]\n"
      footer: "[[[\n  return `<div style=\"display:flex; width:100%; justify-content:center;\
        \ align-items:center;\"><ha-icon icon=\"mdi:chevron-down\" style=\"color:\
        \ rgba(255,255,255,0.7); width: 18px; height: 18px;\"></ha-icon></div>`;\n\
        ]]]\n"
  entities:
  - type: custom:button-card
    color_type: blank-card
    styles:
      card:
      - height: 14px
  - type: custom:auto-entities
    show_empty: false
    card:
      type: grid
      columns: 2
      square: false
      card_mod:
        style: "ha-card {\n  background: transparent !important;\n  box-shadow: none\
          \ !important;\n  border: none !important;\n  padding: 0 !important;\n  margin:\
          \ 0 !important;\n  width: 100% !important;\n}\n"
    card_param: cards
    filter:
      include:
      - domain: sensor
        attributes:
          device_class: humidity
        state: '>= 65'
        options:
          type: custom:button-card
          layout: horizontal
          show_name: true
          show_state: true
          show_icon: true
          styles:
            card:
            - background: rgba(20, 27, 38, 0.6)
            - backdrop-filter: blur(10px)
            - -webkit-backdrop-filter: blur(10px)
            - border-radius: 20px
            - border: 1px solid rgba(0, 188, 212, 0.4)
            - box-shadow: 0 4px 15px rgba(0,0,0,0.2)
            - height: 60px
            grid:
            - grid-template-areas: '"i n s"'
            - grid-template-columns: 45px 1fr 50px
            icon:
            - color: '#00BCD4'
            - width: 22px
            - height: 22px
            - justify-self: center
            name:
            - color: white
            - font-weight: 800
            - font-size: 11px
            - justify-self: start
            - text-align: left
            state:
            - color: '#00BCD4'
            - font-weight: 900
            - font-size: 13px
            - justify-self: end
      - name: '*humid*'
        state: '>= 65'
        options:
          type: custom:button-card
          layout: horizontal
          show_name: true
          show_state: true
          show_icon: true
          styles:
            card:
            - background: rgba(20, 27, 38, 0.6)
            - border-radius: 20px
            - border: 1px solid rgba(0, 188, 212, 0.4)
            - height: 60px
            grid:
            - grid-template-areas: '"i n s"'
            - grid-template-columns: 45px 1fr 50px
            icon:
            - color: '#00BCD4'
            - width: 22px
            name:
            - color: white
            - font-weight: 800
            - font-size: 11px
            - justify-self: start
            state:
            - color: '#00BCD4'
            - font-weight: 900
            - font-size: 13px
      exclude:
      - entity_id: '*battery*'
      - entity_id: '*voltage*'
      - entity_id: '*signal*'
      - entity_id: '*ecojoko*'
      - entity_id: '*home*'
      - entity_id: '*oil*'
      - entity_id: '*diffus*'
      - name: '*home*'
      - name: '*ecojoko*'
      - name: '*oil*'
      - name: '*diffus*'
```

---

## Caméras Extérieures (External Cameras)

<div align="center">
  <img src="images/showcase/cameras_ext_closed.png" width="45%" />
  <img src="images/showcase/cameras_ext_expanded.png" width="45%" />
</div>

**Code YAML :**

```yaml
type: custom:fold-entity-row
padding: 0
clickable: true
card_mod:
  style: 'div#head { display: block !important; width: 100% !important; padding: 0
    !important; margin: 0 !important; --toggle-icon-width: 0px !important; }

    #head { padding: 0 !important; margin: 0 !important; width: 100% !important; cursor:
    pointer !important; }

    #head ha-icon { display: none !important; }

    div#items { padding: 0 !important; margin: 0 !important; }

    '
head:
  type: custom:button-card
  show_name: false
  show_icon: false
  show_state: false
  styles:
    card:
    - padding: 0
    - background: rgba(20, 27, 38, 0.6)
    - backdrop-filter: blur(10px)
    - -webkit-backdrop-filter: blur(10px)
    - border-radius: 20px
    - border: 1px solid rgba(126, 87, 194, 0.4)
    - box-shadow: 0 8px 32px rgba(0,0,0,0.4)
    - height: 85px
    grid:
    - grid-template-areas: '"icon details" "footer footer"'
    - grid-template-columns: 130px minmax(0, 1fr)
    - grid-template-rows: 58px 27px
    custom_fields:
      icon:
      - justify-self: stretch
      - align-self: stretch
      - border-right: 2px solid rgba(255,255,255,0.6)
      - border-top-left-radius: 20px
      - display: flex
      - align-items: center
      - justify-content: center
      details:
      - justify-self: stretch
      - align-self: stretch
      - display: flex
      - flex-direction: column
      - justify-content: center
      - align-items: center
      - padding: 0 10px
  custom_fields:
    icon: "[[[\n  const purple = \"#7E57C2\";\n  const svg = `\n    <svg viewBox=\"\
      0 0 100 100\" width=\"42\" height=\"42\" style=\"filter: drop-shadow(0 4px 8px\
      \ rgba(0,0,0,0.5));\">\n      <defs>\n        <linearGradient id=\"camBody\"\
      \ x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">\n          <stop offset=\"0%\"\
      \ style=\"stop-color:#ffffff;stop-opacity:1\" />\n          <stop offset=\"\
      100%\" style=\"stop-color:#e0e0e0;stop-opacity:1\" />\n        </linearGradient>\n\
      \        <linearGradient id=\"lensGrad\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"\
      100%\">\n          <stop offset=\"0%\" style=\"stop-color:#1a1a1a;stop-opacity:1\"\
      \ />\n          <stop offset=\"100%\" style=\"stop-color:#000000;stop-opacity:1\"\
      \ />\n        </linearGradient>\n      </defs>\n      <!-- Bracket -->\n   \
      \   <path d=\"M50,65 L50,80 M40,80 L60,80\" stroke=\"#ccc\" stroke-width=\"\
      4\" stroke-linecap=\"round\" />\n      <!-- Camera Body -->\n      <rect x=\"\
      25\" y=\"25\" width=\"50\" height=\"40\" rx=\"10\" ry=\"10\" fill=\"url(#camBody)\"\
      \ />\n      <!-- Lens Glass -->\n      <circle cx=\"50\" cy=\"45\" r=\"15\"\
      \ fill=\"#222\" />\n      <circle cx=\"50\" cy=\"45\" r=\"10\" fill=\"url(#lensGrad)\"\
      \ />\n      <!-- Reflections -->\n      <circle cx=\"46\" cy=\"41\" r=\"3\"\
      \ fill=\"#4dabf7\" opacity=\"0.3\" filter=\"blur(1px)\" />\n      <!-- LED -->\n\
      \      <circle cx=\"68\" cy=\"33\" r=\"1.5\" fill=\"#00E676\" style=\"animation:\
      \ blinkLED 2s infinite;\" />\n      <style>@keyframes blinkLED { 0%, 100% {\
      \ opacity: 1; } 50% { opacity: 0.3; } }</style>\n    </svg>\n  `;\n  return\
      \ `\n    <div style=\"width: 100%; height: 100%; display: flex; flex-direction:\
      \ column; align-items: center; justify-content: center; background: linear-gradient(135deg,\
      \ ${purple}33 0%, ${purple}0D 100%); border-top-left-radius: 20px; position:\
      \ relative;\">\n      <div style=\"position: absolute; width: 50px; height:\
      \ 50px; background: ${purple}; border-radius: 50%; filter: blur(20px); opacity:\
      \ 0.3; animation: pulseGlow 4s infinite alternate ease-in-out;\"></div>\n  \
      \    <div style=\"position: relative; z-index: 1;\">${svg}</div>\n      <div\
      \ style=\"font-size: 10px; font-weight: 900; color: white; text-transform: uppercase;\
      \ letter-spacing: 0.8px; margin-top: -8px; z-index: 1;\">Caméras</div>\n   \
      \   <style>@keyframes pulseGlow { from { opacity: 0.2; transform: scale(0.9);\
      \ } to { opacity: 0.4; transform: scale(1.1); } }</style>\n    </div>\n  `;\n\
      ]]]\n"
    details: "[[[\n  const batPortail = states['sensor.camera_portail_batterie']?.state\
      \ || '?';\n  const batBal = states['sensor.camera_boite_a_lettre_batterie']?.state\
      \ || '?';\n  const getCol = (s) => (parseInt(s) > 20 ? \"#00C853\" : \"#E53935\"\
      );\n\n  return `\n    <div style=\"display: flex; flex-direction: column; width:\
      \ 100%; height: 100%; align-items: center; justify-content: center; text-align:\
      \ center;\">\n      <div style=\"font-size: 13px; font-weight: 800; color: white;\
      \ text-transform: uppercase; letter-spacing: 1px; margin-bottom: 4px;\">Extérieures</div>\n\
      \      <div style=\"display: flex; gap: 15px; align-items: center; justify-content:\
      \ center;\">\n        <div style=\"font-size: 10px; color: rgba(255,255,255,0.6);\
      \ font-weight: 600;\">PORTAIL: <span style=\"color: ${getCol(batPortail)}; font-weight:\
      \ 800;\">${batPortail}%</span></div>\n        <div style=\"font-size: 10px;\
      \ color: rgba(255,255,255,0.6); font-weight: 600;\">BAL: <span style=\"color:\
      \ ${getCol(batBal)}; font-weight: 800;\">${batBal}%</span></div>\n      </div>\n\
      \    </div>\n  `;\n]]]\n"
    footer: '[[[ return `<div style="display:flex; width:100%; justify-content:center;
      padding: 5px;"><ha-icon icon="mdi:chevron-down" style="color:rgba(255,255,255,0.5);
      width:18px;"></ha-icon></div>`; ]]]

      '
entities:
- type: custom:mod-card
  card_mod:
    style: 'ha-card { margin: 15px 10px; background: transparent; border: none; }

      '
  card:
    type: grid
    columns: 2
    square: false
    cards:
    - type: vertical-stack
      cards:
      - type: custom:button-card
        name: ACTIVER
        icon: mdi:play
        show_icon: true
        tap_action:
          action: call-service
          service: button.press
          target:
            entity_id: button.portail_start_rtsp_stream
        styles:
          card:
          - background: rgba(0, 200, 83, 0.2)
          - border: 1px solid rgba(0, 200, 83, 0.4)
          - border-radius: 8px
          - height: 40px
          - margin-bottom: 8px
          name:
          - font-size: 11px
          - font-weight: 800
          - color: white
          icon:
          - color: '#00C853'
          - width: 18px
      - type: custom:button-card
        entity: image.portail_event_image
        show_entity_picture: true
        show_name: false
        tap_action:
          action: more-info
          entity: camera.camera_portail
        styles:
          card:
          - height: 120px
          - border-radius: 12px
          - border: 1px solid rgba(255, 255, 255, 0.1)
          - overflow: hidden
          entity_picture:
          - width: 100%
          - height: 100%
          - object-fit: cover
    - type: vertical-stack
      cards:
      - type: custom:button-card
        name: ACTIVER
        icon: mdi:play
        show_icon: true
        tap_action:
          action: call-service
          service: button.press
          target:
            entity_id: button.boite_a_lettres_start_rtsp_stream
        styles:
          card:
          - background: rgba(0, 200, 83, 0.2)
          - border: 1px solid rgba(0, 200, 83, 0.4)
          - border-radius: 8px
          - height: 40px
          - margin-bottom: 8px
          name:
          - font-size: 11px
          - font-weight: 800
          - color: white
          icon:
          - color: '#00C853'
          - width: 18px
      - type: custom:button-card
        entity: image.boite_a_lettres_event_image
        show_entity_picture: true
        show_name: false
        tap_action:
          action: more-info
          entity: camera.camera_boite_a_lettres
        styles:
          card:
          - height: 120px
          - border-radius: 12px
          - border: 1px solid rgba(255, 255, 255, 0.1)
          - overflow: hidden
          entity_picture:
          - width: 100%
          - height: 100%
          - object-fit: cover
```

---

## Caméras Intérieures (Internal Cameras)

<div align="center">
  <img src="images/showcase/cameras_int_closed.jpeg" width="45%" />
  <img src="images/showcase/cameras_int_expanded.jpeg" width="45%" />
</div>

**Code YAML :**

```yaml
type: custom:fold-entity-row
padding: 0
clickable: true
card_mod:
  style: 'div#head { display: block !important; width: 100% !important; padding: 0
    !important; margin: 0 !important; --toggle-icon-width: 0px !important; }

    #head { padding: 0 !important; margin: 0 !important; width: 100% !important; cursor:
    pointer !important; }

    #head ha-icon { display: none !important; }

    div#items { padding: 0 !important; margin: 0 !important; }

    '
head:
  type: custom:button-card
  show_name: false
  show_icon: false
  show_state: false
  styles:
    card:
    - padding: 0
    - background: rgba(20, 27, 38, 0.6)
    - backdrop-filter: blur(10px)
    - -webkit-backdrop-filter: blur(10px)
    - border-radius: 20px
    - border: 1px solid rgba(0, 191, 255, 0.4)
    - box-shadow: 0 8px 32px rgba(0,0,0,0.4)
    - height: 85px
    grid:
    - grid-template-areas: '"icon details" "footer footer"'
    - grid-template-columns: 130px minmax(0, 1fr)
    - grid-template-rows: 58px 27px
    custom_fields:
      icon:
      - justify-self: stretch
      - align-self: stretch
      - border-right: 2px solid rgba(255,255,255,0.6)
      - border-top-left-radius: 20px
      - display: flex
      - align-items: center
      - justify-content: center
      details:
      - justify-self: stretch
      - align-self: stretch
      - display: flex
      - flex-direction: column
      - justify-content: center
      - align-items: center
      - padding: 0 10px
  custom_fields:
    icon: "[[[\n  const blue = \"#00BFFF\";\n  const svg = `\n    <svg viewBox=\"\
      0 0 100 100\" width=\"42\" height=\"42\" style=\"filter: drop-shadow(0 4px 8px\
      \ rgba(0,0,0,0.5));\">\n      <defs>\n        <linearGradient id=\"camHead\"\
      \ x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n          <stop offset=\"0%\"\
      \ style=\"stop-color:#ffffff;stop-opacity:1\" />\n          <stop offset=\"\
      100%\" style=\"stop-color:#f0f0f0;stop-opacity:1\" />\n        </linearGradient>\n\
      \        <linearGradient id=\"lensReflect\" x1=\"0%\" y1=\"0%\" x2=\"100%\"\
      \ y2=\"100%\">\n          <stop offset=\"0%\" style=\"stop-color:#1a1a1a;stop-opacity:1\"\
      \ />\n          <stop offset=\"100%\" style=\"stop-color:#000000;stop-opacity:1\"\
      \ />\n        </linearGradient>\n      </defs>\n      <!-- Camera Base -->\n\
      \      <path d=\"M35,80 L65,80 L60,70 L40,70 Z\" fill=\"#e0e0e0\" />\n     \
      \ <!-- Neck -->\n      <rect x=\"45\" y=\"65\" width=\"10\" height=\"8\" fill=\"\
      #d0d0d0\" />\n      <!-- Camera Head (Spherical) -->\n      <circle cx=\"50\"\
      \ cy=\"45\" r=\"25\" fill=\"url(#camHead)\" stroke=\"#eee\" stroke-width=\"\
      0.5\" />\n      <!-- Lens Black Area -->\n      <circle cx=\"50\" cy=\"45\"\
      \ r=\"18\" fill=\"#111\" />\n      <circle cx=\"50\" cy=\"45\" r=\"12\" fill=\"\
      url(#lensReflect)\" />\n      <!-- Reflections -->\n      <ellipse cx=\"46\"\
      \ cy=\"40\" rx=\"4\" ry=\"2\" fill=\"white\" opacity=\"0.15\" transform=\"rotate(-30\
      \ 46 40)\" />\n      <circle cx=\"48\" cy=\"42\" r=\"3\" fill=\"#00BFFF\" opacity=\"\
      0.3\" filter=\"blur(1px)\" />\n      <!-- LED -->\n      <circle cx=\"50\" cy=\"\
      28\" r=\"1.5\" fill=\"#00E676\" style=\"animation: blinkLED 2.5s infinite;\"\
      \ />\n      <style>@keyframes blinkLED { 0%, 100% { opacity: 1; } 50% { opacity:\
      \ 0.2; } }</style>\n    </svg>\n  `;\n  return `\n    <div style=\"width: 100%;\
      \ height: 100%; display: flex; flex-direction: column; align-items: center;\
      \ justify-content: center; background: linear-gradient(135deg, ${blue}33 0%,\
      \ ${blue}0D 100%); border-top-left-radius: 20px; position: relative;\">\n  \
      \    <div style=\"position: absolute; width: 50px; height: 50px; background:\
      \ ${blue}; border-radius: 50%; filter: blur(20px); opacity: 0.3; animation:\
      \ pulseGlow 4s infinite alternate ease-in-out;\"></div>\n      <div style=\"\
      position: relative; z-index: 1;\">${svg}</div>\n      <div style=\"font-size:\
      \ 10px; font-weight: 900; color: white; text-transform: uppercase; letter-spacing:\
      \ 0.8px; margin-top: -8px; z-index: 1;\">Caméras</div>\n      <style>@keyframes\
      \ pulseGlow { from { opacity: 0.2; transform: scale(0.9); } to { opacity: 0.4;\
      \ transform: scale(1.1); } }</style>\n    </div>\n  `;\n]]]\n"
    details: "[[[\n  return `\n    <div style=\"display: flex; flex-direction: column;\
      \ justify-content: center; align-items: center; height: 100%; text-align: center;\"\
      >\n      <div style=\"font-size: 13px; font-weight: 800; color: white; text-transform:\
      \ uppercase; letter-spacing: 1px; margin-bottom: 2px;\">INTÉRIEURES</div>\n\
      \      <div style=\"font-size: 10px; color: #46D278; font-weight: 700; display:\
      \ flex; align-items: center; gap: 5px; justify-content: center;\">\n       \
      \ <span style=\"width: 6px; height: 6px; background: #46D278; border-radius:\
      \ 50%; display: inline-block; animation: pulseLED 2s infinite;\"></span>\n \
      \       SALON, CHAMBRE & BUREAU EN LIGNE\n      </div>\n    </div>\n    <style>@keyframes\
      \ pulseLED { 0% { opacity: 0.5; } 50% { opacity: 1; } 100% { opacity: 0.5; }\
      \ }</style>\n  `;\n]]]\n"
    footer: '[[[ return `<div style="display:flex; width:100%; justify-content:center;
      padding: 5px;"><ha-icon icon="mdi:chevron-down" style="color:rgba(255,255,255,0.5);
      width:18px;"></ha-icon></div>`; ]]]

      '
entities:
- type: custom:button-card
  name: CAMÉRA SALON
  styles:
    card:
    - background: none
    - border: none
    - padding: 10px 15px 5px 15px
    name:
    - color: rgba(255,255,255,0.4)
    - font-size: 10px
    - font-weight: 800
    - text-transform: uppercase
    - justify-self: start
- type: custom:button-card
  tap_action:
    action: fire-dom-event
    browser_mod:
      service: browser_mod.popup
      data:
        title: Live Salon
        content:
          type: custom:webrtc-camera
          url: rtsp://[USER]:[PASSWORD]@192.168.1.77/stream1
  styles:
    card:
    - margin: 0 10px 15px 10px
    - border-radius: 12px
    - overflow: hidden
    - border: 1px solid rgba(255,255,255,0.1)
    - padding: 0
    - background: black
    grid:
    - grid-template-areas: '"cam"'
    - grid-template-columns: 1fr
    custom_fields:
      cam:
      - pointer-events: none
      - width: 100%
  custom_fields:
    cam:
      card:
        type: custom:webrtc-camera
        url: rtsp://[USER]:[PASSWORD]@192.168.1.77/stream1
        ui: false
- type: custom:button-card
  name: CAMÉRA CHAMBRE
  styles:
    card:
    - background: none
    - border: none
    - padding: 10px 15px 5px 15px
    name:
    - color: rgba(255,255,255,0.4)
    - font-size: 10px
    - font-weight: 800
    - text-transform: uppercase
    - justify-self: start
- type: custom:button-card
  tap_action:
    action: fire-dom-event
    browser_mod:
      service: browser_mod.popup
      data:
        title: Live Chambre
        content:
          type: custom:webrtc-camera
          url: rtsp://[USER]:[PASSWORD]@192.168.1.79/stream1
  styles:
    card:
    - margin: 0 10px 15px 10px
    - border-radius: 12px
    - overflow: hidden
    - border: 1px solid rgba(255,255,255,0.1)
    - padding: 0
    - background: black
    grid:
    - grid-template-areas: '"cam"'
    - grid-template-columns: 1fr
    custom_fields:
      cam:
      - pointer-events: none
      - width: 100%
  custom_fields:
    cam:
      card:
        type: custom:webrtc-camera
        url: rtsp://[USER]:[PASSWORD]@192.168.1.79/stream1
        ui: false
- type: custom:button-card
  name: CAMÉRA BUREAU
  styles:
    card:
    - background: none
    - border: none
    - padding: 10px 15px 5px 15px
    name:
    - color: rgba(255,255,255,0.4)
    - font-size: 10px
    - font-weight: 800
    - text-transform: uppercase
    - justify-self: start
- type: custom:button-card
  tap_action:
    action: fire-dom-event
    browser_mod:
      service: browser_mod.popup
      data:
        title: Live Bureau
        content:
          type: custom:webrtc-camera
          url: rtsp://[USER]:[PASSWORD]@192.168.1.70/stream1
  styles:
    card:
    - margin: 0 10px 15px 10px
    - border-radius: 12px
    - overflow: hidden
    - border: 1px solid rgba(255,255,255,0.1)
    - padding: 0
    - background: black
    grid:
    - grid-template-areas: '"cam"'
    - grid-template-columns: 1fr
    custom_fields:
      cam:
      - pointer-events: none
      - width: 100%
  custom_fields:
    cam:
      card:
        type: custom:webrtc-camera
        url: rtsp://[USER]:[PASSWORD]@192.168.1.70/stream1
        ui: false
```

---

## Agenda (Calendar)

<div align="center">
  <img src="images/showcase/calendar_closed.jpeg" width="45%" />
  <img src="images/showcase/calendar_expanded.jpeg" width="45%" />
</div>

**Code YAML :**

```yaml
type: entities
card_mod:
  style: "ha-card {\n  background: none !important;\n  border: none !important;\n\
    \  box-shadow: none !important;\n  padding: 0 !important;\n  margin-top: 0px !important;\n\
    \  margin-bottom: 0px !important;\n}\n.card-content {\n  padding: 0px !important;\n\
    \  margin: 0px !important;\n}\n#states {\n  padding: 0px !important;\n  margin:\
    \ 0px !important;\n}\n:host {\n  margin: 0px !important;\n}\n"
entities:
- type: custom:fold-entity-row
  padding: 0
  clickable: true
  card_mod:
    style: "div#head {\n  display: block !important;\n  width: 100% !important;\n\
      \  padding: 0 !important;\n  margin: 0 !important;\n  --toggle-icon-width: 0px\
      \ !important;\n}\n#head {\n  padding: 0 !important;\n  margin: 0 !important;\n\
      \  width: 100% !important;\n  cursor: pointer !important;\n  pointer-events:\
      \ auto !important;\n}\n#head ha-icon { display: none !important; }\n"
  head:
    type: custom:button-card
    entity: calendar.chris_billet_gmail_com
    show_name: false
    show_icon: false
    tap_action:
      action: none
    hold_action:
      action: none
    styles:
      card:
      - padding: 0
      - background: rgba(20, 27, 38, 0.6)
      - backdrop-filter: blur(10px)
      - -webkit-backdrop-filter: blur(10px)
      - border-radius: 20px
      - border: 1px solid rgba(255,255,255,0.15)
      - box-shadow: 0 4px 20px rgba(0,0,0,0.4)
      - margin: 0px
      - pointer-events: none
      grid:
      - grid-template-areas: '"date details" "footer footer"'
      - grid-template-columns: 130px minmax(0, 1fr)
      - grid-template-rows: auto 30px
      - min-height: 110px
      - width: 100%
      custom_fields:
        date:
        - justify-self: stretch
        - align-self: stretch
        - background: linear-gradient(135deg, rgba(255, 215, 0, 0.25) 0%, rgba(255,
            215, 0, 0.08) 100%)
        - border-right: 2px solid rgba(255,255,255,0.6)
        - display: flex
        - flex-direction: column
        - align-items: center
        - justify-content: center
        - padding: 12px 4px
        details:
        - justify-self: stretch
        - align-self: stretch
        - padding: 10px 15px 10px 0px
        - display: flex
        - align-items: center
        footer:
        - justify-self: stretch
        - align-self: stretch
        - background: rgba(0,0,0,0.2)
        - display: flex
        - align-items: center
        - justify-content: center
        - border-radius: 0 0 20px 20px
    custom_fields:
      date: "[[[\n  return `\n    <svg viewBox=\"0 0 200 200\" style=\"width: 55px;\
        \ height: 55px; margin-bottom: 5px; filter: drop-shadow(0 4px 8px rgba(0,0,0,0.5));\"\
        >\n      <defs>\n        <linearGradient id=\"glass\" x1=\"0%\" y1=\"0%\"\
        \ x2=\"100%\" y2=\"100%\">\n          <stop offset=\"0%\" style=\"stop-color:rgba(255,255,255,0.3)\"\
        />\n          <stop offset=\"50%\" style=\"stop-color:rgba(255,255,255,0.1)\"\
        />\n          <stop offset=\"100%\" style=\"stop-color:rgba(255,255,255,0.05)\"\
        />\n        </linearGradient>\n        <linearGradient id=\"gold-bar\" x1=\"\
        0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">\n          <stop offset=\"0%\" style=\"\
        stop-color:#FFD700\"/>\n          <stop offset=\"40%\" style=\"stop-color:#FFD700\"\
        />\n          <stop offset=\"100%\" style=\"stop-color:#ff9800\"/>\n     \
        \   </linearGradient>\n        <filter id=\"glow\">\n          <feGaussianBlur\
        \ stdDeviation=\"2\" result=\"coloredBlur\"/>\n          <feMerge>\n     \
        \       <feMergeNode in=\"coloredBlur\"/>\n            <feMergeNode in=\"\
        SourceGraphic\"/>\n          </feMerge>\n        </filter>\n      </defs>\n\
        \      <rect x=\"25\" y=\"45\" width=\"150\" height=\"130\" rx=\"25\" fill=\"\
        url(#glass)\" stroke=\"rgba(255,255,255,0.3)\" stroke-width=\"2\"/>\n    \
        \  <path d=\"M25 70 V55 a25 25 0 0 1 25 -25 h100 a25 25 0 0 1 25 25 v15 z\"\
        \ fill=\"url(#gold-bar)\" filter=\"url(#glow)\"/>\n      <rect x=\"35\" y=\"\
        33\" width=\"130\" height=\"3\" rx=\"1.5\" fill=\"rgba(255,255,255,0.7)\"\
        />\n      <rect x=\"60\" y=\"15\" width=\"12\" height=\"30\" rx=\"6\" fill=\"\
        #F0F0F0\" stroke=\"rgba(0,0,0,0.2)\" stroke-width=\"1\"/>\n      <rect x=\"\
        128\" y=\"15\" width=\"12\" height=\"30\" rx=\"6\" fill=\"#F0F0F0\" stroke=\"\
        rgba(0,0,0,0.2)\" stroke-width=\"1\"/>\n      <circle cx=\"100\" cy=\"120\"\
        \ r=\"25\" fill=\"none\" stroke=\"rgba(255,255,255,0.1)\" stroke-width=\"\
        4\" stroke-dasharray=\"2,6\"/>\n    </svg>\n    <div style=\"color: #FFFFFF;\
        \ font-size: 13px; font-weight: 900; letter-spacing: 0.5px; text-shadow: 0\
        \ 2px 4px rgba(0,0,0,0.4);\">\n      Aujourd'hui\n    </div>\n  `;\n]]]\n"
      details:
        card:
          type: custom:atomic-calendar-revive
          maxDaysToShow: 1
          maxEventCount: 3
          showDate: false
          showMonth: false
          showWeekDay: true
          showLocation: true
          showDescription: false
          showCurrentEvent: true
          showNoEventsForToday: true
          noEventText: Aucun RDV aujourd'hui
          showHiddenText: false
          showFinishedEvents: false
          hideFinishedEvents: true
          entities:
          - entity: calendar.chris_billet_gmail_com
            blocklist: poubelle|Sortir|VERTE|JAUNE
            blacklist: poubelle|Sortir|VERTE|JAUNE
          - entity: calendar.icloud
            blocklist: poubelle|Sortir|VERTE|JAUNE
            blacklist: poubelle|Sortir|VERTE|JAUNE
          - calendar.paris_saint_germain
          - calendar.jours_feries_et_autres_fetes_en_france
          - calendar.anniversaires
          card_mod:
            style: "ha-card { background: none !important; border: none !important;\
              \ box-shadow: none !important; padding: 0 !important; margin: 0 !important;\
              \ } .day-header { display: none !important; } .cal-table { border: none\
              \ !important; width: 100% !important; margin: 0 !important; border-collapse:\
              \ collapse !important; display: table !important; } .event-container\
              \ { padding: 0 !important; margin-bottom: 8px !important; } .event-left\
              \ { \n  width: 65px !important; \n  text-align: center !important; \n\
              \  font-size: 18px !important; \n  font-weight: 900 !important;\n  color:\
              \ rgba(255,255,255,0.95) !important;\n  padding: 0 !important;\n  vertical-align:\
              \ middle !important;\n  line-height: normal !important;\n} .event-left\
              \ > div { display: flex !important; flex-direction: column !important;\
              \ align-items: center !important; justify-content: center !important;\
              \ height: 100% !important; width: 100% !important; margin: 0 !important;\
              \ } .event-right { padding: 0 !important; text-align: left !important;\
              \ vertical-align: middle !important; } .event-title { color: white !important;\
              \ font-size: 13px !important; font-weight: 900 !important; line-height:\
              \ 1.1 !important; } .event-location, .event-location-icon, a, .event-progressBar\
              \ { color: #ff9800 !important; font-size: 10px !important; text-decoration:\
              \ none !important; } .event-time { color: rgba(255,255,255,0.4) !important;\
              \ font-size: 7px !important; } .event-right span { font-size: 7px !important;\
              \ color: rgba(255,255,255,0.3) !important; } .event-progressBar { background-color:\
              \ #ff9800 !important; height: 2px !important; margin-top: 4px !important;\
              \ }\n"
      footer: '[[[ return `<ha-icon icon="mdi:chevron-down" style="color: rgba(255,255,255,0.4);
        width: 24px; height: 24px;"></ha-icon>`; ]]]

        '
  entities:
  - type: custom:atomic-calendar-revive
    name: ' '
    entities:
    - calendar.chris_billet_gmail_com
    - calendar.icloud
    - calendar.paris_saint_germain
    - calendar.jours_feries_et_autres_fetes_en_france
    - calendar.anniversaires
    maxDaysToShow: 8
    maxEventCount: 6
    showMonth: false
    showWeekDay: true
    showDate: false
    sortByStartTime: true
    showLocation: true
    showDescription: false
    showNoEventsForToday: false
    showCurrentEvent: false
    showHiddenText: false
    showFinishedEvents: false
    hideFinishedEvents: true
    card_mod:
      style: "ha-card {\n  margin-top: 0px !important;\n  background: rgba(20, 27,\
        \ 38, 0.4) !important;\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter:\
        \ blur(10px);\n  border-radius: 20px !important;\n  border: 1px solid rgba(255,255,255,0.05)\
        \ !important;\n  box-shadow: 0 4px 15px rgba(0,0,0,0.2) !important;\n  margin:\
        \ 0 !important;\n  width: 100% !important;\n} .card-header { display: none\
        \ !important; } .day-header { color: rgba(255,255,255,0.7) !important; } .event-title\
        \ { color: rgba(255,255,255,0.9) !important; font-weight: bold !important;\
        \ font-size: 13px !important; } .event-location, .event-location-icon, a,\
        \ .event-progressBar { color: #ff9800 !important; text-decoration: none !important;\
        \ } .event-progressBar { background-color: #ff9800 !important; } .cal-table\
        \ tbody tr:nth-of-type(1), .cal-table tbody tr:nth-of-type(2) { display: none\
        \ !important; }\n"
```

---

## Multimédia / Apple TV

<div align="center">
  <img src="images/showcase/apple_tv_closed.png" width="45%" />
  <img src="images/showcase/apple_tv_expanded.png" width="45%" />
</div>

**Code YAML :**

```yaml
type: custom:mod-card
card_mod:
  style: "ha-card{\n  border-radius: 16px;\n  background: linear-gradient(160deg,#141b26\
    \ 0%,#111826 45%,#0d121c 100%);\n  box-shadow: 0 10px 22px rgba(0,0,0,0.65);\n\
    \  border: 1px solid rgba(255,255,255,0.04);\n  overflow: hidden;\n}\n"
card:
  type: vertical-stack
  cards:
  - type: custom:button-card
    entity: media_player.salon
    name: Salon
    icon: mdi:apple
    show_state: false
    tap_action:
      action: more-info
      entity: media_player.salon
    styles:
      card:
      - background: transparent
      - border: none
      - box-shadow: none
      - padding: 10px 12px 0
      grid:
      - grid-template-areas: '"i n app"'
      - grid-template-columns: 18px 1fr auto
      - column-gap: 8px
      - align-items: center
      icon:
      - width: 18px
      - color: rgba(255,255,255,0.92)
      name:
      - justify-self: start
      - font-weight: 900
      - font-size: 13px
      - color: rgba(255,255,255,0.95)
      custom_fields:
        app:
        - justify-self: end
        - align-self: center
    custom_fields:
      app: "[[[\n  const mp = states['media_player.salon'];\n  const a = (mp?.attributes?.app_name\
        \ || mp?.attributes?.source || '').toString().toLowerCase();\n  const label\
        \ = (mp?.attributes?.app_name || mp?.attributes?.source || 'App').toString();\n\
        \n  let ic = 'mdi:apps';\n  if (a.includes('netflix')) ic = 'mdi:netflix';\n\
        \  else if (a.includes('youtube')) ic = 'mdi:youtube';\n  else if (a.includes('music'))\
        \ ic = 'mdi:music';\n  else if (a.includes('apple tv')) ic = 'mdi:apple-tv';\n\
        \  else if (a.includes('iptv')) ic = 'mdi:television-play';\n\n  return `\n\
        \    <div style=\"\n      display:flex; align-items:center; gap:8px;\n   \
        \   padding:6px 10px;\n      border-radius:999px;\n      background: rgba(255,255,255,0.07);\n\
        \      border: 1px solid rgba(255,255,255,0.10);\n    \">\n      <ha-icon\
        \ icon=\"${ic}\" style=\"width:18px;height:18px;color:rgba(255,255,255,0.92)\"\
        ></ha-icon>\n      <span style=\"\n        font-weight:900;\n        font-size:12px;\n\
        \        color: rgba(255,255,255,0.90);\n        max-width:140px;\n      \
        \  overflow:hidden;\n        text-overflow:ellipsis;\n        white-space:nowrap;\n\
        \      \">${label}</span>\n    </div>\n  `;\n]]]\n"
  - type: media-control
    entity: media_player.salon
    card_mod:
      style: "ha-card{\n  background: transparent;\n  border: none;\n  box-shadow:\
        \ none;\n  padding: 6px 10px 2px;\n}\n"
  - type: grid
    columns: 3
    square: false
    cards:
    - type: custom:button-card
      name: POWER
      icon: mdi:power
      show_state: false
      tap_action:
        action: call-service
        service: remote.send_command
        target:
          entity_id: remote.salon
        data:
          command: suspend
      hold_action:
        action: call-service
        service: remote.send_command
        target:
          entity_id: remote.salon
        data:
          command: wakeup
      styles:
        card:
        - border-radius: 12px
        - padding: 9px
        - background: rgba(255,255,255,0.06)
        - border: 1px solid rgba(255,255,255,0.10)
        - height: 52px
        grid:
        - grid-template-areas: '"i" "n"'
        - grid-template-rows: 20px min-content
        - row-gap: 4px
        - justify-items: center
        - align-items: center
        icon:
        - width: 18px
        - color: rgba(255,255,255,0.92)
        name:
        - font-weight: 900
        - font-size: 10px
        - color: rgba(255,255,255,0.95)
    - type: custom:button-card
      name: HOME
      icon: mdi:home-variant
      show_state: false
      tap_action:
        action: call-service
        service: remote.send_command
        target:
          entity_id: remote.salon
        data:
          command: home
      styles:
        card:
        - border-radius: 12px
        - padding: 9px
        - background: rgba(255,255,255,0.06)
        - border: 1px solid rgba(255,255,255,0.10)
        - height: 52px
        grid:
        - grid-template-areas: '"i" "n"'
        - grid-template-rows: 20px min-content
        - row-gap: 4px
        - justify-items: center
        - align-items: center
        icon:
        - width: 18px
        - color: rgba(255,255,255,0.92)
        name:
        - font-weight: 900
        - font-size: 10px
        - color: rgba(255,255,255,0.95)
    - type: custom:button-card
      name: RETOUR
      icon: mdi:undo-variant
      show_state: false
      tap_action:
        action: call-service
        service: remote.send_command
        target:
          entity_id: remote.salon
        data:
          command: menu
      styles:
        card:
        - border-radius: 12px
        - padding: 9px
        - background: rgba(255,255,255,0.06)
        - border: 1px solid rgba(255,255,255,0.10)
        - height: 52px
        grid:
        - grid-template-areas: '"i" "n"'
        - grid-template-rows: 20px min-content
        - row-gap: 4px
        - justify-items: center
        - align-items: center
        icon:
        - width: 18px
        - color: rgba(255,255,255,0.92)
        name:
        - font-weight: 900
        - font-size: 10px
        - color: rgba(255,255,255,0.95)
    card_mod:
      style: "ha-card{\n  background: transparent;\n  border: none;\n  box-shadow:\
        \ none;\n  padding: 0 10px 8px;\n}\n"
  - type: custom:layout-card
    layout_type: custom:grid-layout
    layout:
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr
      grid-column-gap: 10px
      align-items: stretch
    cards:
    - type: grid
      columns: 3
      square: false
      view_layout:
        grid-column: 1 / span 4
      cards:
      - type: custom:button-card
        color_type: blank-card
      - type: custom:button-card
        icon: mdi:chevron-up
        show_name: false
        tap_action:
          action: call-service
          service: remote.send_command
          target:
            entity_id: remote.salon
          data:
            command: up
        styles:
          card:
          - border-radius: 12px
          - padding: 12px
          - background: rgba(255,255,255,0.06)
          - border: 1px solid rgba(255,255,255,0.10)
          - height: 112px
          - display: flex
          - align-items: center
          - justify-content: center
          icon:
          - width: 26px
          - color: rgba(255,255,255,0.95)
      - type: custom:button-card
        color_type: blank-card
      - type: custom:button-card
        icon: mdi:chevron-left
        show_name: false
        tap_action:
          action: call-service
          service: remote.send_command
          target:
            entity_id: remote.salon
          data:
            command: left
        styles:
          card:
          - border-radius: 12px
          - padding: 12px
          - background: rgba(255,255,255,0.06)
          - border: 1px solid rgba(255,255,255,0.10)
          - height: 112px
          - display: flex
          - align-items: center
          - justify-content: center
          icon:
          - width: 26px
          - color: rgba(255,255,255,0.95)
      - type: custom:button-card
        name: ''
        icon: mdi:circle-slice-8
        show_state: false
        tap_action:
          action: call-service
          service: remote.send_command
          target:
            entity_id: remote.salon
          data:
            command: select
        styles:
          card:
          - border-radius: 12px
          - background: rgba(255,255,255,0.10)
          - border: 1px solid rgba(255,255,255,0.16)
          - height: 112px
          - display: flex
          - align-items: center
          - justify-content: center
          icon:
          - width: 28px
          - color: rgba(255,255,255,0.95)
      - type: custom:button-card
        icon: mdi:chevron-right
        show_name: false
        tap_action:
          action: call-service
          service: remote.send_command
          target:
            entity_id: remote.salon
          data:
            command: right
        styles:
          card:
          - border-radius: 12px
          - padding: 12px
          - background: rgba(255,255,255,0.06)
          - border: 1px solid rgba(255,255,255,0.10)
          - height: 112px
          - display: flex
          - align-items: center
          - justify-content: center
          icon:
          - width: 26px
          - color: rgba(255,255,255,0.95)
      - type: custom:button-card
        color_type: blank-card
      - type: custom:button-card
        icon: mdi:chevron-down
        show_name: false
        tap_action:
          action: call-service
          service: remote.send_command
          target:
            entity_id: remote.salon
          data:
            command: down
        styles:
          card:
          - border-radius: 12px
          - padding: 12px
          - background: rgba(255,255,255,0.06)
          - border: 1px solid rgba(255,255,255,0.10)
          - height: 112px
          - display: flex
          - align-items: center
          - justify-content: center
          icon:
          - width: 26px
          - color: rgba(255,255,255,0.95)
      - type: custom:button-card
        color_type: blank-card
    - type: vertical-stack
      view_layout:
        grid-column: 5 / span 1
      cards:
      - type: custom:button-card
        name: ''
        icon: mdi:volume-plus
        show_state: false
        tap_action:
          action: call-service
          service: remote.send_command
          target:
            entity_id: remote.salon
          data:
            command: volume_up
        styles:
          card:
          - border-radius: 12px
          - background: rgba(255,255,255,0.06)
          - border: 1px solid rgba(255,255,255,0.10)
          - height: 172px
          - display: flex
          - align-items: center
          - justify-content: center
          icon:
          - width: 26px
          - color: rgba(255,255,255,0.92)
      - type: custom:button-card
        name: ''
        icon: mdi:volume-minus
        show_state: false
        tap_action:
          action: call-service
          service: remote.send_command
          target:
            entity_id: remote.salon
          data:
            command: volume_down
        styles:
          card:
          - border-radius: 12px
          - background: rgba(255,255,255,0.06)
          - border: 1px solid rgba(255,255,255,0.10)
          - height: 172px
          - display: flex
          - align-items: center
          - justify-content: center
          icon:
          - width: 26px
          - color: rgba(255,255,255,0.92)
```

---

## Imprimante 3D (3D Printer)

<div align="center">
  <img src="images/showcase/printer_closed.png" width="45%" />
  <img src="images/showcase/printer_expanded.png" width="45%" />
</div>

**Code YAML :**

```yaml
type: custom:apexcharts-card
grid_options:
  columns: 6
  rows: 2
header:
  show: true
  title: Imprimante 3D Mois
  show_states: true
  colorize_states: true
graph_span: 24h
series:
- entity: sensor.prise_imprimante_3d_energy_month
  name: ' '
  type: area
  color: '#FF8000'
  stroke_width: 3
  opacity: 0.5
  transform: return Math.round(parseFloat(x));
  group_by:
    func: max
    duration: 1h
card_mod:
  style: "ha-card {\n  background: rgba(20, 27, 38, 0.6) !important;\n  backdrop-filter:\
    \ blur(10px) !important;\n  -webkit-backdrop-filter: blur(10px) !important;\n\
    \  border-radius: 20px !important;\n  border: 1px solid rgba(255,255,255,0.1)\
    \ !important;\n  box-shadow: 0 4px 15px rgba(0,0,0,0.2) !important;\n  height:\
    \ 120px !important;\n  padding: 0px !important;\n  overflow: hidden !important;\n\
    }\n.apexcharts-canvas {\n  margin-top: -30px;\n}\n.apexcharts-header {\n  padding:\
    \ 12px 14px 0px 14px !important;\n  z-index: 10;\n}\n.apexcharts-header-title\
    \ {\n  font-size: 11px !important; \n  font-weight: 600 !important;\n  color:\
    \ rgba(255,255,255,0.6) !important;\n}\n.apexcharts-state-value {\n  font-size:\
    \ 20px !important; \n  font-weight: 900 !important;\n  color: #FFFFFF !important;\n\
    }\n.apexcharts-state-unit {\n  font-size: 11px !important;\n  opacity: 0.5 !important;\n\
    }\n"
apex_config:
  chart:
    height: 70px
    sparkline:
      enabled: true
    offsetY: 0
  stroke:
    curve: smooth
  fill:
    type: gradient
    gradient:
      type: horizontal
      shadeIntensity: 0
      opacityFrom: 0.4
      opacityTo: 0.1
      stops:
      - 0
      - 90
      - 100
```

---

## Réseau Livebox (Router Network)

<div align="center">
  <img src="images/showcase/livebox_closed.png" width="45%" />
  <img src="images/showcase/livebox_expanded.png" width="45%" />
</div>

**Code YAML :**

```yaml
type: custom:button-card
icon: mdi:home-variant-outline
name: Accueil
show_name: true
tap_action:
  action: navigate
  navigation_path: /lovelace/0
styles:
  card:
  - background: rgba(20, 27, 38, 0.6)
  - backdrop-filter: blur(8px)
  - -webkit-backdrop-filter: blur(8px)
  - border-radius: 12px
  - border: 1px solid rgba(255, 255, 255, 0.1)
  - padding: 6px 12px
  - width: fit-content
  - margin: 0 auto 10px 0
  grid:
  - grid-template-areas: '"i n"'
  - grid-template-columns: auto auto
  - column-gap: 8px
  icon:
  - width: 18px
  - color: '#00bfff'
  name:
  - font-size: 12px
  - font-weight: 700
  - color: rgba(255, 255, 255, 0.9)
```

---

## Réseau NAS & Serveurs (Servers & NAS)

<div align="center">
  <img src="images/showcase/nas_closed.png" width="45%" />
  <img src="images/showcase/nas_expanded.png" width="45%" />
</div>

**Code YAML :**

```yaml
type: custom:button-card
entity: sensor.chrisnas_etat
name: SYSTÈME NAS
icon: mdi:nas
show_state: true
styles:
  card:
  - background: rgba(20, 27, 38, 0.6)
  - backdrop-filter: blur(20px)
  - -webkit-backdrop-filter: blur(20px)
  - border-radius: 20px
  - border: 1px solid rgba(255, 255, 255, 0.1)
  - padding: 15px
  grid:
  - grid-template-areas: '"i n" "i s" "uptime uptime" "temp temp"'
  - grid-template-columns: 45px 1fr
  - align-items: center
  icon:
  - color: '[[[ return entity.state === ''good'' ? ''#00ff88'' : ''#ff1111'' ]]]

      '
  - width: 28px
  - filter: '[[[ return entity.state === ''good'' ? ''drop-shadow(0 0 5px #00ff88)''
      : ''drop-shadow(0 0 5px #ff1111)'' ]]]

      '
  name:
  - justify-self: start
  - font-weight: 900
  - font-size: 14px
  - color: '#ffffff'
  - text-transform: uppercase
  - letter-spacing: 2px
  state:
  - justify-self: start
  - font-weight: bold
  - font-size: 12px
  - color: rgba(255, 255, 255, 0.6)
  - text-transform: uppercase
  custom_fields:
    uptime:
    - margin-top: 15px
    - padding-top: 10px
    - border-top: 1px solid rgba(255, 255, 255, 0.05)
    - font-size: 14px
    - color: rgba(255, 255, 255, 0.6)
    temp:
    - margin-top: 5px
    - font-size: 16px
    - color: rgba(255, 255, 255, 0.6)
custom_fields:
  uptime: "[[[\n  const uptime = states['sensor.chrisnas_uptime'].state;\n  return\
    \ `<ha-icon icon=\"mdi:clock-outline\" style=\"width:14px;vertical-align:middle;margin-right:5px;\"\
    ></ha-icon> Uptime: ${new Date(uptime).toLocaleString()}`;\n]]]\n"
  temp: "[[[\n  const stemp = states['sensor.chrisnas_temperature_du_systeme'].state;\n\
    \  return `<ha-icon icon=\"mdi:thermometer\" style=\"width:14px;vertical-align:middle;margin-right:5px;\"\
    ></ha-icon> Temp. Système: ${stemp}°C`;\n]]]\n"
```

---

## Alerte Batteries Faibles (Low Batteries)

<div align="center">
  <img src="images/showcase/batteries_closed.png" width="45%" />
  <img src="images/showcase/batteries_expanded.png" width="45%" />
</div>

**Code YAML :**

```yaml
type: custom:button-card
icon: mdi:home-variant-outline
name: Accueil
show_name: true
tap_action:
  action: navigate
  navigation_path: /lovelace/0
styles:
  card:
  - background: rgba(20, 27, 38, 0.6)
  - backdrop-filter: blur(8px)
  - -webkit-backdrop-filter: blur(8px)
  - border-radius: 12px
  - border: 1px solid rgba(255, 255, 255, 0.1)
  - padding: 6px 12px
  - width: fit-content
  - margin: 0 auto 10px 0
  grid:
  - grid-template-areas: '"i n"'
  - grid-template-columns: auto auto
  - column-gap: 8px
  icon:
  - width: 18px
  - color: '#00bfff'
  name:
  - font-size: 12px
  - font-weight: 700
  - color: rgba(255, 255, 255, 0.9)
```

---

## Diffuseur Huiles Essentielles (Diffuser)

<div align="center">
  <img src="images/showcase/diffuseur_closed.png" width="45%" />
  <img src="images/showcase/diffuseur_expanded.png" width="45%" />
</div>

**Code YAML :**

```yaml
type: vertical-stack
cards:
- type: vertical-stack
  cards:
  - type: vertical-stack
    cards:
    - type: custom:button-card
      name: Diffuseur huile
      show_icon: false
      show_state: false
      triggers_update:
      - timer.diffuseur_huile
      - light.smart_humidifier_24080828541213641101c4e7ae093c61
      - select.smart_humidifier_24080828541213641101c4e7ae093c61_spray
      styles:
        card:
        - position: relative
        - padding: 2px
        - border-radius: 20px
        - overflow: hidden
        - min-height: 420px
        - background: rgba(20, 27, 38, 0.6)
        - backdrop-filter: blur(10px)
        - -webkit-backdrop-filter: blur(10px)
        - border: 1px solid rgba(255,255,255,0.1)
        - box-shadow: 0 4px 15px rgba(0,0,0,0.2)
        name:
        - position: absolute
        - z-index: 3
        - top: 16px
        - left: 20px
        - font-size: 16px
        - font-weight: 700
        - color: rgba(255,255,255,0.95)
        - text-shadow: 0 2px 10px rgba(0,0,0,0.8)
        custom_fields:
          back:
          - position: absolute
          - z-index: 5
          - top: 48px
          - left: 20px
          bg:
          - position: absolute
          - inset: 0
          - z-index: 1
          status:
          - position: absolute
          - z-index: 4
          - top: 16px
          - right: 20px
          - font-size: 12px
          - font-weight: 700
          - padding: 6px 12px
          - border-radius: 12px
          - color: rgba(255,255,255,0.95)
          - text-shadow: 0 2px 8px rgba(0,0,0,0.9)
          legend:
          - position: absolute
          - z-index: 4
          - left: 20px
          - right: 140px
          - bottom: 16px
          - font-size: 12px
          - font-weight: 600
          - color: rgba(255,255,255,0.90)
          - text-shadow: 0 2px 8px rgba(0,0,0,0.85)
          timer_card:
          - position: absolute
          - z-index: 6
          - right: 16px
          - bottom: 12px
          - width: 126px
      custom_fields:
        back:
          card:
            type: custom:button-card
            icon: mdi:home-outline
            name: Accueil
            show_name: true
            tap_action:
              action: navigate
              navigation_path: /lovelace/0
            styles:
              card:
              - padding: 4px 10px
              - background: rgba(255, 255, 255, 0.08)
              - border-radius: 8px
              - border: 1px solid rgba(255, 255, 255, 0.12)
              - width: fit-content
              - backdrop-filter: blur(5px)
              - -webkit-backdrop-filter: blur(5px)
              grid:
              - grid-template-areas: '"i n"'
              - grid-template-columns: auto auto
              - column-gap: 6px
              icon:
              - width: 16px
              - color: rgba(255, 255, 255, 0.8)
              name:
              - font-size: 11px
              - font-weight: 600
              - text-transform: uppercase
              - color: rgba(255, 255, 255, 0.8)
        bg: "[[[\n  const lightOn = (states['light.smart_humidifier_24080828541213641101c4e7ae093c61']?.state\
          \ || '').toLowerCase() === 'on';\n  const spray = (states['select.smart_humidifier_24080828541213641101c4e7ae093c61_spray']?.state\
          \ || 'off').toLowerCase();\n  const diffOn = spray !== 'off';\n  const sig\
          \ = `${lightOn ? 1 : 0}${diffOn ? 1 : 0}`;\n  let baseSrc = '/local/diffuseur_eteint.png';\n\
          \  if (lightOn) baseSrc = '/local/diffuseur_lumiere.png';\n  const overlaySrc\
          \ = '/local/diffuseur_overlay_diffusion.png';\n  return `\n    <!-- Glow\
          \ -->\n    <div style=\"\n      position:absolute; inset:0;\n      background:\
          \ radial-gradient(circle at top left, rgba(255,255,255,0.14), transparent\
          \ 60%);\n      pointer-events:none;\n      z-index:2;\n    \"></div>\n \
          \   <!-- Image BASE -->\n    <div style=\"\n      position:absolute; inset:0;\n\
          \      display:flex; align-items:center; justify-content:center;\n     \
          \ padding: 46px 10px 46px 10px;\n      z-index:1;\n      pointer-events:none;\n\
          \    \">\n      <img src=\"${baseSrc}?s=${sig}\" style=\"\n        width:\
          \ 100%;\n        max-width: 520px;\n        height: auto;\n        display:block;\n\
          \        filter: drop-shadow(0 12px 18px rgba(0,0,0,0.35));\n      \">\n\
          \    </div>\n    <!-- Overlay DIFFUSION -->\n    ${diffOn ? `\n      <div\
          \ style=\"\n        position:absolute;\n        top:0; left:0; right:0;\n\
          \        display:flex;\n        justify-content:center;\n        align-items:flex-start;\n\
          \        padding-top: 0px;\n        z-index:3;\n        pointer-events:none;\n\
          \      \">\n        <style>\n          @keyframes pulse_smoke {\n      \
          \      0% { opacity: 0.3; filter: brightness(0.85); }\n            100%\
          \ { opacity: 1; filter: brightness(1.15); }\n          }\n        </style>\n\
          \        <img src=\"${overlaySrc}?s=${sig}\" style=\"\n          width:\
          \ 100%;\n          max-width: 520px;\n          height: auto;\n        \
          \  display:block;\n          filter: brightness(1.1) contrast(1.05)\n  \
          \                drop-shadow(0 8px 14px rgba(0,0,0,0.25));\n          mix-blend-mode:\
          \ normal;\n          opacity: 0.95;\n          animation: pulse_smoke 1.5s\
          \ infinite alternate ease-in-out;\n        \">\n      </div>\n    ` : ``}\n\
          \  `;\n]]]\n"
        status: "[[[\n  const lightOn = (states['light.smart_humidifier_24080828541213641101c4e7ae093c61']?.state\
          \ || '').toLowerCase() === 'on';\n  const spray = (states['select.smart_humidifier_24080828541213641101c4e7ae093c61_spray']?.state\
          \ || 'off').toLowerCase();\n  const diffOn = spray !== 'off';\n  let label\
          \ = 'Éteint';\n  let bg = 'rgba(255,255,255,0.10)';\n  let bd = 'rgba(255,255,255,0.18)';\n\
          \  if (diffOn && lightOn) { label = 'Diffusion + Lumière'; bg='rgba(0,170,255,0.22)';\
          \ bd='rgba(0,170,255,0.55)'; }\n  else if (diffOn)       { label = `Diffusion:\
          \ ${spray.toUpperCase()}`; bg='rgba(255,180,0,0.20)'; bd='rgba(255,180,0,0.55)';\
          \ }\n  else if (lightOn)      { label = 'Lumière'; bg='rgba(70,210,120,0.18)';\
          \ bd='rgba(70,210,120,0.55)'; }\n  return `<span style=\"\n    display:inline-block;\n\
          \    background:${bg};\n    border:1px solid ${bd};\n    padding:4px 10px;\n\
          \    border-radius:12px;\n    box-shadow:0 6px 14px rgba(0,0,0,0.35);\n\
          \  \">${label}</span>`;\n]]]\n"
        legend: "[[[\n  const lightOn = (states['light.smart_humidifier_24080828541213641101c4e7ae093c61']?.state\
          \ || '').toLowerCase() === 'on';\n  const spray = (states['select.smart_humidifier_24080828541213641101c4e7ae093c61_spray']?.state\
          \ || 'off').toLowerCase();\n  return `\n    <div style=\"display:flex;gap:14px;flex-wrap:wrap;align-items:center;\"\
          >\n      <div>\U0001F4A1 Lumière <b>${lightOn ? 'ON' : 'OFF'}</b></div>\n\
          \      <div>\U0001F32B️ Diffusion <b>${spray.toUpperCase()}</b></div>\n\
          \    </div>\n  `;\n]]]\n"
        timer_card:
          card:
            type: entities
            show_header_toggle: false
            entities:
            - entity: timer.diffuseur_huile
              name: ' '
            card_mod:
              style: "ha-card{\n  background: transparent !important;\n  border: none\
                \ !important;\n  box-shadow: none !important;\n  padding: 0 !important;\n\
                }\n.card-content{\n  padding: 0 !important;\n}\nhui-generic-entity-row{\n\
                \  margin: 0 !important;\n  min-height: 0 !important;\n}\n/* cache\
                \ nom + icone */\n.name, .icon{\n  display:none !important;\n}\n/*\
                \ style du temps restant */\n.state{\n  font-weight: 500 !important;\n\
                \  font-size: 12px !important;\n  color: rgba(255,255,255,0.92) !important;\n\
                \  text-shadow: 0 2px 8px rgba(0,0,0,0.85) !important;\n  letter-spacing:\
                \ 0.3px;\n}\n"
  - type: custom:mod-card
    card_mod:
      style: "ha-card{\n  border-radius: 16px;\n  background: linear-gradient(160deg,#141b26\
        \ 0%,#111826 45%,#0d121c 100%);\n  box-shadow: 0 10px 22px rgba(0,0,0,0.65);\n\
        \  border: 1px solid rgba(255,255,255,0.04);\n  overflow: hidden;\n}\n"
    card:
      type: vertical-stack
      cards:
      - type: markdown
        content: '## Contrôles

          '
        card_mod:
          style: "ha-card{\n  background: transparent;\n  box-shadow: none;\n  border:\
            \ none;\n  padding: 14px 16px 6px;\n}\n"
      - type: grid
        columns: 2
        square: false
        cards:
        - type: custom:button-card
          entity: light.smart_humidifier_24080828541213641101c4e7ae093c61
          name: Lumière
          icon: mdi:lightbulb
          show_state: false
          tap_action:
            action: toggle
          custom_fields:
            glow: "[[[\n  const on = (entity?.state || 'off') === 'on';\n  if (!on)\
              \ return '';\n\n  const eff = (entity?.attributes?.effect || '').toString();\n\
              \  const isRainbow = eff === 'Rainbow';\n\n  const rgb = entity?.attributes?.rgb_color;\n\
              \  const hs  = entity?.attributes?.hs_color;\n\n  let c = 'rgba(0,170,255,0.85)';\n\
              \  if (rgb && rgb.length === 3) c = `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`;\n\
              \  else if (hs && hs.length === 2) c = `hsl(${hs[0]}, 100%, 60%)`;\n\
              \n  if (isRainbow) {\n    return `\n      <div class=\"rainbowGlow\"\
              ></div>\n      <style>\n        @keyframes hueSpin { from { filter:\
              \ hue-rotate(0deg); } to { filter: hue-rotate(360deg); } }\n       \
              \ .rainbowGlow{\n          position:absolute; inset:-3px;\n        \
              \  border-radius:12px;\n          background: conic-gradient(from 0deg,\n\
              \            rgba(255,0,0,.55),\n            rgba(255,180,0,.55),\n\
              \            rgba(0,255,0,.55),\n            rgba(0,170,255,.55),\n\
              \            rgba(170,0,255,.55),\n            rgba(255,0,0,.55)\n \
              \         );\n          opacity:.60;\n          filter: blur(10px);\n\
              \          animation: hueSpin 2.2s linear infinite;\n          pointer-events:none;\n\
              \        }\n      </style>\n    `;\n  }\n\n  return `\n    <div style=\"\
              \n      position:absolute; inset:-3px;\n      border-radius:12px;\n\
              \      background:${c};\n      opacity:0.32;\n      filter: blur(10px);\n\
              \      pointer-events:none;\n    \"></div>\n  `;\n]]]\n"
          styles:
            card:
            - border-radius: 12px
            - padding: 12px
            - overflow: hidden
            - position: relative
            - background: "[[[\n  const on = (entity?.state || 'off') === 'on';\n\
                \  return on ? 'rgba(255,255,255,0.14)' : 'rgba(255,255,255,0.06)';\n\
                ]]]\n"
            - border: "[[[\n  const on = (entity?.state || 'off') === 'on';\n  return\
                \ on ? '1px solid rgba(255,255,255,0.28)' : '1px solid rgba(255,255,255,0.10)';\n\
                ]]]\n"
            grid:
            - grid-template-areas: '"i n"'
            - grid-template-columns: auto 1fr
            - column-gap: 8px
            - justify-items: start
            - align-items: center
            icon:
            - width: 20px
            - color: rgba(255,255,255,0.92)
            - z-index: 2
            name:
            - font-weight: 900
            - font-size: 14px
            - color: rgba(255,255,255,0.95)
            - text-shadow: 0 2px 10px rgba(0,0,0,0.65)
            - z-index: 2
            custom_fields:
              glow:
              - position: absolute
              - inset: 0
              - z-index: 0
        - type: custom:button-card
          entity: light.smart_humidifier_24080828541213641101c4e7ae093c61
          name: Couleur
          icon: mdi:palette
          show_state: false
          tap_action:
            action: more-info
            entity: light.smart_humidifier_24080828541213641101c4e7ae093c61
          styles:
            card:
            - border-radius: 12px
            - padding: 12px
            - background: rgba(255,255,255,0.06)
            - border: 1px solid rgba(255,255,255,0.10)
            grid:
            - grid-template-areas: '"i n"'
            - grid-template-columns: auto 1fr
            - column-gap: 8px
            - justify-items: start
            - align-items: center
            icon:
            - width: 20px
            - color: rgba(255,255,255,0.92)
            name:
            - font-weight: 900
            - font-size: 14px
            - color: rgba(255,255,255,0.95)
            - text-shadow: 0 2px 10px rgba(0,0,0,0.65)
        card_mod:
          style: "ha-card{\n  background: transparent;\n  box-shadow: none;\n  border:\
            \ none;\n  padding: 0 6px 6px;\n}\n"
      - type: grid
        columns: 3
        square: false
        cards:
        - type: custom:button-card
          name: 'OFF'
          icon: mdi:water-off
          show_state: false
          tap_action:
            action: call-service
            service: select.select_option
            target:
              entity_id: select.smart_humidifier_24080828541213641101c4e7ae093c61_spray
            data:
              option: 'off'
          styles:
            card:
            - border-radius: 12px
            - padding: 12px
            - background: "[[[\n  const v = (states['select.smart_humidifier_24080828541213641101c4e7ae093c61_spray']?.state\
                \ || 'off');\n  return (v === 'off') ? 'rgba(255,255,255,0.14)' :\
                \ 'rgba(255,255,255,0.06)';\n]]]\n"
            - border: "[[[\n  const v = (states['select.smart_humidifier_24080828541213641101c4e7ae093c61_spray']?.state\
                \ || 'off');\n  return (v === 'off') ? '1px solid rgba(255,255,255,0.28)'\
                \ : '1px solid rgba(255,255,255,0.10)';\n]]]\n"
            name:
            - font-weight: 900
            - font-size: 12px
            - color: rgba(255,255,255,0.95)
            icon:
            - width: 22px
            - color: rgba(255,255,255,0.95)
        - type: custom:button-card
          name: ECO
          icon: mdi:leaf
          show_state: false
          tap_action:
            action: call-service
            service: select.select_option
            target:
              entity_id: select.smart_humidifier_24080828541213641101c4e7ae093c61_spray
            data:
              option: eco
          styles:
            card:
            - border-radius: 12px
            - padding: 12px
            - background: "[[[\n  const v = (states['select.smart_humidifier_24080828541213641101c4e7ae093c61_spray']?.state\
                \ || 'off');\n  return (v === 'eco') ? 'rgba(70,210,120,0.18)' : 'rgba(255,255,255,0.06)';\n\
                ]]]\n"
            - border: "[[[\n  const v = (states['select.smart_humidifier_24080828541213641101c4e7ae093c61_spray']?.state\
                \ || 'off');\n  return (v === 'eco') ? '1px solid rgba(70,210,120,0.55)'\
                \ : '1px solid rgba(255,255,255,0.10)';\n]]]\n"
            name:
            - font-weight: 900
            - font-size: 12px
            - color: rgba(255,255,255,0.95)
            icon:
            - width: 22px
            - color: rgba(255,255,255,0.95)
        - type: custom:button-card
          name: 'ON'
          icon: mdi:water
          show_state: false
          tap_action:
            action: call-service
            service: select.select_option
            target:
              entity_id: select.smart_humidifier_24080828541213641101c4e7ae093c61_spray
            data:
              option: 'on'
          styles:
            card:
            - border-radius: 12px
            - padding: 12px
            - background: "[[[\n  const v = (states['select.smart_humidifier_24080828541213641101c4e7ae093c61_spray']?.state\
                \ || 'off');\n  return (v === 'on') ? 'rgba(0,170,255,0.18)' : 'rgba(255,255,255,0.06)';\n\
                ]]]\n"
            - border: "[[[\n  const v = (states['select.smart_humidifier_24080828541213641101c4e7ae093c61_spray']?.state\
                \ || 'off');\n  return (v === 'on') ? '1px solid rgba(0,170,255,0.55)'\
                \ : '1px solid rgba(255,255,255,0.10)';\n]]]\n"
            name:
            - font-weight: 900
            - font-size: 12px
            - color: rgba(255,255,255,0.95)
            icon:
            - width: 22px
            - color: rgba(255,255,255,0.95)
      - type: grid
        columns: 5
        square: false
        cards:
        - type: custom:button-card
          name: 15m
          icon: mdi:timer-outline
          show_state: false
          tap_action:
            action: call-service
            service: timer.start
            target:
              entity_id: timer.diffuseur_huile
            data:
              duration: 00:15:00
          styles:
            card:
            - border-radius: 12px
            - padding: 10px
            - background: rgba(255,255,255,0.06)
            - border: 1px solid rgba(255,255,255,0.10)
            name:
            - font-weight: 900
            - font-size: 12px
            - color: rgba(255,255,255,0.95)
            icon:
            - width: 18px
            - color: rgba(255,255,255,0.92)
        - type: custom:button-card
          name: 30m
          icon: mdi:timer-outline
          show_state: false
          tap_action:
            action: call-service
            service: timer.start
            target:
              entity_id: timer.diffuseur_huile
            data:
              duration: 00:30:00
          styles:
            card:
            - border-radius: 12px
            - padding: 10px
            - background: rgba(255,255,255,0.06)
            - border: 1px solid rgba(255,255,255,0.10)
            name:
            - font-weight: 900
            - font-size: 12px
            - color: rgba(255,255,255,0.95)
            icon:
            - width: 18px
            - color: rgba(255,255,255,0.92)
        - type: custom:button-card
          name: 1H
          icon: mdi:timer-outline
          show_state: false
          tap_action:
            action: call-service
            service: timer.start
            target:
              entity_id: timer.diffuseur_huile
            data:
              duration: 01:00:00
          styles:
            card:
            - border-radius: 12px
            - padding: 10px
            - background: rgba(255,255,255,0.06)
            - border: 1px solid rgba(255,255,255,0.10)
            name:
            - font-weight: 900
            - font-size: 12px
            - color: rgba(255,255,255,0.95)
            icon:
            - width: 18px
            - color: rgba(255,255,255,0.92)
        - type: custom:button-card
          name: 2H
          icon: mdi:timer-outline
          show_state: false
          tap_action:
            action: call-service
            service: timer.start
            target:
              entity_id: timer.diffuseur_huile
            data:
              duration: 02:00:00
          styles:
            card:
            - border-radius: 12px
            - padding: 10px
            - background: rgba(255,255,255,0.06)
            - border: 1px solid rgba(255,255,255,0.10)
            name:
            - font-weight: 900
            - font-size: 12px
            - color: rgba(255,255,255,0.95)
            icon:
            - width: 18px
            - color: rgba(255,255,255,0.92)
        - type: custom:button-card
          name: Stop
          icon: mdi:timer-off-outline
          show_state: false
          tap_action:
            action: call-service
            service: timer.cancel
            target:
              entity_id: timer.diffuseur_huile
          styles:
            card:
            - border-radius: 12px
            - padding: 10px
            - background: rgba(220,70,70,0.12)
            - border: 1px solid rgba(220,70,70,0.35)
            name:
            - font-weight: 900
            - font-size: 12px
            - color: rgba(255,255,255,0.95)
            icon:
            - width: 18px
            - color: rgba(255,255,255,0.92)
        card_mod:
          style: "ha-card{\n  background: transparent;\n  box-shadow: none;\n  border:\
            \ none;\n  padding: 0 6px 12px;\n}\n"
```

---

## Protocole Soins (Medical Care)

<div align="center">
  <img src="images/showcase/post_greffe_closed.png" width="45%" />
  <img src="images/showcase/post_greffe_expanded.png" width="45%" />
</div>

**Code YAML :**

```yaml
type: entities
card_mod:
  style: "ha-card {\n  background: none !important;\n  border: none !important;\n\
    \  box-shadow: none !important;\n  padding: 0 !important;\n  margin: 0 !important;\n\
    }\n#states {\n  padding: 0 !important;\n  margin: 0 !important;\n}\n.card-content\
    \ {\n  padding: 0 !important;\n  margin: 0 !important;\n}\n"
entities:
- type: custom:fold-entity-row
  padding: 0
  clickable: true
  card_mod:
    style: "div#head {\n  display: block !important;\n  width: 100% !important;\n\
      \  padding: 0 !important;\n  margin: 0 !important;\n  --toggle-icon-width: 0px\
      \ !important;\n}\n#head {\n  padding: 0 !important;\n  margin: 0 !important;\n\
      \  width: 100% !important;\n  cursor: pointer !important;\n  pointer-events:\
      \ auto !important;\n}\n#head ha-icon {\n  display: none !important;\n  width:\
      \ 0px !important;\n}\ndiv#items {\n  padding: 0 !important;\n  margin: 0 !important;\n\
      }\n"
  head:
    type: custom:button-card
    entity: sensor.suivi_greffe_jour
    show_name: false
    show_icon: false
    tap_action:
      action: none
    styles:
      card:
      - padding: 0
      - background: rgba(20, 27, 38, 0.6)
      - backdrop-filter: blur(10px)
      - -webkit-backdrop-filter: blur(10px)
      - border-radius: 20px
      - border: 1px solid rgba(79, 195, 247, 0.4)
      - box-shadow: 0 4px 15px rgba(0,0,0,0.2)
      - overflow: hidden
      - margin: 0px
      - box-sizing: border-box
      - cursor: pointer
      - pointer-events: none
      grid:
      - grid-template-areas: '"icon details" "footer footer"'
      - grid-template-columns: 130px minmax(0, 1fr)
      - grid-template-rows: 95px 30px
      - gap: 0px
      - width: 100%
      - margin: 0
      custom_fields:
        icon:
        - justify-self: stretch
        - align-self: stretch
        - border-right: 2px solid rgba(255,255,255,0.6)
        - border-top-left-radius: 20px
        - display: flex
        - align-items: center
        - justify-content: center
        - padding: 0
        details:
        - justify-self: stretch
        - align-self: stretch
        - display: flex
        - flex-direction: column
        - justify-content: center
        - align-items: center
        - padding: 0
        - overflow: hidden
        - position: relative
        footer:
        - justify-self: stretch
        - align-self: stretch
        - background: rgba(0,0,0,0.2)
        - border-top: 1px solid rgba(255,255,255,0.05)
        - display: flex
        - align-items: center
        - justify-content: center
        - border-radius: 0 0 20px 20px
    custom_fields:
      icon: "[[[\n  const svg = `\n    <svg viewBox=\"0 0 100 100\" width=\"65\" height=\"\
        65\" style=\"filter: drop-shadow(0 6px 12px rgba(0,0,0,0.5));\">\n      <defs>\n\
        \        <linearGradient id=\"kitBody\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"\
        100%\">\n          <stop offset=\"0%\" style=\"stop-color:#ffffff;stop-opacity:1\"\
        \ />\n          <stop offset=\"100%\" style=\"stop-color:#f0f0f0;stop-opacity:1\"\
        \ />\n        </linearGradient>\n        <linearGradient id=\"handleGrad\"\
        \ x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">\n          <stop offset=\"0%\"\
        \ style=\"stop-color:#d0d0d0;stop-opacity:1\" />\n          <stop offset=\"\
        100%\" style=\"stop-color:#a0a0a0;stop-opacity:1\" />\n        </linearGradient>\n\
        \        <radialGradient id=\"crossGlow\" cx=\"50%\" cy=\"50%\" r=\"50%\"\
        >\n          <stop offset=\"0%\" style=\"stop-color:#4fc3f7;stop-opacity:0.4\"\
        \ />\n          <stop offset=\"100%\" style=\"stop-color:#4fc3f7;stop-opacity:0\"\
        \ />\n        </radialGradient>\n      </defs>\n      <!-- Handle -->\n  \
        \    <path d=\"M35,25 Q35,15 50,15 Q65,15 65,25\" fill=\"none\" stroke=\"\
        url(#handleGrad)\" stroke-width=\"6\" stroke-linecap=\"round\" />\n      <!--\
        \ Main Body -->\n      <rect x=\"20\" y=\"25\" width=\"60\" height=\"50\"\
        \ rx=\"12\" ry=\"12\" fill=\"url(#kitBody)\" />\n      <!-- Reflection/Gloss\
        \ -->\n      <rect x=\"25\" y=\"30\" width=\"50\" height=\"15\" rx=\"8\" ry=\"\
        8\" fill=\"white\" opacity=\"0.4\" />\n      <!-- The Cross -->\n      <rect\
        \ x=\"46\" y=\"40\" width=\"8\" height=\"20\" rx=\"2\" fill=\"#4fc3f7\" />\n\
        \      <rect x=\"40\" y=\"46\" width=\"20\" height=\"8\" rx=\"2\" fill=\"\
        #4fc3f7\" />\n      <!-- Glow behind cross -->\n      <circle cx=\"50\" cy=\"\
        50\" r=\"18\" fill=\"url(#crossGlow)\" />\n    </svg>\n  `;\n  return `\n\
        \    <div style=\"width: 100%; height: 100%; display: flex; flex-direction:\
        \ column; align-items: center; justify-content: center; background: linear-gradient(135deg,\
        \ rgba(79, 195, 247, 0.15) 0%, rgba(20, 27, 38, 0) 100%); border-top-left-radius:\
        \ 20px; box-sizing: border-box; padding: 10px;\">\n      <div style=\"width:\
        \ 75px; height: 75px; display: flex; align-items: center; justify-content:\
        \ center; position: relative;\">\n        <div style=\"position: absolute;\
        \ width: 50px; height: 50px; background: #4fc3f7; border-radius: 50%; filter:\
        \ blur(25px); opacity: 0.5;\"></div>\n        <div style=\"position: relative;\
        \ z-index: 1;\">${svg}</div>\n      </div>\n      <div style=\"font-size:\
        \ 11px; font-weight: 900; color: white; text-align: center; line-height: 1.1;\
        \ letter-spacing: 0.8px; text-transform: uppercase;\">\n        SUIVI<br/>POST-GREFFE\n\
        \      </div>\n    </div>\n  `;\n]]]\n"
      details: "[[[\n  const start = new Date('2025-10-24T00:00:00');\n  const now\
        \ = new Date();\n  let months = (now.getFullYear() - start.getFullYear())\
        \ * 12 + (now.getMonth() - start.getMonth());\n  let days = now.getDate()\
        \ - start.getDate();\n  if (days < 0) {\n    months--;\n    const prevMonthLastDay\
        \ = new Date(now.getFullYear(), now.getMonth(), 0).getDate();\n    days +=\
        \ prevMonthLastDay;\n  }\n  \n  // Calcul J+ Global\n  const timeDiff = now.getTime()\
        \ - start.getTime();\n  const jPlus = Math.floor(timeDiff / (1000 * 3600 *\
        \ 24));\n  \n  // Calcul \"Cela fera x mois dans x jours\"\n  let nextMonthMilestone\
        \ = new Date(start.getFullYear(), start.getMonth() + months + 1, start.getDate());\n\
        \  \n  // Corriger si le jour de greffe (ex: 24) n'existe pas dans le mois\
        \ cible (ex: février)\n  if (nextMonthMilestone.getDate() !== start.getDate())\
        \ {\n     nextMonthMilestone = new Date(nextMonthMilestone.getFullYear(),\
        \ nextMonthMilestone.getMonth(), 0);\n  }\n  \n  let daysUntilNextMonth =\
        \ Math.ceil((nextMonthMilestone.getTime() - now.getTime()) / (1000 * 3600\
        \ * 24));\n  \n  // Si c'est aujourd'hui le jour milestone\n  let futureText\
        \ = \"\";\n  if (now.getDate() === start.getDate()) {\n    futureText = `Cela\
        \ fait ${months} mois pile aujourd'hui !`;\n  } else {\n    futureText = `Cela\
        \ fera ${months + 1} mois dans ${daysUntilNextMonth} jours`;\n  }\n\n  let\
        \ confettis = \"\";\n  if (now.getDate() === 24) {\n    confettis = '<div\
        \ style=\"position:absolute; width:100%; height:100%; overflow:hidden; pointer-events:none;\
        \ z-index:0;\">';\n    for (let i = 0; i < 15; i++) {\n      const color =\
        \ [\"#FFD700\", \"#FF4500\", \"#ADFF2F\", \"#00BFFF\", \"#FF1493\"][i % 5];\n\
        \      const left = Math.floor(Math.random() * 100);\n      const delay =\
        \ (Math.random() * 2).toFixed(1);\n      confettis += `<div style=\"position:absolute;\
        \ width:4px; height:10px; background:${color}; left:${left}%; top:-20px; border-radius:2px;\
        \ animation: confetti-fall 3s linear infinite; animation-delay:${delay}s;\
        \ opacity:0.8;\"></div>`;\n    }\n    confettis += `\n      <style>\n    \
        \    @keyframes confetti-fall {\n          0% { transform: translateY(0) rotate(0deg);\
        \ opacity: 1; }\n          100% { transform: translateY(120px) rotate(360deg);\
        \ opacity: 0; }\n        }\n      </style></div>\n    `;\n  }\n\n  return\
        \ `\n    ${confettis}\n    <div style=\"width: 100%; height: 100%; display:\
        \ flex; flex-direction: column; justify-content: center; align-items: center;\
        \ padding: 0 15px; position: relative; z-index: 1;\">\n      <div style=\"\
        font-size: 32px; font-weight: 900; color: white; line-height: 1; text-shadow:\
        \ 0 0 10px rgba(255,255,255,0.2);\">J+${jPlus}</div>\n      <div style=\"\
        font-size: 13px; font-weight: 600; color: rgba(255,255,255,0.7); margin-top:2px;\
        \ text-transform:uppercase; letter-spacing:0.5px;\">${months} mois et ${days}\
        \ ${days > 1 ? \"jours\" : \"jour\"}</div>\n      \n      <div style=\"margin-top:\
        \ 10px; padding-top: 8px; border-top: 1px solid rgba(255,255,255,0.05); width:\
        \ 80%; display: flex; justify-content: center;\">\n        <span style=\"\
        font-size: 10px; font-weight: 700; color: #4fc3f7; text-transform: uppercase;\
        \ letter-spacing: 0.5px;\">${futureText}</span>\n      </div>\n    </div>\n\
        \  `;\n]]]\n"
      footer: "[[[\n   return `\n     <div style=\"display:flex; width:100%; justify-content:center;\
        \ align-items:center;\">\n       <ha-icon icon=\"mdi:chevron-down\" style=\"\
        color: rgba(255,255,255,0.4); width: 24px; height: 24px; transition: all 0.3s\
        \ ease;\"></ha-icon>\n     </div>\n   `;\n]]]\n"
  entities:
  - type: custom:button-card
    entity: sensor.suivi_greffe_jour
    show_name: false
    show_icon: false
    styles:
      card:
      - background: none
      - box-shadow: none
      - border: none
      - padding: 0
      - margin-top: 10px
      grid:
      - grid-template-areas: '"tasks"'
      - grid-template-columns: 1fr
      - grid-template-rows: auto
      custom_fields:
        tasks:
        - width: 100%
    custom_fields:
      tasks: "[[[\n  if (!entity || !entity.attributes) return `<div style=\"padding:20px;color:rgba(255,255,255,0.5);\
        \ text-align:center;\">Chargement...</div>`;\n  var tasks = [\n    { key:\
        \ 'shampoing_aujourdhui', name: 'Shampoing', icon: 'mdi:shower', color: '#1e88e5'\
        \ },\n    { key: 'vitamine_aujourdhui', name: 'Vitamines', icon: 'mdi:pill-multiple',\
        \ color: '#2e7d32' },\n    { key: 'serum_ozone_aujourdhui', name: 'Sérum ozonée',\
        \ icon: 'mdi:beaker-outline', color: '#8e24aa' },\n    { key: 'dermaroller_serum_aujourdhui',\
        \ name: 'Dermaroller', icon: 'mdi:needle', color: '#fb8c00' },\n    { key:\
        \ 'huile_capillaire_aujourdhui', name: 'Huile', icon: 'mdi:eyedropper-variant',\
        \ color: '#6d4c41' },\n    { key: 'massage_cuir_chevelu_aujourdhui', name:\
        \ 'Massage', icon: 'mdi:hand-back-right', color: '#00897b' },\n    { key:\
        \ 'prp_aujourdhui', name: 'PRP', icon: 'mdi:hospital-marker', color: '#e91e63'\
        \ }\n  ];\n  \n  var titleHtml = `\n    <div style=\"width: 100%; text-align:\
        \ left; margin-bottom: 12px; padding-left: 4px;\">\n      <span style=\"font-size:\
        \ 11px; font-weight: 700; color: rgba(255,255,255,0.7); text-transform: uppercase;\
        \ letter-spacing: 1.5px;\">À FAIRE AUJOURD'HUI :</span>\n    </div>\n  `;\n\
        \  \n  var html = '<div style=\"display:flex; flex-wrap:wrap; gap:8px;\">';\n\
        \  var count = 0;\n  for (var i = 0; i < tasks.length; i++) {\n    var t =\
        \ tasks[i];\n    var val = entity.attributes[t.key];\n    if (val) {\n   \
        \   count++;\n      var displayVal = (val === true) ? 'À faire' : val;\n \
        \     html += '<div style=\"flex: 1 1 30%; min-width: 100px; height: 100px;\
        \ box-sizing: border-box; padding: 12px; border-radius: 20px; border: 1px\
        \ solid rgba(255,255,255,0.1); background: rgba(20, 27, 38, 0.4); backdrop-filter:\
        \ blur(10px); -webkit-backdrop-filter: blur(10px); box-shadow: 0 4px 15px\
        \ rgba(0,0,0,0.2); display: flex; flex-direction: column; align-items: center;\
        \ justify-content: center;\">'\n          + '<ha-icon icon=\"' + t.icon +\
        \ '\" style=\"--mdc-icon-size: 32px; color: ' + t.color + '; filter: drop-shadow(0\
        \ 0 8px ' + t.color + 'aa); margin-bottom: 8px;\"></ha-icon>'\n          +\
        \ '<div style=\"font-size: 13px; font-weight: 700; color: white;\">' + t.name\
        \ + '</div>'\n          + '<div style=\"font-size: 11px; font-weight: 500;\
        \ opacity: 0.7; margin-top: 4px; color: white;\">' + displayVal + '</div>'\n\
        \        + '</div>';\n    }\n  }\n  html += '</div>';\n  if (count === 0)\
        \ return '<div style=\"padding: 20px; text-align: center; color: rgba(255,255,255,0.7);\
        \ font-weight: 500;\">Rien à faire aujourd\\'hui ! \U0001F389</div>';\n  return\
        \ titleHtml + html;\n]]]\n"
```

---

## Tesla Modèle 3

<div align="center">
  <img src="images/showcase/tesla_closed.png" width="45%" />
  <img src="images/showcase/tesla_expanded_climate.png" width="45%" />
</div>

**Code YAML :**

```yaml
type: custom:button-card
entity: binary_sensor.tesla_model_3_status
show_icon: false
show_name: false
show_state: false
tap_action:
  action: navigate
  navigation_path: /lovelace/tesla_modele_3
variables:
  color: "[[[\n  const isCharging = states['binary_sensor.tesla_model_3_charging']?.state\
    \ === 'on';\n  const batteryState = parseFloat(states['sensor.tesla_model_3_niveau_de_batterie']?.state\
    \ || 0);\n  if (isCharging) return '#00D2FF';\n  if (batteryState <= 20) return\
    \ '#FF3232';\n  if (batteryState <= 30) return '#FFAA00';\n  return '#00E676';\n\
    ]]]\n"
styles:
  card:
  - padding: 0
  - background: rgba(20, 27, 38, 0.6)
  - backdrop-filter: blur(10px)
  - -webkit-backdrop-filter: blur(10px)
  - border-radius: 20px
  - border: "[[[\n  return `1px solid ${variables.color}80`;\n]]]\n"
  - box-shadow: 0 4px 15px rgba(0,0,0,0.2)
  - overflow: hidden
  - margin: 0px
  - box-sizing: border-box
  - position: relative
  grid:
  - grid-template-areas: '"img info"'
  - grid-template-columns: 130px minmax(0, 1fr)
  - grid-template-rows: 100px
  - gap: 0px
  - width: 100%
  - margin: 0
  custom_fields:
    img:
    - justify-self: stretch
    - align-self: stretch
    - border-right: 2px solid rgba(255,255,255,0.6)
    - display: flex
    - align-items: center
    - justify-content: center
    - padding: 0
    info:
    - justify-self: stretch
    - align-self: stretch
    - display: flex
    - flex-direction: column
    - justify-content: center
    - align-items: flex-start
    - text-align: left
    - padding: 12px 15px
    - overflow: hidden
    - position: relative
    wake:
    - position: absolute
    - left: 145px
    - top: 12px
    - z-index: 2
custom_fields:
  img: "[[[\n  const color = variables.color;\n  const isOn = states['binary_sensor.tesla_model_3_status']?.state\
    \ === 'on';\n  const isCharging = states['binary_sensor.tesla_model_3_charging']?.state\
    \ === 'on';\n  \n  let statusText = isOn ? 'CONNECTÉE' : 'VEILLE';\n  if (isCharging)\
    \ statusText = 'EN CHARGE ⚡';\n\n  return `\n    <div style=\"width: 100%; height:\
    \ 100%; display: flex; flex-direction: column; align-items: center; justify-content:\
    \ center; background: linear-gradient(135deg, ${color}33 0%, ${color}0D 100%);\
    \ border-top-left-radius: 20px; border-bottom-left-radius: 20px; box-sizing: border-box;\
    \ padding: 10px;\">\n      <img src=\"/local/tesla-car-image.png\" style=\"width:\
    \ 100%; max-width: 100px; height: auto; filter: drop-shadow(0 4px 8px rgba(0,0,0,0.5));\
    \ object-fit: contain; margin-bottom: 8px;\" />\n      <div style=\"font-size:\
    \ 11px; color: rgba(255,255,255,0.7); font-weight: 700; text-transform: uppercase;\
    \ letter-spacing: 1.5px;\">\n        ${statusText}\n      </div>\n    </div>\n\
    \  `;\n]]]\n"
  info: "[[[\n  const isCharging = states['binary_sensor.tesla_model_3_charging']?.state\
    \ === 'on';\n  const rawBattery = states['sensor.tesla_model_3_niveau_de_batterie']?.state;\n\
    \  const rawRange   = states['sensor.tesla_model_3_autonomie_de_batterie']?.state;\n\
    \  \n  let batterie = Math.round(Number(rawBattery));\n  let autonomie = Math.round(Number(rawRange));\n\
    \  \n  const pct = Number.isFinite(batterie) ? Math.max(0, Math.min(100, batterie))\
    \ : 0;\n  const fillColor = variables.color;\n  const glow = `0 0 10px ${fillColor}99`;\n\
    \  \n  const bar = `\n    <div style=\"height:8px; border-radius:4px;\n      \
    \          background: rgba(0,0,0,0.3);\n                overflow:hidden; box-shadow:\
    \ inset 0 1px 3px rgba(0,0,0,0.4); margin-top: 6px;\">\n      <div style=\"\n\
    \        height:100%;\n        width:${pct}%;\n        background:${fillColor};\n\
    \        box-shadow: ${glow};\n        border-radius:4px;\n        transition:\
    \ width 0.5s ease, background 0.5s ease;\">\n      </div>\n    </div>\n  `;\n\
    \  \n  const displayBat = Number.isFinite(batterie) ? batterie + \"%\" : \"--%\"\
    ;\n  const displayRange = Number.isFinite(autonomie) ? autonomie + \" km\" : \"\
    -- km\";\n  \n  return `\n    <div style=\"width: 100%;\">\n      <div style=\"\
    display:flex; align-items:center; justify-content: flex-end; gap:6px; margin-bottom:\
    \ 2px; padding-left: 42px;\">\n        <div style=\"font-size: 16px; font-weight:\
    \ 700; color: white; letter-spacing: 0.5px; text-align: right; width: 100%;\"\
    >\n          TESLA MODEL 3\n        </div>\n      </div>\n      \n      <div style=\"\
    width: 100%; margin-top: 15px;\">\n        <div style=\"display:flex; justify-content:space-between;\
    \ align-items: flex-end;\">\n          <span style=\"font-size: 11px; color: rgba(255,255,255,0.7);\
    \ font-weight: 600;\">BATTERIE</span>\n          <span style=\"font-size: 13px;\
    \ font-weight: 800; color: white;\">${displayBat} <span style=\"font-size: 11px;\
    \ color: rgba(255,255,255,0.4); margin: 0 4px;\">|</span> ${displayRange}</span>\n\
    \        </div>\n        ${bar}\n      </div>\n    </div>\n  `;\n]]]\n"
  wake:
    card:
      type: custom:button-card
      entity: button.tesla_model_3_wake
      icon: mdi:power
      show_name: false
      show_state: false
      size: 18px
      styles:
        card:
        - width: 32px
        - height: 32px
        - border-radius: 10px
        - padding: 0
        - background: rgba(0,0,0,0.3)
        - border: 1px solid rgba(255,255,255,0.1)
        - backdrop-filter: blur(6px)
        - box-shadow: 0 4px 8px rgba(0,0,0,0.2)
        - margin: 0
        icon:
        - color: rgba(255,255,255,0.8)
        - width: 18px
        - transition: all 0.3s ease
      tap_action:
        action: call-service
        service: button.press
        service_data:
          entity_id: button.tesla_model_3_wake
```

---

## Buanderie (Laundry)

<div align="center">
  <img src="images/showcase/laundry_closed.png" width="45%" />
  <img src="images/showcase/laundry_expanded.png" width="45%" />
</div>

**Code YAML :**

```yaml
type: custom:button-card
show_name: false
show_icon: false
show_state: false
styles:
  card:
  - padding: 0
  - background: rgba(20, 27, 38, 0.6)
  - backdrop-filter: blur(10px)
  - -webkit-backdrop-filter: blur(10px)
  - border-radius: 20px
  - box-shadow: 0 0 20px rgba(79, 195, 247, 0.4), 0 4px 15px rgba(0,0,0,0.2)
  - overflow: hidden
  - margin: 0px
  - box-sizing: border-box
  - position: relative
  - display: "[[[\n  var isEditMode = window.location.search.includes('edit=1') ||\
      \ window.location.pathname.includes('edit');\n  var w_on = states['binary_sensor.machine_a_laver_en_cours']?.state\
      \ === 'on';\n  var w_door = states['binary_sensor.capteur_ouverture_lave_linge_contact']?.state\
      \ === 'on';\n  var w_done = (states['input_boolean.machine_a_laver_terminee']?.state\
      \ === 'on') && !w_door;\n  var d_on = states['binary_sensor.seche_linge_en_cours']?.state\
      \ === 'on';\n  var d_door = states['binary_sensor.seche_linge_door_status']?.state\
      \ === 'on';\n  var d_done = (states['input_boolean.seche_linge_termine']?.state\
      \ === 'on') && !d_door;\n  if (isEditMode || w_on || w_done || d_on || d_done)\
      \ return 'flex';\n  return 'none !important';\n]]]\n"
  - border: 1px solid rgba(79, 195, 247, 0.3)
  grid:
  - grid-template-areas: '"img info"'
  - grid-template-columns: 130px minmax(0, 1fr)
  - grid-template-rows: 80px
  - align-items: stretch
  custom_fields:
    img:
    - justify-self: stretch
    - align-self: stretch
    - border-right: 2px solid rgba(255, 255, 255, 0.6)
    - padding: 0
    info:
    - justify-self: stretch
    - align-self: stretch
    - width: 100%
    - box-sizing: border-box
custom_fields:
  img: "[[[\n  const blue = \"#4fc3f7\";\n  const svg = `\n    <svg viewBox=\"0 0\
    \ 100 100\" width=\"55\" height=\"55\" style=\"filter: drop-shadow(0 4px 8px rgba(0,0,0,0.4));\"\
    >\n      <defs>\n        <linearGradient id=\"basketGrad\" x1=\"0%\" y1=\"0%\"\
    \ x2=\"0%\" y2=\"100%\">\n          <stop offset=\"0%\" style=\"stop-color:#eeeeee;stop-opacity:1\"\
    \ />\n          <stop offset=\"100%\" style=\"stop-color:#bdbdbd;stop-opacity:1\"\
    \ />\n        </linearGradient>\n        <linearGradient id=\"cloth1\" x1=\"0%\"\
    \ y1=\"0%\" x2=\"100%\" y2=\"100%\">\n          <stop offset=\"0%\" style=\"stop-color:#ffffff;stop-opacity:1\"\
    \ />\n          <stop offset=\"100%\" style=\"stop-color:#e0e0e0;stop-opacity:1\"\
    \ />\n        </linearGradient>\n        <linearGradient id=\"cloth2\" x1=\"0%\"\
    \ y1=\"0%\" x2=\"100%\" y2=\"100%\">\n          <stop offset=\"0%\" style=\"stop-color:#b3e5fc;stop-opacity:1\"\
    \ />\n          <stop offset=\"100%\" style=\"stop-color:#4fc3f7;stop-opacity:1\"\
    \ />\n        </linearGradient>\n      </defs>\n      \n      <!-- Clothes Inside\
    \ -->\n      <path d=\"M30,50 Q40,35 55,45 Q70,35 75,55 L75,65 L25,65 Z\" fill=\"\
    url(#cloth1)\" />\n      <path d=\"M40,55 Q55,40 70,50 L70,60 L35,60 Z\" fill=\"\
    url(#cloth2)\" opacity=\"0.8\" />\n      \n      <!-- Basket Body -->\n      <path\
    \ d=\"M20,55 L80,55 L75,90 L25,90 Z\" fill=\"url(#basketGrad)\" stroke=\"#9e9e9e\"\
    \ stroke-width=\"1\" />\n      <!-- Basket Holes/Pattern -->\n      <g opacity=\"\
    0.3\" fill=\"#616161\">\n        <rect x=\"28\" y=\"62\" width=\"6\" height=\"\
    4\" rx=\"1\" />\n        <rect x=\"40\" y=\"62\" width=\"6\" height=\"4\" rx=\"\
    1\" />\n        <rect x=\"52\" y=\"62\" width=\"6\" height=\"4\" rx=\"1\" />\n\
    \        <rect x=\"64\" y=\"62\" width=\"6\" height=\"4\" rx=\"1\" />\n      \
    \  \n        <rect x=\"30\" y=\"70\" width=\"6\" height=\"4\" rx=\"1\" />\n  \
    \      <rect x=\"42\" y=\"70\" width=\"6\" height=\"4\" rx=\"1\" />\n        <rect\
    \ x=\"54\" y=\"70\" width=\"6\" height=\"4\" rx=\"1\" />\n        <rect x=\"66\"\
    \ y=\"70\" width=\"6\" height=\"4\" rx=\"1\" />\n\n        <rect x=\"32\" y=\"\
    78\" width=\"6\" height=\"4\" rx=\"1\" />\n        <rect x=\"44\" y=\"78\" width=\"\
    6\" height=\"4\" rx=\"1\" />\n        <rect x=\"56\" y=\"78\" width=\"6\" height=\"\
    4\" rx=\"1\" />\n        <rect x=\"68\" y=\"78\" width=\"6\" height=\"4\" rx=\"\
    1\" />\n      </g>\n      \n      <!-- Basket Rim -->\n      <rect x=\"18\" y=\"\
    52\" width=\"64\" height=\"6\" rx=\"3\" fill=\"#eeeeee\" stroke=\"#bdbdbd\" stroke-width=\"\
    0.5\" />\n      \n      <!-- Shine on Rim -->\n      <rect x=\"22\" y=\"53.5\"\
    \ width=\"20\" height=\"1.5\" rx=\"1\" fill=\"white\" opacity=\"0.4\" />\n   \
    \ </svg>\n  `;\n\n  return `\n    <div style=\"width: 100%; height: 100%; display:\
    \ flex; flex-direction: column; align-items: center; justify-content: center;\
    \ background: linear-gradient(135deg, rgba(79, 195, 247, 0.2) 0%, rgba(79, 195,\
    \ 247, 0) 100%); border-top-left-radius: 20px; position: relative;\">\n      <div\
    \ style=\"position: absolute; width: 50px; height: 50px; background: ${blue};\
    \ border-radius: 50%; filter: blur(20px); opacity: 0.3; animation: pulseGlow 4s\
    \ infinite alternate ease-in-out;\"></div>\n      <div style=\"position: relative;\
    \ z-index: 1;\">${svg}</div>\n      <div style=\"font-size: 9px; font-weight:\
    \ 900; color: white; text-transform: uppercase; letter-spacing: 0.5px; margin-top:\
    \ 4px; z-index: 1;\">BUANDERIE</div>\n      <style>@keyframes pulseGlow { from\
    \ { opacity: 0.2; transform: scale(0.9); } to { opacity: 0.4; transform: scale(1.1);\
    \ } }</style>\n    </div>\n  `;\n]]]\n"
  info: "[[[\n  var isEditMode = window.location.search.includes('edit=1') || window.location.pathname.includes('edit');\n\
    \  var w_on = states['binary_sensor.machine_a_laver_en_cours']?.state === 'on';\n\
    \  var w_door = states['binary_sensor.capteur_ouverture_lave_linge_contact']?.state\
    \ === 'on';\n  var w_done = (states['input_boolean.machine_a_laver_terminee']?.state\
    \ === 'on') && !w_door;\n  var d_on = states['binary_sensor.seche_linge_en_cours']?.state\
    \ === 'on';\n  var d_door = states['binary_sensor.seche_linge_door_status']?.state\
    \ === 'on';\n  var d_done = (states['input_boolean.seche_linge_termine']?.state\
    \ === 'on') && !d_door;\n\n  var items = [];\n  if (w_on) items.push({ name: 'Lave-linge',\
    \ label: 'En cours', icon: 'mdi:washing-machine', color: '#fb8c00', blink: true\
    \ });\n  if (w_done) items.push({ name: 'Lave-linge', label: 'Terminé', icon:\
    \ 'mdi:washing-machine-alert', color: '#00897b', blink: false });\n  if (d_on)\
    \ items.push({ name: 'Sèche-linge', label: 'En cours', icon: 'mdi:tumble-dryer',\
    \ color: '#fb8c00', blink: true });\n  if (d_done) items.push({ name: 'Sèche-linge',\
    \ label: 'Terminé', icon: 'mdi:tumble-dryer-alert', color: '#00897b', blink: false\
    \ });\n\n  if (items.length === 0) return isEditMode ? '<div style=\"display:\
    \ flex; align-items: center; justify-content: center; height: 100%; width: 100%;\
    \ color: rgba(255,255,255,0.4); font-size: 11px;\">Mode Édition</div>' : '';\n\
    \n  var html = '<style>@keyframes blink-machine { 0% { opacity: 1; } 50% { opacity:\
    \ 0.4; } 100% { opacity: 1; } }</style>';\n  html += '<div style=\"display: flex;\
    \ gap: 8px; align-items: center; justify-content: center; height: 100%; padding:\
    \ 0 10px;\">';\n  for (var i = 0; i < items.length; i++) {\n    var c = items[i];\n\
    \    html += `<div style=\"flex: 1; height: 60px; border-radius: 12px; background:\
    \ rgba(20, 27, 38, 0.4); border: 1px solid ${c.color}60; display: flex; flex-direction:\
    \ column; justify-content: center; align-items: center; ${c.blink ? 'animation:\
    \ blink-machine 2s ease infinite;' : ''}\">`;\n    html += `<ha-icon icon=\"${c.icon}\"\
    \ style=\"--mdc-icon-size: 22px; color: ${c.color}; margin-bottom: 2px;\"></ha-icon>`;\n\
    \    html += `<div style=\"font-size: 10px; font-weight: 700; color: white; line-height:\
    \ 1.1;\">${c.name}</div>`;\n    html += `<div style=\"font-size: 9px; color: white;\
    \ opacity: 0.7; line-height: 1.1;\">${c.label}</div>`;\n    html += '</div>';\n\
    \  }\n  return html + '</div>';\n]]]\n"
```

---

