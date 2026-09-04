window.TERRITORY = {
 "countries": [
  {
   "id": "france",
   "ru": "Франция",
   "en": "France",
   "code": "fr",
   "versions": 12,
   "events": 3,
   "crosswalks": 9,
   "observations": 258,
   "sources": 3,
   "from": 1800,
   "to": 1913,
   "numerical": false
  },
  {
   "id": "belgium",
   "ru": "Бельгия",
   "en": "Belgium",
   "code": "be",
   "versions": 11,
   "events": 2,
   "crosswalks": 9,
   "observations": 16,
   "sources": 4,
   "from": 1800,
   "to": 1913,
   "numerical": false
  },
  {
   "id": "netherlands",
   "ru": "Нидерланды",
   "en": "Netherlands",
   "code": "nl",
   "versions": 16,
   "events": 7,
   "crosswalks": 15,
   "observations": 482,
   "sources": 5,
   "from": 1795,
   "to": 1914,
   "numerical": false
  }
 ],
 "events": [
  {
   "id": "boundary-event:netherlands:kingdom-holland-1806",
   "country": "netherlands",
   "year": 1806,
   "date": "1806-06-05",
   "relation": "regime-change",
   "dimension": "administration",
   "labelEn": "Batavian Republic to Kingdom of Holland",
   "ru": "Королевство Голландия вместо Батавской республики",
   "en": "Kingdom of Holland replaces the Batavian Republic",
   "affected": [
    "netherlands:northern-core"
   ],
   "sources": [
    {
     "id": "source:nl-na-regime-inventory-2-01-01-01",
     "title": "Archiefinventaris Wetgevende Colleges der Bataafse Republiek en opvolgende besturen",
     "uri": "https://www.nationaalarchief.nl/onderzoeken/archief/2.01.01.01/download/pdf",
     "locator": "inventory context and printed p.17; rendered annexation checkpoint"
    }
   ],
   "predecessors": [
    "territory-version:netherlands:batavian-republic:1795-1806:administrative"
   ],
   "successors": [
    "territory-version:netherlands:kingdom-holland:1806-1810:administrative"
   ]
  },
  {
   "id": "boundary-event:netherlands:french-annexation-1810",
   "country": "netherlands",
   "year": 1810,
   "date": "1810-07-09",
   "relation": "annexation",
   "dimension": "sovereignty",
   "labelEn": "French annexation",
   "ru": "Присоединение к Французской империи",
   "en": "Annexation by the French Empire",
   "affected": [
    "netherlands:northern-core"
   ],
   "sources": [
    {
     "id": "source:nl-na-regime-inventory-2-01-01-01",
     "title": "Archiefinventaris Wetgevende Colleges der Bataafse Republiek en opvolgende besturen",
     "uri": "https://www.nationaalarchief.nl/onderzoeken/archief/2.01.01.01/download/pdf",
     "locator": "inventory context and printed p.17; rendered annexation checkpoint"
    }
   ],
   "predecessors": [
    "territory-version:netherlands:kingdom-holland:1806-1810:administrative"
   ],
   "successors": [
    "territory-version:netherlands:french-annexation:1810-1813:administrative"
   ]
  },
  {
   "id": "boundary-event:netherlands:restoration-1813",
   "country": "netherlands",
   "year": 1813,
   "date": "1813-11-21",
   "relation": "restoration",
   "dimension": "sovereignty",
   "labelEn": "End of French annexation",
   "ru": "Конец французского владычества",
   "en": "End of French rule",
   "affected": [
    "netherlands:northern-core"
   ],
   "sources": [
    {
     "id": "source:nl-na-regime-inventory-2-01-01-01",
     "title": "Archiefinventaris Wetgevende Colleges der Bataafse Republiek en opvolgende besturen",
     "uri": "https://www.nationaalarchief.nl/onderzoeken/archief/2.01.01.01/download/pdf",
     "locator": "inventory context and printed p.17; rendered annexation checkpoint"
    }
   ],
   "predecessors": [
    "territory-version:netherlands:french-annexation:1810-1813:administrative"
   ],
   "successors": [
    "territory-version:netherlands:sovereign-principality:1813-1815:administrative"
   ]
  },
  {
   "id": "boundary-event:netherlands:union-1815",
   "country": "netherlands",
   "year": 1815,
   "date": "1815-03-16",
   "relation": "merge",
   "dimension": "territorial-composition",
   "labelEn": "Formation of the United Kingdom of the Netherlands",
   "ru": "Соединённое королевство Нидерландов: с Бельгией и Люксембургом",
   "en": "United Kingdom of the Netherlands: with Belgium and Luxembourg",
   "affected": [
    "netherlands:northern-core",
    "netherlands:southern-provinces",
    "netherlands:luxembourg"
   ],
   "sources": [
    {
     "id": "source:nl-na-treaty-inventory-2-05-02",
     "title": "Inventaris van verdragen en ratificaties",
     "uri": "https://www.nationaalarchief.nl/onderzoeken/archief/2.05.02/download/pdf",
     "locator": "inventory printed pp.13 and 26; 1815 instruments and 1839 treaty/ratification entries"
    }
   ],
   "predecessors": [
    "territory-version:netherlands:sovereign-principality:1813-1815:administrative"
   ],
   "successors": [
    "territory-version:netherlands:united-kingdom:1815-1830:legal"
   ]
  },
  {
   "id": "boundary-event:france:post-empire-1815",
   "country": "france",
   "year": 1815,
   "date": "1815",
   "relation": "redefinition",
   "dimension": "territorial-composition",
   "labelEn": "Post-Empire territorial settlement",
   "ru": "Границы после Империи (Венский конгресс)",
   "en": "Post-Empire borders (Congress of Vienna)",
   "affected": [
    "france:metropolitan-core"
   ],
   "sources": [],
   "predecessors": [
    "territory-version:france:napoleonic-departments:1800-1815:statistical"
   ],
   "successors": [
    "territory-version:france:post-1815:1815-1860:effective"
   ]
  },
  {
   "id": "boundary-event:netherlands:belgian-separation-1830",
   "country": "netherlands",
   "year": 1830,
   "date": "1830-10-04",
   "relation": "separation",
   "dimension": "administration",
   "labelEn": "Belgian de-facto separation",
   "ru": "Фактическое отделение Бельгии",
   "en": "De facto separation of Belgium",
   "affected": [
    "netherlands:southern-provinces",
    "netherlands:limburg",
    "netherlands:luxembourg"
   ],
   "sources": [
    {
     "id": "source:nl-na-treaty-inventory-2-05-02",
     "title": "Inventaris van verdragen en ratificaties",
     "uri": "https://www.nationaalarchief.nl/onderzoeken/archief/2.05.02/download/pdf",
     "locator": "inventory printed pp.13 and 26; 1815 instruments and 1839 treaty/ratification entries"
    }
   ],
   "predecessors": [
    "territory-version:netherlands:united-kingdom:1815-1830:legal"
   ],
   "successors": [
    "territory-version:netherlands:de-facto-separation:1830-1839:effective"
   ]
  },
  {
   "id": "boundary-event:belgium:revolution-1830",
   "country": "belgium",
   "year": 1830,
   "date": "1830-10-04",
   "relation": "separation",
   "dimension": "administration",
   "labelEn": "Belgian de-facto separation",
   "ru": "Революция: отделение от Нидерландов",
   "en": "Revolution: separation from the Netherlands",
   "affected": [
    "belgium:southern-provinces",
    "belgium:limburg",
    "belgium:luxembourg"
   ],
   "sources": [
    {
     "id": "source:quetelet-1832-population-belgium",
     "title": "Recherches sur la reproduction et la mortalité de l'homme aux différents âges, et sur la population de la Belgique",
     "uri": "https://archive.org/details/recherchessurlar00quet",
     "locator": "printed p.5 / PDF p.15, national table and footnote"
    },
    {
     "id": "source:treaty-belgium-netherlands-1839",
     "title": "Traité entre la Belgique et les Pays-Bas du 19 avril 1839",
     "uri": "https://fdfa.be/nl/vredesverdrag-tussen-belgie-en-nederland",
     "locator": "official French treaty scan PDF pp.1-2, Articles 1-4; signature 1839-04-19 and ratification/effect 1839-06-08"
    }
   ],
   "predecessors": [
    "territory-version:belgium:southern-provinces:1815-1830:effective"
   ],
   "successors": [
    "territory-version:belgium:pre-treaty:1830-1839:effective"
   ]
  },
  {
   "id": "boundary-event:netherlands:treaty-1839",
   "country": "netherlands",
   "year": 1839,
   "date": "1839-04-19",
   "relation": "separation",
   "dimension": "territorial-composition",
   "labelEn": "Treaty settlement with Belgium",
   "ru": "Договор 1839: раздел Лимбурга и Люксембурга",
   "en": "Treaty of 1839: Limburg and Luxembourg partitioned",
   "affected": [
    "netherlands:southern-provinces",
    "netherlands:limburg",
    "netherlands:luxembourg"
   ],
   "sources": [
    {
     "id": "source:nl-na-treaty-inventory-2-05-02",
     "title": "Inventaris van verdragen en ratificaties",
     "uri": "https://www.nationaalarchief.nl/onderzoeken/archief/2.05.02/download/pdf",
     "locator": "inventory printed pp.13 and 26; 1815 instruments and 1839 treaty/ratification entries"
    }
   ],
   "predecessors": [
    "territory-version:netherlands:de-facto-separation:1830-1839:effective"
   ],
   "successors": [
    "territory-version:netherlands:post-treaty:1839-1890:legal"
   ]
  },
  {
   "id": "boundary-event:belgium:treaty-1839",
   "country": "belgium",
   "year": 1839,
   "date": "1839-06-08",
   "relation": "transfer",
   "dimension": "territorial-composition",
   "labelEn": "Treaty settlement of Belgium and the Netherlands",
   "ru": "Лондонский договор: границы с Нидерландами закреплены",
   "en": "Treaty of London: borders with the Netherlands settled",
   "affected": [
    "belgium:limburg",
    "belgium:luxembourg"
   ],
   "sources": [
    {
     "id": "source:treaty-belgium-netherlands-1839",
     "title": "Traité entre la Belgique et les Pays-Bas du 19 avril 1839",
     "uri": "https://fdfa.be/nl/vredesverdrag-tussen-belgie-en-nederland",
     "locator": "official French treaty scan PDF pp.1-2, Articles 1-4; signature 1839-04-19 and ratification/effect 1839-06-08"
    }
   ],
   "predecessors": [
    "territory-version:belgium:pre-treaty:1830-1839:effective"
   ],
   "successors": [
    "territory-version:belgium:post-treaty:1839-1900:legal"
   ]
  },
  {
   "id": "boundary-event:france:turin-1860",
   "country": "france",
   "year": 1860,
   "date": "1860-06-11",
   "relation": "transfer",
   "dimension": "territorial-composition",
   "labelEn": "Union of Savoy and Nice with France",
   "ru": "Присоединение Савойи и Ниццы",
   "en": "Union of Savoy and Nice with France",
   "affected": [
    "france:savoy",
    "france:nice"
   ],
   "sources": [
    {
     "id": "source:france-sardinia-treaty-turin-1860",
     "title": "Gazette des Tribunaux, 13 June 1860: promulgation and text of the Treaty of Turin",
     "uri": "https://data.decalog.net/enap1/Liens/Gazette/18600613.pdf",
     "locator": "Gazette des Tribunaux 13 June 1860, promulgation decree and Treaty of Turin signed 24 March 1860"
    }
   ],
   "predecessors": [
    "territory-version:france:post-1815:1815-1860:effective"
   ],
   "successors": [
    "territory-version:france:post-turin:1860-1871:legal"
   ]
  },
  {
   "id": "boundary-event:france:frankfurt-1871",
   "country": "france",
   "year": 1871,
   "date": "1871-05-10",
   "relation": "transfer",
   "dimension": "territorial-composition",
   "labelEn": "Post-Frankfurt territorial settlement",
   "ru": "Утрата Эльзаса и Лотарингии (Франкфуртский мир)",
   "en": "Loss of Alsace-Lorraine (Treaty of Frankfurt)",
   "affected": [
    "france:alsace-lorraine",
    "france:belfort"
   ],
   "sources": [
    {
     "id": "source:sgf-annuaire-france-1899",
     "title": "Annuaire statistique de la France, dix-neuvième volume, 1899",
     "uri": "https://www.bnsp.insee.fr/ark:/12148/bpt6k5509059m",
     "locator": "printed pp.32, 320 and 492-493; tables 34 and 357 and Belfort statistical heading"
    }
   ],
   "predecessors": [
    "territory-version:france:post-turin:1860-1871:legal"
   ],
   "successors": [
    "territory-version:france:post-frankfurt:1871-1900:effective"
   ]
  },
  {
   "id": "boundary-event:netherlands:luxembourg-personal-union-1890",
   "country": "netherlands",
   "year": 1890,
   "date": "1890-11-23",
   "relation": "redefinition",
   "dimension": "sovereignty",
   "labelEn": "End of the Luxembourg personal union",
   "ru": "Конец личной унии с Люксембургом",
   "en": "End of the personal union with Luxembourg",
   "affected": [
    "netherlands:luxembourg"
   ],
   "sources": [
    {
     "id": "source:nl-na-treaty-inventory-2-05-02",
     "title": "Inventaris van verdragen en ratificaties",
     "uri": "https://www.nationaalarchief.nl/onderzoeken/archief/2.05.02/download/pdf",
     "locator": "inventory printed pp.13 and 26; 1815 instruments and 1839 treaty/ratification entries"
    }
   ],
   "predecessors": [
    "territory-version:netherlands:post-treaty:1839-1890:legal"
   ],
   "successors": [
    "territory-version:netherlands:post-personal-union:1890-1900:legal"
   ]
  }
 ],
 "versions": [
  {
   "id": "territory-version:belgium:french-departments:1800-1815:statistical",
   "country": "belgium",
   "role": "source-native",
   "basis": "statistical-reporting",
   "from": 1800,
   "to": 1815,
   "open": false,
   "status": "partial",
   "support": 1,
   "observations": 0,
   "labelEn": "French departmental source domain, later Belgian area",
   "ru": "Французские департаменты на будущей бельгийской земле",
   "en": "French departments on the later Belgian territory",
   "notesEn": "Not post-1839 Belgium.",
   "missingEn": "Exact department membership changes by table and year.",
   "sources": [
    {
     "id": "source:goossens-1993-belgian-agricultural-output",
     "title": "The Economic Development of Belgian Agriculture, 1812-1846",
     "uri": "https://www.journalbelgianhistory.be/en/system/files/article_pdf/BTNG-RBHC%2C%2024%2C%201993%2C%201-2%2C%20pp%20227-273.pdf",
     "locator": "article printed p.231 / PDF p.5, territorial-method discussion"
    }
   ]
  },
  {
   "id": "territory-version:belgium:quetelet-marriages-1803-1829:statistical",
   "country": "belgium",
   "role": "source-native",
   "basis": "statistical-reporting",
   "from": 1803,
   "to": 1830,
   "open": false,
   "status": "partial",
   "support": 1,
   "observations": 3,
   "labelEn": "Quetelet retrospective marriage-table domain",
   "ru": "Ретроспективная таблица браков Кетле (1803-1829)",
   "en": "Quetelet retrospective marriage table (1803-1829)",
   "notesEn": "Source-native statistical domain; literal level breaks and changing historical composition are not smoothed or relabelled.",
   "missingEn": "Exact component composition is not established by the admitted table passport.",
   "sources": [
    {
     "id": "source:quetelet-1832-population-belgium",
     "title": "Recherches sur la reproduction et la mortalité de l'homme aux différents âges, et sur la population de la Belgique",
     "uri": "https://archive.org/details/recherchessurlar00quet",
     "locator": "printed p.23 / PDF p.33"
    }
   ]
  },
  {
   "id": "territory-version:belgium:southern-provinces:1815-1830:effective",
   "country": "belgium",
   "role": "source-native",
   "basis": "effective-administration",
   "from": 1815,
   "to": 1830,
   "open": false,
   "status": "partial",
   "support": 1,
   "observations": 0,
   "labelEn": "Southern provinces within the United Kingdom of the Netherlands",
   "ru": "Южные провинции Соединённого королевства Нидерландов",
   "en": "Southern provinces within the United Kingdom of the Netherlands",
   "notesEn": "Includes unresolved Limburg and Luxembourg context.",
   "missingEn": "Exact administrative membership is not fully enumerated.",
   "sources": [
    {
     "id": "source:quetelet-1832-population-belgium",
     "title": "Recherches sur la reproduction et la mortalité de l'homme aux différents âges, et sur la population de la Belgique",
     "uri": "https://archive.org/details/recherchessurlar00quet",
     "locator": "printed p.5 / PDF p.15, national table and footnote"
    }
   ]
  },
  {
   "id": "territory-version:belgium:pre-treaty:1830-1839:effective",
   "country": "belgium",
   "role": "source-native",
   "basis": "effective-administration",
   "from": 1830,
   "to": 1839,
   "open": false,
   "status": "partial",
   "support": 2,
   "observations": 0,
   "labelEn": "Post-revolution Belgian administration before treaty settlement",
   "ru": "Бельгийское управление до договора 1839",
   "en": "Belgian administration before the 1839 treaty",
   "notesEn": "Legal and effective bases are not collapsed.",
   "missingEn": "Limburg and Luxembourg composition remained unsettled.",
   "sources": [
    {
     "id": "source:quetelet-1832-population-belgium",
     "title": "Recherches sur la reproduction et la mortalité de l'homme aux différents âges, et sur la population de la Belgique",
     "uri": "https://archive.org/details/recherchessurlar00quet",
     "locator": "printed p.5 / PDF p.15, national table and footnote"
    },
    {
     "id": "source:treaty-belgium-netherlands-1839",
     "title": "Traité entre la Belgique et les Pays-Bas du 19 avril 1839",
     "uri": "https://fdfa.be/nl/vredesverdrag-tussen-belgie-en-nederland",
     "locator": "official French treaty scan PDF pp.1-2, Articles 1-4; signature 1839-04-19 and ratification/effect 1839-06-08"
    }
   ]
  },
  {
   "id": "territory-version:belgium:quetelet-population-1830:statistical",
   "country": "belgium",
   "role": "source-native",
   "basis": "statistical-reporting",
   "from": 1830,
   "to": 1831,
   "open": false,
   "status": "partial",
   "support": 1,
   "observations": 4,
   "labelEn": "Quetelet population table statistical domain",
   "ru": "Таблица населения Кетле (1830)",
   "en": "Quetelet population table (1830)",
   "notesEn": "Source-native statistical domain; literal level breaks and changing historical composition are not smoothed or relabelled.",
   "missingEn": "Exact component composition is not established by the admitted table passport.",
   "sources": [
    {
     "id": "source:quetelet-1832-population-belgium",
     "title": "Recherches sur la reproduction et la mortalité de l'homme aux différents âges, et sur la population de la Belgique",
     "uri": "https://archive.org/details/recherchessurlar00quet",
     "locator": "printed p.5 / PDF p.15, national table and footnote"
    }
   ]
  },
  {
   "id": "territory-version:belgium:post-treaty:1839-1900:legal",
   "country": "belgium",
   "role": "source-native",
   "basis": "legal",
   "from": 1839,
   "to": null,
   "open": true,
   "status": "partial",
   "support": 2,
   "observations": 0,
   "labelEn": "Treaty-defined Kingdom of Belgium",
   "ru": "Королевство Бельгия по договору 1839",
   "en": "Treaty-defined Kingdom of Belgium (1839)",
   "notesEn": "European and overseas membership are explicit relations, not a country-name assumption.",
   "missingEn": "No exhaustive component geometry or overseas chronology is encoded.",
   "sources": [
    {
     "id": "source:treaty-belgium-netherlands-1839",
     "title": "Traité entre la Belgique et les Pays-Bas du 19 avril 1839",
     "uri": "https://fdfa.be/nl/vredesverdrag-tussen-belgie-en-nederland",
     "locator": "official French treaty scan PDF pp.1-2, Articles 1-4; signature 1839-04-19 and ratification/effect 1839-06-08"
    },
    {
     "id": "source:belgium-statbel-annuaire-1874",
     "title": "Annuaire statistique de la Belgique, cinquième année—1874",
     "uri": "https://wiki.statbel.fgov.be/wiki/Brochure_1874_fr",
     "locator": "title page PDF p.4 and national/provincial table headings"
    }
   ]
  },
  {
   "id": "territory-version:belgium:annuaire-births-1840-1873:statistical",
   "country": "belgium",
   "role": "source-native",
   "basis": "statistical-reporting",
   "from": 1840,
   "to": 1874,
   "open": false,
   "status": "partial",
   "support": 1,
   "observations": 9,
   "labelEn": "Annuaire 1874 birth-table domain",
   "ru": "Таблица рождений ежегодника 1874 (1840-1873)",
   "en": "Annuaire 1874 birth table domain (1840-1873)",
   "notesEn": "Source-native statistical domain; literal level breaks and changing historical composition are not smoothed or relabelled.",
   "missingEn": "Exact component composition is not established by the admitted table passport.",
   "sources": [
    {
     "id": "source:belgium-statbel-annuaire-1874",
     "title": "Annuaire statistique de la Belgique, cinquième année—1874",
     "uri": "https://wiki.statbel.fgov.be/wiki/Brochure_1874_fr",
     "locator": "printed p.39 / PDF p.41"
    }
   ]
  },
  {
   "id": "territory-version:belgium:annuaire-1874:statistical",
   "country": "belgium",
   "role": "source-native",
   "basis": "statistical-reporting",
   "from": 1874,
   "to": 1875,
   "open": false,
   "status": "partial",
   "support": 1,
   "observations": 0,
   "labelEn": "Le royaume in Annuaire statistique 1874",
   "ru": "«Le royaume» в статистическом ежегоднике 1874",
   "en": "“Le royaume” in the Annuaire statistique 1874",
   "notesEn": "Statistical domain, not a universal legal boundary.",
   "missingEn": "Table-specific provincial membership is not exhaustively encoded.",
   "sources": [
    {
     "id": "source:belgium-statbel-annuaire-1874",
     "title": "Annuaire statistique de la Belgique, cinquième année—1874",
     "uri": "https://wiki.statbel.fgov.be/wiki/Brochure_1874_fr",
     "locator": "title page PDF p.4 and national/provincial table headings"
    }
   ]
  },
  {
   "id": "territory-version:belgium:european-composition-1900:effective-target",
   "country": "belgium",
   "role": "retrospective-target",
   "basis": "effective-administration",
   "from": 1800,
   "to": 1901,
   "open": false,
   "status": "partial",
   "support": 2,
   "observations": 0,
   "labelEn": "belgium European composition vintage 1900 (effective branch)",
   "ru": "Европейская Бельгия в границах 1900 (фактическая ветвь)",
   "en": "European Belgium in 1900 composition (effective branch)",
   "notesEn": "Composition vintage is 1900-12-31; population universe and stock reference time remain unselected.",
   "missingEn": "No exhaustive component geometry or proof that legal, effective and statistical sets coincide.",
   "sources": [
    {
     "id": "source:treaty-belgium-netherlands-1839",
     "title": "Traité entre la Belgique et les Pays-Bas du 19 avril 1839",
     "uri": "https://fdfa.be/nl/vredesverdrag-tussen-belgie-en-nederland",
     "locator": "official French treaty scan PDF pp.1-2, Articles 1-4; signature 1839-04-19 and ratification/effect 1839-06-08"
    },
    {
     "id": "source:belgium-statbel-annuaire-1874",
     "title": "Annuaire statistique de la Belgique, cinquième année—1874",
     "uri": "https://wiki.statbel.fgov.be/wiki/Brochure_1874_fr",
     "locator": "title page PDF p.4 and national/provincial table headings"
    }
   ]
  },
  {
   "id": "territory-version:belgium:european-composition-1900:legal-target",
   "country": "belgium",
   "role": "retrospective-target",
   "basis": "legal",
   "from": 1800,
   "to": 1901,
   "open": false,
   "status": "partial",
   "support": 2,
   "observations": 0,
   "labelEn": "belgium European composition vintage 1900 (legal branch)",
   "ru": "Европейская Бельгия в границах 1900 (правовая ветвь)",
   "en": "European Belgium in 1900 composition (legal branch)",
   "notesEn": "Composition vintage is 1900-12-31; population universe and stock reference time remain unselected.",
   "missingEn": "No exhaustive component geometry or proof that legal, effective and statistical sets coincide.",
   "sources": [
    {
     "id": "source:treaty-belgium-netherlands-1839",
     "title": "Traité entre la Belgique et les Pays-Bas du 19 avril 1839",
     "uri": "https://fdfa.be/nl/vredesverdrag-tussen-belgie-en-nederland",
     "locator": "official French treaty scan PDF pp.1-2, Articles 1-4; signature 1839-04-19 and ratification/effect 1839-06-08"
    },
    {
     "id": "source:belgium-statbel-annuaire-1874",
     "title": "Annuaire statistique de la Belgique, cinquième année—1874",
     "uri": "https://wiki.statbel.fgov.be/wiki/Brochure_1874_fr",
     "locator": "title page PDF p.4 and national/provincial table headings"
    }
   ]
  },
  {
   "id": "territory-version:belgium:european-composition-1900:statistical-target",
   "country": "belgium",
   "role": "retrospective-target",
   "basis": "statistical-reporting",
   "from": 1800,
   "to": 1901,
   "open": false,
   "status": "partial",
   "support": 2,
   "observations": 0,
   "labelEn": "belgium European composition vintage 1900 (statistical branch)",
   "ru": "Европейская Бельгия в границах 1900 (статистическая ветвь)",
   "en": "European Belgium in 1900 composition (statistical branch)",
   "notesEn": "Composition vintage is 1900-12-31; population universe and stock reference time remain unselected.",
   "missingEn": "No exhaustive component geometry or proof that legal, effective and statistical sets coincide.",
   "sources": [
    {
     "id": "source:treaty-belgium-netherlands-1839",
     "title": "Traité entre la Belgique et les Pays-Bas du 19 avril 1839",
     "uri": "https://fdfa.be/nl/vredesverdrag-tussen-belgie-en-nederland",
     "locator": "official French treaty scan PDF pp.1-2, Articles 1-4; signature 1839-04-19 and ratification/effect 1839-06-08"
    },
    {
     "id": "source:belgium-statbel-annuaire-1874",
     "title": "Annuaire statistique de la Belgique, cinquième année—1874",
     "uri": "https://wiki.statbel.fgov.be/wiki/Brochure_1874_fr",
     "locator": "title page PDF p.4 and national/provincial table headings"
    }
   ]
  },
  {
   "id": "territory-version:france:napoleonic-departments:1800-1815:statistical",
   "country": "france",
   "role": "source-native",
   "basis": "statistical-reporting",
   "from": 1800,
   "to": 1815,
   "open": false,
   "status": "partial",
   "support": 1,
   "observations": 0,
   "labelEn": "French departments under the Consulate and Empire",
   "ru": "Наполеоновские департаменты (1800-1815)",
   "en": "Napoleonic departments (1800-1815)",
   "notesEn": "No projection to the 1900 metropolitan boundary.",
   "missingEn": "The departmental set changes through the interval.",
   "sources": [
    {
     "id": "source:insee-sgf-france-historical-1800-1925",
     "title": "Données historiques de la Statistique générale de France, 1800-1925",
     "uri": "https://www.insee.fr/fr/statistiques/2591397",
     "locator": "T117 source-native 1800-1801 department/arrondissement rows; T85/T86 FRANCE and department rows"
    }
   ]
  },
  {
   "id": "territory-version:france:sgf-t87-births:1800-1820:statistical",
   "country": "france",
   "role": "source-native",
   "basis": "statistical-reporting",
   "from": 1800,
   "to": 1821,
   "open": false,
   "status": "partial",
   "support": 1,
   "observations": 4,
   "labelEn": "SGF T87 birth-table domain",
   "ru": "Таблица T87 (INSEE-SGF): рождения 1800-1820",
   "en": "Table T87 (INSEE-SGF): births 1800-1820",
   "notesEn": "Source-native statistical domain; literal level breaks and changing historical composition are not smoothed or relabelled.",
   "missingEn": "Exact component composition is not established by the admitted table passport.",
   "sources": [
    {
     "id": "source:insee-sgf-france-historical-1800-1925",
     "title": "Données historiques de la Statistique générale de France, 1800-1925",
     "uri": "https://www.insee.fr/fr/statistiques/2591397",
     "locator": "_T87!F9; variable V7; vital-label workbook Feuil1 rows 365-366"
    }
   ]
  },
  {
   "id": "territory-version:france:sgf-t86-population:1801-1836:statistical",
   "country": "france",
   "role": "source-native",
   "basis": "statistical-reporting",
   "from": 1801,
   "to": 1837,
   "open": false,
   "status": "partial",
   "support": 1,
   "observations": 5,
   "labelEn": "SGF T86 population-table domain",
   "ru": "Таблица T86 (INSEE-SGF): население по департаментам 1801-1836",
   "en": "Table T86 (INSEE-SGF): population by department 1801-1836",
   "notesEn": "Source-native statistical domain; literal level breaks and changing historical composition are not smoothed or relabelled.",
   "missingEn": "Exact component composition is not established by the admitted table passport.",
   "sources": [
    {
     "id": "source:insee-sgf-france-historical-1800-1925",
     "title": "Données historiques de la Statistique générale de France, 1800-1925",
     "uri": "https://www.insee.fr/fr/statistiques/2591397",
     "locator": "_T86!CU9; variable V100; label workbook Feuil1 rows 285-289"
    }
   ]
  },
  {
   "id": "territory-version:france:post-1815:1815-1860:effective",
   "country": "france",
   "role": "source-native",
   "basis": "effective-administration",
   "from": 1815,
   "to": 1860,
   "open": false,
   "status": "unresolved",
   "support": 0,
   "observations": 0,
   "labelEn": "Post-1815 metropolitan France",
   "ru": "Франция после 1815 без Савойи и Ниццы",
   "en": "France after 1815, without Savoy and Nice",
   "notesEn": "Kept as an explicit chronology gap rather than inferred metropolitan France.",
   "missingEn": "No admitted 1815 treaty artifact or component-level definition supports this version.",
   "sources": []
  },
  {
   "id": "territory-version:france:sgf:1834-1837:statistical",
   "country": "france",
   "role": "source-native",
   "basis": "statistical-reporting",
   "from": 1834,
   "to": 1838,
   "open": false,
   "status": "partial",
   "support": 1,
   "observations": 0,
   "labelEn": "FRANCE aggregate in SGF T85/T86",
   "ru": "Statistique générale de la France, таблицы 1834-1837",
   "en": "Statistique générale de la France, tables 1834-1837",
   "notesEn": "Published aggregate remains distinct from the legal version.",
   "missingEn": "Workbook does not state a retrospective boundary protocol.",
   "sources": [
    {
     "id": "source:insee-sgf-france-historical-1800-1925",
     "title": "Données historiques de la Statistique générale de France, 1800-1925",
     "uri": "https://www.insee.fr/fr/statistiques/2591397",
     "locator": "T117 source-native 1800-1801 department/arrondissement rows; T85/T86 FRANCE and department rows"
    }
   ]
  },
  {
   "id": "territory-version:france:post-turin:1860-1871:legal",
   "country": "france",
   "role": "source-native",
   "basis": "legal",
   "from": 1860,
   "to": 1871,
   "open": false,
   "status": "partial",
   "support": 1,
   "observations": 0,
   "labelEn": "France after the Treaty of Turin",
   "ru": "Франция с Савойей и Ниццей (1860-1871)",
   "en": "France with Savoy and Nice (1860-1871)",
   "notesEn": "Savoy and Nice are explicit components.",
   "missingEn": "Commune-level implementation is not supplied.",
   "sources": [
    {
     "id": "source:france-sardinia-treaty-turin-1860",
     "title": "Gazette des Tribunaux, 13 June 1860: promulgation and text of the Treaty of Turin",
     "uri": "https://data.decalog.net/enap1/Liens/Gazette/18600613.pdf",
     "locator": "Gazette des Tribunaux 13 June 1860, promulgation decree and Treaty of Turin signed 24 March 1860"
    }
   ]
  },
  {
   "id": "territory-version:france:post-frankfurt:1871-1900:effective",
   "country": "france",
   "role": "source-native",
   "basis": "effective-administration",
   "from": 1871,
   "to": null,
   "open": true,
   "status": "partial",
   "support": 1,
   "observations": 0,
   "labelEn": "Metropolitan France after the 1871 settlement",
   "ru": "Франция после 1871 без Эльзаса и Лотарингии",
   "en": "France after 1871, without Alsace-Lorraine",
   "notesEn": "Later SGF headings support Belfort and table-specific exclusions only.",
   "missingEn": "The Frankfurt instrument and commune geometry are not locally admitted.",
   "sources": [
    {
     "id": "source:sgf-annuaire-france-1899",
     "title": "Annuaire statistique de la France, dix-neuvième volume, 1899",
     "uri": "https://www.bnsp.insee.fr/ark:/12148/bpt6k5509059m",
     "locator": "printed pp.32, 320 and 492-493; tables 34 and 357 and Belfort statistical heading"
    }
   ]
  },
  {
   "id": "territory-version:france:annuaire-table34:1881-1898:statistical",
   "country": "france",
   "role": "source-native",
   "basis": "statistical-reporting",
   "from": 1881,
   "to": 1899,
   "open": false,
   "status": "partial",
   "support": 1,
   "observations": 249,
   "labelEn": "SGF Annuaire 1899 table 34 domain",
   "ru": "Таблица 34 ежегодника 1899: движение населения 1881-1898",
   "en": "Annuaire 1899 Table 34: population movement 1881-1898",
   "notesEn": "Source-native statistical domain; literal level breaks and changing historical composition are not smoothed or relabelled.",
   "missingEn": "Exact component composition is not established by the admitted table passport.",
   "sources": [
    {
     "id": "source:sgf-annuaire-france-1899",
     "title": "Annuaire statistique de la France, dix-neuvième volume, 1899",
     "uri": "https://www.bnsp.insee.fr/ark:/12148/bpt6k5509059m",
     "locator": "Annuaire statistique 1899, printed p.32, table 34, canvas f64, number of marriages column"
    }
   ]
  },
  {
   "id": "territory-version:france:annuaire-1899:statistical",
   "country": "france",
   "role": "source-native",
   "basis": "statistical-reporting",
   "from": 1899,
   "to": 1900,
   "open": false,
   "status": "partial",
   "support": 1,
   "observations": 0,
   "labelEn": "France in Annuaire statistique 1899",
   "ru": "Франция в статистическом ежегоднике 1899",
   "en": "France in the Annuaire statistique 1899",
   "notesEn": "Table-specific statistical domain.",
   "missingEn": "Different tables use different explicit territorial exclusions.",
   "sources": [
    {
     "id": "source:sgf-annuaire-france-1899",
     "title": "Annuaire statistique de la France, dix-neuvième volume, 1899",
     "uri": "https://www.bnsp.insee.fr/ark:/12148/bpt6k5509059m",
     "locator": "printed pp.32, 320 and 492-493; tables 34 and 357 and Belfort statistical heading"
    }
   ]
  },
  {
   "id": "territory-version:france:european-composition-1900:effective-target",
   "country": "france",
   "role": "retrospective-target",
   "basis": "effective-administration",
   "from": 1800,
   "to": 1901,
   "open": false,
   "status": "partial",
   "support": 2,
   "observations": 0,
   "labelEn": "france European composition vintage 1900 (effective branch)",
   "ru": "Европейская Франция в границах 1900 (фактическая ветвь)",
   "en": "European France in 1900 composition (effective branch)",
   "notesEn": "Composition vintage is 1900-12-31; population universe and stock reference time remain unselected.",
   "missingEn": "No exhaustive component geometry or proof that legal, effective and statistical sets coincide.",
   "sources": [
    {
     "id": "source:france-sardinia-treaty-turin-1860",
     "title": "Gazette des Tribunaux, 13 June 1860: promulgation and text of the Treaty of Turin",
     "uri": "https://data.decalog.net/enap1/Liens/Gazette/18600613.pdf",
     "locator": "Gazette des Tribunaux 13 June 1860, promulgation decree and Treaty of Turin signed 24 March 1860"
    },
    {
     "id": "source:sgf-annuaire-france-1899",
     "title": "Annuaire statistique de la France, dix-neuvième volume, 1899",
     "uri": "https://www.bnsp.insee.fr/ark:/12148/bpt6k5509059m",
     "locator": "printed pp.32, 320 and 492-493; tables 34 and 357 and Belfort statistical heading"
    }
   ]
  },
  {
   "id": "territory-version:france:european-composition-1900:legal-target",
   "country": "france",
   "role": "retrospective-target",
   "basis": "legal",
   "from": 1800,
   "to": 1901,
   "open": false,
   "status": "partial",
   "support": 2,
   "observations": 0,
   "labelEn": "france European composition vintage 1900 (legal branch)",
   "ru": "Европейская Франция в границах 1900 (правовая ветвь)",
   "en": "European France in 1900 composition (legal branch)",
   "notesEn": "Composition vintage is 1900-12-31; population universe and stock reference time remain unselected.",
   "missingEn": "No exhaustive component geometry or proof that legal, effective and statistical sets coincide.",
   "sources": [
    {
     "id": "source:france-sardinia-treaty-turin-1860",
     "title": "Gazette des Tribunaux, 13 June 1860: promulgation and text of the Treaty of Turin",
     "uri": "https://data.decalog.net/enap1/Liens/Gazette/18600613.pdf",
     "locator": "Gazette des Tribunaux 13 June 1860, promulgation decree and Treaty of Turin signed 24 March 1860"
    },
    {
     "id": "source:sgf-annuaire-france-1899",
     "title": "Annuaire statistique de la France, dix-neuvième volume, 1899",
     "uri": "https://www.bnsp.insee.fr/ark:/12148/bpt6k5509059m",
     "locator": "printed pp.32, 320 and 492-493; tables 34 and 357 and Belfort statistical heading"
    }
   ]
  },
  {
   "id": "territory-version:france:european-composition-1900:statistical-target",
   "country": "france",
   "role": "retrospective-target",
   "basis": "statistical-reporting",
   "from": 1800,
   "to": 1901,
   "open": false,
   "status": "partial",
   "support": 2,
   "observations": 0,
   "labelEn": "france European composition vintage 1900 (statistical branch)",
   "ru": "Европейская Франция в границах 1900 (статистическая ветвь)",
   "en": "European France in 1900 composition (statistical branch)",
   "notesEn": "Composition vintage is 1900-12-31; population universe and stock reference time remain unselected.",
   "missingEn": "No exhaustive component geometry or proof that legal, effective and statistical sets coincide.",
   "sources": [
    {
     "id": "source:france-sardinia-treaty-turin-1860",
     "title": "Gazette des Tribunaux, 13 June 1860: promulgation and text of the Treaty of Turin",
     "uri": "https://data.decalog.net/enap1/Liens/Gazette/18600613.pdf",
     "locator": "Gazette des Tribunaux 13 June 1860, promulgation decree and Treaty of Turin signed 24 March 1860"
    },
    {
     "id": "source:sgf-annuaire-france-1899",
     "title": "Annuaire statistique de la France, dix-neuvième volume, 1899",
     "uri": "https://www.bnsp.insee.fr/ark:/12148/bpt6k5509059m",
     "locator": "printed pp.32, 320 and 492-493; tables 34 and 357 and Belfort statistical heading"
    }
   ]
  },
  {
   "id": "territory-version:netherlands:batavian-republic:1795-1806:administrative",
   "country": "netherlands",
   "role": "source-native",
   "basis": "effective-administration",
   "from": 1795,
   "to": 1806,
   "open": false,
   "status": "partial",
   "support": 1,
   "observations": 0,
   "labelEn": "Batavian Republic",
   "ru": "Батавская республика",
   "en": "Batavian Republic",
   "notesEn": "Archival regime version.",
   "missingEn": "Subunit composition and overseas administration are not exhaustive.",
   "sources": [
    {
     "id": "source:nl-na-regime-inventory-2-01-01-01",
     "title": "Archiefinventaris Wetgevende Colleges der Bataafse Republiek en opvolgende besturen",
     "uri": "https://www.nationaalarchief.nl/onderzoeken/archief/2.01.01.01/download/pdf",
     "locator": "inventory context and printed p.17; rendered annexation checkpoint"
    }
   ]
  },
  {
   "id": "territory-version:netherlands:hna-current-northern:1800-1913:retrospective",
   "country": "netherlands",
   "role": "source-native",
   "basis": "retrospective-analytical",
   "from": 1800,
   "to": 1914,
   "open": false,
   "status": "partial",
   "support": 1,
   "observations": 404,
   "labelEn": "HNA current/northern-Netherlands accounting boundary",
   "ru": "Реконструкция HNA: северные Нидерланды в нынешних границах, 1800-1913",
   "en": "HNA reconstruction: northern Netherlands in current borders, 1800-1913",
   "notesEn": "Belgium and colonies are outside the domestic accounting boundary.",
   "missingEn": "No polygon or component crosswalk accompanies the admitted claim.",
   "sources": [
    {
     "id": "source:smits-horlings-vanzanden-2000-dutch-gnp",
     "title": "Dutch GNP and its Components, 1800-1913",
     "uri": "https://nationalaccounts.niwi.knaw.nl/pdf/newgnp1.pdf",
     "locator": "Table A.1 physical PDF p.122 / printed p.109"
    }
   ]
  },
  {
   "id": "territory-version:netherlands:paping-current-territory:1800-1849:retrospective",
   "country": "netherlands",
   "role": "source-native",
   "basis": "retrospective-analytical",
   "from": 1800,
   "to": 1850,
   "open": false,
   "status": "partial",
   "support": 1,
   "observations": 6,
   "labelEn": "Paping constant current-Netherlands population boundary",
   "ru": "Реконструкция Папинга: нынешняя территория, 1800-1849",
   "en": "Paping reconstruction: current territory, 1800-1849",
   "notesEn": "Constant current-territory author reconstruction.",
   "missingEn": "No typed component crosswalk accompanies the published reconstruction.",
   "sources": [
    {
     "id": "source:paping-2014-dutch-population",
     "title": "General Dutch population development 1400-1850: cities and countryside",
     "uri": "https://pure.rug.nl/ws/portalfiles/portal/15865622/articlesardinie21sep2014.pdf",
     "locator": "Appendix D physical PDF pp.28-29; total Dutch population column"
    }
   ]
  },
  {
   "id": "territory-version:netherlands:cbs-table2:1804-1830:statistical",
   "country": "netherlands",
   "role": "source-native",
   "basis": "statistical-reporting",
   "from": 1804,
   "to": 1831,
   "open": false,
   "status": "partial",
   "support": 1,
   "observations": 27,
   "labelEn": "CBS Table 2 first statistical segment",
   "ru": "Таблица 2 CBS: 1804-1830",
   "en": "CBS Table 2: 1804-1830",
   "notesEn": "Source-native statistical domain; literal level breaks and changing historical composition are not smoothed or relabelled.",
   "missingEn": "Exact component composition is not established by the admitted table passport.",
   "sources": [
    {
     "id": "source:nl-cbs-200-years-1800-1999",
     "title": "200 jaar statistiek in tijdreeksen 1800-1999",
     "uri": "https://www.cbs.nl/nl-nl/publicatie/2000/51/200-jaar-statistiek-in-tijdreeksen",
     "locator": "Table 2, physical PDF p.14, column 1 Inwoners; definition note physical p.16"
    }
   ]
  },
  {
   "id": "territory-version:netherlands:kingdom-holland:1806-1810:administrative",
   "country": "netherlands",
   "role": "source-native",
   "basis": "effective-administration",
   "from": 1806,
   "to": 1810,
   "open": false,
   "status": "partial",
   "support": 1,
   "observations": 0,
   "labelEn": "Kingdom of Holland",
   "ru": "Королевство Голландия (1806-1810)",
   "en": "Kingdom of Holland (1806-1810)",
   "notesEn": "Archival regime version.",
   "missingEn": "Subunit composition is not exhaustive.",
   "sources": [
    {
     "id": "source:nl-na-regime-inventory-2-01-01-01",
     "title": "Archiefinventaris Wetgevende Colleges der Bataafse Republiek en opvolgende besturen",
     "uri": "https://www.nationaalarchief.nl/onderzoeken/archief/2.01.01.01/download/pdf",
     "locator": "inventory context and printed p.17; rendered annexation checkpoint"
    }
   ]
  },
  {
   "id": "territory-version:netherlands:french-annexation:1810-1813:administrative",
   "country": "netherlands",
   "role": "source-native",
   "basis": "effective-administration",
   "from": 1810,
   "to": 1813,
   "open": false,
   "status": "partial",
   "support": 1,
   "observations": 0,
   "labelEn": "Dutch departments under French annexation",
   "ru": "Французская аннексия (1810-1813)",
   "en": "French annexation (1810-1813)",
   "notesEn": "Annexed administrative domain.",
   "missingEn": "Department-level membership is not encoded.",
   "sources": [
    {
     "id": "source:nl-na-regime-inventory-2-01-01-01",
     "title": "Archiefinventaris Wetgevende Colleges der Bataafse Republiek en opvolgende besturen",
     "uri": "https://www.nationaalarchief.nl/onderzoeken/archief/2.01.01.01/download/pdf",
     "locator": "inventory context and printed p.17; rendered annexation checkpoint"
    }
   ]
  },
  {
   "id": "territory-version:netherlands:sovereign-principality:1813-1815:administrative",
   "country": "netherlands",
   "role": "source-native",
   "basis": "effective-administration",
   "from": 1813,
   "to": 1815,
   "open": false,
   "status": "partial",
   "support": 2,
   "observations": 0,
   "labelEn": "Sovereign Principality of the United Netherlands",
   "ru": "Суверенное княжество (1813-1815)",
   "en": "Sovereign principality (1813-1815)",
   "notesEn": "Transitional northern polity.",
   "missingEn": "Exact constitutional component set is not encoded.",
   "sources": [
    {
     "id": "source:nl-na-regime-inventory-2-01-01-01",
     "title": "Archiefinventaris Wetgevende Colleges der Bataafse Republiek en opvolgende besturen",
     "uri": "https://www.nationaalarchief.nl/onderzoeken/archief/2.01.01.01/download/pdf",
     "locator": "inventory context and printed p.17; rendered annexation checkpoint"
    },
    {
     "id": "source:nl-na-treaty-inventory-2-05-02",
     "title": "Inventaris van verdragen en ratificaties",
     "uri": "https://www.nationaalarchief.nl/onderzoeken/archief/2.05.02/download/pdf",
     "locator": "inventory printed pp.13 and 26; 1815 instruments and 1839 treaty/ratification entries"
    }
   ]
  },
  {
   "id": "territory-version:netherlands:united-kingdom:1815-1830:legal",
   "country": "netherlands",
   "role": "source-native",
   "basis": "legal",
   "from": 1815,
   "to": 1830,
   "open": false,
   "status": "partial",
   "support": 2,
   "observations": 0,
   "labelEn": "United Kingdom of the Netherlands",
   "ru": "Соединённое королевство Нидерландов (1815-1830)",
   "en": "United Kingdom of the Netherlands (1815-1830)",
   "notesEn": "Political union is not HNA domestic territory.",
   "missingEn": "Luxembourg relationship and overseas scope vary by source.",
   "sources": [
    {
     "id": "source:nl-na-treaty-inventory-2-05-02",
     "title": "Inventaris van verdragen en ratificaties",
     "uri": "https://www.nationaalarchief.nl/onderzoeken/archief/2.05.02/download/pdf",
     "locator": "inventory printed pp.13 and 26; 1815 instruments and 1839 treaty/ratification entries"
    },
    {
     "id": "source:smits-horlings-vanzanden-2000-dutch-gnp",
     "title": "Dutch GNP and its Components, 1800-1913",
     "uri": "https://nationalaccounts.niwi.knaw.nl/pdf/newgnp1.pdf",
     "locator": "Table A.1 physical PDF p.122 / printed p.109"
    }
   ]
  },
  {
   "id": "territory-version:netherlands:de-facto-separation:1830-1839:effective",
   "country": "netherlands",
   "role": "source-native",
   "basis": "effective-administration",
   "from": 1830,
   "to": 1839,
   "open": false,
   "status": "partial",
   "support": 1,
   "observations": 0,
   "labelEn": "Northern administration after Belgian de-facto separation",
   "ru": "Нидерланды после фактического отделения Бельгии",
   "en": "Netherlands after the de facto separation of Belgium",
   "notesEn": "Legal and effective versions differ.",
   "missingEn": "Limburg and Luxembourg partitions remain unsettled in this interval.",
   "sources": [
    {
     "id": "source:nl-na-treaty-inventory-2-05-02",
     "title": "Inventaris van verdragen en ratificaties",
     "uri": "https://www.nationaalarchief.nl/onderzoeken/archief/2.05.02/download/pdf",
     "locator": "inventory printed pp.13 and 26; 1815 instruments and 1839 treaty/ratification entries"
    }
   ]
  },
  {
   "id": "territory-version:netherlands:cbs-table2:1831-1839:statistical",
   "country": "netherlands",
   "role": "source-native",
   "basis": "statistical-reporting",
   "from": 1831,
   "to": 1840,
   "open": false,
   "status": "partial",
   "support": 1,
   "observations": 9,
   "labelEn": "CBS Table 2 second/inter-break statistical segment",
   "ru": "Таблица 2 CBS: 1831-1839 (без Бельгии, до договора)",
   "en": "CBS Table 2: 1831-1839 (without Belgium, before the treaty)",
   "notesEn": "Source-native statistical domain; literal level breaks and changing historical composition are not smoothed or relabelled.",
   "missingEn": "Exact component composition is not established by the admitted table passport.",
   "sources": [
    {
     "id": "source:nl-cbs-200-years-1800-1999",
     "title": "200 jaar statistiek in tijdreeksen 1800-1999",
     "uri": "https://www.cbs.nl/nl-nl/publicatie/2000/51/200-jaar-statistiek-in-tijdreeksen",
     "locator": "Table 2, physical PDF p.14, column 1 Inwoners; definition note physical p.16"
    }
   ]
  },
  {
   "id": "territory-version:netherlands:post-treaty:1839-1890:legal",
   "country": "netherlands",
   "role": "source-native",
   "basis": "legal",
   "from": 1839,
   "to": 1890,
   "open": false,
   "status": "partial",
   "support": 1,
   "observations": 0,
   "labelEn": "Kingdom of the Netherlands after the 1839 treaty",
   "ru": "Нидерланды по договору 1839 (с Люксембургом в личной унии)",
   "en": "Netherlands under the 1839 treaty (Luxembourg in personal union)",
   "notesEn": "Belgium is excluded and Luxembourg remains separate.",
   "missingEn": "Province geometry and overseas composition are not exhaustive.",
   "sources": [
    {
     "id": "source:nl-na-treaty-inventory-2-05-02",
     "title": "Inventaris van verdragen en ratificaties",
     "uri": "https://www.nationaalarchief.nl/onderzoeken/archief/2.05.02/download/pdf",
     "locator": "inventory printed pp.13 and 26; 1815 instruments and 1839 treaty/ratification entries"
    }
   ]
  },
  {
   "id": "territory-version:netherlands:cbs-table2:1840-1875:statistical",
   "country": "netherlands",
   "role": "source-native",
   "basis": "statistical-reporting",
   "from": 1840,
   "to": 1876,
   "open": false,
   "status": "partial",
   "support": 1,
   "observations": 36,
   "labelEn": "CBS Table 2 post-break statistical segment",
   "ru": "Таблица 2 CBS: 1840-1875",
   "en": "CBS Table 2: 1840-1875",
   "notesEn": "Source-native statistical domain; literal level breaks and changing historical composition are not smoothed or relabelled.",
   "missingEn": "Exact component composition is not established by the admitted table passport.",
   "sources": [
    {
     "id": "source:nl-cbs-200-years-1800-1999",
     "title": "200 jaar statistiek in tijdreeksen 1800-1999",
     "uri": "https://www.cbs.nl/nl-nl/publicatie/2000/51/200-jaar-statistiek-in-tijdreeksen",
     "locator": "Table 2, physical PDF p.14, column 1 Inwoners; definition note physical p.16"
    }
   ]
  },
  {
   "id": "territory-version:netherlands:post-personal-union:1890-1900:legal",
   "country": "netherlands",
   "role": "source-native",
   "basis": "legal",
   "from": 1890,
   "to": null,
   "open": true,
   "status": "partial",
   "support": 2,
   "observations": 0,
   "labelEn": "Kingdom of the Netherlands after the Luxembourg personal union",
   "ru": "Нидерланды после 1890 без Люксембурга",
   "en": "Netherlands after 1890, without Luxembourg",
   "notesEn": "European and overseas scopes remain separate.",
   "missingEn": "The 1890 succession instrument and full component geometry are not admitted.",
   "sources": [
    {
     "id": "source:nl-na-treaty-inventory-2-05-02",
     "title": "Inventaris van verdragen en ratificaties",
     "uri": "https://www.nationaalarchief.nl/onderzoeken/archief/2.05.02/download/pdf",
     "locator": "inventory printed pp.13 and 26; 1815 instruments and 1839 treaty/ratification entries"
    },
    {
     "id": "source:nl-cbs-200-years-1800-1999",
     "title": "200 jaar statistiek in tijdreeksen 1800-1999",
     "uri": "https://www.cbs.nl/nl-nl/publicatie/2000/51/200-jaar-statistiek-in-tijdreeksen",
     "locator": "Table 2 physical PDF pp.14-16 and table notes"
    }
   ]
  },
  {
   "id": "territory-version:netherlands:european-composition-1900:effective-target",
   "country": "netherlands",
   "role": "retrospective-target",
   "basis": "effective-administration",
   "from": 1800,
   "to": 1901,
   "open": false,
   "status": "partial",
   "support": 2,
   "observations": 0,
   "labelEn": "netherlands European composition vintage 1900 (effective branch)",
   "ru": "Европейские Нидерланды в границах 1900 (фактическая ветвь)",
   "en": "European Netherlands in 1900 composition (effective branch)",
   "notesEn": "Composition vintage is 1900-12-31; population universe and stock reference time remain unselected.",
   "missingEn": "No exhaustive component geometry or proof that legal, effective and statistical sets coincide.",
   "sources": [
    {
     "id": "source:nl-na-treaty-inventory-2-05-02",
     "title": "Inventaris van verdragen en ratificaties",
     "uri": "https://www.nationaalarchief.nl/onderzoeken/archief/2.05.02/download/pdf",
     "locator": "inventory printed pp.13 and 26; 1815 instruments and 1839 treaty/ratification entries"
    },
    {
     "id": "source:nl-cbs-200-years-1800-1999",
     "title": "200 jaar statistiek in tijdreeksen 1800-1999",
     "uri": "https://www.cbs.nl/nl-nl/publicatie/2000/51/200-jaar-statistiek-in-tijdreeksen",
     "locator": "Table 2 physical PDF pp.14-16 and table notes"
    }
   ]
  },
  {
   "id": "territory-version:netherlands:european-composition-1900:legal-target",
   "country": "netherlands",
   "role": "retrospective-target",
   "basis": "legal",
   "from": 1800,
   "to": 1901,
   "open": false,
   "status": "partial",
   "support": 2,
   "observations": 0,
   "labelEn": "netherlands European composition vintage 1900 (legal branch)",
   "ru": "Европейские Нидерланды в границах 1900 (правовая ветвь)",
   "en": "European Netherlands in 1900 composition (legal branch)",
   "notesEn": "Composition vintage is 1900-12-31; population universe and stock reference time remain unselected.",
   "missingEn": "No exhaustive component geometry or proof that legal, effective and statistical sets coincide.",
   "sources": [
    {
     "id": "source:nl-na-treaty-inventory-2-05-02",
     "title": "Inventaris van verdragen en ratificaties",
     "uri": "https://www.nationaalarchief.nl/onderzoeken/archief/2.05.02/download/pdf",
     "locator": "inventory printed pp.13 and 26; 1815 instruments and 1839 treaty/ratification entries"
    },
    {
     "id": "source:nl-cbs-200-years-1800-1999",
     "title": "200 jaar statistiek in tijdreeksen 1800-1999",
     "uri": "https://www.cbs.nl/nl-nl/publicatie/2000/51/200-jaar-statistiek-in-tijdreeksen",
     "locator": "Table 2 physical PDF pp.14-16 and table notes"
    }
   ]
  },
  {
   "id": "territory-version:netherlands:european-composition-1900:statistical-target",
   "country": "netherlands",
   "role": "retrospective-target",
   "basis": "statistical-reporting",
   "from": 1800,
   "to": 1901,
   "open": false,
   "status": "partial",
   "support": 2,
   "observations": 0,
   "labelEn": "netherlands European composition vintage 1900 (statistical branch)",
   "ru": "Европейские Нидерланды в границах 1900 (статистическая ветвь)",
   "en": "European Netherlands in 1900 composition (statistical branch)",
   "notesEn": "Composition vintage is 1900-12-31; population universe and stock reference time remain unselected.",
   "missingEn": "No exhaustive component geometry or proof that legal, effective and statistical sets coincide.",
   "sources": [
    {
     "id": "source:nl-na-treaty-inventory-2-05-02",
     "title": "Inventaris van verdragen en ratificaties",
     "uri": "https://www.nationaalarchief.nl/onderzoeken/archief/2.05.02/download/pdf",
     "locator": "inventory printed pp.13 and 26; 1815 instruments and 1839 treaty/ratification entries"
    },
    {
     "id": "source:nl-cbs-200-years-1800-1999",
     "title": "200 jaar statistiek in tijdreeksen 1800-1999",
     "uri": "https://www.cbs.nl/nl-nl/publicatie/2000/51/200-jaar-statistiek-in-tijdreeksen",
     "locator": "Table 2 physical PDF pp.14-16 and table notes"
    }
   ]
  }
 ],
 "crosswalks": [
  {
   "id": "territorial-crosswalk:dg1d:territory-version-belgium-annuaire-births-1840-1873-statistical:to:territory-version-belgium-european-composition-1900-effective-target",
   "country": "belgium",
   "from": "territory-version:belgium:annuaire-births-1840-1873:statistical",
   "to": "territory-version:belgium:european-composition-1900:effective-target",
   "concepts": [
    {
     "ru": "рождения",
     "en": "live births"
    }
   ],
   "completeness": "partial",
   "unmatched": "unknown",
   "numerical": "unavailable",
   "uncertainty": "qualitative-unknown",
   "components": 3,
   "from_y": 1840,
   "to_y": 1874,
   "sources": [
    {
     "id": "source:belgium-statbel-annuaire-1874",
     "title": "Annuaire statistique de la Belgique, cinquième année—1874",
     "uri": "https://wiki.statbel.fgov.be/wiki/Brochure_1874_fr",
     "locator": "title page PDF p.4 and national/provincial table headings"
    },
    {
     "id": "source:treaty-belgium-netherlands-1839",
     "title": "Traité entre la Belgique et les Pays-Bas du 19 avril 1839",
     "uri": "https://fdfa.be/nl/vredesverdrag-tussen-belgie-en-nederland",
     "locator": "official French treaty scan PDF pp.1-2, Articles 1-4; signature 1839-04-19 and ratification/effect 1839-06-08"
    }
   ]
  },
  {
   "id": "territorial-crosswalk:dg1d:territory-version-belgium-annuaire-births-1840-1873-statistical:to:territory-version-belgium-european-composition-1900-legal-target",
   "country": "belgium",
   "from": "territory-version:belgium:annuaire-births-1840-1873:statistical",
   "to": "territory-version:belgium:european-composition-1900:legal-target",
   "concepts": [
    {
     "ru": "рождения",
     "en": "live births"
    }
   ],
   "completeness": "partial",
   "unmatched": "unknown",
   "numerical": "unavailable",
   "uncertainty": "qualitative-unknown",
   "components": 3,
   "from_y": 1840,
   "to_y": 1874,
   "sources": [
    {
     "id": "source:belgium-statbel-annuaire-1874",
     "title": "Annuaire statistique de la Belgique, cinquième année—1874",
     "uri": "https://wiki.statbel.fgov.be/wiki/Brochure_1874_fr",
     "locator": "title page PDF p.4 and national/provincial table headings"
    },
    {
     "id": "source:treaty-belgium-netherlands-1839",
     "title": "Traité entre la Belgique et les Pays-Bas du 19 avril 1839",
     "uri": "https://fdfa.be/nl/vredesverdrag-tussen-belgie-en-nederland",
     "locator": "official French treaty scan PDF pp.1-2, Articles 1-4; signature 1839-04-19 and ratification/effect 1839-06-08"
    }
   ]
  },
  {
   "id": "territorial-crosswalk:dg1d:territory-version-belgium-annuaire-births-1840-1873-statistical:to:territory-version-belgium-european-composition-1900-statistical-target",
   "country": "belgium",
   "from": "territory-version:belgium:annuaire-births-1840-1873:statistical",
   "to": "territory-version:belgium:european-composition-1900:statistical-target",
   "concepts": [
    {
     "ru": "рождения",
     "en": "live births"
    }
   ],
   "completeness": "partial",
   "unmatched": "unknown",
   "numerical": "unavailable",
   "uncertainty": "qualitative-unknown",
   "components": 3,
   "from_y": 1840,
   "to_y": 1874,
   "sources": [
    {
     "id": "source:belgium-statbel-annuaire-1874",
     "title": "Annuaire statistique de la Belgique, cinquième année—1874",
     "uri": "https://wiki.statbel.fgov.be/wiki/Brochure_1874_fr",
     "locator": "title page PDF p.4 and national/provincial table headings"
    },
    {
     "id": "source:treaty-belgium-netherlands-1839",
     "title": "Traité entre la Belgique et les Pays-Bas du 19 avril 1839",
     "uri": "https://fdfa.be/nl/vredesverdrag-tussen-belgie-en-nederland",
     "locator": "official French treaty scan PDF pp.1-2, Articles 1-4; signature 1839-04-19 and ratification/effect 1839-06-08"
    }
   ]
  },
  {
   "id": "territorial-crosswalk:dg1d:territory-version-belgium-quetelet-marriages-1803-1829-statistical:to:territory-version-belgium-european-composition-1900-effective-target",
   "country": "belgium",
   "from": "territory-version:belgium:quetelet-marriages-1803-1829:statistical",
   "to": "territory-version:belgium:european-composition-1900:effective-target",
   "concepts": [
    {
     "ru": "браки",
     "en": "marriages"
    }
   ],
   "completeness": "partial",
   "unmatched": "unknown",
   "numerical": "unavailable",
   "uncertainty": "qualitative-unknown",
   "components": 3,
   "from_y": 1803,
   "to_y": 1830,
   "sources": [
    {
     "id": "source:belgium-statbel-annuaire-1874",
     "title": "Annuaire statistique de la Belgique, cinquième année—1874",
     "uri": "https://wiki.statbel.fgov.be/wiki/Brochure_1874_fr",
     "locator": "title page PDF p.4 and national/provincial table headings"
    },
    {
     "id": "source:treaty-belgium-netherlands-1839",
     "title": "Traité entre la Belgique et les Pays-Bas du 19 avril 1839",
     "uri": "https://fdfa.be/nl/vredesverdrag-tussen-belgie-en-nederland",
     "locator": "official French treaty scan PDF pp.1-2, Articles 1-4; signature 1839-04-19 and ratification/effect 1839-06-08"
    },
    {
     "id": "source:quetelet-1832-population-belgium",
     "title": "Recherches sur la reproduction et la mortalité de l'homme aux différents âges, et sur la population de la Belgique",
     "uri": "https://archive.org/details/recherchessurlar00quet",
     "locator": "printed p.23 / PDF p.33"
    }
   ]
  },
  {
   "id": "territorial-crosswalk:dg1d:territory-version-belgium-quetelet-marriages-1803-1829-statistical:to:territory-version-belgium-european-composition-1900-legal-target",
   "country": "belgium",
   "from": "territory-version:belgium:quetelet-marriages-1803-1829:statistical",
   "to": "territory-version:belgium:european-composition-1900:legal-target",
   "concepts": [
    {
     "ru": "браки",
     "en": "marriages"
    }
   ],
   "completeness": "partial",
   "unmatched": "unknown",
   "numerical": "unavailable",
   "uncertainty": "qualitative-unknown",
   "components": 3,
   "from_y": 1803,
   "to_y": 1830,
   "sources": [
    {
     "id": "source:belgium-statbel-annuaire-1874",
     "title": "Annuaire statistique de la Belgique, cinquième année—1874",
     "uri": "https://wiki.statbel.fgov.be/wiki/Brochure_1874_fr",
     "locator": "title page PDF p.4 and national/provincial table headings"
    },
    {
     "id": "source:treaty-belgium-netherlands-1839",
     "title": "Traité entre la Belgique et les Pays-Bas du 19 avril 1839",
     "uri": "https://fdfa.be/nl/vredesverdrag-tussen-belgie-en-nederland",
     "locator": "official French treaty scan PDF pp.1-2, Articles 1-4; signature 1839-04-19 and ratification/effect 1839-06-08"
    },
    {
     "id": "source:quetelet-1832-population-belgium",
     "title": "Recherches sur la reproduction et la mortalité de l'homme aux différents âges, et sur la population de la Belgique",
     "uri": "https://archive.org/details/recherchessurlar00quet",
     "locator": "printed p.23 / PDF p.33"
    }
   ]
  },
  {
   "id": "territorial-crosswalk:dg1d:territory-version-belgium-quetelet-marriages-1803-1829-statistical:to:territory-version-belgium-european-composition-1900-statistical-target",
   "country": "belgium",
   "from": "territory-version:belgium:quetelet-marriages-1803-1829:statistical",
   "to": "territory-version:belgium:european-composition-1900:statistical-target",
   "concepts": [
    {
     "ru": "браки",
     "en": "marriages"
    }
   ],
   "completeness": "partial",
   "unmatched": "unknown",
   "numerical": "unavailable",
   "uncertainty": "qualitative-unknown",
   "components": 3,
   "from_y": 1803,
   "to_y": 1830,
   "sources": [
    {
     "id": "source:belgium-statbel-annuaire-1874",
     "title": "Annuaire statistique de la Belgique, cinquième année—1874",
     "uri": "https://wiki.statbel.fgov.be/wiki/Brochure_1874_fr",
     "locator": "title page PDF p.4 and national/provincial table headings"
    },
    {
     "id": "source:treaty-belgium-netherlands-1839",
     "title": "Traité entre la Belgique et les Pays-Bas du 19 avril 1839",
     "uri": "https://fdfa.be/nl/vredesverdrag-tussen-belgie-en-nederland",
     "locator": "official French treaty scan PDF pp.1-2, Articles 1-4; signature 1839-04-19 and ratification/effect 1839-06-08"
    },
    {
     "id": "source:quetelet-1832-population-belgium",
     "title": "Recherches sur la reproduction et la mortalité de l'homme aux différents âges, et sur la population de la Belgique",
     "uri": "https://archive.org/details/recherchessurlar00quet",
     "locator": "printed p.23 / PDF p.33"
    }
   ]
  },
  {
   "id": "territorial-crosswalk:dg1d:territory-version-belgium-quetelet-population-1830-statistical:to:territory-version-belgium-european-composition-1900-effective-target",
   "country": "belgium",
   "from": "territory-version:belgium:quetelet-population-1830:statistical",
   "to": "territory-version:belgium:european-composition-1900:effective-target",
   "concepts": [
    {
     "ru": "население",
     "en": "population"
    }
   ],
   "completeness": "partial",
   "unmatched": "unknown",
   "numerical": "unavailable",
   "uncertainty": "qualitative-unknown",
   "components": 3,
   "from_y": 1830,
   "to_y": 1830,
   "sources": [
    {
     "id": "source:belgium-statbel-annuaire-1874",
     "title": "Annuaire statistique de la Belgique, cinquième année—1874",
     "uri": "https://wiki.statbel.fgov.be/wiki/Brochure_1874_fr",
     "locator": "title page PDF p.4 and national/provincial table headings"
    },
    {
     "id": "source:treaty-belgium-netherlands-1839",
     "title": "Traité entre la Belgique et les Pays-Bas du 19 avril 1839",
     "uri": "https://fdfa.be/nl/vredesverdrag-tussen-belgie-en-nederland",
     "locator": "official French treaty scan PDF pp.1-2, Articles 1-4; signature 1839-04-19 and ratification/effect 1839-06-08"
    },
    {
     "id": "source:quetelet-1832-population-belgium",
     "title": "Recherches sur la reproduction et la mortalité de l'homme aux différents âges, et sur la population de la Belgique",
     "uri": "https://archive.org/details/recherchessurlar00quet",
     "locator": "printed p.5 / PDF p.15, national table and footnote"
    }
   ]
  },
  {
   "id": "territorial-crosswalk:dg1d:territory-version-belgium-quetelet-population-1830-statistical:to:territory-version-belgium-european-composition-1900-legal-target",
   "country": "belgium",
   "from": "territory-version:belgium:quetelet-population-1830:statistical",
   "to": "territory-version:belgium:european-composition-1900:legal-target",
   "concepts": [
    {
     "ru": "население",
     "en": "population"
    }
   ],
   "completeness": "partial",
   "unmatched": "unknown",
   "numerical": "unavailable",
   "uncertainty": "qualitative-unknown",
   "components": 3,
   "from_y": 1830,
   "to_y": 1830,
   "sources": [
    {
     "id": "source:belgium-statbel-annuaire-1874",
     "title": "Annuaire statistique de la Belgique, cinquième année—1874",
     "uri": "https://wiki.statbel.fgov.be/wiki/Brochure_1874_fr",
     "locator": "title page PDF p.4 and national/provincial table headings"
    },
    {
     "id": "source:treaty-belgium-netherlands-1839",
     "title": "Traité entre la Belgique et les Pays-Bas du 19 avril 1839",
     "uri": "https://fdfa.be/nl/vredesverdrag-tussen-belgie-en-nederland",
     "locator": "official French treaty scan PDF pp.1-2, Articles 1-4; signature 1839-04-19 and ratification/effect 1839-06-08"
    },
    {
     "id": "source:quetelet-1832-population-belgium",
     "title": "Recherches sur la reproduction et la mortalité de l'homme aux différents âges, et sur la population de la Belgique",
     "uri": "https://archive.org/details/recherchessurlar00quet",
     "locator": "printed p.5 / PDF p.15, national table and footnote"
    }
   ]
  },
  {
   "id": "territorial-crosswalk:dg1d:territory-version-belgium-quetelet-population-1830-statistical:to:territory-version-belgium-european-composition-1900-statistical-target",
   "country": "belgium",
   "from": "territory-version:belgium:quetelet-population-1830:statistical",
   "to": "territory-version:belgium:european-composition-1900:statistical-target",
   "concepts": [
    {
     "ru": "население",
     "en": "population"
    }
   ],
   "completeness": "partial",
   "unmatched": "unknown",
   "numerical": "unavailable",
   "uncertainty": "qualitative-unknown",
   "components": 3,
   "from_y": 1830,
   "to_y": 1830,
   "sources": [
    {
     "id": "source:belgium-statbel-annuaire-1874",
     "title": "Annuaire statistique de la Belgique, cinquième année—1874",
     "uri": "https://wiki.statbel.fgov.be/wiki/Brochure_1874_fr",
     "locator": "title page PDF p.4 and national/provincial table headings"
    },
    {
     "id": "source:treaty-belgium-netherlands-1839",
     "title": "Traité entre la Belgique et les Pays-Bas du 19 avril 1839",
     "uri": "https://fdfa.be/nl/vredesverdrag-tussen-belgie-en-nederland",
     "locator": "official French treaty scan PDF pp.1-2, Articles 1-4; signature 1839-04-19 and ratification/effect 1839-06-08"
    },
    {
     "id": "source:quetelet-1832-population-belgium",
     "title": "Recherches sur la reproduction et la mortalité de l'homme aux différents âges, et sur la population de la Belgique",
     "uri": "https://archive.org/details/recherchessurlar00quet",
     "locator": "printed p.5 / PDF p.15, national table and footnote"
    }
   ]
  },
  {
   "id": "territorial-crosswalk:dg1d:territory-version-france-annuaire-table34-1881-1898-statistical:to:territory-version-france-european-composition-1900-effective-target",
   "country": "france",
   "from": "territory-version:france:annuaire-table34:1881-1898:statistical",
   "to": "territory-version:france:european-composition-1900:effective-target",
   "concepts": [
    {
     "ru": "смерти",
     "en": "deaths"
    },
    {
     "ru": "разводы",
     "en": "divorces"
    },
    {
     "ru": "рождения",
     "en": "live births"
    },
    {
     "ru": "браки",
     "en": "marriages"
    },
    {
     "ru": "естественный прирост",
     "en": "natural change"
    },
    {
     "ru": "мертворождения",
     "en": "stillbirths"
    }
   ],
   "completeness": "partial",
   "unmatched": "unknown",
   "numerical": "unavailable",
   "uncertainty": "qualitative-unknown",
   "components": 3,
   "from_y": 1881,
   "to_y": 1899,
   "sources": [
    {
     "id": "source:sgf-annuaire-france-1899",
     "title": "Annuaire statistique de la France, dix-neuvième volume, 1899",
     "uri": "https://www.bnsp.insee.fr/ark:/12148/bpt6k5509059m",
     "locator": "printed pp.32, 320 and 492-493; tables 34 and 357 and Belfort statistical heading"
    },
    {
     "id": "source:france-sardinia-treaty-turin-1860",
     "title": "Gazette des Tribunaux, 13 June 1860: promulgation and text of the Treaty of Turin",
     "uri": "https://data.decalog.net/enap1/Liens/Gazette/18600613.pdf",
     "locator": "Gazette des Tribunaux 13 June 1860, promulgation decree and Treaty of Turin signed 24 March 1860"
    }
   ]
  },
  {
   "id": "territorial-crosswalk:dg1d:territory-version-france-annuaire-table34-1881-1898-statistical:to:territory-version-france-european-composition-1900-legal-target",
   "country": "france",
   "from": "territory-version:france:annuaire-table34:1881-1898:statistical",
   "to": "territory-version:france:european-composition-1900:legal-target",
   "concepts": [
    {
     "ru": "смерти",
     "en": "deaths"
    },
    {
     "ru": "разводы",
     "en": "divorces"
    },
    {
     "ru": "рождения",
     "en": "live births"
    },
    {
     "ru": "браки",
     "en": "marriages"
    },
    {
     "ru": "естественный прирост",
     "en": "natural change"
    },
    {
     "ru": "мертворождения",
     "en": "stillbirths"
    }
   ],
   "completeness": "partial",
   "unmatched": "unknown",
   "numerical": "unavailable",
   "uncertainty": "qualitative-unknown",
   "components": 3,
   "from_y": 1881,
   "to_y": 1899,
   "sources": [
    {
     "id": "source:sgf-annuaire-france-1899",
     "title": "Annuaire statistique de la France, dix-neuvième volume, 1899",
     "uri": "https://www.bnsp.insee.fr/ark:/12148/bpt6k5509059m",
     "locator": "printed pp.32, 320 and 492-493; tables 34 and 357 and Belfort statistical heading"
    },
    {
     "id": "source:france-sardinia-treaty-turin-1860",
     "title": "Gazette des Tribunaux, 13 June 1860: promulgation and text of the Treaty of Turin",
     "uri": "https://data.decalog.net/enap1/Liens/Gazette/18600613.pdf",
     "locator": "Gazette des Tribunaux 13 June 1860, promulgation decree and Treaty of Turin signed 24 March 1860"
    }
   ]
  },
  {
   "id": "territorial-crosswalk:dg1d:territory-version-france-annuaire-table34-1881-1898-statistical:to:territory-version-france-european-composition-1900-statistical-target",
   "country": "france",
   "from": "territory-version:france:annuaire-table34:1881-1898:statistical",
   "to": "territory-version:france:european-composition-1900:statistical-target",
   "concepts": [
    {
     "ru": "смерти",
     "en": "deaths"
    },
    {
     "ru": "разводы",
     "en": "divorces"
    },
    {
     "ru": "рождения",
     "en": "live births"
    },
    {
     "ru": "браки",
     "en": "marriages"
    },
    {
     "ru": "естественный прирост",
     "en": "natural change"
    },
    {
     "ru": "мертворождения",
     "en": "stillbirths"
    }
   ],
   "completeness": "partial",
   "unmatched": "unknown",
   "numerical": "unavailable",
   "uncertainty": "qualitative-unknown",
   "components": 3,
   "from_y": 1881,
   "to_y": 1899,
   "sources": [
    {
     "id": "source:sgf-annuaire-france-1899",
     "title": "Annuaire statistique de la France, dix-neuvième volume, 1899",
     "uri": "https://www.bnsp.insee.fr/ark:/12148/bpt6k5509059m",
     "locator": "printed pp.32, 320 and 492-493; tables 34 and 357 and Belfort statistical heading"
    },
    {
     "id": "source:france-sardinia-treaty-turin-1860",
     "title": "Gazette des Tribunaux, 13 June 1860: promulgation and text of the Treaty of Turin",
     "uri": "https://data.decalog.net/enap1/Liens/Gazette/18600613.pdf",
     "locator": "Gazette des Tribunaux 13 June 1860, promulgation decree and Treaty of Turin signed 24 March 1860"
    }
   ]
  },
  {
   "id": "territorial-crosswalk:dg1d:territory-version-france-sgf-t86-population-1801-1836-statistical:to:territory-version-france-european-composition-1900-effective-target",
   "country": "france",
   "from": "territory-version:france:sgf-t86-population:1801-1836:statistical",
   "to": "territory-version:france:european-composition-1900:effective-target",
   "concepts": [
    {
     "ru": "население",
     "en": "population"
    }
   ],
   "completeness": "partial",
   "unmatched": "unknown",
   "numerical": "unavailable",
   "uncertainty": "qualitative-unknown",
   "components": 3,
   "from_y": 1801,
   "to_y": 1837,
   "sources": [
    {
     "id": "source:sgf-annuaire-france-1899",
     "title": "Annuaire statistique de la France, dix-neuvième volume, 1899",
     "uri": "https://www.bnsp.insee.fr/ark:/12148/bpt6k5509059m",
     "locator": "printed pp.32, 320 and 492-493; tables 34 and 357 and Belfort statistical heading"
    },
    {
     "id": "source:france-sardinia-treaty-turin-1860",
     "title": "Gazette des Tribunaux, 13 June 1860: promulgation and text of the Treaty of Turin",
     "uri": "https://data.decalog.net/enap1/Liens/Gazette/18600613.pdf",
     "locator": "Gazette des Tribunaux 13 June 1860, promulgation decree and Treaty of Turin signed 24 March 1860"
    },
    {
     "id": "source:insee-sgf-france-historical-1800-1925",
     "title": "Données historiques de la Statistique générale de France, 1800-1925",
     "uri": "https://www.insee.fr/fr/statistiques/2591397",
     "locator": "_T86!CU9; variable V100; label workbook Feuil1 rows 285-289"
    }
   ]
  },
  {
   "id": "territorial-crosswalk:dg1d:territory-version-france-sgf-t86-population-1801-1836-statistical:to:territory-version-france-european-composition-1900-legal-target",
   "country": "france",
   "from": "territory-version:france:sgf-t86-population:1801-1836:statistical",
   "to": "territory-version:france:european-composition-1900:legal-target",
   "concepts": [
    {
     "ru": "население",
     "en": "population"
    }
   ],
   "completeness": "partial",
   "unmatched": "unknown",
   "numerical": "unavailable",
   "uncertainty": "qualitative-unknown",
   "components": 3,
   "from_y": 1801,
   "to_y": 1837,
   "sources": [
    {
     "id": "source:sgf-annuaire-france-1899",
     "title": "Annuaire statistique de la France, dix-neuvième volume, 1899",
     "uri": "https://www.bnsp.insee.fr/ark:/12148/bpt6k5509059m",
     "locator": "printed pp.32, 320 and 492-493; tables 34 and 357 and Belfort statistical heading"
    },
    {
     "id": "source:france-sardinia-treaty-turin-1860",
     "title": "Gazette des Tribunaux, 13 June 1860: promulgation and text of the Treaty of Turin",
     "uri": "https://data.decalog.net/enap1/Liens/Gazette/18600613.pdf",
     "locator": "Gazette des Tribunaux 13 June 1860, promulgation decree and Treaty of Turin signed 24 March 1860"
    },
    {
     "id": "source:insee-sgf-france-historical-1800-1925",
     "title": "Données historiques de la Statistique générale de France, 1800-1925",
     "uri": "https://www.insee.fr/fr/statistiques/2591397",
     "locator": "_T86!CU9; variable V100; label workbook Feuil1 rows 285-289"
    }
   ]
  },
  {
   "id": "territorial-crosswalk:dg1d:territory-version-france-sgf-t86-population-1801-1836-statistical:to:territory-version-france-european-composition-1900-statistical-target",
   "country": "france",
   "from": "territory-version:france:sgf-t86-population:1801-1836:statistical",
   "to": "territory-version:france:european-composition-1900:statistical-target",
   "concepts": [
    {
     "ru": "население",
     "en": "population"
    }
   ],
   "completeness": "partial",
   "unmatched": "unknown",
   "numerical": "unavailable",
   "uncertainty": "qualitative-unknown",
   "components": 3,
   "from_y": 1801,
   "to_y": 1837,
   "sources": [
    {
     "id": "source:sgf-annuaire-france-1899",
     "title": "Annuaire statistique de la France, dix-neuvième volume, 1899",
     "uri": "https://www.bnsp.insee.fr/ark:/12148/bpt6k5509059m",
     "locator": "printed pp.32, 320 and 492-493; tables 34 and 357 and Belfort statistical heading"
    },
    {
     "id": "source:france-sardinia-treaty-turin-1860",
     "title": "Gazette des Tribunaux, 13 June 1860: promulgation and text of the Treaty of Turin",
     "uri": "https://data.decalog.net/enap1/Liens/Gazette/18600613.pdf",
     "locator": "Gazette des Tribunaux 13 June 1860, promulgation decree and Treaty of Turin signed 24 March 1860"
    },
    {
     "id": "source:insee-sgf-france-historical-1800-1925",
     "title": "Données historiques de la Statistique générale de France, 1800-1925",
     "uri": "https://www.insee.fr/fr/statistiques/2591397",
     "locator": "_T86!CU9; variable V100; label workbook Feuil1 rows 285-289"
    }
   ]
  },
  {
   "id": "territorial-crosswalk:dg1d:territory-version-france-sgf-t87-births-1800-1820-statistical:to:territory-version-france-european-composition-1900-effective-target",
   "country": "france",
   "from": "territory-version:france:sgf-t87-births:1800-1820:statistical",
   "to": "territory-version:france:european-composition-1900:effective-target",
   "concepts": [
    {
     "ru": "рождения",
     "en": "live births"
    }
   ],
   "completeness": "partial",
   "unmatched": "unknown",
   "numerical": "unavailable",
   "uncertainty": "qualitative-unknown",
   "components": 3,
   "from_y": 1800,
   "to_y": 1821,
   "sources": [
    {
     "id": "source:sgf-annuaire-france-1899",
     "title": "Annuaire statistique de la France, dix-neuvième volume, 1899",
     "uri": "https://www.bnsp.insee.fr/ark:/12148/bpt6k5509059m",
     "locator": "printed pp.32, 320 and 492-493; tables 34 and 357 and Belfort statistical heading"
    },
    {
     "id": "source:france-sardinia-treaty-turin-1860",
     "title": "Gazette des Tribunaux, 13 June 1860: promulgation and text of the Treaty of Turin",
     "uri": "https://data.decalog.net/enap1/Liens/Gazette/18600613.pdf",
     "locator": "Gazette des Tribunaux 13 June 1860, promulgation decree and Treaty of Turin signed 24 March 1860"
    },
    {
     "id": "source:insee-sgf-france-historical-1800-1925",
     "title": "Données historiques de la Statistique générale de France, 1800-1925",
     "uri": "https://www.insee.fr/fr/statistiques/2591397",
     "locator": "_T87!F9; variable V7; vital-label workbook Feuil1 rows 365-366"
    }
   ]
  },
  {
   "id": "territorial-crosswalk:dg1d:territory-version-france-sgf-t87-births-1800-1820-statistical:to:territory-version-france-european-composition-1900-legal-target",
   "country": "france",
   "from": "territory-version:france:sgf-t87-births:1800-1820:statistical",
   "to": "territory-version:france:european-composition-1900:legal-target",
   "concepts": [
    {
     "ru": "рождения",
     "en": "live births"
    }
   ],
   "completeness": "partial",
   "unmatched": "unknown",
   "numerical": "unavailable",
   "uncertainty": "qualitative-unknown",
   "components": 3,
   "from_y": 1800,
   "to_y": 1821,
   "sources": [
    {
     "id": "source:sgf-annuaire-france-1899",
     "title": "Annuaire statistique de la France, dix-neuvième volume, 1899",
     "uri": "https://www.bnsp.insee.fr/ark:/12148/bpt6k5509059m",
     "locator": "printed pp.32, 320 and 492-493; tables 34 and 357 and Belfort statistical heading"
    },
    {
     "id": "source:france-sardinia-treaty-turin-1860",
     "title": "Gazette des Tribunaux, 13 June 1860: promulgation and text of the Treaty of Turin",
     "uri": "https://data.decalog.net/enap1/Liens/Gazette/18600613.pdf",
     "locator": "Gazette des Tribunaux 13 June 1860, promulgation decree and Treaty of Turin signed 24 March 1860"
    },
    {
     "id": "source:insee-sgf-france-historical-1800-1925",
     "title": "Données historiques de la Statistique générale de France, 1800-1925",
     "uri": "https://www.insee.fr/fr/statistiques/2591397",
     "locator": "_T87!F9; variable V7; vital-label workbook Feuil1 rows 365-366"
    }
   ]
  },
  {
   "id": "territorial-crosswalk:dg1d:territory-version-france-sgf-t87-births-1800-1820-statistical:to:territory-version-france-european-composition-1900-statistical-target",
   "country": "france",
   "from": "territory-version:france:sgf-t87-births:1800-1820:statistical",
   "to": "territory-version:france:european-composition-1900:statistical-target",
   "concepts": [
    {
     "ru": "рождения",
     "en": "live births"
    }
   ],
   "completeness": "partial",
   "unmatched": "unknown",
   "numerical": "unavailable",
   "uncertainty": "qualitative-unknown",
   "components": 3,
   "from_y": 1800,
   "to_y": 1821,
   "sources": [
    {
     "id": "source:sgf-annuaire-france-1899",
     "title": "Annuaire statistique de la France, dix-neuvième volume, 1899",
     "uri": "https://www.bnsp.insee.fr/ark:/12148/bpt6k5509059m",
     "locator": "printed pp.32, 320 and 492-493; tables 34 and 357 and Belfort statistical heading"
    },
    {
     "id": "source:france-sardinia-treaty-turin-1860",
     "title": "Gazette des Tribunaux, 13 June 1860: promulgation and text of the Treaty of Turin",
     "uri": "https://data.decalog.net/enap1/Liens/Gazette/18600613.pdf",
     "locator": "Gazette des Tribunaux 13 June 1860, promulgation decree and Treaty of Turin signed 24 March 1860"
    },
    {
     "id": "source:insee-sgf-france-historical-1800-1925",
     "title": "Données historiques de la Statistique générale de France, 1800-1925",
     "uri": "https://www.insee.fr/fr/statistiques/2591397",
     "locator": "_T87!F9; variable V7; vital-label workbook Feuil1 rows 365-366"
    }
   ]
  },
  {
   "id": "territorial-crosswalk:dg1d:territory-version-netherlands-cbs-table2-1804-1830-statistical:to:territory-version-netherlands-european-composition-1900-effective-target",
   "country": "netherlands",
   "from": "territory-version:netherlands:cbs-table2:1804-1830:statistical",
   "to": "territory-version:netherlands:european-composition-1900:effective-target",
   "concepts": [
    {
     "ru": "население",
     "en": "population"
    }
   ],
   "completeness": "partial",
   "unmatched": "unknown",
   "numerical": "unavailable",
   "uncertainty": "qualitative-unknown",
   "components": 3,
   "from_y": 1804,
   "to_y": 1830,
   "sources": [
    {
     "id": "source:nl-cbs-200-years-1800-1999",
     "title": "200 jaar statistiek in tijdreeksen 1800-1999",
     "uri": "https://www.cbs.nl/nl-nl/publicatie/2000/51/200-jaar-statistiek-in-tijdreeksen",
     "locator": "Table 2 physical PDF pp.14-16 and table notes"
    },
    {
     "id": "source:nl-na-treaty-inventory-2-05-02",
     "title": "Inventaris van verdragen en ratificaties",
     "uri": "https://www.nationaalarchief.nl/onderzoeken/archief/2.05.02/download/pdf",
     "locator": "inventory printed pp.13 and 26; 1815 instruments and 1839 treaty/ratification entries"
    }
   ]
  },
  {
   "id": "territorial-crosswalk:dg1d:territory-version-netherlands-cbs-table2-1804-1830-statistical:to:territory-version-netherlands-european-composition-1900-legal-target",
   "country": "netherlands",
   "from": "territory-version:netherlands:cbs-table2:1804-1830:statistical",
   "to": "territory-version:netherlands:european-composition-1900:legal-target",
   "concepts": [
    {
     "ru": "население",
     "en": "population"
    }
   ],
   "completeness": "partial",
   "unmatched": "unknown",
   "numerical": "unavailable",
   "uncertainty": "qualitative-unknown",
   "components": 3,
   "from_y": 1804,
   "to_y": 1830,
   "sources": [
    {
     "id": "source:nl-cbs-200-years-1800-1999",
     "title": "200 jaar statistiek in tijdreeksen 1800-1999",
     "uri": "https://www.cbs.nl/nl-nl/publicatie/2000/51/200-jaar-statistiek-in-tijdreeksen",
     "locator": "Table 2 physical PDF pp.14-16 and table notes"
    },
    {
     "id": "source:nl-na-treaty-inventory-2-05-02",
     "title": "Inventaris van verdragen en ratificaties",
     "uri": "https://www.nationaalarchief.nl/onderzoeken/archief/2.05.02/download/pdf",
     "locator": "inventory printed pp.13 and 26; 1815 instruments and 1839 treaty/ratification entries"
    }
   ]
  },
  {
   "id": "territorial-crosswalk:dg1d:territory-version-netherlands-cbs-table2-1804-1830-statistical:to:territory-version-netherlands-european-composition-1900-statistical-target",
   "country": "netherlands",
   "from": "territory-version:netherlands:cbs-table2:1804-1830:statistical",
   "to": "territory-version:netherlands:european-composition-1900:statistical-target",
   "concepts": [
    {
     "ru": "население",
     "en": "population"
    }
   ],
   "completeness": "partial",
   "unmatched": "unknown",
   "numerical": "unavailable",
   "uncertainty": "qualitative-unknown",
   "components": 3,
   "from_y": 1804,
   "to_y": 1830,
   "sources": [
    {
     "id": "source:nl-cbs-200-years-1800-1999",
     "title": "200 jaar statistiek in tijdreeksen 1800-1999",
     "uri": "https://www.cbs.nl/nl-nl/publicatie/2000/51/200-jaar-statistiek-in-tijdreeksen",
     "locator": "Table 2 physical PDF pp.14-16 and table notes"
    },
    {
     "id": "source:nl-na-treaty-inventory-2-05-02",
     "title": "Inventaris van verdragen en ratificaties",
     "uri": "https://www.nationaalarchief.nl/onderzoeken/archief/2.05.02/download/pdf",
     "locator": "inventory printed pp.13 and 26; 1815 instruments and 1839 treaty/ratification entries"
    }
   ]
  },
  {
   "id": "territorial-crosswalk:dg1d:territory-version-netherlands-cbs-table2-1831-1839-statistical:to:territory-version-netherlands-european-composition-1900-effective-target",
   "country": "netherlands",
   "from": "territory-version:netherlands:cbs-table2:1831-1839:statistical",
   "to": "territory-version:netherlands:european-composition-1900:effective-target",
   "concepts": [
    {
     "ru": "население",
     "en": "population"
    }
   ],
   "completeness": "partial",
   "unmatched": "unknown",
   "numerical": "unavailable",
   "uncertainty": "qualitative-unknown",
   "components": 3,
   "from_y": 1831,
   "to_y": 1839,
   "sources": [
    {
     "id": "source:nl-cbs-200-years-1800-1999",
     "title": "200 jaar statistiek in tijdreeksen 1800-1999",
     "uri": "https://www.cbs.nl/nl-nl/publicatie/2000/51/200-jaar-statistiek-in-tijdreeksen",
     "locator": "Table 2 physical PDF pp.14-16 and table notes"
    },
    {
     "id": "source:nl-na-treaty-inventory-2-05-02",
     "title": "Inventaris van verdragen en ratificaties",
     "uri": "https://www.nationaalarchief.nl/onderzoeken/archief/2.05.02/download/pdf",
     "locator": "inventory printed pp.13 and 26; 1815 instruments and 1839 treaty/ratification entries"
    }
   ]
  },
  {
   "id": "territorial-crosswalk:dg1d:territory-version-netherlands-cbs-table2-1831-1839-statistical:to:territory-version-netherlands-european-composition-1900-legal-target",
   "country": "netherlands",
   "from": "territory-version:netherlands:cbs-table2:1831-1839:statistical",
   "to": "territory-version:netherlands:european-composition-1900:legal-target",
   "concepts": [
    {
     "ru": "население",
     "en": "population"
    }
   ],
   "completeness": "partial",
   "unmatched": "unknown",
   "numerical": "unavailable",
   "uncertainty": "qualitative-unknown",
   "components": 3,
   "from_y": 1831,
   "to_y": 1839,
   "sources": [
    {
     "id": "source:nl-cbs-200-years-1800-1999",
     "title": "200 jaar statistiek in tijdreeksen 1800-1999",
     "uri": "https://www.cbs.nl/nl-nl/publicatie/2000/51/200-jaar-statistiek-in-tijdreeksen",
     "locator": "Table 2 physical PDF pp.14-16 and table notes"
    },
    {
     "id": "source:nl-na-treaty-inventory-2-05-02",
     "title": "Inventaris van verdragen en ratificaties",
     "uri": "https://www.nationaalarchief.nl/onderzoeken/archief/2.05.02/download/pdf",
     "locator": "inventory printed pp.13 and 26; 1815 instruments and 1839 treaty/ratification entries"
    }
   ]
  },
  {
   "id": "territorial-crosswalk:dg1d:territory-version-netherlands-cbs-table2-1831-1839-statistical:to:territory-version-netherlands-european-composition-1900-statistical-target",
   "country": "netherlands",
   "from": "territory-version:netherlands:cbs-table2:1831-1839:statistical",
   "to": "territory-version:netherlands:european-composition-1900:statistical-target",
   "concepts": [
    {
     "ru": "население",
     "en": "population"
    }
   ],
   "completeness": "partial",
   "unmatched": "unknown",
   "numerical": "unavailable",
   "uncertainty": "qualitative-unknown",
   "components": 3,
   "from_y": 1831,
   "to_y": 1839,
   "sources": [
    {
     "id": "source:nl-cbs-200-years-1800-1999",
     "title": "200 jaar statistiek in tijdreeksen 1800-1999",
     "uri": "https://www.cbs.nl/nl-nl/publicatie/2000/51/200-jaar-statistiek-in-tijdreeksen",
     "locator": "Table 2 physical PDF pp.14-16 and table notes"
    },
    {
     "id": "source:nl-na-treaty-inventory-2-05-02",
     "title": "Inventaris van verdragen en ratificaties",
     "uri": "https://www.nationaalarchief.nl/onderzoeken/archief/2.05.02/download/pdf",
     "locator": "inventory printed pp.13 and 26; 1815 instruments and 1839 treaty/ratification entries"
    }
   ]
  },
  {
   "id": "territorial-crosswalk:dg1d:territory-version-netherlands-cbs-table2-1840-1875-statistical:to:territory-version-netherlands-european-composition-1900-effective-target",
   "country": "netherlands",
   "from": "territory-version:netherlands:cbs-table2:1840-1875:statistical",
   "to": "territory-version:netherlands:european-composition-1900:effective-target",
   "concepts": [
    {
     "ru": "население",
     "en": "population"
    }
   ],
   "completeness": "partial",
   "unmatched": "unknown",
   "numerical": "unavailable",
   "uncertainty": "qualitative-unknown",
   "components": 3,
   "from_y": 1840,
   "to_y": 1875,
   "sources": [
    {
     "id": "source:nl-cbs-200-years-1800-1999",
     "title": "200 jaar statistiek in tijdreeksen 1800-1999",
     "uri": "https://www.cbs.nl/nl-nl/publicatie/2000/51/200-jaar-statistiek-in-tijdreeksen",
     "locator": "Table 2 physical PDF pp.14-16 and table notes"
    },
    {
     "id": "source:nl-na-treaty-inventory-2-05-02",
     "title": "Inventaris van verdragen en ratificaties",
     "uri": "https://www.nationaalarchief.nl/onderzoeken/archief/2.05.02/download/pdf",
     "locator": "inventory printed pp.13 and 26; 1815 instruments and 1839 treaty/ratification entries"
    }
   ]
  },
  {
   "id": "territorial-crosswalk:dg1d:territory-version-netherlands-cbs-table2-1840-1875-statistical:to:territory-version-netherlands-european-composition-1900-legal-target",
   "country": "netherlands",
   "from": "territory-version:netherlands:cbs-table2:1840-1875:statistical",
   "to": "territory-version:netherlands:european-composition-1900:legal-target",
   "concepts": [
    {
     "ru": "население",
     "en": "population"
    }
   ],
   "completeness": "partial",
   "unmatched": "unknown",
   "numerical": "unavailable",
   "uncertainty": "qualitative-unknown",
   "components": 3,
   "from_y": 1840,
   "to_y": 1875,
   "sources": [
    {
     "id": "source:nl-cbs-200-years-1800-1999",
     "title": "200 jaar statistiek in tijdreeksen 1800-1999",
     "uri": "https://www.cbs.nl/nl-nl/publicatie/2000/51/200-jaar-statistiek-in-tijdreeksen",
     "locator": "Table 2 physical PDF pp.14-16 and table notes"
    },
    {
     "id": "source:nl-na-treaty-inventory-2-05-02",
     "title": "Inventaris van verdragen en ratificaties",
     "uri": "https://www.nationaalarchief.nl/onderzoeken/archief/2.05.02/download/pdf",
     "locator": "inventory printed pp.13 and 26; 1815 instruments and 1839 treaty/ratification entries"
    }
   ]
  },
  {
   "id": "territorial-crosswalk:dg1d:territory-version-netherlands-cbs-table2-1840-1875-statistical:to:territory-version-netherlands-european-composition-1900-statistical-target",
   "country": "netherlands",
   "from": "territory-version:netherlands:cbs-table2:1840-1875:statistical",
   "to": "territory-version:netherlands:european-composition-1900:statistical-target",
   "concepts": [
    {
     "ru": "население",
     "en": "population"
    }
   ],
   "completeness": "partial",
   "unmatched": "unknown",
   "numerical": "unavailable",
   "uncertainty": "qualitative-unknown",
   "components": 3,
   "from_y": 1840,
   "to_y": 1875,
   "sources": [
    {
     "id": "source:nl-cbs-200-years-1800-1999",
     "title": "200 jaar statistiek in tijdreeksen 1800-1999",
     "uri": "https://www.cbs.nl/nl-nl/publicatie/2000/51/200-jaar-statistiek-in-tijdreeksen",
     "locator": "Table 2 physical PDF pp.14-16 and table notes"
    },
    {
     "id": "source:nl-na-treaty-inventory-2-05-02",
     "title": "Inventaris van verdragen en ratificaties",
     "uri": "https://www.nationaalarchief.nl/onderzoeken/archief/2.05.02/download/pdf",
     "locator": "inventory printed pp.13 and 26; 1815 instruments and 1839 treaty/ratification entries"
    }
   ]
  },
  {
   "id": "territorial-crosswalk:dg1d:territory-version-netherlands-hna-current-northern-1800-1913-retrospective:to:territory-version-netherlands-european-composition-1900-effective-target",
   "country": "netherlands",
   "from": "territory-version:netherlands:hna-current-northern:1800-1913:retrospective",
   "to": "territory-version:netherlands:european-composition-1900:effective-target",
   "concepts": [
    {
     "ru": "смерти",
     "en": "deaths"
    },
    {
     "ru": "рождения",
     "en": "live births"
    },
    {
     "ru": "естественный прирост",
     "en": "natural change"
    },
    {
     "ru": "население",
     "en": "population"
    }
   ],
   "completeness": "partial",
   "unmatched": "unknown",
   "numerical": "unavailable",
   "uncertainty": "qualitative-unknown",
   "components": 3,
   "from_y": 1800,
   "to_y": 1901,
   "sources": [
    {
     "id": "source:nl-cbs-200-years-1800-1999",
     "title": "200 jaar statistiek in tijdreeksen 1800-1999",
     "uri": "https://www.cbs.nl/nl-nl/publicatie/2000/51/200-jaar-statistiek-in-tijdreeksen",
     "locator": "Table 2 physical PDF pp.14-16 and table notes"
    },
    {
     "id": "source:nl-na-treaty-inventory-2-05-02",
     "title": "Inventaris van verdragen en ratificaties",
     "uri": "https://www.nationaalarchief.nl/onderzoeken/archief/2.05.02/download/pdf",
     "locator": "inventory printed pp.13 and 26; 1815 instruments and 1839 treaty/ratification entries"
    },
    {
     "id": "source:smits-horlings-vanzanden-2000-dutch-gnp",
     "title": "Dutch GNP and its Components, 1800-1913",
     "uri": "https://nationalaccounts.niwi.knaw.nl/pdf/newgnp1.pdf",
     "locator": "Table A.1 physical PDF p.122 / printed p.109"
    }
   ]
  },
  {
   "id": "territorial-crosswalk:dg1d:territory-version-netherlands-hna-current-northern-1800-1913-retrospective:to:territory-version-netherlands-european-composition-1900-legal-target",
   "country": "netherlands",
   "from": "territory-version:netherlands:hna-current-northern:1800-1913:retrospective",
   "to": "territory-version:netherlands:european-composition-1900:legal-target",
   "concepts": [
    {
     "ru": "смерти",
     "en": "deaths"
    },
    {
     "ru": "рождения",
     "en": "live births"
    },
    {
     "ru": "естественный прирост",
     "en": "natural change"
    },
    {
     "ru": "население",
     "en": "population"
    }
   ],
   "completeness": "partial",
   "unmatched": "unknown",
   "numerical": "unavailable",
   "uncertainty": "qualitative-unknown",
   "components": 3,
   "from_y": 1800,
   "to_y": 1901,
   "sources": [
    {
     "id": "source:nl-cbs-200-years-1800-1999",
     "title": "200 jaar statistiek in tijdreeksen 1800-1999",
     "uri": "https://www.cbs.nl/nl-nl/publicatie/2000/51/200-jaar-statistiek-in-tijdreeksen",
     "locator": "Table 2 physical PDF pp.14-16 and table notes"
    },
    {
     "id": "source:nl-na-treaty-inventory-2-05-02",
     "title": "Inventaris van verdragen en ratificaties",
     "uri": "https://www.nationaalarchief.nl/onderzoeken/archief/2.05.02/download/pdf",
     "locator": "inventory printed pp.13 and 26; 1815 instruments and 1839 treaty/ratification entries"
    },
    {
     "id": "source:smits-horlings-vanzanden-2000-dutch-gnp",
     "title": "Dutch GNP and its Components, 1800-1913",
     "uri": "https://nationalaccounts.niwi.knaw.nl/pdf/newgnp1.pdf",
     "locator": "Table A.1 physical PDF p.122 / printed p.109"
    }
   ]
  },
  {
   "id": "territorial-crosswalk:dg1d:territory-version-netherlands-hna-current-northern-1800-1913-retrospective:to:territory-version-netherlands-european-composition-1900-statistical-target",
   "country": "netherlands",
   "from": "territory-version:netherlands:hna-current-northern:1800-1913:retrospective",
   "to": "territory-version:netherlands:european-composition-1900:statistical-target",
   "concepts": [
    {
     "ru": "смерти",
     "en": "deaths"
    },
    {
     "ru": "рождения",
     "en": "live births"
    },
    {
     "ru": "естественный прирост",
     "en": "natural change"
    },
    {
     "ru": "население",
     "en": "population"
    }
   ],
   "completeness": "partial",
   "unmatched": "unknown",
   "numerical": "unavailable",
   "uncertainty": "qualitative-unknown",
   "components": 3,
   "from_y": 1800,
   "to_y": 1901,
   "sources": [
    {
     "id": "source:nl-cbs-200-years-1800-1999",
     "title": "200 jaar statistiek in tijdreeksen 1800-1999",
     "uri": "https://www.cbs.nl/nl-nl/publicatie/2000/51/200-jaar-statistiek-in-tijdreeksen",
     "locator": "Table 2 physical PDF pp.14-16 and table notes"
    },
    {
     "id": "source:nl-na-treaty-inventory-2-05-02",
     "title": "Inventaris van verdragen en ratificaties",
     "uri": "https://www.nationaalarchief.nl/onderzoeken/archief/2.05.02/download/pdf",
     "locator": "inventory printed pp.13 and 26; 1815 instruments and 1839 treaty/ratification entries"
    },
    {
     "id": "source:smits-horlings-vanzanden-2000-dutch-gnp",
     "title": "Dutch GNP and its Components, 1800-1913",
     "uri": "https://nationalaccounts.niwi.knaw.nl/pdf/newgnp1.pdf",
     "locator": "Table A.1 physical PDF p.122 / printed p.109"
    }
   ]
  },
  {
   "id": "territorial-crosswalk:dg1d:territory-version-netherlands-paping-current-territory-1800-1849-retrospective:to:territory-version-netherlands-european-composition-1900-effective-target",
   "country": "netherlands",
   "from": "territory-version:netherlands:paping-current-territory:1800-1849:retrospective",
   "to": "territory-version:netherlands:european-composition-1900:effective-target",
   "concepts": [
    {
     "ru": "население",
     "en": "population"
    }
   ],
   "completeness": "partial",
   "unmatched": "unknown",
   "numerical": "unavailable",
   "uncertainty": "qualitative-unknown",
   "components": 3,
   "from_y": 1800,
   "to_y": 1850,
   "sources": [
    {
     "id": "source:nl-cbs-200-years-1800-1999",
     "title": "200 jaar statistiek in tijdreeksen 1800-1999",
     "uri": "https://www.cbs.nl/nl-nl/publicatie/2000/51/200-jaar-statistiek-in-tijdreeksen",
     "locator": "Table 2 physical PDF pp.14-16 and table notes"
    },
    {
     "id": "source:nl-na-treaty-inventory-2-05-02",
     "title": "Inventaris van verdragen en ratificaties",
     "uri": "https://www.nationaalarchief.nl/onderzoeken/archief/2.05.02/download/pdf",
     "locator": "inventory printed pp.13 and 26; 1815 instruments and 1839 treaty/ratification entries"
    },
    {
     "id": "source:paping-2014-dutch-population",
     "title": "General Dutch population development 1400-1850: cities and countryside",
     "uri": "https://pure.rug.nl/ws/portalfiles/portal/15865622/articlesardinie21sep2014.pdf",
     "locator": "Appendix D physical PDF pp.28-29; total Dutch population column"
    }
   ]
  },
  {
   "id": "territorial-crosswalk:dg1d:territory-version-netherlands-paping-current-territory-1800-1849-retrospective:to:territory-version-netherlands-european-composition-1900-legal-target",
   "country": "netherlands",
   "from": "territory-version:netherlands:paping-current-territory:1800-1849:retrospective",
   "to": "territory-version:netherlands:european-composition-1900:legal-target",
   "concepts": [
    {
     "ru": "население",
     "en": "population"
    }
   ],
   "completeness": "partial",
   "unmatched": "unknown",
   "numerical": "unavailable",
   "uncertainty": "qualitative-unknown",
   "components": 3,
   "from_y": 1800,
   "to_y": 1850,
   "sources": [
    {
     "id": "source:nl-cbs-200-years-1800-1999",
     "title": "200 jaar statistiek in tijdreeksen 1800-1999",
     "uri": "https://www.cbs.nl/nl-nl/publicatie/2000/51/200-jaar-statistiek-in-tijdreeksen",
     "locator": "Table 2 physical PDF pp.14-16 and table notes"
    },
    {
     "id": "source:nl-na-treaty-inventory-2-05-02",
     "title": "Inventaris van verdragen en ratificaties",
     "uri": "https://www.nationaalarchief.nl/onderzoeken/archief/2.05.02/download/pdf",
     "locator": "inventory printed pp.13 and 26; 1815 instruments and 1839 treaty/ratification entries"
    },
    {
     "id": "source:paping-2014-dutch-population",
     "title": "General Dutch population development 1400-1850: cities and countryside",
     "uri": "https://pure.rug.nl/ws/portalfiles/portal/15865622/articlesardinie21sep2014.pdf",
     "locator": "Appendix D physical PDF pp.28-29; total Dutch population column"
    }
   ]
  },
  {
   "id": "territorial-crosswalk:dg1d:territory-version-netherlands-paping-current-territory-1800-1849-retrospective:to:territory-version-netherlands-european-composition-1900-statistical-target",
   "country": "netherlands",
   "from": "territory-version:netherlands:paping-current-territory:1800-1849:retrospective",
   "to": "territory-version:netherlands:european-composition-1900:statistical-target",
   "concepts": [
    {
     "ru": "население",
     "en": "population"
    }
   ],
   "completeness": "partial",
   "unmatched": "unknown",
   "numerical": "unavailable",
   "uncertainty": "qualitative-unknown",
   "components": 3,
   "from_y": 1800,
   "to_y": 1850,
   "sources": [
    {
     "id": "source:nl-cbs-200-years-1800-1999",
     "title": "200 jaar statistiek in tijdreeksen 1800-1999",
     "uri": "https://www.cbs.nl/nl-nl/publicatie/2000/51/200-jaar-statistiek-in-tijdreeksen",
     "locator": "Table 2 physical PDF pp.14-16 and table notes"
    },
    {
     "id": "source:nl-na-treaty-inventory-2-05-02",
     "title": "Inventaris van verdragen en ratificaties",
     "uri": "https://www.nationaalarchief.nl/onderzoeken/archief/2.05.02/download/pdf",
     "locator": "inventory printed pp.13 and 26; 1815 instruments and 1839 treaty/ratification entries"
    },
    {
     "id": "source:paping-2014-dutch-population",
     "title": "General Dutch population development 1400-1850: cities and countryside",
     "uri": "https://pure.rug.nl/ws/portalfiles/portal/15865622/articlesardinie21sep2014.pdf",
     "locator": "Appendix D physical PDF pp.28-29; total Dutch population column"
    }
   ]
  }
 ],
 "tables": [
  {
   "country": "belgium",
   "conceptId": "demography-live-birth",
   "concept": {
    "ru": "рождения",
    "en": "live births"
   },
   "source": {
    "id": "source:belgium-statbel-annuaire-1874",
    "title": "Annuaire statistique de la Belgique, cinquième année—1874",
    "uri": "https://wiki.statbel.fgov.be/wiki/Brochure_1874_fr"
   },
   "version": "territory-version:belgium:annuaire-births-1840-1873:statistical",
   "universe": "source-defined-unresolved",
   "n": 9,
   "from": 1840,
   "to": 1873
  },
  {
   "country": "belgium",
   "conceptId": "demography-marriage",
   "concept": {
    "ru": "браки",
    "en": "marriages"
   },
   "source": {
    "id": "source:quetelet-1832-population-belgium",
    "title": "Recherches sur la reproduction et la mortalité de l'homme aux différents âges, et sur la population de la Belgique",
    "uri": "https://archive.org/details/recherchessurlar00quet"
   },
   "version": "territory-version:belgium:quetelet-marriages-1803-1829:statistical",
   "universe": "source-defined-unresolved",
   "n": 3,
   "from": 1803,
   "to": 1825
  },
  {
   "country": "belgium",
   "conceptId": "demography-population",
   "concept": {
    "ru": "население",
    "en": "population"
   },
   "source": {
    "id": "source:quetelet-1832-population-belgium",
    "title": "Recherches sur la reproduction et la mortalité de l'homme aux différents âges, et sur la population de la Belgique",
    "uri": "https://archive.org/details/recherchessurlar00quet"
   },
   "version": "territory-version:belgium:quetelet-population-1830:statistical",
   "universe": "source-defined-unresolved",
   "n": 4,
   "from": 1830,
   "to": 1830
  },
  {
   "country": "france",
   "conceptId": "demography-death",
   "concept": {
    "ru": "смерти",
    "en": "deaths"
   },
   "source": {
    "id": "source:sgf-annuaire-france-1899",
    "title": "Annuaire statistique de la France, dix-neuvième volume, 1899",
    "uri": "https://www.bnsp.insee.fr/ark:/12148/bpt6k5509059m"
   },
   "version": "territory-version:france:annuaire-table34:1881-1898:statistical",
   "universe": "source-defined-unresolved",
   "n": 54,
   "from": 1881,
   "to": 1898
  },
  {
   "country": "france",
   "conceptId": "demography-divorce",
   "concept": {
    "ru": "разводы",
    "en": "divorces"
   },
   "source": {
    "id": "source:sgf-annuaire-france-1899",
    "title": "Annuaire statistique de la France, dix-neuvième volume, 1899",
    "uri": "https://www.bnsp.insee.fr/ark:/12148/bpt6k5509059m"
   },
   "version": "territory-version:france:annuaire-table34:1881-1898:statistical",
   "universe": "source-defined-unresolved",
   "n": 15,
   "from": 1884,
   "to": 1898
  },
  {
   "country": "france",
   "conceptId": "demography-natural-change",
   "concept": {
    "ru": "естественный прирост",
    "en": "natural change"
   },
   "source": {
    "id": "source:sgf-annuaire-france-1899",
    "title": "Annuaire statistique de la France, dix-neuvième volume, 1899",
    "uri": "https://www.bnsp.insee.fr/ark:/12148/bpt6k5509059m"
   },
   "version": "territory-version:france:annuaire-table34:1881-1898:statistical",
   "universe": "source-defined-unresolved",
   "n": 18,
   "from": 1881,
   "to": 1898
  },
  {
   "country": "france",
   "conceptId": "demography-live-birth",
   "concept": {
    "ru": "рождения",
    "en": "live births"
   },
   "source": {
    "id": "source:sgf-annuaire-france-1899",
    "title": "Annuaire statistique de la France, dix-neuvième volume, 1899",
    "uri": "https://www.bnsp.insee.fr/ark:/12148/bpt6k5509059m"
   },
   "version": "territory-version:france:annuaire-table34:1881-1898:statistical",
   "universe": "source-defined-unresolved",
   "n": 90,
   "from": 1881,
   "to": 1898
  },
  {
   "country": "france",
   "conceptId": "demography-marriage",
   "concept": {
    "ru": "браки",
    "en": "marriages"
   },
   "source": {
    "id": "source:sgf-annuaire-france-1899",
    "title": "Annuaire statistique de la France, dix-neuvième volume, 1899",
    "uri": "https://www.bnsp.insee.fr/ark:/12148/bpt6k5509059m"
   },
   "version": "territory-version:france:annuaire-table34:1881-1898:statistical",
   "universe": "source-defined-unresolved",
   "n": 18,
   "from": 1881,
   "to": 1898
  },
  {
   "country": "france",
   "conceptId": "demography-stillbirth",
   "concept": {
    "ru": "мертворождения",
    "en": "stillbirths"
   },
   "source": {
    "id": "source:sgf-annuaire-france-1899",
    "title": "Annuaire statistique de la France, dix-neuvième volume, 1899",
    "uri": "https://www.bnsp.insee.fr/ark:/12148/bpt6k5509059m"
   },
   "version": "territory-version:france:annuaire-table34:1881-1898:statistical",
   "universe": "source-defined-unresolved",
   "n": 54,
   "from": 1881,
   "to": 1898
  },
  {
   "country": "france",
   "conceptId": "demography-population",
   "concept": {
    "ru": "население",
    "en": "population"
   },
   "source": {
    "id": "source:insee-sgf-france-historical-1800-1925",
    "title": "Données historiques de la Statistique générale de France, 1800-1925",
    "uri": "https://www.insee.fr/fr/statistiques/2591397"
   },
   "version": "territory-version:france:sgf-t86-population:1801-1836:statistical",
   "universe": "source-defined-unresolved",
   "n": 5,
   "from": 1801,
   "to": 1836
  },
  {
   "country": "france",
   "conceptId": "demography-live-birth",
   "concept": {
    "ru": "рождения",
    "en": "live births"
   },
   "source": {
    "id": "source:insee-sgf-france-historical-1800-1925",
    "title": "Données historiques de la Statistique générale de France, 1800-1925",
    "uri": "https://www.insee.fr/fr/statistiques/2591397"
   },
   "version": "territory-version:france:sgf-t87-births:1800-1820:statistical",
   "universe": "source-defined-unresolved",
   "n": 4,
   "from": 1800,
   "to": 1811
  },
  {
   "country": "netherlands",
   "conceptId": "demography-population",
   "concept": {
    "ru": "население",
    "en": "population"
   },
   "source": {
    "id": "source:nl-cbs-200-years-1800-1999",
    "title": "200 jaar statistiek in tijdreeksen 1800-1999",
    "uri": "https://www.cbs.nl/nl-nl/publicatie/2000/51/200-jaar-statistiek-in-tijdreeksen"
   },
   "version": "territory-version:netherlands:cbs-table2:1804-1830:statistical",
   "universe": "source-defined-unresolved",
   "n": 27,
   "from": 1804,
   "to": 1830
  },
  {
   "country": "netherlands",
   "conceptId": "demography-population",
   "concept": {
    "ru": "население",
    "en": "population"
   },
   "source": {
    "id": "source:nl-cbs-200-years-1800-1999",
    "title": "200 jaar statistiek in tijdreeksen 1800-1999",
    "uri": "https://www.cbs.nl/nl-nl/publicatie/2000/51/200-jaar-statistiek-in-tijdreeksen"
   },
   "version": "territory-version:netherlands:cbs-table2:1831-1839:statistical",
   "universe": "source-defined-unresolved",
   "n": 9,
   "from": 1831,
   "to": 1839
  },
  {
   "country": "netherlands",
   "conceptId": "demography-population",
   "concept": {
    "ru": "население",
    "en": "population"
   },
   "source": {
    "id": "source:nl-cbs-200-years-1800-1999",
    "title": "200 jaar statistiek in tijdreeksen 1800-1999",
    "uri": "https://www.cbs.nl/nl-nl/publicatie/2000/51/200-jaar-statistiek-in-tijdreeksen"
   },
   "version": "territory-version:netherlands:cbs-table2:1840-1875:statistical",
   "universe": "source-defined-unresolved",
   "n": 36,
   "from": 1840,
   "to": 1875
  },
  {
   "country": "netherlands",
   "conceptId": "demography-live-birth",
   "concept": {
    "ru": "рождения",
    "en": "live births"
   },
   "source": {
    "id": "source:smits-horlings-vanzanden-2000-dutch-gnp",
    "title": "Dutch GNP and its Components, 1800-1913",
    "uri": "https://nationalaccounts.niwi.knaw.nl/pdf/newgnp1.pdf"
   },
   "version": "territory-version:netherlands:hna-current-northern:1800-1913:retrospective",
   "universe": "source-defined-unresolved",
   "n": 101,
   "from": 1800,
   "to": 1900
  },
  {
   "country": "netherlands",
   "conceptId": "demography-death",
   "concept": {
    "ru": "смерти",
    "en": "deaths"
   },
   "source": {
    "id": "source:smits-horlings-vanzanden-2000-dutch-gnp",
    "title": "Dutch GNP and its Components, 1800-1913",
    "uri": "https://nationalaccounts.niwi.knaw.nl/pdf/newgnp1.pdf"
   },
   "version": "territory-version:netherlands:hna-current-northern:1800-1913:retrospective",
   "universe": "source-defined-unresolved",
   "n": 101,
   "from": 1800,
   "to": 1900
  },
  {
   "country": "netherlands",
   "conceptId": "demography-population",
   "concept": {
    "ru": "население",
    "en": "population"
   },
   "source": {
    "id": "source:smits-horlings-vanzanden-2000-dutch-gnp",
    "title": "Dutch GNP and its Components, 1800-1913",
    "uri": "https://nationalaccounts.niwi.knaw.nl/pdf/newgnp1.pdf"
   },
   "version": "territory-version:netherlands:hna-current-northern:1800-1913:retrospective",
   "universe": "source-defined-unresolved",
   "n": 101,
   "from": 1800,
   "to": 1900
  },
  {
   "country": "netherlands",
   "conceptId": "demography-natural-change",
   "concept": {
    "ru": "естественный прирост",
    "en": "natural change"
   },
   "source": {
    "id": "source:smits-horlings-vanzanden-2000-dutch-gnp",
    "title": "Dutch GNP and its Components, 1800-1913",
    "uri": "https://nationalaccounts.niwi.knaw.nl/pdf/newgnp1.pdf"
   },
   "version": "territory-version:netherlands:hna-current-northern:1800-1913:retrospective",
   "universe": "source-defined-unresolved",
   "n": 101,
   "from": 1800,
   "to": 1900
  },
  {
   "country": "netherlands",
   "conceptId": "demography-population",
   "concept": {
    "ru": "население",
    "en": "population"
   },
   "source": {
    "id": "source:paping-2014-dutch-population",
    "title": "General Dutch population development 1400-1850: cities and countryside",
    "uri": "https://pure.rug.nl/ws/portalfiles/portal/15865622/articlesardinie21sep2014.pdf"
   },
   "version": "territory-version:netherlands:paping-current-territory:1800-1849:retrospective",
   "universe": "source-defined-unresolved",
   "n": 6,
   "from": 1800,
   "to": 1849
  }
 ],
 "universes": [
  {
   "id": "population-universe:present-de-facto",
   "key": "present-de-facto",
   "labelEn": "Population present at the reference moment",
   "ru": "Наличное население",
   "rue": "все, кто был на месте в момент учёта, включая приезжих; временно отсутствующие не считаются",
   "en": "Population present",
   "ene": "everyone on the spot at the reference moment, visitors included; the temporarily absent are not counted",
   "rules": {
    "temporarilyAbsent": "excluded",
    "temporaryVisitors": "included",
    "foreignCitizens": "included",
    "armedForces": "source-defined",
    "institutionalPopulation": "source-defined"
   }
  },
  {
   "id": "population-universe:usual-resident",
   "key": "usual-resident",
   "labelEn": "Usual-resident population",
   "ru": "Постоянное население",
   "rue": "все, кто обычно живёт здесь, включая временно отсутствующих; приезжие не считаются",
   "en": "Usual residents",
   "ene": "everyone who normally lives here, the temporarily absent included; visitors are not counted",
   "rules": {
    "temporarilyAbsent": "included",
    "temporaryVisitors": "excluded",
    "foreignCitizens": "included",
    "armedForces": "source-defined",
    "institutionalPopulation": "source-defined"
   }
  },
  {
   "id": "population-universe:legal-domicile",
   "key": "legal-domicile",
   "labelEn": "Population by legal domicile",
   "ru": "Население по домицилию",
   "rue": "кто юридически приписан к месту; не то же, что постоянное население",
   "en": "Population by legal domicile",
   "ene": "those legally registered to the place; not the same as usual residents",
   "rules": {
    "temporarilyAbsent": "source-defined",
    "temporaryVisitors": "excluded",
    "foreignCitizens": "source-defined",
    "armedForces": "source-defined",
    "institutionalPopulation": "source-defined"
   }
  },
  {
   "id": "population-universe:citizenship",
   "key": "citizenship",
   "labelEn": "Population by citizenship",
   "ru": "Население по гражданству",
   "rue": "по принадлежности к государству, а не по месту жительства; иностранцы исключены",
   "en": "Population by citizenship",
   "ene": "membership of the state rather than residence; foreign citizens excluded",
   "rules": {
    "temporarilyAbsent": "source-defined",
    "temporaryVisitors": "source-defined",
    "foreignCitizens": "excluded",
    "armedForces": "source-defined",
    "institutionalPopulation": "source-defined"
   }
  },
  {
   "id": "population-universe:register-membership",
   "key": "register-membership",
   "labelEn": "Population entered in a named register",
   "ru": "Население по реестру",
   "rue": "кто внесён в названный реестр; недоучёт реестра остаётся ошибкой наблюдения",
   "en": "Register population",
   "ene": "those entered in a named register; under-registration remains observation error",
   "rules": {
    "temporarilyAbsent": "source-defined",
    "temporaryVisitors": "source-defined",
    "foreignCitizens": "source-defined",
    "armedForces": "source-defined",
    "institutionalPopulation": "source-defined"
   }
  },
  {
   "id": "population-universe:source-defined-unresolved",
   "key": "source-defined-unresolved",
   "labelEn": "Source-defined population, unresolved",
   "ru": "Как определил источник (не раскрыто)",
   "rue": "формулировка источника сохранена, состав не установлен; так помечены все исходные наблюдения, пока определение не доказано",
   "en": "Source-defined (unresolved)",
   "ene": "the source wording is kept and the membership rule is not established; every source observation carries this until the definition is proven",
   "rules": {
    "temporarilyAbsent": "unresolved",
    "temporaryVisitors": "unresolved",
    "foreignCitizens": "unresolved",
    "armedForces": "unresolved",
    "institutionalPopulation": "unresolved"
   }
  }
 ],
 "referenceTimes": [
  {
   "id": "reference-time:census-moment",
   "key": "census-moment",
   "labelEn": "Stock at a source-defined census moment",
   "appliesTo": "stock",
   "ru": "Момент переписи",
   "rue": "запас на дату, названную переписью; не дата сбора",
   "en": "Census moment",
   "ene": "a stock at the source's census reference date, not the collection date"
  },
  {
   "id": "reference-time:end-of-period",
   "key": "end-of-period",
   "labelEn": "Stock at the end of a named period",
   "appliesTo": "stock",
   "ru": "Конец периода",
   "rue": "запас на последний миг периода; связь с началом следующего оговаривается",
   "en": "End of period",
   "ene": "a stock at the last instant of a period; its relation to the next start must be stated"
  },
  {
   "id": "reference-time:event-interval-total",
   "key": "event-interval-total",
   "labelEn": "Total source-recorded events over a named interval",
   "appliesTo": "flow",
   "ru": "Сумма событий за интервал",
   "rue": "рождения, смерти, браки, сложенные за названный интервал источника",
   "en": "Event total over an interval",
   "ene": "births, deaths, marriages summed over the source's named interval"
  },
  {
   "id": "reference-time:event-period-average",
   "key": "event-period-average",
   "labelEn": "Source-published average annual event count over a period",
   "appliesTo": "flow",
   "ru": "Среднегодовое число событий",
   "rue": "опубликованное источником среднее за период; CFR ничего не пересчитывает в годы",
   "en": "Average annual events",
   "ene": "the source's published period average; CFR does not annualise"
  },
  {
   "id": "reference-time:mid-period",
   "key": "mid-period",
   "labelEn": "Stock at a named mid-period instant",
   "appliesTo": "stock",
   "ru": "Середина периода",
   "rue": "запас на названную середину; середина года из годовой подписи не выводится",
   "en": "Mid-period",
   "ene": "a stock at a named midpoint; mid-year is not inferred from an annual label"
  },
  {
   "id": "reference-time:period-average",
   "key": "period-average",
   "labelEn": "Average population or exposure over a period",
   "appliesTo": "exposure",
   "ru": "Среднее за период",
   "rue": "средняя численность или экспозиция за период; не то же, что запас в середине",
   "en": "Period average",
   "ene": "average population or exposure over a period; not a mid-period stock"
  },
  {
   "id": "reference-time:source-year-event-interval-unresolved",
   "key": "source-year-event-interval-unresolved",
   "labelEn": "Source-year demographic event interval, endpoints unresolved",
   "appliesTo": "flow",
   "ru": "Год событий без точных границ",
   "rue": "источник даёт год, но не границы интервала и не правило регистрации",
   "en": "Event year, endpoints unresolved",
   "ene": "the source gives a year but not the interval endpoints or the registration rule"
  },
  {
   "id": "reference-time:start-of-period",
   "key": "start-of-period",
   "labelEn": "Stock at the start of a named period",
   "appliesTo": "stock",
   "ru": "Начало периода",
   "rue": "запас на первый миг названного периода",
   "en": "Start of period",
   "ene": "a stock at the first instant of a named period"
  },
  {
   "id": "reference-time:year-only-unresolved",
   "key": "year-only-unresolved",
   "labelEn": "Year label with unresolved reference instant",
   "appliesTo": "mixed",
   "ru": "Только год (момент не установлен)",
   "rue": "из годовой подписи момент не выводится; помечено до уточнения по источнику",
   "en": "Year only (instant unresolved)",
   "ene": "no instant is inferred from a year label; flagged until the source clarifies"
  }
 ],
 "observations": {
  "belgium": {
   "total": 16,
   "concepts": {
    "demography-live-birth": 9,
    "demography-marriage": 3,
    "demography-population": 4
   },
   "universes": {
    "source-defined-unresolved": 16
   }
  },
  "france": {
   "total": 258,
   "concepts": {
    "demography-death": 54,
    "demography-divorce": 15,
    "demography-natural-change": 18,
    "demography-live-birth": 94,
    "demography-marriage": 18,
    "demography-stillbirth": 54,
    "demography-population": 5
   },
   "universes": {
    "source-defined-unresolved": 258
   }
  },
  "netherlands": {
   "total": 482,
   "concepts": {
    "demography-population": 179,
    "demography-live-birth": 101,
    "demography-death": 101,
    "demography-natural-change": 101
   },
   "universes": {
    "source-defined-unresolved": 482
   }
  }
 },
 "concepts": {
  "demography-population": {
   "ru": "население",
   "en": "population"
  },
  "demography-live-birth": {
   "ru": "рождения",
   "en": "live births"
  },
  "demography-death": {
   "ru": "смерти",
   "en": "deaths"
  },
  "demography-natural-change": {
   "ru": "естественный прирост",
   "en": "natural change"
  },
  "demography-marriage": {
   "ru": "браки",
   "en": "marriages"
  },
  "demography-stillbirth": {
   "ru": "мертворождения",
   "en": "stillbirths"
  },
  "demography-divorce": {
   "ru": "разводы",
   "en": "divorces"
  }
 },
 "labels": {
  "basis": {
   "legal": {
    "ru": "правовое",
    "en": "legal"
   },
   "effective-administration": {
    "ru": "фактическое управление",
    "en": "effective administration"
   },
   "statistical-reporting": {
    "ru": "область таблицы источника",
    "en": "source table domain"
   },
   "retrospective-analytical": {
    "ru": "ретроспективная реконструкция",
    "en": "retrospective reconstruction"
   }
  },
  "role": {
   "source-native": {
    "ru": "область источника",
    "en": "source domain"
   },
   "retrospective-target": {
    "ru": "целевая композиция 1900",
    "en": "target composition 1900"
   }
  }
 },
 "counts": {
  "versions": 39,
  "events": 12,
  "crosswalks": 33,
  "universes": 6,
  "referenceTimes": 9,
  "observations": 756,
  "memberships": 150
 }
};
