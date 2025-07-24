//tailwind -i ./Assets/tailwind/input.css -o ./Assets/tailwind/output.css --watch
function toggleMenu(hamMenu) {

  let state = hamMenu.getAttribute("data-state");
  //
  let hamMenuChildren = hamMenu.children;
  let hamMenuFirstDash = hamMenuChildren[0];
  let hamMenuSecondDash = hamMenuChildren[1];
  let hamMenuThirdDash = hamMenuChildren[2];
  let nav = document.querySelectorAll("nav")[0];


  //toggle hamMenu Classlists
  "-rotate-45 translate-y-4".split(" ").forEach(className => hamMenuFirstDash.classList.toggle(className));
  "opacity-0".split(" ").forEach(className => hamMenuSecondDash.classList.toggle(className));
  "rotate-45 -translate-y-1.25".split(" ").forEach(className => hamMenuThirdDash.classList.toggle(className));

  //toggle Nav menu classes
  if (state == "off") {
    //nav.classList.remove("max-h-[0px]");
    nav.classList.add("max-h-[9000px]");
  }
  else {
    nav.classList.remove("max-h-[9000px]");
    //nav.classList.add("max-h-[0px]");
  }

  //
  state == "off" ? hamMenu.setAttribute("data-state", "on") : hamMenu.setAttribute("data-state", "off");
}

let data = JSON.parse(`[
  {
    "ID": 1,
    "FIRM": "AG ANADOLU GRUBU HOLDİNG A.Ş.",
    "INDUSTRY": "FINANCIAL INSTITUTIONS / HOLDING AND INVESTMENT COMPANIES",
    "YEAR": 2023,
    "INDEX 1": "BIST SUSTAINABILITY",
    "INDEX 2": "BIST CORPORATE GOVERNANCE",
    "CG RATING OVERALL": 95.68,
    "Shareholders": 92.85,
    "Disclosure and Transparency": 98.1,
    "Stakeholders": 99.48,
    "Board of Directors": 94.36,
    "ESG SCORE": 81,
    "ENVIRONMENT": 97,
    "Emissions": 99,
    "Resource Use": 97,
    "Innovation": 89,
    "SOCIAL": 91,
    "Human Rights": 84,
    "Product Responsibility": 99,
    "Workforce": 99,
    "Community": 89,
    "GOVERNANCE": 56,
    "Management": 44,
    "Shareholders__1": 73,
    "CSR Strategy": 91,
    "TOTAL CURRENT ASSETS": 146843226,
    "TOTAL ASSETS": 391799428,
    "TOTAL CURRENT LIABILITIES": 140181632,
    "TOTAL LIABILITIES": 212218070,
    "TOTAL EQUITY": 179581358,
    "OPERATINF PROFIT": 17636339,
    "NET PROFIT": 49262597,
    "ROA": 12.5734223889679,
    "ROE": 27.4319102765667,
    "OPERATING MARGIN": 4.69571748493079,
    "NET PROFIT MARGIN": 13.1162843992735,
    "CURRENT RATIO": 1.04752116168829,
    "ASSET TURNOVER": 0.976157695076973,
    "INVENTORY TURNOVER": 5.56977674245698,
    "RECEIVABLE TURNOVER": 22.469975119211,
    "DEBT TO EQUITY": 1.18173775030702,
    "DEBT TO ASSET": 0.54164976984091
  },
  {
    "ID": 2,
    "FIRM": "AKENERJİ ELEKTRİK ÜRETİM A.Ş.",
    "INDUSTRY": "ELECTRICITY GAS AND WATER / ELECTRICITY GAS AND STEAM",
    "YEAR": 2023,
    "INDEX 1": "BIST SUSTAINABILITY",
    "INDEX 2": "BIST CORPORATE GOVERNANCE",
    "CG RATING OVERALL": 95.58,
    "Shareholders": 95.28,
    "Disclosure and Transparency": 97.76,
    "Stakeholders": 97.43,
    "Board of Directors": 93.45,
    "ESG SCORE": 73,
    "ENVIRONMENT": 77,
    "Emissions": 82,
    "Resource Use": 88,
    "Innovation": 58,
    "SOCIAL": 76,
    "Human Rights": 88,
    "Product Responsibility": 75,
    "Workforce": 84,
    "Community": 57,
    "GOVERNANCE": 63,
    "Management": 55,
    "Shareholders__1": 88,
    "CSR Strategy": 62,
    "TOTAL CURRENT ASSETS": 2527008192,
    "TOTAL ASSETS": 31949666370,
    "TOTAL CURRENT LIABILITIES": 8223493397,
    "TOTAL LIABILITIES": 18168448472,
    "TOTAL EQUITY": 13781217898,
    "OPERATINF PROFIT": 1337761637,
    "NET PROFIT": 5039858378,
    "ROA": 15.7743693459419,
    "ROE": 36.5704861159725,
    "OPERATING MARGIN": 5.65116523351493,
    "NET PROFIT MARGIN": 21.2900950811109,
    "CURRENT RATIO": 0.307291326204734,
    "ASSET TURNOVER": 0.678737688654949,
    "INVENTORY TURNOVER": 137.500999399923,
    "RECEIVABLE TURNOVER": 10.476523587471,
    "DEBT TO EQUITY": 1.31834853831291,
    "DEBT TO ASSET": 0.568658472410834
  },
  {
    "ID": 3,
    "FIRM": "AKİŞ GAYRİMENKUL YATIRIM ORTAKLIĞI A.Ş.",
    "INDUSTRY": "FINANCIAL INSTITUTIONS / REAL ESTATE INVESTMENT TRUSTS",
    "YEAR": 2023,
    "INDEX 1": "BIST SUSTAINABILITY",
    "INDEX 2": "BIST CORPORATE GOVERNANCE",
    "CG RATING OVERALL": 96.37,
    "Shareholders": 94.51,
    "Disclosure and Transparency": 98.27,
    "Stakeholders": 98.68,
    "Board of Directors": 95.35,
    "ESG SCORE": 93,
    "ENVIRONMENT": 94,
    "Emissions": 98,
    "Resource Use": 95,
    "Innovation": 77,
    "SOCIAL": 95,
    "Human Rights": 84,
    "Product Responsibility": 88,
    "Workforce": 99,
    "Community": 98,
    "GOVERNANCE": 89,
    "Management": 94,
    "Shareholders__1": 91,
    "CSR Strategy": 62,
    "TOTAL CURRENT ASSETS": 1618013143,
    "TOTAL ASSETS": 23931249060,
    "TOTAL CURRENT LIABILITIES": 1729148763,
    "TOTAL LIABILITIES": 3698581035,
    "TOTAL EQUITY": 20232668025,
    "OPERATINF PROFIT": 1567432128,
    "NET PROFIT": 3358458325,
    "ROA": 14.0337778298982,
    "ROE": 16.5991866265497,
    "OPERATING MARGIN": 60.8203108922571,
    "NET PROFIT MARGIN": 130.316634319486,
    "CURRENT RATIO": 0.93572813260602,
    "ASSET TURNOVER": 0.108499327003581,
    "INVENTORY TURNOVER": 1.35908025122089,
    "RECEIVABLE TURNOVER": "",
    "DEBT TO EQUITY": 0.182802437643416,
    "DEBT TO ASSET": 0.154550271309575
  },
  {
    "ID": 4,
    "FIRM": "AKSA AKRİLİK KİMYA SANAYİİ A.Ş.",
    "INDUSTRY": "MANUFACTURING / CHEMICALS, PETROLEUM RUBBER AND PLASTIC PRODUCTS",
    "YEAR": 2023,
    "INDEX 1": "BIST SUSTAINABILITY",
    "INDEX 2": "BIST CORPORATE GOVERNANCE",
    "CG RATING OVERALL": 97.5,
    "Shareholders": 98.18,
    "Disclosure and Transparency": 98.72,
    "Stakeholders": 98.82,
    "Board of Directors": 95.58,
    "ESG SCORE": 81,
    "ENVIRONMENT": 79,
    "Emissions": 79,
    "Resource Use": 78,
    "Innovation": 80,
    "SOCIAL": 81,
    "Human Rights": 61,
    "Product Responsibility": 97,
    "Workforce": 89,
    "Community": 77,
    "GOVERNANCE": 81,
    "Management": 85,
    "Shareholders__1": 81,
    "CSR Strategy": 62,
    "TOTAL CURRENT ASSETS": 9773346,
    "TOTAL ASSETS": 25001684,
    "TOTAL CURRENT LIABILITIES": 6890251,
    "TOTAL LIABILITIES": 8267164,
    "TOTAL EQUITY": 16734520,
    "OPERATINF PROFIT": 2619318,
    "NET PROFIT": 1651981,
    "ROA": 6.60747892021993,
    "ROE": 9.87169634982061,
    "OPERATING MARGIN": 10.9445687496414,
    "NET PROFIT MARGIN": 6.90264398122008,
    "CURRENT RATIO": 1.41843105570465,
    "ASSET TURNOVER": 0.950187555434859,
    "INVENTORY TURNOVER": 5.31981687655995,
    "RECEIVABLE TURNOVER": 8.91372091853932,
    "DEBT TO EQUITY": 0.494018591510244,
    "DEBT TO ASSET": 0.330664286453664
  },
  {
    "ID": 5,
    "FIRM": "AKSA ENERJİ ÜRETİM A.Ş.",
    "INDUSTRY": "ELECTRICITY GAS AND WATER / ELECTRICITY GAS AND STEAM",
    "YEAR": 2023,
    "INDEX 1": "BIST SUSTAINABILITY",
    "INDEX 2": "BIST CORPORATE GOVERNANCE",
    "CG RATING OVERALL": 91.3,
    "Shareholders": 91.7,
    "Disclosure and Transparency": 95.41,
    "Stakeholders": 96.04,
    "Board of Directors": 86.05,
    "ESG SCORE": 60,
    "ENVIRONMENT": 55,
    "Emissions": 37,
    "Resource Use": 54,
    "Innovation": 78,
    "SOCIAL": 57,
    "Human Rights": 88,
    "Product Responsibility": 75,
    "Workforce": 48,
    "Community": 36,
    "GOVERNANCE": 73,
    "Management": 88,
    "Shareholders__1": 46,
    "CSR Strategy": 37,
    "TOTAL CURRENT ASSETS": 17090639573,
    "TOTAL ASSETS": 55806281421,
    "TOTAL CURRENT LIABILITIES": 13766133733,
    "TOTAL LIABILITIES": 21170640364,
    "TOTAL EQUITY": 34635641057,
    "OPERATINF PROFIT": 6779159815,
    "NET PROFIT": 6105843549,
    "ROA": 10.9411403045077,
    "ROE": 17.6287874647725,
    "OPERATING MARGIN": 19.274167511444,
    "NET PROFIT MARGIN": 17.3598284409372,
    "CURRENT RATIO": 1.24149887720693,
    "ASSET TURNOVER": 0.633677368773482,
    "INVENTORY TURNOVER": 45.960080119206,
    "RECEIVABLE TURNOVER": 2.4495216140613,
    "DEBT TO EQUITY": 0.61123858886167,
    "DEBT TO ASSET": 0.37935945246539
  },
  {
    "ID": 6,
    "FIRM": "ALBARAKA TÜRK KATILIM BANKASI A.Ş.",
    "INDUSTRY": "FINANCIAL INSTITUTIONS / BANKS",
    "YEAR": 2023,
    "INDEX 1": "BIST SUSTAINABILITY",
    "INDEX 2": "BIST CORPORATE GOVERNANCE",
    "CG RATING OVERALL": 9.25,
    "Shareholders": 9.29,
    "Disclosure and Transparency": 9.3,
    "Stakeholders": 9.2,
    "Board of Directors": 9.2,
    "ESG SCORE": 80,
    "ENVIRONMENT": 93,
    "Emissions": 99,
    "Resource Use": 95,
    "Innovation": 76,
    "SOCIAL": 80,
    "Human Rights": 74,
    "Product Responsibility": 96,
    "Workforce": 80,
    "Community": 72,
    "GOVERNANCE": 78,
    "Management": 88,
    "Shareholders__1": 57,
    "CSR Strategy": 62,
    "TOTAL CURRENT ASSETS": "",
    "TOTAL ASSETS": 233236983,
    "TOTAL CURRENT LIABILITIES": "",
    "TOTAL LIABILITIES": 233236983,
    "TOTAL EQUITY": 14348404,
    "OPERATINF PROFIT": 5665704,
    "NET PROFIT": 4123451,
    "ROA": 1.76792331428845,
    "ROE": 28.7380464057187,
    "OPERATING MARGIN": 17.0673043613006,
    "NET PROFIT MARGIN": 12.4214384012842,
    "CURRENT RATIO": "",
    "ASSET TURNOVER": 0.142982797976969,
    "INVENTORY TURNOVER": "",
    "RECEIVABLE TURNOVER": 0.317303482377255,
    "DEBT TO EQUITY": 16.2552561943475,
    "DEBT TO ASSET": ""
  },
  {
    "ID": 7,
    "FIRM": "ANADOLU ANONİM TÜRK SİGORTA ŞİRKETİ",
    "INDUSTRY": "FINANCIAL INSTITUTIONS / INSURANCE COMPANIES",
    "YEAR": 2023,
    "INDEX 1": "BIST SUSTAINABILITY",
    "INDEX 2": "BIST CORPORATE GOVERNANCE",
    "CG RATING OVERALL": 95.86,
    "Shareholders": 95.54,
    "Disclosure and Transparency": 97.85,
    "Stakeholders": 96.7,
    "Board of Directors": 94.3,
    "ESG SCORE": 81,
    "ENVIRONMENT": 90,
    "Emissions": 96,
    "Resource Use": 92,
    "Innovation": 71,
    "SOCIAL": 89,
    "Human Rights": 83,
    "Product Responsibility": 97,
    "Workforce": 94,
    "Community": 83,
    "GOVERNANCE": 73,
    "Management": 80,
    "Shareholders__1": 36,
    "CSR Strategy": 91,
    "TOTAL CURRENT ASSETS": 53381069133,
    "TOTAL ASSETS": 56381517782,
    "TOTAL CURRENT LIABILITIES": 43327376032,
    "TOTAL LIABILITIES": 56381517782,
    "TOTAL EQUITY": 12217135544,
    "OPERATINF PROFIT": "",
    "NET PROFIT": 6380159747,
    "ROA": 11.3160482335169,
    "ROE": 52.2230413505839,
    "OPERATING MARGIN": "",
    "NET PROFIT MARGIN": 17.9630285594623,
    "CURRENT RATIO": 1.23204020233246,
    "ASSET TURNOVER": 0.827971480429764,
    "INVENTORY TURNOVER": 12994.3160371863,
    "RECEIVABLE TURNOVER": 4.19137034431032,
    "DEBT TO EQUITY": 4.61495393735643,
    "DEBT TO ASSET": ""
  },
  {
    "ID": 8,
    "FIRM": "ANADOLU EFES BİRACILIK VE MALT SANAYİİ A.Ş.",
    "INDUSTRY": "MANUFACTURING / FOOD, BEVERAGE AND TOBACCO",
    "YEAR": 2023,
    "INDEX 1": "BIST SUSTAINABILITY",
    "INDEX 2": "BIST CORPORATE GOVERNANCE",
    "CG RATING OVERALL": 96.67,
    "Shareholders": 95.41,
    "Disclosure and Transparency": 98.79,
    "Stakeholders": 99.51,
    "Board of Directors": 94.84,
    "ESG SCORE": 81,
    "ENVIRONMENT": 73,
    "Emissions": 75,
    "Resource Use": 77,
    "Innovation": 52,
    "SOCIAL": 93,
    "Human Rights": 90,
    "Product Responsibility": 99,
    "Workforce": 90,
    "Community": 96,
    "GOVERNANCE": 68,
    "Management": 77,
    "Shareholders__1": 29,
    "CSR Strategy": 84,
    "TOTAL CURRENT ASSETS": 90128134,
    "TOTAL ASSETS": 265225686,
    "TOTAL CURRENT LIABILITIES": 78497398,
    "TOTAL LIABILITIES": 135347791,
    "TOTAL EQUITY": 129877895,
    "OPERATINF PROFIT": 19564617,
    "NET PROFIT": 33541789,
    "ROA": 12.6465085285895,
    "ROE": 25.825633376642,
    "OPERATING MARGIN": 12.2372771233283,
    "NET PROFIT MARGIN": 20.9797190103545,
    "CURRENT RATIO": 1.14816715326029,
    "ASSET TURNOVER": 0.599385649722147,
    "INVENTORY TURNOVER": 4.16641944344408,
    "RECEIVABLE TURNOVER": 11.2689201940279,
    "DEBT TO EQUITY": 1.04211568104026,
    "DEBT TO ASSET": 0.510311776514738
  },
  {
    "ID": 9,
    "FIRM": "ANADOLU ISUZU OTOMOTİV SANAYİ VE TİCARET A.Ş.",
    "INDUSTRY": "MANUFACTURING / FABRICATED METAL PRODUCTS MACHINERY ELECTRICAL EQUIPMENT AND TRANSPORTATION VEHICLES",
    "YEAR": 2023,
    "INDEX 1": "BIST SUSTAINABILITY",
    "INDEX 2": "BIST CORPORATE GOVERNANCE",
    "CG RATING OVERALL": 94.52,
    "Shareholders": 89.54,
    "Disclosure and Transparency": 98.46,
    "Stakeholders": 99.48,
    "Board of Directors": 93.15,
    "ESG SCORE": 71,
    "ENVIRONMENT": 91,
    "Emissions": 96,
    "Resource Use": 69,
    "Innovation": 98,
    "SOCIAL": 76,
    "Human Rights": 63,
    "Product Responsibility": 96,
    "Workforce": 89,
    "Community": 63,
    "GOVERNANCE": 42,
    "Management": 28,
    "Shareholders__1": 64,
    "CSR Strategy": 77,
    "TOTAL CURRENT ASSETS": 11130397056,
    "TOTAL ASSETS": 19099501671,
    "TOTAL CURRENT LIABILITIES": 9245405729,
    "TOTAL LIABILITIES": 10845375573,
    "TOTAL EQUITY": 8254126098,
    "OPERATINF PROFIT": 815999594,
    "NET PROFIT": 1614217374,
    "ROA": 8.45162037107476,
    "ROE": 19.5564903520329,
    "OPERATING MARGIN": 5.37735396391547,
    "NET PROFIT MARGIN": 10.6375275901181,
    "CURRENT RATIO": 1.20388411090358,
    "ASSET TURNOVER": 0.794509842580908,
    "INVENTORY TURNOVER": 3.94427451024091,
    "RECEIVABLE TURNOVER": 6.38856758140777,
    "DEBT TO EQUITY": 1.31393383675443,
    "DEBT TO ASSET": 0.567835525754435
  },
  {
    "ID": 10,
    "FIRM": "ARÇELİK A.Ş.",
    "INDUSTRY": "MANUFACTURING / FABRICATED METAL PRODUCTS MACHINERY ELECTRICAL EQUIPMENT AND TRANSPORTATION VEHICLES",
    "YEAR": 2023,
    "INDEX 1": "BIST SUSTAINABILITY",
    "INDEX 2": "BIST CORPORATE GOVERNANCE",
    "CG RATING OVERALL": 96.86,
    "Shareholders": 95.77,
    "Disclosure and Transparency": 98.79,
    "Stakeholders": 99.48,
    "Board of Directors": 95.15,
    "ESG SCORE": 88,
    "ENVIRONMENT": 98,
    "Emissions": 96,
    "Resource Use": 99,
    "Innovation": 98,
    "SOCIAL": 94,
    "Human Rights": 92,
    "Product Responsibility": 84,
    "Workforce": 99,
    "Community": 99,
    "GOVERNANCE": 68,
    "Management": 79,
    "Shareholders__1": 34,
    "CSR Strategy": 62,
    "TOTAL CURRENT ASSETS": 171321937,
    "TOTAL ASSETS": 258137907,
    "TOTAL CURRENT LIABILITIES": 137801099,
    "TOTAL LIABILITIES": 198574568,
    "TOTAL EQUITY": 59563339,
    "OPERATINF PROFIT": 10157657,
    "NET PROFIT": 8395410,
    "ROA": 3.25229645563059,
    "ROE": 14.0949284256882,
    "OPERATING MARGIN": 3.95080096443094,
    "NET PROFIT MARGIN": 3.2653784159864,
    "CURRENT RATIO": 1.24325522977143,
    "ASSET TURNOVER": 1.04820467024203,
    "INVENTORY TURNOVER": 3.69664953619825,
    "RECEIVABLE TURNOVER": 4.19511215516559,
    "DEBT TO EQUITY": 3.33383875608451,
    "DEBT TO ASSET": 0.76925768209626
  }
]`)

function loadPage(pageHTMLStr, pageName) {

  let result = /*html*/`
    <h1 class="font-bold m-2 mt-5 text-2xl">${pageName}</h1>
    <hr class="m-2 opacity-25"/>
    ${pageHTMLStr}`;

  document.getElementsByTagName("main")[0].innerHTML = result;

  //ham menu
  let hamMenu = document.querySelectorAll(".hamMenu")[0];
  let state = hamMenu.getAttribute("data-state");
  state == "off" ? "" : toggleMenu(hamMenu);

}


function firmCard(props) {

  return /*html*/`
  <div class="bg-slate-300 opacity-85 p-1 *:m-1 *:mb-4" data-id=${props["ID"]}>
    <!--MAIN PART-->
    <p class="min-h-[50px] flex items-start *:m-1">
      <span class="hidden">FIRM</span>
      <span class="min-h-[80px] min-w-[80px] max-h-[80px] max-w-[80px] rounded-xl overflow-hidden">
        <img src="./Assets/logos.png" alt="${props["FIRM"]} logosu" style="transform: translate(0, -${(props["ID"] - 1) * 80}px)">
        <!--
        <img class="min-h-full min-w-full " alt="${props["FIRM"]} sirket logosu">
        -->
      </span>
      <span class="font-bold text-lg">${props["FIRM"]}</span>
    <p>
    <p class="min-h-[125px]">
      <span class="font-bold text-lg">INDUSTRY: </span>
      <span>${props["INDUSTRY"]}</span>
    <p>
    <p>
      <span class="font-bold text-lg">YEAR: </span>
      <span>${props["YEAR"]}</span>
    <p>
    <p>
      <span class="font-bold text-lg">INDEX 1: </span>
      <span>${props["INDEX 1"]}</span>
    <p>
    <p>
      <span class="font-bold text-lg">INDEX 2: </span>
      <span>${props["INDEX 2"]}</span>
    <p>
    <!--NON-FINANCIAL INDICATORS-->
    <details>
      <summary class="cursor-pointer font-bold text-lg">NON-FINANCIAL INDICATORS</summary>
      <div class="*:m-2">
        <p>
          <span class="font-bold">CG RATING OVERALL: </span>
          <span>${props["CG RATING OVERALL"]}</span>
        <p>
        <p>
          <span class="font-bold">Shareholders: </span>
          <span>${props["Shareholders"]}</span>
        <p>
        <p>
          <span class="font-bold">Disclosure and Transparency: </span>
          <span>${props["Disclosure and Transparency"]}</span>
        <p>
        <p>
          <span class="font-bold">Stakeholders: </span>
          <span>${props["Stakeholders"]}</span>
        <p>
        <p>
          <span class="font-bold">Board of Directors: </span>
          <span>${props["Board of Directors"]}</span>
        <p>
        <p>
          <span class="font-bold">ESG SCORE: </span>
          <span>${props["ESG SCORE"]}</span>
        <p>
        <p>
          <span class="font-bold">ENVIRONMENT: </span>
          <span>${props["ENVIRONMENT"]}</span>
        <p>
        <p>
          <span class="font-bold">Emissions: </span>
          <span>${props["Emissions"]}</span>
        <p>
        <p>
          <span class="font-bold">Resource Use: </span>
          <span>${props["Resource Use"]}</span>
        <p>
        <p>
          <span class="font-bold">Innovation: </span>
          <span>${props["Innovation"]}</span>
        <p>
        <p>
          <span class="font-bold">SOCIAL: </span>
          <span>${props["SOCIAL"]}</span>
        <p>
        <p>
          <span class="font-bold">Human Rights: </span>
          <span>${props["Human Rights"]}</span>
        <p>
        <p>
          <span class="font-bold">Product Responsibility: </span>
          <span>${props["Product Responsibility"]}</span>
        <p>
        <p>
          <span class="font-bold">Workforce: </span>
          <span>${props["Workforce"]}</span>
        <p>
        <p>
          <span class="font-bold">Community: </span>
          <span>${props["Community"]}</span>
        <p>
        <p>
          <span class="font-bold">GOVERNANCE: </span>
          <span>${props["GOVERNANCE"]}</span>
        <p>
        <p>
          <span class="font-bold">Management: </span>
          <span>${props["Management"]}</span>
        <p>
        <p>
          <span class="font-bold">Shareholders: </span>
          <span>${props["Shareholders__1"]}</span>
        <p>
        <p>
          <span class="font-bold">CSR Strategy: </span>
          <span>${props["CSR Strategy"]}</span>
        <p>
      </div>
    </details>
    <!--PRIMARY FINANCIAL DATA-->
    <details>
      <summary class="cursor-pointer font-bold text-lg">PRIMARY FINANCIAL DATA</summary>
      <div class="*:m-2">
        <p>
          <span class="font-bold">TOTAL CURRENT ASSETS: </span>
          <span>${new Intl.NumberFormat("tr-TR", { style: "currency", currency: "TRY" }).format(props["TOTAL CURRENT ASSETS"])}</span>
        <p>
        <p>
          <span class="font-bold">TOTAL ASSETS: </span>
          <span>${new Intl.NumberFormat("tr-TR", { style: "currency", currency: "TRY" }).format(props["TOTAL ASSETS"])}</span>
        <p>
        <p>
          <span class="font-bold">TOTAL CURRENT LIABILITIES: </span>
          <span>${new Intl.NumberFormat("tr-TR", { style: "currency", currency: "TRY" }).format(props["TOTAL CURRENT LIABILITIES"])}</span>
        <p>
        <p>
          <span class="font-bold">TOTAL LIABILITIES: </span>
          <span>${new Intl.NumberFormat("tr-TR", { style: "currency", currency: "TRY" }).format(props["TOTAL LIABILITIES"])}</span>
        <p>
        <p>
          <span class="font-bold">TOTAL EQUITY: </span>
          <span>${new Intl.NumberFormat("tr-TR", { style: "currency", currency: "TRY" }).format(props["TOTAL EQUITY"])}</span>
        <p>
        <p>
          <span class="font-bold">OPERATING PROFIT: </span>
          <span>${new Intl.NumberFormat("tr-TR", { style: "currency", currency: "TRY" }).format(props["OPERATINF PROFIT"])}</span>
        <p>
        <p>
          <span class="font-bold">NET PROFIT: </span>
          <span>${new Intl.NumberFormat("tr-TR", { style: "currency", currency: "TRY" }).format(props["NET PROFIT"])}</span>
        <p>
      </div>
    </details>
    <!--FINANCIAL RATIOS-->
    <details>
      <summary class="cursor-pointer font-bold text-lg">FINANCIAL RATIOS</summary>
      <div class="*:m-3">
        <!--Profitability Ratios-->
        <h4 class="font-bold text-lg underline">Profitability Ratios</h4>
        <p>
          <span class="font-bold">ROA: </span>
          <span>${props["ROA"]}</span>
        <p>
        <p>
          <span class="font-bold">ROE: </span>
          <span>${props["ROE"]}</span>
        <p>
        <p>
          <span class="font-bold">OPERATING MARGIN: </span>
          <span>${props["OPERATING MARGIN"]}</span>
        <p>
        <p>
          <span class="font-bold">NET PROFIT MARGIN: </span>
          <span>${props["NET PROFIT MARGIN"]}</span>
        <p>
        <!--Liquidity Ratios-->
        <h4 class="font-bold text-lg underline">Liquidity Ratios</h4>
        <p>
          <span class="font-bold">CURRENT RATIO: </span>
          <span>${props["CURRENT RATIO"]}</span>
        <p>
        <p>
          <span class="font-bold">ASSET TURNOVER: </span>
          <span>${props["ASSET TURNOVER"]}</span>
        <p>
        <p>
          <span class="font-bold">INVENTORY TURNOVER: </span>
          <span>${props["INVENTORY TURNOVER"]}</span>
        <p>
        <p>
          <span class="font-bold">RECEIVABLE TURNOVER: </span>
          <span>${props["RECEIVABLE TURNOVER"]}</span>
        <p>
        <!--Solvency Ratios-->
        <h4 class="font-bold text-lg underline">Solvency Ratios</h4>
        <p>
          <span class="font-bold">DEBT TO EQUITY: </span>
          <span>${props["DEBT TO EQUITY"]}</span>
        <p>
        <p>
          <span class="font-bold">DEBT TO ASSET: </span>
          <span>${props["DEBT TO ASSET"]}</span>
        <p>
      </div>
    </details>
  </div>
`
}


//Anasayfa
function Main() {
  let result = /*html*/`
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 p-2 *:rounded-lg *:shadow-lg">
      ${data.reduce((acc, currentVal) => acc + firmCard(currentVal), "")}
    </div>  
  `;

  return result;
}

//Teknik Bilgiler
function TechInfo() {
  return /*html*/`
    <div class="p-5">
      <h2 class="font-bold mb-5 text-xl">About Our Project: A Clear View of Corporate Responsibility</h2>
      <p class="my-5">
        In today's world, a company's success is measured by more than just its financial performance. Stakeholders, from investors to consumers, increasingly demand transparency in a company's social and environmental impact. However, accessing clear, consolidated, and reliable data is often a significant challenge. Information is typically scattered across various reports and databases, making it difficult to get a complete picture of a company's overall health, both financially and non-financially.
      </p>
      <p class="my-5">
        Our project was developed to solve this problem. We provide a centralized, user-friendly platform that gathers and presents key financial and non-financial performance indicators for leading companies in Turkey. Our goal is to empower users with accessible data, allowing for a holistic evaluation and fostering a more informed and transparent business environment.
      </p>
      <h2 class="font-bold mb-5 text-xl">Our Data Scope</h2>
      <p class="my-5">To ensure the data is relevant and reliable, our analysis focuses on a specific and significant group of companies. Instead of using a broad international list like the Fortune 500, we have concentrated on the Turkish market.
      </p>
      <p class="my-5">
        Our dataset includes <b>47 companies</b> that are listed on the <b>BIST 100 Index</b>. Crucially, all selected companies are also included in both the <b>BIST SUSTAINABILITY Index</b> and the <b>BIST CORPORATE GOVERNANCE Index</b>. This selection criterion ensures that our analysis is centered on firms that are already recognized for their commitment to high standards of sustainability and corporate governance.
      </p>


      <h2 class="font-bold mb-5 text-xl">What This Website Does</h2>
      <p class="my-5">
        This platform serves as a one-stop source for understanding the holistic performance of these 47 leading Turkish companies. We aggregate and display key metrics related to:
      </p>
      <ul class="list-disc ml-5">
        <li>
          <p class="my-5"><b>Sustainability (ESG Score): </b>How a company manages its environmental, social, and governance responsibilities.</p> 
        </li>
        <li>
          <p class="my-5"><b>Corporate Governance Index: </b>The effectiveness, transparency, and accountability of a company's leadership.</p> 
        </li>
        <li>
          <p class="my-5"><b>Primary Financial Data: </b>Primary Financial Data: Core financial information directly from company statements.</p> 
        </li>
        <li>
          <p class="my-5"><b>Financial Ratios: </b>Key calculations that provide insight into a company's financial health and performance.</p> 
        </li>
      </ul>
      <p class="my-5">By bringing this information together, we make it easy to compare companies and track their performance over time.</p>
      <h2 class="font-bold mb-5 text-xl">How to Use This Website</h2>
      <p class="my-5">
        Navigating the site is straightforward. You can use the main dashboard to view the overall scores for all companies or select specific companies to see their detailed performance across the different indicators. The data is presented through clear visualizations and scores, allowing you to assess and compare corporate responsibility and financial stability quickly.
      </p>
      <h2 class="font-bold mb-5 text-xl">Who Can Benefit from This Platform?</h2>
      <p class="my-5">This tool is designed for a wide range of users who are interested in the ethical and social dimensions of business:</p>
      <ul class="list-disc ml-5">
        <li>
          <p class="my-5"><b>Investors: </b>To make informed investment decisions that align with sustainability goals and to assess both financial and non-financial risks.</p>
        </li>
        <li>
          <p class="my-5"><b>Consumers: </b>To support companies that demonstrate a strong commitment to ethical practices and social responsibility.</p>
        </li>
        <li>
          <p class="my-5"><b>Researchers and Students: </b>To access consolidated data for academic studies on corporate sustainability, governance, and finance in Turkey.</p>
        </li>
        <li>
          <p class="my-5"><b>The Companies Themselves: </b>To benchmark their performance against peers and identify areas for improvement in their financial and social responsibility strategies.</p>
        </li>
        <li>
          <p class="my-5"><b>Non-Governmental Organizations (NGOs): </b>To monitor corporate performance and advocate for greater transparency and accountability.</p>
        </li>
      </ul>
    </div>
  `
}

//Hakkımızda
function AboutUs() {

  let people = [
    {
      id: 0,
      name: "Emir Moralıoğlu",
      dept: "Business Administration",
      uni: "Yaşar University",
      email: "emirmoralioglu@hotmail.com",
      mobile: "+90 (539) 768 4720"
    }
  ]

  function personCard(person) {
    return /*html*/`
      <div class="p-2 bg-slate-200 *:my-1">
        <h3 class="font-bold text-2xl my-1 text-center">${person.name}</h3>
        <hr/>
        <!--University /Dept Info-->
        <div class="text-lg my-1 flex items-center justify-left *:m-1 ">
          <span class="text-2xl">
            👨‍🎓
          </span>
          <div class="flex flex-col justify-start *:m-1">
            <span>${person.uni}</span>
            <span>${person.dept}</span>
          </div>
        </div>
        <!--Email-->
        <p class="text-lg my-1 flex items-center justify-left *:m-1 ">
          <span class="text-2xl">✉️</span>
          <a href="mailto:${person.email}">
            ${person.email || "-"}
          </a>
        </p>
        <!--Phone-->
        <p class="text-lg my-1 flex items-center justify-left *:m-1 ">
          <span class="text-2xl">📞</span>
          <a href="tel:${person.mobile}">
            ${person.mobile || "-"}
          </a>
        </p>
      </div>
    `
  }

  return /*html*/`
    <div class="p-5">
      <p class="mb-5">
        This website was developed as part of our senior graduation project in the Department of Business Administration at Yaşar University during the 2024-2025 academic year.
      </p>
      <p class="my-5">
        Our project aims to provide a clear, comparative analysis of financial and non-financial data from companies listed in the BIST 100, BIST Sustainability, and BIST Corporate Governance indices.
      </p>
      <h2 class="font-bold mb-5 text-xl">Project Team</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 *:rounded-lg *:shadow-xl">
        <!--Cards-->
        ${people.reduce((acc, curVal) => acc + personCard(curVal), "")}
      </div>
    </div>
  `
}

let userFirmCompList = [];

function removeFirmCard(removeButton, firmId) {
  firmId = parseInt(firmId);
  userFirmCompList = userFirmCompList.filter(item => item != firmId);
  removeButton.closest('.firmCard').remove();
  loadPage(FirmComparison(), 'Compare Firms')
}

function addFirmToUserCompList(firmId) {
  if (!firmId) {
    alert("Please select a firm");
    return;
  }
  firmId = parseInt(firmId);
  if (userFirmCompList.indexOf(firmId) == -1) {
    userFirmCompList.push(firmId);
    loadPage(FirmComparison(), 'Compare Firms')
  } else {
    alert("The firm has already been selected!");
  }
}

//Firma Karşılaştırmaları
function FirmComparison() {
  //console.log(data, userFirmCompList);
  //Cards
  let cards = userFirmCompList.sort((a, b) => a > b).reduce((acc, curVal) =>
    acc +/*html*/`
      <div class="firmCard flex flex-col *:first:grow rounded-lg overflow-hidden">
        ${firmCard(data.filter(item => item.ID == curVal)[0])}
        <button class="w-full  bg-red-500 p-2  text-slate-50 font-bold shadow-sm hover:shadow-lg hover:cursor-pointer active:shadow-none" onclick="removeFirmCard(this, ${curVal})">Remove</button>
      </div>`, "");

  //Result HTML
  let result = /*html*/`
    <div class="p-2">
      <p>You can compare the firms by selecting them from the menu below and clicking the "Add" button.</p>
      <div class="*:mt-2">
        <!--Form-->
        <select class="border-2 p-2 rounded-lg border-slate-600 mt-5 sm:max-w-[340px] max-w-full">
          <option hidden value="">Select a Firm</option>
          ${data.filter(item => userFirmCompList.indexOf(item.ID) == -1).reduce((acc, curVal) => acc + /*html*/`<option value="${curVal.ID}">${curVal.FIRM}</option>`, "")}
        </select>
        <button
          type="button"
          class="w-full sm:max-w-fit  bg-blue-500 p-2 rounded-lg text-slate-50 font-bold shadow-sm hover:shadow-lg hover:cursor-pointer active:shadow-none"
          onclick="addFirmToUserCompList(this.previousElementSibling.value)"
        >Add (${userFirmCompList.length} / ${data.length})</button>
      </div>
      <!--Cards-->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 p-2 *:rounded-lg *:shadow-lg">
        ${cards}
      </div>
    </div>
  `


  return /*html*/`
    <div class="p-2" id="firmCompContainer">
      ${result}
    </div >
  `
}


document.addEventListener("DOMContentLoaded", () => {
  loadPage(Main(), "Firms");
  //loadPage(FirmComparison(), "x");
  //loadPage(TechInfo(), 'Teknik Bilgiler');
  //loadPage(AboutUs(), 'Teknik Bilgiler');
})
