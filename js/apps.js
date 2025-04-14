// Here all versions are located, the same as app.js but this time its apps.js because all versions info is located in this one file
// To add more versions, copy the versions.v1 and replace with versions.v2, and the same with others (it support more than 9 versions)
versions.v1 = {
  name: "Wolfgang",
  version: "1",
  date: "2025",
  folder: "asset-v1/", // ← If you are adding more versions, make sure follder is correct, for example "asset-v2/" for v2
  looptime: 5333,
  bpm: 90,
  totalframe: 260,
  nbpolo: 7,
  bonusloopA: false, // ← It makes bonus start on loop A, if its false, bonus will start after 1 loop
  bonusendloopA: true,
  colBck: "#0F0F0F",
  col0: "#919191",
  col1: "#5f5f5f",
  col2: "#4b4b4b",
  col3: "#373737",
  col4: "#232323",
  animearray: [
    {
      name: "temp_polo",
      color: "DD3170",
      uniqsnd: !0, // ← !0 means that polo will use only _a audio, if its !1 - it will use _a and _b
    },
    {
      name: "temp_polo",
      color: "DD3170",
      uniqsnd: !0,
    },
    {
      name: "temp_polo",
      color: "DD3170",
      uniqsnd: !0,
    },
    {
      name: "temp_polo",
      color: "DD3170",
      uniqsnd: !0,
    },
    {
      name: "temp_polo",
      color: "DD3170",
      uniqsnd: !0,
    },
    {
      name: "temp_polo",
      color: "DD3170",
      uniqsnd: !0,
    },
    {
      name: "temp_polo",
      color: "DD3170",
      uniqsnd: !0,
    },
    {
      name: "temp_polo",
      color: "DD3170",
      uniqsnd: !0,
    },
    {
      name: "temp_polo",
      color: "DD3170",
      uniqsnd: !0,
    },
    {
      name: "temp_polo",
      color: "DD3170",
      uniqsnd: !0,
    },
    {
      name: "temp_polo",
      color: "DD3170",
      uniqsnd: !0,
    },
    {
      name: "temp_polo",
      color: "DD3170",
      uniqsnd: !0,
    },
    {
      name: "temp_polo",
      color: "DD3170",
      uniqsnd: !0,
    },
    {
      name: "temp_polo",
      color: "DD3170",
      uniqsnd: !0,
    },
    {
      name: "temp_polo",
      color: "DD3170",
      uniqsnd: !0,
    },
    {
      name: "temp_polo",
      color: "FFCA28",
      uniqsnd: !0,
    },
    {
      name: "temp_polo",
      color: "FFCA28",
      uniqsnd: !0,
    },
    {
      name: "temp_polo",
      color: "FFCA28",
      uniqsnd: !0,
    },
    {
      name: "temp_polo",
      color: "FFCA28",
      uniqsnd: !0,
    },
    {
      name: "temp_polo",
      color: "DD3170",
      uniqsnd: !0,
    },
  ],
  bonusarray: [
    {
      name: "sunrise",
      src: "b1-v1-sunrise-hb",
      code: "1,2,3,4,5",
      sound: "aspire-sunrise",
      aspire: "aspire-sunrise",
      loop: 1, // ← Every bonus have its own loops in this version
    },
  ],
};

versions.v2 = {
  name: "Careless",
  version: "2",
  date: "2025",
  folder: "asset-v2/", // ← If you are adding more versions, make sure follder is correct, for example "asset-v2/" for v2
  looptime: 8000,
  bpm: 120,
  totalframe: 384,
  nbpolo: 7,
  bonusloopA: true, // ← It makes bonus start on loop A, if its false, bonus will start after 1 loop
  bonusendloopA: true,
  colBck: "#0F0046",
  col0: "#7E51B5",
  col1: "#7E51B5",
  col2: "#4b4b4b",
  col3: "#322177",
  col4: "#232323",
  animearray: [
    {
      name: "1_hat",
      color: "9372BF",
      uniqsnd: !0, // ← !0 means that polo will use only _a audio, if its !1 - it will use _a and _b
    },
    {
      name: "2_kick",
      color: "9372BF",
      uniqsnd: !1,
    },
    {
      name: "3_clap",
      color: "9372BF",
      uniqsnd: !0,
    },
    {
      name: "4_pudoum",
      color: "9372BF",
      uniqsnd: !0,
    },
    {
      name: "5_tiketou",
      color: "9372BF",
      uniqsnd: !1,
    },
    {
      name: "1_dou",
      color: "64C5EB",
      uniqsnd: !0,
    },
    {
      name: "2_long",
      color: "64C5EB",
      uniqsnd: !1,
    },
    {
      name: "3_rythme",
      color: "64C5EB",
      uniqsnd: !0,
    },
    {
      name: "4_daft",
      color: "64C5EB",
      uniqsnd: !0,
    },
    {
      name: "5_bass",
      color: "64C5EB",
      uniqsnd: !0,
    },
    {
      name: "1_hou",
      color: "DD3170",
      uniqsnd: !0,
    },
    {
      name: "2_pou",
      color: "DD3170",
      uniqsnd: !0,
    },
    {
      name: "3_horn",
      color: "DD3170",
      uniqsnd: !0,
    },
    {
      name: "4_guit",
      color: "DD3170",
      uniqsnd: !1,
    },
    {
      name: "5_tuu",
      color: "DD3170",
      uniqsnd: !0,
    },
    {
      name: "1_heya",
      color: "FFCA28",
      uniqsnd: !0,
    },
    {
      name: "2_careless",
      color: "FFCA28",
      uniqsnd: !0,
    },
    {
      name: "3_who-cares",
      color: "FFCA28",
      uniqsnd: !0,
    },
    {
      name: "4_skee",
      color: "FFCA28",
      uniqsnd: !0,
    },
    {
      name: "5_everything",
      color: "FFCA28",
      uniqsnd: !0,
    },
  ],
  bonusarray: [
    {
      name: "Sunrise",
      src: "bonus-sunrise",
      code: "2,3,5,7,13",
      sound: "bonus-sunrise",
      aspire: "aspire-sunrise",
      loop: 2, 
    },
  ],
};

// versions.v2 = {
//  name: "New Version",
// version: "2",
// date: "2025",
// ...