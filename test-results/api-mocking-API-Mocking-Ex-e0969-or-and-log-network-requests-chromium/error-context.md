# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api-mocking.spec.ts >> API Mocking Examples >> Monitor and log network requests
- Location: tests/api-mocking.spec.ts:48:7

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.waitForLoadState: Test timeout of 30000ms exceeded.
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e5]:
      - link "Website for automation practice" [ref=e8] [cursor=pointer]:
        - /url: /
        - img "Website for automation practice" [ref=e9]
      - list [ref=e12]:
        - listitem [ref=e13]:
          - link " Home" [ref=e14] [cursor=pointer]:
            - /url: /
            - generic [ref=e15]: 
            - text: Home
        - listitem [ref=e16]:
          - link " Products" [ref=e17] [cursor=pointer]:
            - /url: /products
            - generic [ref=e18]: 
            - text: Products
        - listitem [ref=e19]:
          - link " Cart" [ref=e20] [cursor=pointer]:
            - /url: /view_cart
            - generic [ref=e21]: 
            - text: Cart
        - listitem [ref=e22]:
          - link " Signup / Login" [ref=e23] [cursor=pointer]:
            - /url: /login
            - generic [ref=e24]: 
            - text: Signup / Login
        - listitem [ref=e25]:
          - link " Test Cases" [ref=e26] [cursor=pointer]:
            - /url: /test_cases
            - generic [ref=e27]: 
            - text: Test Cases
        - listitem [ref=e28]:
          - link " API Testing" [ref=e29] [cursor=pointer]:
            - /url: /api_list
            - generic [ref=e30]: 
            - text: API Testing
        - listitem [ref=e31]:
          - link " Video Tutorials" [ref=e32] [cursor=pointer]:
            - /url: https://www.youtube.com/c/AutomationExercise
            - generic [ref=e33]: 
            - text: Video Tutorials
        - listitem [ref=e34]:
          - link " Contact us" [ref=e35] [cursor=pointer]:
            - /url: /contact_us
            - generic [ref=e36]: 
            - text: Contact us
  - generic [ref=e41]:
    - list [ref=e42]:
      - listitem [ref=e43] [cursor=pointer]
      - listitem [ref=e44] [cursor=pointer]
      - listitem [ref=e45] [cursor=pointer]
    - generic [ref=e46]:
      - generic:
        - generic [ref=e47]:
          - heading "AutomationExercise" [level=1] [ref=e48]
          - heading "Full-Fledged practice website for Automation Engineers" [level=2] [ref=e49]
          - paragraph [ref=e50]: All QA engineers can use this website for automation practice and API testing either they are at beginner or advance level. This is for everybody to help them brush up their automation skills.
          - link "Test Cases" [ref=e51] [cursor=pointer]:
            - /url: /test_cases
            - button "Test Cases" [ref=e52]
          - link "APIs list for practice" [ref=e53] [cursor=pointer]:
            - /url: /api_list
            - button "APIs list for practice" [ref=e54]
        - img "demo website for practice" [ref=e56]
    - link "" [ref=e57] [cursor=pointer]:
      - /url: "#slider-carousel"
      - generic [ref=e58]: 
    - link "" [ref=e59] [cursor=pointer]:
      - /url: "#slider-carousel"
      - generic [ref=e60]: 
  - generic [ref=e63]:
    - generic [ref=e65]:
      - heading "Category" [level=2] [ref=e66]
      - generic [ref=e67]:
        - heading " Women" [level=4] [ref=e70]:
          - link " Women" [ref=e71] [cursor=pointer]:
            - /url: "#Women"
            - generic [ref=e73]: 
            - text: Women
        - heading " Men" [level=4] [ref=e76]:
          - link " Men" [ref=e77] [cursor=pointer]:
            - /url: "#Men"
            - generic [ref=e79]: 
            - text: Men
        - heading " Kids" [level=4] [ref=e82]:
          - link " Kids" [ref=e83] [cursor=pointer]:
            - /url: "#Kids"
            - generic [ref=e85]: 
            - text: Kids
      - insertion [ref=e87]:
        - iframe [ref=e89]:
          - iframe [ref=f7e1]:
            - generic [ref=f9e2]:
              - iframe [ref=f9e3] [cursor=pointer]:
                - img [ref=f16e2]
              - link [ref=f9e4] [cursor=pointer]:
                - /url: https://insight.adsrvr.org/track/clk?imp=59f00a8c-9b74-4c95-ad67-eb64671b5d06&ag=ra1cyrj&sfe=1c801ee5&sig=jopO5x9PSPxbkQxwMSnWqtbl2F71WYSeoeaQ-goSjlU.&crid=sl6fvezp&cf=10748567&fq=0&t=1&td_s=automationexercise.com&rcats=&mste=&mfld=3&mssi=&mfsi=&sv=google&uhow=155&agsa=&wp=akie5QAJW3UFwkyiAA9AMvns6V60B_xfbE4Nfw&rgz=382330&dt=PC&osf=Windows&os=Windows10&br=Chrome&svpid=pub-1677597403311019&rlangs=en&mlang=&did=&rcxt=Other&tmpc=29.390000000000043&vrtd=&osi=&osv=&daid=&dnr=0&vpb=&crrelr=&npt=&cc=3~KLUv_WPYfRZoDgKFDQD0EIwK8Fl0m5VMEa1n62RnG10GQgdyYTFjeXJqSLbo2w1Ql4WQBVoIc2w2ZnZlenBgzdn-b25jNU5YbEQ5U1lSY1h2QjBibWhIMTADwAGbARMgLSAyMYHG6JGHC3pueXp2ZDPQAqOfjAM3UkAOYjFhfGRhbXwtQ1JNNi3o9MycweasPwoxMMic_t-C0sbGyAEQv8KRFkNBeUM3YkNBNVpUQUc3SV9yX0YtYh-yhai6NdkzuNlPdQI9k4WJUcLHThGGzQSel1i-kd6NjsOYlAAGCJiKI4ojBgi3pwf3BAEDmBMAqBM8yBM80BMA_RMzM5M_gBQBoBQAsBQAuBQAyBQA6hQKCPKBxuiRhwsYHvAUkQEw_PAHHvFnebDdA0K8unqQtWLzNEX3Jw5C3L6hdJOdQ2nLEFouYUmAyb1TVwcjWFeIAPmMU3VQ36vQN2Z2K5E0MY6U4ksxG3Nw-JsbTkKXycVqwHcK7xoMEuhNzKNdixbKSMtCUN3MjLEhIJPUW2Ry0Ht6yGV3GX0GYIy-VBajz2o5euoPWiEw5wbv2hUxdXavJrNW5GUVC4FgUbalYQE.&dur=1~KLUv_SMFoCgkXbUAAEggAigFTXEQwz4DfACfji89wd3jDnw.&durs=bNqsB7&bdc=14&testid=b1a%7Cdam%7C-CRM6-&fpa=399&pcm=3&ict=Unknown&said=CAyC7bCA5ZTAG7I_r_F-bg&auct=1&tail=1&r=https://adclick.g.doubleclick.net/aclk%3Fsa%3DL%26ai%3DCNE3_5Z5IavW2JaKZid4PsoC9uA--p-f2dPb-j45XwI23ARABIP20npUBYOXS5IOoDsgBCagDAcgDAqoE7QFP0HV2KH2tKuc5L1pGiPOS1nmSuO_XeVG7ERRGg7tN7qBUA_MlbZDH0A9RWtfCpHB2_kgU1g9H6RRzdroVUCTxp-vWdZUulH1e-g-BlzI5YHHcq7I2K43mrkRkxFQKPudx8VRj8BtmDsFI6PWjqVkqvjNz1WymSfNIP69QjEKKRPle3zBirlN6Ixk7D_-LPak70Z7Z443tiUxhqDgmBuGF9sB4GQP319WIxcg6SCegSIgxK5tNOomZ6kMnOvLmzlkXUyMAQeS98TsDYtHPPrtGgDAIT7cWHcn6boiHB1Mb7pMGXvxZKTG8auIhegWABuDF-p7S6MO_8AGgBiGoB5PYsQKoB5TYsQKoB5XYsQKoB6a-G6gHltgbqAeqm7ECqAf_nrECqAffn7ECqAetvrECqAe_07EC2AcA0ggwCIBhEAEyCIqCgICAgIAIOg-AQIDAgICAgKiAAqiDgBBIvf3BOljAyMrUqbiVA2AA-gsCCAGADAGqDQJJTuoNEwj2w8zUqbiVAxWiTMIFHTJAD_eIDgnQFQGAFwGyFwQYDFAB%26num%3D1%26sig%3DAOD64_1pEdKfd5mKCQoGBqYXSsU3k-C56w%26client%3Dca-pub-1677597403311019%26adurl%3Dhttps://netshort.onelink.me/XC68?pid=thetradedesk_int&af_siteid=automationexercise.com&c=znyzvd3&af_c_id=znyzvd3&af_adset_id=ra1cyrj&af_ad_id=sl6fvezp&af_click_lookback=7d&clickid=59f00a8c-9b74-4c95-ad67-eb64671b5d06&idfa=&advertising_id=&android_id=
                - img [ref=f9e5]
      - generic [ref=e90]:
        - heading "Brands" [level=2] [ref=e91]
        - list [ref=e93]:
          - listitem [ref=e94]:
            - link "(6) Polo" [ref=e95] [cursor=pointer]:
              - /url: /brand_products/Polo
              - generic [ref=e96]: (6)
              - text: Polo
          - listitem [ref=e97]:
            - link "(5) H&M" [ref=e98] [cursor=pointer]:
              - /url: /brand_products/H&M
              - generic [ref=e99]: (5)
              - text: H&M
          - listitem [ref=e100]:
            - link "(5) Madame" [ref=e101] [cursor=pointer]:
              - /url: /brand_products/Madame
              - generic [ref=e102]: (5)
              - text: Madame
          - listitem [ref=e103]:
            - link "(3) Mast & Harbour" [ref=e104] [cursor=pointer]:
              - /url: /brand_products/Mast & Harbour
              - generic [ref=e105]: (3)
              - text: Mast & Harbour
          - listitem [ref=e106]:
            - link "(4) Babyhug" [ref=e107] [cursor=pointer]:
              - /url: /brand_products/Babyhug
              - generic [ref=e108]: (4)
              - text: Babyhug
          - listitem [ref=e109]:
            - link "(3) Allen Solly Junior" [ref=e110] [cursor=pointer]:
              - /url: /brand_products/Allen Solly Junior
              - generic [ref=e111]: (3)
              - text: Allen Solly Junior
          - listitem [ref=e112]:
            - link "(3) Kookie Kids" [ref=e113] [cursor=pointer]:
              - /url: /brand_products/Kookie Kids
              - generic [ref=e114]: (3)
              - text: Kookie Kids
          - listitem [ref=e115]:
            - link "(5) Biba" [ref=e116] [cursor=pointer]:
              - /url: /brand_products/Biba
              - generic [ref=e117]: (5)
              - text: Biba
    - generic [ref=e118]:
      - generic [ref=e119]:
        - heading "Features Items" [level=2] [ref=e120]
        - generic [ref=e122]:
          - generic [ref=e123]:
            - generic [ref=e124]:
              - img "ecommerce website products" [ref=e125]
              - heading "Rs. 500" [level=2] [ref=e126]
              - paragraph [ref=e127]: Blue Top
              - generic [ref=e128] [cursor=pointer]:
                - generic [ref=e129]: 
                - text: Add to cart
            - generic [ref=e130]:
              - heading "Rs. 500" [level=2] [ref=e131]
              - paragraph [ref=e132]: Blue Top
              - generic [ref=e133] [cursor=pointer]:
                - generic [ref=e134]: 
                - text: Add to cart
          - list [ref=e136]:
            - listitem [ref=e137]:
              - link " View Product" [ref=e138] [cursor=pointer]:
                - /url: /product_details/1
                - generic [ref=e139]: 
                - text: View Product
        - generic [ref=e141]:
          - generic [ref=e142]:
            - generic [ref=e143]:
              - img "ecommerce website products" [ref=e144]
              - heading "Rs. 400" [level=2] [ref=e145]
              - paragraph [ref=e146]: Men Tshirt
              - generic [ref=e147] [cursor=pointer]:
                - generic [ref=e148]: 
                - text: Add to cart
            - generic [ref=e149]:
              - heading "Rs. 400" [level=2] [ref=e150]
              - paragraph [ref=e151]: Men Tshirt
              - generic [ref=e152] [cursor=pointer]:
                - generic [ref=e153]: 
                - text: Add to cart
          - list [ref=e155]:
            - listitem [ref=e156]:
              - link " View Product" [ref=e157] [cursor=pointer]:
                - /url: /product_details/2
                - generic [ref=e158]: 
                - text: View Product
        - generic [ref=e160]:
          - generic [ref=e161]:
            - generic [ref=e162]:
              - img "ecommerce website products" [ref=e163]
              - heading "Rs. 1000" [level=2] [ref=e164]
              - paragraph [ref=e165]: Sleeveless Dress
              - generic [ref=e166] [cursor=pointer]:
                - generic [ref=e167]: 
                - text: Add to cart
            - generic [ref=e168]:
              - heading "Rs. 1000" [level=2] [ref=e169]
              - paragraph [ref=e170]: Sleeveless Dress
              - generic [ref=e171] [cursor=pointer]:
                - generic [ref=e172]: 
                - text: Add to cart
          - list [ref=e174]:
            - listitem [ref=e175]:
              - link " View Product" [ref=e176] [cursor=pointer]:
                - /url: /product_details/3
                - generic [ref=e177]: 
                - text: View Product
        - generic [ref=e179]:
          - generic [ref=e180]:
            - generic [ref=e181]:
              - img "ecommerce website products" [ref=e182]
              - heading "Rs. 1500" [level=2] [ref=e183]
              - paragraph [ref=e184]: Stylish Dress
              - generic [ref=e185] [cursor=pointer]:
                - generic [ref=e186]: 
                - text: Add to cart
            - generic [ref=e187]:
              - heading "Rs. 1500" [level=2] [ref=e188]
              - paragraph [ref=e189]: Stylish Dress
              - generic [ref=e190] [cursor=pointer]:
                - generic [ref=e191]: 
                - text: Add to cart
          - list [ref=e193]:
            - listitem [ref=e194]:
              - link " View Product" [ref=e195] [cursor=pointer]:
                - /url: /product_details/4
                - generic [ref=e196]: 
                - text: View Product
        - generic [ref=e198]:
          - generic [ref=e199]:
            - generic [ref=e200]:
              - img "ecommerce website products" [ref=e201]
              - heading "Rs. 600" [level=2] [ref=e202]
              - paragraph [ref=e203]: Winter Top
              - generic [ref=e204] [cursor=pointer]:
                - generic [ref=e205]: 
                - text: Add to cart
            - generic [ref=e206]:
              - heading "Rs. 600" [level=2] [ref=e207]
              - paragraph [ref=e208]: Winter Top
              - generic [ref=e209] [cursor=pointer]:
                - generic [ref=e210]: 
                - text: Add to cart
          - list [ref=e212]:
            - listitem [ref=e213]:
              - link " View Product" [ref=e214] [cursor=pointer]:
                - /url: /product_details/5
                - generic [ref=e215]: 
                - text: View Product
        - generic [ref=e217]:
          - generic [ref=e218]:
            - generic [ref=e219]:
              - img "ecommerce website products" [ref=e220]
              - heading "Rs. 400" [level=2] [ref=e221]
              - paragraph [ref=e222]: Summer White Top
              - generic [ref=e223] [cursor=pointer]:
                - generic [ref=e224]: 
                - text: Add to cart
            - generic [ref=e225]:
              - heading "Rs. 400" [level=2] [ref=e226]
              - paragraph [ref=e227]: Summer White Top
              - generic [ref=e228] [cursor=pointer]:
                - generic [ref=e229]: 
                - text: Add to cart
          - list [ref=e231]:
            - listitem [ref=e232]:
              - link " View Product" [ref=e233] [cursor=pointer]:
                - /url: /product_details/6
                - generic [ref=e234]: 
                - text: View Product
        - generic [ref=e236]:
          - generic [ref=e237]:
            - generic [ref=e238]:
              - img "ecommerce website products" [ref=e239]
              - heading "Rs. 1000" [level=2] [ref=e240]
              - paragraph [ref=e241]: Madame Top For Women
              - generic [ref=e242] [cursor=pointer]:
                - generic [ref=e243]: 
                - text: Add to cart
            - generic [ref=e244]:
              - heading "Rs. 1000" [level=2] [ref=e245]
              - paragraph [ref=e246]: Madame Top For Women
              - generic [ref=e247] [cursor=pointer]:
                - generic [ref=e248]: 
                - text: Add to cart
          - list [ref=e250]:
            - listitem [ref=e251]:
              - link " View Product" [ref=e252] [cursor=pointer]:
                - /url: /product_details/7
                - generic [ref=e253]: 
                - text: View Product
        - generic [ref=e255]:
          - generic [ref=e256]:
            - generic [ref=e257]:
              - img "ecommerce website products" [ref=e258]
              - heading "Rs. 700" [level=2] [ref=e259]
              - paragraph [ref=e260]: Fancy Green Top
              - generic [ref=e261] [cursor=pointer]:
                - generic [ref=e262]: 
                - text: Add to cart
            - generic [ref=e263]:
              - heading "Rs. 700" [level=2] [ref=e264]
              - paragraph [ref=e265]: Fancy Green Top
              - generic [ref=e266] [cursor=pointer]:
                - generic [ref=e267]: 
                - text: Add to cart
          - list [ref=e269]:
            - listitem [ref=e270]:
              - link " View Product" [ref=e271] [cursor=pointer]:
                - /url: /product_details/8
                - generic [ref=e272]: 
                - text: View Product
        - generic [ref=e274]:
          - generic [ref=e275]:
            - generic [ref=e276]:
              - img "ecommerce website products" [ref=e277]
              - heading "Rs. 499" [level=2] [ref=e278]
              - paragraph [ref=e279]:
                - text: Sleeves Printed Top - White
                - link "Web design services" [ref=e280] [cursor=pointer]:
                  - img [ref=e282]
                  - text: Web design services
              - generic [ref=e284] [cursor=pointer]:
                - generic [ref=e285]: 
                - text: Add to cart
            - generic [ref=e286]:
              - heading "Rs. 499" [level=2] [ref=e287]
              - paragraph [ref=e288]: Sleeves Printed Top - White
              - generic [ref=e289] [cursor=pointer]:
                - generic [ref=e290]: 
                - text: Add to cart
          - list [ref=e292]:
            - listitem [ref=e293]:
              - link " View Product" [ref=e294] [cursor=pointer]:
                - /url: /product_details/11
                - generic [ref=e295]: 
                - text: View Product
        - generic [ref=e297]:
          - generic [ref=e298]:
            - generic [ref=e299]:
              - img "ecommerce website products" [ref=e300]
              - heading "Rs. 359" [level=2] [ref=e301]
              - paragraph [ref=e302]:
                - text: Half Sleeves Top Schiffli Detailing - Pink
                - link "Quality assurance consulting" [ref=e303] [cursor=pointer]:
                  - img [ref=e305]
                  - text: Quality assurance consulting
              - generic [ref=e307] [cursor=pointer]:
                - generic [ref=e308]: 
                - text: Add to cart
            - generic [ref=e309]:
              - heading "Rs. 359" [level=2] [ref=e310]
              - paragraph [ref=e311]: Half Sleeves Top Schiffli Detailing - Pink
              - generic [ref=e312] [cursor=pointer]:
                - generic [ref=e313]: 
                - text: Add to cart
          - list [ref=e315]:
            - listitem [ref=e316]:
              - link " View Product" [ref=e317] [cursor=pointer]:
                - /url: /product_details/12
                - generic [ref=e318]: 
                - text: View Product
        - generic [ref=e320]:
          - generic [ref=e321]:
            - generic [ref=e322]:
              - img "ecommerce website products" [ref=e323]
              - heading "Rs. 278" [level=2] [ref=e324]
              - paragraph [ref=e325]: Frozen Tops For Kids
              - generic [ref=e326] [cursor=pointer]:
                - generic [ref=e327]: 
                - text: Add to cart
            - generic [ref=e328]:
              - heading "Rs. 278" [level=2] [ref=e329]
              - paragraph [ref=e330]: Frozen Tops For Kids
              - generic [ref=e331] [cursor=pointer]:
                - generic [ref=e332]: 
                - text: Add to cart
          - list [ref=e334]:
            - listitem [ref=e335]:
              - link " View Product" [ref=e336] [cursor=pointer]:
                - /url: /product_details/13
                - generic [ref=e337]: 
                - text: View Product
        - generic [ref=e339]:
          - generic [ref=e340]:
            - generic [ref=e341]:
              - img "ecommerce website products" [ref=e342]
              - heading "Rs. 679" [level=2] [ref=e343]
              - paragraph [ref=e344]:
                - text: Full Sleeves Top Cherry - Pink
                - link "API testing tools" [ref=e345] [cursor=pointer]:
                  - img [ref=e347]
                  - text: API testing tools
              - generic [ref=e349] [cursor=pointer]:
                - generic [ref=e350]: 
                - text: Add to cart
            - generic [ref=e351]:
              - heading "Rs. 679" [level=2] [ref=e352]
              - paragraph [ref=e353]: Full Sleeves Top Cherry - Pink
              - generic [ref=e354] [cursor=pointer]:
                - generic [ref=e355]: 
                - text: Add to cart
          - list [ref=e357]:
            - listitem [ref=e358]:
              - link " View Product" [ref=e359] [cursor=pointer]:
                - /url: /product_details/14
                - generic [ref=e360]: 
                - text: View Product
        - generic [ref=e362]:
          - generic [ref=e363]:
            - generic [ref=e364]:
              - img "ecommerce website products" [ref=e365]
              - heading "Rs. 315" [level=2] [ref=e366]
              - paragraph [ref=e367]: Printed Off Shoulder Top - White
              - generic [ref=e368] [cursor=pointer]:
                - generic [ref=e369]: 
                - text: Add to cart
            - generic [ref=e370]:
              - heading "Rs. 315" [level=2] [ref=e371]
              - paragraph [ref=e372]: Printed Off Shoulder Top - White
              - generic [ref=e373] [cursor=pointer]:
                - generic [ref=e374]: 
                - text: Add to cart
          - list [ref=e376]:
            - listitem [ref=e377]:
              - link " View Product" [ref=e378] [cursor=pointer]:
                - /url: /product_details/15
                - generic [ref=e379]: 
                - text: View Product
        - generic [ref=e381]:
          - generic [ref=e382]:
            - generic [ref=e383]:
              - img "ecommerce website products" [ref=e384]
              - heading "Rs. 478" [level=2] [ref=e385]
              - paragraph [ref=e386]: Sleeves Top and Short - Blue & Pink
              - generic [ref=e387] [cursor=pointer]:
                - generic [ref=e388]: 
                - text: Add to cart
            - generic [ref=e389]:
              - heading "Rs. 478" [level=2] [ref=e390]
              - paragraph [ref=e391]: Sleeves Top and Short - Blue & Pink
              - generic [ref=e392] [cursor=pointer]:
                - generic [ref=e393]: 
                - text: Add to cart
          - list [ref=e395]:
            - listitem [ref=e396]:
              - link " View Product" [ref=e397] [cursor=pointer]:
                - /url: /product_details/16
                - generic [ref=e398]: 
                - text: View Product
        - generic [ref=e400]:
          - generic [ref=e401]:
            - generic [ref=e402]:
              - img "ecommerce website products" [ref=e403]
              - heading "Rs. 1200" [level=2] [ref=e404]
              - paragraph [ref=e405]: Little Girls Mr. Panda Shirt
              - generic [ref=e406] [cursor=pointer]:
                - generic [ref=e407]: 
                - text: Add to cart
            - generic [ref=e408]:
              - heading "Rs. 1200" [level=2] [ref=e409]
              - paragraph [ref=e410]: Little Girls Mr. Panda Shirt
              - generic [ref=e411] [cursor=pointer]:
                - generic [ref=e412]: 
                - text: Add to cart
          - list [ref=e414]:
            - listitem [ref=e415]:
              - link " View Product" [ref=e416] [cursor=pointer]:
                - /url: /product_details/18
                - generic [ref=e417]: 
                - text: View Product
        - generic [ref=e419]:
          - generic [ref=e420]:
            - generic [ref=e421]:
              - img "ecommerce website products" [ref=e422]
              - heading "Rs. 1050" [level=2] [ref=e423]
              - paragraph [ref=e424]:
                - text: Sleeveless Unicorn Patch Gown - Pink
                - link "Software testing services" [ref=e425] [cursor=pointer]:
                  - img [ref=e427]
                  - text: Software testing services
              - generic [ref=e429] [cursor=pointer]:
                - generic [ref=e430]: 
                - text: Add to cart
            - generic [ref=e431]:
              - heading "Rs. 1050" [level=2] [ref=e432]
              - paragraph [ref=e433]: Sleeveless Unicorn Patch Gown - Pink
              - generic [ref=e434] [cursor=pointer]:
                - generic [ref=e435]: 
                - text: Add to cart
          - list [ref=e437]:
            - listitem [ref=e438]:
              - link " View Product" [ref=e439] [cursor=pointer]:
                - /url: /product_details/19
                - generic [ref=e440]: 
                - text: View Product
        - generic [ref=e442]:
          - generic [ref=e443]:
            - generic [ref=e444]:
              - img "ecommerce website products" [ref=e445]
              - heading "Rs. 1190" [level=2] [ref=e446]
              - paragraph [ref=e447]: Cotton Mull Embroidered Dress
              - generic [ref=e448] [cursor=pointer]:
                - generic [ref=e449]: 
                - text: Add to cart
            - generic [ref=e450]:
              - heading "Rs. 1190" [level=2] [ref=e451]
              - paragraph [ref=e452]: Cotton Mull Embroidered Dress
              - generic [ref=e453] [cursor=pointer]:
                - generic [ref=e454]: 
                - text: Add to cart
          - list [ref=e456]:
            - listitem [ref=e457]:
              - link " View Product" [ref=e458] [cursor=pointer]:
                - /url: /product_details/20
                - generic [ref=e459]: 
                - text: View Product
        - generic [ref=e461]:
          - generic [ref=e462]:
            - generic [ref=e463]:
              - img "ecommerce website products" [ref=e464]
              - heading "Rs. 1530" [level=2] [ref=e465]
              - paragraph [ref=e466]: Blue Cotton Indie Mickey Dress
              - generic [ref=e467] [cursor=pointer]:
                - generic [ref=e468]: 
                - text: Add to cart
            - generic [ref=e469]:
              - heading "Rs. 1530" [level=2] [ref=e470]
              - paragraph [ref=e471]: Blue Cotton Indie Mickey Dress
              - generic [ref=e472] [cursor=pointer]:
                - generic [ref=e473]: 
                - text: Add to cart
          - list [ref=e475]:
            - listitem [ref=e476]:
              - link " View Product" [ref=e477] [cursor=pointer]:
                - /url: /product_details/21
                - generic [ref=e478]: 
                - text: View Product
        - generic [ref=e480]:
          - generic [ref=e481]:
            - generic [ref=e482]:
              - img "ecommerce website products" [ref=e483]
              - heading "Rs. 1600" [level=2] [ref=e484]
              - paragraph [ref=e485]: Long Maxi Tulle Fancy Dress Up Outfits -Pink
              - generic [ref=e486] [cursor=pointer]:
                - generic [ref=e487]: 
                - text: Add to cart
            - generic [ref=e488]:
              - heading "Rs. 1600" [level=2] [ref=e489]
              - paragraph [ref=e490]: Long Maxi Tulle Fancy Dress Up Outfits -Pink
              - generic [ref=e491] [cursor=pointer]:
                - generic [ref=e492]: 
                - text: Add to cart
          - list [ref=e494]:
            - listitem [ref=e495]:
              - link " View Product" [ref=e496] [cursor=pointer]:
                - /url: /product_details/22
                - generic [ref=e497]: 
                - text: View Product
        - generic [ref=e499]:
          - generic [ref=e500]:
            - generic [ref=e501]:
              - img "ecommerce website products" [ref=e502]
              - heading "Rs. 1100" [level=2] [ref=e503]
              - paragraph [ref=e504]: Sleeveless Unicorn Print Fit & Flare Net Dress - Multi
              - generic [ref=e505] [cursor=pointer]:
                - generic [ref=e506]: 
                - text: Add to cart
            - generic [ref=e507]:
              - heading "Rs. 1100" [level=2] [ref=e508]
              - paragraph [ref=e509]: Sleeveless Unicorn Print Fit & Flare Net Dress - Multi
              - generic [ref=e510] [cursor=pointer]:
                - generic [ref=e511]: 
                - text: Add to cart
          - list [ref=e513]:
            - listitem [ref=e514]:
              - link " View Product" [ref=e515] [cursor=pointer]:
                - /url: /product_details/23
                - generic [ref=e516]: 
                - text: View Product
        - generic [ref=e518]:
          - generic [ref=e519]:
            - generic [ref=e520]:
              - img "ecommerce website products" [ref=e521]
              - heading "Rs. 849" [level=2] [ref=e522]
              - paragraph [ref=e523]: Colour Blocked Shirt – Sky Blue
              - generic [ref=e524] [cursor=pointer]:
                - generic [ref=e525]: 
                - text: Add to cart
            - generic [ref=e526]:
              - heading "Rs. 849" [level=2] [ref=e527]
              - paragraph [ref=e528]: Colour Blocked Shirt – Sky Blue
              - generic [ref=e529] [cursor=pointer]:
                - generic [ref=e530]: 
                - text: Add to cart
          - list [ref=e532]:
            - listitem [ref=e533]:
              - link " View Product" [ref=e534] [cursor=pointer]:
                - /url: /product_details/24
                - generic [ref=e535]: 
                - text: View Product
        - generic [ref=e537]:
          - generic [ref=e538]:
            - generic [ref=e539]:
              - img "ecommerce website products" [ref=e540]
              - heading "Rs. 1299" [level=2] [ref=e541]
              - paragraph [ref=e542]: Pure Cotton V-Neck T-Shirt
              - generic [ref=e543] [cursor=pointer]:
                - generic [ref=e544]: 
                - text: Add to cart
            - generic [ref=e545]:
              - heading "Rs. 1299" [level=2] [ref=e546]
              - paragraph [ref=e547]: Pure Cotton V-Neck T-Shirt
              - generic [ref=e548] [cursor=pointer]:
                - generic [ref=e549]: 
                - text: Add to cart
          - list [ref=e551]:
            - listitem [ref=e552]:
              - link " View Product" [ref=e553] [cursor=pointer]:
                - /url: /product_details/28
                - generic [ref=e554]: 
                - text: View Product
        - generic [ref=e556]:
          - generic [ref=e557]:
            - generic [ref=e558]:
              - img "ecommerce website products" [ref=e559]
              - heading "Rs. 1000" [level=2] [ref=e560]
              - paragraph [ref=e561]: Green Side Placket Detail T-Shirt
              - generic [ref=e562] [cursor=pointer]:
                - generic [ref=e563]: 
                - text: Add to cart
            - generic [ref=e564]:
              - heading "Rs. 1000" [level=2] [ref=e565]
              - paragraph [ref=e566]: Green Side Placket Detail T-Shirt
              - generic [ref=e567] [cursor=pointer]:
                - generic [ref=e568]: 
                - text: Add to cart
          - list [ref=e570]:
            - listitem [ref=e571]:
              - link " View Product" [ref=e572] [cursor=pointer]:
                - /url: /product_details/29
                - generic [ref=e573]: 
                - text: View Product
        - generic [ref=e575]:
          - generic [ref=e576]:
            - generic [ref=e577]:
              - img "ecommerce website products" [ref=e578]
              - heading "Rs. 1500" [level=2] [ref=e579]
              - paragraph [ref=e580]: Premium Polo T-Shirts
              - generic [ref=e581] [cursor=pointer]:
                - generic [ref=e582]: 
                - text: Add to cart
            - generic [ref=e583]:
              - heading "Rs. 1500" [level=2] [ref=e584]
              - paragraph [ref=e585]: Premium Polo T-Shirts
              - generic [ref=e586] [cursor=pointer]:
                - generic [ref=e587]: 
                - text: Add to cart
          - list [ref=e589]:
            - listitem [ref=e590]:
              - link " View Product" [ref=e591] [cursor=pointer]:
                - /url: /product_details/30
                - generic [ref=e592]: 
                - text: View Product
        - generic [ref=e594]:
          - generic [ref=e595]:
            - generic [ref=e596]:
              - img "ecommerce website products" [ref=e597]
              - heading "Rs. 850" [level=2] [ref=e598]
              - paragraph [ref=e599]: Pure Cotton Neon Green Tshirt
              - generic [ref=e600] [cursor=pointer]:
                - generic [ref=e601]: 
                - text: Add to cart
            - generic [ref=e602]:
              - heading "Rs. 850" [level=2] [ref=e603]
              - paragraph [ref=e604]: Pure Cotton Neon Green Tshirt
              - generic [ref=e605] [cursor=pointer]:
                - generic [ref=e606]: 
                - text: Add to cart
          - list [ref=e608]:
            - listitem [ref=e609]:
              - link " View Product" [ref=e610] [cursor=pointer]:
                - /url: /product_details/31
                - generic [ref=e611]: 
                - text: View Product
        - generic [ref=e613]:
          - generic [ref=e614]:
            - generic [ref=e615]:
              - img "ecommerce website products" [ref=e616]
              - heading "Rs. 799" [level=2] [ref=e617]
              - paragraph [ref=e618]: Soft Stretch Jeans
              - generic [ref=e619] [cursor=pointer]:
                - generic [ref=e620]: 
                - text: Add to cart
            - generic [ref=e621]:
              - heading "Rs. 799" [level=2] [ref=e622]
              - paragraph [ref=e623]: Soft Stretch Jeans
              - generic [ref=e624] [cursor=pointer]:
                - generic [ref=e625]: 
                - text: Add to cart
          - list [ref=e627]:
            - listitem [ref=e628]:
              - link " View Product" [ref=e629] [cursor=pointer]:
                - /url: /product_details/33
                - generic [ref=e630]: 
                - text: View Product
        - generic [ref=e632]:
          - generic [ref=e633]:
            - generic [ref=e634]:
              - img "ecommerce website products" [ref=e635]
              - heading "Rs. 1200" [level=2] [ref=e636]
              - paragraph [ref=e637]: Regular Fit Straight Jeans
              - generic [ref=e638] [cursor=pointer]:
                - generic [ref=e639]: 
                - text: Add to cart
            - generic [ref=e640]:
              - heading "Rs. 1200" [level=2] [ref=e641]
              - paragraph [ref=e642]: Regular Fit Straight Jeans
              - generic [ref=e643] [cursor=pointer]:
                - generic [ref=e644]: 
                - text: Add to cart
          - list [ref=e646]:
            - listitem [ref=e647]:
              - link " View Product" [ref=e648] [cursor=pointer]:
                - /url: /product_details/35
                - generic [ref=e649]: 
                - text: View Product
        - generic [ref=e651]:
          - generic [ref=e652]:
            - generic [ref=e653]:
              - img "ecommerce website products" [ref=e654]
              - heading "Rs. 1400" [level=2] [ref=e655]
              - paragraph [ref=e656]: Grunt Blue Slim Fit Jeans
              - generic [ref=e657] [cursor=pointer]:
                - generic [ref=e658]: 
                - text: Add to cart
            - generic [ref=e659]:
              - heading "Rs. 1400" [level=2] [ref=e660]
              - paragraph [ref=e661]: Grunt Blue Slim Fit Jeans
              - generic [ref=e662] [cursor=pointer]:
                - generic [ref=e663]: 
                - text: Add to cart
          - list [ref=e665]:
            - listitem [ref=e666]:
              - link " View Product" [ref=e667] [cursor=pointer]:
                - /url: /product_details/37
                - generic [ref=e668]: 
                - text: View Product
        - generic [ref=e670]:
          - generic [ref=e671]:
            - generic [ref=e672]:
              - img "ecommerce website products" [ref=e673]
              - heading "Rs. 2300" [level=2] [ref=e674]
              - paragraph [ref=e675]: Rose Pink Embroidered Maxi Dress
              - generic [ref=e676] [cursor=pointer]:
                - generic [ref=e677]: 
                - text: Add to cart
            - generic [ref=e678]:
              - heading "Rs. 2300" [level=2] [ref=e679]
              - paragraph [ref=e680]: Rose Pink Embroidered Maxi Dress
              - generic [ref=e681] [cursor=pointer]:
                - generic [ref=e682]: 
                - text: Add to cart
          - list [ref=e684]:
            - listitem [ref=e685]:
              - link " View Product" [ref=e686] [cursor=pointer]:
                - /url: /product_details/38
                - generic [ref=e687]: 
                - text: View Product
        - generic [ref=e689]:
          - generic [ref=e690]:
            - generic [ref=e691]:
              - img "ecommerce website products" [ref=e692]
              - heading "Rs. 3000" [level=2] [ref=e693]
              - paragraph [ref=e694]: Cotton Silk Hand Block Print Saree
              - generic [ref=e695] [cursor=pointer]:
                - generic [ref=e696]: 
                - text: Add to cart
            - generic [ref=e697]:
              - heading "Rs. 3000" [level=2] [ref=e698]
              - paragraph [ref=e699]: Cotton Silk Hand Block Print Saree
              - generic [ref=e700] [cursor=pointer]:
                - generic [ref=e701]: 
                - text: Add to cart
          - list [ref=e703]:
            - listitem [ref=e704]:
              - link " View Product" [ref=e705] [cursor=pointer]:
                - /url: /product_details/39
                - generic [ref=e706]: 
                - text: View Product
        - generic [ref=e708]:
          - generic [ref=e709]:
            - generic [ref=e710]:
              - img "ecommerce website products" [ref=e711]
              - heading "Rs. 3500" [level=2] [ref=e712]
              - paragraph [ref=e713]: Rust Red Linen Saree
              - generic [ref=e714] [cursor=pointer]:
                - generic [ref=e715]: 
                - text: Add to cart
            - generic [ref=e716]:
              - heading "Rs. 3500" [level=2] [ref=e717]
              - paragraph [ref=e718]: Rust Red Linen Saree
              - generic [ref=e719] [cursor=pointer]:
                - generic [ref=e720]: 
                - text: Add to cart
          - list [ref=e722]:
            - listitem [ref=e723]:
              - link " View Product" [ref=e724] [cursor=pointer]:
                - /url: /product_details/40
                - generic [ref=e725]: 
                - text: View Product
        - generic [ref=e727]:
          - generic [ref=e728]:
            - generic [ref=e729]:
              - img "ecommerce website products" [ref=e730]
              - heading "Rs. 5000" [level=2] [ref=e731]
              - paragraph [ref=e732]: Beautiful Peacock Blue Cotton Linen Saree
              - generic [ref=e733] [cursor=pointer]:
                - generic [ref=e734]: 
                - text: Add to cart
            - generic [ref=e735]:
              - heading "Rs. 5000" [level=2] [ref=e736]
              - paragraph [ref=e737]: Beautiful Peacock Blue Cotton Linen Saree
              - generic [ref=e738] [cursor=pointer]:
                - generic [ref=e739]: 
                - text: Add to cart
          - list [ref=e741]:
            - listitem [ref=e742]:
              - link " View Product" [ref=e743] [cursor=pointer]:
                - /url: /product_details/41
                - generic [ref=e744]: 
                - text: View Product
        - generic [ref=e746]:
          - generic [ref=e747]:
            - generic [ref=e748]:
              - img "ecommerce website products" [ref=e749]
              - heading "Rs. 1400" [level=2] [ref=e750]
              - paragraph [ref=e751]: Lace Top For Women
              - generic [ref=e752] [cursor=pointer]:
                - generic [ref=e753]: 
                - text: Add to cart
            - generic [ref=e754]:
              - heading "Rs. 1400" [level=2] [ref=e755]
              - paragraph [ref=e756]: Lace Top For Women
              - generic [ref=e757] [cursor=pointer]:
                - generic [ref=e758]: 
                - text: Add to cart
          - list [ref=e760]:
            - listitem [ref=e761]:
              - link " View Product" [ref=e762] [cursor=pointer]:
                - /url: /product_details/42
                - generic [ref=e763]: 
                - text: View Product
        - generic [ref=e765]:
          - generic [ref=e766]:
            - generic [ref=e767]:
              - img "ecommerce website products" [ref=e768]
              - heading "Rs. 1389" [level=2] [ref=e769]
              - paragraph [ref=e770]: GRAPHIC DESIGN MEN T SHIRT - BLUE
              - generic [ref=e771] [cursor=pointer]:
                - generic [ref=e772]: 
                - text: Add to cart
            - generic [ref=e773]:
              - heading "Rs. 1389" [level=2] [ref=e774]
              - paragraph [ref=e775]: GRAPHIC DESIGN MEN T SHIRT - BLUE
              - generic [ref=e776] [cursor=pointer]:
                - generic [ref=e777]: 
                - text: Add to cart
          - list [ref=e779]:
            - listitem [ref=e780]:
              - link " View Product" [ref=e781] [cursor=pointer]:
                - /url: /product_details/43
                - generic [ref=e782]: 
                - text: View Product
      - generic [ref=e783]:
        - heading "recommended items" [level=2] [ref=e784]
        - generic [ref=e785]:
          - generic [ref=e786]:
            - text:   
            - generic:
              - generic [ref=e790]:
                - img "ecommerce website products" [ref=e791]
                - heading "Rs. 1500" [level=2] [ref=e792]
                - paragraph [ref=e793]: Stylish Dress
                - generic [ref=e794] [cursor=pointer]:
                  - generic [ref=e795]: 
                  - text: Add to cart
              - generic [ref=e799]:
                - img "ecommerce website products" [ref=e800]
                - heading "Rs. 600" [level=2] [ref=e801]
                - paragraph [ref=e802]: Winter Top
                - generic [ref=e803] [cursor=pointer]:
                  - generic [ref=e804]: 
                  - text: Add to cart
              - generic [ref=e808]:
                - img "ecommerce website products" [ref=e809]
                - heading "Rs. 400" [level=2] [ref=e810]
                - paragraph [ref=e811]: Summer White Top
                - generic [ref=e812] [cursor=pointer]:
                  - generic [ref=e813]: 
                  - text: Add to cart
          - link "" [ref=e814] [cursor=pointer]:
            - /url: "#recommended-item-carousel"
            - generic [ref=e815]: 
          - link "" [ref=e816] [cursor=pointer]:
            - /url: "#recommended-item-carousel"
            - generic [ref=e817]: 
  - insertion [ref=e819]
  - contentinfo [ref=e821]:
    - generic [ref=e826]:
      - heading "Subscription" [level=2] [ref=e827]
      - generic [ref=e828]:
        - textbox "Your email address" [ref=e829]
        - button "" [ref=e830] [cursor=pointer]:
          - generic [ref=e831]: 
        - paragraph [ref=e832]:
          - text: Get the most recent updates from
          - text: our site and be updated your self...
    - paragraph [ref=e836]: Copyright © 2021 All rights reserved
  - text: 
  - insertion [ref=e837]:
    - iframe [ref=e840]:
      - generic [active] [ref=f8e1]:
        - link [ref=f8e8] [cursor=pointer]:
          - /url: https://googleads.g.doubleclick.net/aclk?sa=l&ai=CjA8u455IaqviOb2eid4Pg_KAuAO2iNCPiAH4p6yupxahpvjz0B0QASD9tJ6VAWDl0uSDqA6gAZfRgv8pyAECqQIfFhY_To1GPqgDAcgDyQSqBPwBT9CFzRYJvtXor1cf2gaVFbH7STCtsmb6HPM8ZBesreGa1fyGGK2u43lbjGX2bKHtZRkrd9lT9xUjkPI7K9F6WUhaWYBJyHTqXeCZIL0pCoDlB0vsuxAoLoLw0WtevxDvl-1Djl3KjeVEfcCXP4df5WhfiJJFsvTnfNSHgFkwfKr11fIGxkcjtCAT1WRvEvyulDheHWLTmjkLflVsEkgW7iOlOw_ZrZ1bEafqHzHMz8XBrS2BHoHWNwYx8vuNafhALmu2uWr2UMmLas75DG78PpOq5P0wo1Ipo7Y2JN0gXLQP7101TOzRBqjXseEaEk581nxMfocndJDvob7wwATp-7Sm2QWIBdnyvq5ZoAYCgAeXidPeBKgHp8yxAqgH4tixAqgHpr4bqAfMzrECqAfz0RuoB5bYG6gHqpuxAqgHjs4bqAeT2BuoB_DgG6gH7paxAqgH_p6xAqgHr76xAqgH1ckbqAfZtrECqAeaBqgH_56xAqgH35-xAqgH-MKxAqgH-8KxAtgHAdIIMwiAYRABGJ8DMgiKgoCAgICACDoPgECAwICAgICogAKog4AQSL39wTpY0P_k06m4lQNgAbEJYUICQTFQ8cyACgGYCwHICwGiDB1iAgoAag8KDWNvbS5nc3RuLm1zbWF4AYgBAZABAaoNAklOyA0B6g0TCOTn5tOpuJUDFT1PwgUdAzkAN_ANAogOCdgTA9AVAZgWAcoWAgoA-BYBgBcBshcEGAFQBroXAjgBshgFGAIiAQDQGAHCGQIIAQ&ae=1&gclid=EAIaIQobChMI69_m06m4lQMVPU_CBR0DOQA3EAEYASAAEgJAevD_BwE&num=1&cid=CAQSngIAEQoqgYw_6nJy1MiRpvn3d-9_w6MVcGt4OI0GkWgVaB0cTRzS2wrkEEmzNBpMG7iYwROj1esegTOPnmWnHg5s5aBs241l54s4bvMGZo2REUGnvl7wQTkcaZ5VDRkSUN_5s4zcWzBzLulJcgtAToCfPh-W5U4EYBHBm3kK98544xXT3Zll2PtBaiMH-KPzicE_J4y3DA4gCPiglspb4VOc4D2QWC2a4Bkh5oLHZx5Xfpb1amqPW_0sF4Doty0Rm0fUvNmqCB4VnDSh7Gw6237q3HNughW-MKWNmU2Ro5z9x3skJ1XWq_OL44AoeX2_nBRV6ZDMgl0KxOGwiDzUpWugwGIj_sbHEpfDlorhw4c_Rkdm139b0s_BkwMThmBCGAE&sig=AOD64_35dbxUtYf2u--hY-jsClFioAbeuQ&client=ca-pub-1677597403311019&rf=1&nb=9&adurl=https://www.youtube.com/%40cbc_mib%3Fgad_source%3D5%26gad_campaignid%3D23988255065%26gclid%3DEAIaIQobChMI69_m06m4lQMVPU_CBR0DOQA3EAEYASAAEgJAevD_BwE
          - img [ref=f8e9]
        - img [ref=f8e13] [cursor=pointer]
        - button [ref=f8e15] [cursor=pointer]:
          - img [ref=f8e16]
        - iframe
```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test';
  2   | 
  3   | /**
  4   |  * API Mocking & Network Interception
  5   |  * Learn: route interception, mocking API responses, network debugging
  6   |  */
  7   | 
  8   | test.describe('API Mocking Examples', () => {
  9   |   
  10  |   test('Mock product search API response', async ({ page }) => {
  11  |     
  12  |     // Intercept API calls and mock responses
  13  |     await page.route('**/api/product**', route => {
  14  |       route.abort('blockedbyclient');
  15  |     });
  16  | 
  17  |     await page.goto('https://automationexercise.com/products');
  18  |     
  19  |     // Products section might show error or fallback UI
  20  |     await expect(page).not.toHaveTitle('Error');
  21  |   });
  22  | 
  23  |   test('Mock successful API with custom data', async ({ page }) => {
  24  |     
  25  |     // Intercept and modify product response
  26  |     await page.route('**/api/products*', async (route) => {
  27  |       const mockData = {
  28  |         products: [
  29  |           {
  30  |             id: 1,
  31  |             name: 'Mocked Product',
  32  |             price: 99.99,
  33  |             image: 'mocked-image.jpg',
  34  |           },
  35  |         ],
  36  |       };
  37  |       
  38  |       await route.fulfill({
  39  |         status: 200,
  40  |         body: JSON.stringify(mockData),
  41  |       });
  42  |     });
  43  | 
  44  |     await page.goto('https://automationexercise.com/products');
  45  |     await page.waitForLoadState('networkidle');
  46  |   });
  47  | 
  48  |   test('Monitor and log network requests', async ({ page }) => {
  49  |     const requests: string[] = [];
  50  | 
  51  |     // Capture all API requests
  52  |     page.on('request', (request) => {
  53  |       if (request.url().includes('api')) {
  54  |         requests.push(request.url());
  55  |         console.log('API Request:', request.url());
  56  |         console.log('Method:', request.method());
  57  |       }
  58  |     });
  59  | 
  60  |     await page.goto('https://automationexercise.com');
> 61  |     await page.waitForLoadState('networkidle');
      |                ^ Error: page.waitForLoadState: Test timeout of 30000ms exceeded.
  62  | 
  63  |     // Verify API calls were made
  64  |     console.log('Total API requests:', requests.length);
  65  |   });
  66  | 
  67  |   test('Simulate slow network', async ({ page }) => {
  68  |     
  69  |     // Simulate slow API responses
  70  |     await page.route('**/*', async (route) => {
  71  |       // Add 2 second delay
  72  |       await new Promise(resolve => setTimeout(resolve, 2000));
  73  |       await route.continue();
  74  |     });
  75  | 
  76  |     const startTime = Date.now();
  77  |     await page.goto('https://automationexercise.com');
  78  |     const endTime = Date.now();
  79  | 
  80  |     // Should take longer due to artificial delay
  81  |     console.log('Page load time with throttling:', endTime - startTime);
  82  |   });
  83  | 
  84  |   test('Simulate API error responses', async ({ page }) => {
  85  |     
  86  |     // Mock API error (500 Internal Server Error)
  87  |     await page.route('**/api/**', route => {
  88  |       route.fulfill({
  89  |         status: 500,
  90  |         contentType: 'application/json',
  91  |         body: JSON.stringify({
  92  |           error: 'Internal Server Error',
  93  |           message: 'Database connection failed',
  94  |         }),
  95  |       });
  96  |     });
  97  | 
  98  |     await page.goto('https://automationexercise.com/products');
  99  |     
  100 |     // Application should handle error gracefully
  101 |     await page.waitForLoadState('domcontentloaded');
  102 |   });
  103 | });
  104 | 
  105 | test.describe('Network Response Validation', () => {
  106 |   
  107 |   test('Verify response headers', async ({ page }) => {
  108 |     let responseHeaders: Record<string, string> = {};
  109 | 
  110 |     page.on('response', (response) => {
  111 |       if (response.url().includes('automationexercise.com')) {
  112 |         responseHeaders = response.headers();
  113 |       }
  114 |     });
  115 | 
  116 |     await page.goto('https://automationexercise.com');
  117 |     await page.waitForLoadState('networkidle');
  118 | 
  119 |     // Verify security headers
  120 |     console.log('Response Headers:', responseHeaders);
  121 |   });
  122 | 
  123 |   test('Validate JSON response structure', async ({ page }) => {
  124 |     
  125 |     await page.route('**/api/productsList**', async (route) => {
  126 |       const response = await route.fetch();
  127 |       const json = await response.json();
  128 | 
  129 |       // Validate response structure
  130 |       if (json && Array.isArray(json.products)) {
  131 |         for (const product of json.products) {
  132 |           expect(product).toHaveProperty('id');
  133 |           expect(product).toHaveProperty('name');
  134 |           expect(product).toHaveProperty('price');
  135 |         }
  136 |       }
  137 | 
  138 |       await route.fulfill({ response });
  139 |     });
  140 | 
  141 |     await page.goto('https://automationexercise.com/products');
  142 |   });
  143 | });
  144 | 
```