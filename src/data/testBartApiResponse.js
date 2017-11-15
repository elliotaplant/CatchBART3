const testBartApiResponse = {
   "?xml":{
      "@version":"1.0",
      "@encoding":"utf-8"
   },
   "root":{
      "@id":"1",
      "uri":{
         "#cdata-section":"http://api.bart.gov/api/etd.aspx?cmd=etd&orig=12TH&dir=n&json=y"
      },
      "date":"11/03/2017",
      "time":"05:45:16 PM PDT",
      "station":[
         {
            "name":"12th St. Oakland City Center",
            "abbr":"12TH",
            "etd":[
               {
                  "destination":"Pittsburg/Bay Point",
                  "abbreviation":"PITT",
                  "limited":"0",
                  "estimate":[
                     {
                        "minutes":"7",
                        "platform":"3",
                        "direction":"North",
                        "length":"9",
                        "color":"YELLOW",
                        "hexcolor":"#ffff33",
                        "bikeflag":"1",
                        "delay":"269"
                     },
                     {
                        "minutes":"11",
                        "platform":"3",
                        "direction":"North",
                        "length":"10",
                        "color":"YELLOW",
                        "hexcolor":"#ffff33",
                        "bikeflag":"1",
                        "delay":"213"
                     },
                     {
                        "minutes":"23",
                        "platform":"3",
                        "direction":"North",
                        "length":"10",
                        "color":"YELLOW",
                        "hexcolor":"#ffff33",
                        "bikeflag":"1",
                        "delay":"0"
                     }
                  ]
               },
               {
                  "destination":"Richmond",
                  "abbreviation":"RICH",
                  "limited":"0",
                  "estimate":[
                     {
                        "minutes":"1",
                        "platform":"1",
                        "direction":"North",
                        "length":"10",
                        "color":"RED",
                        "hexcolor":"#ff0000",
                        "bikeflag":"1",
                        "delay":"0"
                     },
                     {
                        "minutes":"9",
                        "platform":"1",
                        "direction":"North",
                        "length":"6",
                        "color":"ORANGE",
                        "hexcolor":"#ff9933",
                        "bikeflag":"1",
                        "delay":"61"
                     },
                     {
                        "minutes":"16",
                        "platform":"1",
                        "direction":"North",
                        "length":"8",
                        "color":"RED",
                        "hexcolor":"#ff0000",
                        "bikeflag":"1",
                        "delay":"0"
                     }
                  ]
               }
            ]
         }
      ],
      "message":""
   }
};
export default testResponse;