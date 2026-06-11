# מסמך התקדמות — אתר רישום למחלקת חינוך (muni)

עדכון אחרון: 2026-06-11 לילה — האתר באוויר ב-Cloudflare Workers, תוקנו בעיות הפריסה של פאנל האיור ואומת חי.

---

## 1. הגדרות הפרויקט

| פריט | ערך |
|---|---|
| **תיקיית פרויקט** | `C:\Users\yehudam\OneDrive - E.P.R. Systems Ltd\שולחן העבודה\Projects\03-אפיון-ותיעוד\חינוך\Department-of-Education` |
| **ריפו Git** | `https://github.com/mimran2207-EPR/Department-of-Education.git` |
| **Branch** | `main` (מסונכרן עם origin) |
| **Git user** | `Yehuda M <YehudaM@eprsys.co.il>` (מקומי לריפו) |
| **קובץ Figma** | `https://www.figma.com/design/uqk5LJ3rOx8I7Uc2RkvO4h/Untitled` |
| **File key** | `uqk5LJ3rOx8I7Uc2RkvO4h` |
| **MCP Figma** | מותקן ומאומת (משתמש: Mimran Yehuda) |
| **אתר חי (Production)** | `https://departmentof.choreshchana.workers.dev/pages/01-child-details` |
| **Hosting** | Cloudflare Workers — deploy אוטומטי מ-push ל-`main` (תוך כדקה) |

---

## 2. מה הושלם (גמור)

### תשתית
- [x] Plugin Figma + MCP + אימות OAuth
- [x] שכפול הריפו + git config מקומי
- [x] מבנה תיקיות מלא (`pages/`, `assets/css/`, `assets/img/illustrations/`)

### חילוץ תוכן
- [x] מפו 11 המסכים עם Node IDs מדויקים
- [x] חולץ design context מ-7 מסכים (01, 02, 06, 07, 08, 09, 10, 11)
- [x] מפת תוכן מלאה ב-`.figma-refs/content-map.md`
- [x] צילומי מקור ב-`.figma-refs/` + העתק לשימוש ב-`assets/img/illustrations/`

### עיצוב
- [x] tokens.css — משתני עיצוב מלאים (צבעים, גופנים, רווחים, צללים, גרדיאנט)
- [x] base.css — RTL + reset + טיפוגרפיה
- [x] layout.css — פריסת שני-טורים + breakpoints (1024px, 640px)
- [x] components.css — כפתורים, inputs, dropdown, progress bar, summary cards, modal, confirmation card, kid cards, upload, declaration checkboxes

### מסכים (11/11)
- [x] 01 פרטי הילד/ה (13 שדות)
- [x] 02 פרטי הורה 1 (10 שדות)
- [x] 03 פרטי הורה 2
- [x] 04 פרטי הורה 3
- [x] 05 פרטי הורה 4
- [x] 06 כתובות (10 שדות + 2 toggles)
- [x] 07 בחירת מוסד (5 שדות)
- [x] 08 מסמכים ואישורים (2 uploads + 2 declarations)
- [x] 09 סיכום ושליחה (6 summary cards)
- [x] 10 טופס נשלח בהצלחה
- [x] 11 רישום נוסף (כרטיס סיכום + modal)

### תיקונים אחרונים
- [x] איור — `background-size: cover` עם יישור שמאל + `overflow:hidden` (PNG כולל את כל הפריים, ה-cover ממורכז קצץ את הצורות)
- [x] לוגו כפול — הוסתר ה-HTML overlay (PNG כבר כולל את muni)
- [x] מירכוז הטופס בעמודה (`margin-inline: auto` במקום start)
- [x] חץ הניווט "המשך לשלב הבא" מצביע שמאלה ב-RTL

### תיקוני פריסה (קומיט 345a8f2, 2026-06-11 לילה)
- [x] ה-PNGs נחתכו לאזור האיור בלבד (חצי שמאלי של פריימים 1920px) — ה-cover כבר לא עושה זום מוגזם
- [x] exports ריקים הוחלפו באיור תואם: 02/03/05 ← איור שולחן העבודה של 04, 08 ← לוח המסמכים של 09, 10 ← המעטפה של 11 (ה-export המקורי של 10 כלל טקסט צרוב של העמוד)
- [x] לוגו כפול — היו שני בלוקים של `.illustration__logo` ב-layout.css והשני דרס את ה-`display:none`; אוחד לבלוק אחד
- [x] פאנל האיור הפך ל-`position: sticky` בגובה 100vh — נשאר בתצוגה בטפסים ארוכים במקום להימתח ולהשאיר שטח ריק
- [x] `.page` עבר ל-`overflow-x: clip` במקום `hidden` (hidden יוצר scroll container ששובר sticky)

### אימות חי באוויר (2026-06-11 לילה)
- [x] האתר עלה ל-Cloudflare Workers ומתעדכן אוטומטית מ-push ל-`main`
- [x] אומת בדפדפן על האתר החי: מסכים 01, 02, 10 — איור חד וממוסגר, לוגו יחיד, sticky עובד בגלילה
- [x] אומת שה-CSS וה-PNGs החתוכים (960×993) מוגשים מה-production

### Git
- [x] קומיט #1 (2063ee9): Initial mockup — 42 קבצים, 2912 שורות
- [x] קומיט #2 (cbc72f4): Fix illustration cropping and duplicate logo
- [x] קומיט #3 (345a8f2): Fix illustration panel layout — crop assets, sticky panel, logo fix
- [x] קומיט #4 (b2319ef): Update PROGRESS.md
- [x] Push ל-`origin/main`

---

## 3. בדיקות שנותרו לעשות בערב הבא

### בדיקה ויזואלית פר-מסך
- [ ] לפתוח כל אחד מ-11 המסכים ולהשוות לצילום המקור ב-`.figma-refs/` (01, 02, 10 כבר אומתו חי)
- [ ] לוודא ש**ה-RTL מתאים** — היה דיווח אחד שלא הוברר במלואו, יש לבחון שוב על מסכים שונים
- [x] לבדוק שהאיור באמת מציג את הצורות הצבעוניות ולא רק רקע ריק — תוקן ואומת (חיתוך ה-PNGs, קומיט 345a8f2)

### בדיקת responsive
- [ ] רוחב 1920px (דסקטופ רחב)
- [ ] רוחב 1280-1440px (דסקטופ סטנדרטי)
- [ ] רוחב 1024px בדיוק (breakpoint) — מעבר לעמודה אחת
- [ ] רוחב 768px (טאבלט)
- [ ] רוחב 375px (מובייל) — form-grid עובר לעמודה אחת ב-640px

### ניווט
- [ ] לוודא שכל כפתור "המשך"/"חזרה" מקשר לדף הנכון
- [ ] לבדוק שכפתורי "עריכה" במסך 09 מקשרים למסכים הנכונים

---

## 4. נושאים פתוחים שצריך החלטה

### לסגירה לפני סיום
1. **שלב 3 בפרוגרס** — מסכים 04 ו-05 (פרטי הורה 3+4) משתמשים גם הם בשלב 3 (פרטי הורה 2). יש לאמת מהו השם הנכון לכל מסך (אולי "סבא" ו-"סבתא"?) ולהתאים את שלב הפרוגרס בהתאם.
2. **תוכן אמיתי במקום placeholders** — כרגע ה-locked fields מציגים ערכים לדוגמה ("כהן", "אלעד", "012345678"). האם להשאיר כדוגמה, או להחליף ב-placeholder ניטרלי?
3. **תאריך עברי** — `שנת הלימודים תשפ"ה` הוא קבוע. צריך לבדוק אם זה התשפ"ה הנוכחית או צריך לעדכן.
4. **אייקונים** — השתמשתי ב-Material Icons בסיסיים (inline SVG). הפיגמה השתמשה ב-iconify (bi:house, streamline-plump וכו') שהם יותר מעוצבים. **בערב — אולי להחליף לאייקונים מדויקים יותר** או להוריד את ה-SVGs המקוריים מ-Figma באמצעות `download_assets`.
5. **גופן** — Rubik + Heebo נטענים מ-Google Fonts. אם זה שורץ אופליין, להוריד מקומית.
6. ~~**GitHub Pages** — האם להפעיל?~~ ✅ נסגר — האתר באוויר ב-Cloudflare Workers: `https://departmentof.choreshchana.workers.dev` (deploy אוטומטי מ-`main`).
7. **איורים מקוריים פר-מסך** — בעקבות exports פגומים, מסכים 02/03/05/08/10 משתמשים כרגע באיור ממוחזר ממסך אחר (ראו סעיף 5). אם רוצים את האיור המקורי המדויק של כל מסך — להוריד מחדש מ-Figma את ה-node של האיור בלבד (`download_assets` או `get_screenshot` על node האיור, לא על כל הפריים).

### דיון עתידי
1. **אינטראקטיביות** — האם להוסיף JS מינימלי (לדוגמה: toggles פעילים, dropdown משתחרר)? כרגע הכל סטטי.
2. **טפסים אמיתיים** — לחבר לבק-אנד? לא חלק מהדרישות המקוריות אבל יעלה בהמשך הסביר.
3. **בדיקת נגישות** — ARIA labels, contrast, keyboard navigation, focus states.

---

## 5. בעיות ידועות

- ~~**ה-PNGs כוללים את הצד הימני הריק של הפריים המקורי**~~ ✅ תוקן בקומיט 345a8f2 — נחתכו לאזור האיור בלבד.
- **איורים ממוחזרים** — ה-exports המקוריים של חלק מהמסכים יצאו פגומים (02/03 בלי איור בכלל, 05/08 רק לוגו על רקע ריק, 10 עם טקסט וכפתור צרובים). לכן: 02/03/05 משתמשים באיור של 04, 08 באיור של 09, ו-10 באיור של 11. להחלפה באיור המקורי — להוריד מחדש מ-Figma (סעיף 4.7).
- **לוגו muni הוא חלק מה-PNG** ולא אלמנט HTML נפרד (ה-overlay ב-HTML מוסתר ב-CSS). אם מחליפים PNG — לוודא שהלוגו כלול בו, או להפעיל מחדש את ה-overlay ב-`layout.css`.
- **No JavaScript** — toggles (yes/no, two-options) הם דקורטיביים בלבד. החצים שלהם תמיד "לא" ו"ממלכתי" כברירת מחדל.

---

## 6. איך להמשיך מחר

1. **לפתוח את האתר החי**: `https://departmentof.choreshchana.workers.dev/pages/01-child-details` (או מקומית: `pages/01-child-details.html`)
2. **לבדוק את כל 11 המסכים** ולתעד בעיות (סעיף 3 לעיל) — שינויים נדחפים ל-`main` ועולים לאוויר אוטומטית תוך כדקה
3. **לפי הצורך:**
   - אם יש בעיות פריסה → לתקן ב-`assets/css/components.css` או `layout.css`
   - אם רוצים אייקונים מדויקים → להריץ:
     ```
     mcp__figma__get_design_context על node-ids ספציפיים של אייקונים
     או mcp__figma__download_assets עם רשימת asset URLs
     ```
   - אם רוצים תוכן מ-03/04/05 בדיוק → להריץ get_design_context על wrappers `1:1189`, `1:1094`, `1:1712`
4. **קומיטים אינקרמנטליים** — לקבץ תיקונים לפי נושא (visual fix, content fix, accessibility וכו')
5. **בסוף — `git push`** לעדכון ה-GitHub

---

## 7. כלים שצריכים לעבוד

- MCP Figma (לבדוק שהאימות לא פג)
- VS Code (או כל IDE)
- דפדפן (Chrome/Edge/Firefox — Chrome עדיף לבדיקת RTL)
- Git CLI

אם MCP Figma פג: `mcp__claude_ai_Microsoft_365__authenticate` או הפעלה מחדש של ה-MCP.

---

## 8. קישורים מהירים

- אתר חי: https://departmentof.choreshchana.workers.dev/pages/01-child-details
- ריפו: https://github.com/mimran2207-EPR/Department-of-Education
- Figma: https://www.figma.com/design/uqk5LJ3rOx8I7Uc2RkvO4h
- README: `./README.md`
- מפת תוכן: `./.figma-refs/content-map.md`

---

*מסמך זה עודכן ב-2026-06-11 לילה, אחרי העלאה לאוויר ותיקוני הפריסה. ממשיכים מסעיף 3 בערב הבא.*
