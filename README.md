# Kalpa: Vedic Rituals

A web prototype for step-by-step guides to Vedic rites, based on **Kalpa**, the Vedāṅga of procedure.

## What's in this version
- **Learn**: the six Vedāṅgas and the four branches of Kalpa
- **Saṁskāra guides**: Nāmakaraṇa, Annaprāśana, Muṇḍan, each with a samagri checklist (saved on the device) and a guided step-by-step mode
- **Nitya Karma**: a simple daily sandhyā
- **Guided mode**: one step per screen, mantra in Devanagari with transliteration and meaning, "Listen" (device voice), step timers, and "Why this step?"
- **Geometry Lab**: an interactive Baudhāyana (Pythagorean) theorem with Śulba whole-number triples
- **Hindi / English** toggle and a tradition selector (variants coming later)

## Tech
Plain HTML, CSS and JavaScript with no build step. Vercel serves it as a static site.

```
index.html   app shell
styles.css   styles
app.js       routing and views
data.js      all ritual content (English + Hindi)
```

To add a rite, add an entry to `rites` in `data.js`.

## Content note
The procedures describe general household practice and have **not yet been reviewed by a pandit**. They must be reviewed before public release.
