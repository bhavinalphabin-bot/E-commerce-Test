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
          - paragraph [ref=e50]:
            - text: All QA engineers can use this website for automation practice and API testing either they are at beginner or advance level. This is for everybody to help them brush up their automation skills.
            - link "Automation exercise platform" [ref=e51] [cursor=pointer]:
              - img [ref=e53]
              - text: Automation exercise platform
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
          - link "Factory Automation" [ref=e97] [cursor=pointer]:
            - generic "Factory Automation" [ref=e98]
            - img [ref=e100]
          - link "T-Shirts" [ref=e102] [cursor=pointer]:
            - generic "T-Shirts" [ref=e103]
            - img [ref=e105]
          - link "Website usability testing" [ref=e107] [cursor=pointer]:
            - generic "Website usability testing" [ref=e108]
            - img [ref=e110]
          - link "Jeans" [ref=e112] [cursor=pointer]:
            - generic "Jeans" [ref=e113]
            - img [ref=e115]
          - link "Dress" [ref=e117] [cursor=pointer]:
            - generic "Dress" [ref=e118]
            - img [ref=e120]
          - link "Test case management" [ref=e122] [cursor=pointer]:
            - generic "Test case management" [ref=e123]
            - img [ref=e125]
          - link "Software testing certifications" [ref=e127] [cursor=pointer]:
            - generic "Software testing certifications" [ref=e128]
            - img [ref=e130]
          - link "QA engineer training" [ref=e132] [cursor=pointer]:
            - generic "QA engineer training" [ref=e133]
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
              - paragraph [ref=e215]: Sleeveless Dress
              - generic [ref=e216] [cursor=pointer]:
                - generic [ref=e217]: 
                - text: Add to cart
            - generic [ref=e218]:
              - heading "Rs. 1000" [level=2] [ref=e219]
              - paragraph [ref=e220]: Sleeveless Dress
              - generic [ref=e221] [cursor=pointer]:
                - generic [ref=e222]: 
                - text: Add to cart
          - list [ref=e224]:
            - listitem [ref=e225]:
              - link " View Product" [ref=e226] [cursor=pointer]:
                - /url: /product_details/3
                - generic [ref=e227]: 
                - text: View Product
        - generic [ref=e229]:
          - generic [ref=e230]:
            - generic [ref=e231]:
              - img "ecommerce website products" [ref=e232]
              - heading "Rs. 1500" [level=2] [ref=e233]
              - paragraph [ref=e234]: Stylish Dress
              - generic [ref=e235] [cursor=pointer]:
                - generic [ref=e236]: 
                - text: Add to cart
            - generic [ref=e237]:
              - heading "Rs. 1500" [level=2] [ref=e238]
              - paragraph [ref=e239]: Stylish Dress
              - generic [ref=e240] [cursor=pointer]:
                - generic [ref=e241]: 
                - text: Add to cart
          - list [ref=e243]:
            - listitem [ref=e244]:
              - link " View Product" [ref=e245] [cursor=pointer]:
                - /url: /product_details/4
                - generic [ref=e246]: 
                - text: View Product
        - generic [ref=e248]:
          - generic [ref=e249]:
            - generic [ref=e250]:
              - img "ecommerce website products" [ref=e251]
              - heading "Rs. 600" [level=2] [ref=e252]
              - paragraph [ref=e253]: Winter Top
              - generic [ref=e254] [cursor=pointer]:
                - generic [ref=e255]: 
                - text: Add to cart
            - generic [ref=e256]:
              - heading "Rs. 600" [level=2] [ref=e257]
              - paragraph [ref=e258]: Winter Top
              - generic [ref=e259] [cursor=pointer]:
                - generic [ref=e260]: 
                - text: Add to cart
          - list [ref=e262]:
            - listitem [ref=e263]:
              - link " View Product" [ref=e264] [cursor=pointer]:
                - /url: /product_details/5
                - generic [ref=e265]: 
                - text: View Product
        - generic [ref=e267]:
          - generic [ref=e268]:
            - generic [ref=e269]:
              - img "ecommerce website products" [ref=e270]
              - heading "Rs. 400" [level=2] [ref=e271]
              - paragraph [ref=e272]: Summer White Top
              - generic [ref=e273] [cursor=pointer]:
                - generic [ref=e274]: 
                - text: Add to cart
            - generic [ref=e275]:
              - heading "Rs. 400" [level=2] [ref=e276]
              - paragraph [ref=e277]: Summer White Top
              - generic [ref=e278] [cursor=pointer]:
                - generic [ref=e279]: 
                - text: Add to cart
          - list [ref=e281]:
            - listitem [ref=e282]:
              - link " View Product" [ref=e283] [cursor=pointer]:
                - /url: /product_details/6
                - generic [ref=e284]: 
                - text: View Product
        - generic [ref=e286]:
          - generic [ref=e287]:
            - generic [ref=e288]:
              - img "ecommerce website products" [ref=e289]
              - heading "Rs. 1000" [level=2] [ref=e290]
              - paragraph [ref=e291]: Madame Top For Women
              - generic [ref=e292] [cursor=pointer]:
                - generic [ref=e293]: 
                - text: Add to cart
            - generic [ref=e294]:
              - heading "Rs. 1000" [level=2] [ref=e295]
              - paragraph [ref=e296]: Madame Top For Women
              - generic [ref=e297] [cursor=pointer]:
                - generic [ref=e298]: 
                - text: Add to cart
          - list [ref=e300]:
            - listitem [ref=e301]:
              - link " View Product" [ref=e302] [cursor=pointer]:
                - /url: /product_details/7
                - generic [ref=e303]: 
                - text: View Product
        - generic [ref=e305]:
          - generic [ref=e306]:
            - generic [ref=e307]:
              - img "ecommerce website products" [ref=e308]
              - heading "Rs. 700" [level=2] [ref=e309]
              - paragraph [ref=e310]: Fancy Green Top
              - generic [ref=e311] [cursor=pointer]:
                - generic [ref=e312]: 
                - text: Add to cart
            - generic [ref=e313]:
              - heading "Rs. 700" [level=2] [ref=e314]
              - paragraph [ref=e315]: Fancy Green Top
              - generic [ref=e316] [cursor=pointer]:
                - generic [ref=e317]: 
                - text: Add to cart
          - list [ref=e319]:
            - listitem [ref=e320]:
              - link " View Product" [ref=e321] [cursor=pointer]:
                - /url: /product_details/8
                - generic [ref=e322]: 
                - text: View Product
        - generic [ref=e324]:
          - generic [ref=e325]:
            - generic [ref=e326]:
              - img "ecommerce website products" [ref=e327]
              - heading "Rs. 499" [level=2] [ref=e328]
              - paragraph [ref=e329]:
                - text: Sleeves Printed Top - White
                - link "Website development services" [ref=e330] [cursor=pointer]:
                  - img [ref=e332]
                  - text: Website development services
              - generic [ref=e334] [cursor=pointer]:
                - generic [ref=e335]: 
                - text: Add to cart
            - generic [ref=e336]:
              - heading "Rs. 499" [level=2] [ref=e337]
              - paragraph [ref=e338]: Sleeves Printed Top - White
              - generic [ref=e339] [cursor=pointer]:
                - generic [ref=e340]: 
                - text: Add to cart
          - list [ref=e342]:
            - listitem [ref=e343]:
              - link " View Product" [ref=e344] [cursor=pointer]:
                - /url: /product_details/11
                - generic [ref=e345]: 
                - text: View Product
        - generic [ref=e347]:
          - generic [ref=e348]:
            - generic [ref=e349]:
              - img "ecommerce website products" [ref=e350]
              - heading "Rs. 359" [level=2] [ref=e351]
              - paragraph [ref=e352]:
                - text: Half Sleeves Top Schiffli Detailing - Pink
                - link "Quality assurance consulting" [ref=e353] [cursor=pointer]:
                  - img [ref=e355]
                  - text: Quality assurance consulting
              - generic [ref=e357] [cursor=pointer]:
                - generic [ref=e358]: 
                - text: Add to cart
            - generic [ref=e359]:
              - heading "Rs. 359" [level=2] [ref=e360]
              - paragraph [ref=e361]: Half Sleeves Top Schiffli Detailing - Pink
              - generic [ref=e362] [cursor=pointer]:
                - generic [ref=e363]: 
                - text: Add to cart
          - list [ref=e365]:
            - listitem [ref=e366]:
              - link " View Product" [ref=e367] [cursor=pointer]:
                - /url: /product_details/12
                - generic [ref=e368]: 
                - text: View Product
        - generic [ref=e370]:
          - generic [ref=e371]:
            - generic [ref=e372]:
              - img "ecommerce website products" [ref=e373]
              - heading "Rs. 278" [level=2] [ref=e374]
              - paragraph [ref=e375]: Frozen Tops For Kids
              - generic [ref=e376] [cursor=pointer]:
                - generic [ref=e377]: 
                - text: Add to cart
            - generic [ref=e378]:
              - heading "Rs. 278" [level=2] [ref=e379]
              - paragraph [ref=e380]: Frozen Tops For Kids
              - generic [ref=e381] [cursor=pointer]:
                - generic [ref=e382]: 
                - text: Add to cart
          - list [ref=e384]:
            - listitem [ref=e385]:
              - link " View Product" [ref=e386] [cursor=pointer]:
                - /url: /product_details/13
                - generic [ref=e387]: 
                - text: View Product
        - generic [ref=e389]:
          - generic [ref=e390]:
            - generic [ref=e391]:
              - img "ecommerce website products" [ref=e392]
              - heading "Rs. 679" [level=2] [ref=e393]
              - paragraph [ref=e394]:
                - text: Full Sleeves Top Cherry - Pink
                - link "API testing services" [ref=e395] [cursor=pointer]:
                  - img [ref=e397]
                  - text: API testing services
              - generic [ref=e399] [cursor=pointer]:
                - generic [ref=e400]: 
                - text: Add to cart
            - generic [ref=e401]:
              - heading "Rs. 679" [level=2] [ref=e402]
              - paragraph [ref=e403]: Full Sleeves Top Cherry - Pink
              - generic [ref=e404] [cursor=pointer]:
                - generic [ref=e405]: 
                - text: Add to cart
          - list [ref=e407]:
            - listitem [ref=e408]:
              - link " View Product" [ref=e409] [cursor=pointer]:
                - /url: /product_details/14
                - generic [ref=e410]: 
                - text: View Product
        - generic [ref=e412]:
          - generic [ref=e413]:
            - generic [ref=e414]:
              - img "ecommerce website products" [ref=e415]
              - heading "Rs. 315" [level=2] [ref=e416]
              - paragraph [ref=e417]: Printed Off Shoulder Top - White
              - generic [ref=e418] [cursor=pointer]:
                - generic [ref=e419]: 
                - text: Add to cart
            - generic [ref=e420]:
              - heading "Rs. 315" [level=2] [ref=e421]
              - paragraph [ref=e422]: Printed Off Shoulder Top - White
              - generic [ref=e423] [cursor=pointer]:
                - generic [ref=e424]: 
                - text: Add to cart
          - list [ref=e426]:
            - listitem [ref=e427]:
              - link " View Product" [ref=e428] [cursor=pointer]:
                - /url: /product_details/15
                - generic [ref=e429]: 
                - text: View Product
        - generic [ref=e431]:
          - generic [ref=e432]:
            - generic [ref=e433]:
              - img "ecommerce website products" [ref=e434]
              - heading "Rs. 478" [level=2] [ref=e435]
              - paragraph [ref=e436]: Sleeves Top and Short - Blue & Pink
              - generic [ref=e437] [cursor=pointer]:
                - generic [ref=e438]: 
                - text: Add to cart
            - generic [ref=e439]:
              - heading "Rs. 478" [level=2] [ref=e440]
              - paragraph [ref=e441]: Sleeves Top and Short - Blue & Pink
              - generic [ref=e442] [cursor=pointer]:
                - generic [ref=e443]: 
                - text: Add to cart
          - list [ref=e445]:
            - listitem [ref=e446]:
              - link " View Product" [ref=e447] [cursor=pointer]:
                - /url: /product_details/16
                - generic [ref=e448]: 
                - text: View Product
        - generic [ref=e450]:
          - generic [ref=e451]:
            - generic [ref=e452]:
              - img "ecommerce website products" [ref=e453]
              - heading "Rs. 1200" [level=2] [ref=e454]
              - paragraph [ref=e455]: Little Girls Mr. Panda Shirt
              - generic [ref=e456] [cursor=pointer]:
                - generic [ref=e457]: 
                - text: Add to cart
            - generic [ref=e458]:
              - heading "Rs. 1200" [level=2] [ref=e459]
              - paragraph [ref=e460]: Little Girls Mr. Panda Shirt
              - generic [ref=e461] [cursor=pointer]:
                - generic [ref=e462]: 
                - text: Add to cart
          - list [ref=e464]:
            - listitem [ref=e465]:
              - link " View Product" [ref=e466] [cursor=pointer]:
                - /url: /product_details/18
                - generic [ref=e467]: 
                - text: View Product
        - generic [ref=e469]:
          - generic [ref=e470]:
            - generic [ref=e471]:
              - img "ecommerce website products" [ref=e472]
              - heading "Rs. 1050" [level=2] [ref=e473]
              - paragraph [ref=e474]:
                - text: Sleeveless Unicorn Patch Gown - Pink
                - link "QA engineer resources" [ref=e475] [cursor=pointer]:
                  - img [ref=e477]
                  - text: QA engineer resources
              - generic [ref=e479] [cursor=pointer]:
                - generic [ref=e480]: 
                - text: Add to cart
            - generic [ref=e481]:
              - heading "Rs. 1050" [level=2] [ref=e482]
              - paragraph [ref=e483]: Sleeveless Unicorn Patch Gown - Pink
              - generic [ref=e484] [cursor=pointer]:
                - generic [ref=e485]: 
                - text: Add to cart
          - list [ref=e487]:
            - listitem [ref=e488]:
              - link " View Product" [ref=e489] [cursor=pointer]:
                - /url: /product_details/19
                - generic [ref=e490]: 
                - text: View Product
        - generic [ref=e492]:
          - generic [ref=e493]:
            - generic [ref=e494]:
              - img "ecommerce website products" [ref=e495]
              - heading "Rs. 1190" [level=2] [ref=e496]
              - paragraph [ref=e497]: Cotton Mull Embroidered Dress
              - generic [ref=e498] [cursor=pointer]:
                - generic [ref=e499]: 
                - text: Add to cart
            - generic [ref=e500]:
              - heading "Rs. 1190" [level=2] [ref=e501]
              - paragraph [ref=e502]: Cotton Mull Embroidered Dress
              - generic [ref=e503] [cursor=pointer]:
                - generic [ref=e504]: 
                - text: Add to cart
          - list [ref=e506]:
            - listitem [ref=e507]:
              - link " View Product" [ref=e508] [cursor=pointer]:
                - /url: /product_details/20
                - generic [ref=e509]: 
                - text: View Product
        - generic [ref=e511]:
          - generic [ref=e512]:
            - generic [ref=e513]:
              - img "ecommerce website products" [ref=e514]
              - heading "Rs. 1530" [level=2] [ref=e515]
              - paragraph [ref=e516]: Blue Cotton Indie Mickey Dress
              - generic [ref=e517] [cursor=pointer]:
                - generic [ref=e518]: 
                - text: Add to cart
            - generic [ref=e519]:
              - heading "Rs. 1530" [level=2] [ref=e520]
              - paragraph [ref=e521]: Blue Cotton Indie Mickey Dress
              - generic [ref=e522] [cursor=pointer]:
                - generic [ref=e523]: 
                - text: Add to cart
          - list [ref=e525]:
            - listitem [ref=e526]:
              - link " View Product" [ref=e527] [cursor=pointer]:
                - /url: /product_details/21
                - generic [ref=e528]: 
                - text: View Product
        - generic [ref=e530]:
          - generic [ref=e531]:
            - generic [ref=e532]:
              - img "ecommerce website products" [ref=e533]
              - heading "Rs. 1600" [level=2] [ref=e534]
              - paragraph [ref=e535]:
                - text: Long Maxi Tulle Fancy Dress Up Outfits -Pink
                - link "Clothing" [ref=e536] [cursor=pointer]:
                  - img [ref=e538]
                  - text: Clothing
              - generic [ref=e540] [cursor=pointer]:
                - generic [ref=e541]: 
                - text: Add to cart
            - generic [ref=e542]:
              - heading "Rs. 1600" [level=2] [ref=e543]
              - paragraph [ref=e544]: Long Maxi Tulle Fancy Dress Up Outfits -Pink
              - generic [ref=e545] [cursor=pointer]:
                - generic [ref=e546]: 
                - text: Add to cart
          - list [ref=e548]:
            - listitem [ref=e549]:
              - link " View Product" [ref=e550] [cursor=pointer]:
                - /url: /product_details/22
                - generic [ref=e551]: 
                - text: View Product
        - generic [ref=e553]:
          - generic [ref=e554]:
            - generic [ref=e555]:
              - img "ecommerce website products" [ref=e556]
              - heading "Rs. 1100" [level=2] [ref=e557]
              - paragraph [ref=e558]: Sleeveless Unicorn Print Fit & Flare Net Dress - Multi
              - generic [ref=e559] [cursor=pointer]:
                - generic [ref=e560]: 
                - text: Add to cart
            - generic [ref=e561]:
              - heading "Rs. 1100" [level=2] [ref=e562]
              - paragraph [ref=e563]: Sleeveless Unicorn Print Fit & Flare Net Dress - Multi
              - generic [ref=e564] [cursor=pointer]:
                - generic [ref=e565]: 
                - text: Add to cart
          - list [ref=e567]:
            - listitem [ref=e568]:
              - link " View Product" [ref=e569] [cursor=pointer]:
                - /url: /product_details/23
                - generic [ref=e570]: 
                - text: View Product
        - generic [ref=e572]:
          - generic [ref=e573]:
            - generic [ref=e574]:
              - img "ecommerce website products" [ref=e575]
              - heading "Rs. 849" [level=2] [ref=e576]
              - paragraph [ref=e577]: Colour Blocked Shirt – Sky Blue
              - generic [ref=e578] [cursor=pointer]:
                - generic [ref=e579]: 
                - text: Add to cart
            - generic [ref=e580]:
              - heading "Rs. 849" [level=2] [ref=e581]
              - paragraph [ref=e582]: Colour Blocked Shirt – Sky Blue
              - generic [ref=e583] [cursor=pointer]:
                - generic [ref=e584]: 
                - text: Add to cart
          - list [ref=e586]:
            - listitem [ref=e587]:
              - link " View Product" [ref=e588] [cursor=pointer]:
                - /url: /product_details/24
                - generic [ref=e589]: 
                - text: View Product
        - generic [ref=e591]:
          - generic [ref=e592]:
            - generic [ref=e593]:
              - img "ecommerce website products" [ref=e594]
              - heading "Rs. 1299" [level=2] [ref=e595]
              - paragraph [ref=e596]:
                - text: Pure Cotton V-Neck
                - link "T-Shirt" [ref=e597] [cursor=pointer]:
                  - /url: "#"
                  - img [ref=e598]
                  - text: T-Shirt
              - generic [ref=e600] [cursor=pointer]:
                - generic [ref=e601]: 
                - text: Add to cart
            - generic [ref=e602]:
              - heading "Rs. 1299" [level=2] [ref=e603]
              - paragraph [ref=e604]: Pure Cotton V-Neck T-Shirt
              - generic [ref=e605] [cursor=pointer]:
                - generic [ref=e606]: 
                - text: Add to cart
          - list [ref=e608]:
            - listitem [ref=e609]:
              - link " View Product" [ref=e610] [cursor=pointer]:
                - /url: /product_details/28
                - generic [ref=e611]: 
                - text: View Product
        - generic [ref=e613]:
          - generic [ref=e614]:
            - generic [ref=e615]:
              - img "ecommerce website products" [ref=e616]
              - heading "Rs. 1000" [level=2] [ref=e617]
              - paragraph [ref=e618]: Green Side Placket Detail T-Shirt
              - generic [ref=e619] [cursor=pointer]:
                - generic [ref=e620]: 
                - text: Add to cart
            - generic [ref=e621]:
              - heading "Rs. 1000" [level=2] [ref=e622]
              - paragraph [ref=e623]: Green Side Placket Detail T-Shirt
              - generic [ref=e624] [cursor=pointer]:
                - generic [ref=e625]: 
                - text: Add to cart
          - list [ref=e627]:
            - listitem [ref=e628]:
              - link " View Product" [ref=e629] [cursor=pointer]:
                - /url: /product_details/29
                - generic [ref=e630]: 
                - text: View Product
        - generic [ref=e632]:
          - generic [ref=e633]:
            - generic [ref=e634]:
              - img "ecommerce website products" [ref=e635]
              - heading "Rs. 1500" [level=2] [ref=e636]
              - paragraph [ref=e637]: Premium Polo T-Shirts
              - generic [ref=e638] [cursor=pointer]:
                - generic [ref=e639]: 
                - text: Add to cart
            - generic [ref=e640]:
              - heading "Rs. 1500" [level=2] [ref=e641]
              - paragraph [ref=e642]: Premium Polo T-Shirts
              - generic [ref=e643] [cursor=pointer]:
                - generic [ref=e644]: 
                - text: Add to cart
          - list [ref=e646]:
            - listitem [ref=e647]:
              - link " View Product" [ref=e648] [cursor=pointer]:
                - /url: /product_details/30
                - generic [ref=e649]: 
                - text: View Product
        - generic [ref=e651]:
          - generic [ref=e652]:
            - generic [ref=e653]:
              - img "ecommerce website products" [ref=e654]
              - heading "Rs. 850" [level=2] [ref=e655]
              - paragraph [ref=e656]: Pure Cotton Neon Green Tshirt
              - generic [ref=e657] [cursor=pointer]:
                - generic [ref=e658]: 
                - text: Add to cart
            - generic [ref=e659]:
              - heading "Rs. 850" [level=2] [ref=e660]
              - paragraph [ref=e661]: Pure Cotton Neon Green Tshirt
              - generic [ref=e662] [cursor=pointer]:
                - generic [ref=e663]: 
                - text: Add to cart
          - list [ref=e665]:
            - listitem [ref=e666]:
              - link " View Product" [ref=e667] [cursor=pointer]:
                - /url: /product_details/31
                - generic [ref=e668]: 
                - text: View Product
        - generic [ref=e670]:
          - generic [ref=e671]:
            - generic [ref=e672]:
              - img "ecommerce website products" [ref=e673]
              - heading "Rs. 799" [level=2] [ref=e674]
              - paragraph [ref=e675]: Soft Stretch Jeans
              - generic [ref=e676] [cursor=pointer]:
                - generic [ref=e677]: 
                - text: Add to cart
            - generic [ref=e678]:
              - heading "Rs. 799" [level=2] [ref=e679]
              - paragraph [ref=e680]: Soft Stretch Jeans
              - generic [ref=e681] [cursor=pointer]:
                - generic [ref=e682]: 
                - text: Add to cart
          - list [ref=e684]:
            - listitem [ref=e685]:
              - link " View Product" [ref=e686] [cursor=pointer]:
                - /url: /product_details/33
                - generic [ref=e687]: 
                - text: View Product
        - generic [ref=e689]:
          - generic [ref=e690]:
            - generic [ref=e691]:
              - img "ecommerce website products" [ref=e692]
              - heading "Rs. 1200" [level=2] [ref=e693]
              - paragraph [ref=e694]: Regular Fit Straight Jeans
              - generic [ref=e695] [cursor=pointer]:
                - generic [ref=e696]: 
                - text: Add to cart
            - generic [ref=e697]:
              - heading "Rs. 1200" [level=2] [ref=e698]
              - paragraph [ref=e699]: Regular Fit Straight Jeans
              - generic [ref=e700] [cursor=pointer]:
                - generic [ref=e701]: 
                - text: Add to cart
          - list [ref=e703]:
            - listitem [ref=e704]:
              - link " View Product" [ref=e705] [cursor=pointer]:
                - /url: /product_details/35
                - generic [ref=e706]: 
                - text: View Product
        - generic [ref=e708]:
          - generic [ref=e709]:
            - generic [ref=e710]:
              - img "ecommerce website products" [ref=e711]
              - heading "Rs. 1400" [level=2] [ref=e712]
              - paragraph [ref=e713]: Grunt Blue Slim Fit Jeans
              - generic [ref=e714] [cursor=pointer]:
                - generic [ref=e715]: 
                - text: Add to cart
            - generic [ref=e716]:
              - heading "Rs. 1400" [level=2] [ref=e717]
              - paragraph [ref=e718]: Grunt Blue Slim Fit Jeans
              - generic [ref=e719] [cursor=pointer]:
                - generic [ref=e720]: 
                - text: Add to cart
          - list [ref=e722]:
            - listitem [ref=e723]:
              - link " View Product" [ref=e724] [cursor=pointer]:
                - /url: /product_details/37
                - generic [ref=e725]: 
                - text: View Product
        - generic [ref=e727]:
          - generic [ref=e728]:
            - generic [ref=e729]:
              - img "ecommerce website products" [ref=e730]
              - heading "Rs. 2300" [level=2] [ref=e731]
              - paragraph [ref=e732]: Rose Pink Embroidered Maxi Dress
              - generic [ref=e733] [cursor=pointer]:
                - generic [ref=e734]: 
                - text: Add to cart
            - generic [ref=e735]:
              - heading "Rs. 2300" [level=2] [ref=e736]
              - paragraph [ref=e737]: Rose Pink Embroidered Maxi Dress
              - generic [ref=e738] [cursor=pointer]:
                - generic [ref=e739]: 
                - text: Add to cart
          - list [ref=e741]:
            - listitem [ref=e742]:
              - link " View Product" [ref=e743] [cursor=pointer]:
                - /url: /product_details/38
                - generic [ref=e744]: 
                - text: View Product
        - generic [ref=e746]:
          - generic [ref=e747]:
            - generic [ref=e748]:
              - img "ecommerce website products" [ref=e749]
              - heading "Rs. 3000" [level=2] [ref=e750]
              - paragraph [ref=e751]: Cotton Silk Hand Block Print Saree
              - generic [ref=e752] [cursor=pointer]:
                - generic [ref=e753]: 
                - text: Add to cart
            - generic [ref=e754]:
              - heading "Rs. 3000" [level=2] [ref=e755]
              - paragraph [ref=e756]: Cotton Silk Hand Block Print Saree
              - generic [ref=e757] [cursor=pointer]:
                - generic [ref=e758]: 
                - text: Add to cart
          - list [ref=e760]:
            - listitem [ref=e761]:
              - link " View Product" [ref=e762] [cursor=pointer]:
                - /url: /product_details/39
                - generic [ref=e763]: 
                - text: View Product
        - generic [ref=e765]:
          - generic [ref=e766]:
            - generic [ref=e767]:
              - img "ecommerce website products" [ref=e768]
              - heading "Rs. 3500" [level=2] [ref=e769]
              - paragraph [ref=e770]: Rust Red Linen Saree
              - generic [ref=e771] [cursor=pointer]:
                - generic [ref=e772]: 
                - text: Add to cart
            - generic [ref=e773]:
              - heading "Rs. 3500" [level=2] [ref=e774]
              - paragraph [ref=e775]: Rust Red Linen Saree
              - generic [ref=e776] [cursor=pointer]:
                - generic [ref=e777]: 
                - text: Add to cart
          - list [ref=e779]:
            - listitem [ref=e780]:
              - link " View Product" [ref=e781] [cursor=pointer]:
                - /url: /product_details/40
                - generic [ref=e782]: 
                - text: View Product
        - generic [ref=e784]:
          - generic [ref=e785]:
            - generic [ref=e786]:
              - img "ecommerce website products" [ref=e787]
              - heading "Rs. 5000" [level=2] [ref=e788]
              - paragraph [ref=e789]: Beautiful Peacock Blue Cotton Linen Saree
              - generic [ref=e790] [cursor=pointer]:
                - generic [ref=e791]: 
                - text: Add to cart
            - generic [ref=e792]:
              - heading "Rs. 5000" [level=2] [ref=e793]
              - paragraph [ref=e794]: Beautiful Peacock Blue Cotton Linen Saree
              - generic [ref=e795] [cursor=pointer]:
                - generic [ref=e796]: 
                - text: Add to cart
          - list [ref=e798]:
            - listitem [ref=e799]:
              - link " View Product" [ref=e800] [cursor=pointer]:
                - /url: /product_details/41
                - generic [ref=e801]: 
                - text: View Product
        - generic [ref=e803]:
          - generic [ref=e804]:
            - generic [ref=e805]:
              - img "ecommerce website products" [ref=e806]
              - heading "Rs. 1400" [level=2] [ref=e807]
              - paragraph [ref=e808]: Lace Top For Women
              - generic [ref=e809] [cursor=pointer]:
                - generic [ref=e810]: 
                - text: Add to cart
            - generic [ref=e811]:
              - heading "Rs. 1400" [level=2] [ref=e812]
              - paragraph [ref=e813]: Lace Top For Women
              - generic [ref=e814] [cursor=pointer]:
                - generic [ref=e815]: 
                - text: Add to cart
          - list [ref=e817]:
            - listitem [ref=e818]:
              - link " View Product" [ref=e819] [cursor=pointer]:
                - /url: /product_details/42
                - generic [ref=e820]: 
                - text: View Product
        - generic [ref=e822]:
          - generic [ref=e823]:
            - generic [ref=e824]:
              - img "ecommerce website products" [ref=e825]
              - heading "Rs. 1389" [level=2] [ref=e826]
              - paragraph [ref=e827]:
                - text: GRAPHIC DESIGN MEN
                - link "T SHIRT" [ref=e828] [cursor=pointer]:
                  - /url: "#"
                  - img [ref=e829]
                  - text: T SHIRT
                - text: "- BLUE"
                - link "Clothing" [ref=e831] [cursor=pointer]:
                  - img [ref=e833]
                  - text: Clothing
              - generic [ref=e835] [cursor=pointer]:
                - generic [ref=e836]: 
                - text: Add to cart
            - generic [ref=e837]:
              - heading "Rs. 1389" [level=2] [ref=e838]
              - paragraph [ref=e839]: GRAPHIC DESIGN MEN T SHIRT - BLUE
              - generic [ref=e840] [cursor=pointer]:
                - generic [ref=e841]: 
                - text: Add to cart
          - list [ref=e843]:
            - listitem [ref=e844]:
              - link " View Product" [ref=e845] [cursor=pointer]:
                - /url: /product_details/43
                - generic [ref=e846]: 
                - text: View Product
      - generic [ref=e847]:
        - heading "recommended items" [level=2] [ref=e848]
        - generic [ref=e849]:
          - generic [ref=e850]:
            - generic:
              - generic [ref=e854]:
                - img "ecommerce website products" [ref=e855]
                - heading "Rs. 500" [level=2] [ref=e856]
                - paragraph [ref=e857]: Blue Top
                - generic [ref=e858] [cursor=pointer]:
                  - generic [ref=e859]: 
                  - text: Add to cart
              - generic [ref=e863]:
                - img "ecommerce website products" [ref=e864]
                - heading "Rs. 400" [level=2] [ref=e865]
                - paragraph [ref=e866]: Men Tshirt
                - generic [ref=e867] [cursor=pointer]:
                  - generic [ref=e868]: 
                  - text: Add to cart
              - generic [ref=e872]:
                - img "ecommerce website products" [ref=e873]
                - heading "Rs. 1000" [level=2] [ref=e874]
                - paragraph [ref=e875]: Rs. 1000
                - generic [ref=e876] [cursor=pointer]:
                  - generic [ref=e877]: 
                  - text: Add to cart
            - text:   
          - link "" [ref=e878] [cursor=pointer]:
            - /url: "#recommended-item-carousel"
            - generic [ref=e879]: 
          - link "" [ref=e880] [cursor=pointer]:
            - /url: "#recommended-item-carousel"
            - generic [ref=e881]: 
  - insertion [ref=e883]
  - contentinfo [ref=e885]:
    - generic [ref=e890]:
      - heading "Subscription" [level=2] [ref=e891]
      - generic [ref=e892]:
        - textbox "Your email address" [ref=e893]
        - button "" [ref=e894] [cursor=pointer]:
          - generic [ref=e895]: 
        - paragraph [ref=e896]:
          - text: Get the most recent updates from
          - text: our site and be updated your self...
    - paragraph [ref=e900]: Copyright © 2021 All rights reserved
  - text: 
  - generic [ref=e901]:
    - generic [ref=e902] [cursor=pointer]:
      - img [ref=e904]
      - link "Go to shopping options for Test automation courses" [ref=e906]: Test automation courses
    - button "Close shopping anchor" [ref=e907]
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