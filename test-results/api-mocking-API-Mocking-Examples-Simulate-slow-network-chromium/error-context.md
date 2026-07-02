# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api-mocking.spec.ts >> API Mocking Examples >> Simulate slow network
- Location: tests/api-mocking.spec.ts:67:7

# Error details

```
Test timeout of 30000ms exceeded.
```

```
TimeoutError: page.goto: Timeout 30000ms exceeded.
Call log:
  - navigating to "https://automationexercise.com/", waiting until "load"

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
          - paragraph [ref=e50]:
            - text: All QA engineers can use this website for automation practice and API testing either they are at beginner or advance level. This is for everybody to help them brush up their automation skills.
            - link "E-commerce website practice" [ref=e51] [cursor=pointer]:
              - img [ref=e53]
              - text: E-commerce website practice
          - link "Test Cases" [ref=e55] [cursor=pointer]:
            - /url: /test_cases
            - button "Test Cases" [ref=e56]
          - link "APIs list for practice" [ref=e57] [cursor=pointer]:
            - /url: /api_list
            - button "APIs list for practice" [ref=e58]
        - img "demo website for practice" [ref=e60]
    - link "" [ref=e61] [cursor=pointer]:
      - /url: "#slider-carousel"
      - generic [ref=e62]: 
    - link "" [ref=e63] [cursor=pointer]:
      - /url: "#slider-carousel"
      - generic [ref=e64]: 
  - generic [ref=e67]:
    - generic [ref=e69]:
      - heading "Category" [level=2] [ref=e70]
      - generic [ref=e71]:
        - heading " Women" [level=4] [ref=e74]:
          - link " Women" [ref=e75] [cursor=pointer]:
            - /url: "#Women"
            - generic [ref=e77]: 
            - text: Women
        - heading " Men" [level=4] [ref=e80]:
          - link " Men" [ref=e81] [cursor=pointer]:
            - /url: "#Men"
            - generic [ref=e83]: 
            - text: Men
        - heading " Kids" [level=4] [ref=e86]:
          - link " Kids" [ref=e87] [cursor=pointer]:
            - /url: "#Kids"
            - generic [ref=e89]: 
            - text: Kids
      - insertion [ref=e91]:
        - generic [ref=e94]:
          - heading "These are topics related to the article that might interest you" [level=2] [ref=e96]: Discover more
          - link "Automation skills assessment" [ref=e97] [cursor=pointer]:
            - generic "Automation skills assessment" [ref=e98]
            - img [ref=e100]
          - link "Factory Automation" [ref=e102] [cursor=pointer]:
            - generic "Factory Automation" [ref=e103]
            - img [ref=e105]
          - link "Automation practice platform" [ref=e107] [cursor=pointer]:
            - generic "Automation practice platform" [ref=e108]
            - img [ref=e110]
          - link "Quality assurance consulting" [ref=e112] [cursor=pointer]:
            - generic "Quality assurance consulting" [ref=e113]
            - img [ref=e115]
          - link "QA automation training" [ref=e117] [cursor=pointer]:
            - generic "QA automation training" [ref=e118]
            - img [ref=e120]
          - link "QA engineer training" [ref=e122] [cursor=pointer]:
            - generic "QA engineer training" [ref=e123]
            - img [ref=e125]
          - link "Dresses" [ref=e127] [cursor=pointer]:
            - generic "Dresses" [ref=e128]
            - img [ref=e130]
          - link "Jeans" [ref=e132] [cursor=pointer]:
            - generic "Jeans" [ref=e133]
            - img [ref=e135]
      - generic [ref=e137]:
        - heading "Brands" [level=2] [ref=e138]
        - list [ref=e140]:
          - listitem [ref=e141]:
            - link "(6) Polo" [ref=e142] [cursor=pointer]:
              - /url: /brand_products/Polo
              - generic [ref=e143]: (6)
              - text: Polo
          - listitem [ref=e144]:
            - link "(5) H&M" [ref=e145] [cursor=pointer]:
              - /url: /brand_products/H&M
              - generic [ref=e146]: (5)
              - text: H&M
          - listitem [ref=e147]:
            - link "(5) Madame" [ref=e148] [cursor=pointer]:
              - /url: /brand_products/Madame
              - generic [ref=e149]: (5)
              - text: Madame
          - listitem [ref=e150]:
            - link "(3) Mast & Harbour" [ref=e151] [cursor=pointer]:
              - /url: /brand_products/Mast & Harbour
              - generic [ref=e152]: (3)
              - text: Mast & Harbour
          - listitem [ref=e153]:
            - link "(4) Babyhug" [ref=e154] [cursor=pointer]:
              - /url: /brand_products/Babyhug
              - generic [ref=e155]: (4)
              - text: Babyhug
          - listitem [ref=e156]:
            - link "(3) Allen Solly Junior" [ref=e157] [cursor=pointer]:
              - /url: /brand_products/Allen Solly Junior
              - generic [ref=e158]: (3)
              - text: Allen Solly Junior
          - listitem [ref=e159]:
            - link "(3) Kookie Kids" [ref=e160] [cursor=pointer]:
              - /url: /brand_products/Kookie Kids
              - generic [ref=e161]: (3)
              - text: Kookie Kids
          - listitem [ref=e162]:
            - link "(5) Biba" [ref=e163] [cursor=pointer]:
              - /url: /brand_products/Biba
              - generic [ref=e164]: (5)
              - text: Biba
    - generic [ref=e165]:
      - generic [ref=e166]:
        - heading "Features Items" [level=2] [ref=e167]
        - generic [ref=e169]:
          - generic [ref=e170]:
            - generic [ref=e171]:
              - img "ecommerce website products" [ref=e172]
              - heading "Rs. 500" [level=2] [ref=e173]
              - paragraph [ref=e174]: Blue Top
              - generic [ref=e175] [cursor=pointer]:
                - generic [ref=e176]: 
                - text: Add to cart
            - generic [ref=e177]:
              - heading "Rs. 500" [level=2] [ref=e178]
              - paragraph [ref=e179]: Blue Top
              - generic [ref=e180] [cursor=pointer]:
                - generic [ref=e181]: 
                - text: Add to cart
          - list [ref=e183]:
            - listitem [ref=e184]:
              - link " View Product" [ref=e185] [cursor=pointer]:
                - /url: /product_details/1
                - generic [ref=e186]: 
                - text: View Product
        - generic [ref=e188]:
          - generic [ref=e189]:
            - generic [ref=e190]:
              - img "ecommerce website products" [ref=e191]
              - heading "Rs. 400" [level=2] [ref=e192]
              - paragraph [ref=e193]:
                - text: Men
                - link "Tshirt" [ref=e194] [cursor=pointer]:
                  - /url: "#"
                  - img [ref=e195]
                  - text: Tshirt
              - generic [ref=e197] [cursor=pointer]:
                - generic [ref=e198]: 
                - text: Add to cart
            - generic [ref=e199]:
              - heading "Rs. 400" [level=2] [ref=e200]
              - paragraph [ref=e201]: Men Tshirt
              - generic [ref=e202] [cursor=pointer]:
                - generic [ref=e203]: 
                - text: Add to cart
          - list [ref=e205]:
            - listitem [ref=e206]:
              - link " View Product" [ref=e207] [cursor=pointer]:
                - /url: /product_details/2
                - generic [ref=e208]: 
                - text: View Product
        - generic [ref=e210]:
          - generic [ref=e211]:
            - generic [ref=e212]:
              - img "ecommerce website products" [ref=e213]
              - heading "Rs. 1000" [level=2] [ref=e214]
              - paragraph [ref=e215]:
                - text: Sleeveless
                - link "Dress" [ref=e216] [cursor=pointer]:
                  - /url: "#"
                  - img [ref=e217]
                  - text: Dress
              - generic [ref=e219] [cursor=pointer]:
                - generic [ref=e220]: 
                - text: Add to cart
            - generic [ref=e221]:
              - heading "Rs. 1000" [level=2] [ref=e222]
              - paragraph [ref=e223]: Sleeveless Dress
              - generic [ref=e224] [cursor=pointer]:
                - generic [ref=e225]: 
                - text: Add to cart
          - list [ref=e227]:
            - listitem [ref=e228]:
              - link " View Product" [ref=e229] [cursor=pointer]:
                - /url: /product_details/3
                - generic [ref=e230]: 
                - text: View Product
        - generic [ref=e232]:
          - generic [ref=e233]:
            - generic [ref=e234]:
              - img "ecommerce website products" [ref=e235]
              - heading "Rs. 1500" [level=2] [ref=e236]
              - paragraph [ref=e237]: Stylish Dress
              - generic [ref=e238] [cursor=pointer]:
                - generic [ref=e239]: 
                - text: Add to cart
            - generic [ref=e240]:
              - heading "Rs. 1500" [level=2] [ref=e241]
              - paragraph [ref=e242]: Stylish Dress
              - generic [ref=e243] [cursor=pointer]:
                - generic [ref=e244]: 
                - text: Add to cart
          - list [ref=e246]:
            - listitem [ref=e247]:
              - link " View Product" [ref=e248] [cursor=pointer]:
                - /url: /product_details/4
                - generic [ref=e249]: 
                - text: View Product
        - generic [ref=e251]:
          - generic [ref=e252]:
            - generic [ref=e253]:
              - img "ecommerce website products" [ref=e254]
              - heading "Rs. 600" [level=2] [ref=e255]
              - paragraph [ref=e256]: Winter Top
              - generic [ref=e257] [cursor=pointer]:
                - generic [ref=e258]: 
                - text: Add to cart
            - generic [ref=e259]:
              - heading "Rs. 600" [level=2] [ref=e260]
              - paragraph [ref=e261]: Winter Top
              - generic [ref=e262] [cursor=pointer]:
                - generic [ref=e263]: 
                - text: Add to cart
          - list [ref=e265]:
            - listitem [ref=e266]:
              - link " View Product" [ref=e267] [cursor=pointer]:
                - /url: /product_details/5
                - generic [ref=e268]: 
                - text: View Product
        - generic [ref=e270]:
          - generic [ref=e271]:
            - generic [ref=e272]:
              - img "ecommerce website products" [ref=e273]
              - heading "Rs. 400" [level=2] [ref=e274]
              - paragraph [ref=e275]: Summer White Top
              - generic [ref=e276] [cursor=pointer]:
                - generic [ref=e277]: 
                - text: Add to cart
            - generic [ref=e278]:
              - heading "Rs. 400" [level=2] [ref=e279]
              - paragraph [ref=e280]: Summer White Top
              - generic [ref=e281] [cursor=pointer]:
                - generic [ref=e282]: 
                - text: Add to cart
          - list [ref=e284]:
            - listitem [ref=e285]:
              - link " View Product" [ref=e286] [cursor=pointer]:
                - /url: /product_details/6
                - generic [ref=e287]: 
                - text: View Product
        - generic [ref=e289]:
          - generic [ref=e290]:
            - generic [ref=e291]:
              - img "ecommerce website products" [ref=e292]
              - heading "Rs. 1000" [level=2] [ref=e293]
              - paragraph [ref=e294]: Madame Top For Women
              - generic [ref=e295] [cursor=pointer]:
                - generic [ref=e296]: 
                - text: Add to cart
            - generic [ref=e297]:
              - heading "Rs. 1000" [level=2] [ref=e298]
              - paragraph [ref=e299]: Madame Top For Women
              - generic [ref=e300] [cursor=pointer]:
                - generic [ref=e301]: 
                - text: Add to cart
          - list [ref=e303]:
            - listitem [ref=e304]:
              - link " View Product" [ref=e305] [cursor=pointer]:
                - /url: /product_details/7
                - generic [ref=e306]: 
                - text: View Product
        - generic [ref=e308]:
          - generic [ref=e309]:
            - generic [ref=e310]:
              - img "ecommerce website products" [ref=e311]
              - heading "Rs. 700" [level=2] [ref=e312]
              - paragraph [ref=e313]: Fancy Green Top
              - generic [ref=e314] [cursor=pointer]:
                - generic [ref=e315]: 
                - text: Add to cart
            - generic [ref=e316]:
              - heading "Rs. 700" [level=2] [ref=e317]
              - paragraph [ref=e318]: Fancy Green Top
              - generic [ref=e319] [cursor=pointer]:
                - generic [ref=e320]: 
                - text: Add to cart
          - list [ref=e322]:
            - listitem [ref=e323]:
              - link " View Product" [ref=e324] [cursor=pointer]:
                - /url: /product_details/8
                - generic [ref=e325]: 
                - text: View Product
        - generic [ref=e327]:
          - generic [ref=e328]:
            - generic [ref=e329]:
              - img "ecommerce website products" [ref=e330]
              - heading "Rs. 499" [level=2] [ref=e331]
              - paragraph [ref=e332]:
                - text: Sleeves Printed Top - White
                - link "Quality Control & Tracking" [ref=e333] [cursor=pointer]:
                  - img [ref=e335]
                  - text: Quality Control & Tracking
              - generic [ref=e337] [cursor=pointer]:
                - generic [ref=e338]: 
                - text: Add to cart
            - generic [ref=e339]:
              - heading "Rs. 499" [level=2] [ref=e340]
              - paragraph [ref=e341]: Sleeves Printed Top - White
              - generic [ref=e342] [cursor=pointer]:
                - generic [ref=e343]: 
                - text: Add to cart
          - list [ref=e345]:
            - listitem [ref=e346]:
              - link " View Product" [ref=e347] [cursor=pointer]:
                - /url: /product_details/11
                - generic [ref=e348]: 
                - text: View Product
        - generic [ref=e350]:
          - generic [ref=e351]:
            - generic [ref=e352]:
              - img "ecommerce website products" [ref=e353]
              - heading "Rs. 359" [level=2] [ref=e354]
              - paragraph [ref=e355]:
                - text: Half Sleeves Top Schiffli Detailing - Pink
                - link "API testing tools" [ref=e356] [cursor=pointer]:
                  - img [ref=e358]
                  - text: API testing tools
              - generic [ref=e360] [cursor=pointer]:
                - generic [ref=e361]: 
                - text: Add to cart
            - generic [ref=e362]:
              - heading "Rs. 359" [level=2] [ref=e363]
              - paragraph [ref=e364]: Half Sleeves Top Schiffli Detailing - Pink
              - generic [ref=e365] [cursor=pointer]:
                - generic [ref=e366]: 
                - text: Add to cart
          - list [ref=e368]:
            - listitem [ref=e369]:
              - link " View Product" [ref=e370] [cursor=pointer]:
                - /url: /product_details/12
                - generic [ref=e371]: 
                - text: View Product
        - generic [ref=e373]:
          - generic [ref=e374]:
            - generic [ref=e375]:
              - img "ecommerce website products" [ref=e376]
              - heading "Rs. 278" [level=2] [ref=e377]
              - paragraph [ref=e378]: Frozen Tops For Kids
              - generic [ref=e379] [cursor=pointer]:
                - generic [ref=e380]: 
                - text: Add to cart
            - generic [ref=e381]:
              - heading "Rs. 278" [level=2] [ref=e382]
              - paragraph [ref=e383]: Frozen Tops For Kids
              - generic [ref=e384] [cursor=pointer]:
                - generic [ref=e385]: 
                - text: Add to cart
          - list [ref=e387]:
            - listitem [ref=e388]:
              - link " View Product" [ref=e389] [cursor=pointer]:
                - /url: /product_details/13
                - generic [ref=e390]: 
                - text: View Product
        - generic [ref=e392]:
          - generic [ref=e393]:
            - generic [ref=e394]:
              - img "ecommerce website products" [ref=e395]
              - heading "Rs. 679" [level=2] [ref=e396]
              - paragraph [ref=e397]:
                - text: Full Sleeves Top Cherry - Pink
                - link "Software testing certifications" [ref=e398] [cursor=pointer]:
                  - img [ref=e400]
                  - text: Software testing certifications
              - generic [ref=e402] [cursor=pointer]:
                - generic [ref=e403]: 
                - text: Add to cart
            - generic [ref=e404]:
              - heading "Rs. 679" [level=2] [ref=e405]
              - paragraph [ref=e406]: Full Sleeves Top Cherry - Pink
              - generic [ref=e407] [cursor=pointer]:
                - generic [ref=e408]: 
                - text: Add to cart
          - list [ref=e410]:
            - listitem [ref=e411]:
              - link " View Product" [ref=e412] [cursor=pointer]:
                - /url: /product_details/14
                - generic [ref=e413]: 
                - text: View Product
        - generic [ref=e415]:
          - generic [ref=e416]:
            - generic [ref=e417]:
              - img "ecommerce website products" [ref=e418]
              - heading "Rs. 315" [level=2] [ref=e419]
              - paragraph [ref=e420]: Printed Off Shoulder Top - White
              - generic [ref=e421] [cursor=pointer]:
                - generic [ref=e422]: 
                - text: Add to cart
            - generic [ref=e423]:
              - heading "Rs. 315" [level=2] [ref=e424]
              - paragraph [ref=e425]: Printed Off Shoulder Top - White
              - generic [ref=e426] [cursor=pointer]:
                - generic [ref=e427]: 
                - text: Add to cart
          - list [ref=e429]:
            - listitem [ref=e430]:
              - link " View Product" [ref=e431] [cursor=pointer]:
                - /url: /product_details/15
                - generic [ref=e432]: 
                - text: View Product
        - generic [ref=e434]:
          - generic [ref=e435]:
            - generic [ref=e436]:
              - img "ecommerce website products" [ref=e437]
              - heading "Rs. 478" [level=2] [ref=e438]
              - paragraph [ref=e439]: Sleeves Top and Short - Blue & Pink
              - generic [ref=e440] [cursor=pointer]:
                - generic [ref=e441]: 
                - text: Add to cart
            - generic [ref=e442]:
              - heading "Rs. 478" [level=2] [ref=e443]
              - paragraph [ref=e444]: Sleeves Top and Short - Blue & Pink
              - generic [ref=e445] [cursor=pointer]:
                - generic [ref=e446]: 
                - text: Add to cart
          - list [ref=e448]:
            - listitem [ref=e449]:
              - link " View Product" [ref=e450] [cursor=pointer]:
                - /url: /product_details/16
                - generic [ref=e451]: 
                - text: View Product
        - generic [ref=e453]:
          - generic [ref=e454]:
            - generic [ref=e455]:
              - img "ecommerce website products" [ref=e456]
              - heading "Rs. 1200" [level=2] [ref=e457]
              - paragraph [ref=e458]: Little Girls Mr. Panda Shirt
              - generic [ref=e459] [cursor=pointer]:
                - generic [ref=e460]: 
                - text: Add to cart
            - generic [ref=e461]:
              - heading "Rs. 1200" [level=2] [ref=e462]
              - paragraph [ref=e463]: Little Girls Mr. Panda Shirt
              - generic [ref=e464] [cursor=pointer]:
                - generic [ref=e465]: 
                - text: Add to cart
          - list [ref=e467]:
            - listitem [ref=e468]:
              - link " View Product" [ref=e469] [cursor=pointer]:
                - /url: /product_details/18
                - generic [ref=e470]: 
                - text: View Product
        - generic [ref=e472]:
          - generic [ref=e473]:
            - generic [ref=e474]:
              - img "ecommerce website products" [ref=e475]
              - heading "Rs. 1050" [level=2] [ref=e476]
              - paragraph [ref=e477]:
                - text: Sleeveless Unicorn Patch Gown - Pink
                - link "T-Shirts" [ref=e478] [cursor=pointer]:
                  - img [ref=e480]
                  - text: T-Shirts
              - generic [ref=e482] [cursor=pointer]:
                - generic [ref=e483]: 
                - text: Add to cart
            - generic [ref=e484]:
              - heading "Rs. 1050" [level=2] [ref=e485]
              - paragraph [ref=e486]: Sleeveless Unicorn Patch Gown - Pink
              - generic [ref=e487] [cursor=pointer]:
                - generic [ref=e488]: 
                - text: Add to cart
          - list [ref=e490]:
            - listitem [ref=e491]:
              - link " View Product" [ref=e492] [cursor=pointer]:
                - /url: /product_details/19
                - generic [ref=e493]: 
                - text: View Product
        - generic [ref=e495]:
          - generic [ref=e496]:
            - generic [ref=e497]:
              - img "ecommerce website products" [ref=e498]
              - heading "Rs. 1190" [level=2] [ref=e499]
              - paragraph [ref=e500]: Cotton Mull Embroidered Dress
              - generic [ref=e501] [cursor=pointer]:
                - generic [ref=e502]: 
                - text: Add to cart
            - generic [ref=e503]:
              - heading "Rs. 1190" [level=2] [ref=e504]
              - paragraph [ref=e505]: Cotton Mull Embroidered Dress
              - generic [ref=e506] [cursor=pointer]:
                - generic [ref=e507]: 
                - text: Add to cart
          - list [ref=e509]:
            - listitem [ref=e510]:
              - link " View Product" [ref=e511] [cursor=pointer]:
                - /url: /product_details/20
                - generic [ref=e512]: 
                - text: View Product
        - generic [ref=e514]:
          - generic [ref=e515]:
            - generic [ref=e516]:
              - img "ecommerce website products" [ref=e517]
              - heading "Rs. 1530" [level=2] [ref=e518]
              - paragraph [ref=e519]: Blue Cotton Indie Mickey Dress
              - generic [ref=e520] [cursor=pointer]:
                - generic [ref=e521]: 
                - text: Add to cart
            - generic [ref=e522]:
              - heading "Rs. 1530" [level=2] [ref=e523]
              - paragraph [ref=e524]: Blue Cotton Indie Mickey Dress
              - generic [ref=e525] [cursor=pointer]:
                - generic [ref=e526]: 
                - text: Add to cart
          - list [ref=e528]:
            - listitem [ref=e529]:
              - link " View Product" [ref=e530] [cursor=pointer]:
                - /url: /product_details/21
                - generic [ref=e531]: 
                - text: View Product
        - generic [ref=e533]:
          - generic [ref=e534]:
            - generic [ref=e535]:
              - img "ecommerce website products" [ref=e536]
              - heading "Rs. 1600" [level=2] [ref=e537]
              - paragraph [ref=e538]:
                - text: Long Maxi Tulle Fancy Dress Up Outfits -Pink
                - link "Apparel" [ref=e539] [cursor=pointer]:
                  - img [ref=e541]
                  - text: Apparel
              - generic [ref=e543] [cursor=pointer]:
                - generic [ref=e544]: 
                - text: Add to cart
            - generic [ref=e545]:
              - heading "Rs. 1600" [level=2] [ref=e546]
              - paragraph [ref=e547]: Long Maxi Tulle Fancy Dress Up Outfits -Pink
              - generic [ref=e548] [cursor=pointer]:
                - generic [ref=e549]: 
                - text: Add to cart
          - list [ref=e551]:
            - listitem [ref=e552]:
              - link " View Product" [ref=e553] [cursor=pointer]:
                - /url: /product_details/22
                - generic [ref=e554]: 
                - text: View Product
        - generic [ref=e556]:
          - generic [ref=e557]:
            - generic [ref=e558]:
              - img "ecommerce website products" [ref=e559]
              - heading "Rs. 1100" [level=2] [ref=e560]
              - paragraph [ref=e561]:
                - text: Sleeveless Unicorn Print Fit & Flare Net Dress - Multi
                - link "Textiles & Nonwovens" [ref=e562] [cursor=pointer]:
                  - img [ref=e564]
                  - text: Textiles & Nonwovens
              - generic [ref=e566] [cursor=pointer]:
                - generic [ref=e567]: 
                - text: Add to cart
            - generic [ref=e568]:
              - heading "Rs. 1100" [level=2] [ref=e569]
              - paragraph [ref=e570]: Sleeveless Unicorn Print Fit & Flare Net Dress - Multi
              - generic [ref=e571] [cursor=pointer]:
                - generic [ref=e572]: 
                - text: Add to cart
          - list [ref=e574]:
            - listitem [ref=e575]:
              - link " View Product" [ref=e576] [cursor=pointer]:
                - /url: /product_details/23
                - generic [ref=e577]: 
                - text: View Product
        - generic [ref=e579]:
          - generic [ref=e580]:
            - generic [ref=e581]:
              - img "ecommerce website products" [ref=e582]
              - heading "Rs. 849" [level=2] [ref=e583]
              - paragraph [ref=e584]: Colour Blocked Shirt – Sky Blue
              - generic [ref=e585] [cursor=pointer]:
                - generic [ref=e586]: 
                - text: Add to cart
            - generic [ref=e587]:
              - heading "Rs. 849" [level=2] [ref=e588]
              - paragraph [ref=e589]: Colour Blocked Shirt – Sky Blue
              - generic [ref=e590] [cursor=pointer]:
                - generic [ref=e591]: 
                - text: Add to cart
          - list [ref=e593]:
            - listitem [ref=e594]:
              - link " View Product" [ref=e595] [cursor=pointer]:
                - /url: /product_details/24
                - generic [ref=e596]: 
                - text: View Product
        - generic [ref=e598]:
          - generic [ref=e599]:
            - generic [ref=e600]:
              - img "ecommerce website products" [ref=e601]
              - heading "Rs. 1299" [level=2] [ref=e602]
              - paragraph [ref=e603]:
                - text: Pure Cotton V-Neck
                - link "T-Shirt" [ref=e604] [cursor=pointer]:
                  - /url: "#"
                  - img [ref=e605]
                  - text: T-Shirt
              - generic [ref=e607] [cursor=pointer]:
                - generic [ref=e608]: 
                - text: Add to cart
            - generic [ref=e609]:
              - heading "Rs. 1299" [level=2] [ref=e610]
              - paragraph [ref=e611]: Pure Cotton V-Neck T-Shirt
              - generic [ref=e612] [cursor=pointer]:
                - generic [ref=e613]: 
                - text: Add to cart
          - list [ref=e615]:
            - listitem [ref=e616]:
              - link " View Product" [ref=e617] [cursor=pointer]:
                - /url: /product_details/28
                - generic [ref=e618]: 
                - text: View Product
        - generic [ref=e620]:
          - generic [ref=e621]:
            - generic [ref=e622]:
              - img "ecommerce website products" [ref=e623]
              - heading "Rs. 1000" [level=2] [ref=e624]
              - paragraph [ref=e625]: Green Side Placket Detail T-Shirt
              - generic [ref=e626] [cursor=pointer]:
                - generic [ref=e627]: 
                - text: Add to cart
            - generic [ref=e628]:
              - heading "Rs. 1000" [level=2] [ref=e629]
              - paragraph [ref=e630]: Green Side Placket Detail T-Shirt
              - generic [ref=e631] [cursor=pointer]:
                - generic [ref=e632]: 
                - text: Add to cart
          - list [ref=e634]:
            - listitem [ref=e635]:
              - link " View Product" [ref=e636] [cursor=pointer]:
                - /url: /product_details/29
                - generic [ref=e637]: 
                - text: View Product
        - generic [ref=e639]:
          - generic [ref=e640]:
            - generic [ref=e641]:
              - img "ecommerce website products" [ref=e642]
              - heading "Rs. 1500" [level=2] [ref=e643]
              - paragraph [ref=e644]: Premium Polo T-Shirts
              - generic [ref=e645] [cursor=pointer]:
                - generic [ref=e646]: 
                - text: Add to cart
            - generic [ref=e647]:
              - heading "Rs. 1500" [level=2] [ref=e648]
              - paragraph [ref=e649]: Premium Polo T-Shirts
              - generic [ref=e650] [cursor=pointer]:
                - generic [ref=e651]: 
                - text: Add to cart
          - list [ref=e653]:
            - listitem [ref=e654]:
              - link " View Product" [ref=e655] [cursor=pointer]:
                - /url: /product_details/30
                - generic [ref=e656]: 
                - text: View Product
        - generic [ref=e658]:
          - generic [ref=e659]:
            - generic [ref=e660]:
              - img "ecommerce website products" [ref=e661]
              - heading "Rs. 850" [level=2] [ref=e662]
              - paragraph [ref=e663]: Pure Cotton Neon Green Tshirt
              - generic [ref=e664] [cursor=pointer]:
                - generic [ref=e665]: 
                - text: Add to cart
            - generic [ref=e666]:
              - heading "Rs. 850" [level=2] [ref=e667]
              - paragraph [ref=e668]: Pure Cotton Neon Green Tshirt
              - generic [ref=e669] [cursor=pointer]:
                - generic [ref=e670]: 
                - text: Add to cart
          - list [ref=e672]:
            - listitem [ref=e673]:
              - link " View Product" [ref=e674] [cursor=pointer]:
                - /url: /product_details/31
                - generic [ref=e675]: 
                - text: View Product
        - generic [ref=e677]:
          - generic [ref=e678]:
            - generic [ref=e679]:
              - img "ecommerce website products" [ref=e680]
              - heading "Rs. 799" [level=2] [ref=e681]
              - paragraph [ref=e682]: Soft Stretch Jeans
              - generic [ref=e683] [cursor=pointer]:
                - generic [ref=e684]: 
                - text: Add to cart
            - generic [ref=e685]:
              - heading "Rs. 799" [level=2] [ref=e686]
              - paragraph [ref=e687]: Soft Stretch Jeans
              - generic [ref=e688] [cursor=pointer]:
                - generic [ref=e689]: 
                - text: Add to cart
          - list [ref=e691]:
            - listitem [ref=e692]:
              - link " View Product" [ref=e693] [cursor=pointer]:
                - /url: /product_details/33
                - generic [ref=e694]: 
                - text: View Product
        - generic [ref=e696]:
          - generic [ref=e697]:
            - generic [ref=e698]:
              - img "ecommerce website products" [ref=e699]
              - heading "Rs. 1200" [level=2] [ref=e700]
              - paragraph [ref=e701]: Regular Fit Straight Jeans
              - generic [ref=e702] [cursor=pointer]:
                - generic [ref=e703]: 
                - text: Add to cart
            - generic [ref=e704]:
              - heading "Rs. 1200" [level=2] [ref=e705]
              - paragraph [ref=e706]: Regular Fit Straight Jeans
              - generic [ref=e707] [cursor=pointer]:
                - generic [ref=e708]: 
                - text: Add to cart
          - list [ref=e710]:
            - listitem [ref=e711]:
              - link " View Product" [ref=e712] [cursor=pointer]:
                - /url: /product_details/35
                - generic [ref=e713]: 
                - text: View Product
        - generic [ref=e715]:
          - generic [ref=e716]:
            - generic [ref=e717]:
              - img "ecommerce website products" [ref=e718]
              - heading "Rs. 1400" [level=2] [ref=e719]
              - paragraph [ref=e720]: Grunt Blue Slim Fit Jeans
              - generic [ref=e721] [cursor=pointer]:
                - generic [ref=e722]: 
                - text: Add to cart
            - generic [ref=e723]:
              - heading "Rs. 1400" [level=2] [ref=e724]
              - paragraph [ref=e725]: Grunt Blue Slim Fit Jeans
              - generic [ref=e726] [cursor=pointer]:
                - generic [ref=e727]: 
                - text: Add to cart
          - list [ref=e729]:
            - listitem [ref=e730]:
              - link " View Product" [ref=e731] [cursor=pointer]:
                - /url: /product_details/37
                - generic [ref=e732]: 
                - text: View Product
        - generic [ref=e734]:
          - generic [ref=e735]:
            - generic [ref=e736]:
              - img "ecommerce website products" [ref=e737]
              - heading "Rs. 2300" [level=2] [ref=e738]
              - paragraph [ref=e739]: Rose Pink Embroidered Maxi Dress
              - generic [ref=e740] [cursor=pointer]:
                - generic [ref=e741]: 
                - text: Add to cart
            - generic [ref=e742]:
              - heading "Rs. 2300" [level=2] [ref=e743]
              - paragraph [ref=e744]: Rose Pink Embroidered Maxi Dress
              - generic [ref=e745] [cursor=pointer]:
                - generic [ref=e746]: 
                - text: Add to cart
          - list [ref=e748]:
            - listitem [ref=e749]:
              - link " View Product" [ref=e750] [cursor=pointer]:
                - /url: /product_details/38
                - generic [ref=e751]: 
                - text: View Product
        - generic [ref=e753]:
          - generic [ref=e754]:
            - generic [ref=e755]:
              - img "ecommerce website products" [ref=e756]
              - heading "Rs. 3000" [level=2] [ref=e757]
              - paragraph [ref=e758]: Cotton Silk Hand Block Print Saree
              - generic [ref=e759] [cursor=pointer]:
                - generic [ref=e760]: 
                - text: Add to cart
            - generic [ref=e761]:
              - heading "Rs. 3000" [level=2] [ref=e762]
              - paragraph [ref=e763]: Cotton Silk Hand Block Print Saree
              - generic [ref=e764] [cursor=pointer]:
                - generic [ref=e765]: 
                - text: Add to cart
          - list [ref=e767]:
            - listitem [ref=e768]:
              - link " View Product" [ref=e769] [cursor=pointer]:
                - /url: /product_details/39
                - generic [ref=e770]: 
                - text: View Product
        - generic [ref=e772]:
          - generic [ref=e773]:
            - generic [ref=e774]:
              - img "ecommerce website products" [ref=e775]
              - heading "Rs. 3500" [level=2] [ref=e776]
              - paragraph [ref=e777]: Rust Red Linen Saree
              - generic [ref=e778] [cursor=pointer]:
                - generic [ref=e779]: 
                - text: Add to cart
            - generic [ref=e780]:
              - heading "Rs. 3500" [level=2] [ref=e781]
              - paragraph [ref=e782]: Rust Red Linen Saree
              - generic [ref=e783] [cursor=pointer]:
                - generic [ref=e784]: 
                - text: Add to cart
          - list [ref=e786]:
            - listitem [ref=e787]:
              - link " View Product" [ref=e788] [cursor=pointer]:
                - /url: /product_details/40
                - generic [ref=e789]: 
                - text: View Product
        - generic [ref=e791]:
          - generic [ref=e792]:
            - generic [ref=e793]:
              - img "ecommerce website products" [ref=e794]
              - heading "Rs. 5000" [level=2] [ref=e795]
              - paragraph [ref=e796]: Beautiful Peacock Blue Cotton Linen Saree
              - generic [ref=e797] [cursor=pointer]:
                - generic [ref=e798]: 
                - text: Add to cart
            - generic [ref=e799]:
              - heading "Rs. 5000" [level=2] [ref=e800]
              - paragraph [ref=e801]: Beautiful Peacock Blue Cotton Linen Saree
              - generic [ref=e802] [cursor=pointer]:
                - generic [ref=e803]: 
                - text: Add to cart
          - list [ref=e805]:
            - listitem [ref=e806]:
              - link " View Product" [ref=e807] [cursor=pointer]:
                - /url: /product_details/41
                - generic [ref=e808]: 
                - text: View Product
        - generic [ref=e810]:
          - generic [ref=e811]:
            - generic [ref=e812]:
              - img "ecommerce website products" [ref=e813]
              - heading "Rs. 1400" [level=2] [ref=e814]
              - paragraph [ref=e815]: Lace Top For Women
              - generic [ref=e816] [cursor=pointer]:
                - generic [ref=e817]: 
                - text: Add to cart
            - generic [ref=e818]:
              - heading "Rs. 1400" [level=2] [ref=e819]
              - paragraph [ref=e820]: Lace Top For Women
              - generic [ref=e821] [cursor=pointer]:
                - generic [ref=e822]: 
                - text: Add to cart
          - list [ref=e824]:
            - listitem [ref=e825]:
              - link " View Product" [ref=e826] [cursor=pointer]:
                - /url: /product_details/42
                - generic [ref=e827]: 
                - text: View Product
        - generic [ref=e829]:
          - generic [ref=e830]:
            - generic [ref=e831]:
              - img "ecommerce website products" [ref=e832]
              - heading "Rs. 1389" [level=2] [ref=e833]
              - paragraph [ref=e834]:
                - text: GRAPHIC DESIGN MEN T SHIRT - BLUE
                - link "Apparel" [ref=e835] [cursor=pointer]:
                  - img [ref=e837]
                  - text: Apparel
              - generic [ref=e839] [cursor=pointer]:
                - generic [ref=e840]: 
                - text: Add to cart
            - generic [ref=e841]:
              - heading "Rs. 1389" [level=2] [ref=e842]
              - paragraph [ref=e843]: GRAPHIC DESIGN MEN T SHIRT - BLUE
              - generic [ref=e844] [cursor=pointer]:
                - generic [ref=e845]: 
                - text: Add to cart
          - list [ref=e847]:
            - listitem [ref=e848]:
              - link " View Product" [ref=e849] [cursor=pointer]:
                - /url: /product_details/43
                - generic [ref=e850]: 
                - text: View Product
      - generic [ref=e851]:
        - heading "recommended items" [level=2] [ref=e852]
        - generic [ref=e853]:
          - generic [ref=e854]:
            - text:   
            - generic:
              - generic [ref=e858]:
                - img "ecommerce website products" [ref=e859]
                - heading "Rs. 1500" [level=2] [ref=e860]
                - paragraph [ref=e861]: Stylish Dress
                - generic [ref=e862] [cursor=pointer]:
                  - generic [ref=e863]: 
                  - text: Add to cart
              - generic [ref=e867]:
                - img "ecommerce website products" [ref=e868]
                - heading "Rs. 600" [level=2] [ref=e869]
                - paragraph [ref=e870]: Winter Top
                - generic [ref=e871] [cursor=pointer]:
                  - generic [ref=e872]: 
                  - text: Add to cart
              - generic [ref=e876]:
                - img "ecommerce website products" [ref=e877]
                - heading "Rs. 400" [level=2] [ref=e878]
                - paragraph [ref=e879]: Summer White Top
                - generic [ref=e880] [cursor=pointer]:
                  - generic [ref=e881]: 
                  - text: Add to cart
          - link "" [ref=e882] [cursor=pointer]:
            - /url: "#recommended-item-carousel"
            - generic [ref=e883]: 
          - link "" [ref=e884] [cursor=pointer]:
            - /url: "#recommended-item-carousel"
            - generic [ref=e885]: 
  - insertion [ref=e887]
  - contentinfo [ref=e889]:
    - generic [ref=e894]:
      - heading "Subscription" [level=2] [ref=e895]
      - generic [ref=e896]:
        - textbox "Your email address" [ref=e897]
        - button "" [ref=e898] [cursor=pointer]:
          - generic [ref=e899]: 
        - paragraph [ref=e900]:
          - text: Get the most recent updates from
          - text: our site and be updated your self...
    - paragraph [ref=e904]: Copyright © 2021 All rights reserved
  - text: 
  - generic [ref=e905]:
    - generic [ref=e906] [cursor=pointer]:
      - img [ref=e908]
      - link "Go to shopping options for QA engineer resources" [ref=e910]: QA engineer resources
    - button "Close shopping anchor" [ref=e911]
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
  61  |     await page.waitForLoadState('networkidle');
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
> 77  |     await page.goto('https://automationexercise.com');
      |                ^ TimeoutError: page.goto: Timeout 30000ms exceeded.
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