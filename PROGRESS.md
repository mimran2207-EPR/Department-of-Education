# מסמך התקדמות — אתר רישום למחלקת חינוך (muni)

עדכון אחרון: 2026-06-12 — דשבורד פורטל הבית עלה לאוויר, תהליך הרישום מקוצר ל-7 שלבים, אווטרים cartoon חמודים, רספונסיבי מובייל מלא, נתוני דמו להצגה ללקוח.

---

## 1. הגדרות הפרויקט

| פריט | ערך |
|---|---|
| **תיקיית פרויקט** | `C:\Users\yehudam\OneDrive - E.P.R. Systems Ltd\שולחן העבודה\Projects\03-אפיון-ותיעוד\חינוך\Department-of-Education` |
| **ריפו Git** | `https://github.com/mimran2207-EPR/Department-of-Education.git` |
| **Branch** | `main` (מסונכרן עם origin) |
| **דפוס עבודה** | שינוי → ענף `1` → PR → merge אוטומטי ל-main → branch נמחק |
| **Git user** | `Yehuda M <YehudaM@eprsys.co.il>` (מקומי לריפו) |
| **קובץ Figma** | `https://www.figma.com/design/uqk5LJ3rOx8I7Uc2RkvO4h/Untitled` |
| **MCP Figma** | מותקן ומאומת (משתמש: Mimran Yehuda) |
| **אתר חי (Production)** | `https://departmentof.choreshchana.workers.dev/` |
| **Hosting** | Cloudflare Workers — deploy אוטומטי מ-push ל-`main` (תוך כדקה) |

---

## 2. מצב נוכחי — מה עובד

### דשבורד פורטל הבית (חדש, 2026-06-12)
- [x] `index.html` הוחלף מ-redirect לדשבורד מלא לפי ה-mockup `111.jpeg`
- [x] **תפריט עליון:** משפחת כהן-שלמה + חיפוש + לוגו muni
- [x] **באנר ברוכים הבאים:** טורקיז עם "היי, נורית" + איור דקורטיבי
- [x] **4 כפתורי רישום:**
  - 🏠 רישום לגנים (כתום) → **מקושר ל-`pages/01-child-details.html`**
  - 🎓 רישום לכיתות א' (סגול) — placeholder
  - 📋 רישום לצהרונים (ורוד) — placeholder
  - ☀️ רישום לקייטנות (ירוק) — placeholder
- [x] **רשימת הילדים:** 4 כרטיסים (אלעד 1.5 / יובל 4 / נועה 8 / ניתאי 11) עם אווטרים, מוסד, סטטוס
- [x] **עוזר אישי:** 6 משימות (חתימות, תשלומים, חוב גן עינב) + תיבת בוט
- [x] CSS חדש: `assets/css/dashboard.css`
- [x] רספונסיבי: 1280px (2 עמודות לכפתורים) → 1024px (sidebar למטה) → 900px (כרטיסי ילדים מקופלים) → 480px (עמודה אחת)

### תהליך רישום (7 שלבים נטו, אחרי הסרת הורה 3+4)
1. `01-child-details.html` — פרטי הילד/ה
2. `02-parent-1.html` — פרטי הורה 1
3. `03-parent-2.html` — פרטי הורה 2
4. `06-addresses.html` — כתובות
5. `07-institution.html` — בחירת מוסד
6. `08-documents.html` — מסמכים ואישורים
7. `09-summary.html` — סיכום ושליחה
8. `10-success.html` — הצלחה
9. `11-additional.html` — אישור + רישום נוסף (עם 2 אווטרים: יובל ונועה)

⚠️ `04-parent-3.html` ו-`05-parent-4.html` **נמחקו** (היו אופציונליים).

### נתוני דמו (משפחת כהן-שלמה)
| שדה | ערך |
|---|---|
| ילד | ניתאי כהן שלמה, בן, יליד 15/03/2020 |
| ת.ז. ילד | 312456789 |
| לאום | יהודי, קופ"ח: מכבי |
| אב | דוד כהן שלמה, ת.ז. 029876543, נשוי, B.A., מיקרוסופט ישראל, 050-1234567 |
| אם | שרה כהן שלמה, ת.ז. 035678901, נשואה, M.A., בית ספר יסודי הירדן, 052-7654321 |
| כתובת | הרצל 40 דירה 25 כניסה א', ת"א, מיקוד 6234801, שכ' מונטיפיורי |
| מוסד | גן יעל - חובה, ממלכתי, מסגרת קודמת: מעון "גן עדן הקטן" |
| מסמכים | 2 קבצים מסומנים כהועלו + שתי הצהרות מאושרות |
| ילדים נוספים | יובל (גן עינב) + נועה במודאל "רישום נוסף" |

### אינטראקטיביות
- [x] כפתורי כן/לא בבעיות רפואיות והנגשה — פעילים; "כן" חושף textarea לפירוט
- [x] כפתורי בן/בת ו-toggles אחרים — מתחלפים בלחיצה

### רספונסיביות מובייל מלאה
- [x] Breakpoints: 1280 / 1024 / 768 / 640 / 480px
- [x] שדות קלט: 60px → 54px (טאבלט) → 50px (טלפון)
- [x] Progress bar: כתב המסך הנוכחי נעלם במסך זעיר
- [x] Section headings, מודאל, כרטיסי ילדים, summary cards — כולם מותאמים
- [x] Page header עובר ל-flex-wrap
- [x] איור הופך לכותרת עליונה במובייל (240→180→150→130px)

### אווטרים cartoon (DiceBear Big Smile, CC BY 4.0)
- `avatar-elaad.svg` (1.5)
- `avatar-yuval.svg` (4)
- `avatar-noa.svg` (8)
- `avatar-nital.svg` (11)

---

## 3. PRs שמוזגו ל-main (2026-06-12)

| # | תיאור | קומיט |
|---|---|---|
| 2 | התאמה למובייל + נתוני דמו להצגה ללקוח | `d820689` |
| 3 | כפתורי כן/לא פעילים + שדה פירוט במסך 01 | `f71c894` |
| 4 | הסרת מסכי הורה 3+4 מתהליך הרישום | `9a9323a` |
| 5 | אווטרים cartoony חמודים לכרטיסי הילדים | `3c50d8d` |
| 6 | בניית עמוד הבית - דשבורד פורטל muni | `ef167fe` |

---

## 4. נושאים פתוחים

### לסגירה
1. **3 כפתורי הרישום הנוספים (כיתות א'/צהרונים/קייטנות)** — כרגע placeholders עם `alert('בקרוב')`. האם לבנות גם תהליכים אלה?
2. **תאריך עברי תשפ"ה** — נכון להיום? לבדוק עם הלקוח.
3. **שאר פריטי הסיידבר ב-mockup המקורי** (`עמוד הבית / המשפחה שלי / פירוט תשלומים / היסעים / רישום לחוגים / התנתקות`) — לא מומשו בסיידבר השמאלי. ה-mockup מכיל סיידבר ניווט מלא; אצלנו מוצג רק לוגו + עוזר אישי.
4. **תוכן הבאנר** — לורם איפסום ב-mockup, אצלנו טקסט אמיתי. לבדוק שהלקוח אוהב.
5. **אייקונים מ-iconify מקוריים** — אצלנו inline SVG בסיסי. אפשר לשדרג ל-iconify (`bi:house`, `streamline-plump` וכו').
6. **גופן** — Rubik + Heebo נטענים מ-Google Fonts; אם רוצים לעבוד אופליין, להוריד מקומית.

### דיון עתידי
1. **אינטראקטיביות נוספת** — toggles נוספים, dropdown משתחרר, validation
2. **בק-אנד** — לחבר לשרת אמיתי
3. **בדיקת נגישות** — ARIA labels, contrast, keyboard navigation, focus states
4. **אנימציות** — מעברים בין מסכים, page transitions

---

## 5. דפוס עבודה ב-Git (קבוע)
שינוי → ענף `1` (חדש בכל פעם) → push → `gh pr create --base main` → `gh pr merge --merge --delete-branch` → `git pull` ב-main.

המיזוג ל-main **אוטומטי בלי לשאול** (לפי הוראת המשתמש 2026-06-12).

---

## 6. כלים שצריכים לעבוד
- MCP Figma (לבדוק שהאימות לא פג)
- VS Code (או כל IDE)
- דפדפן (Chrome/Edge — לבדיקת RTL)
- Git CLI + `gh` (GitHub CLI)
- PowerShell (להורדת אווטרים מ-DiceBear)

---

## 7. קישורים מהירים

- 🌐 אתר חי (דשבורד): https://departmentof.choreshchana.workers.dev/
- 🚪 כניסה ישירה לתהליך: https://departmentof.choreshchana.workers.dev/pages/01-child-details
- 🎉 מסך אישור: https://departmentof.choreshchana.workers.dev/pages/11-additional
- 📦 ריפו: https://github.com/mimran2207-EPR/Department-of-Education
- 🎨 Figma: https://www.figma.com/design/uqk5LJ3rOx8I7Uc2RkvO4h
- 📄 README: `./README.md`
- 📍 מפת תוכן: `./.figma-refs/content-map.md`

---

## 8. מבנה הקבצים

```
Department-of-Education/
├── index.html                              # דשבורד פורטל הבית ← (NEW 2026-06-12)
├── pages/
│   ├── 01-child-details.html               # שלב 1: פרטי הילד/ה
│   ├── 02-parent-1.html                    # שלב 2: הורה 1
│   ├── 03-parent-2.html                    # שלב 3: הורה 2
│   ├── 06-addresses.html                   # שלב 4: כתובות
│   ├── 07-institution.html                 # שלב 5: מוסד
│   ├── 08-documents.html                   # שלב 6: מסמכים
│   ├── 09-summary.html                     # שלב 7: סיכום
│   ├── 10-success.html                     # אישור הצלחה
│   └── 11-additional.html                  # רישום נוסף + 2 ילדים
└── assets/
    ├── css/
    │   ├── tokens.css                      # משתני עיצוב
    │   ├── base.css                        # reset + RTL
    │   ├── layout.css                      # פריסה כללית + breakpoints
    │   ├── components.css                  # רכיבים: input, btn, modal וכו'
    │   └── dashboard.css                   # דשבורד פורטל ← (NEW)
    └── img/illustrations/
        ├── 01..11-*.png                    # איורי הצד למסכי התהליך
        ├── avatar-elaad.svg                # אווטר אלעד ← (NEW)
        ├── avatar-yuval.svg                # אווטר יובל ← (NEW)
        ├── avatar-noa.svg                  # אווטר נועה ← (NEW)
        └── avatar-nital.svg                # אווטר ניתאי ← (NEW)
```

---

*מסמך זה עודכן ב-2026-06-12 אחרי 5 PRs שמוזגו ל-main. כל הפיצ'רים שבוקשו ע"י הלקוח להצגה — הושלמו.*
