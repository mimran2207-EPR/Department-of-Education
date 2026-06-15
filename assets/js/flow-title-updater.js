/*
  Re-uses the gan registration flow (pages 01..11) for other registration
  types by swapping visible titles. The choice is driven by
  sessionStorage.regType set by the dashboard before navigation.

  Supported types:
    - kita:     רישום לכיתות א׳
    - kaytana:  רישום לקייטנות

  Default (ganim or unset) leaves the page unchanged.
*/
(function(){
  try {
    var type = sessionStorage.getItem('regType');
    if (!type || type === 'ganim') return;

    var labels = {
      kita:    { plural: 'כיתות א׳', singular: 'כיתה א׳' },
      kaytana: { plural: 'קייטנות',  singular: 'קייטנה' }
    };
    var L = labels[type];
    if (!L) return;

    var p = L.plural;
    var s = L.singular;

    var replacements = [
      ['רישום לגני ילדים',                     'רישום ל' + p],
      ['טופס רישום לגן עבור',                  'טופס רישום ל' + s + ' עבור'],
      ['איזה ילד/ה תרצו לרשום לגן?',           'איזה ילד/ה תרצו לרשום ל' + s + '?'],
      ['הרשמה לגן',                             'הרשמה ל' + s],
      ['תקנון הרישום לגני הילדים והצהרונים',  'תקנון הרישום ל' + p],
      ['רישום לגן',                             'רישום ל' + s]
    ];

    function applyAll(text){
      for (var i = 0; i < replacements.length; i++) {
        var key = replacements[i][0];
        if (text.indexOf(key) !== -1) text = text.split(key).join(replacements[i][1]);
      }
      return text;
    }

    document.title = applyAll(document.title);

    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
    var updates = [];
    var node;
    while ((node = walker.nextNode())) {
      var updated = applyAll(node.nodeValue);
      if (updated !== node.nodeValue) updates.push([node, updated]);
    }
    updates.forEach(function(u){ u[0].nodeValue = u[1]; });
  } catch (e) { /* no-op */ }
})();
