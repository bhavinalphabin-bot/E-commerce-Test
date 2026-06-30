# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: browser-interactions.spec.ts >> Multiple Tabs/Windows >> Switch between multiple tabs
- Location: tests/browser-interactions.spec.ts:209:7

# Error details

```
Error: Channel closed
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
        - generic [ref=e90]:
          - heading "These are topics related to the article that might interest you" [level=2] [ref=e92]: Discover more
          - link "QA automation training" [ref=e93] [cursor=pointer]:
            - generic "QA automation training" [ref=e94]
            - img [ref=e96]
          - link "Website usability testing" [ref=e98] [cursor=pointer]:
            - generic "Website usability testing" [ref=e99]
            - img [ref=e101]
          - link "E-commerce website practice" [ref=e103] [cursor=pointer]:
            - generic "E-commerce website practice" [ref=e104]
            - img [ref=e106]
          - link "Software" [ref=e108] [cursor=pointer]:
            - generic "Software" [ref=e109]
            - img [ref=e111]
          - link "Test case writing" [ref=e113] [cursor=pointer]:
            - generic "Test case writing" [ref=e114]
            - img [ref=e116]
          - link "Test case templates" [ref=e118] [cursor=pointer]:
            - generic "Test case templates" [ref=e119]
            - img [ref=e121]
          - link "QA engineer resources" [ref=e123] [cursor=pointer]:
            - generic "QA engineer resources" [ref=e124]
            - img [ref=e126]
          - link "Software testing tutorials" [ref=e128] [cursor=pointer]:
            - generic "Software testing tutorials" [ref=e129]
            - img [ref=e131]
      - generic [ref=e133]:
        - heading "Brands" [level=2] [ref=e134]
        - list [ref=e136]:
          - listitem [ref=e137]:
            - link "(6) Polo" [ref=e138] [cursor=pointer]:
              - /url: /brand_products/Polo
              - generic [ref=e139]: (6)
              - text: Polo
          - listitem [ref=e140]:
            - link "(5) H&M" [ref=e141] [cursor=pointer]:
              - /url: /brand_products/H&M
              - generic [ref=e142]: (5)
              - text: H&M
          - listitem [ref=e143]:
            - link "(5) Madame" [ref=e144] [cursor=pointer]:
              - /url: /brand_products/Madame
              - generic [ref=e145]: (5)
              - text: Madame
          - listitem [ref=e146]:
            - link "(3) Mast & Harbour" [ref=e147] [cursor=pointer]:
              - /url: /brand_products/Mast & Harbour
              - generic [ref=e148]: (3)
              - text: Mast & Harbour
          - listitem [ref=e149]:
            - link "(4) Babyhug" [ref=e150] [cursor=pointer]:
              - /url: /brand_products/Babyhug
              - generic [ref=e151]: (4)
              - text: Babyhug
          - listitem [ref=e152]:
            - link "(3) Allen Solly Junior" [ref=e153] [cursor=pointer]:
              - /url: /brand_products/Allen Solly Junior
              - generic [ref=e154]: (3)
              - text: Allen Solly Junior
          - listitem [ref=e155]:
            - link "(3) Kookie Kids" [ref=e156] [cursor=pointer]:
              - /url: /brand_products/Kookie Kids
              - generic [ref=e157]: (3)
              - text: Kookie Kids
          - listitem [ref=e158]:
            - link "(5) Biba" [ref=e159] [cursor=pointer]:
              - /url: /brand_products/Biba
              - generic [ref=e160]: (5)
              - text: Biba
    - generic [ref=e161]:
      - generic [ref=e162]:
        - heading "Features Items" [level=2] [ref=e163]
        - generic [ref=e165]:
          - generic [ref=e166]:
            - generic [ref=e167]:
              - img "ecommerce website products" [ref=e168]
              - heading "Rs. 500" [level=2] [ref=e169]
              - paragraph [ref=e170]: Blue Top
              - generic [ref=e171] [cursor=pointer]:
                - generic [ref=e172]: 
                - text: Add to cart
            - generic [ref=e173]:
              - heading "Rs. 500" [level=2] [ref=e174]
              - paragraph [ref=e175]: Blue Top
              - generic [ref=e176] [cursor=pointer]:
                - generic [ref=e177]: 
                - text: Add to cart
          - list [ref=e179]:
            - listitem [ref=e180]:
              - link " View Product" [ref=e181] [cursor=pointer]:
                - /url: /product_details/1
                - generic [ref=e182]: 
                - text: View Product
        - generic [ref=e184]:
          - generic [ref=e185]:
            - generic [ref=e186]:
              - img "ecommerce website products" [ref=e187]
              - heading "Rs. 400" [level=2] [ref=e188]
              - paragraph [ref=e189]:
                - text: Men
                - link "Tshirt" [ref=e190] [cursor=pointer]:
                  - /url: "#"
                  - img [ref=e191]
                  - text: Tshirt
              - generic [ref=e193] [cursor=pointer]:
                - generic [ref=e194]: 
                - text: Add to cart
            - generic [ref=e195]:
              - heading "Rs. 400" [level=2] [ref=e196]
              - paragraph [ref=e197]: Men Tshirt
              - generic [ref=e198] [cursor=pointer]:
                - generic [ref=e199]: 
                - text: Add to cart
          - list [ref=e201]:
            - listitem [ref=e202]:
              - link " View Product" [ref=e203] [cursor=pointer]:
                - /url: /product_details/2
                - generic [ref=e204]: 
                - text: View Product
        - generic [ref=e206]:
          - generic [ref=e207]:
            - generic [ref=e208]:
              - img "ecommerce website products" [ref=e209]
              - heading "Rs. 1000" [level=2] [ref=e210]
              - paragraph [ref=e211]: Sleeveless Dress
              - generic [ref=e212] [cursor=pointer]:
                - generic [ref=e213]: 
                - text: Add to cart
            - generic [ref=e214]:
              - heading "Rs. 1000" [level=2] [ref=e215]
              - paragraph [ref=e216]: Sleeveless Dress
              - generic [ref=e217] [cursor=pointer]:
                - generic [ref=e218]: 
                - text: Add to cart
          - list [ref=e220]:
            - listitem [ref=e221]:
              - link " View Product" [ref=e222] [cursor=pointer]:
                - /url: /product_details/3
                - generic [ref=e223]: 
                - text: View Product
        - generic [ref=e225]:
          - generic [ref=e226]:
            - generic [ref=e227]:
              - img "ecommerce website products" [ref=e228]
              - heading "Rs. 1500" [level=2] [ref=e229]
              - paragraph [ref=e230]: Stylish Dress
              - generic [ref=e231] [cursor=pointer]:
                - generic [ref=e232]: 
                - text: Add to cart
            - generic [ref=e233]:
              - heading "Rs. 1500" [level=2] [ref=e234]
              - paragraph [ref=e235]: Stylish Dress
              - generic [ref=e236] [cursor=pointer]:
                - generic [ref=e237]: 
                - text: Add to cart
          - list [ref=e239]:
            - listitem [ref=e240]:
              - link " View Product" [ref=e241] [cursor=pointer]:
                - /url: /product_details/4
                - generic [ref=e242]: 
                - text: View Product
        - generic [ref=e244]:
          - generic [ref=e245]:
            - generic [ref=e246]:
              - img "ecommerce website products" [ref=e247]
              - heading "Rs. 600" [level=2] [ref=e248]
              - paragraph [ref=e249]: Winter Top
              - generic [ref=e250] [cursor=pointer]:
                - generic [ref=e251]: 
                - text: Add to cart
            - generic [ref=e252]:
              - heading "Rs. 600" [level=2] [ref=e253]
              - paragraph [ref=e254]: Winter Top
              - generic [ref=e255] [cursor=pointer]:
                - generic [ref=e256]: 
                - text: Add to cart
          - list [ref=e258]:
            - listitem [ref=e259]:
              - link " View Product" [ref=e260] [cursor=pointer]:
                - /url: /product_details/5
                - generic [ref=e261]: 
                - text: View Product
        - generic [ref=e263]:
          - generic [ref=e264]:
            - generic [ref=e265]:
              - img "ecommerce website products" [ref=e266]
              - heading "Rs. 400" [level=2] [ref=e267]
              - paragraph [ref=e268]: Summer White Top
              - generic [ref=e269] [cursor=pointer]:
                - generic [ref=e270]: 
                - text: Add to cart
            - generic [ref=e271]:
              - heading "Rs. 400" [level=2] [ref=e272]
              - paragraph [ref=e273]: Summer White Top
              - generic [ref=e274] [cursor=pointer]:
                - generic [ref=e275]: 
                - text: Add to cart
          - list [ref=e277]:
            - listitem [ref=e278]:
              - link " View Product" [ref=e279] [cursor=pointer]:
                - /url: /product_details/6
                - generic [ref=e280]: 
                - text: View Product
        - generic [ref=e282]:
          - generic [ref=e283]:
            - generic [ref=e284]:
              - img "ecommerce website products" [ref=e285]
              - heading "Rs. 1000" [level=2] [ref=e286]
              - paragraph [ref=e287]: Madame Top For Women
              - generic [ref=e288] [cursor=pointer]:
                - generic [ref=e289]: 
                - text: Add to cart
            - generic [ref=e290]:
              - heading "Rs. 1000" [level=2] [ref=e291]
              - paragraph [ref=e292]: Madame Top For Women
              - generic [ref=e293] [cursor=pointer]:
                - generic [ref=e294]: 
                - text: Add to cart
          - list [ref=e296]:
            - listitem [ref=e297]:
              - link " View Product" [ref=e298] [cursor=pointer]:
                - /url: /product_details/7
                - generic [ref=e299]: 
                - text: View Product
        - generic [ref=e301]:
          - generic [ref=e302]:
            - generic [ref=e303]:
              - img "ecommerce website products" [ref=e304]
              - heading "Rs. 700" [level=2] [ref=e305]
              - paragraph [ref=e306]: Fancy Green Top
              - generic [ref=e307] [cursor=pointer]:
                - generic [ref=e308]: 
                - text: Add to cart
            - generic [ref=e309]:
              - heading "Rs. 700" [level=2] [ref=e310]
              - paragraph [ref=e311]: Fancy Green Top
              - generic [ref=e312] [cursor=pointer]:
                - generic [ref=e313]: 
                - text: Add to cart
          - list [ref=e315]:
            - listitem [ref=e316]:
              - link " View Product" [ref=e317] [cursor=pointer]:
                - /url: /product_details/8
                - generic [ref=e318]: 
                - text: View Product
        - generic [ref=e320]:
          - generic [ref=e321]:
            - generic [ref=e322]:
              - img "ecommerce website products" [ref=e323]
              - heading "Rs. 499" [level=2] [ref=e324]
              - paragraph [ref=e325]:
                - text: Sleeves Printed Top - White
                - link "Website development services" [ref=e326] [cursor=pointer]:
                  - img [ref=e328]
                  - text: Website development services
              - generic [ref=e330] [cursor=pointer]:
                - generic [ref=e331]: 
                - text: Add to cart
            - generic [ref=e332]:
              - heading "Rs. 499" [level=2] [ref=e333]
              - paragraph [ref=e334]: Sleeves Printed Top - White
              - generic [ref=e335] [cursor=pointer]:
                - generic [ref=e336]: 
                - text: Add to cart
          - list [ref=e338]:
            - listitem [ref=e339]:
              - link " View Product" [ref=e340] [cursor=pointer]:
                - /url: /product_details/11
                - generic [ref=e341]: 
                - text: View Product
        - generic [ref=e343]:
          - generic [ref=e344]:
            - generic [ref=e345]:
              - img "ecommerce website products" [ref=e346]
              - heading "Rs. 359" [level=2] [ref=e347]
              - paragraph [ref=e348]:
                - text: Half Sleeves Top Schiffli Detailing - Pink
                - link "QA engineer training" [ref=e349] [cursor=pointer]:
                  - img [ref=e351]
                  - text: QA engineer training
              - generic [ref=e353] [cursor=pointer]:
                - generic [ref=e354]: 
                - text: Add to cart
            - generic [ref=e355]:
              - heading "Rs. 359" [level=2] [ref=e356]
              - paragraph [ref=e357]: Half Sleeves Top Schiffli Detailing - Pink
              - generic [ref=e358] [cursor=pointer]:
                - generic [ref=e359]: 
                - text: Add to cart
          - list [ref=e361]:
            - listitem [ref=e362]:
              - link " View Product" [ref=e363] [cursor=pointer]:
                - /url: /product_details/12
                - generic [ref=e364]: 
                - text: View Product
        - generic [ref=e366]:
          - generic [ref=e367]:
            - generic [ref=e368]:
              - img "ecommerce website products" [ref=e369]
              - heading "Rs. 278" [level=2] [ref=e370]
              - paragraph [ref=e371]: Frozen Tops For Kids
              - generic [ref=e372] [cursor=pointer]:
                - generic [ref=e373]: 
                - text: Add to cart
            - generic [ref=e374]:
              - heading "Rs. 278" [level=2] [ref=e375]
              - paragraph [ref=e376]: Frozen Tops For Kids
              - generic [ref=e377] [cursor=pointer]:
                - generic [ref=e378]: 
                - text: Add to cart
          - list [ref=e380]:
            - listitem [ref=e381]:
              - link " View Product" [ref=e382] [cursor=pointer]:
                - /url: /product_details/13
                - generic [ref=e383]: 
                - text: View Product
        - generic [ref=e385]:
          - generic [ref=e386]:
            - generic [ref=e387]:
              - img "ecommerce website products" [ref=e388]
              - heading "Rs. 679" [level=2] [ref=e389]
              - paragraph [ref=e390]:
                - text: Full Sleeves Top Cherry - Pink
                - link "API testing tools" [ref=e391] [cursor=pointer]:
                  - img [ref=e393]
                  - text: API testing tools
              - generic [ref=e395] [cursor=pointer]:
                - generic [ref=e396]: 
                - text: Add to cart
            - generic [ref=e397]:
              - heading "Rs. 679" [level=2] [ref=e398]
              - paragraph [ref=e399]: Full Sleeves Top Cherry - Pink
              - generic [ref=e400] [cursor=pointer]:
                - generic [ref=e401]: 
                - text: Add to cart
          - list [ref=e403]:
            - listitem [ref=e404]:
              - link " View Product" [ref=e405] [cursor=pointer]:
                - /url: /product_details/14
                - generic [ref=e406]: 
                - text: View Product
        - generic [ref=e408]:
          - generic [ref=e409]:
            - generic [ref=e410]:
              - img "ecommerce website products" [ref=e411]
              - heading "Rs. 315" [level=2] [ref=e412]
              - paragraph [ref=e413]: Printed Off Shoulder Top - White
              - generic [ref=e414] [cursor=pointer]:
                - generic [ref=e415]: 
                - text: Add to cart
            - generic [ref=e416]:
              - heading "Rs. 315" [level=2] [ref=e417]
              - paragraph [ref=e418]: Printed Off Shoulder Top - White
              - generic [ref=e419] [cursor=pointer]:
                - generic [ref=e420]: 
                - text: Add to cart
          - list [ref=e422]:
            - listitem [ref=e423]:
              - link " View Product" [ref=e424] [cursor=pointer]:
                - /url: /product_details/15
                - generic [ref=e425]: 
                - text: View Product
        - generic [ref=e427]:
          - generic [ref=e428]:
            - generic [ref=e429]:
              - img "ecommerce website products" [ref=e430]
              - heading "Rs. 478" [level=2] [ref=e431]
              - paragraph [ref=e432]: Sleeves Top and Short - Blue & Pink
              - generic [ref=e433] [cursor=pointer]:
                - generic [ref=e434]: 
                - text: Add to cart
            - generic [ref=e435]:
              - heading "Rs. 478" [level=2] [ref=e436]
              - paragraph [ref=e437]: Sleeves Top and Short - Blue & Pink
              - generic [ref=e438] [cursor=pointer]:
                - generic [ref=e439]: 
                - text: Add to cart
          - list [ref=e441]:
            - listitem [ref=e442]:
              - link " View Product" [ref=e443] [cursor=pointer]:
                - /url: /product_details/16
                - generic [ref=e444]: 
                - text: View Product
        - generic [ref=e446]:
          - generic [ref=e447]:
            - generic [ref=e448]:
              - img "ecommerce website products" [ref=e449]
              - heading "Rs. 1200" [level=2] [ref=e450]
              - paragraph [ref=e451]: Little Girls Mr. Panda Shirt
              - generic [ref=e452] [cursor=pointer]:
                - generic [ref=e453]: 
                - text: Add to cart
            - generic [ref=e454]:
              - heading "Rs. 1200" [level=2] [ref=e455]
              - paragraph [ref=e456]: Little Girls Mr. Panda Shirt
              - generic [ref=e457] [cursor=pointer]:
                - generic [ref=e458]: 
                - text: Add to cart
          - list [ref=e460]:
            - listitem [ref=e461]:
              - link " View Product" [ref=e462] [cursor=pointer]:
                - /url: /product_details/18
                - generic [ref=e463]: 
                - text: View Product
        - generic [ref=e465]:
          - generic [ref=e466]:
            - generic [ref=e467]:
              - img "ecommerce website products" [ref=e468]
              - heading "Rs. 1050" [level=2] [ref=e469]
              - paragraph [ref=e470]:
                - text: Sleeveless Unicorn Patch Gown - Pink
                - link "Development Tools" [ref=e471] [cursor=pointer]:
                  - img [ref=e473]
                  - text: Development Tools
              - generic [ref=e475] [cursor=pointer]:
                - generic [ref=e476]: 
                - text: Add to cart
            - generic [ref=e477]:
              - heading "Rs. 1050" [level=2] [ref=e478]
              - paragraph [ref=e479]: Sleeveless Unicorn Patch Gown - Pink
              - generic [ref=e480] [cursor=pointer]:
                - generic [ref=e481]: 
                - text: Add to cart
          - list [ref=e483]:
            - listitem [ref=e484]:
              - link " View Product" [ref=e485] [cursor=pointer]:
                - /url: /product_details/19
                - generic [ref=e486]: 
                - text: View Product
        - generic [ref=e488]:
          - generic [ref=e489]:
            - generic [ref=e490]:
              - img "ecommerce website products" [ref=e491]
              - heading "Rs. 1190" [level=2] [ref=e492]
              - paragraph [ref=e493]: Cotton Mull Embroidered Dress
              - generic [ref=e494] [cursor=pointer]:
                - generic [ref=e495]: 
                - text: Add to cart
            - generic [ref=e496]:
              - heading "Rs. 1190" [level=2] [ref=e497]
              - paragraph [ref=e498]: Cotton Mull Embroidered Dress
              - generic [ref=e499] [cursor=pointer]:
                - generic [ref=e500]: 
                - text: Add to cart
          - list [ref=e502]:
            - listitem [ref=e503]:
              - link " View Product" [ref=e504] [cursor=pointer]:
                - /url: /product_details/20
                - generic [ref=e505]: 
                - text: View Product
        - generic [ref=e507]:
          - generic [ref=e508]:
            - generic [ref=e509]:
              - img "ecommerce website products" [ref=e510]
              - heading "Rs. 1530" [level=2] [ref=e511]
              - paragraph [ref=e512]: Blue Cotton Indie Mickey Dress
              - generic [ref=e513] [cursor=pointer]:
                - generic [ref=e514]: 
                - text: Add to cart
            - generic [ref=e515]:
              - heading "Rs. 1530" [level=2] [ref=e516]
              - paragraph [ref=e517]: Blue Cotton Indie Mickey Dress
              - generic [ref=e518] [cursor=pointer]:
                - generic [ref=e519]: 
                - text: Add to cart
          - list [ref=e521]:
            - listitem [ref=e522]:
              - link " View Product" [ref=e523] [cursor=pointer]:
                - /url: /product_details/21
                - generic [ref=e524]: 
                - text: View Product
        - generic [ref=e526]:
          - generic [ref=e527]:
            - generic [ref=e528]:
              - img "ecommerce website products" [ref=e529]
              - heading "Rs. 1600" [level=2] [ref=e530]
              - paragraph [ref=e531]:
                - text: Long Maxi Tulle Fancy Dress Up Outfits -Pink
                - link "Clothing" [ref=e532] [cursor=pointer]:
                  - img [ref=e534]
                  - text: Clothing
              - generic [ref=e536] [cursor=pointer]:
                - generic [ref=e537]: 
                - text: Add to cart
            - generic [ref=e538]:
              - heading "Rs. 1600" [level=2] [ref=e539]
              - paragraph [ref=e540]: Long Maxi Tulle Fancy Dress Up Outfits -Pink
              - generic [ref=e541] [cursor=pointer]:
                - generic [ref=e542]: 
                - text: Add to cart
          - list [ref=e544]:
            - listitem [ref=e545]:
              - link " View Product" [ref=e546] [cursor=pointer]:
                - /url: /product_details/22
                - generic [ref=e547]: 
                - text: View Product
        - generic [ref=e549]:
          - generic [ref=e550]:
            - generic [ref=e551]:
              - img "ecommerce website products" [ref=e552]
              - heading "Rs. 1100" [level=2] [ref=e553]
              - paragraph [ref=e554]: Sleeveless Unicorn Print Fit & Flare Net Dress - Multi
              - generic [ref=e555] [cursor=pointer]:
                - generic [ref=e556]: 
                - text: Add to cart
            - generic [ref=e557]:
              - heading "Rs. 1100" [level=2] [ref=e558]
              - paragraph [ref=e559]: Sleeveless Unicorn Print Fit & Flare Net Dress - Multi
              - generic [ref=e560] [cursor=pointer]:
                - generic [ref=e561]: 
                - text: Add to cart
          - list [ref=e563]:
            - listitem [ref=e564]:
              - link " View Product" [ref=e565] [cursor=pointer]:
                - /url: /product_details/23
                - generic [ref=e566]: 
                - text: View Product
        - generic [ref=e568]:
          - generic [ref=e569]:
            - generic [ref=e570]:
              - img "ecommerce website products" [ref=e571]
              - heading "Rs. 849" [level=2] [ref=e572]
              - paragraph [ref=e573]: Colour Blocked Shirt – Sky Blue
              - generic [ref=e574] [cursor=pointer]:
                - generic [ref=e575]: 
                - text: Add to cart
            - generic [ref=e576]:
              - heading "Rs. 849" [level=2] [ref=e577]
              - paragraph [ref=e578]: Colour Blocked Shirt – Sky Blue
              - generic [ref=e579] [cursor=pointer]:
                - generic [ref=e580]: 
                - text: Add to cart
          - list [ref=e582]:
            - listitem [ref=e583]:
              - link " View Product" [ref=e584] [cursor=pointer]:
                - /url: /product_details/24
                - generic [ref=e585]: 
                - text: View Product
        - generic [ref=e587]:
          - generic [ref=e588]:
            - generic [ref=e589]:
              - img "ecommerce website products" [ref=e590]
              - heading "Rs. 1299" [level=2] [ref=e591]
              - paragraph [ref=e592]:
                - text: Pure Cotton V-Neck
                - link "T-Shirt" [ref=e593] [cursor=pointer]:
                  - /url: "#"
                  - img [ref=e594]
                  - text: T-Shirt
              - generic [ref=e596] [cursor=pointer]:
                - generic [ref=e597]: 
                - text: Add to cart
            - generic [ref=e598]:
              - heading "Rs. 1299" [level=2] [ref=e599]
              - paragraph [ref=e600]: Pure Cotton V-Neck T-Shirt
              - generic [ref=e601] [cursor=pointer]:
                - generic [ref=e602]: 
                - text: Add to cart
          - list [ref=e604]:
            - listitem [ref=e605]:
              - link " View Product" [ref=e606] [cursor=pointer]:
                - /url: /product_details/28
                - generic [ref=e607]: 
                - text: View Product
        - generic [ref=e609]:
          - generic [ref=e610]:
            - generic [ref=e611]:
              - img "ecommerce website products" [ref=e612]
              - heading "Rs. 1000" [level=2] [ref=e613]
              - paragraph [ref=e614]: Green Side Placket Detail T-Shirt
              - generic [ref=e615] [cursor=pointer]:
                - generic [ref=e616]: 
                - text: Add to cart
            - generic [ref=e617]:
              - heading "Rs. 1000" [level=2] [ref=e618]
              - paragraph [ref=e619]: Green Side Placket Detail T-Shirt
              - generic [ref=e620] [cursor=pointer]:
                - generic [ref=e621]: 
                - text: Add to cart
          - list [ref=e623]:
            - listitem [ref=e624]:
              - link " View Product" [ref=e625] [cursor=pointer]:
                - /url: /product_details/29
                - generic [ref=e626]: 
                - text: View Product
        - generic [ref=e628]:
          - generic [ref=e629]:
            - generic [ref=e630]:
              - img "ecommerce website products" [ref=e631]
              - heading "Rs. 1500" [level=2] [ref=e632]
              - paragraph [ref=e633]: Premium Polo T-Shirts
              - generic [ref=e634] [cursor=pointer]:
                - generic [ref=e635]: 
                - text: Add to cart
            - generic [ref=e636]:
              - heading "Rs. 1500" [level=2] [ref=e637]
              - paragraph [ref=e638]: Premium Polo T-Shirts
              - generic [ref=e639] [cursor=pointer]:
                - generic [ref=e640]: 
                - text: Add to cart
          - list [ref=e642]:
            - listitem [ref=e643]:
              - link " View Product" [ref=e644] [cursor=pointer]:
                - /url: /product_details/30
                - generic [ref=e645]: 
                - text: View Product
        - generic [ref=e647]:
          - generic [ref=e648]:
            - generic [ref=e649]:
              - img "ecommerce website products" [ref=e650]
              - heading "Rs. 850" [level=2] [ref=e651]
              - paragraph [ref=e652]: Pure Cotton Neon Green Tshirt
              - generic [ref=e653] [cursor=pointer]:
                - generic [ref=e654]: 
                - text: Add to cart
            - generic [ref=e655]:
              - heading "Rs. 850" [level=2] [ref=e656]
              - paragraph [ref=e657]: Pure Cotton Neon Green Tshirt
              - generic [ref=e658] [cursor=pointer]:
                - generic [ref=e659]: 
                - text: Add to cart
          - list [ref=e661]:
            - listitem [ref=e662]:
              - link " View Product" [ref=e663] [cursor=pointer]:
                - /url: /product_details/31
                - generic [ref=e664]: 
                - text: View Product
        - generic [ref=e666]:
          - generic [ref=e667]:
            - generic [ref=e668]:
              - img "ecommerce website products" [ref=e669]
              - heading "Rs. 799" [level=2] [ref=e670]
              - paragraph [ref=e671]: Soft Stretch Jeans
              - generic [ref=e672] [cursor=pointer]:
                - generic [ref=e673]: 
                - text: Add to cart
            - generic [ref=e674]:
              - heading "Rs. 799" [level=2] [ref=e675]
              - paragraph [ref=e676]: Soft Stretch Jeans
              - generic [ref=e677] [cursor=pointer]:
                - generic [ref=e678]: 
                - text: Add to cart
          - list [ref=e680]:
            - listitem [ref=e681]:
              - link " View Product" [ref=e682] [cursor=pointer]:
                - /url: /product_details/33
                - generic [ref=e683]: 
                - text: View Product
        - generic [ref=e685]:
          - generic [ref=e686]:
            - generic [ref=e687]:
              - img "ecommerce website products" [ref=e688]
              - heading "Rs. 1200" [level=2] [ref=e689]
              - paragraph [ref=e690]: Regular Fit Straight Jeans
              - generic [ref=e691] [cursor=pointer]:
                - generic [ref=e692]: 
                - text: Add to cart
            - generic [ref=e693]:
              - heading "Rs. 1200" [level=2] [ref=e694]
              - paragraph [ref=e695]: Regular Fit Straight Jeans
              - generic [ref=e696] [cursor=pointer]:
                - generic [ref=e697]: 
                - text: Add to cart
          - list [ref=e699]:
            - listitem [ref=e700]:
              - link " View Product" [ref=e701] [cursor=pointer]:
                - /url: /product_details/35
                - generic [ref=e702]: 
                - text: View Product
        - generic [ref=e704]:
          - generic [ref=e705]:
            - generic [ref=e706]:
              - img "ecommerce website products" [ref=e707]
              - heading "Rs. 1400" [level=2] [ref=e708]
              - paragraph [ref=e709]: Grunt Blue Slim Fit Jeans
              - generic [ref=e710] [cursor=pointer]:
                - generic [ref=e711]: 
                - text: Add to cart
            - generic [ref=e712]:
              - heading "Rs. 1400" [level=2] [ref=e713]
              - paragraph [ref=e714]: Grunt Blue Slim Fit Jeans
              - generic [ref=e715] [cursor=pointer]:
                - generic [ref=e716]: 
                - text: Add to cart
          - list [ref=e718]:
            - listitem [ref=e719]:
              - link " View Product" [ref=e720] [cursor=pointer]:
                - /url: /product_details/37
                - generic [ref=e721]: 
                - text: View Product
        - generic [ref=e723]:
          - generic [ref=e724]:
            - generic [ref=e725]:
              - img "ecommerce website products" [ref=e726]
              - heading "Rs. 2300" [level=2] [ref=e727]
              - paragraph [ref=e728]: Rose Pink Embroidered Maxi Dress
              - generic [ref=e729] [cursor=pointer]:
                - generic [ref=e730]: 
                - text: Add to cart
            - generic [ref=e731]:
              - heading "Rs. 2300" [level=2] [ref=e732]
              - paragraph [ref=e733]: Rose Pink Embroidered Maxi Dress
              - generic [ref=e734] [cursor=pointer]:
                - generic [ref=e735]: 
                - text: Add to cart
          - list [ref=e737]:
            - listitem [ref=e738]:
              - link " View Product" [ref=e739] [cursor=pointer]:
                - /url: /product_details/38
                - generic [ref=e740]: 
                - text: View Product
        - generic [ref=e742]:
          - generic [ref=e743]:
            - generic [ref=e744]:
              - img "ecommerce website products" [ref=e745]
              - heading "Rs. 3000" [level=2] [ref=e746]
              - paragraph [ref=e747]: Cotton Silk Hand Block Print Saree
              - generic [ref=e748] [cursor=pointer]:
                - generic [ref=e749]: 
                - text: Add to cart
            - generic [ref=e750]:
              - heading "Rs. 3000" [level=2] [ref=e751]
              - paragraph [ref=e752]: Cotton Silk Hand Block Print Saree
              - generic [ref=e753] [cursor=pointer]:
                - generic [ref=e754]: 
                - text: Add to cart
          - list [ref=e756]:
            - listitem [ref=e757]:
              - link " View Product" [ref=e758] [cursor=pointer]:
                - /url: /product_details/39
                - generic [ref=e759]: 
                - text: View Product
        - generic [ref=e761]:
          - generic [ref=e762]:
            - generic [ref=e763]:
              - img "ecommerce website products" [ref=e764]
              - heading "Rs. 3500" [level=2] [ref=e765]
              - paragraph [ref=e766]: Rust Red Linen Saree
              - generic [ref=e767] [cursor=pointer]:
                - generic [ref=e768]: 
                - text: Add to cart
            - generic [ref=e769]:
              - heading "Rs. 3500" [level=2] [ref=e770]
              - paragraph [ref=e771]: Rust Red Linen Saree
              - generic [ref=e772] [cursor=pointer]:
                - generic [ref=e773]: 
                - text: Add to cart
          - list [ref=e775]:
            - listitem [ref=e776]:
              - link " View Product" [ref=e777] [cursor=pointer]:
                - /url: /product_details/40
                - generic [ref=e778]: 
                - text: View Product
        - generic [ref=e780]:
          - generic [ref=e781]:
            - generic [ref=e782]:
              - img "ecommerce website products" [ref=e783]
              - heading "Rs. 5000" [level=2] [ref=e784]
              - paragraph [ref=e785]: Beautiful Peacock Blue Cotton Linen Saree
              - generic [ref=e786] [cursor=pointer]:
                - generic [ref=e787]: 
                - text: Add to cart
            - generic [ref=e788]:
              - heading "Rs. 5000" [level=2] [ref=e789]
              - paragraph [ref=e790]: Beautiful Peacock Blue Cotton Linen Saree
              - generic [ref=e791] [cursor=pointer]:
                - generic [ref=e792]: 
                - text: Add to cart
          - list [ref=e794]:
            - listitem [ref=e795]:
              - link " View Product" [ref=e796] [cursor=pointer]:
                - /url: /product_details/41
                - generic [ref=e797]: 
                - text: View Product
        - generic [ref=e799]:
          - generic [ref=e800]:
            - generic [ref=e801]:
              - img "ecommerce website products" [ref=e802]
              - heading "Rs. 1400" [level=2] [ref=e803]
              - paragraph [ref=e804]: Lace Top For Women
              - generic [ref=e805] [cursor=pointer]:
                - generic [ref=e806]: 
                - text: Add to cart
            - generic [ref=e807]:
              - heading "Rs. 1400" [level=2] [ref=e808]
              - paragraph [ref=e809]: Lace Top For Women
              - generic [ref=e810] [cursor=pointer]:
                - generic [ref=e811]: 
                - text: Add to cart
          - list [ref=e813]:
            - listitem [ref=e814]:
              - link " View Product" [ref=e815] [cursor=pointer]:
                - /url: /product_details/42
                - generic [ref=e816]: 
                - text: View Product
        - generic [ref=e818]:
          - generic [ref=e819]:
            - generic [ref=e820]:
              - img "ecommerce website products" [ref=e821]
              - heading "Rs. 1389" [level=2] [ref=e822]
              - paragraph [ref=e823]:
                - text: GRAPHIC DESIGN MEN
                - link "T SHIRT" [ref=e824] [cursor=pointer]:
                  - /url: "#"
                  - img [ref=e825]
                  - text: T SHIRT
                - text: "- BLUE"
                - link "Clothing" [ref=e827] [cursor=pointer]:
                  - img [ref=e829]
                  - text: Clothing
              - generic [ref=e831] [cursor=pointer]:
                - generic [ref=e832]: 
                - text: Add to cart
            - generic [ref=e833]:
              - heading "Rs. 1389" [level=2] [ref=e834]
              - paragraph [ref=e835]: GRAPHIC DESIGN MEN T SHIRT - BLUE
              - generic [ref=e836] [cursor=pointer]:
                - generic [ref=e837]: 
                - text: Add to cart
          - list [ref=e839]:
            - listitem [ref=e840]:
              - link " View Product" [ref=e841] [cursor=pointer]:
                - /url: /product_details/43
                - generic [ref=e842]: 
                - text: View Product
      - generic [ref=e843]:
        - heading "recommended items" [level=2] [ref=e844]
        - generic [ref=e845]:
          - generic [ref=e846]:
            - text:   
            - generic:
              - generic [ref=e850]:
                - img "ecommerce website products" [ref=e851]
                - heading "Rs. 1500" [level=2] [ref=e852]
                - paragraph [ref=e853]: Stylish Dress
                - generic [ref=e854] [cursor=pointer]:
                  - generic [ref=e855]: 
                  - text: Add to cart
              - generic [ref=e859]:
                - img "ecommerce website products" [ref=e860]
                - heading "Rs. 600" [level=2] [ref=e861]
                - paragraph [ref=e862]: Winter Top
                - generic [ref=e863] [cursor=pointer]:
                  - generic [ref=e864]: 
                  - text: Add to cart
              - generic [ref=e868]:
                - img "ecommerce website products" [ref=e869]
                - heading "Rs. 400" [level=2] [ref=e870]
                - paragraph [ref=e871]: Summer White Top
                - generic [ref=e872] [cursor=pointer]:
                  - generic [ref=e873]: 
                  - text: Add to cart
          - link "" [ref=e874] [cursor=pointer]:
            - /url: "#recommended-item-carousel"
            - generic [ref=e875]: 
          - link "" [ref=e876] [cursor=pointer]:
            - /url: "#recommended-item-carousel"
            - generic [ref=e877]: 
  - insertion [ref=e879]
  - contentinfo [ref=e881]:
    - generic [ref=e886]:
      - heading "Subscription" [level=2] [ref=e887]
      - generic [ref=e888]:
        - textbox "Your email address" [ref=e889]
        - button "" [ref=e890] [cursor=pointer]:
          - generic [ref=e891]: 
        - paragraph [ref=e892]:
          - text: Get the most recent updates from
          - text: our site and be updated your self...
    - paragraph [ref=e896]: Copyright © 2021 All rights reserved
  - text: 
  - insertion [ref=e898]
  - generic [ref=e900]:
    - generic [ref=e901] [cursor=pointer]:
      - img [ref=e903]
      - link "Go to shopping options for API testing services" [ref=e905]: API testing services
    - button "Close shopping anchor" [ref=e906]
```

# Test source

```ts
  116 |   
  117 |   test('Upload profile picture', async ({ page }) => {
  118 |     await page.goto('https://automationexercise.com');
  119 |     
  120 |     // Find file input (if exists in contact form)
  121 |     const fileInput = page.locator('input[type="file"]');
  122 |     
  123 |     if (await fileInput.isVisible()) {
  124 |       // Create a test file
  125 |       const filePath = '/tmp/test-image.png';
  126 |       
  127 |       // Upload file
  128 |       await fileInput.setInputFiles(filePath);
  129 |       
  130 |       // Verify file was uploaded
  131 |       console.log('File uploaded successfully');
  132 |     }
  133 |   });
  134 | });
  135 | 
  136 | test.describe('Modal & Dialog Handling', () => {
  137 |   
  138 |   test('Handle alert dialogs', async ({ page }) => {
  139 |     // Listen for dialog events
  140 |     page.once('dialog', dialog => {
  141 |       console.log('Dialog type:', dialog.type());
  142 |       console.log('Dialog message:', dialog.message());
  143 |       
  144 |       // Dismiss alert
  145 |       dialog.dismiss();
  146 |     });
  147 | 
  148 |     // Find element that triggers alert
  149 |     const alertBtn = page.locator('[onclick*="alert"]').first();
  150 |     
  151 |     if (await alertBtn.isVisible()) {
  152 |       await alertBtn.click();
  153 |     }
  154 |   });
  155 | 
  156 |   test('Handle confirmation dialogs', async ({ page }) => {
  157 |     // Accept confirmation
  158 |     page.once('dialog', dialog => {
  159 |       expect(dialog.type()).toBe('confirm');
  160 |       dialog.accept();
  161 |     });
  162 | 
  163 |     // Trigger dialog
  164 |     await page.evaluate(() => {
  165 |       if (confirm('Do you want to continue?')) {
  166 |         console.log('User confirmed');
  167 |       }
  168 |     });
  169 |   });
  170 | 
  171 |   test('Handle prompt dialogs', async ({ page }) => {
  172 |     page.once('dialog', dialog => {
  173 |       expect(dialog.type()).toBe('prompt');
  174 |       dialog.accept('User Input Text');
  175 |     });
  176 | 
  177 |     await page.evaluate(() => {
  178 |       const userInput = prompt('Enter your name:');
  179 |       console.log('User entered:', userInput);
  180 |     });
  181 |   });
  182 | });
  183 | 
  184 | test.describe('Multiple Tabs/Windows', () => {
  185 |   
  186 | //   test('Open link in new tab and verify', async ({ page, context }) => {
  187 | //     await page.goto('https://automationexercise.com');
  188 |     
  189 | //     // Get link that opens in new tab
  190 | //     const newTabPromise = context.waitForEvent('page');
  191 |     
  192 | //     // Click link with target="_blank"
  193 | //     await page.click('a[target="_blank"]');
  194 |     
  195 | //     // Wait for new page
  196 | //     const newPage = await newTabPromise;
  197 |     
  198 | //     // Verify new page
  199 | //     expect(newPage.url()).not.toBe(page.url());
  200 |     
  201 | //     // Interact with new page
  202 | //     await newPage.waitForLoadState('load');
  203 | //     console.log('New tab URL:', newPage.url());
  204 |     
  205 | //     // Close new tab
  206 | //     await newPage.close();
  207 | //   });
  208 | 
  209 |   test('Switch between multiple tabs', async ({ page, context }) => {
  210 |     await page.goto('https://automationexercise.com');
  211 |     
  212 |     // Open multiple tabs
  213 |     const page2 = await context.newPage();
  214 |     const page3 = await context.newPage();
  215 |     
> 216 |     await page2.goto('https://automationexercise.com/products');
      |     ^ Error: Channel closed
  217 |     await page3.goto('https://automationexercise.com/contact_us');
  218 |     
  219 |     // Switch between pages
  220 |     expect(page.url()).toContain('automationexercise.com');
  221 |     expect(page2.url()).toContain('/products');
  222 |     expect(page3.url()).toContain('/contact_us');
  223 |     
  224 |     // Close additional pages
  225 |     await page2.close();
  226 |     await page3.close();
  227 |   });
  228 | });
  229 | 
```