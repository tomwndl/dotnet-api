import { SfeirThemeInitializer } from '../web_modules/sfeir-school-theme/sfeir-school-theme.mjs';

// One method per module
function schoolSlides() {
  return [
    '00-conf/00-TITLE.md',
    '00-conf/01-speaker.md',
    '00-conf/02-agenda.md',
  ];
}

function history() {
  return [
    '10-history/00-TITLE.md',
    '10-history/01-objectifs.md',
    '10-history/02-net-framework-history.md',
    '10-history/03-net-core-history.md',
    '10-history/04-net-architecture.md',
    '10-history/05-exercices.md',
  ];
}

function csharp() {
  return [
    '11-csharp/00-TITLE.md',
    '11-csharp/01-class-records.md',
    '11-csharp/02-interfaces.md',
    '11-csharp/03-string-literals.md',
    '11-csharp/04-pattern-matching.md',
    '11-csharp/05-new-features.md',
  ];
}

function testSlides() {
  return [
    '01-tests/00-TITLE.md',
    '01-tests/01-Intro-et-rappel.md',
  ];
}

function apiSlides() {
  return [
    '02-api/00-TITLE.md',
    '02-api/01-intro.md',
    '02-api/02-layouts-et-style.md',
    '02-api/03-communication-controller.md',
    '02-api/04-Helper.md',
    '02-api/06-Q&A.md',
  ];
}
function modelSlides() {
  return [
    '03-Model/00-TITLE.md',
    '03-Model/01-model-vs-dto.md',
    '03-Model/02-mapping.md',
    '03-Model/06-Q&A.md'
  ];
}


function formation() {
  return [
    //
    ...schoolSlides(), //
    ...apiSlides(),
    ...history(), //
    ...csharp(), //
    ...testSlides(), // //
    ...modelSlides(), //
  ].map((slidePath) => {
    return { path: slidePath };
  });
}

SfeirThemeInitializer.init(formation);
