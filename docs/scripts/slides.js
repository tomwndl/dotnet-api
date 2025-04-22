import { SfeirThemeInitializer } from '../web_modules/sfeir-school-theme/sfeir-school-theme.mjs';

// One method per module
function schoolSlides() {
  return [
    '00-conf/00-TITLE.md',
    '00-conf/01-speaker.md',
    '00-conf/02-agenda.md',
  ];
}

function apiSlides() {
  return [
    '02-api/00-TITLE.md',
    '02-api/01-intro.md',
    '02-api/02-REST.md',
    '02-api/03-bonnes-pratiques.md',
    '02-api/04-api-net.md',
    '02-api/05-consommer-api.md',
  ];
}
function securite() {
  return [
    '03-securite/00-TITLE.md',
    '03-securite/01-rappels.md',
    '03-securite/02-TP.md',
  ];
}

function formation() {
  return [
    //
    ...schoolSlides(), //
    ...apiSlides(),
    ...securite(), //
  ].map((slidePath) => {
    return { path: slidePath };
  });
}

SfeirThemeInitializer.init(formation);
