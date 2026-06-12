# muni — אתר רישום לגני ילדים

Mockup סטטי (HTML + CSS בלבד) של זרימת רישום לגני ילדים במחלקת חינוך, על בסיס עיצוב Figma.

## תצוגה

פתחו את `index.html` בדפדפן או נווטו ישירות אל `pages/01-child-details.html`.

## מבנה

```
.
├── index.html                          # מפנה למסך הראשון
├── pages/
│   ├── 01-child-details.html           # פרטי הילד/ה
│   ├── 02-parent-1.html                # פרטי הורה 1
│   ├── 03-parent-2.html                # פרטי הורה 2
│   ├── 06-addresses.html               # כתובות
│   ├── 07-institution.html             # בחירת מוסד
│   ├── 08-documents.html               # מסמכים ואישורים
│   ├── 09-summary.html                 # סיכום ושליחה
│   ├── 10-success.html                 # טופס נשלח בהצלחה
│   └── 11-additional.html              # רישום נוסף
├── assets/
│   ├── css/
│   │   ├── tokens.css                  # משתני עיצוב (צבעים, גופנים, רווחים, צללים)
│   │   ├── base.css                    # reset + RTL + טיפוגרפיה בסיסית
│   │   ├── layout.css                  # פריסת שני-טורים + breakpoints
│   │   └── components.css              # כפתורים, inputs, dropdown, progress, modal וכו'
│   └── img/illustrations/              # איורים לכל מסך
├── .figma-refs/                        # צילומי מסך מקוריים + content-map.md
├── PROGRESS.md                         # מסמך התקדמות
└── README.md
```

## מערכת העיצוב

- **צבע ראשי:** `#07bed1` (טורקיז muni)
- **צבע משני:** `#ff4570` (ורוד-אדום)
- **רקע:** `#f3f7f9`
- **גופן:** Rubik (Google Fonts) + Heebo fallback
- **כיווניות:** RTL מלא
- **רספונסיביות:** breakpoints ב-1024px ו-640px

## הערות

- אין JavaScript. כל הכפתורים והניווט עובדים דרך `<a href>` בלבד.
- שדות הקלט הם דקורטיביים בלבד (לא נשמרים, לא נשלחים).
- האיורים הם צילומי מסך מ-Figma (PNG). ניתן להחליפם בנפרד מ-`assets/img/illustrations/`.

## פיתוח

הפרויקט לא דורש npm / build tools / השרת. הקבצים פתוחים ישירות בדפדפן (`file://`).

אם מעוניינים להריץ דרך local server (לדוגמה אם הדפדפן חוסם משאבים חיצוניים):
```
python -m http.server 8000
# או:
npx serve .
```
